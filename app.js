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

  // ---------- Ingredient detection ----------
  function detectInText(haystack) {
    const norm = " " + normalize(haystack).replace(/[^a-z0-9 ]+/g, " ") + " ";
    const matched = new Map(); // entry.name -> entry

    for (const { entry, normalizedKeywords } of KEYWORD_INDEX) {
      for (const kw of normalizedKeywords) {
        const needle = " " + kw.replace(/[^a-z0-9 ]+/g, " ") + " ";
        if (norm.includes(needle)) {
          // If already matched at higher level, skip
          const existing = matched.get(entry.name);
          if (!existing || LEVEL_ORDER[entry.level] > LEVEL_ORDER[existing.level]) {
            matched.set(entry.name, entry);
          }
          break;
        }
      }
    }

    return Array.from(matched.values()).sort(
      (a, b) => LEVEL_ORDER[b.level] - LEVEL_ORDER[a.level]
    );
  }

  // ---------- Ingredient line extraction ----------
  // Takes a blob of text (recipe page text or user input) and tries to extract
  // lines that look like ingredient list items.
  function extractIngredientLines(text) {
    if (!text) return [];
    const lines = text
      .split(/\r?\n/)
      .map((l) => l.replace(/\s+/g, " ").trim())
      .filter(Boolean);

    // Heuristic: ingredient lines often start with a number/amount or unit
    const amountRegex =
      /^(\s*[-*•·]?\s*)?(?:\d+[.,]?\d*\s*\/?\s*\d*\s*)?(g|kg|ml|l|el|tl|prise|prisen|pck|pkt|packung|packungen|bund|stück|stueck|stk|dose|dosen|tasse|tassen|becher|scheibe|scheiben|zehe|zehen|handvoll)?\s+[a-zäöüß]/i;

    const candidates = [];
    for (const line of lines) {
      if (line.length > 160) continue; // too long, probably prose
      if (amountRegex.test(line)) {
        candidates.push(line);
      }
    }
    // Fallback: if we found too few lines, include shorter lines too
    if (candidates.length < 3) {
      return lines.filter((l) => l.length < 140);
    }
    return candidates;
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
      const text = await fetchRecipeText(url);
      const ingredientLines = extractIngredientLines(text);
      const haystack = ingredientLines.join("\n") || text;
      const matches = detectInText(haystack);
      setStatus("");
      renderResults(matches, ingredientLines.join("\n") || text.slice(0, 2000));
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

  // ---------- Service Worker (offline) ----------
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {
        /* offline not critical */
      });
    });
  }
})();
