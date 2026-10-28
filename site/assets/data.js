/* ============================================================
   VSEBINA STRANI — urejaj tukaj.
   Viri in odprta vprašanja: ../material/raziskava.md
   ============================================================ */

window.ZZB = {};

ZZB.referendum = "2026-12-06";

/* Besedilo zakona, kot ga je DZ sprejel 11. 5. 2026 (EPA 15-X) */
ZZB.zakon = {
  pdf: "dokumenti/ZIURS-sprejeto-besedilo.pdf",
  dz: "https://www.dz-rs.si/wps/portal/Home/zakonodaja/izbran/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zivSy9Hb283Q0N3E3dLQwCQ7z9g7w8nAwsnMz1w9EUGAWZGgS6GDn5BhsYGwQHG-pHEaPfAAdwNCBOPx4FUfiNL8gNDQ11VFQEAAXcoa4!/dz/d5/L2dBISEvZ0FBIS9nQSEh/?uid=6AE4FF25F7CB21C2C1258DD5004BFE57&db=pre_zak&mandat=X"
};

ZZB.kategorije = {
  "slabo":           "Zelo slabo",
  "zapleteno-slabo": "Slabo",
  "zapleteno":       "Zapleteno",
  "dobro-ce":        "Dobro na papirju"
};

/* Posledice — filter na vrhu seznama ukrepov */
ZZB.posledice = {
  proracun: "Izpad proračuna",
  privatizacija: "Privatizacija zdravstva",
  stanovanja: "Dražja stanovanja",
  delavci: "Slabše pravice delavcev",
  prekarizacija: "Prekarizacija",
  pokojnine: "Šibkejše pokojnine",
  oskrba: "Manj za dolgotrajno oskrbo"
};

/* Kratka razlaga posledic — vstopna stran */
ZZB.poslediceOpis = {
  proracun: "1,2 milijarde € manj v javnih blagajnah že prvo leto. Plačali jo bomo vsi.",
  privatizacija: "Javni zdravniki in javni denar odtekajo k zasebnikom. Čakalne vrste se daljšajo.",
  stanovanja: "Zakon spodbuja kupovanje stanovanj za rentništvo: oddajanje postane donosnejše, vlagatelji kupujejo, cene in najemnine rastejo.",
  delavci: "Poškodovani delavci plačajo sami, starejši so odvisni od volje delodajalca.",
  prekarizacija: "Prisilni s.p.-ji in navidezno samozaposlovanje namesto rednih služb.",
  pokojnine: "Več kot 250 milijonov € na leto manj v pokojninski blagajni.",
  oskrba: "Sistem dolgotrajne oskrbe izgubi denar, še preden zares zaživi."
};

ZZB.skupine = {
  zaposleni: "Zaposleni",
  najemniki: "Najemniki",
  pacienti: "Pacienti",
  upokojenci: "Upokojenci",
  sp: "Samozaposleni",
  vsi: "Vsi"
};

/* ---------- UKREPI ---------- */
ZZB.ukrepi = [
  {
    id: "kapica",
    posledice: [
      { k: "proracun", t: "264 milijonov € manj v javnih blagajnah vsako leto (Fiskalni svet)." },
      { k: "pokojnine", t: "Pokojninska blagajna izgubi prispevke najbolje plačanih. Luknjo pokrijemo vsi ostali." }
    ],
    clen: "14. člen",
    clenOpis: "nov 6.a člen Zakona o prispevkih za socialno varnost; uporaba od 1. 7. 2026 (52. člen)",
    stran: 6,
    kat: "slabo",
    skupine: ["zaposleni", "vsi"],
    naslov: "Davčno darilo samo za plače nad 7.500 €",
    uradno: "»Razvojna« oz. »socialna« kapica",
    kratko: "Od dela plače nad 7.500 € bruto se ne plačujejo več prispevki za pokojnine, zdravstvo in oskrbo. Kdor zasluži manj, ne dobi ničesar.",
    kaj: [
      "Najvišja osnova za vse socialne prispevke se omeji na 7.500 € bruto mesečne plače. Od zneska nad tem pragom se prispevki za pokojninsko, zdravstveno, starševsko in zaposlitveno blagajno ter dolgotrajno oskrbo ne obračunavajo več."
    ],
    zakaj: [
      "Čistilka na minimalni plači (1.277 €), medicinska sestra (1.900 €), inženir (3.500 €), zdravnik specialist (4.800 €) in celo poslanec (5.000 €) ne dobijo nič.",
      "Korist dobi okoli 13.000 ljudi z najvišjimi plačami — 1,5 % zaposlenih. Predsednik uprave NLB (2025: 1,8 milijona € bruto) bi dobil okoli 16.000 € več neto na mesec, približno 200.000 € na leto."
    ],
    oni: "To je razvojni zakon, ne zakon za bogate.",
    oniKdo: "Peter Papež, državni sekretar",
    resnica: "Za 98,5 % zaposlenih je učinek natanko 0 €. Ker pravice v zdravstvu niso vezane na vplačila, je kapica pri zdravstvu in oskrbi čista izguba za vse ostale.",
    stevilka: "264 mio €",
    stevilkaOpis: "manj v blagajnah vsako leto (Fiskalni svet)"
  },
  {
    id: "najemnine",
    posledice: [
      { k: "proracun", t: "Vsaj 50 milijonov € na leto manj v proračunu." },
      { k: "stanovanja", t: "Nižji davek naredi oddajanje donosnejše, zato se bolj splača kupiti stanovanje za rento. Več vlagateljev pomeni višje cene stanovanj za tiste, ki iščejo dom." }
    ],
    clen: "4. člen",
    clenOpis: "spremenjen 135.č člen Zakona o dohodnini",
    stran: 5,
    kat: "slabo",
    skupine: ["najemniki"],
    naslov: "Tvoja najemnina ostane ista. Najemodajalec zasluži več.",
    uradno: "Nižja dohodnina od oddajanja premoženja",
    kratko: "Davek na najemnine pade s 25 % na 15 % (za mlade in družine na 5 %). Najemnine se zaradi tega ne bodo znižale.",
    kaj: [
      "Davek na dohodek iz oddajanja nepremičnin se zniža s 25 % na 15 %. Pri dolgoročnem najemu za mlade do 30 let in družine z otroki se zniža na 5 %."
    ],
    zakaj: [
      "Najemodajalci imajo na trgu premoč in najemnine dvigujejo ne glede na davek. Nižji davek ostane v njihovem žepu.",
      "Primer: pri najemnini 700 € lastnik plača okoli 63 € manj davka na mesec. Najemnik plača enako kot prej.",
      "Država izgubi vsaj 50 milijonov € na leto — denar, ki bi lahko šel za javna najemna stanovanja."
    ],
    oni: "Mladim prinaša pot do stanovanj.",
    oniKdo: "predlagatelji zakona",
    resnica: "Pot do stanovanj so nižje najemnine in več javnih stanovanj. Ta ukrep ne prinaša ne enega ne drugega.",
    stevilka: "≥ 50 mio €",
    stevilkaOpis: "na leto manj za javna stanovanja"
  },
  {
    id: "airbnb",
    posledice: [
      { k: "stanovanja", t: "Brez omejitev kratkoročnega najema se še bolj splača kupovati stanovanja za Airbnb. Več stanovanj za turiste, manj za domačine, višje cene in najemnine." }
    ],
    clen: "42.–46. člen",
    clenOpis: "začasna neuporaba Zakona o gostinstvu; 45. člen: brez časovne omejitve kratkoročnega najema v letu 2027",
    stran: 17,
    kat: "slabo",
    skupine: ["najemniki"],
    naslov: "Airbnb ostane brez omejitev",
    uradno: "Odlog uporabe Zakona o gostinstvu (ZGos‑1)",
    kratko: "Zakon do konca leta 2026 zamrzne regulacijo kratkoročnega oddajanja, za leto 2027 pa odpravi časovno omejitev oddajanja turistom. Manj stanovanj za domačine, višje najemnine.",
    kaj: [
      "Zakon do 31. decembra 2026 ustavi uporabo novega Zakona o gostinstvu, ki ureja kratkoročno oddajanje stanovanj prek platform, kot sta Airbnb in Vrbo.",
      "Za leto 2027 kratkoročnega oddajanja stanovanj časovno ne omeji in ne uporablja uredbe o občinah z visokim tveganjem negativnih vplivov kratkoročnega najema. Soglasja sosedov za kratkoročni najem podaljša do konca leta 2027."
    ],
    zakaj: [
      "Med 2015 in 2023 se je število ležišč na platformah skoraj popetorilo. V istem času so cene stanovanj zrasle za 102 %, najemnine za 73 %.",
      "Najemnina enosobnega stanovanja v Ljubljani presega 50 % neto plače. Po merilih OECD in Eurostata ne bi smela preseči 30 %.",
      "Za ta ukrep so lobirali lastniki Airbnb stanovanj."
    ],
    oni: "Ne smemo škoditi turizmu.",
    oniKdo: "tipičen argument zagovornikov",
    resnica: "Stanovanja so za ljudi, ki v mestu živijo in delajo. Regulacija bi že v 2027 vrnila stanovanja na najemni trg.",
    stevilka: "+73 %",
    stevilkaOpis: "najemnine 2015–2023"
  },
  {
    id: "dvozivke",
    posledice: [
      { k: "privatizacija", t: "Javni zdravniki popoldne delajo za zasebnike, čakalne vrste v javnem sistemu se daljšajo." }
    ],
    clen: "33. člen",
    clenOpis: "spremenjen 53.b člen Zakona o zdravstveni dejavnosti",
    stran: 12,
    kat: "slabo",
    skupine: ["pacienti"],
    naslov: "Vrnitev zdravnikov dvoživk",
    uradno: "Odprava prepovedi dela pri zasebnikih",
    kratko: "Zdravniki iz javnih bolnišnic bodo spet lahko delali še pri zasebnikih. Ti čakaš, zasebnik zasluži.",
    kaj: [
      "Zdravstveni delavci, zaposleni v javnih zavodih, bodo ob soglasju direktorja lahko delali do 8 ur na teden pri zasebnih izvajalcih ali kot s.p."
    ],
    zakaj: [
      "To smo že imeli. Isti zdravniki delajo manj v javnem sistemu in več popoldne pri zasebnikih.",
      "V letih 2022–2024 je to pomenilo rekordne dobičke zasebnikov in daljše čakalne vrste za večino pacientov."
    ],
    oni: "Zdravnikom omogočamo, da delajo, in krajšamo čakalne vrste.",
    oniKdo: "koalicija",
    resnica: "Zdravnik ne more biti hkrati na dveh mestih. Ure, ki jih dela pri zasebniku, manjkajo v javni bolnišnici.",
    stevilka: "8 ur",
    stevilkaOpis: "na teden pri zasebniku"
  },
  {
    id: "pogodbe",
    posledice: [
      { k: "privatizacija", t: "Javni denar odteka k zasebnim izvajalcem — leta 2022 je šlo 160 milijonov €." }
    ],
    clen: "34.–36. člen",
    clenOpis: "spremenjen 53.c člen Zakona o zdravstveni dejavnosti in 7. člen ZDIUPZ",
    stran: 13,
    kat: "slabo",
    skupine: ["pacienti"],
    naslov: "Javni denar spet k zasebnikom",
    uradno: "Pogodbeno sodelovanje javnih zavodov z zasebniki",
    kratko: "Javne bolnišnice bodo spet lahko sklepale podjemne pogodbe z zasebniki. To je že bilo preizkušeno — vrste so se podaljšale.",
    kaj: [
      "Javni zavodi lahko znova sklepajo podjemne pogodbe z zdravstvenimi delavci, tudi z lastnimi zaposlenimi za posebne programe, in se z drugimi (tudi zasebnimi) izvajalci pogodbeno dogovorijo o opravljanju storitev.",
      "Zakon črta omejitve pogodbenega sodelovanja iz lanskega zakona o interventnih ukrepih v zdravstvu (ZDIUPZ)."
    ],
    zakaj: [
      "Leta 2022 so zasebniki po interventnem zakonu dobili 160 milijonov € za plačilo storitev po realizaciji.",
      "Po podatkih NIJZ so se čakalne dobe po letu dni marsikje celo podaljšale. Zasebniki so izbirali donosnejše in enostavnejše posege, zahtevni primeri pa so ostali javnim bolnišnicam."
    ],
    oni: "Zasebniki bodo skrajšali čakalne vrste.",
    oniKdo: "predlagatelji",
    resnica: "Leta 2022 je to stalo 160 milijonov € in vrste niso bile krajše.",
    stevilka: "160 mio €",
    stevilkaOpis: "zasebnikom leta 2022 — brez krajših vrst"
  },
  {
    id: "koncesije",
    posledice: [
      { k: "privatizacija", t: "Denar iz obveznega zdravstvenega zavarovanja postane zasebni dobiček." }
    ],
    clen: "27.–32. člen",
    clenOpis: "spremembe Zakona o zdravstveni dejavnosti (3., 3.a, 5., 29., 42. in 44.f člen)",
    stran: 11,
    kat: "slabo",
    skupine: ["pacienti"],
    naslov: "Dobiček iz javnega zdravstva v zasebni žep",
    uradno: "Prosto razpolaganje s presežki koncesionarjev",
    kratko: "Koncesionarji bodo denar, ki ga zaslužijo iz naših prispevkov, lahko izplačali kot dobiček.",
    kaj: [
      "Zakon odpravi omejitve pri razpolaganju s presežki prihodkov nad odhodki pri zasebnih izvajalcih s koncesijo."
    ],
    zakaj: [
      "Denar iz obveznega zavarovanja vseh nas se ne bo več vračal v kadre, opremo in nove programe.",
      "Javna zdravstvena mreža postane vir zasebnih dividend."
    ],
    oni: "Zasebna pobuda prinaša učinkovitost.",
    oniKdo: "tipičen argument zagovornikov",
    resnica: "Učinkovitost za koga? Denar, ki bi šel za nove zdravnike in opremo, gre lastnikom.",
    stevilka: "",
    stevilkaOpis: ""
  },
  {
    id: "odskodnine",
    posledice: [
      { k: "delavci", t: "Za malomarnost delodajalca plača poškodovani delavec." },
      { k: "proracun", t: "Zavod za zdravstveno zavarovanje ne more več izterjati polne škode." }
    ],
    clen: "37. in 38. člen",
    clenOpis: "spremenjena 86. in 87. člen Zakona o zdravstvenem varstvu in zdravstvenem zavarovanju",
    stran: 15,
    kat: "slabo",
    skupine: ["zaposleni"],
    naslov: "Poškoduješ se pri delu — delodajalec ne plača",
    uradno: "Omejitev regresnih zahtevkov do delodajalcev",
    kratko: "Delodajalec, ki krši predpise o varnosti pri delu, bo za posledice odgovarjal le ob naklepu ali hudi malomarnosti.",
    kaj: [
      "Zavod za zdravstveno zavarovanje bo od delodajalca lahko zahteval povrnitev stroškov le ob naklepu ali hudi malomarnosti. Ob navadni malomarnosti je zahtevek omejen na 20-kratnik najnižje pokojninske osnove."
    ],
    zakaj: [
      "Stroške poškodb pri delu — zdravljenje, izgubljen dohodek, trajne posledice — nosita poškodovani delavec in javna blagajna.",
      "Malomarni delodajalec je nagrajen, skrben delodajalec ne dobi nič."
    ],
    oni: "Zmanjšujemo finančna tveganja za podjetja.",
    oniKdo: "zagovorniki zakona",
    resnica: "Tveganje ne izgine. Prenese se na delavca, ki je že poškodovan.",
    stevilka: "20×",
    stevilkaOpis: "najnižje pokojninske osnove — strop odškodnine"
  },
  {
    id: "mikro-sp",
    posledice: [
      { k: "prekarizacija", t: "Več prisilnih s.p.-jev namesto rednih zaposlitev." },
      { k: "pokojnine", t: "Nižji prispevki danes pomenijo pokojnine pod pragom revščine jutri." }
    ],
    clen: "21. člen",
    clenOpis: "nov 145.a člen Zakona o pokojninskem in invalidskem zavarovanju; uporaba od 1. 7. 2026 (54. člen)",
    stran: 9,
    kat: "zapleteno-slabo",
    skupine: ["sp"],
    naslov: "Mikro s.p.: nižji prispevki danes, revna pokojnina jutri",
    uradno: "Nova kategorija »mikro s.p.«",
    kratko: "Prispevki za s.p. z najnižjimi prihodki padejo s ~650 € na ~250 €. Zveni dobro, a spodbuja prisilne s.p.-je in pokojnine pod pragom revščine.",
    kaj: [
      "Za samozaposlene s prihodki pod letno minimalno plačo (okoli 18.000 €) je osnova za prispevke 45 % minimalne plače namesto 60 % povprečne. Mesečni prispevki padejo s približno 650 € na 250 €. Velja 24 mesecev."
    ],
    zakaj: [
      "Delodajalci dobijo nov razlog, da delavce potisnejo v s.p. namesto redne zaposlitve.",
      "Nižji prispevki pomenijo pokojnino pod pragom revščine.",
      "Mikro s.p. bi plačeval pol manj kot zaposleni na minimalni plači — sistem postane nepravičen do zaposlenih."
    ],
    oni: "Razbremenjujemo tiste, ki zaslužijo najmanj.",
    oniKdo: "predlagatelji",
    resnica: "Tistim z najnižjimi dohodki pomaga dostojna minimalna plača in redna zaposlitev, ne cenejša prekarnost.",
    stevilka: "650 → 250 €",
    stevilkaOpis: "prispevki na mesec — in nižja pokojnina"
  },
  {
    id: "upokojitev",
    posledice: [
      { k: "delavci", t: "Starejši delavci so odvisni od volje delodajalca. Vrata za politične čistke v javnem sektorju." },
      { k: "prekarizacija", t: "Kdor dela naprej, lahko dobi novo pogodbo z nižjo plačo in manj pravicami." },
      { k: "pokojnine", t: "257 milijonov € na leto manj v pokojninski blagajni (Fiskalni svet)." }
    ],
    clen: "24. in 56. člen",
    clenOpis: "nov 119.a člen Zakona o delovnih razmerjih; 100 % pokojnina: 15.–20. člen (nov 115.a člen ZPIZ-2)",
    stran: 10,
    kat: "zapleteno-slabo",
    skupine: ["zaposleni", "upokojenci"],
    naslov: "Izpolniš pogoje za upokojitev — izgubiš službo",
    uradno: "Prenehanje pogodbe ob izpolnitvi pogojev + 100 % pokojnina ob delu",
    kratko: "Ko izpolniš pogoje za pokojnino, ti pogodba preneha. Delaš lahko naprej le, če te delodajalec spet hoče — pod njegovimi pogoji.",
    kaj: [
      "Pogodba o zaposlitvi preneha veljati »po samem zakonu« na dan, ko delavec izpolni pogoje za starostno pokojnino. Delodajalec lahko to preveri v zbirkah ZPIZ.",
      "Delavec lahko najpozneje 90 dni prej pisno predlaga, da dela naprej. Delodajalec v 30 dneh predlog sprejme, ponudi spremenjeno ali novo pogodbo ali ga z »utemeljenimi razlogi« zavrne.",
      "Kdor dela naprej, prejema 100 % pokojnine (zdaj 40 % prva tri leta, nato 20 %)."
    ],
    zakaj: [
      "Delo naprej je odvisno od volje delodajalca — ki lahko ponudi novo pogodbo z nižjo plačo in manj pravicami. Delavcu ostane le tožba na delovnem sodišču.",
      "Velja tudi za vse, ki pogoje že izpolnjujejo ali jih bodo do konca 2026: pogodba jim preneha leto po uveljavitvi zakona, če se z delodajalcem prej ne dogovorijo drugače.",
      "V javnem sektorju in državnih podjetjih to odpira vrata političnim čistkam.",
      "Polno pokojnino ob plači bodo izkoristili najbolje plačani — zdravniki, odvetniki, vodilni. Delavci po težkem fizičnem delu te možnosti nimajo, luknjo pa plačajo vsi.",
      "Določba je verjetno protiustavna."
    ],
    oni: "Upokojencem, ki delajo, dajemo polno plačo in polno pokojnino.",
    oniKdo: "koalicija",
    resnica: "Ne povedo, da te prej avtomatsko odpustijo.",
    stevilka: "257 mio €",
    stevilkaOpis: "na leto manj v pokojninski blagajni (Fiskalni svet)"
  },
  {
    id: "normiranci",
    posledice: [
      { k: "proracun", t: "Do 16.100 € davčnega odpustka na leto za najvišje prihodke." },
      { k: "prekarizacija", t: "Spodbuda za navidezno samozaposlovanje namesto redne zaposlitve." }
    ],
    clen: "2., 3. in 5.–13. člen",
    clenOpis: "spremenjena 48. in 59. člen Zakona o dohodnini",
    stran: 2,
    kat: "zapleteno-slabo",
    skupine: ["sp"],
    naslov: "Normiranci: odpustek šele nad 60.000 € prihodkov",
    uradno: "Nova lestvica normiranih odhodkov",
    kratko: "Za veliko večino samozaposlenih se ne spremeni nič. Odpustki rastejo šele pri visokih prihodkih — do 16.100 € na leto.",
    kaj: [
      "Priznani normirani odhodki: 80 % do 100.000 € prihodkov, 70 % do 120.000 €, 40 % do 150.000 €, nad tem 0 %. Meja za popoldanski s.p. je 70.000 €. Odpravljena je omejitev ponovnega vstopa med normirance."
    ],
    zakaj: [
      "Koristi dobro plačanim svetovalcem, IT strokovnjakom, odvetnikom in zdravnikom, ki si s.p. izberejo zaradi nižjih dajatev.",
      "Spodbuja navidezno samozaposlovanje in izčrpava pokojninsko in zdravstveno blagajno."
    ],
    tabela: [
      ["30.000 €", "1.200 €", "1.200 €", "0 €"],
      ["50.000 €", "2.000 €", "2.000 €", "0 €"],
      ["60.000 €", "2.400 €", "2.400 €", "0 €"],
      ["80.000 €", "6.400 €", "3.200 €", "3.200 €"],
      ["100.000 €", "10.400 €", "4.000 €", "6.400 €"],
      ["120.000 €", "14.400 €", "5.200 €", "9.200 €"],
      ["150.000 €", "24.900 €", "8.800 €", "16.100 €"]
    ],
    oni: "Razbremenjujemo male podjetnike.",
    oniKdo: "predlagatelji",
    resnica: "Mali podjetnik z 50.000 € prihodkov dobi 0 €. Tisti s 150.000 € dobi 16.100 € na leto.",
    stevilka: "−65 %",
    stevilkaOpis: "davka pri 150.000 € prihodkov"
  },
  {
    id: "popoldanski",
    posledice: [
      { k: "oskrba", t: "Manj prispevkov za dolgotrajno oskrbo." }
    ],
    clen: "22. in 23. člen",
    clenOpis: "spremenjena 55. in 56. člen Zakona o dolgotrajni oskrbi",
    stran: 10,
    kat: "zapleteno-slabo",
    skupine: ["sp"],
    naslov: "Popoldanski s.p. brez prispevka za oskrbo",
    uradno: "Ukinitev prispevka za dolgotrajno oskrbo za popoldanske s.p.",
    kratko: "Popoldanski s.p. ne bodo več plačevali prispevka za dolgotrajno oskrbo. Znesek ni velik, načelo pa se ruši.",
    kaj: [
      "Prispevek za dolgotrajno oskrbo se ukine za dohodke iz dejavnosti, ki se opravlja kot postranski poklic (popoldanski s.p.).",
      "Kdor je za posamezen mesec že plačal 2 % prispevka za oskrbo, ga od drugih dohodkov (npr. podjemne ali avtorske pogodbe) ne plača več."
    ],
    zakaj: [
      "Ruši se načelo, da se prispevki plačujejo od vsakega dohodka, ne glede na obliko dela.",
      "Odpira vrata naslednjim izjemam."
    ],
    oni: "Ta prispevek že plačujem od zaposlitve. Zakaj bi ga dvakrat?",
    oniKdo: "zagovorniki ukrepa",
    resnica: "Prispevek plačuješ od dohodka, ne od osebe. Več zaslužiš, več prispevaš — tako deluje solidarnost.",
    stevilka: "",
    stevilkaOpis: ""
  },
  {
    id: "oskrba-upokojenci",
    posledice: [
      { k: "oskrba", t: "Sistem dolgotrajne oskrbe izgubi stalni vir denarja, ko šele nastaja." }
    ],
    clen: "22. člen",
    clenOpis: "spremenjen 55. člen Zakona o dolgotrajni oskrbi (tretji odstavek)",
    stran: 10,
    kat: "zapleteno",
    skupine: ["upokojenci"],
    naslov: "1 % višja pokojnina, manj denarja za oskrbo",
    uradno: "Ukinitev prispevka za dolgotrajno oskrbo za upokojence",
    kratko: "Pokojnine bodo višje za 1 %. A s tem zmanjka denarja za oskrbo, ki jo bodo najbolj potrebovali prav današnji upokojenci.",
    kaj: [
      "Upokojenci ne bodo več plačevali prispevka za dolgotrajno oskrbo (1 % pokojnine)."
    ],
    zakaj: [
      "Sistem dolgotrajne oskrbe — nega na domu, dnevni centri, domovi za starejše — šele nastaja. Ukinitev vira takoj po začetku pomeni manj storitev ali odvisnost od vsakoletnega proračuna.",
      "Pri pokojnini 900 € je to 9 € na mesec. Ura oskrbe na domu stane več."
    ],
    oni: "Višje pokojnine za vse upokojence.",
    oniKdo: "koalicija",
    resnica: "9 € danes, a manj oskrbe takrat, ko jo boš potreboval_a.",
    stevilka: "94 mio €",
    stevilkaOpis: "manj za dolgotrajno oskrbo (ocena sindikatov, cel zakon)"
  },
  {
    id: "ddv",
    posledice: [
      { k: "proracun", t: "Manj prihodkov od DDV — brez zagotovila, da bodo cene res nižje." }
    ],
    clen: "25., 26. in 40. člen",
    clenOpis: "Priloga I in IV Zakona o DDV; 40. člen: znižan DDV za energente po sklepu vlade",
    stran: 11,
    kat: "dobro-ce",
    skupine: ["vsi"],
    naslov: "Nižji DDV na hrano — a kdo bo poskrbel, da bodo cene res nižje?",
    uradno: "5 % DDV na osnovna živila, začasno 9,5 % na energente",
    kratko: "Nižji DDV na 15 osnovnih živil in začasno na energijo. Dober namen, a brez nadzora cen denar konča pri trgovcih.",
    kaj: [
      "DDV se zniža na 5 % za 15 skupin osnovnih živil (kruh, testenine, meso, mleko, jajca, sveže sadje in zelenjava, sladkor …) in kmetijske surovine.",
      "Za največ 9 mesecev lahko vlada s sklepom zniža DDV na 9,5 % za elektriko, zemeljski plin, daljinsko ogrevanje in drva."
    ],
    zakaj: [
      "Nižji DDV na energijo ni samodejen: zakon vladi to le dovoljuje.",
      "Znižanja DDV se praviloma ne prelijejo v nižje cene, ampak v višje marže trgovcev in dobaviteljev.",
      "Na Hrvaškem, ki je DDV na hrano znižala leta 2022, so cene hitro dohitele ali prehitele prejšnje.",
      "Nižji DDV je v zakon zavit kot sladkor, ki naj bi prekril vse ostalo."
    ],
    oni: "Zakon vsem nekaj da in nikomur nič ne vzame.",
    oniKdo: "NSi–SLS–Fokus, Resni.ca",
    resnica: "Za nižji DDV smo — z mehanizmom, ki zagotovi, da se cene res znižajo. Tak zakon bomo vložili s podpisi volivcev.",
    stevilka: "5 %",
    stevilkaOpis: "DDV — če trgovci znižajo cene"
  }
];

/* ---------- ARGUMENTARIJ (za pogovore) ---------- */
ZZB.miti = [
  { oni: "Vsem nekaj da, nikomur nič ne vzame.", kdo: "predlagatelji", mi: "Fiskalni svet: 1,2 milijarde € luknje že prvo leto. Plačali jo bomo z daljšimi vrstami, nižjimi pokojninami in manj oskrbe." },
  { oni: "To je razvojni zakon, ne zakon za bogate.", kdo: "vlada", mi: "Osrednji ukrep koristi 1,5 % zaposlenih. Za vse ostale prinaša 0 €." },
  { oni: "Rast bo pokrila izpad.", kdo: "predlagatelji", mi: "Fiskalni svet: rast pokrije četrtino takoj in polovico v desetih letih. Javni dolg je čez 10 let višji za 8 % BDP." },
  { oni: "Mladim prinaša pot do stanovanj.", kdo: "koalicija", mi: "Nižji davek dobi lastnik, Airbnb ostane neomejen. Najemnine ne padejo." },
  { oni: "Zdravniki bodo lahko delali več, vrste bodo krajše.", kdo: "koalicija", mi: "To smo že imeli. 2022–2024: rekordni dobički zasebnikov, daljše vrste." },
  { oni: "Upokojenci dobijo polno plačo in pokojnino.", kdo: "koalicija", mi: "Najprej jim pogodba avtomatsko preneha. Naprej delajo le, če jih delodajalec hoče." },
  { oni: "Kar je dobro za gospodarstvo, je dobro za ljudi.", kdo: "GZS", mi: "Kar je dobro za lastnike in uprave, ni nujno dobro za tiste, ki delajo." },
  { oni: "Referendum bo za leto dni blokiral rešitve.", kdo: "GZS", mi: "Nižji DDV lahko DZ sprejme jutri v ločenem zakonu. Ni treba v paketu z darili za najbogatejše." },
  { oni: "Gre za boj razvoja proti zavisti.", kdo: "Janez Janša", mi: "Ne gre za zavist. Gre za to, kdo plača račun." }
];

/* ---------- GRAFIKE ZA DELJENJE ----------
   Ko dobiš grafike: shrani jih v /site/grafike/ in vpiši "src".
   Brez "src" se prikaže tipografski predogled. */
ZZB.grafike = [
  { naslov: "Ta zakon ni napisan zate", tema: "splosno", barva: "red",   velik: "Ta zakon ni napisan zate.", mali: "6. 12. glasuj PROTI", src: "" },
  { naslov: "0 € za 98,5 %",             tema: "kapica",  barva: "ink",   velik: "0 €",                        mali: "Toliko ti prinese razvojna kapica, če zaslužiš manj kot 7.500 € bruto.", src: "" },
  { naslov: "Najemnina ostane ista",     tema: "stanovanja", barva: "paper", velik: "Tvoja najemnina: ista.", mali: "Davek tvojega najemodajalca: −40 %.", src: "" },
  { naslov: "1,2 milijarde",            tema: "splosno", barva: "gold",  velik: "1,2 mrd €",                  mali: "luknje v javnih financah prvo leto — Fiskalni svet", src: "" },
  { naslov: "Čakaš ti, zasluži zasebnik", tema: "zdravstvo", barva: "red", velik: "Čakaš ti.",                 mali: "Zasluži zasebnik. Zakon vrača zdravnike dvoživke.", src: "" },
  { naslov: "Pogoji za upokojitev",      tema: "delo",    barva: "ink",   velik: "Izpolniš pogoje? Ostaneš brez službe.", mali: "Interventni zakon, člen o upokojevanju", src: "" }
];
ZZB.temeGrafik = { vse: "Vse", splosno: "Splošno", kapica: "Kapica", stanovanja: "Stanovanja", zdravstvo: "Zdravstvo", delo: "Delo" };

/* ---------- DOGODKI ----------
   primer: true = vzorčni dogodek, zamenjaj z resničnimi. */
ZZB.dogodki = [
  { datum: "2026-11-07", ura: "11:00", naslov: "Stojnica: pogovori z mimoidočimi", kraj: "Ljubljana, Prešernov trg", tip: "Stojnica", primer: true },
  { datum: "2026-11-14", ura: "18:00", naslov: "Javna tribuna: komu koristi zakon?", kraj: "Maribor", tip: "Tribuna", primer: true },
  { datum: "2026-11-21", ura: "10:00", naslov: "Delitev letakov od vrat do vrat", kraj: "Celje", tip: "Teren", primer: true },
  { datum: "2026-11-28", ura: "16:00", naslov: "Shod proti zakonu za bogate", kraj: "Ljubljana", tip: "Shod", primer: true },
  { datum: "2026-12-06", ura: "7:00–19:00", naslov: "Referendum — glasuj PROTI", kraj: "Tvoje volišče", tip: "Referendum", glavni: true }
];

/* ---------- INSTAGRAM ----------
   Vpiši URL objave in sliko naslovnice (poster). Kasneje lahko to
   zamenja samodejni vir (npr. Instagram Graph API ali Behold). */
ZZB.instagram = [
  { url: "#", poster: "", opis: "Kaj ti prinese razvojna kapica? Nič." },
  { url: "#", poster: "", opis: "Vprašali smo najemnike v Ljubljani" },
  { url: "#", poster: "", opis: "Zdravnica razloži dvoživkarstvo v 60 sekundah" },
  { url: "#", poster: "", opis: "Kako glasuješ 6. decembra" },
  { url: "#", poster: "", opis: "»Mi tega ne rabimo« — ljudje s plačo nad 7.500 €" }
];
