const I18N = {
  en: {
    preview: "Click skeleton · photos are real, copy and calendar are placeholders",
    brandSub: "Funchal",
    navPlace: "The place",
    navApt: "Apartment",
    navWg: "Garden floor",
    navStay: "The stay",
    navContact: "Contact",
    navBook: "Request a stay",
    heroKicker: "Two units",
    heroTitle: "Casa Alice",
    heroLede: "A typical Madeiran house above Ponta do Sol. Sea view, tropical garden, private pool. Request a stay directly with us.",
    heroCta: "Availability",
    heroStory: "How it was made",
    homeQuoteTr: "There is a country where the sea is bluer.",
    unitsKicker: "The house",
    unitsTitle: "Two floors, two separate stays",
    aptMeta: "Upper floor",
    aptTitle: "Apartment",
    aptText: "One bedroom, white wooden ceiling, private terrace and the pool.",
    homeAptText: "Tropical terrace, sea view and pool.",
    wgMeta: "Ground floor",
    wgTitle: "Ground floor",
    wgText: "Larger rooms and the long terrace into the garden, with the zen hut.",
    homeWgText: "Large terrace, garden and zen hut.",
    homePlaceKicker: "The house and the land",
    homePlaceTitle: "How it was made",
    homePlaceLede: "How the land took shape.",
    homePlaceCta: "Our story",
    more: "Open page",
    placeTitle: "Five, six years on the slope",
    placeLede: "Not a brochure. The path from a raw hillside to pool, terraces, zen alley and fruit trees — still being finished.",
    bookKicker: "Direct booking",
    bookTitle: "Request a stay",
    bookLede: "Choose a unit and dates. We confirm by hand within a few hours and then block Airbnb and Booking.com so nothing doubles.",
    bookNote: "Phase 1: request to book. No instant charge. Sample busy days are painted only to show the skeleton.",
    stayTitle: "Before you arrive",
    stayLede: "House notes, tourist tax, and the AL number will live here. Skeleton only.",
    contactTitle: "Write to us",
    contactLede: "WhatsApp or mail. This form does not send yet.",
    footerLegal: "AL number to come · Tourist tax €2 / person / night in Funchal",
    footerHybrick: "A house of Hybrick Studio",
    formUnit: "Unit",
    formArrive: "Arrival",
    formLeave: "Departure",
    formGuests: "Guests",
    formName: "Name",
    formEmail: "Email",
    formMsg: "Message",
    formSend: "Send request",
    formOk: "Skeleton only — nothing was sent. Later this lands in our inbox and we block the calendars.",
    busy: "Taken",
    free: "Free",
    pick: "Selected"
  },
  de: {
    preview: "Klickgerüst · Fotos echt, Texte und Kalender noch Platzhalter",
    brandSub: "Funchal",
    navPlace: "Der Ort",
    navApt: "Apartment",
    navWg: "Gartengeschoss",
    navStay: "Aufenthalt",
    navContact: "Kontakt",
    navBook: "Aufenthalt anfragen",
    heroKicker: "Zwei Units",
    heroTitle: "Casa Alice",
    heroLede: "Ein typisch madeirensisches Haus über Ponta do Sol. Meerblick, tropischer Garten, privater Pool. Aufenthalt direkt bei uns anfragen.",
    heroCta: "Verfügbarkeit",
    heroStory: "Entstehungsprozess",
    homeQuoteTr: "Es gibt ein Land, wo das Meer blauer ist.",
    unitsKicker: "Das Haus",
    unitsTitle: "Zwei Etagen, zwei separate Erfahrungen",
    aptMeta: "Oben",
    aptTitle: "Apartment",
    aptText: "Ein Schlafzimmer, weiße Holzdecke, eigene Terrasse und der Pool.",
    homeAptText: "Mit tropischer Terrasse, Meerblick und Pool.",
    wgMeta: "Unten",
    wgTitle: "Erdgeschoss",
    wgText: "Mehr Fläche und die lange Terrasse in den Garten, mit Zen-Hütte.",
    homeWgText: "Große Terrasse, Gartenbereich und Zen-Hütte.",
    homePlaceKicker: "Das Haus und das Grundstück",
    homePlaceTitle: "Entstehungsprozess",
    homePlaceLede: "Wie das Grundstück entstand.",
    homePlaceCta: "Unsere Story",
    more: "Seite öffnen",
    placeTitle: "Fünf, sechs Jahre am Hang",
    placeLede: "Kein Prospekt. Der Weg vom rohen Hang zu Pool, Terrassen, Zen-Allee und Fruchtbäumen — noch nicht fertig.",
    bookKicker: "Direktbuchung",
    bookTitle: "Aufenthalt anfragen",
    bookLede: "Unit und Daten wählen. Wir bestätigen per Hand in wenigen Stunden und sperren danach Airbnb und Booking.com.",
    bookNote: "Phase 1: Request to Book. Keine Sofortzahlung. Belegte Tage sind nur Beispiel, damit das Gerüst lesbar ist.",
    stayTitle: "Vor der Anreise",
    stayLede: "Hausregeln, Kurtaxe und AL-Nummer kommen hierher. Noch Gerüst.",
    contactTitle: "Schreibt uns",
    contactLede: "WhatsApp oder Mail. Das Formular sendet noch nicht.",
    footerLegal: "AL-Nummer folgt · Kurtaxe 2 € / Person / Nacht in Funchal",
    footerHybrick: "Ein Haus von Hybrick Studio",
    formUnit: "Unit",
    formArrive: "Anreise",
    formLeave: "Abreise",
    formGuests: "Gäste",
    formName: "Name",
    formEmail: "E-Mail",
    formMsg: "Nachricht",
    formSend: "Anfrage senden",
    formOk: "Nur Gerüst — es wurde nichts verschickt. Später landet das bei uns und wir blocken die Kalender.",
    busy: "Belegt",
    free: "Frei",
    pick: "Gewählt"
  }
};

function lang() {
  return localStorage.getItem("ca-lang") || "de";
}

function t(key) {
  return (I18N[lang()] && I18N[lang()][key]) || I18N.en[key] || key;
}

function applyI18n() {
  document.querySelectorAll("[data-i]").forEach((el) => {
    el.textContent = t(el.dataset.i);
  });
  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("on", b.dataset.lang === lang());
  });
  document.documentElement.lang = lang();
}

function chrome() {
  const page = document.body.dataset.page;
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) {
    header.innerHTML = `
      <div class="preview-bar"><span data-i="preview"></span></div>
      <nav class="nav">
        <a class="brand" href="index.html" aria-label="Casa Alice Madeira">
            <img src="images/logo-nav.png" alt="Casa Alice Madeira" />
          </a>
        <div class="nav-right">
          <div class="nav-links" id="nav-links">
            <a href="the-place.html" class="${page === "place" ? "active" : ""}" data-i="navPlace"></a>
            <a href="apartment.html" class="${page === "apt" ? "active" : ""}" data-i="navApt"></a>
            <a href="wg.html" class="${page === "wg" ? "active" : ""}" data-i="navWg"></a>
            <a href="stay.html" class="${page === "stay" ? "active" : ""}" data-i="navStay"></a>
            <a href="contact.html" class="${page === "contact" ? "active" : ""}" data-i="navContact"></a>
            <a href="book.html" class="nav-cta ${page === "book" ? "active" : ""}" data-i="navBook"></a>
          </div>
          <div class="lang">
            <button data-lang="de">DE</button>
            <button data-lang="en">EN</button>
          </div>
          <button class="burger" id="burger" aria-label="Menu">☰</button>
        </div>
      </nav>`;
  }
  if (footer) {
    footer.innerHTML = `
      <div class="wrap foot">
        <div>
          <div class="footer-logo"><img src="images/logo-nav.png" alt="Casa Alice Madeira" /></div>
          <p data-i="footerLegal"></p>
        </div>
        <div>
          <div class="hybrick" data-i="footerHybrick"></div>
          <p>Funchal, Madeira</p>
        </div>
      </div>`;
  }
  header?.querySelectorAll("[data-lang]").forEach((b) => {
    b.addEventListener("click", () => {
      localStorage.setItem("ca-lang", b.dataset.lang);
      applyI18n();
    });
  });
  header?.querySelector("#burger")?.addEventListener("click", () => {
    header.querySelector("#nav-links").classList.toggle("open");
  });
  applyI18n();
}

function ymd(d) {
  return d.toISOString().slice(0, 10);
}

function renderCalendar() {
  const root = document.getElementById("calendar");
  if (!root) return;

  const busy = new Set([
    "2026-09-03", "2026-09-04", "2026-09-05", "2026-09-06",
    "2026-09-12", "2026-09-13", "2026-09-18", "2026-09-19", "2026-09-20",
    "2026-10-02", "2026-10-03", "2026-10-04", "2026-10-10", "2026-10-11"
  ]);

  let cursor = new Date(2026, 8, 1);
  let start = null;
  let end = null;

  const arrive = document.getElementById("arrive");
  const leave = document.getElementById("leave");

  function paint() {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const first = new Date(year, month, 1);
    const startDow = (first.getDay() + 6) % 7;
    const days = new Date(year, month + 1, 0).getDate();
    const title = first.toLocaleDateString(lang() === "de" ? "de-DE" : "en-GB", { month: "long", year: "numeric" });

    let cells = "";
    const dows = lang() === "de"
      ? ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
      : ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    dows.forEach((d) => { cells += `<div class="dow">${d}</div>`; });
    for (let i = 0; i < startDow; i++) cells += "<div></div>";
    for (let d = 1; d <= days; d++) {
      const date = new Date(year, month, d);
      const key = ymd(date);
      const isBusy = busy.has(key);
      const selected = start && key === start;
      const selectedEnd = end && key === end;
      const inrange = start && end && key > start && key < end;
      const cls = ["day", isBusy ? "busy" : "", (selected || selectedEnd || inrange) ? "selected" : ""].join(" ");
      cells += `<button type="button" class="${cls}" data-day="${key}" ${isBusy ? "disabled" : ""}>${d}</button>`;
    }

    root.innerHTML = `
      <div class="cal-head">
        <button type="button" id="prev">‹</button>
        <strong>${title}</strong>
        <button type="button" id="next">›</button>
      </div>
      <div class="cal-grid">${cells}</div>
      <div class="legend">
        <span><i class="swatch" style="background:#eadfd0"></i><span data-i="busy"></span></span>
        <span><i class="swatch" style="background:#1c4654"></i><span data-i="pick"></span></span>
      </div>`;

    root.querySelector("#prev").onclick = () => { cursor.setMonth(cursor.getMonth() - 1); paint(); applyI18n(); };
    root.querySelector("#next").onclick = () => { cursor.setMonth(cursor.getMonth() + 1); paint(); applyI18n(); };
    root.querySelectorAll(".day:not(.busy)").forEach((btn) => {
      btn.onclick = () => {
        const key = btn.dataset.day;
        if (!start || (start && end)) {
          start = key; end = null;
        } else if (key < start) {
          end = start; start = key;
        } else {
          end = key;
        }
        if (arrive) arrive.value = start || "";
        if (leave) leave.value = end || "";
        paint();
        applyI18n();
      };
    });
    applyI18n();
  }
  paint();
}

function bindForm() {
  const form = document.getElementById("request-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const box = document.getElementById("form-ok");
    if (box) box.style.display = "block";
    form.reset();
  });
}

function startHeroSlideshow() {
  const root = document.getElementById("hero-slides");
  if (!root) return;
  const slides = Array.from(root.querySelectorAll("img"));
  if (slides.length < 2) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let i = 0;
  const hold = 1700;
  setInterval(() => {
    slides[i].classList.remove("is-on");
    i = (i + 1) % slides.length;
    slides[i].classList.add("is-on");
  }, hold);
}

function hydrateRemotePhotos() {
  const apply = () => {
    if (!window.CA_IMG) return;
    document.querySelectorAll("img[src]").forEach((img) => {
      const key = img.getAttribute("src");
      if (window.CA_IMG[key]) img.src = window.CA_IMG[key];
    });
    document.querySelectorAll("link[href]").forEach((link) => {
      const key = link.getAttribute("href");
      if (window.CA_IMG[key]) link.href = window.CA_IMG[key];
    });
  };
  window.addEventListener("ca-photos", apply);
  if (window.CA_IMG && Object.keys(window.CA_IMG).length) apply();
  const s = document.createElement("script");
  s.src = "photos.js";
  s.onload = apply;
  document.head.appendChild(s);
  window.__caApplyPhotos = apply;
}

document.addEventListener("DOMContentLoaded", () => {
  hydrateRemotePhotos();
  chrome();
  if (window.__caApplyPhotos) window.__caApplyPhotos();
  renderCalendar();
  bindForm();
  startHeroSlideshow();
});
