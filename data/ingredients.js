// Histamin-Verträglichkeitsdatenbank
// Einstufung basiert auf gängigen Histaminintoleranz-Listen (SIGHI-ähnlich) sowie
// auf Standardempfehlungen aus Ratgebern zur Histaminintoleranz.
//
// Bewertung:
//   green  = gut verträglich (histaminarm, kein bekannter Histaminliberator)
//   yellow = bedingt verträglich (schwacher Histaminliberator, individuell)
//   red    = meiden (histaminreich, DAO-Hemmer oder starker Liberator)
//
// Das Feld "keywords" enthält alle Wortformen/Varianten, nach denen im Rezepttext
// gesucht wird. Der Matcher ist case-insensitive und erkennt Wortgrenzen.

window.HISTAMINE_DB = [
  // ========== GRÜN: Gut verträglich ==========

  // Fleisch & Geflügel (frisch)
  { name: "Hähnchen (frisch)", level: "green", keywords: ["hähnchen", "haehnchen", "hähnchenbrust", "hähnchenschenkel", "hühnchen", "huhn", "hühnerbrust", "hühnerfleisch", "poulet"] },
  { name: "Putenfleisch (frisch)", level: "green", keywords: ["pute", "putenbrust", "putenfleisch", "truthahn"] },
  { name: "Rindfleisch (frisch)", level: "green", keywords: ["rindfleisch", "rinderfilet", "rindersteak", "rinderhack", "rind"] },
  { name: "Kalbfleisch", level: "green", keywords: ["kalbfleisch", "kalb", "kalbsschnitzel", "kalbsfilet"] },
  { name: "Lammfleisch (frisch)", level: "green", keywords: ["lamm", "lammfleisch", "lammkotelett", "lammfilet"] },

  // Fisch (nur fangfrisch/tiefgefroren)
  { name: "Forelle (frisch)", level: "green", keywords: ["forelle"] },
  { name: "Kabeljau (frisch)", level: "green", keywords: ["kabeljau", "dorsch"] },
  { name: "Seelachs (frisch)", level: "green", keywords: ["seelachs", "köhler"] },
  { name: "Scholle", level: "green", keywords: ["scholle"] },

  // Getreide & Beilagen
  { name: "Reis", level: "green", keywords: ["reis", "basmati", "basmatireis", "jasminreis", "risotto-reis", "risottoreis", "milchreis"] },
  { name: "Kartoffeln", level: "green", keywords: ["kartoffel", "kartoffeln", "erdäpfel", "erdapfel"] },
  { name: "Hirse", level: "green", keywords: ["hirse"] },
  { name: "Quinoa", level: "green", keywords: ["quinoa"] },
  { name: "Amaranth", level: "green", keywords: ["amaranth"] },
  { name: "Buchweizen", level: "green", keywords: ["buchweizen"] },
  { name: "Haferflocken", level: "green", keywords: ["haferflocken", "hafer"] },
  { name: "Dinkel", level: "green", keywords: ["dinkel", "dinkelmehl"] },
  { name: "Mais", level: "green", keywords: ["mais", "maismehl", "polenta", "maisgrieß", "maisgriess"] },
  { name: "Reisnudeln", level: "green", keywords: ["reisnudeln", "glasnudeln", "mienudeln"] },
  { name: "Speisestärke", level: "green", keywords: ["speisestärke", "speisestaerke", "maisstärke", "maisstaerke", "kartoffelstärke", "kartoffelstaerke", "maizena", "mondamin"] },
  { name: "Wasser", level: "green", keywords: ["wasser", "mineralwasser", "sprudel"] },

  // Gemüse
  { name: "Karotte/Möhre", level: "green", keywords: ["karotte", "karotten", "möhre", "möhren", "moehren", "moehre", "mohrrübe"] },
  { name: "Zucchini", level: "green", keywords: ["zucchini", "zucchino"] },
  { name: "Brokkoli", level: "green", keywords: ["brokkoli", "broccoli"] },
  { name: "Blumenkohl", level: "green", keywords: ["blumenkohl", "karfiol"] },
  { name: "Gurke", level: "green", keywords: ["gurke", "gurken", "salatgurke"] },
  { name: "Paprika", level: "green", keywords: ["paprika", "paprikaschote"] },
  { name: "Kürbis", level: "green", keywords: ["kürbis", "kuerbis", "hokkaido", "butternut"] },
  { name: "Rote Bete", level: "green", keywords: ["rote bete", "rote beete", "rote rübe", "randen"] },
  { name: "Pastinake", level: "green", keywords: ["pastinake", "pastinaken"] },
  { name: "Rettich", level: "green", keywords: ["rettich"] },
  { name: "Radieschen", level: "green", keywords: ["radieschen"] },
  { name: "Fenchel", level: "green", keywords: ["fenchel"] },
  { name: "Mangold", level: "green", keywords: ["mangold"] },
  { name: "Kopfsalat", level: "green", keywords: ["kopfsalat", "eisbergsalat", "eisberg", "feldsalat", "rucola", "romanasalat"] },
  { name: "Lauch/Porree", level: "green", keywords: ["lauch", "porree"] },
  { name: "Zwiebel", level: "green", keywords: ["zwiebel", "zwiebeln", "frühlingszwiebel", "frühlingszwiebeln", "fruehlingszwiebel", "schalotte", "schalotten"] },
  { name: "Knoblauch", level: "green", keywords: ["knoblauch", "knoblauchzehe", "knoblauchzehen"] },
  { name: "Süßkartoffel", level: "green", keywords: ["süßkartoffel", "suesskartoffel", "süsskartoffel", "batate"] },
  { name: "Spargel", level: "green", keywords: ["spargel"] },

  // Obst
  { name: "Apfel", level: "green", keywords: ["apfel", "äpfel", "aepfel", "apfelstücke", "apfelmus"] },
  { name: "Birne", level: "green", keywords: ["birne", "birnen"] },
  { name: "Heidelbeere", level: "green", keywords: ["heidelbeere", "heidelbeeren", "blaubeere", "blaubeeren"] },
  { name: "Mango", level: "green", keywords: ["mango"] },
  { name: "Melone", level: "green", keywords: ["melone", "honigmelone", "wassermelone", "galiamelone"] },
  { name: "Aprikose (frisch)", level: "green", keywords: ["aprikose", "aprikosen", "marille", "marillen"] },
  { name: "Pfirsich", level: "green", keywords: ["pfirsich", "pfirsiche", "nektarine", "nektarinen"] },
  { name: "Litschi", level: "green", keywords: ["litschi", "litschis"] },
  { name: "Granatapfel", level: "green", keywords: ["granatapfel"] },

  // Milchprodukte (frisch, nicht fermentiert)
  { name: "Milch (frisch)", level: "green", keywords: ["milch", "vollmilch", "frischmilch", "h-milch"] },
  { name: "Butter", level: "green", keywords: ["butter"] },
  { name: "Frischkäse", level: "green", keywords: ["frischkäse", "frischkaese"] },
  { name: "Mozzarella (frisch)", level: "green", keywords: ["mozzarella"] },
  { name: "Ricotta", level: "green", keywords: ["ricotta"] },
  { name: "Hüttenkäse", level: "green", keywords: ["hüttenkäse", "huettenkaese", "cottage cheese"] },
  { name: "Mascarpone", level: "green", keywords: ["mascarpone"] },
  { name: "Sahne/Rahm", level: "green", keywords: ["sahne", "schlagsahne", "süßrahm", "schmand", "rahm", "crème fraîche", "creme fraiche"] },
  { name: "Quark", level: "green", keywords: ["quark", "speisequark", "magerquark", "topfen"] },

  // Öle & Fette
  { name: "Olivenöl", level: "green", keywords: ["olivenöl", "olivenoel"] },
  { name: "Rapsöl", level: "green", keywords: ["rapsöl", "rapsoel"] },
  { name: "Kokosöl", level: "green", keywords: ["kokosöl", "kokosoel", "kokosfett"] },
  { name: "Sonnenblumenöl", level: "green", keywords: ["sonnenblumenöl", "sonnenblumenoel"] },
  { name: "Leinöl", level: "green", keywords: ["leinöl", "leinoel"] },

  // Ei
  { name: "Eigelb", level: "green", keywords: ["eigelb", "eidotter", "dotter"] },

  // Kräuter & Gewürze (mild)
  { name: "Basilikum", level: "green", keywords: ["basilikum"] },
  { name: "Petersilie", level: "green", keywords: ["petersilie"] },
  { name: "Schnittlauch", level: "green", keywords: ["schnittlauch"] },
  { name: "Oregano", level: "green", keywords: ["oregano"] },
  { name: "Thymian", level: "green", keywords: ["thymian"] },
  { name: "Rosmarin", level: "green", keywords: ["rosmarin"] },
  { name: "Salbei", level: "green", keywords: ["salbei"] },
  { name: "Majoran", level: "green", keywords: ["majoran"] },
  { name: "Kümmel", level: "green", keywords: ["kümmel", "kuemmel"] },
  { name: "Kardamom", level: "green", keywords: ["kardamom"] },
  { name: "Kurkuma", level: "green", keywords: ["kurkuma"] },
  { name: "Ingwer", level: "green", keywords: ["ingwer"] },
  { name: "Salz", level: "green", keywords: ["salz", "meersalz", "steinsalz"] },
  { name: "Pfeffer (mild)", level: "green", keywords: ["pfeffer", "schwarzer pfeffer", "weißer pfeffer"] },
  { name: "Koriander", level: "green", keywords: ["koriander"] },

  // Süßes
  { name: "Zucker", level: "green", keywords: ["zucker", "rohrzucker", "puderzucker", "kristallzucker"] },
  { name: "Ahornsirup", level: "green", keywords: ["ahornsirup"] },
  { name: "Reissirup", level: "green", keywords: ["reissirup"] },

  // ========== GELB: Bedingt verträglich ==========

  { name: "Weizenmehl", level: "yellow", keywords: ["weizenmehl", "mehl type", "mehl 405", "mehl 550", "weizen"] },
  { name: "Mehl (allgemein)", level: "yellow", keywords: ["mehl"] },
  { name: "Roggen", level: "yellow", keywords: ["roggen", "roggenmehl"] },
  { name: "Hefe (Backhefe)", level: "yellow", keywords: ["hefe", "backhefe", "trockenhefe", "frischhefe"] },
  { name: "Hefeextrakt", level: "yellow", keywords: ["hefeextrakt"] },
  { name: "Eiweiß (Eiklar)", level: "yellow", keywords: ["eiweiß", "eiweiss", "eiklar", "eischnee"] },
  { name: "Ei (ganz)", level: "yellow", keywords: ["ei", "eier"] },
  { name: "Joghurt", level: "yellow", keywords: ["joghurt", "yoghurt"] },
  { name: "Buttermilch", level: "yellow", keywords: ["buttermilch"] },
  { name: "Kefir", level: "yellow", keywords: ["kefir"] },
  { name: "Milder Schnittkäse (jung)", level: "yellow", keywords: ["gouda", "edamer", "butterkäse", "butterkaese"] },
  { name: "Champignons", level: "yellow", keywords: ["champignon", "champignons", "pilze", "pilz", "steinpilz", "pfifferlinge", "austernpilz"] },
  { name: "Birne (reif)", level: "yellow", keywords: ["birnensaft"] },
  { name: "Kürbiskerne", level: "yellow", keywords: ["kürbiskerne", "kuerbiskerne"] },
  { name: "Sonnenblumenkerne", level: "yellow", keywords: ["sonnenblumenkerne"] },
  { name: "Sesam", level: "yellow", keywords: ["sesam"] },
  { name: "Mohn", level: "yellow", keywords: ["mohn", "mohnsamen"] },
  { name: "Hülsenfrüchte (mild)", level: "yellow", keywords: ["linsen", "rote linsen", "gelbe linsen", "belugalinsen"] },
  { name: "Mandelmilch", level: "yellow", keywords: ["mandelmilch"] },
  { name: "Mandeln", level: "yellow", keywords: ["mandel", "mandeln", "mandelsplitter", "mandelblättchen"] },
  { name: "Haselnüsse", level: "yellow", keywords: ["haselnuss", "haselnüsse", "haselnuesse"] },
  { name: "Himbeere", level: "yellow", keywords: ["himbeere", "himbeeren"] },
  { name: "Brombeere", level: "yellow", keywords: ["brombeere", "brombeeren"] },
  { name: "Johannisbeere (rot)", level: "yellow", keywords: ["johannisbeere", "johannisbeeren", "ribisel"] },
  { name: "Kiwi", level: "yellow", keywords: ["kiwi"] },
  { name: "Mais (Konserve)", level: "yellow", keywords: ["maiskonserve", "dosenmais"] },
  { name: "Senf", level: "yellow", keywords: ["senf", "dijon-senf", "dijonsenf"] },
  { name: "Paprikapulver", level: "yellow", keywords: ["paprikapulver", "paprika edelsüß", "paprika edelsuess", "rosenpaprika"] },
  { name: "Vanille", level: "yellow", keywords: ["vanille", "vanilleschote", "vanillezucker", "vanillinzucker"] },
  { name: "Zimt", level: "yellow", keywords: ["zimt"] },
  { name: "Muskat", level: "yellow", keywords: ["muskat", "muskatnuss"] },
  { name: "Lorbeerblatt", level: "yellow", keywords: ["lorbeer", "lorbeerblatt", "lorbeerblätter"] },
  { name: "Kakao (mild/wenig)", level: "yellow", keywords: ["kakaopulver"] },
  { name: "Grüner Tee", level: "yellow", keywords: ["grüner tee", "gruener tee", "matcha"] },
  { name: "Schwarzer Tee", level: "yellow", keywords: ["schwarzer tee", "schwarztee"] },
  { name: "Honig", level: "yellow", keywords: ["honig"] },
  { name: "Sojasahne", level: "yellow", keywords: ["sojasahne", "soja-sahne"] },
  { name: "Reismilch", level: "yellow", keywords: ["reismilch", "reisdrink"] },
  { name: "Hafermilch", level: "yellow", keywords: ["hafermilch", "haferdrink"] },
  { name: "Nudeln/Pasta (Weizen)", level: "yellow", keywords: ["spaghetti", "nudeln", "pasta", "linguine", "penne", "fusilli", "tagliatelle", "farfalle", "makkaroni", "maccheroni", "rigatoni", "bandnudeln", "spätzle", "spaetzle", "tortellini", "ravioli", "gnocchi", "lasagneplatten", "lasagne", "cannelloni", "fettuccine", "rotini", "orzo"] },

  // ========== ROT: Meiden ==========

  // Fermentierte/gereifte Lebensmittel
  { name: "Hartkäse / gereifter Käse", level: "red", keywords: ["parmesan", "grana padano", "pecorino", "bergkäse", "bergkaese", "emmentaler", "gruyère", "gruyere", "cheddar", "manchego", "appenzeller"] },
  { name: "Blauschimmelkäse", level: "red", keywords: ["blauschimmel", "gorgonzola", "roquefort", "stilton", "blue cheese"] },
  { name: "Weichkäse (gereift)", level: "red", keywords: ["camembert", "brie", "weichkäse", "weichkaese"] },
  { name: "Feta", level: "red", keywords: ["feta", "schafskäse", "schafskaese"] },
  { name: "Sauerkraut", level: "red", keywords: ["sauerkraut"] },
  { name: "Kimchi", level: "red", keywords: ["kimchi"] },
  { name: "Essig (Wein-/Balsamico)", level: "red", keywords: ["essig", "balsamico", "weinessig", "aceto balsamico", "balsamico-essig"] },
  { name: "Sojasauce", level: "red", keywords: ["sojasauce", "soja sauce", "sojasosse", "sojasoße", "tamari", "shoyu"] },
  { name: "Miso", level: "red", keywords: ["miso", "misopaste"] },
  { name: "Fischsauce", level: "red", keywords: ["fischsauce", "fischsoße", "fischsosse", "nam pla", "nuoc mam"] },

  // Wurst & Gepökeltes
  { name: "Salami", level: "red", keywords: ["salami"] },
  { name: "Rohschinken/Serrano/Parma", level: "red", keywords: ["rohschinken", "serrano", "serranoschinken", "parmaschinken", "parma-schinken", "prosciutto", "speck", "pancetta", "bündnerfleisch", "buendnerfleisch"] },
  { name: "Geräucherter Schinken", level: "red", keywords: ["räucherschinken", "raeucherschinken", "geräucherter schinken"] },
  { name: "Mettwurst/Teewurst", level: "red", keywords: ["mettwurst", "teewurst"] },
  { name: "Chorizo", level: "red", keywords: ["chorizo"] },
  { name: "Schinkenspeck / Bacon", level: "red", keywords: ["bacon", "frühstücksspeck"] },
  { name: "Leberwurst", level: "red", keywords: ["leberwurst"] },
  { name: "Hackfleisch (abgelagert)", level: "red", keywords: ["hackfleisch", "gehacktes", "faschiertes"] },

  // Fisch (histaminreich)
  { name: "Thunfisch", level: "red", keywords: ["thunfisch", "tuna"] },
  { name: "Makrele", level: "red", keywords: ["makrele"] },
  { name: "Sardine/Sardelle", level: "red", keywords: ["sardine", "sardinen", "sardelle", "sardellen", "anchovis", "anchovies", "anschovis"] },
  { name: "Hering", level: "red", keywords: ["hering", "matjes", "bismarckhering"] },
  { name: "Räucherlachs/Graved Lachs", level: "red", keywords: ["räucherlachs", "raeucherlachs", "graved lachs", "gravlax"] },
  { name: "Meeresfrüchte", level: "red", keywords: ["garnele", "garnelen", "shrimps", "krabbe", "krabben", "hummer", "languste", "tintenfisch", "krake", "oktopus", "muschel", "muscheln", "miesmuscheln"] },

  // Gemüse mit Histamin/Liberatoren
  { name: "Tomate", level: "red", keywords: ["tomate", "tomaten", "tomatensoße", "tomatensauce", "tomatenmark", "passata", "tomatenstücke", "cherrytomaten", "pelati", "ketchup"] },
  { name: "Spinat", level: "red", keywords: ["spinat", "blattspinat"] },
  { name: "Aubergine", level: "red", keywords: ["aubergine", "auberginen", "melanzani"] },
  { name: "Avocado", level: "red", keywords: ["avocado"] },
  { name: "Oliven", level: "red", keywords: ["olive", "oliven"] },
  { name: "Eingelegtes Gemüse", level: "red", keywords: ["gewürzgurken", "essiggurken", "eingelegt", "kapern"] },

  // Hülsenfrüchte
  { name: "Kichererbsen", level: "red", keywords: ["kichererbse", "kichererbsen", "hummus"] },
  { name: "Bohnen", level: "red", keywords: ["bohne", "bohnen", "kidneybohnen", "weiße bohnen", "schwarze bohnen", "borlottibohnen"] },
  { name: "Soja / Tofu", level: "red", keywords: ["soja", "sojabohnen", "tofu", "tempeh", "sojamilch", "sojadrink", "edamame"] },
  { name: "Erbsen", level: "red", keywords: ["erbse", "erbsen"] },
  { name: "Erdnüsse", level: "red", keywords: ["erdnuss", "erdnüsse", "erdnussbutter", "erdnussmus"] },

  // Nüsse
  { name: "Walnüsse", level: "red", keywords: ["walnuss", "walnüsse", "walnuesse"] },
  { name: "Cashewnüsse", level: "red", keywords: ["cashew", "cashews", "cashewnüsse"] },
  { name: "Pistazien", level: "red", keywords: ["pistazie", "pistazien"] },
  { name: "Paranuss", level: "red", keywords: ["paranuss", "paranüsse"] },

  // Obst mit Liberatoren
  { name: "Erdbeere", level: "red", keywords: ["erdbeere", "erdbeeren"] },
  { name: "Zitrone/Zitrusfrüchte", level: "red", keywords: ["zitrone", "zitronensaft", "zitronenschale", "zitronenabrieb", "orange", "orangen", "orangensaft", "grapefruit", "mandarine", "mandarinen", "clementine", "limette", "limetten", "limettensaft"] },
  { name: "Ananas", level: "red", keywords: ["ananas"] },
  { name: "Banane", level: "red", keywords: ["banane", "bananen"] },
  { name: "Papaya", level: "red", keywords: ["papaya"] },
  { name: "Kakifrucht", level: "red", keywords: ["kaki", "sharon"] },
  { name: "Trockenfrüchte", level: "red", keywords: ["rosinen", "sultaninen", "korinthen", "trockenpflaume", "trockenpflaumen", "dörrpflaumen", "datteln", "dattel", "feigen", "getrocknete aprikosen"] },

  // Getränke
  { name: "Rotwein", level: "red", keywords: ["rotwein", "portwein"] },
  { name: "Weißwein", level: "red", keywords: ["weißwein", "weisswein", "sekt", "champagner", "prosecco"] },
  { name: "Bier", level: "red", keywords: ["bier", "weißbier", "pils", "lagerbier"] },
  { name: "Kaffee", level: "red", keywords: ["kaffee", "espresso", "espressopulver", "instant-kaffee"] },
  { name: "Kakao/Schokolade", level: "red", keywords: ["schokolade", "zartbitter", "kuvertüre", "kuvertuere", "schokoraspeln", "schokotropfen"] },
  { name: "Energy Drink", level: "red", keywords: ["energy drink", "energydrink"] },

  // Würzmittel/Zusätze
  { name: "Brühe (Fertig)", level: "red", keywords: ["gemüsebrühe", "gemuesebruehe", "fleischbrühe", "hühnerbrühe", "brühwürfel", "bruehwuerfel", "gemüsebrühwürfel", "maggi", "brühe"] },
  { name: "Glutamat", level: "red", keywords: ["glutamat", "geschmacksverstärker"] },
  { name: "Chili/Cayenne", level: "red", keywords: ["chili", "chilli", "cayennepfeffer", "cayenne", "chiliflocken", "chilipulver", "peperoncino", "peperoni", "sambal oelek", "harissa"] },
  { name: "Currypulver", level: "red", keywords: ["curry", "currypulver", "currypaste"] },
  { name: "Ketchup", level: "red", keywords: ["ketchup"] },
  { name: "Mayonnaise", level: "red", keywords: ["mayonnaise", "mayo"] },
  { name: "Worcestersauce", level: "red", keywords: ["worcester", "worcestersauce", "worcestersoße"] },
];
