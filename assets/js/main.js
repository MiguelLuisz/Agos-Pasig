// Agos Pasig: page switching, menus, chapter bar and sources list
(function () {
  'use strict';

  /* ---------- Sources (APA). Third value "home" = also listed on Home ---------- */
  var SOURCES = [
    ["Asian Development Bank. (2009, April 30). Country water action: Resuscitating the Pasig River.", "https://www.adb.org/results/country-water-action-resuscitating-pasig-river", "home"],
    ["BusinessWorld. (2021). DENR questions study saying Pasig River is top plastic polluter.", "https://www.bworldonline.com/?p=378770"],
    ["Department of Environment and Natural Resources – National Capital Region. (2025). Annual report 2025.", "https://ncr.denr.gov.ph/wp-content/uploads/2026/01/ANNUAL-REPORT-2025.pdf", "home"],
    ["Department of Environment and Natural Resources – National Capital Region. (2025). State of Metro Manila’s environment and natural resources.", "https://ncr.denr.gov.ph/news-events/denr-ncr-launches-state-of-metro-manilas-environment-and-natural-resources-campaign-in-celebration-of-philippine-environment-month-2025/"],
    ["Department of Environment and Natural Resources – National Capital Region. (n.d.). Manila Bay rehabilitation program.", "https://ncr.denr.gov.ph/manila-bay-rehabilitation-program/"],
    ["Department of Environment and Natural Resources. (n.d.). Manila Bay clean-up, rehabilitation and preservation program.", "https://denr.gov.ph/?p=390"],
    ["Department of the Interior and Local Government – National Capital Region. (2025, December 23). DILG-NCR reaffirms unified action for Manila Bay rehabilitation at 2025 stakeholders forum.", "https://ncr.dilg.gov.ph/dilg-ncr-reaffirms-unified-action-for-manila-bay-rehabilitation-at-2025-stakeholders-forum/"],
    ["Ilao, C. I. L., Casila, J. C. C., Kurniawan, T. A., Sampang, R. S., Panganiban, L. L. T., Patacsil, L. B., & Limbago, J. S. (2025). Assessment of microplastics and heavy metal contamination in surficial sediments of Pasig River, Philippines during wet season. Journal of Contaminant Hydrology, 270, 104527.", "https://doi.org/10.1016/j.jconhyd.2025.104527"],
    ["Inter-Agency Council for the Pasig River Urban Development. (2025). Phase 3 – Pasig: Bigyang buhay muli.", "https://pasigriver.com.ph/phase-3/"],
    ["International RiverFoundation. (2018). Pasig River: Asia Riverprize winner.", "https://riverfoundation.org.au/prizes/pasig-river/"],
    ["International Water Association. (n.d.). Manila, Philippines.", "https://www.iwa-network.org/manila-philippines"],
    ["Kanto Digital Architecture Magazine. (2022). The importance of the Pasig River.", "https://kanto.ph/voices/pasig-river-national-cultural-treasure/"],
    ["Meijer, L. J. J., van Emmerik, T., van der Ent, R., Schmidt, C., & Lebreton, L. (2021). More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean. Science Advances, 7(18), eaaz5803.", "https://doi.org/10.1126/sciadv.aaz5803"],
    ["Nomadic Indian. (2026, May 7). World’s most polluted river: Pasig, Philippines [Video]. YouTube.", "https://www.youtube.com/watch?v=phKXSnY-_1Q"],
    ["Pasig River Rehabilitation Commission. (2019, March 4). PRRC highlights milestones and priority rehabilitation activities for the Pasig River system. Department of Budget and Management.", "https://www.dbm.gov.ph/index.php/management-2/580-prrc-highlights-milestones-and-priority-rehabilitation-activities-for-the-pasig-river-system"],
    ["Philippine Daily Inquirer. (2021). Pasig River makes international waves despite being dead.", "https://newsinfo.inquirer.net/1446482/pasig-river-makes-international-waves-despite-being-dead"],
    ["Philippine Daily Inquirer. (2026, July 20). Manila Water expands sewer coverage in Pasig to advance public health.", "https://newsinfo.inquirer.net/2267083/manila-water-expands-sewer-coverage-in-pasig-to-advance-public-health"],
    ["Philippine Daily Inquirer. (2026). Manila Water expands sewer network to 500 km as of July 2026.", "https://newsinfo.inquirer.net/2307668/manila-water-expands-sewer-network-to-500-km-as-of-july-2026"],
    ["Philippine Information Agency. (2025, February 28). PBBM launches third phase of Pasig River Rehabilitation Project.", "https://pia.gov.ph/news/pbbm-launches-third-phase-of-pasig-river-rehabilitation-project/"],
    ["Philstar. (2025, September 28). PCG: Tributaries main contributor to Pasig River pollution.", "https://www.philstar.com/nation/2025/09/28/2475895/pcg-tributaries-main-contributor-pasig-river-pollution"],
    ["Presidential Communications Office. (2026, August 20). Marcos admin warns companies of their obligations under Extended Producer Responsibility Act of 2022.", "https://pco.gov.ph/news_releases/marcos-admin-warns-companies-of-their-obligations-under-extended-producer-responsibility-act-of-2022/"],
    ["Presidential Communications Office. (n.d.). PBBM reveals more projects for Pasig River, Manila redevelopment.", "https://pco.gov.ph/news_releases/pbbm-reveals-more-projects-for-pasig-river-manila-redevelopment/"],
    ["Republic Act No. 11898. (2022). Extended Producer Responsibility Act of 2022. The Lawphil Project.", "https://lawphil.net/statutes/repacts/ra2022/ra_11898_2022.html"],
    ["RiverRecycle. (n.d.). Pasig River cleanup with ICTSI Foundation.", "https://www.riverrecycle.com/projects/pasig-river-cleanup-with-ictsi-foundation/"],
    ["The Ocean Cleanup. (2026, June 4). The Ocean Cleanup forges alliance with Philippine Government [Press release].", "https://theoceancleanup.com/press/press-releases/the-ocean-cleanup-forge-alliance-with-philippine-government/"],
    ["Villanueva, J. D., Le Coustumer, P., Huneau, F., Motelica-Heino, M., Perez, T. R., Materum, R., Espaldon, M. V. O., & Stoll, S. (2013). Assessment of trace metals during episodic events using DGT passive sampler: A proposal for water management enhancement. Water Resources Management, 27(12), 4163–4181.", "https://doi.org/10.1007/s11269-013-0401-5"]
  ];

  function fillSources(list, items) {
    if (!list) return;
    items.forEach(function (item) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      li.appendChild(document.createTextNode(item[0] + ' '));
      a.href = item[1];
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = item[1];
      li.appendChild(a);
      list.appendChild(li);
    });
  }
  fillSources(document.querySelector('[data-list="river"]'), SOURCES);
  fillSources(document.querySelector('[data-list="home"]'), SOURCES.filter(function (s) { return s[2] === 'home'; }));

  /* ---------- Elements ---------- */
  var home = document.getElementById('page-home');
  var river = document.getElementById('page-river');
  var aboutEl = document.getElementById('about');
  var nav = document.querySelector('.nav');
  var links = document.getElementById('nav-links');
  var menuBtn = document.getElementById('menu-btn');
  var bar = document.querySelector('.chapbar .wrap');
  var fadeL = document.querySelector('.chapbar .fade.l');
  var fadeR = document.querySelector('.chapbar .fade.r');
  var RIVER_IDS = ['river', 'ch1', 'ch2', 'ch3', 'ch4', 'sustainable', 'act'];
  var CHAPTERS = ['ch1', 'ch2', 'ch3', 'ch4'];

  function isShown(el) { return !!el && !el.hidden; }

  function setActive(selector, attr, key) {
    document.querySelectorAll(selector).forEach(function (el) {
      var on = el.getAttribute(attr) === key;
      el.classList.toggle('active', on);
      if (on) el.setAttribute('aria-current', 'true'); else el.removeAttribute('aria-current');
    });
  }

  function closeMenu() {
    links.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  /* ---------- Page switching (Home / The River) ---------- */
  function route() {
    var hash = (location.hash || '#home').slice(1);
    var onRiver = RIVER_IDS.indexOf(hash) > -1;
    var switching = river.hidden === onRiver;   // true when the visible page changes
    home.hidden = onRiver;
    river.hidden = !onRiver;
    setActive('[data-nav]', 'data-nav', onRiver ? 'river' : (hash === 'about' ? 'about' : 'home'));
    closeMenu();

    var target = (hash === 'home' || hash === 'river') ? null : document.getElementById(hash);
    var behavior = switching ? 'instant' : 'smooth';
    if (isShown(target)) target.scrollIntoView({ behavior: behavior, block: 'start' });
    else window.scrollTo({ top: 0, behavior: behavior });

    currentChapter = undefined;
    setTimeout(updateHighlights, 60);
  }

  /* ---------- Scroll highlights ---------- */
  var currentChapter;

  // Home: "Home" above the About section, "About" from there down
  function homeHighlight() {
    if (home.hidden) return;
    var key = aboutEl.getBoundingClientRect().top <= nav.offsetHeight + 120 ? 'about' : 'home';
    setActive('[data-nav]', 'data-nav', key);
  }

  // The River: light up the chip for the chapter on screen
  function chapterHighlight() {
    if (river.hidden) return;
    var line = bar.getBoundingClientRect().bottom + 120;
    var cur = null;
    CHAPTERS.forEach(function (id) {
      var el = document.getElementById(id);
      if (isShown(el) && el.getBoundingClientRect().top <= line) cur = id;
    });
    if (cur === currentChapter) return;
    currentChapter = cur;
    setActive('[data-chip]', 'data-chip', cur);
    scrollChipIntoView(cur && bar.querySelector('[data-chip="' + cur + '"]'));
  }

  function updateHighlights() {
    homeHighlight();
    chapterHighlight();
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; updateHighlights(); });
  }, { passive: true });

  /* ---------- Chapter bar: swipe, drag, wheel, edge fades ---------- */
  function updateFades() {
    var max = bar.scrollWidth - bar.clientWidth;
    fadeL.classList.toggle('on', bar.scrollLeft > 4);
    fadeR.classList.toggle('on', bar.scrollLeft < max - 4);
  }

  function scrollChipIntoView(chip) {
    if (!chip) return;
    var b = bar.getBoundingClientRect();
    var c = chip.getBoundingClientRect();
    var pad = parseInt(getComputedStyle(bar).paddingLeft, 10) || 0;
    if (c.left < b.left + pad || c.right > b.right - pad) {
      bar.scrollTo({ left: bar.scrollLeft + c.left - b.left - pad, behavior: 'smooth' });
    }
  }

  bar.addEventListener('scroll', updateFades, { passive: true });
  window.addEventListener('resize', updateFades);

  // Mouse wheel scrolls the row sideways when it overflows
  bar.addEventListener('wheel', function (e) {
    if (bar.scrollWidth > bar.clientWidth && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      bar.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }, { passive: false });

  // Click-and-drag with a mouse (touch uses native swiping)
  var dragging = false, dragged = false, startX = 0, startScroll = 0;
  bar.addEventListener('pointerdown', function (e) {
    if (e.pointerType !== 'mouse') return;
    dragging = true; dragged = false;
    startX = e.clientX; startScroll = bar.scrollLeft;
  });
  window.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    var dx = e.clientX - startX;
    if (Math.abs(dx) > 5) { dragged = true; bar.classList.add('dragging'); }
    bar.scrollLeft = startScroll - dx;
  });
  window.addEventListener('pointerup', function () {
    dragging = false;
    setTimeout(function () { bar.classList.remove('dragging'); }, 0);
  });
  // A drag should not count as a click on a chip
  bar.addEventListener('click', function (e) {
    if (dragged) { e.preventDefault(); dragged = false; }
  }, true);

  /* ---------- Menu and links ---------- */
  menuBtn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', function (e) {
    // Close the phone menu when tapping outside it
    if (links.classList.contains('open') && !e.target.closest('.nav')) closeMenu();
    // Clicking a link to the section you're already on still scrolls there
    var a = e.target.closest('a[href^="#"]');
    if (a && a.getAttribute('href') === (location.hash || '#home')) {
      e.preventDefault();
      route();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      closeMenu();
      menuBtn.focus();
    }
  });

  window.addEventListener('hashchange', route);

  /* ---------- Solution cards: same closed height per row, each opens on its own ---------- */
  var solCards = Array.prototype.slice.call(document.querySelectorAll('.sol-grid .sol'));
  function closedHeight(card) {
    var extra = 0;
    card.querySelectorAll('.facir[open] > .facir-body').forEach(function (body) {
      extra += body.offsetHeight + parseFloat(getComputedStyle(body).marginTop || 0);
    });
    return card.offsetHeight - extra;
  }
  function equalizeSolutions() {
    if (!solCards.length) return;
    solCards.forEach(function (c) { c.style.minHeight = ''; });
    var cols = getComputedStyle(solCards[0].parentNode).gridTemplateColumns.split(' ').length;
    if (cols < 2) return;
    for (var i = 0; i < solCards.length; i += cols) {
      var row = solCards.slice(i, i + cols);
      var h = Math.max.apply(null, row.map(closedHeight));
      row.forEach(function (c) { c.style.minHeight = h + 'px'; });
    }
  }
  // "Show less" closes the card and brings its top back into view if needed
  document.querySelectorAll('.facir-close').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var d = btn.closest('details');
      var card = btn.closest('.sol');
      d.open = false;
      var top = d.getBoundingClientRect().top;
      var navH = nav.offsetHeight + (document.querySelector('.chapbar').offsetHeight || 0);
      if (top < navH) window.scrollTo({ top: window.scrollY + top - navH - 16, behavior: 'smooth' });
      d.querySelector('summary').focus({ preventScroll: true });
    });
  });
  window.addEventListener('resize', equalizeSolutions);
  window.addEventListener('hashchange', function () { setTimeout(equalizeSolutions, 0); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(equalizeSolutions);

  /* ---------- Reading progress + back to top ---------- */
  var bar = document.querySelector('.progress span');
  var toTop = document.querySelector('.to-top');
  function onProgress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    if (bar) bar.style.transform = 'scaleX(' + pct + ')';
    if (toTop) toTop.classList.toggle('show', window.scrollY > window.innerHeight * 0.8);
  }
  window.addEventListener('scroll', onProgress, { passive: true });
  window.addEventListener('resize', onProgress);
  window.addEventListener('hashchange', function () { setTimeout(onProgress, 50); });
  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    var first = document.querySelector('main.page:not([hidden]) h1, main.page:not([hidden]) h2');
    if (first) { first.setAttribute('tabindex', '-1'); first.focus({ preventScroll: true }); }
  });

  /* ---------- Fade sections in as they scroll into view ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    var revealEls = document.querySelectorAll('main .heading, main .grid-2 > *, main .grid-3 > *, main .grid-4 > *, main .sol-grid > *, main .split > *, main .compare-wrap, main .map, main .video');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el, i) {
      if (el.closest('.hero')) return;
      el.classList.add('reveal');
      var sibs = el.parentNode.children, idx = Array.prototype.indexOf.call(sibs, el);
      if (el.parentNode.matches('.grid-2, .grid-3, .grid-4, .sol-grid')) el.style.transitionDelay = (idx % 4) * 80 + 'ms';
      io.observe(el);
    });
  }

  /* ---------- Start ---------- */
  route();
  updateFades();
  equalizeSolutions();
  onProgress();
  setTimeout(updateHighlights, 150);
})();
