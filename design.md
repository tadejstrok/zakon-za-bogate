# Zakon za bogate — oblikovni sistem

*Različica 2.1 · 31. 10. 2026 · nova art direkcija po letaku »Ustavimo uničenju Slovenije« in novem logotipu; črni okvirji in sence ostanejo.*

Ta dokument je vir resnice za videz spletne strani in tiskovin. Barve so izmerjene neposredno iz logotipa in letaka. Kar je ocena, je označeno.

---

## 1. Ideja

**Rdeča ustavlja, modra obvešča.** Vse temelji na prepovednem znaku: rdeča roka ustavi črno, grabežljivo roko. Rdeča je barva upora in akcije (PROTI, glasuj, ustavimo), modra je barva informacije in zaupanja (referendum, datum, dejstva). Ozadje je topel papir, črna je rezervirana za logotip in besedilo.

Videz je plakaten: velike ozke črke, ploskovne barve, črni okvirji z odmaknjeno senco (iz prve različice), brez prelivov.

---

## 2. Logotip

**Datoteke:** izvirnik `assets/zakon-za-bogate-logo.png` (1128 × 1128 px, prozorno ozadje); za splet obrezan `assets/logo-256.png`; favicon `assets/favicon.png` (64 px); ikona za telefon `assets/apple-touch-icon.png` (180 px, na papirju).

Prepovedni znak (rdeč obroč s prečko) z dvema rokama: črna roka grabi, rdeča roka iz prečke jo zgrabi za zapestje in ustavi.

**Pravila**
- Najmanjša velikost: 32 px na zaslonu, 15 mm v tisku. Pod tem se roke ne berejo — uporabi favicon (glej spodaj).
- Zaščitni prostor: okoli znaka vsaj ¼ njegovega premera.
- Postavitev v glavi strani: znak levo, desno besedilo **ZAKON ZA BOGATE** v naslovni pisavi.
- Ne spreminjaj barv, ne vrti, ne raztezaj, ne dodajaj senc ali obrob.
- Dovoljena ozadja: papir in bela. **Na rdeči podlagi nikoli** (obroč izgine). **Na modri** le na papirnati ploščici (krog ali kvadrat v barvi papirja), ker se rdeča ne sme dotikati modre.

**Favicon:** cel znak, obrezan na rob obroča (`assets/favicon.png`).

---

## 3. Barve

| Žeton | Hex | Vloga |
|---|---|---|
| `--red` | `#F32B00` | Rdeča: naslovi upora, rdeč pas, nalepke, gumbi za akcijo, obroč logotipa, ločilne črte |
| `--red-ink` | `#C42300` | Temnejša rdeča: **samo** za drobno rdeče besedilo (pod 24 px), da je berljivo |
| `--blue` | `#043ED4` | Kobaltno modra: informacija — referendum, datum, podnaslovi, povezave, dejstva |
| `--paper` | `#F5F1E9` | Papir: osnovno ozadje (enako kot ozadje logotipa) |
| `--ink` | `#1C1B19` | Besedilo |
| `--black` | `#000000` | Samo črna roka v logotipu in ikonah |
| `--white` | `#FFFFFF` | Besedilo na rdeči in modri podlagi |

*Izmerjeno iz datotek:* logotip — rdeča `#F22C00`, papir `#F5F1E9`, črna `#000000`; letak — rdeča `#F32B00`, modra `#043ED4`, papir `#F7F3ED`. Za stran velja tabela zgoraj.

### Kontrast (WCAG)

| Kombinacija | Razmerje | Uporaba |
|---|---|---|
| črna `#1C1B19` na papirju | 15,3 : 1 | vse besedilo |
| modra na papirju | 7,1 : 1 | vse velikosti |
| bela na modri | 7,9 : 1 | vse velikosti |
| temnejša rdeča `#C42300` na papirju | 5,2 : 1 | drobno rdeče besedilo |
| bela na rdeči | 4,1 : 1 | samo krepko in od 19 px navzgor |
| rdeča `#F32B00` na papirju | 3,6 : 1 | **samo naslovi** od 24 px ali krepko od 19 px |
| rdeča na modri | 2,0 : 1 | **nikoli** |

### Pravila
- Na eni površini največ dve barvi poleg papirja.
- Rdeča in modra se nikoli ne dotikata neposredno: ni rdečega besedila, gumbov ali nalepk na modri in obratno. Rdeča in modra sekcija se lahko stikata le, če ju loči črna črta 2 px (npr. rdeč poziv nad modro nogo).
- Velikih črnih ploskev ni več: temna sekcija postane **modra** (informativna) z belim besedilom. Poudarjena beseda v modri sekciji je bela in podčrtana (rdeča na modri ni dovoljena).
- Črni okvirji in odmaknjene črne sence ostanejo (glej 5).

---

## 4. Tipografija

| Vloga | Pisava | Teža | Opomba |
|---|---|---|---|
| Naslovi (display) | **Archivo** | 900, širina 62 % | Spremenljiva pisava, najožja širina in najmočnejša teža (`font-stretch: 62%; font-weight: 900`). Velike črke za udarne naslove (USTAVIMO, PROTI). Ostala iz prve različice strani. |
| Besedilo | **Poppins** | 500, 600, 700 | Geometrijski sans. 600 za poudarke in oznake, 500 za tekoče besedilo. |

Naslovna pisava ostaja **Archivo** iz prve različice (odločitev 31. 10. 2026). Poppins je ocena po letaku (enonadstropni »g«) — **potrdi z oblikovalcem letaka**. Obe sta na Google Fonts in podpirata šumnike.

**JetBrains Mono odpade.** Drobne oznake (nadnaslovi, viri, števci) so Poppins 600, velike črke, razmik črk `.08em`, 12–13 px.

### Lestvica

| Raven | Velikost | Pisava |
|---|---|---|
| Plakatni naslov | `clamp(64px, 11vw, 180px)`, `line-height: .84` | Archivo 900 / 62 % |
| Naslov sekcije | `clamp(40px, 6vw, 96px)` | Archivo 900 / 62 % |
| Podnaslov / naslov kartice | 28–40 px | Archivo 900 / 62–75 % |
| Uvodni odstavek | 20–24 px, `line-height: 1.4` | Poppins 500 |
| Besedilo | 17–18 px, `line-height: 1.5`, največ 70 znakov v vrstici | Poppins 500 |
| Oznaka | 12–13 px, velike črke, `letter-spacing: .08em` | Poppins 600 |

Številke: med številko in znakoma % ter € je neprelomni presledek (`7.500 €`, `15 %`).

---

## 5. Elementi (iz letaka)

**Rdeč pas.** Rdeča ploskev čez vso širino z belim naslovom v Archivu (»PROTI ZAKONU ZA BOGATE«). Za ključno sporočilo strani in za trak na vrhu. Besedilo vsaj 19 px krepko.

**Nalepka.** Rdeč krog z belim besedilom v Poppins 700, zasukan za približno 20° (»Potrebujemo 340.000 glasov PROTI«). Ena na zaslon, kot poudarek ob naslovu.

**Mreža »PROTI«.** Polja, ločena s tankimi rdečimi črtami (2 px). V vsakem polju rdeča beseda **PROTI** v Archivu, pod njo razlaga v Poppins 600, črno. Za posledice in povzetke ukrepov.

**Podčrtana povezava.** Modro besedilo s 3 px modro podčrtavo (»glasuj PROTI«).

**Gumbi.** Črn okvir 2 px in odmaknjena črna senca 4 px (kot doslej). Primarni: rdeča ploskev, belo besedilo Poppins 700. Sekundarni: papir, črno besedilo. Na modri podlagi: papirnat gumb s črnim okvirjem.

**Črte in okvirji.** Ostanejo **črni okvirji 2 px** in **odmaknjene črne sence** (`box-shadow: 4–8px 4–8px 0`), značilnost prve različice. Tanke rdeče črte (2 px) se uporabljajo kot ločila v mreži »PROTI« in pri nalepkah. Senca na modri podlagi je črna, nikoli rdeča.

**Ikone.** Ploskovne, v rdeči in črni kot roke v logotipu, zaobljeni konci. Obstoječe črtne ikone v `icons.js` prebarvaj v modro ali črno.

---

## 6. Razmiki in mreža

Ostane lestvica **4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 px**. Notranji rob polj 24 px (telefon 16 px). Stranski rob strani `clamp(16px, 4vw, 56px)`, največja širina 1440 px.

---

## 7. Prehod s stare na novo podobo

| Staro | Novo |
|---|---|
| `--red: #D42A12` | `--red: #F32B00` (+ `--red-ink: #C42300` za drobno besedilo) |
| `--ink: #111110`, temne sekcije | modre sekcije z belim besedilom; besedilo `#1C1B19`, okvirji in sence ostanejo črni |
| `--paper: #F2EEE5`, `--paper-2` | `--paper: #F5F1E9` (druga papirna barva le, če je res potrebna) |
| `--gold` | odpade (razen kot barva ocene »zapleteno«) |
| Archivo za vse | Archivo ostane za naslove, Poppins za besedilo |
| JetBrains Mono | Poppins 600, velike črke |
| logotip cilinder, favicon cilinder | nov logotip, favicon iz obroča |
| črni okvirji 2 px + odmaknjena senca | **ostanejo**; senca na modri je črna |
| trak: rdeč s črnim besedilom | rdeč z belim besedilom |

**Barve ocen ukrepov** (predlog): zelo slabo — rdeča `#F32B00`; slabo — `#FF7A4D`; zapleteno — `#F2C14E`; dobro na papirju — modra `#043ED4`.

---

## 8. Opombe k letaku (za naslednjo različico — na spletni strani že popravljeno)

- »**We need** 340.000 glasov PROTI« → »**Potrebujemo** 340.000 glasov PROTI«.
- »6. **D**ecembra« → »6. **d**ecembra« (mali začetnici v slovenščini).
- »7500 €« → »7.500 €« (pika za tisočice, neprelomni presledek).
- Desni stolpec mreže uporablja drugo besedilno pisavo kot levi — poenoti na Poppins 600.

---

## 9. Odprta vprašanja

1. **Besedilna pisava:** potrditi Poppins pri oblikovalcu letaka.
2. ~~Logotip s prozornim ozadjem~~ — urejeno 31. 10. 2026. Za tisk še vedno priporočljiv **SVG**.
3. **Postavitev znaka in besedila** (logotip + »ZAKON ZA BOGATE«) — ali obstaja uradna različica?
