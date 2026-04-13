# 🌿 Histamin-Checker

Eine kleine, mobile-freundliche Web-App (PWA), mit der man Rezepte auf
ihre Verträglichkeit bei **Histaminintoleranz** prüfen kann.

## Was die App kann

- **Rezept-URL einfügen** → die App lädt das Rezept (über einen
  Reader-Dienst, der CORS-Probleme umgeht) und extrahiert die Zutatenliste.
- **Zutaten direkt als Text einfügen** → falls eine Seite das Abrufen blockiert.
- **Farbliche Bewertung** jeder erkannten Zutat:
  - 🟢 **Grün** – histaminarm, gut verträglich
  - 🟡 **Gelb** – bedingt verträglich, individuell testen
  - 🔴 **Rot** – histaminreich / Liberator, eher meiden
- **Gesamturteil** mit Zähler und Balkenanzeige.
- **Offline-fähig** (Service Worker), kann als App auf dem Homescreen
  installiert werden (PWA).

## Nutzung

Die App ist statisches HTML/CSS/JS – kein Backend nötig.

1. Alle Dateien auf einem beliebigen Webserver (oder GitHub Pages) ablegen.
2. Die Seite im Handy-Browser öffnen.
3. „Zum Home-Bildschirm hinzufügen" für App-ähnliche Nutzung.

### Lokal ausprobieren

```bash
# Beliebiger kleiner Webserver, z. B.:
python3 -m http.server 8080
# dann http://localhost:8080 öffnen
```

Ein reines `file://` öffnen funktioniert nicht für Service Worker / Fetch –
bitte immer über einen Webserver laden.

## Architektur

```
index.html              UI-Grundgerüst
style.css               Mobile-first Styling, Dark-Mode
app.js                  Tab-Logik, URL-Fetch, Parser, Rendering
data/ingredients.js     Zutaten-DB mit Bewertung (grün/gelb/rot)
manifest.webmanifest    PWA-Manifest
sw.js                   Service Worker für Offline-Cache
icon.svg                App-Icon
```

### Wie das URL-Laden funktioniert

Der Browser darf aus Sicherheitsgründen (CORS) nicht beliebige fremde Seiten
direkt auslesen. Die App benutzt daher den kostenlosen **Reader-Dienst**
`https://r.jina.ai/`, der eine URL abruft und den Inhalt als sauberen
Markdown/Text zurückgibt. Dieser Text wird dann zeilenweise nach bekannten
Zutaten durchsucht.

Wenn das nicht klappt (manche Seiten blockieren Reader), kann man die
Zutatenliste einfach kopieren und im **Text-Tab** einfügen.

### Datenbasis

`data/ingredients.js` enthält eine kuratierte Liste häufiger Zutaten mit
jeweiliger Einstufung, Schreibvarianten und Synonymen. Die Einstufung
orientiert sich an gängigen Histaminintoleranz-Ratgebern (z. B. SIGHI-Liste,
Standardempfehlungen aus deutschsprachigen HIT-Büchern).

Die Datenbank lässt sich leicht erweitern:

```js
{
  name: "Brombeere",
  level: "yellow",                 // "green" | "yellow" | "red"
  keywords: ["brombeere", "brombeeren"]
}
```

## Wichtiger Hinweis

Diese App ersetzt **keine ärztliche oder ernährungstherapeutische Beratung**.
Histaminintoleranz ist sehr individuell – im Zweifel bitte mit Fachpersonen
abklären. Die App ist als Orientierungshilfe gedacht, nicht als medizinische
Empfehlung.
