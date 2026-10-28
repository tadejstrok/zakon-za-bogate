/* PIKTOGRAMI — preprosti črtni simboli (currentColor).
   Ukrepi: viewBox 48×48, ciljne skupine: viewBox 24×24. */
(function () {
  const svg = (vb, body, sw) =>
    `<svg viewBox="0 0 ${vb} ${vb}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">${body}</svg>`;
  const euro = (x, y, s) =>
    `<text x="${x}" y="${y}" font-family="Archivo, sans-serif" font-weight="900" font-size="${s}" text-anchor="middle" fill="currentColor" stroke="none">€</text>`;
  const U = (b) => svg(48, b, 3);
  const G = (b) => svg(24, b, 2);

  window.ZZB_ICONS = {
    ukrepi: {
      // kup kovancev pod "kapico"
      kapica: U(`<path d="M6 10h36"/><path d="M24 10v6"/><rect x="12" y="20" width="24" height="6"/><rect x="12" y="28" width="24" height="6"/><rect x="12" y="36" width="24" height="6"/>`),
      // hiša z evrom
      najemnine: U(`<path d="M5 22 24 7l19 15"/><path d="M10 18v24h28V18"/>${euro(24, 38, 17)}`),
      // kovček
      airbnb: U(`<rect x="7" y="15" width="34" height="25"/><path d="M18 15V8h12v7"/><path d="M15 15v25M33 15v25"/><path d="M14 44h2M32 44h2"/>`),
      // ena oseba, dve mesti
      dvozivke: U(`<circle cx="24" cy="11" r="5"/><path d="M14 42V28a10 10 0 0 1 20 0v14"/><path d="M4 36h8M36 36h8"/><path d="M8 32l-4 4 4 4M40 32l4 4-4 4"/>`),
      // pogodba z evrom
      pogodbe: U(`<path d="M11 5h19l8 8v30H11z"/><path d="M30 5v8h8"/>${euro(24, 36, 18)}`),
      // denarnica / žep
      koncesije: U(`<path d="M6 15h36v26H6z"/><path d="M30 24h12v8H30z"/><path d="M9 15 31 7l3 8"/>`),
      // čelada z razpoko
      odskodnine: U(`<path d="M10 33a14 14 0 0 1 28 0"/><path d="M5 33h38v5H5z"/><path d="M24 19v6"/><path d="M27 21l-3 5 4 2-3 5"/>`),
      // majhna aktovka, puščica navzdol
      "mikro-sp": U(`<rect x="8" y="24" width="22" height="16"/><path d="M14 24v-4h10v4"/><path d="M38 8v20"/><path d="M32 22l6 6 6-6"/>`),
      // vrata, puščica ven
      upokojitev: U(`<path d="M8 5h22v38H8z"/><path d="M24 24h19"/><path d="M37 18l6 6-6 6"/><path d="M14 24h2"/>`),
      // kalkulator
      normiranci: U(`<rect x="11" y="4" width="26" height="40"/><path d="M16 10h16v8H16z"/><path d="M17 25h2M23 25h2M29 25h2M17 31h2M23 31h2M29 31h2M17 37h2M23 37h8"/>`),
      // luna
      popoldanski: U(`<path d="M28 6a16 16 0 1 0 14 24A13 13 0 0 1 28 6z"/><path d="M38 8v6M35 11h6"/>`),
      // roka in srce
      "oskrba-upokojenci": U(`<path d="M24 24l-7-7a4.5 4.5 0 0 1 7-5.5 4.5 4.5 0 0 1 7 5.5z"/><path d="M4 32h10l9 4h9a3 3 0 0 0 0-6h-7"/><path d="M32 33l9-5a3 3 0 0 1 3 5l-12 9H4"/>`),
      // nakupovalna košara
      ddv: U(`<path d="M5 18h38l-5 24H10z"/><path d="M15 18l7-12M33 18l-7-12"/><path d="M18 26v9M24 26v9M30 26v9"/>`)
    },
    skupine: {
      zaposleni: G(`<rect x="3" y="8" width="18" height="12"/><path d="M9 8V5h6v3M3 13h18"/>`),
      najemniki: G(`<circle cx="8" cy="12" r="4"/><path d="M12 12h9M18 12v3M21 12v3"/>`),
      pacienti: G(`<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>`),
      upokojenci: G(`<circle cx="10" cy="4.5" r="2"/><path d="M10 8v6l-3 7M10 14l3 7M10 10l5 2"/><path d="M17 12v9"/>`),
      sp: G(`<rect x="5" y="5" width="14" height="10"/><path d="M2 19h20"/>`),
      vsi: G(`<circle cx="8" cy="7" r="3"/><circle cx="16" cy="7" r="3"/><path d="M2 20v-3a6 6 0 0 1 12 0v3M14 14a6 6 0 0 1 8 3v3"/>`)
    },
    posledice: {
      // prazna denarnica s puščico navzdol
      proracun: G(`<rect x="2" y="8" width="14" height="12"/><path d="M11 12h5v4h-5"/><path d="M20 4v9M17 10l3 3 3-3"/>`),
      // križ z evrom
      privatizacija: G(`<path d="M7 2h5v5h5v5h-5v5H7v-5H2V7h5z"/>${`<text x="19" y="23" font-family="Archivo, sans-serif" font-weight="900" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">€</text>`}`),
      // hiša s puščico gor
      stanovanja: G(`<path d="M2 12 10 5l8 7"/><path d="M5 10v10h10V10"/><path d="M20 12V3M17 6l3-3 3 3"/>`),
      // čelada
      delavci: G(`<path d="M4 16a8 8 0 0 1 16 0"/><path d="M2 16h20v3H2z"/><path d="M12 8v4"/>`),
      // palica in puščica navzdol
      pokojnine: G(`<circle cx="8" cy="4.5" r="2"/><path d="M8 8v6l-3 7M8 14l3 7M8 10l4 2"/><path d="M19 4v10M16 11l3 3 3-3"/>`),
      // srce v dlani
      oskrba: G(`<path d="M12 12 8.5 8.5a2.4 2.4 0 0 1 3.5-3.2 2.4 2.4 0 0 1 3.5 3.2z"/><path d="M2 16h5l5 2h5l5-3M2 21h14"/>`)
    },
    // roka s kazalcem, ki kaže desno
    palec: svg(24, `<path d="M1 10h4v10H1z"/><path d="M5 11l4-2h11.5a1.5 1.5 0 0 1 0 3H13"/><path d="M13 12h1a1.5 1.5 0 0 1 0 3h-1"/><path d="M13 15h.5a1.5 1.5 0 0 1 0 3H13"/><path d="M13.5 18a1.5 1.5 0 0 1 0 3H9l-4-1.5"/>`, 1.8),
    clen: G(`<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><path d="M9 12h7M9 16h7"/>`)
  };
})();
