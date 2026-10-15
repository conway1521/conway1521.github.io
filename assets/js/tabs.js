/* ============================================================
   Tabs. Any [data-tabset] holds [role=tab] buttons and the panels
   they control, with one panel open at a time. Each tab carries a
   data-key, and a link to #<set>-<key> opens that tab directly.
   ============================================================ */
(function () {
  'use strict';

  function panelOf(tab) { return document.getElementById(tab.getAttribute('aria-controls')); }

  function select(tab, opts) {
    opts = opts || {};
    var set = tab.closest('[data-tabset]');
    set.querySelectorAll('[role="tab"]').forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.setAttribute('tabindex', on ? '0' : '-1');
      var p = panelOf(t);
      if (p) p.hidden = !on;
    });
    if (!opts.silent) {
      document.dispatchEvent(new CustomEvent('ink:tab', {
        detail: { set: set.getAttribute('data-tabset'), key: tab.getAttribute('data-key') }
      }));
    }
    if (opts.hash && history.replaceState) {
      history.replaceState(null, '', '#' + set.getAttribute('data-tabset') + '-' + tab.getAttribute('data-key'));
    }
  }

  document.querySelectorAll('[data-tabset]').forEach(function (set) {
    var tabs = Array.prototype.slice.call(set.querySelectorAll('[role="tab"]'));
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab, { hash: true }); });
      tab.addEventListener('keydown', function (ev) {
        var j = null;
        if (ev.key === 'ArrowRight' || ev.key === 'ArrowDown') j = (i + 1) % tabs.length;
        if (ev.key === 'ArrowLeft' || ev.key === 'ArrowUp') j = (i - 1 + tabs.length) % tabs.length;
        if (ev.key === 'Home') j = 0;
        if (ev.key === 'End') j = tabs.length - 1;
        if (j === null) return;
        ev.preventDefault();
        tabs[j].focus();
        select(tabs[j], { hash: true });
      });
    });
  });

  /* a link straight to one tab, e.g. #research-labor or #systems-live */
  function fromHash() {
    var h = location.hash.slice(1);
    if (!h) return;
    var cut = h.indexOf('-');
    if (cut < 0) return;
    var set = document.querySelector('[data-tabset="' + h.slice(0, cut) + '"]');
    if (!set) return;
    var tab = set.querySelector('[data-key="' + h.slice(cut + 1) + '"]');
    if (!tab) return;
    var fold = set.closest('details');
    if (fold) fold.open = true;
    select(tab);
    set.scrollIntoView({ block: 'start' });
  }
  window.addEventListener('hashchange', fromHash);
  fromHash();

  window.inkTabs = { select: select };
})();
