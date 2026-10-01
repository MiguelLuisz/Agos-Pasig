// Agos Pasig: page routing, menus, chapter bar and sources list
(function(){
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
  function fill(list, items){
    items.forEach(function(s){
      var li=document.createElement('li');
      li.appendChild(document.createTextNode(s[0]+' '));
      var a=document.createElement('a'); a.href=s[1]; a.target='_blank'; a.rel='noopener'; a.textContent=s[1];
      li.appendChild(a); list.appendChild(li);
    });
  }
  fill(document.querySelector('[data-list="river"]'), SOURCES);
  fill(document.querySelector('[data-list="home"]'), SOURCES.filter(function(s){return s[2]==='home'}));

  var home=document.getElementById('page-home'), river=document.getElementById('page-river');
  var riverIds=['river','ch1','ch2','ch3','act'];
  var links=document.getElementById('nav-links'), menuBtn=document.getElementById('menu-btn');

  function route(){
    var h=(location.hash||'#home').slice(1);
    var onRiver=riverIds.indexOf(h)>-1;
    var prevPage=!river.hidden?'river':'home';
    var page=onRiver?'river':'home';
    home.hidden=onRiver; river.hidden=!onRiver;
    var navKey=onRiver?'river':(h==='about'?'about':'home');
    document.querySelectorAll('[data-nav]').forEach(function(a){a.classList.toggle('active',a.dataset.nav===navKey)});
    links.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false');
    var target=(h==='home'||h==='river')?null:document.getElementById(h);
    var instant=prevPage!==page;
    if(target){ target.scrollIntoView({behavior:instant?'instant':'smooth',block:'start'}); }
    else { window.scrollTo({top:0,behavior:instant?'instant':'smooth'}); }
  }
  // Chapter bar: swipe, drag, wheel, edge fades
  var bar=document.querySelector('.chapbar .wrap'), fl=document.querySelector('.chapbar .fade.l'), fr=document.querySelector('.chapbar .fade.r');
  function fades(){var m=bar.scrollWidth-bar.clientWidth;fl.classList.toggle('on',bar.scrollLeft>4);fr.classList.toggle('on',bar.scrollLeft<m-4);}
  bar.addEventListener('scroll',fades,{passive:true}); window.addEventListener('resize',fades);
  bar.addEventListener('wheel',function(e){if(bar.scrollWidth>bar.clientWidth&&Math.abs(e.deltaY)>Math.abs(e.deltaX)){bar.scrollLeft+=e.deltaY;e.preventDefault();}},{passive:false});
  var down=false,sx=0,sl=0,moved=false;
  bar.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=bar.scrollLeft;});
  window.addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-sx;if(Math.abs(dx)>5){moved=true;bar.classList.add('dragging');}bar.scrollLeft=sl-dx;});
  window.addEventListener('pointerup',function(){down=false;setTimeout(function(){bar.classList.remove('dragging')},0);});
  bar.addEventListener('click',function(e){if(moved){e.preventDefault();moved=false;}},true);
  function showChip(){var c=bar.querySelector('.chip.active');if(c&&!river.hidden){bar.scrollTo({left:bar.scrollLeft+c.getBoundingClientRect().left-bar.getBoundingClientRect().left-parseInt(getComputedStyle(bar).paddingLeft),behavior:'smooth'});}fades();}
  setTimeout(showChip,50);

  window.addEventListener('hashchange',route);
  var aboutEl=document.getElementById('about');
  function homeSpy(){
    if(home.hidden)return;
    var navH=document.querySelector('.nav').offsetHeight;
    var key=aboutEl.getBoundingClientRect().top<=navH+120?'about':'home';
    document.querySelectorAll('[data-nav]').forEach(function(a){a.classList.toggle('active',a.dataset.nav===key)});
  }
  window.addEventListener('scroll',function(){requestAnimationFrame(homeSpy)},{passive:true});
  window.addEventListener('hashchange',showChip);
  // Clicking a link to the section you're already on still scrolls there
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href^="#"]'); if(!a)return;
    if(a.getAttribute('href')===(location.hash||'#home')){e.preventDefault();route();}
  });
  // Close the phone menu on outside tap or Escape
  document.addEventListener('click',function(e){if(links.classList.contains('open')&&!e.target.closest('.nav')){links.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&links.classList.contains('open')){links.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.focus();}});


  // Scroll spy: light up the chip for the chapter on screen
  var chapters=['ch1','ch2','ch3','act'], current=null, ticking=false;
  function spy(){
    ticking=false;
    if(river.hidden)return;
    var line=bar.getBoundingClientRect().bottom+120, cur=null;
    chapters.forEach(function(id){var el=document.getElementById(id);if(el&&!el.hidden&&el.getBoundingClientRect().top<=line)cur=id;});
    if(cur===current)return;
    current=cur;
    document.querySelectorAll('[data-chip]').forEach(function(c){c.classList.toggle('active',c.dataset.chip===cur)});
    var c=cur&&bar.querySelector('[data-chip="'+cur+'"]');
    if(c){var bl=bar.getBoundingClientRect(),cl=c.getBoundingClientRect(),pad=parseInt(getComputedStyle(bar).paddingLeft);
      if(cl.left<bl.left+pad||cl.right>bl.right-pad){bar.scrollTo({left:bar.scrollLeft+cl.left-bl.left-pad,behavior:'smooth'});}}
  }
  window.addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(spy);}},{passive:true});
  window.addEventListener('hashchange',function(){current=undefined;setTimeout(spy,60);});
  menuBtn.addEventListener('click',function(){
    var open=links.classList.toggle('open'); menuBtn.setAttribute('aria-expanded',String(open));
  });
  route();
})();
