// Histamin-Checker – App-Logik
(function () {
  "use strict";

  const DB = window.HISTAMINE_DB || [];

  // ---------- DOM helpers ----------
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ---------- Tabs ----------
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      $$(".tab").forEach((t) => t.classList.toggle("is-active", t === tab));
      $$(".tab-content").forEach((c) =>
        c.classList.toggle("is-active", c.dataset.tabContent === target)
      );
    });
  });

  // ---------- Status / UI ----------
  function setStatus(message, type = "info") {
    const el = $("#status");
    if (!message) {
      el.hidden = true;
      el.textContent = "";
      el.className = "status";
      return;
    }
    el.hidden = false;
    el.textContent = message;
    el.className = "status" + (type === "error" ? " is-error" : type === "loading" ? " is-loading" : "");
  }

  function hideResults() {
    $("#results").hidden = true;
  }

  // ---------- Text normalization ----------
  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/ß/g, "ss")
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/[\u0300-\u036f]/g, "") // diacritics
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function normalizeKeyword(kw) {
    return normalize(kw);
  }

  // Prebuild normalized keyword index once
  const KEYWORD_INDEX = DB.map((entry) => ({
    entry,
    normalizedKeywords: entry.keywords.map(normalizeKeyword),
  }));

  // Level priority: red > yellow > green (worst wins if overlap)
  const LEVEL_ORDER = { red: 3, yellow: 2, green: 1 };

  // ---------- Negation handling ----------
  // Strips "ohne X", "kein X", "keine X", "nicht X" clauses so that ingredients
  // in negated phrases (e.g. "Brühe ohne Hefe") aren't falsely matched.
  const NEGATION_REGEX =
    /\b(?:ohne|kein|keine|keinen|keinem|keiner|nicht)\s+[a-zäöüß-]+/gi;

  function stripNegations(line) {
    return line.replace(NEGATION_REGEX, " ");
  }

  // ---------- Ingredient detection ----------
  // Processes text line-by-line so that negations are scoped to a single line
  // and a short note on one line can't affect another ingredient's match.
  function detectInText(text) {
    if (!text) return [];
    const matched = new Map(); // entry.name -> entry
    const lines = text.split(/\r?\n/);

    for (const rawLine of lines) {
      const cleanLine = stripNegations(rawLine);
      const norm =
        " " +
        normalize(cleanLine)
          .replace(/[^a-z0-9 ]+/g, " ")
          .replace(/\s+/g, " ")
          .trim() +
        " ";
      if (norm.trim() === "") continue;

      for (const { entry, normalizedKeywords } of KEYWORD_INDEX) {
        for (const kw of normalizedKeywords) {
          const needle =
            " " +
            kw.replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim() +
            " ";
          if (norm.includes(needle)) {
            const existing = matched.get(entry.name);
            if (
              !existing ||
              LEVEL_ORDER[entry.level] > LEVEL_ORDER[existing.level]
            ) {
              matched.set(entry.name, entry);
            }
            break;
          }
        }
      }
    }

    return Array.from(matched.values()).sort(
      (a, b) => LEVEL_ORDER[b.level] - LEVEL_ORDER[a.level]
    );
  }

  // ---------- Ingredient block extraction ----------
  // Tries to isolate the "Zutaten" / "Ingredients" section of a recipe page so
  // that we don't scan comments, related recipes or nav menus for ingredients.
  function extractIngredientBlock(text) {
    if (!text) return "";
    const headerRegex =
      /(?:^|\n)[^\S\n]*(?:#{1,6}\s*|\*{1,2}\s*)?(zutaten|ingredients)\b[^\n]*(?:\n|$)/i;
    const headerMatch = text.match(headerRegex);
    if (!headerMatch) return "";

    const startIdx = headerMatch.index + headerMatch[0].length;
    const remaining = text.slice(startIdx);

    // End at the next major section / Zubereitung / Kommentare / Nährwerte ...
    const endRegex =
      /\n[^\S\n]*(?:#{1,6}\s*|\*{1,2}\s*)?(zubereitung|anleitung|instructions|directions|preparation|method|tipps?|notes?|ähnlich|verwand|nährwert|naehrwert|kommentar|comment|hinweis|schritt\s*1|empfehlung)\b/i;
    const endMatch = remaining.match(endRegex);

    const block = endMatch
      ? remaining.slice(0, endMatch.index)
      : remaining.slice(0, 3000);
    return block.trim();
  }

  // ---------- Ingredient line extraction ----------
  // Loose heuristic: return non-empty lines short enough to plausibly be
  // ingredient entries. Used only for display, not for detection.
  function extractIngredientLines(text) {
    if (!text) return [];
    return text
      .split(/\r?\n/)
      .map((l) => l.replace(/\s+/g, " ").trim())
      .filter(
        (l) =>
          l.length > 0 &&
          l.length < 140 &&
          /[a-zA-ZÄÖÜäöüß]{3,}/.test(l) &&
          !/^[#*=\-_]+\s*$/.test(l)
      );
  }

  // ---------- Fetching via reader service ----------
  // Uses r.jina.ai – a free reader proxy that returns cleaned markdown of a URL.
  // This avoids CORS issues and gives us readable text instead of raw HTML.
  async function fetchRecipeText(url) {
    const cleanUrl = url.trim().replace(/^https?:\/\//, "");
    const readerUrl = "https://r.jina.ai/https://" + cleanUrl;

    const response = await fetch(readerUrl, {
      headers: { Accept: "text/plain" },
    });
    if (!response.ok) {
      throw new Error("Reader-Dienst lieferte HTTP " + response.status);
    }
    return await response.text();
  }

  // ---------- Rendering ----------
  function renderResults(ingredients, rawText) {
    const results = $("#results");
    results.hidden = false;

    const counts = { green: 0, yellow: 0, red: 0 };
    ingredients.forEach((i) => (counts[i.level] += 1));

    $("#count-green").textContent = counts.green;
    $("#count-yellow").textContent = counts.yellow;
    $("#count-red").textContent = counts.red;

    const total = counts.green + counts.yellow + counts.red || 1;
    $("#bar-green").style.flex = counts.green / total;
    $("#bar-yellow").style.flex = counts.yellow / total;
    $("#bar-red").style.flex = counts.red / total;

    const verdictEl = $("#verdict");
    if (counts.red > 0) {
      verdictEl.textContent = "Eher meiden";
      verdictEl.className = "verdict verdict--red";
    } else if (counts.yellow > 0) {
      verdictEl.textContent = "Mit Vorsicht";
      verdictEl.className = "verdict verdict--yellow";
    } else if (counts.green > 0) {
      verdictEl.textContent = "Gut verträglich";
      verdictEl.className = "verdict verdict--green";
    } else {
      verdictEl.textContent = "Keine Treffer";
      verdictEl.className = "verdict";
    }

    const list = $("#ingredient-list");
    list.innerHTML = "";

    if (ingredients.length === 0) {
      const li = document.createElement("li");
      li.className = "ingredient ingredient--unknown";
      li.innerHTML =
        '<span class="ingredient__name">Keine bekannten Zutaten erkannt.</span>' +
        '<span class="ingredient__label">?</span>';
      list.appendChild(li);
    } else {
      ingredients.forEach((ing) => {
        const li = document.createElement("li");
        li.className = "ingredient ingredient--" + ing.level;
        const label =
          ing.level === "green" ? "gut" : ing.level === "yellow" ? "bedingt" : "meiden";
        li.innerHTML =
          '<span class="ingredient__name">' + escapeHtml(ing.name) + "</span>" +
          '<span class="ingredient__label">' + label + "</span>";
        list.appendChild(li);
      });
    }

    $("#raw-text").textContent = rawText || "(kein Text)";
    results.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---------- Event handlers ----------
  $("#check-url-btn").addEventListener("click", async () => {
    const url = $("#url-input").value.trim();
    if (!url) {
      setStatus("Bitte eine URL eingeben.", "error");
      return;
    }
    if (!/^https?:\/\//i.test(url)) {
      setStatus("Bitte eine vollständige URL mit http:// oder https:// eingeben.", "error");
      return;
    }

    hideResults();
    setStatus("Rezept wird geladen …", "loading");
    try {
      const fullText = await fetchRecipeText(url);
      const block = extractIngredientBlock(fullText);
      let haystack;
      let display;
      if (block) {
        haystack = block;
        display = block;
      } else {
        const lines = extractIngredientLines(fullText);
        haystack = lines.join("\n");
        display = haystack || fullText.slice(0, 2000);
      }
      const matches = detectInText(haystack);
      setStatus("");
      renderResults(matches, display);
    } catch (err) {
      console.error(err);
      setStatus(
        "Konnte das Rezept nicht laden. Manche Seiten blockieren das Abrufen. " +
          "Tipp: Zutatenliste kopieren und im Tab 'Text' einfügen.",
        "error"
      );
    }
  });

  $("#check-text-btn").addEventListener("click", () => {
    const text = $("#text-input").value.trim();
    if (!text) {
      setStatus("Bitte Zutaten einfügen.", "error");
      return;
    }
    hideResults();
    setStatus("");
    const matches = detectInText(text);
    renderResults(matches, text);
  });

  // ---------- Barcode Scanner ----------
  let barcodeScanner = null;
  let scannerActive = false;

  async function stopScanner() {
    if (barcodeScanner && scannerActive) {
      try {
        await barcodeScanner.stop();
        barcodeScanner.clear();
      } catch (e) { /* ignore */ }
      scannerActive = false;
    }
    $("#barcode-reader").hidden = true;
    $("#start-scan-btn").hidden = false;
    $("#stop-scan-btn").hidden = true;
  }

  async function lookupBarcode(barcode) {
    const res = await fetch(
      "https://world.openfoodfacts.org/api/v2/product/" + barcode + ".json"
    );
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    if (data.status !== 1) throw new Error("nicht gefunden");
    return data.product;
  }

  function getProductIngredients(product) {
    return (
      product.ingredients_text_de ||
      product.ingredients_text ||
      (Array.isArray(product.ingredients)
        ? product.ingredients.map((i) => i.text || "").filter(Boolean).join(", ")
        : "")
    );
  }

  $("#start-scan-btn").addEventListener("click", async () => {
    if (typeof Html5Qrcode === "undefined") {
      setStatus("Scanner-Bibliothek konnte nicht geladen werden. Bitte Seite neu laden.", "error");
      return;
    }
    const readerEl = $("#barcode-reader");
    readerEl.hidden = false;
    $("#start-scan-btn").hidden = true;
    $("#stop-scan-btn").hidden = false;
    hideResults();
    setStatus("Kamera wird gestartet …", "loading");

    barcodeScanner = new Html5Qrcode("barcode-reader");
    try {
      await barcodeScanner.start(
        { facingMode: "environment" },
        { fps: 15, qrbox: { width: 280, height: 100 } },
        async (barcode) => {
          await stopScanner();
          await handleBarcodeResult(barcode);
        }
      );
      scannerActive = true;
      setStatus("");
    } catch (err) {
      setStatus(
        "Kamera konnte nicht gestartet werden. Bitte Kamerazugriff im Browser erlauben.",
        "error"
      );
      await stopScanner();
    }
  });

  $("#stop-scan-btn").addEventListener("click", stopScanner);

  // ---------- Foto-Fallback ----------
  async function handleBarcodeResult(barcode) {
    hideResults();
    setStatus("Produkt wird gesucht …", "loading");
    try {
      const product = await lookupBarcode(barcode);
      const ingredientsText = getProductIngredients(product);
      if (!ingredientsText) {
        setStatus(
          "Zutaten für dieses Produkt sind nicht in der Open Food Facts Datenbank.",
          "error"
        );
        return;
      }
      const matches = detectInText(ingredientsText);
      const name = product.product_name_de || product.product_name || "Produkt " + barcode;
      setStatus("");
      renderResults(matches, "Produkt: " + name + "\n\nZutaten:\n" + ingredientsText);
    } catch (err) {
      setStatus(
        "Produkt nicht gefunden (Barcode: " + barcode + ")." +
        " Möglicherweise fehlt das Produkt in der Open Food Facts Datenbank.",
        "error"
      );
    }
  }

  $("#barcode-file").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    e.target.value = "";
    if (typeof Html5Qrcode === "undefined") {
      setStatus("Scanner-Bibliothek konnte nicht geladen werden. Bitte Seite neu laden.", "error");
      return;
    }
    setStatus("Barcode wird ausgelesen …", "loading");
    const tmpScanner = new Html5Qrcode("barcode-reader");
    try {
      const barcode = await tmpScanner.scanFile(file, false);
      await handleBarcodeResult(barcode);
    } catch (err) {
      setStatus("Kein Barcode im Foto gefunden. Bitte nochmal versuchen – möglichst nah und gerade.", "error");
    } finally {
      try { tmpScanner.clear(); } catch (e) { /* ignore */ }
    }
  });

  // Scanner stoppen wenn Tab gewechselt wird
  $$(".tab").forEach((tab) => {
    if (tab.dataset.tab !== "barcode") {
      tab.addEventListener("click", () => { if (scannerActive) stopScanner(); });
    }
  });

  // ---------- Service Worker (offline) ----------
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {
        /* offline not critical */
      });
    });
  }
})();
