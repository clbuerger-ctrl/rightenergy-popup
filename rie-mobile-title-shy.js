/* RiE 2026-11-25: weiche Trennzeichen im Seitenkopf (Titel + Brotkrümel).
   Setzt Soft Hyphens in Komposita, damit mobil sauber getrennt wird:
   Energie-/management, Energie-/daten-/management, Energie-/management-/system.
   Unsichtbar, solange das Wort in eine Zeile passt (CSS: hyphens:manual).
   Eigenes Flag – envita-popup-rotate.js@main bleibt unangetastet.
   Ergänzt die dortige Energiemanagement-Routine (die auf /energie-ki/
   greift, aber Safari bei overflow-wrap:break-word das &shy; ignoriert). */
(function(){
  if (window.__rieShyHero) return;
  window.__rieShyHero = true;
  var SHY = '\u00AD';
  function hyphenate(val){
    if (!val || val.indexOf('Energie') === -1) return val;
    var s = val.split(SHY).join('');
    s = s.replace(/Energiedatenmanagement/g, 'Energie' + SHY + 'daten' + SHY + 'management');
    s = s.replace(/Energiemanagementsystem/g, 'Energie' + SHY + 'management' + SHY + 'system');
    s = s.replace(/EnergieManagementsystem/g, 'Energie' + SHY + 'Management' + SHY + 'system');
    s = s.replace(/Energiemanagement/g, 'Energie' + SHY + 'management');
    s = s.replace(/EnergieManagement/g, 'Energie' + SHY + 'Management');
    return s;
  }
  function run(){
    var roots = document.querySelectorAll('header.page-header .page-title, header.page-header #crumbs');
    for (var r = 0; r < roots.length; r++) {
      var w = document.createTreeWalker(roots[r], NodeFilter.SHOW_TEXT, null, false), n;
      while ((n = w.nextNode())) {
        var next = hyphenate(n.nodeValue);
        if (next !== n.nodeValue) n.nodeValue = next;
      }
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
