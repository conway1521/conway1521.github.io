/* ============================================================
   Section fold. Publications starts closed and Systems and tools
   starts open, since the tools are what most visitors come for. A link or a rail
   click that targets one opens it; the browser's own scroll
   still lands on the heading, since the heading is the summary
   and stays visible either way.
   ============================================================ */
(function () {
  var ids = ['systems', 'publications'];

  function openFor(hash) {
    var id = (hash || '').replace(/^#/, '');
    if (ids.indexOf(id) === -1) return;
    var target = document.getElementById(id);
    var details = target && target.closest ? target.closest('details.secfold') : null;
    if (details) details.open = true;
  }

  openFor(location.hash);
  window.addEventListener('hashchange', function () { openFor(location.hash); });
})();
