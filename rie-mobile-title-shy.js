/* RiE 2026-11-25: weiches Trennzeichen im Beitrags-Seitenkopf –
   "Energiedatenmanagement" trennt mobil als "Energiedaten-" / "management".
   Unsichtbar, solange das Wort in eine Zeile passt (CSS: hyphens:manual).
   Eigenes Flag, damit die bestehende Energiemanagement-Routine in
   envita-popup-rotate.js unangetastet bleibt. */
(function(){
  if (window.__rieShyEnergiedaten) return;
  window.__rieShyEnergiedaten = true;
  var RX = /Energiedatenmanagement/g, SHY = 'Energiedaten\u00ADmanagement';
  function run(){
    var roots = document.querySelectorAll('header.page-header .page-title, header.page-header #crumbs');
    for (var r = 0; r < roots.length; r++) {
      var w = document.createTreeWalker(roots[r], NodeFilter.SHOW_TEXT, null, false), n;
      while ((n = w.nextNode())) {
        if (n.nodeValue.indexOf('Energiedatenmanagement') > -1) {
          n.nodeValue = n.nodeValue.replace(RX, SHY);
        }
      }
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
