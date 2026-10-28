/* ZAKON ZA BOGATE — skupna logika strani */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const eur = (n) => Math.round(n).toLocaleString("sl-SI") + " €";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const page = document.body.dataset.page;

  /* ---------- skupni deli ---------- */
  const NAV = [
    ["index.html", "Domov", "domov"],
    ["ukrepi.html", "Spoznaj ukrepe", "ukrepi"],
    ["aktiviraj.html", "Aktiviraj se", "aktiviraj"],
    ["dogodki.html", "Dogodki", "dogodki"]
  ];
  // trak: ključna sporočila + vse posledice zakona (brez podvajanja)
  const tickerItems = [...new Set([
    "6. december: glasuj PROTI", "1,2 milijarde € luknje", "0 € za 98,5 % zaposlenih", "Zakon za bogate",
    "Dražja stanovanja", "Dvoživke v zdravstvu",
    ...Object.values(ZZB.posledice || {})
  ])];

  // znak strani: bogataški klobuk (cilinder)
  const HAT = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8Q12 1.9 17.4 2.8L16.5 18H7.5Z" fill="currentColor"/><rect x="7.2" y="13.6" width="9.6" height="2.2" fill="var(--red)"/><path d="M1.8 15.8Q2.4 19.8 6.4 19.8H17.6Q21.6 19.8 22.2 15.8Q19 17.6 12 17.6Q5 17.6 1.8 15.8Z" fill="currentColor"/></svg>`;

  const header = $("#header");
  if (header) {
    const t = tickerItems.concat(tickerItems).map((x) => `<span>${x}</span>`).join("");
    header.outerHTML = `
      <div class="ticker" aria-hidden="true"><div class="ticker__track" style="animation-duration:${tickerItems.length * 6}s">${t}${t}</div></div>
      <header class="header"><div class="wrap">
        <a class="logo" href="index.html"><span class="logo__mark">${HAT}</span>Zakon za bogate</a>
        <nav class="nav" id="nav">${NAV.slice(1).map(([h, l, k]) => `<a href="${h}"${k === page ? ' aria-current="page"' : ""}>${l}</a>`).join("")}</nav>
        <div class="header__cta">
          <a class="btn btn--red btn--sm" href="aktiviraj.html">6. 12. glasuj proti</a>
          <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="nav">MENI</button>
        </div>
      </div></header>`;
    $("#menuBtn").addEventListener("click", (e) => {
      const open = $("#nav").classList.toggle("open");
      e.currentTarget.setAttribute("aria-expanded", open);
      e.currentTarget.textContent = open ? "ZAPRI" : "MENI";
    });
  }

  const footer = $("#footer");
  if (footer) {
    footer.outerHTML = `
      <footer class="footer on-dark"><div class="wrap">
        <p class="d footer__big">6. decembra<br>glasuj <span class="red">proti!</span></p>
        <div class="footer__cols">
          <div><p style="margin:0 0 12px;max-width:34ch">Neodvisna informativna stran o Zakonu o interventnih ukrepih za razvoj Slovenije (ZIURS). Referendum: nedelja, 6. december 2026.</p>
            <span class="mono" style="color:#A9A49A">Številke: Fiskalni svet, ZZZS, ZPIZ, SURS</span></div>
          <div>${NAV.map(([h, l]) => `<a href="${h}">${l}</a>`).join("")}</div>
          <div><a href="#">Instagram</a><a href="#">Facebook</a><a href="#">TikTok</a></div>
          <div><a href="aktiviraj.html#prostovoljci">Postani prostovoljec_ka</a><a href="aktiviraj.html#grafike">Deli grafike</a><a href="#">Za medije</a></div>
        </div>
      </div></footer>`;
  }

  /* ---------- odštevanje ---------- */
  $$("[data-countdown]").forEach((el) => {
    const d = new Date(ZZB.referendum + "T07:00:00");
    const days = Math.max(0, Math.ceil((d - new Date()) / 86400000));
    el.textContent = days;
  });

  /* ---------- KONFIGURATOR ---------- */
  const cfg = $("#config");
  if (cfg) {
    const KAPICA = 7500;
    const fmtInput = (inp) => {
      const v = parseInt(inp.value.replace(/\D/g, ""), 10) || 0;
      inp.value = v.toLocaleString("sl-SI");
      return v;
    };
    const val = (name) => (cfg.querySelector(`[name="${name}"]:checked`) || {}).value;
    const num = (id) => parseInt(($("#" + id).value || "0").replace(/\D/g, ""), 10) || 0;

    // normiranci — linearna interpolacija iz tabele (letni prihodki → letni odpustek)
    const NORM = [[0, 0], [60000, 0], [80000, 3200], [100000, 6400], [120000, 9200], [150000, 16100]];
    const normGain = (r) => {
      if (r <= 60000) return 0;
      for (let i = 1; i < NORM.length; i++) {
        const [x1, y1] = NORM[i - 1], [x2, y2] = NORM[i];
        if (r <= x2) return y1 + (y2 - y1) * (r - x1) / (x2 - x1);
      }
      return 16100 + (r - 150000) * 0.2 * 0.6; // nad 150.000 € — groba ocena
    };
    const kapicaGain = (b) => Math.max(0, b - KAPICA) * 0.221 * 0.5;

    function render() {
      const status = val("status");
      const dom = val("dom");
      $$("[data-show]", cfg).forEach((el) => {
        const [key, vals] = el.dataset.show.split(":");
        const cur = key === "status" ? status : dom;
        el.classList.toggle("hidden", !vals.split(",").includes(cur));
      });

      const rows = [];
      let total = 0;
      const add = (label, note, amt, kind) => rows.push({ label, note, amt, kind });

      if (status === "zaposlen") {
        const b = num("placa");
        const g = kapicaGain(b);
        total += g;
        if (g > 0) add("Razvojna kapica", `Plača nad 7.500 € bruto. Si med ~13.000 ljudmi, ki jim zakon res koristi.`, "+" + eur(g), "plus");
        else add("Razvojna kapica", `Tvoja plača je pod 7.500 € bruto. Kapica ti ne prinese ničesar.`, "0 €", "zero");
        add("Luknja v zdravstveni blagajni","Kapica ustvari luknjo v zdravstveni blagajni, ki jo plačamo vsi.", "−", "minus");
      }
      if (status === "normiranec") {
        const r = num("prihodki");
        const g = normGain(r) / 12;
        total += g;
        add("Nova lestvica normiranih odhodkov", r <= 60000 ? "Do 60.000 € prihodkov se ne spremeni nič." : "Koristi rastejo s prihodki — največ dobijo največji.", g > 0 ? "+" + eur(g) : "0 €", g > 0 ? "plus" : "zero");
        if (r > 0 && r < 18000) {
          total += 400;
          add("Mikro s.p.", "Prispevki z ~650 € na ~250 € za 24 mesecev — a nižja pokojnina kasneje.", "+400 €", "plus");
          add("Tvoja bodoča pokojnina", "Nižji prispevki = pokojnina pod pragom revščine.", "−", "minus");
        }
      }
      if (status === "popoldanski") {
        add("Ukinitev prispevka za oskrbo", "Manjši prihranek — in eno izjemo več v sistemu solidarnosti.", "majhen +", "plus");
      }
      if (status === "upokojenec") {
        const p = num("pokojnina");
        const g = p * 0.01;
        total += g;
        add("Ukinitev prispevka za oskrbo (1 %)", "Malo več danes, manj denarja za nego na domu in domove jutri.", "+" + eur(g), "plus");
      }
      if (status === "student") {
        add("Za študente", "Zakon ne prinaša ničesar. Mladinski svet opozarja na pritisk v »študentski s.p.«", "0 €", "zero");
      }

      if (dom === "najemnik") {
        const n = num("najemnina");
        add("Tvoja najemnina", "Nižji davek na najemnine ne zniža najemnine.", "0 €", "zero");
        add("Tvoj najemodajalec", `Pri ${eur(n)} najemnine plača okoli ${eur(n * 0.09)} manj davka na mesec.`, "+" + eur(n * 0.09) + " zanj", "minus");
        add("Airbnb ostane neomejen", "Manj stanovanj za domačine, višje najemnine.", "−", "minus");
      }
      if (dom === "oddajam") {
        const n = num("najemnina");
        total += n * 0.09;
        add("Nižji davek na oddajanje (25 → 15 %)", "Ti dobiš. Tvoj najemnik ne.", "+" + eur(n * 0.09), "plus");
      }

      if ($("#c-upok").checked) add("Izpolnjuješ pogoje za upokojitev", "Pogodba o zaposlitvi preneha. Naprej delaš le, če te delodajalec spet hoče.", "!", "minus");
      if ($("#c-zdr").checked) add("Čakalne vrste", "Vrnitev dvoživk in pogodb z zasebniki — leta 2022 so se vrste podaljšale.", "−", "minus");
      if ($("#c-nevarno").checked) add("Poškodba pri delu", "Malomarni delodajalec plača največ 20-kratnik najnižje pokojninske osnove.", "−", "minus");
      if ($("#c-oskrba").checked) add("Oskrba za tvoje bližnje", "Manj denarja za dolgotrajno oskrbo: nega na domu, dnevni centri, domovi.", "−", "minus");
      add("Nižji DDV na hrano", "Prihranek le, če ga trgovci prenesejo v cene. Na Hrvaškem ga niso.", "?", "zero");
      add("Tvoj delež luknje", "1,2 mrd € (Fiskalni svet) ÷ 2,1 mio prebivalcev, preračunano na mesec.", "−" + eur(1.2e9 / 2.12e6 / 12) + "/mes.", "minus");

      $("#receiptRows").innerHTML = rows.map((r) => `
        <div class="receipt__row"><div><b>${esc(r.label)}</b><small>${esc(r.note)}</small></div>
        <div class="receipt__amt amt-${r.kind}">${esc(r.amt)}</div></div>`).join("");
      $("#receiptTotal").textContent = (total > 0 ? "+" : "") + eur(total);
      $("#receiptVsVal").textContent = "+" + eur(kapicaGain(50000));
    }

    $$("input.fmt", cfg).forEach((inp) => {
      inp.addEventListener("input", () => {
        const v = fmtInput(inp);
        const r = $(`input[type=range][data-for="${inp.id}"]`, cfg);
        if (r) r.value = v;
        render();
      });
    });
    $$('input[type="range"]', cfg).forEach((r) => {
      r.addEventListener("input", () => {
        const t = $("#" + r.dataset.for);
        t.value = parseInt(r.value, 10).toLocaleString("sl-SI");
        render();
      });
    });
    cfg.addEventListener("change", render);
    render();
  }

  /* ---------- UKREPI ---------- */
  const list = $("#measures");
  if (list) {
    const IC = window.ZZB_ICONS || { ukrepi: {}, skupine: {}, clen: "" };
    const pdfAt = (p) => `${ZZB.zakon.pdf}#page=${p}`;

    // povezava na besedilo zakona
    $("#lawbox").innerHTML = `
      <span class="lawbox__ic">${IC.clen}</span>
      <span class="mono">Besedilo zakona</span>
      <p class="lawbox__t">Zakon o interventnih ukrepih za razvoj Slovenije (ZIURS)</p>
      <p class="lawbox__s">Kot ga je Državni zbor sprejel 11. 5. 2026 · EPA 15-X · 63 členov</p>
      <div class="lawbox__a">
        <a class="btn btn--sm" href="${ZZB.zakon.pdf}" target="_blank" rel="noopener">Odpri PDF</a>
        <a class="btn btn--sm btn--paper" href="${esc(ZZB.zakon.dz)}" target="_blank" rel="noopener">Stran DZ →</a>
      </div>`;

    // udarni naslov: kazalec stoji za zadnjo besedo in se z njo ne loči v novo vrstico
    const badTitle = (t) => {
      const w = t.trim().split(" "), last = w.pop();
      return `${esc(w.join(" "))} <span class="mtext__end">${esc(last)} ${IC.palec || ""}</span>`;
    };
    const groupTag = (s) => `<span class="tag tag--grp">${IC.skupine[s] || ""}${ZZB.skupine[s]}</span>`;
    const posIc = (k) => (IC.posledice || {})[k] || "";
    list.innerHTML = ZZB.ukrepi.map((u) => `
      <article class="measure" id="${u.id}" data-kat="${u.kat}" data-sk="${u.skupine.join(" ")}" data-pos="${(u.posledice || []).map((p) => p.k).join(" ")}">
        <button class="measure__btn" aria-expanded="false" aria-controls="${u.id}-body">
          <span class="measure__side">
            <span class="measure__ic" data-v="${u.kat}">${IC.ukrepi[u.id] || ""}</span>
            <span class="measure__meta"><span class="tag" data-v="${u.kat}">${ZZB.kategorije[u.kat]}</span>${u.skupine.filter((s) => s !== "vsi").map(groupTag).join("")}</span>
          </span>
          <span>
            <h3 class="measure__title">${esc(u.uradno)}</h3>
            ${u.kaj.map((p) => `<p class="measure__one">${esc(p)}</p>`).join("")}
            <span class="mtext__bad">${badTitle(u.naslov)}</span>
          </span>
        </button>
        <div class="measure__body" id="${u.id}-body">
          <div class="mtext">
            ${u.zakaj.map((p) => `<p>${esc(p)}</p>`).join("")}
            ${u.tabela ? `<table class="mb-table"><thead><tr><th>Prihodki</th><th>Davek zdaj</th><th>Po zakonu</th><th>Odpustek</th></tr></thead><tbody>${u.tabela.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>` : ""}
          </div>
          <section class="posbox">
            <div>
              <h4 class="mx__h">Posledice</h4>
              <ul class="pos-list">${(u.posledice || []).map((p) => `
                <li><span class="pos-list__ic">${posIc(p.k)}</span><span><b>${esc(ZZB.posledice[p.k])}</b>${esc(p.t)}</span></li>`).join("")}
              </ul>
            </div>
            ${u.stevilka ? `<div class="mx__num"><span class="d">${esc(u.stevilka)}</span><span>${esc(u.stevilkaOpis)}</span></div>` : ""}
          </section>
          <div class="mx">
            <section class="mx__box mx__them">
              <h4 class="mx__h">Tipičen argument zagovornikov</h4>
              <blockquote>${esc(u.oni)}</blockquote>
            </section>
            <section class="mx__box mx__us">
              <h4 class="mx__h red">Resnica</h4>
              <p>${esc(u.resnica)}</p>
            </section>
          </div>
          ${u.clen ? `<a class="clen" href="${pdfAt(u.stran)}" target="_blank" rel="noopener"><span class="clen__ic">${IC.clen}</span><span><b>${esc(u.clen)} ZIURS</b> · ${esc(u.clenOpis)} →</span></a>` : ""}
        </div>
      </article>`).join("");

    $$(".measure__btn", list).forEach((b) => b.addEventListener("click", () => {
      const open = b.parentElement.classList.toggle("open");
      b.setAttribute("aria-expanded", open);
    }));

    // povezava z #id odpre ta ukrep
    if (location.hash) {
      const m = document.getElementById(location.hash.slice(1));
      if (m && m.classList.contains("measure")) {
        m.classList.add("open");
        $(".measure__btn", m).setAttribute("aria-expanded", "true");
        window.addEventListener("load", () => m.scrollIntoView({ block: "start" }));
      }
    }

    // filtri: posledice, ocena (legenda), ciljne skupine
    const count = (fn) => ZZB.ukrepi.filter(fn).length;
    $("#fPos").innerHTML =
      `<label class="chip chip--g"><input type="radio" name="fp" value="" checked><span>Vse posledice</span></label>` +
      Object.entries(ZZB.posledice).map(([k, v]) =>
        `<label class="chip chip--g"><input type="radio" name="fp" value="${k}"><span>${posIc(k)}${v} <small>${count((u) => (u.posledice || []).some((p) => p.k === k))}</small></span></label>`).join("");
    $("#fKat").innerHTML =
      `<label class="chip chip--k"><input type="radio" name="fk" value="" checked><span>Vse ocene</span></label>` +
      Object.entries(ZZB.kategorije).map(([k, v]) =>
        `<label class="chip chip--k"><input type="radio" name="fk" value="${k}"><span data-v="${k}">${v} <small>${count((u) => u.kat === k)}</small></span></label>`).join("");
    $("#fSk").innerHTML =
      `<label class="chip chip--g"><input type="radio" name="fs" value="" checked><span>${IC.skupine.vsi}Vsi</span></label>` +
      Object.entries(ZZB.skupine).filter(([k]) => k !== "vsi").map(([k, v]) =>
        `<label class="chip chip--g"><input type="radio" name="fs" value="${k}"><span>${IC.skupine[k]}${v} <small>${count((u) => u.skupine.includes(k))}</small></span></label>`).join("");
    const val = (n) => ($(`[name="${n}"]:checked`) || {}).value;
    const apply = () => {
      const p = val("fp"), k = val("fk"), s = val("fs");
      let n = 0;
      $$(".measure", list).forEach((m) => {
        const ok = (!p || m.dataset.pos.split(" ").includes(p)) && (!k || m.dataset.kat === k) && (!s || m.dataset.sk.split(" ").includes(s));
        m.classList.toggle("hidden", !ok); if (ok) n++;
      });
      $("#fCount").textContent = n + " / " + ZZB.ukrepi.length + " ukrepov";
      $("#fReset").classList.toggle("hidden", !(p || k || s));
      const active = [p, k, s].filter(Boolean).length;
      $("#fActive").textContent = active;
      $("#fActive").classList.toggle("hidden", !active);
      $("#measuresEmpty").classList.toggle("hidden", n > 0);
    };
    const reset = () => {
      ["fp", "fk", "fs"].forEach((n) => { $(`[name="${n}"][value=""]`).checked = true; });
      apply();
    };
    // po spremembi filtra pokaži začetek seznama tik pod vrstico s filtri
    const toListTop = () => {
      const bar = $(".filters").getBoundingClientRect();
      const top = list.getBoundingClientRect().top;
      if (getComputedStyle($(".filters")).position === "sticky" && top < bar.bottom) {
        window.scrollBy({ top: top - bar.bottom, behavior: "instant" });
      }
    };
    $("#fReset").addEventListener("click", () => { reset(); toListTop(); });
    $("#fReset2").addEventListener("click", () => { reset(); toListTop(); });
    document.addEventListener("change", (e) => { if (["fp", "fk", "fs"].includes(e.target.name)) { apply(); toListTop(); } });
    // prikaz/skrivanje filtrov (privzeto skriti)
    const setOpen = (open) => {
      $("#filters").classList.toggle("is-collapsed", !open);
      $("#fToggle").setAttribute("aria-expanded", open);
      $("#fToggleLbl").textContent = open ? "Skrij filtre" : "Pokaži filtre";
    };
    $("#fToggle").addEventListener("click", () => setOpen($("#filters").classList.contains("is-collapsed")));

    // povezava ?posledica=… (npr. z vstopne strani) vnaprej izbere filter
    const pre = new URLSearchParams(location.search).get("posledica");
    const preInput = pre && $(`[name="fp"][value="${CSS.escape(pre)}"]`);
    if (preInput) {
      preInput.checked = true;
      setOpen(true);
      // po nalaganju skoči na filtre (setTimeout, da ga ne povozi obnovitev položaja brskalnika)
      const top = () => $(".filters").getBoundingClientRect().top + window.scrollY - $(".header").offsetHeight;
      window.addEventListener("load", () => setTimeout(() => window.scrollTo({ top: top(), behavior: "instant" }), 0));
    }
    apply();
  }

  /* ---------- posledice na vstopni strani ---------- */
  const posGrid = $("#posledice");
  if (posGrid) {
    const IC = window.ZZB_ICONS || { posledice: {} };
    const n = (k) => ZZB.ukrepi.filter((u) => (u.posledice || []).some((p) => p.k === k)).length;
    const ukr = (x) => x === 1 ? "ukrep" : x === 2 ? "ukrepa" : x < 5 ? "ukrepi" : "ukrepov";
    posGrid.innerHTML = Object.entries(ZZB.posledice).map(([k, v]) => `
      <a class="pcard" href="ukrepi.html?posledica=${k}">
        <span class="pcard__ic">${IC.posledice[k] || ""}</span>
        <span class="pcard__t">${esc(v)}</span>
        <span class="pcard__d">${esc((ZZB.poslediceOpis || {})[k] || "")}</span>
        <span class="mono pcard__n">${n(k)} ${ukr(n(k))} →</span>
      </a>`).join("") + `
      <a class="pcard pcard--all" href="ukrepi.html">
        <span class="pcard__t">Vsi ukrepi</span>
        <span class="pcard__d">Preveri vseh ${ZZB.ukrepi.length} ukrepov in v katerem členu zakona so zapisani.</span>
        <span class="mono pcard__n">Spoznaj ukrepe →</span>
      </a>`;
  }

  /* ---------- predogled ukrepov na vstopni strani ---------- */
  const teaser = $("#teaser");
  if (teaser) {
    teaser.innerHTML = ["kapica", "najemnine", "dvozivke", "upokojitev"].map((id) => {
      const u = ZZB.ukrepi.find((x) => x.id === id);
      return `<a href="ukrepi.html#${id}"><span class="teaser__n">${esc(u.stevilka)}</span>
        <span><span class="d d-s" style="display:block;margin-bottom:10px">${esc(u.naslov)}</span>
        <span class="mono">Preberi več →</span></span></a>`;
    }).join("");
  }

  /* ---------- instagram ---------- */
  const reels = $("#reels");
  if (reels) {
    reels.innerHTML = ZZB.instagram.map((r) => `
      <a class="reel" href="${esc(r.url)}" target="_blank" rel="noopener">
        ${r.poster ? `<img src="${esc(r.poster)}" alt="">` : `<span class="reel__ph mono">Video ${""}</span>`}
        <span class="reel__play" aria-hidden="true"></span>
        <span class="reel__cap">${esc(r.opis)}</span>
      </a>`).join("");
  }

  /* ---------- grafike ---------- */
  const gal = $("#gallery");
  if (gal) {
    const draw = (tema) => {
      gal.innerHTML = ZZB.grafike.filter((g) => tema === "vse" || g.tema === tema).map((g, i) => `
        <figure class="gfx" style="margin:0">
          <div class="gfx__img">${g.src ? `<img src="${esc(g.src)}" alt="${esc(g.naslov)}">` :
            `<div class="poster poster--${g.barva}"><span class="poster__small poster__brand">${HAT}ZAKON ZA BOGATE</span><span class="poster__big">${esc(g.velik)}</span><span class="poster__small">${esc(g.mali)}</span></div>`}</div>
          <figcaption class="gfx__bar"><span class="mono">${esc(g.naslov)}</span>
            <span style="display:flex;gap:6px">
              <a class="btn btn--sm btn--paper" ${g.src ? `href="${esc(g.src)}" download` : 'aria-disabled="true" style="opacity:.45;pointer-events:none"'}>Prenesi</a>
              <button class="btn btn--sm btn--red" data-share="${i}">Deli</button>
            </span></figcaption>
        </figure>`).join("");
    };
    const gf = $("#galleryFilter");
    gf.innerHTML = Object.entries(ZZB.temeGrafik).map(([k, v], i) => `<label class="chip"><input type="radio" name="gt" value="${k}" ${i ? "" : "checked"}><span>${v}</span></label>`).join("");
    gf.addEventListener("change", (e) => draw(e.target.value));
    gal.addEventListener("click", async (e) => {
      const b = e.target.closest("[data-share]"); if (!b) return;
      const data = { title: "Zakon za bogate", text: "6. decembra glasuj PROTI zakonu za bogate.", url: location.origin + location.pathname.replace(/[^/]*$/, "") };
      try { if (navigator.share) await navigator.share(data); else { await navigator.clipboard.writeText(data.url); b.textContent = "Kopirano!"; } } catch (_) {}
    });
    draw("vse");
  }

  /* ---------- argumentarij ---------- */
  const args = $("#args");
  if (args) {
    args.innerHTML = ZZB.miti.map((m) => `<div class="arg"><q>${esc(m.oni)}</q><p>${esc(m.mi)}</p></div>`).join("");
  }

  /* ---------- dogodki ---------- */
  const ev = $("#events");
  if (ev) {
    const MES = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"];
    const DAN = ["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"];
    const draw = (mesto) => {
      ev.innerHTML = ZZB.dogodki.filter((d) => !mesto || d.glavni || d.kraj.startsWith(mesto)).map((d) => {
        const dt = new Date(d.datum + "T12:00:00");
        return `<article class="event${d.glavni ? " event--main" : ""}">
          <div class="event__date"><span class="day">${dt.getDate()}.</span> <span class="mon">${MES[dt.getMonth()]} · ${DAN[dt.getDay()]}</span></div>
          <div><h3 class="event__title">${esc(d.naslov)}</h3>
            <div class="event__meta"><span>📍 ${esc(d.kraj)}</span><span>🕑 ${esc(d.ura)}</span>
              <span class="tag" style="--c:var(--ink)">${esc(d.tip)}</span>${d.primer ? '<span class="tag badge-sample" style="--c:var(--ink)">Primer</span>' : ""}</div></div>
          <div>${d.glavni ? '<a class="btn" href="aktiviraj.html">Kako glasujem?</a>' : '<a class="btn btn--paper" href="#">Pridem</a>'}</div>
        </article>`;
      }).join("");
    };
    const cities = [...new Set(ZZB.dogodki.filter((d) => !d.glavni).map((d) => d.kraj.split(",")[0]))];
    $("#cityFilter").innerHTML = `<label class="chip"><input type="radio" name="city" value="" checked><span>Vsa mesta</span></label>` +
      cities.map((c) => `<label class="chip"><input type="radio" name="city" value="${esc(c)}"><span>${esc(c)}</span></label>`).join("");
    $("#cityFilter").addEventListener("change", (e) => draw(e.target.value));
    draw("");
  }

  /* ---------- obrazci (prototip) ---------- */
  $$("form[data-proto]").forEach((f) => f.addEventListener("submit", (e) => {
    e.preventDefault();
    let n = f.querySelector(".notice");
    if (!n) { n = document.createElement("div"); n.className = "notice"; f.appendChild(n); }
    n.textContent = f.dataset.proto;
  }));
})();
