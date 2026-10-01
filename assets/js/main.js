// Agos Pasig: page switching, menus, chapter bar and sources list
(function () {
  'use strict';

  /* ---------- Sources (APA). Third value "home" = also listed on Home ---------- */
  var SOURCES = [
    ["Asian Development Bank. (2009, April 30). Country water action: Resuscitating the Pasig River.","https://www.adb.org/results/country-water-action-resuscitating-pasig-river","home"],
    ["BusinessWorld. (2021). DENR questions study saying Pasig River is top plastic polluter.","https://www.bworldonline.com/?p=378770"],
    ["Department of Environment and Natural Resources – National Capital Region. (2025). Annual report 2025.","https://ncr.denr.gov.ph/wp-content/uploads/2026/01/ANNUAL-REPORT-2025.pdf","home"],
    ["Department of Environment and Natural Resources – National Capital Region. (2025). State of Metro Manila’s environment and natural resources.","https://ncr.denr.gov.ph/news-events/denr-ncr-launches-state-of-metro-manilas-environment-and-natural-resources-campaign-in-celebration-of-philippine-environment-month-2025/"],
    ["Department of Environment and Natural Resources – National Capital Region. (n.d.). Manila Bay rehabilitation program.","https://ncr.denr.gov.ph/manila-bay-rehabilitation-program/"],
    ["Ilao, C. I. L., Casila, J. C. C., Kurniawan, T. A., Sampang, R. S., Panganiban, L. L. T., Patacsil, L. B., & Limbago, J. S. (2025). Assessment of microplastics and heavy metal contamination in surficial sediments of Pasig River, Philippines during wet season. Journal of Contaminant Hydrology, 270, 104527.","https://doi.org/10.1016/j.jconhyd.2025.104527"],
    ["Inter-Agency Council for the Pasig River Urban Development. (2025). Phase 3 – Pasig: Bigyang buhay muli.","https://pasigriver.com.ph/phase-3/"],
    ["International RiverFoundation. (2018). Pasig River: Asia Riverprize winner.","https://riverfoundation.org.au/prizes/pasig-river/"],
    ["Kanto Digital Architecture Magazine. (2022). The importance of the Pasig River.","https://kanto.ph/voices/pasig-river-national-cultural-treasure/"],
    ["Meijer, L. J. J., van Emmerik, T., van der Ent, R., Schmidt, C., & Lebreton, L. (2021). More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean. Science Advances, 7(18), eaaz5803.","https://doi.org/10.1126/sciadv.aaz5803"],
    ["Nomadic Indian. (n.d.). World’s most polluted river: Pasig, Philippines [Video]. YouTube.","https://www.youtube.com/watch?v=phKXSnY-_1Q"],
    ["Pasig River Rehabilitation Commission. (2019, March 4). PRRC highlights milestones and priority rehabilitation activities for the Pasig River system. Department of Budget and Management.","https://www.dbm.gov.ph/index.php/management-2/580-prrc-highlights-milestones-and-priority-rehabilitation-activities-for-the-pasig-river-system"],
    ["Philippine Daily Inquirer. (2021). Pasig River makes international waves despite being dead.","https://newsinfo.inquirer.net/1446482/pasig-river-makes-international-waves-despite-being-dead"],
    ["Philippine Information Agency. (2025, February 28). PBBM launches third phase of Pasig River Rehabilitation Project.","https://pia.gov.ph/news/pbbm-launches-third-phase-of-pasig-river-rehabilitation-project/"],
    ["Philstar. (2025, September 28). PCG: Tributaries main contributor to Pasig River pollution.","https://www.philstar.com/nation/2025/09/28/2475895/pcg-tributaries-main-contributor-pasig-river-pollution"],
    ["RiverRecycle. (n.d.). Pasig River cleanup with ICTSI Foundation.","https://www.riverrecycle.com/projects/pasig-river-cleanup-with-ictsi-foundation/"],
    ["The Ocean Cleanup. (2026, June 4). The Ocean Cleanup forges alliance with Philippine Government [Press release].","https://theoceancleanup.com/press/press-releases/the-ocean-cleanup-forge-alliance-with-philippine-government/"],
    ["Villanueva, J. D., Le Coustumer, P., Huneau, F., Motelica-Heino, M., Perez, T. R., Materum, R., Espaldon, M. V. O., & Stoll, S. (2013). Assessment of trace metals during episodic events using DGT passive sampler: A proposal for water management enhancement. Water Resources Management, 27(12), 4163–4181.","https://doi.org/10.1007/s11269-013-0401-5"]
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
  var RIVER_IDS = ['river', 'ch1', 'ch2', 'ch3', 'act'];
  var CHAPTERS = ['ch1', 'ch2', 'ch3', 'act'];

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

  /* ---------- Start ---------- */
  route();
  updateFades();
  setTimeout(updateHighlights, 150);
})();
