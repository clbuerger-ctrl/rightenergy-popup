/* RightEnergy Envita Launch Popup | max2 | >=30min | random slides | video 10s */
(function(){
  if(window.__rieEnvitaPopupLoaded) return;
  window.__rieEnvitaPopupLoaded = true;
  var css = "#rie-envita-popup-overlay{\n  position:fixed;inset:0;z-index:999999;\n  background:rgba(15,23,42,.55);\n  display:flex;align-items:center;justify-content:center;\n  padding:max(12px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left));\n  box-sizing:border-box;\n  overflow:auto;\n  -webkit-overflow-scrolling:touch;\n  opacity:0;animation:rieEnvitaFadeIn .35s ease forwards;\n  font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;\n  -webkit-tap-highlight-color:transparent;\n}\n#rie-envita-popup-overlay.rie-closing{animation:rieEnvitaFadeOut .4s ease forwards}\n@keyframes rieEnvitaFadeIn{to{opacity:1}}\n@keyframes rieEnvitaFadeOut{to{opacity:0}}\n#rie-envita-popup{\n  position:relative;\n  width:min(94vw, 920px);\n  max-width:100%;\n  max-height:min(90svh, 90dvh, 90vh);\n  display:flex;flex-direction:column;\n  background:#f3f4f6;\n  border-radius:14px;\n  box-shadow:0 25px 60px rgba(0,0,0,.35);\n  overflow:hidden;\n  box-sizing:border-box;\n  min-width:0;\n  flex-shrink:1;\n}\n#rie-envita-popup a.rie-envita-link{\n  display:flex;flex-direction:column;flex:1 1 auto;min-height:0;min-width:0;\n  color:inherit;text-decoration:none;\n  overflow:hidden;\n}\n#rie-envita-popup-frame{\n  position:relative;\n  flex:1 1 auto;\n  min-height:0;min-width:0;\n  width:100%;\n  background:#e8eaed;\n  display:flex;align-items:center;justify-content:center;\n  overflow:auto;\n  -webkit-overflow-scrolling:touch;\n}\n#rie-envita-popup-frame img{\n  display:block;\n  width:100%;\n  height:auto;\n  max-width:100%;\n  max-height:min(72svh, 72dvh, 72vh, 640px);\n  object-fit:contain;\n  object-position:center;\n}\n#rie-envita-popup-bar{\n  flex:0 0 auto;\n  display:flex;align-items:center;justify-content:space-between;gap:10px;\n  padding:10px 14px;\n  background:#0f2744;color:#fff;\n  font-size:14px;line-height:1.35;\n  box-sizing:border-box;\n  width:100%;\n}\n#rie-envita-popup-bar strong{color:#f4a261;letter-spacing:.04em;font-size:12px;text-transform:uppercase}\n#rie-envita-popup-close{\n  position:absolute;top:8px;right:8px;z-index:2;\n  width:44px;height:44px;min-width:44px;min-height:44px;border:0;border-radius:999px;\n  background:rgba(15,39,68,.8);color:#fff;\n  font-size:26px;line-height:1;cursor:pointer;\n  display:flex;align-items:center;justify-content:center;\n  box-sizing:border-box;\n  padding:0;\n}\n#rie-envita-popup-close:hover,#rie-envita-popup-close:focus{background:rgba(15,39,68,.95)}\n@media (max-width:640px){\n  #rie-envita-popup-overlay{padding:12px;align-items:center}\n  #rie-envita-popup{\n    width:100%;\n    max-width:calc(100vw - 24px);\n    max-height:min(90svh, 90dvh, 90vh);\n    border-radius:12px;\n  }\n  #rie-envita-popup-frame{overflow:auto}\n  #rie-envita-popup-frame img{\n    width:100%;\n    height:auto;\n    max-width:100%;\n    max-height:min(calc(90svh - 110px), calc(90dvh - 110px), calc(90vh - 110px));\n  }\n  #rie-envita-popup-bar{\n    flex-direction:column;align-items:flex-start;gap:6px;\n    font-size:13px;padding:10px 12px;padding-right:52px;\n  }\n  #rie-envita-popup-bar strong{font-size:11px}\n  #rie-envita-popup-close{top:6px;right:6px}\n}\n@media (max-width:380px){\n  #rie-envita-popup-bar{font-size:12px;padding:8px 10px;padding-right:48px}\n  #rie-envita-popup-frame img{max-height:min(calc(90svh - 100px), calc(90dvh - 100px), calc(90vh - 100px))}\n}\n@media (orientation:landscape) and (max-height:500px){\n  #rie-envita-popup{\n    max-height:min(94svh, 94dvh, 94vh);\n    flex-direction:row;\n    width:100%;\n    max-width:min(96vw, calc(100vw - 24px), 980px);\n  }\n  #rie-envita-popup a.rie-envita-link{flex-direction:row;min-height:0;min-width:0}\n  #rie-envita-popup-frame{flex:1 1 65%}\n  #rie-envita-popup-frame img{max-height:min(88svh, 88dvh, 88vh);width:auto;max-width:100%}\n  #rie-envita-popup-bar{flex:0 0 35%;flex-direction:column;justify-content:center;align-items:flex-start;padding-right:14px}\n}\n@media (prefers-reduced-motion:reduce){\n  #rie-envita-popup-overlay{animation:none;opacity:1}\n}";
  var st = document.createElement("style");
  st.setAttribute("data-rie","envita-popup");
  st.appendChild(document.createTextNode(css));
  (document.head || document.documentElement).appendChild(st);

  /* Slides: A live + 01/02/03/09 WP media (2026/11) */
  var TARGET = 'https://www.envita.ch/';
  var SLIDES = [
    {
      img: 'https://www.rightenergy.de/wp-content/uploads/2026/11/envita-system-popup-1.png',
      alt: 'Das Envita-System – Messen Sie Energie an der Quelle',
      href: TARGET,
      w: 1284, h: 630
    },
    {
      img: 'https://www.rightenergy.de/wp-content/uploads/2026/11/envita-popup-01-ai-operative.png',
      alt: 'Envita AI – Operative Energieintelligenz',
      href: TARGET,
      w: 814, h: 496
    },
    {
      img: 'https://www.rightenergy.de/wp-content/uploads/2026/11/envita-popup-02-ai-phone.png',
      alt: 'Envita AI auf dem Smartphone',
      href: TARGET,
      w: 787, h: 636
    },
    {
      img: 'https://www.rightenergy.de/wp-content/uploads/2026/11/envita-popup-03-bi-ki-tools.png',
      alt: 'Envita BI- und KI-Tools',
      href: TARGET,
      w: 1169, h: 804
    },
    {
      img: 'https://www.rightenergy.de/wp-content/uploads/2026/11/envita-popup-09-system-collage.jpg',
      alt: 'Der einfachste Weg zur Energieintelligenz – Envita Systemübersicht',
      href: TARGET,
      w: 1280, h: 1180
    }
  ];
  var DELAY = 9000;
  var RESHOW_MS = 30 * 60 * 1000;
  var VIDEO_AFTER_MS = 10000;
  var MAX_SHOWS = 2;
  var COOKIE_SID = 'rie_envita_popup_sid';
  var KEY_COUNT = 'rie_envita_popup_count';
  var KEY_COUNT_SID = 'rie_envita_popup_count_sid';
  var KEY_LAST = 'rie_envita_popup_last';
  var LOCK_NAME = 'rie-envita-popup';
  var reshowTimer = null;
  var pageLoadAt = Date.now();
  var popupOpen = false;
  var videoStarted = false;
  var storageOk = false;

  function pickSlide(){
    var list = [];
    for(var i=0;i<SLIDES.length;i++){
      var s = SLIDES[i];
      if(s && s.img && String(s.img).indexOf('PLACEHOLDER_') !== 0) list.push(s);
    }
    if(!list.length) list = [SLIDES[0]];
    return list[Math.floor(Math.random() * list.length)];
  }

  function makeToken(){
    try{
      var a = new Uint8Array(16);
      (window.crypto || window.msCrypto).getRandomValues(a);
      var s = '';
      for(var i=0;i<a.length;i++) s += ('0' + a[i].toString(16)).slice(-2);
      return s;
    }catch(e){
      return String(Date.now()) + '-' + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    }
  }

  function readCookie(name){
    try{
      var parts = String(document.cookie || '').split(';');
      for(var i=0;i<parts.length;i++){
        var p = parts[i].replace(/^\s+/, '');
        if(p.indexOf(name + '=') === 0){
          return decodeURIComponent(p.slice(name.length + 1));
        }
      }
    }catch(e){}
    return '';
  }

  function writeSessionCookie(token){
    try{
      var secure = (typeof location !== 'undefined' && location.protocol === 'https:') ? '; Secure' : '';
      document.cookie = COOKIE_SID + '=' + encodeURIComponent(token) +
        '; Path=/; SameSite=Lax' + secure;
      return readCookie(COOKIE_SID) === token;
    }catch(e){
      return false;
    }
  }

  function ensureSid(){
    var sid = readCookie(COOKIE_SID);
    if(sid && /^[A-Za-z0-9._-]{8,128}$/.test(sid)) return sid;
    sid = makeToken();
    if(!writeSessionCookie(sid)) return '';
    return sid;
  }

  function lsGet(key){ return localStorage.getItem(key); }
  function lsSet(key, val){
    localStorage.setItem(key, String(val));
    if(localStorage.getItem(key) !== String(val)) throw new Error('ls-verify');
  }

  function syncSessionCount(sid){
    var bound = lsGet(KEY_COUNT_SID) || '';
    if(bound !== sid){
      lsSet(KEY_COUNT_SID, sid);
      lsSet(KEY_COUNT, '0');
      return 0;
    }
    var n = parseInt(lsGet(KEY_COUNT) || '0', 10);
    if(!isFinite(n) || n < 0) n = 0;
    return n;
  }

  function probeStorage(){
    try{
      var sid = ensureSid();
      if(!sid) return false;
      var probe = KEY_COUNT + '__probe';
      lsSet(probe, '1');
      if(lsGet(probe) !== '1') return false;
      localStorage.removeItem(probe);
      var lastRaw = lsGet(KEY_LAST);
      if(lastRaw != null && lastRaw !== '' && !/^\d+$/.test(String(lastRaw))){
        return false;
      }
      syncSessionCount(sid);
      return true;
    }catch(e){
      return false;
    }
  }

  function refreshState(){
    if(!storageOk) return null;
    try{
      var sid = ensureSid();
      if(!sid){ storageOk = false; return null; }
      var count = syncSessionCount(sid);
      var last = parseInt(lsGet(KEY_LAST) || '0', 10) || 0;
      return { sid: sid, count: count, last: last };
    }catch(e){
      storageOk = false;
      return null;
    }
  }

  function msUntilAllowed(last){
    if(!last) return 0;
    var left = RESHOW_MS - (Date.now() - last);
    return left > 0 ? left : 0;
  }

  function recordShow(state){
    var next = state.count + 1;
    lsSet(KEY_COUNT, String(next));
    lsSet(KEY_COUNT_SID, state.sid);
    lsSet(KEY_LAST, String(Date.now()));
  }

  function runExclusive(fn){
    try{
      if(typeof navigator !== 'undefined' && navigator.locks && typeof navigator.locks.request === 'function'){
        return navigator.locks.request(LOCK_NAME, function(){ return fn(); });
      }
    }catch(e){}
    try{ fn(); }catch(e2){}
    return Promise.resolve();
  }

  function findEnvitaVideo(){
    var nodes = document.querySelectorAll('video');
    for(var i=0;i<nodes.length;i++){
      var v = nodes[i];
      var src = (v.getAttribute('src')||'') + ' ' + (v.currentSrc||'');
      var sources = v.querySelectorAll('source');
      for(var j=0;j<sources.length;j++) src += ' ' + (sources[j].getAttribute('src')||'');
      if(src.indexOf('Envita_Productvideo') !== -1) return v;
    }
    return document.querySelector('#service_section video');
  }

  function tryStartVideo(){
    if(videoStarted) return;
    if(popupOpen || document.getElementById('rie-envita-popup-overlay')) return;
    if(Date.now() - pageLoadAt < VIDEO_AFTER_MS) return;
    var video = findEnvitaVideo();
    if(!video) return;
    videoStarted = true;
    try{
      video.setAttribute('playsinline','playsinline');
      video.playsInline = true;
      video.muted = true;
      video.setAttribute('muted','muted');
      var p = video.play();
      if(p && typeof p.then === 'function'){
        p.catch(function(){ videoStarted = false; });
      }
    }catch(e){ videoStarted = false; }
  }

  function scheduleVideoChecks(){
    setTimeout(tryStartVideo, VIDEO_AFTER_MS);
    setInterval(tryStartVideo, 1000);
  }

  function closePopup(){
    var ov = document.getElementById('rie-envita-popup-overlay');
    if(!ov) return;
    ov.classList.add('rie-closing');
    popupOpen = false;
    document.removeEventListener('keydown', onKey);
    setTimeout(function(){
      if(ov && ov.parentNode) ov.parentNode.removeChild(ov);
      tryStartVideo();
    }, 420);
    if(reshowTimer) clearTimeout(reshowTimer);
    reshowTimer = null;
    var state = refreshState();
    if(state && state.count < MAX_SHOWS){
      var rem = msUntilAllowed(state.last);
      reshowTimer = setTimeout(tryShow, rem > 0 ? rem : RESHOW_MS);
    }
  }

  function onKey(e){
    if(e.key === 'Escape' || e.keyCode === 27){
      e.preventDefault();
      closePopup();
    }
  }

  function showWithState(state){
    if(document.getElementById('rie-envita-popup-overlay')) return false;
    if(!state || state.count >= MAX_SHOWS) return false;
    if(msUntilAllowed(state.last) > 0) return false;
    try{
      recordShow(state);
    }catch(e){
      storageOk = false;
      return false;
    }
    var slide = pickSlide();
    var href = slide.href || TARGET;
    var w = slide.w || 1280;
    var h = slide.h || 720;
    popupOpen = true;
    var ov = document.createElement('div');
    ov.id = 'rie-envita-popup-overlay';
    ov.setAttribute('role','dialog');
    ov.setAttribute('aria-modal','true');
    ov.setAttribute('aria-label','Envita.ch Ankündigung');
    ov.innerHTML =
      '<div id="rie-envita-popup">' +
        '<button type="button" id="rie-envita-popup-close" aria-label="Schließen">×</button>' +
        '<a class="rie-envita-link" href="'+href+'" target="_blank" rel="noopener noreferrer">' +
          '<div id="rie-envita-popup-frame"><img src="'+slide.img+'" alt="'+String(slide.alt||'').replace(/"/g,'&quot;')+'" width="'+w+'" height="'+h+'" decoding="async"></div>' +
          '<div id="rie-envita-popup-bar"><div><strong>Neu bei RightEnergy</strong><br>Partner Envita.ch ab November 2026</div><div>Mehr auf envita.ch →</div></div>' +
        '</a>' +
      '</div>';
    document.body.appendChild(ov);
    document.getElementById('rie-envita-popup-close').addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); closePopup(); });
    ov.addEventListener('click', function(e){ if(e.target===ov) closePopup(); });
    document.addEventListener('keydown', onKey);
    return true;
  }

  function tryShow(){
    runExclusive(function(){
      if(!storageOk) return;
      var state = refreshState();
      if(!state) return;
      if(state.count >= MAX_SHOWS) return;
      var rem = msUntilAllowed(state.last);
      if(rem > 0){
        if(reshowTimer) clearTimeout(reshowTimer);
        reshowTimer = setTimeout(tryShow, rem);
        return;
      }
      showWithState(state);
    });
  }

  function schedule(){
    if(!storageOk) return;
    var state = refreshState();
    if(!state) return;
    if(state.count >= MAX_SHOWS) return;
    var rem = msUntilAllowed(state.last);
    var wait = rem > 0 ? rem : DELAY;
    setTimeout(tryShow, wait);
  }

  storageOk = probeStorage();
  scheduleVideoChecks();
  if(storageOk){
    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', schedule);
    else schedule();
  }
})();
