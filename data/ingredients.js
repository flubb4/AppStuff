// Histamin-Verträglichkeitsdatenbank
// Quelle: »Histaminintoleranz« (ISBN 978-3-7423-0510-7), riva Verlag 2018
// Einstufung basiert auf der offiziellen Histamin-Ampel des Buchs.
//
// Bewertung:
//   green  = gut verträglich
//   yellow = bedingt verträglich (individuell, ausprobieren)
//   red    = kaum verträglich (meiden)
//
// Das Feld "keywords" enthält alle Wortformen/Varianten, nach denen im Rezepttext
// gesucht wird. Der Matcher ist case-insensitive und erkennt Wortgrenzen.

window.HISTAMINE_DB = [
  // ========== GRÜN: Gut verträglich ==========

  // Fleisch & Geflügel (sehr frisch, naturbelassen)
  { name: "Hähnchen / Geflügel (frisch)", level: "green", keywords: ["hähnchen", "haehnchen", "hähnchenbrust", "hähnchenschenkel", "hühnchen", "huhn", "hühnerbrust", "hühnerfleisch", "poulet"] },
  { name: "Putenfleisch (frisch)", level: "green", keywords: ["pute", "putenbrust", "putenfleisch", "truthahn"] },
  { name: "Rindfleisch (frisch)", level: "green", keywords: ["rindfleisch", "rinderfilet", "rindersteak", "rind"] },
  { name: "Kalbfleisch (frisch)", level: "green", keywords: ["kalbfleisch", "kalb", "kalbsschnitzel", "kalbsfilet"] },
  { name: "Lammfleisch (frisch)", level: "green", keywords: ["lamm", "lammfleisch", "lammkotelett", "lammfilet"] },
  { name: "Kochschinken", level: "green", keywords: ["kochschinken"] },

  // Fisch (fangfrisch oder sofort nach dem Auftauen zubereitet)
  { name: "Forelle (frisch)", level: "green", keywords: ["forelle"] },
  { name: "Kabeljau / Dorsch (frisch)", level: "green", keywords: ["kabeljau", "dorsch"] },
  { name: "Seelachs (frisch)", level: "green", keywords: ["seelachs", "köhler"] },
  { name: "Scholle (frisch)", level: "green", keywords: ["scholle"] },

  // Ei
  { name: "Eigelb", level: "green", keywords: ["eigelb", "eidotter", "dotter"] },

  // Getreide & Beilagen
  { name: "Reis", level: "green", keywords: ["reis", "basmati", "basmatireis", "jasminreis", "risottoreis", "milchreis", "reismehl"] },
  { name: "Kartoffeln", level: "green", keywords: ["kartoffel", "kartoffeln", "erdäpfel"] },
  { name: "Hirse", level: "green", keywords: ["hirse", "hirseflocken"] },
  { name: "Quinoa", level: "green", keywords: ["quinoa"] },
  { name: "Amaranth", level: "green", keywords: ["amaranth"] },
  { name: "Buchweizen", level: "green", keywords: ["buchweizen", "buchweizenmehl"] },
  { name: "Hafer", level: "green", keywords: ["haferflocken", "hafer", "haferkleie", "hafermehl"] },
  { name: "Dinkel", level: "green", keywords: ["dinkel", "dinkelmehl", "dinkelgrieß"] },
  { name: "Maismehl / Polenta", level: "green", keywords: ["maismehl", "polenta", "maisgrieß"] },
  { name: "Roggen", level: "green", keywords: ["roggen", "roggenmehl", "roggenbrot"] },
  { name: "Bulgur", level: "green", keywords: ["bulgur"] },
  { name: "Couscous", level: "green", keywords: ["couscous"] },
  { name: "Grünkern", level: "green", keywords: ["grünkern"] },
  { name: "Tapioka / Sago", level: "green", keywords: ["tapioka", "sagomehl", "perlsago"] },
  { name: "Kastanienmehl", level: "green", keywords: ["kastanienmehl"] },
  { name: "Reisnudeln / Glasnudeln", level: "green", keywords: ["reisnudeln", "glasnudeln", "mienudeln"] },
  { name: "Speisestärke", level: "green", keywords: ["speisestärke", "maisstärke", "kartoffelstärke", "maizena", "mondamin"] },
  { name: "Wasser", level: "green", keywords: ["leitungswasser", "stilles mineralwasser"] },

  // Gemüse (gut verträglich)
  { name: "Artischocke", level: "green", keywords: ["artischocke", "artischocken"] },
  { name: "Blattsalat / Kopfsalat", level: "green", keywords: ["kopfsalat", "eisbergsalat", "feldsalat", "endiviensalat", "blattsalat", "romanasalat", "chinasalat"] },
  { name: "Blumenkohl", level: "green", keywords: ["blumenkohl", "karfiol"] },
  { name: "Bohnen (grün, frisch/TK)", level: "green", keywords: ["grüne bohnen", "fisolen", "buschbohnen", "brechbohnen", "stangenbohnen"] },
  { name: "Brokkoli", level: "green", keywords: ["brokkoli", "broccoli"] },
  { name: "Brunnenkresse", level: "green", keywords: ["brunnenkresse", "kresse"] },
  { name: "Chinakohl / Pak Choi", level: "green", keywords: ["chinakohl", "paksoi", "pak choi"] },
  { name: "Fenchel", level: "green", keywords: ["fenchel"] },
  { name: "Gurke (frisch)", level: "green", keywords: ["salatgurke", "gurke"] },
  { name: "Karotte / Möhre", level: "green", keywords: ["karotte", "karotten", "möhre", "möhren", "mohrrübe"] },
  { name: "Kartoffel", level: "green", keywords: ["kartoffel", "kartoffeln"] },
  { name: "Kürbis", level: "green", keywords: ["kürbis", "hokkaido", "butternut"] },
  { name: "Mais (frisch/TK)", level: "green", keywords: ["maiskolben", "zuckermais", "mais"] },
  { name: "Mangold", level: "green", keywords: ["mangold"] },
  { name: "Paprika (alle Farben)", level: "green", keywords: ["paprikaschote", "paprika"] },
  { name: "Pastinake", level: "green", keywords: ["pastinake", "pastinaken"] },
  { name: "Peperoni (mild)", level: "green", keywords: ["peperoni mild", "milde peperoni"] },
  { name: "Radieschen", level: "green", keywords: ["radieschen"] },
  { name: "Rettich", level: "green", keywords: ["rettich"] },
  { name: "Rote Bete", level: "green", keywords: ["rote bete", "rote beete", "rote rübe", "randen"] },
  { name: "Rotkohl", level: "green", keywords: ["rotkohl", "rotkraut", "blaukraut"] },
  { name: "Schalotte", level: "green", keywords: ["schalotte", "schalotten"] },
  { name: "Schwarzwurzel", level: "green", keywords: ["schwarzwurzel"] },
  { name: "Sellerie", level: "green", keywords: ["sellerie", "staudensellerie", "bleichsellerie"] },
  { name: "Spargel", level: "green", keywords: ["spargel"] },
  { name: "Spitzkohl", level: "green", keywords: ["spitzkohl"] },
  { name: "Süßkartoffel", level: "green", keywords: ["süßkartoffel", "batate"] },
  { name: "Weißkohl", level: "green", keywords: ["weißkohl", "weißkraut"] },
  { name: "Zwiebel", level: "green", keywords: ["zwiebel", "zwiebeln", "frühlingszwiebel", "frühlingszwiebeln"] },
  { name: "Zucchini", level: "green", keywords: ["zucchini", "zucchino"] },

  // Obst (gut verträglich)
  { name: "Apfel", level: "green", keywords: ["apfel", "äpfel", "apfelstücke", "apfelmus"] },
  { name: "Aprikose (frisch)", level: "green", keywords: ["aprikose", "aprikosen", "marille", "marillen"] },
  { name: "Heidelbeere / Blaubeere", level: "green", keywords: ["heidelbeere", "heidelbeeren", "blaubeere", "blaubeeren"] },
  { name: "Brombeere", level: "green", keywords: ["brombeere", "brombeeren"] },
  { name: "Cranberry", level: "green", keywords: ["cranberry", "cranberrys", "cranberries", "moosbeere"] },
  { name: "Dattel", level: "green", keywords: ["dattel", "datteln"] },
  { name: "Feige (frisch)", level: "green", keywords: ["feige frisch", "frische feige", "frischen feigen"] },
  { name: "Granatapfel", level: "green", keywords: ["granatapfel"] },
  { name: "Johannisbeere", level: "green", keywords: ["johannisbeere", "johannisbeeren", "ribisel", "jostabeere", "jostabeeren"] },
  { name: "Kaki / Sharon", level: "green", keywords: ["kaki", "sharon"] },
  { name: "Kirsche", level: "green", keywords: ["kirsche", "kirschen", "sauerkirsche", "süßkirsche"] },
  { name: "Kokosnuss / Kokosfett", level: "green", keywords: ["kokosnuss", "kokosflocken", "kokosraspeln", "kokosfett", "kokosöl", "kokosnussöl", "kokosnussfett"] },
  { name: "Litschi", level: "green", keywords: ["litschi", "litschis"] },
  { name: "Melone", level: "green", keywords: ["melone", "honigmelone", "galiamelone", "wassermelone"] },
  { name: "Nektarine", level: "green", keywords: ["nektarine", "nektarinen"] },
  { name: "Pfirsich", level: "green", keywords: ["pfirsich", "pfirsiche"] },
  { name: "Preiselbeere", level: "green", keywords: ["preiselbeere", "preiselbeeren"] },
  { name: "Rosinen (ungeschwefelt)", level: "green", keywords: ["rosinen ungeschwefelt", "ungeschwefelte rosinen"] },
  { name: "Sanddorn", level: "green", keywords: ["sanddorn"] },
  { name: "Weintraube", level: "green", keywords: ["weintraube", "weintrauben", "trauben"] },

  // Milchprodukte (frisch, nicht fermentiert)
  { name: "Milch (frisch/haltbar)", level: "green", keywords: ["milch", "vollmilch", "frischmilch", "h-milch", "magermilch", "magermilchpulver", "vollmilchpulver", "milchpulver", "molke", "molkenpulver", "molkenerzeugnis", "buttermilchpulver"] },
  { name: "Kokosmilch", level: "green", keywords: ["kokosmilch"] },
  { name: "Sahne", level: "green", keywords: ["sahne", "schlagsahne", "schmand"] },
  { name: "Frischkäse", level: "green", keywords: ["frischkäse"] },
  { name: "Hüttenkäse / Körniger Frischkäse", level: "green", keywords: ["hüttenkäse", "cottage cheese", "körniger frischkäse", "schichtkäse"] },
  { name: "Mascarpone", level: "green", keywords: ["mascarpone"] },
  { name: "Mozzarella (frisch)", level: "green", keywords: ["mozzarella"] },
  { name: "Ricotta", level: "green", keywords: ["ricotta"] },
  { name: "Quark / Speisequark", level: "green", keywords: ["quark", "speisequark", "magerquark", "topfen"] },
  { name: "Ziegenfrischkäse", level: "green", keywords: ["ziegenfrischkäse"] },
  { name: "Butterkäse", level: "green", keywords: ["butterkäse"] },

  // Öle & Fette (gut verträglich)
  { name: "Olivenöl", level: "green", keywords: ["olivenöl"] },
  { name: "Rapsöl", level: "green", keywords: ["rapsöl"] },
  { name: "Maiskeimöl", level: "green", keywords: ["maiskeimöl"] },
  { name: "Margarine", level: "green", keywords: ["margarine"] },
  { name: "Butter", level: "green", keywords: ["butter", "süßrahmbutter", "sauerrahmbutter", "landbutter"] },

  // Kräuter & Gewürze (gut verträglich)
  { name: "Basilikum", level: "green", keywords: ["basilikum"] },
  { name: "Petersilie", level: "green", keywords: ["petersilie"] },
  { name: "Schnittlauch", level: "green", keywords: ["schnittlauch"] },
  { name: "Oregano", level: "green", keywords: ["oregano"] },
  { name: "Thymian", level: "green", keywords: ["thymian"] },
  { name: "Rosmarin", level: "green", keywords: ["rosmarin"] },
  { name: "Salbei", level: "green", keywords: ["salbei"] },
  { name: "Majoran", level: "green", keywords: ["majoran"] },
  { name: "Kümmel", level: "green", keywords: ["kümmel"] },
  { name: "Kardamom", level: "green", keywords: ["kardamom"] },
  { name: "Kurkuma", level: "green", keywords: ["kurkuma"] },
  { name: "Koriander", level: "green", keywords: ["koriander"] },
  { name: "Salz", level: "green", keywords: ["salz", "meersalz", "steinsalz"] },
  { name: "Paprikapulver (mild)", level: "green", keywords: ["paprikapulver", "paprika edelsüß", "rosenpaprika"] },
  { name: "Branntweinessig / Essigessenz", level: "green", keywords: ["branntweinessig", "essigessenz"] },

  // Öle & Fette (gut verträglich)
  { name: "Rapsöl", level: "green", keywords: ["rapsöl", "rapsoel"] },
  { name: "Palmöl / Palmkernöl", level: "green", keywords: ["palmöl", "palmkernöl", "palmfett", "palmkernfett"] },
  { name: "Olivenöl", level: "green", keywords: ["olivenöl", "extra vergine"] },

  // Backzutaten (gut verträglich)
  { name: "Gelatine", level: "green", keywords: ["gelatine"] },
  { name: "Natron", level: "green", keywords: ["natron"] },
  { name: "Weinsteinbackpulver", level: "green", keywords: ["weinsteinbackpulver"] },

  // Süßungsmittel (gut verträglich)
  { name: "Zucker", level: "green", keywords: ["zucker", "rohrzucker", "puderzucker", "kristallzucker", "brauner zucker", "gelierzucker", "fruchtzucker", "kokosblütenzucker", "glukosesirup", "glukose", "fruktosesirup", "glukose-fruktose-sirup", "isoglukose", "invertzucker", "invertzuckersirup", "dextrose", "maltodextrin", "laktose"] },
  { name: "Ahornsirup", level: "green", keywords: ["ahornsirup"] },
  { name: "Honig", level: "green", keywords: ["honig"] },
  { name: "Reissirup", level: "green", keywords: ["reissirup"] },

  // Getränke (gut verträglich)
  { name: "Cranberrysaft", level: "green", keywords: ["cranberrysaft"] },
  { name: "Holunderblütensirup", level: "green", keywords: ["holunderblütensirup", "holundersirup", "holunderblüten"] },
  { name: "Pfefferminztee / Rooibos / Lindenblüten", level: "green", keywords: ["pfefferminztee", "pfefferminze", "rooibos", "lindenblüten", "lindenblütentee", "eisenkraut", "verbene"] },


  // ========== GELB: Bedingt verträglich ==========

  // Fleisch (bedingt verträglich)
  { name: "Schweinefleisch (sehr frisch)", level: "yellow", keywords: ["schweinefleisch", "schweineschnitzel", "schweinefilet", "schweinekotelett", "schweinebraten"] },
  { name: "Wild (sehr frisch)", level: "yellow", keywords: ["wildfleisch", "hirsch", "reh", "wildschwein", "fasan"] },
  { name: "Hackfleisch (frisch verpackt)", level: "yellow", keywords: ["hackfleisch", "gehacktes", "faschiertes", "rinderhack", "gemischtes hack"] },
  { name: "Kochwurst / Frischwurstaufschnitt", level: "yellow", keywords: ["kochwurst", "frischwurst", "mortadella", "lyoner"] },

  // Fisch (bedingt verträglich)
  { name: "Tintenfisch (fangfrisch)", level: "yellow", keywords: ["tintenfischringe"] },

  // Eier (bedingt verträglich)
  { name: "Hühnerei (ganz) / Eiweiß", level: "yellow", keywords: ["eier", "eiweiß", "eiklar", "eischnee", "wachteleier"] },

  // Gemüse (bedingt verträglich)
  { name: "Erbsen (frisch/TK)", level: "yellow", keywords: ["erbsen frisch", "tiefkühlerbsen", "zuckerschoten"] },
  { name: "Grünkohl", level: "yellow", keywords: ["grünkohl"] },
  { name: "Knoblauch", level: "yellow", keywords: ["knoblauch", "knoblauchzehe", "knoblauchzehen"] },
  { name: "Kohlrabi", level: "yellow", keywords: ["kohlrabi"] },
  { name: "Lauch / Porree", level: "yellow", keywords: ["lauch", "porree"] },
  { name: "Rosenkohl", level: "yellow", keywords: ["rosenkohl"] },
  { name: "Zwiebel (rot/braun)", level: "yellow", keywords: ["rote zwiebel", "rote zwiebeln", "braune zwiebel", "gemüsezwiebel"] },
  { name: "Pfifferling / Shiitake", level: "yellow", keywords: ["pfifferling", "pfifferlinge", "eierschwamm", "shiitake", "austernpilz", "austernpilze"] },

  // Obst (bedingt verträglich)
  { name: "Birne", level: "yellow", keywords: ["birne", "birnen", "birnensaft"] },
  { name: "Feige (getrocknet)", level: "yellow", keywords: ["getrocknete feige", "feige getrocknet", "dörrfeige"] },
  { name: "Hagebutte", level: "yellow", keywords: ["hagebutte", "hagebutten", "hagebuttentee"] },
  { name: "Mango", level: "yellow", keywords: ["mango"] },
  { name: "Pflaume / Zwetschge", level: "yellow", keywords: ["pflaume", "pflaumen", "zwetschge", "zwetschgen", "dörrpflaume"] },
  { name: "Rhabarber", level: "yellow", keywords: ["rhabarber"] },
  { name: "Cashewkerne", level: "yellow", keywords: ["cashew", "cashews", "cashewnüsse", "cashewkerne"] },
  { name: "Haselnüsse", level: "yellow", keywords: ["haselnuss", "haselnüsse"] },
  { name: "Mandeln", level: "yellow", keywords: ["mandel", "mandeln", "mandelsplitter", "mandelblättchen", "mandelmilch"] },
  { name: "Mohn", level: "yellow", keywords: ["mohn", "mohnsamen"] },

  // Milchprodukte (bedingt verträglich)
  { name: "Joghurt", level: "yellow", keywords: ["joghurt", "yoghurt"] },
  { name: "Buttermilch", level: "yellow", keywords: ["buttermilch"] },
  { name: "Kefir / Dickmilch", level: "yellow", keywords: ["kefir", "dickmilch", "sauermilch"] },
  { name: "Crème fraîche", level: "yellow", keywords: ["crème fraîche", "creme fraiche"] },
  { name: "Schafskäse / Feta", level: "yellow", keywords: ["feta", "schafskäse"] },
  { name: "Raclette-Käse", level: "yellow", keywords: ["raclette"] },
  { name: "Haferdrink", level: "yellow", keywords: ["hafermilch", "haferdrink"] },
  { name: "Reisdrink", level: "yellow", keywords: ["reismilch", "reisdrink"] },
  { name: "Laktosefreie Milch", level: "yellow", keywords: ["laktosefrei"] },

  // Zusatzstoffe & Aromen (bedingt verträglich)
  { name: "Aroma / Aromen", level: "yellow", keywords: ["aroma", "aromen", "natürliches aroma", "natürliche aromen", "aromastoffe"] },
  { name: "Kakaobutter", level: "yellow", keywords: ["kakaobutter", "kakao butter"] },
  { name: "Lecithin (Sonnenblume)", level: "yellow", keywords: ["lecithin", "sonnenblumenlecithin"] },
  { name: "Malzextrakt / Gerstenmalz", level: "yellow", keywords: ["malzextrakt", "gerstenmalz", "malz", "weizenmalz"] },
  { name: "Emulgator", level: "yellow", keywords: ["emulgator", "e471", "e472", "e473", "e474", "e475", "e476", "e481", "e482"] },
  { name: "Verdickungsmittel / Stabilisator", level: "yellow", keywords: ["verdickungsmittel", "stabilisator", "xanthan", "guar", "johannisbrotkernmehl", "pektin", "carrageen", "carrageenan", "agar", "e407", "e410", "e412", "e415", "e440"] },
  { name: "Farbstoffe (künstlich)", level: "yellow", keywords: ["farbstoff", "e100", "e101", "e102", "e104", "e110", "e120", "e122", "e123", "e124", "e129", "e131", "e132", "e133", "e150", "e151", "e153", "e160", "e161", "e162", "e163", "e170", "e171", "e172"] },

  // Getreide (bedingt verträglich)
  { name: "Weizen / Weizenmehl", level: "yellow", keywords: ["weizenmehl", "mehl type", "mehl 405", "mehl 550", "weizen", "mehl"] },
  { name: "Nudeln / Pasta (Weizen)", level: "yellow", keywords: ["spaghetti", "nudeln", "pasta", "linguine", "penne", "fusilli", "tagliatelle", "farfalle", "makkaroni", "maccheroni", "rigatoni", "bandnudeln", "spätzle", "tortellini", "ravioli", "gnocchi", "lasagneplatten", "lasagne", "cannelloni", "fettuccine"] },

  // Fette (bedingt verträglich)
  { name: "Sonnenblumenöl", level: "yellow", keywords: ["sonnenblumenöl"] },

  // Gewürze (bedingt verträglich)
  { name: "Ingwer", level: "yellow", keywords: ["ingwer"] },
  { name: "Muskat", level: "yellow", keywords: ["muskat", "muskatnuss"] },
  { name: "Pfeffer", level: "yellow", keywords: ["pfeffer", "schwarzer pfeffer", "weißer pfeffer", "pfefferkörner"] },
  { name: "Vanille", level: "yellow", keywords: ["vanille", "vanilleschote", "vanillezucker", "vanillinzucker"] },
  { name: "Zimt", level: "yellow", keywords: ["zimt"] },
  { name: "Senf", level: "yellow", keywords: ["senf", "dijon-senf", "dijonsenf"] },
  { name: "Apfelessig", level: "yellow", keywords: ["apfelessig"] },
  { name: "Backpulver", level: "yellow", keywords: ["backpulver"] },
  { name: "Lorbeerblatt", level: "yellow", keywords: ["lorbeer", "lorbeerblatt", "lorbeerblätter"] },

  // Getränke (bedingt verträglich)
  { name: "Kaffee / Espresso", level: "yellow", keywords: ["kaffee", "espresso", "espressopulver", "instant-kaffee"] },
  { name: "Grüner Tee / Matcha", level: "yellow", keywords: ["grüner tee", "matcha"] },
  { name: "Kräutertee (allgemein)", level: "yellow", keywords: ["kräutertee"] },
  { name: "Cola / Limonade", level: "yellow", keywords: ["cola", "limonade"] },
  { name: "Mineralwasser (mit Kohlensäure)", level: "yellow", keywords: ["mineralwasser", "sprudelwasser", "sprudel"] },


  // ========== ROT: Kaum verträglich / Meiden ==========

  // Käse (gereift / fermentiert)
  { name: "Hartkäse / gereifter Käse", level: "red", keywords: ["parmesan", "grana padano", "pecorino", "bergkäse", "gruyère", "gruyere", "cheddar", "manchego", "appenzeller", "chester", "emmentaler"] },
  { name: "Gouda (mittelalter/alter)", level: "red", keywords: ["gouda", "edamer"] },
  { name: "Blauschimmelkäse", level: "red", keywords: ["blauschimmel", "gorgonzola", "roquefort", "stilton", "blue cheese"] },
  { name: "Weichkäse (gereift)", level: "red", keywords: ["camembert", "brie"] },
  { name: "Schmelzkäse / Streichkäse", level: "red", keywords: ["schmelzkäse", "streichkäse", "käsezubereitung"] },

  // Fermentiertes
  { name: "Sauerkraut", level: "red", keywords: ["sauerkraut"] },
  { name: "Kimchi", level: "red", keywords: ["kimchi"] },

  // Essig (außer Branntweinessig/Apfelessig)
  { name: "Balsamico / Weinessig", level: "red", keywords: ["balsamico", "weinessig", "aceto balsamico", "rotweinessig", "weißweinessig", "sherryessig", "essig"] },

  // Würzmittel / Saucen
  { name: "Sojasauce", level: "red", keywords: ["sojasauce", "sojasoße", "tamari", "shoyu"] },
  { name: "Miso", level: "red", keywords: ["miso", "misopaste"] },
  { name: "Fischsauce", level: "red", keywords: ["fischsauce", "nam pla", "nuoc mam"] },
  { name: "Austernsauce", level: "red", keywords: ["austernsauce"] },
  { name: "Worcestersauce", level: "red", keywords: ["worcester", "worcestersauce"] },
  { name: "Ketchup", level: "red", keywords: ["ketchup"] },
  { name: "Mayonnaise", level: "red", keywords: ["mayonnaise", "mayo"] },
  { name: "Chutney / Relish", level: "red", keywords: ["chutney", "relish"] },
  { name: "Fertigsauce / Fertigdressing", level: "red", keywords: ["fertigsauce", "fertigdressing", "grillsauce", "barbecuesauce"] },
  { name: "Glutamat", level: "red", keywords: ["glutamat", "geschmacksverstärker"] },
  { name: "Tomatenmark", level: "red", keywords: ["tomatenmark", "passata"] },
  { name: "Senfkörner", level: "red", keywords: ["senfkörner"] },

  // Brühe & Hefeprodukte
  { name: "Brühe / Brühwürfel", level: "red", keywords: ["gemüsebrühe", "fleischbrühe", "hühnerbrühe", "brühwürfel", "instantbrühe", "fleischextrakt", "maggi", "brühe"] },
  { name: "Hefeextrakt", level: "red", keywords: ["hefeextrakt"] },
  { name: "Hefe", level: "red", keywords: ["hefe", "backhefe", "trockenhefe", "frischhefe"] },

  // Backzutaten (kaum verträglich)
  { name: "Kakao / Kakaomasse", level: "red", keywords: ["kakaopulver", "kakao", "kakaomasse", "kakaoextrakt", "kakaoanteil"] },
  { name: "Schokolade / Kuvertüre", level: "red", keywords: ["schokolade", "zartbitter", "kuvertüre", "schokoraspeln", "schokotropfen", "vollmilchschokolade", "zartbitterschokolade", "weißschokolade", "schokoladenüberzug", "schokoladenglasur", "kakaoglasur"] },
  { name: "Künstliche Süßstoffe", level: "red", keywords: ["süßstoff", "aspartam", "saccharin"] },

  // Chili & Curry
  { name: "Chili / Cayenne", level: "red", keywords: ["chili", "chilli", "cayennepfeffer", "cayenne", "chiliflocken", "chilipulver", "peperoncino", "sambal oelek", "harissa"] },
  { name: "Currypulver / Currypaste", level: "red", keywords: ["curry", "currypulver", "currypaste"] },

  // Wurst & Gepökeltes
  { name: "Salami", level: "red", keywords: ["salami"] },
  { name: "Rohschinken / Serrano / Parma", level: "red", keywords: ["rohschinken", "serrano", "serranoschinken", "parmaschinken", "prosciutto", "bündnerfleisch"] },
  { name: "Geräucherter Schinken / Räucherwurst", level: "red", keywords: ["räucherschinken", "geräucherter schinken", "rauchschinken"] },
  { name: "Speck / Bacon", level: "red", keywords: ["speck", "bacon", "frühstücksspeck", "pancetta"] },
  { name: "Streichwurst / Leberwurst", level: "red", keywords: ["mettwurst", "teewurst", "leberwurst", "streichwurst"] },
  { name: "Bratwurst / Bockwurst / Wiener", level: "red", keywords: ["bratwurst", "bockwurst", "wiener würstchen", "frankfurter"] },
  { name: "Chorizo", level: "red", keywords: ["chorizo"] },
  { name: "Fleischkäse / Leberkäse", level: "red", keywords: ["fleischkäse", "leberkäse"] },
  { name: "Innereien (Leber etc.)", level: "red", keywords: ["innereien", "leber", "niere"] },

  // Fisch (histaminreich)
  { name: "Lachs", level: "red", keywords: ["lachs", "lachsfilet"] },
  { name: "Thunfisch", level: "red", keywords: ["thunfisch", "tuna"] },
  { name: "Makrele", level: "red", keywords: ["makrele"] },
  { name: "Sardine / Sardelle", level: "red", keywords: ["sardine", "sardinen", "sardelle", "sardellen", "anchovis", "anchovies"] },
  { name: "Hering / Matjes", level: "red", keywords: ["hering", "matjes", "bismarckhering"] },
  { name: "Räucherfisch / Räucherlachs", level: "red", keywords: ["räucherlachs", "graved lachs", "gravlax", "räucherfisch", "stockfisch"] },
  { name: "Meeresfrüchte", level: "red", keywords: ["garnele", "garnelen", "shrimps", "scampi", "gambas", "krabbe", "krabben", "hummer", "krebs", "krebse", "languste", "krake", "oktopus", "muschel", "muscheln", "miesmuscheln"] },
  { name: "Fischkonserven / Fischsalat", level: "red", keywords: ["fischkonserve", "fischsalat", "dosenfisch"] },

  // Gemüse (kaum verträglich)
  { name: "Tomate", level: "red", keywords: ["tomate", "tomaten", "tomatensoße", "tomatensauce", "tomatenstücke", "cherrytomaten", "pelati"] },
  { name: "Spinat", level: "red", keywords: ["spinat", "blattspinat"] },
  { name: "Aubergine", level: "red", keywords: ["aubergine", "auberginen", "melanzani"] },
  { name: "Avocado", level: "red", keywords: ["avocado"] },
  { name: "Oliven", level: "red", keywords: ["olive", "oliven"] },
  { name: "Rucola", level: "red", keywords: ["rucola", "rauke"] },
  { name: "Eingelegtes Gemüse (Essig)", level: "red", keywords: ["gewürzgurken", "essiggurken", "kapern", "saure gurken"] },
  { name: "Champignons / Steinpilze / Morcheln", level: "red", keywords: ["champignon", "champignons", "pilze", "pilz", "steinpilz", "steinpilze", "morchel", "morcheln"] },

  // Hülsenfrüchte (kaum verträglich)
  { name: "Kichererbsen", level: "red", keywords: ["kichererbse", "kichererbsen", "hummus", "kichererbsenmehl"] },
  { name: "Bohnen (getrocknet / Konserve)", level: "red", keywords: ["kidneybohnen", "weiße bohnen", "schwarze bohnen", "borlottibohnen", "bohnenkonserve"] },
  { name: "Linsen", level: "red", keywords: ["linsen", "rote linsen", "gelbe linsen", "belugalinsen"] },
  { name: "Erbsen (getrocknet)", level: "red", keywords: ["erbsen"] },
  { name: "Soja / Tofu", level: "red", keywords: ["soja", "sojabohnen", "tofu", "tempeh", "sojamilch", "sojadrink", "edamame", "sojajoghurt", "sojasahne", "sojalecithin", "sojaprotein", "sojaextrakt"] },
  { name: "Erdnüsse", level: "red", keywords: ["erdnuss", "erdnüsse", "erdnussbutter", "erdnussmus"] },

  // Nüsse (kaum verträglich)
  { name: "Walnüsse", level: "red", keywords: ["walnuss", "walnüsse"] },
  { name: "Pistazien", level: "red", keywords: ["pistazie", "pistazien"] },
  { name: "Paranuss", level: "red", keywords: ["paranuss", "paranüsse"] },
  { name: "Sonnenblumenkerne", level: "red", keywords: ["sonnenblumenkerne"] },

  // Obst (kaum verträglich)
  { name: "Erdbeere", level: "red", keywords: ["erdbeere", "erdbeeren"] },
  { name: "Himbeere", level: "red", keywords: ["himbeere", "himbeeren"] },
  { name: "Zitrusfrüchte", level: "red", keywords: ["zitrone", "zitronensaft", "zitronenschale", "orange", "orangen", "orangensaft", "grapefruit", "mandarine", "mandarinen", "clementine", "limette", "limetten", "apfelsine", "pampelmuse", "pomelo"] },
  { name: "Ananas", level: "red", keywords: ["ananas"] },
  { name: "Banane", level: "red", keywords: ["banane", "bananen"] },
  { name: "Papaya", level: "red", keywords: ["papaya"] },
  { name: "Kiwi", level: "red", keywords: ["kiwi"] },
  { name: "Trockenfrüchte (geschwefelt) / Konfitüren", level: "red", keywords: ["getrocknete aprikosen", "korinthen", "sultaninen", "konfitüre", "marmelade"] },

  // Getränke (kaum verträglich)
  { name: "Rotwein / Portwein", level: "red", keywords: ["rotwein", "portwein"] },
  { name: "Weißwein / Sekt / Champagner", level: "red", keywords: ["weißwein", "sekt", "champagner", "prosecco"] },
  { name: "Bier", level: "red", keywords: ["bier", "weißbier", "pils", "lagerbier"] },
  { name: "Energy Drink", level: "red", keywords: ["energy drink", "energydrink"] },
  { name: "Schwarzer Tee", level: "red", keywords: ["schwarzer tee", "schwarztee"] },
  { name: "Kakaogetränk / Trinkschokolade", level: "red", keywords: ["kakaogetränk", "trinkschokolade", "heißer kakao"] },
  { name: "Tomatensaft / Zitrusfruchtsaft", level: "red", keywords: ["tomatensaft", "zitrusfruchtsaft"] },

  // Fette (kaum verträglich)
  { name: "Sojaöl / Walnussöl / Erdnussöl", level: "red", keywords: ["sojaöl", "walnussöl", "erdnussöl"] },
  { name: "Schmalz", level: "red", keywords: ["gänseschmalz", "schweineschmalz", "schmalz"] },
];
