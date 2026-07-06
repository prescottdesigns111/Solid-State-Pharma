/* ============================================
   Solid State Pharma — shared site scripts
   Injects header/footer, powers search, tabs,
   toggles, and dynamic detail pages.
   ============================================ */

(function () {
  "use strict";

  var activePage = document.body.getAttribute("data-page") || "";

  /* ---------------- Header ---------------- */
  var headerHTML =
    '<div class="container header-inner">' +
    '  <a class="brand" href="index.html" aria-label="Solid State Pharma home">' +
    '    <img src="images/solid-state-pharma-logo.svg" alt="Solid State Pharma logo">' +
    "  </a>" +
    '  <nav class="main-nav" id="main-nav">' +
    '    <div class="nav-item"><a class="nav-link" data-nav="home" href="index.html">Home</a></div>' +
    '    <div class="nav-item">' +
    '      <a class="nav-link" data-nav="about" href="about.html">About</a>' +
    '      <div class="dropdown-menu">' +
    '        <a href="about.html#our-team">Our Team</a>' +
    '        <a href="about.html#our-story">Our Story</a>' +
    '        <a href="publications.html">Publications</a>' +
    '        <a href="news.html">News</a>' +
    "      </div>" +
    "    </div>" +
    '    <div class="nav-item"><a class="nav-link" data-nav="services" href="services.html">Services</a></div>' +
    '    <div class="nav-item"><a class="nav-link" data-nav="technologies" href="technologies.html">Technologies</a></div>' +
    '    <div class="nav-item"><a class="nav-link" data-nav="careers" href="careers.html">Careers</a></div>' +
    "  </nav>" +
    '  <button class="search-btn" id="search-open" aria-label="Search the site">' +
    '    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>' +
    '    <span class="search-label">Search</span>' +
    "  </button>" +
    '  <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>' +
    "</div>";

  var header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = headerHTML;
  document.body.insertBefore(header, document.body.firstChild);

  var activeLink = header.querySelector('[data-nav="' + activePage + '"]');
  if (activeLink) activeLink.classList.add("active");

  document.getElementById("nav-toggle").addEventListener("click", function () {
    document.getElementById("main-nav").classList.toggle("open");
  });

  /* ---------------- Footer ---------------- */
  var footerHTML =
    '<div class="container">' +
    '  <div class="footer-grid">' +
    "    <div>" +
    '      <img class="footer-logo" src="images/solid-state-pharma-logo_white.svg" alt="Solid State Pharma logo">' +
    '      <p class="tagline">Where human ingenuity meets science and passion.</p>' +
    '      <div class="footer-social">' +
    '        <a href="https://www.linkedin.com/company/solid-state-pharma-inc-sspi-" target="_blank" rel="noopener" aria-label="LinkedIn">' +
    '          <svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.34h4.52V23H.24V8.34zM8.34 8.34h4.33v2h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V23h-4.5v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V23H8.34V8.34z"/></svg>' +
    "        </a>" +
    '        <a href="https://www.facebook.com/Solid-State-Pharma-Inc-103456211411170" target="_blank" rel="noopener" aria-label="Facebook">' +
    '          <svg viewBox="0 0 24 24"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22C18.34 21.24 22 17.08 22 12.06z"/></svg>' +
    "        </a>" +
    '        <a href="https://www.youtube.com/@solidstatepharma/featured" target="_blank" rel="noopener" aria-label="YouTube">' +
    '          <svg viewBox="0 0 24 24"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg>' +
    "        </a>" +
    "      </div>" +
    "    </div>" +
    "    <div>" +
    "      <h4>Explore</h4>" +
    "      <ul>" +
    '        <li><a href="index.html">Home</a></li>' +
    '        <li><a href="about.html">About</a></li>' +
    '        <li><a href="services.html">Services</a></li>' +
    '        <li><a href="technologies.html">Technologies</a></li>' +
    '        <li><a href="careers.html">Careers</a></li>' +
    '        <li><a href="publications.html">Publications</a></li>' +
    "      </ul>" +
    "    </div>" +
    "    <div>" +
    "      <h4>Contact</h4>" +
    "      <ul>" +
    "        <li>Suite 300, 1489 Hollis St.,<br>Halifax, NS, Canada, B3J 3M5</li>" +
    '        <li><a href="mailto:info@solidstatepharma.com">info@solidstatepharma.com</a></li>' +
    '        <li><a href="mailto:career@solidstatepharma.com">career@solidstatepharma.com</a></li>' +
    "      </ul>" +
    "    </div>" +
    "  </div>" +
    '  <div class="footer-bottom">' +
    "    <span>&copy; " + new Date().getFullYear() + " Solid State Pharma Inc. All rights reserved.</span>" +
    "    <span>ISO 9001:2015 Certified &mdash; Verified annually by NSF International</span>" +
    "  </div>" +
    "</div>";

  var footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = footerHTML;
  document.body.appendChild(footer);

  /* ---------------- Search ---------------- */
  var searchIndex = [
    { page: "Home", url: "index.html", title: "Welcome to Solid State Pharma", snippet: "Proprietary workflows combining crystallization and solid state science. Knowledge, not just data.", keywords: "welcome partner pharmaceutical cro crystallization solid state workflows knowledge" },
    { page: "Home", url: "index.html#quality", title: "Focused on Quality", snippet: "ISO 9001:2015 certified quality management system, verified annually by NSF International.", keywords: "quality iso 9001 nsf international audits certified" },
    { page: "Home", url: "index.html#mission", title: "Our Mission", snippet: "Bring innovative and reliable drugs to patients faster.", keywords: "mission patients community team clients value knowledge" },
    { page: "About", url: "about.html", title: "About Solid State Pharma", snippet: "Privately held solid state and crystallization engineering company founded in 2014.", keywords: "about cro contract research organization founded 2014 global leader" },
    { page: "About", url: "about.html#our-team", title: "Our Team", snippet: "Passionate scientists — 500+ hands-on projects, 100+ journal articles and patents.", keywords: "team scientists projects publications mavericks early late stage development" },
    { page: "About", url: "about.html#our-story", title: "Our Story", snippet: "Founded by Dr. Mahmoud Mirmehrabi in 2014 after 15 years of industry experience.", keywords: "story founder mahmoud mirmehrabi phd western ontario apotex wyeth pfizer johnson matthey" },
    { page: "Publications", url: "publications.html", title: "Publications", snippet: "Journal publications, patents, patent applications, and presentations.", keywords: "publications journal articles patents presentations papers research posters white papers download" },
    { page: "News", url: "news.html", title: "News", snippet: "The latest updates from Solid State Pharma.", keywords: "news updates announcements press" },
    { page: "Services", url: "services.html#polymorph-screening", title: "Polymorph Screening", snippet: "Early and late stage polymorph screening to find the most stable and viable solid form.", keywords: "polymorph screening early late stage glp tox nda metastable hydrates solvates stable form" },
    { page: "Services", url: "services.html#salt-screening", title: "Salt Screening", snippet: "Improve crystallinity, physiochemical properties, and bioavailability of drug candidates.", keywords: "salt screening crystallinity bioavailability ip protection freeform" },
    { page: "Services", url: "services.html#co-crystal-screening", title: "Co-Crystal Screening", snippet: "Rational co-former selection to improve bioavailability and physicochemical properties.", keywords: "co-crystal cocrystal screening coformer functional groups ternary phase diagram" },
    { page: "Services", url: "services.html#amorphous-to-crystalline", title: "Amorphous to Crystalline", snippet: "Promoting long range molecular arrangement to form seed crystals for a scalable crystallization process.", keywords: "amorphous crystalline conversion chromatography seed crystals steric hinderance molecular weight seeding" },
    { page: "Services", url: "services.html#crystallization-development", title: "Crystallization Development", snippet: "Early and later stage crystallization process engineering, DOE studies, and PAT-monitored scale-independent processes.", keywords: "crystallization development process optimization doe design-expert oiling out gumming filtration drying fbrm pat scale-up" },
    { page: "Services", url: "services.html#solid-state-characterization", title: "Solid State Characterization", snippet: "XRPD, DSC, TGA, microscopy, SEM, DVS, Karl Fischer, HPLC, and more.", keywords: "solid state characterization analysis xrpd dsc tga sem dvs karl fischer hplc nmr bet surface area particle size solubility" },
    { page: "Services", url: "services.html#pka-logp-determination", title: "pKa, Log P/D Determination", snippet: "pKa, Log P, and Log D measurement for low water solubility compounds via co-solvent methods.", keywords: "pka log p log d determination physicochemical yasuda-shedlovsky titration octanol uv-metric ph-metric" },
    { page: "Services", url: "services.html#chiral-resolution", title: "Chiral Resolution", snippet: "Chiral resolution of APIs and intermediates via diastereomeric salt formation.", keywords: "chiral resolution enantiomer diastereomeric salt resolving agents chiral acids bases" },
    { page: "Services", url: "services.html#particle-engineering", title: "Particle Engineering", snippet: "Jet milling, spray drying, and wet milling to control particle size distribution and morphology.", keywords: "particle engineering size distribution morphology jet mill spray dryer wet mill bioavailability" },
    { page: "Services", url: "services.html#ternary-phase-diagram", title: "Ternary Phase Diagram Development", snippet: "TPDs to define co-crystal stability regions and support scale-up.", keywords: "ternary phase diagram development tpd co-crystal stability eutectic slurry solubility xrpd" },
    { page: "Services", url: "services.html#preformulation-services", title: "Additional Preformulation Services", snippet: "Solubility, stability, and excipient compatibility studies for IND-enabling analyses.", keywords: "preformulation services additional solubility stability excipient compatibility forced degradation photostability dmso" },
    { page: "Services", url: "services.html#gmp-analysis", title: "GMP Analysis", snippet: "Health Canada Drug Establishment License for GMP-compliant particle size and thermal (DSC) analysis.", keywords: "gmp analysis analytical health canada drug establishment license del dsc particle size regulatory" },
    { page: "Technologies", url: "technology.html?tech=pxrd", title: "Powder X-Ray Diffractometers", snippet: "Definitive identification of crystalline solid forms.", keywords: "powder x-ray diffraction pxrd xrd diffractometer technology equipment" },
    { page: "Technologies", url: "technology.html?tech=particle-size", title: "Particle Size", snippet: "Particle size distribution measurement.", keywords: "particle size distribution laser diffraction microscopy technology equipment" },
    { page: "Technologies", url: "technology.html?tech=crystallization", title: "Crystallization Development Technology", snippet: "Automated reactor platforms and in-situ process analytics.", keywords: "crystallization reactors process analytical technology pat equipment" },
    { page: "Technologies", url: "technology.html?tech=thermal", title: "Thermal Analysis", snippet: "DSC and TGA thermal characterization.", keywords: "thermal analysis dsc tga calorimetry equipment technology" },
    { page: "Technologies", url: "technology.html?tech=other", title: "Other Equipment", snippet: "Supporting analytical and processing equipment.", keywords: "other equipment instruments laboratory technology" },
    { page: "Careers", url: "careers.html", title: "Careers at Solid State Pharma", snippet: "Join a team of passionate problem solvers in beautiful Halifax, Nova Scotia.", keywords: "careers jobs hiring cv halifax nova scotia benefits culture values rewards" },
    { page: "Careers", url: "careers.html#openings", title: "Open Positions", snippet: "Preformulation Scientist, Scientist, Analytical Instrumentation Specialist.", keywords: "open positions jobs apply preformulation scientist analytical instrumentation specialist" },
    { page: "Careers", url: "job.html?job=preformulation-scientist", title: "Preformulation Scientist", snippet: "Open position — Halifax, NS Canada. Open until filled.", keywords: "preformulation scientist job apply halifax" },
    { page: "Careers", url: "job.html?job=scientist", title: "Scientist", snippet: "Open position — Halifax, NS Canada. Open until filled.", keywords: "scientist job apply halifax crystallization" },
    { page: "Careers", url: "job.html?job=analytical-instrumentation-specialist", title: "Analytical Instrumentation Specialist", snippet: "Open position — Halifax, NS Canada. Open until filled.", keywords: "analytical instrumentation specialist job apply halifax" }
  ];

  var overlay = document.createElement("div");
  overlay.className = "search-overlay";
  overlay.id = "search-overlay";
  overlay.innerHTML =
    '<div class="search-panel">' +
    '  <div class="search-input-wrap">' +
    '    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>' +
    '    <input type="text" id="site-search-input" placeholder="Search services, technologies, publications&hellip;" autocomplete="off">' +
    '    <button class="search-close" id="search-close">ESC</button>' +
    "  </div>" +
    '  <div class="search-results" id="search-results"></div>' +
    "</div>";
  document.body.appendChild(overlay);

  var searchInput = document.getElementById("site-search-input");
  var searchResults = document.getElementById("search-results");

  function openSearch() {
    overlay.classList.add("open");
    searchInput.value = "";
    renderResults("");
    setTimeout(function () { searchInput.focus(); }, 30);
  }
  function closeSearch() { overlay.classList.remove("open"); }

  function renderResults(query) {
    var q = query.trim().toLowerCase();
    if (!q) {
      searchResults.innerHTML = '<div class="search-empty">Start typing to search the site &mdash; try &ldquo;polymorph&rdquo;, &ldquo;careers&rdquo;, or &ldquo;X-ray&rdquo;.</div>';
      return;
    }
    var terms = q.split(/\s+/);
    var matches = searchIndex.filter(function (item) {
      var hay = (item.title + " " + item.snippet + " " + item.keywords + " " + item.page).toLowerCase();
      return terms.every(function (t) { return hay.indexOf(t) !== -1; });
    });
    if (!matches.length) {
      searchResults.innerHTML = '<div class="search-empty">No results found for &ldquo;' + query.replace(/[<>&]/g, "") + '&rdquo;.</div>';
      return;
    }
    searchResults.innerHTML = matches
      .map(function (m) {
        return '<a class="result" href="' + m.url + '">' +
          '<span class="r-page">' + m.page + "</span>" +
          '<div class="r-title">' + m.title + "</div>" +
          '<div class="r-snippet">' + m.snippet + "</div>" +
          "</a>";
      })
      .join("");
  }

  document.getElementById("search-open").addEventListener("click", openSearch);
  document.getElementById("search-close").addEventListener("click", closeSearch);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closeSearch(); });
  searchInput.addEventListener("input", function () { renderResults(searchInput.value); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSearch();
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
  });

  /* ---------------- Publication toggles ---------------- */
  document.querySelectorAll(".pub-toggle-header").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.parentElement.classList.toggle("open");
    });
  });

  /* ---------------- Careers tabs ---------------- */
  document.querySelectorAll(".tab-buttons button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var group = btn.closest(".jobs-tabs");
      group.querySelectorAll(".tab-buttons button").forEach(function (b) { b.classList.remove("active"); });
      group.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
      btn.classList.add("active");
      group.querySelector("#" + btn.getAttribute("data-tab")).classList.add("active");
    });
  });

  /* ---------------- Services sidebar scroll-spy ---------------- */
  var sideLinks = document.querySelectorAll(".services-sidebar a");
  if (sideLinks.length) {
    var blocks = document.querySelectorAll(".service-block");
    var spy = function () {
      var current = "";
      blocks.forEach(function (b) {
        if (window.scrollY + 140 >= b.offsetTop) current = b.id;
      });
      sideLinks.forEach(function (l) {
        l.classList.toggle("active", l.getAttribute("href") === "#" + current);
      });
    };
    window.addEventListener("scroll", spy, { passive: true });
    spy();
  }

  /* ---------------- Email-gated download form ---------------- */
  var emailForm = document.getElementById("download-form");
  if (emailForm) {
    emailForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.getElementById("download-note");
      note.textContent = "Thank you! The requested posters and white papers will be sent to " +
        document.getElementById("download-email").value + " shortly.";
      note.classList.add("show");
      emailForm.reset();
    });
  }
})();
