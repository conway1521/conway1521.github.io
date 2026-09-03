/* ============================================================
   Section rail. One hairline per section, down the right gutter.
   Approaching with the pointer lengthens the lines nearest it and
   names the one under it, the way the dock swells under a cursor.
   Hidden where there is no gutter to put it in, and where there
   is no pointer to move over it.
   ============================================================ */
(function () {
  var BASE = 18;    /* resting length of a line, px */
  var MAX = 38;     /* length directly under the pointer */
  var RANGE = 76;   /* vertical reach of the swell, px */

  var wide = window.matchMedia('(min-width: 1180px)');
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!wide.matches || !fine.matches) return;

  var heads = [].slice.call(document.querySelectorAll('#about, .blockhead[id]'));
  if (heads.length < 2) return;

  var rail = document.createElement('nav');
  rail.className = 'toc';
  rail.setAttribute('aria-label', 'Sections');

  var items = heads.map(function (h) {
    var label = h.id === 'about' ? 'About' : h.textContent.trim();
    var a = document.createElement('a');
    a.className = 'toc__i';
    a.href = '#' + h.id;
    a.innerHTML = '<span class="toc__lab">' + label + '</span><span class="toc__line"></span>';
    rail.appendChild(a);
    return { el: a, line: a.querySelector('.toc__line'), head: h };
  });
  document.body.appendChild(rail);

  /* ---------- the swell ---------- */
  var frame = null;
  function shape(py) {
    frame = null;
    var nearest = null, best = Infinity;
    items.forEach(function (it) {
      var b = it.el.getBoundingClientRect();
      var d = Math.abs(py - (b.top + b.height / 2));
      var t = Math.max(0, 1 - d / RANGE);
      var k = t * t * (3 - 2 * t);            /* smoothstep, so the falloff has no corner */
      it.line.style.width = (BASE + (MAX - BASE) * k) + 'px';
      if (d < best) { best = d; nearest = it; }
    });
    items.forEach(function (it) {
      it.el.classList.toggle('is-near', it === nearest && best < RANGE);
    });
  }

  rail.addEventListener('pointermove', function (ev) {
    rail.classList.remove('is-settling');
    if (frame) return;
    var py = ev.clientY;
    frame = requestAnimationFrame(function () { shape(py); });
  });

  rail.addEventListener('pointerleave', function () {
    if (frame) { cancelAnimationFrame(frame); frame = null; }
    rail.classList.add('is-settling');
    items.forEach(function (it) {
      it.line.style.width = '';
      it.el.classList.remove('is-near');
    });
  });

  /* ---------- which section is being read ---------- */
  var current = null;
  function mark(it) {
    if (it === current) return;
    current = it;
    items.forEach(function (o) { o.el.classList.toggle('is-here', o === it); });
  }

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function () {
      /* the section being read is the last one whose heading is above the fold */
      var pick = null;
      items.forEach(function (it) {
        var r = it.head.getBoundingClientRect();
        if (r.top <= window.innerHeight * 0.32) pick = it;
      });
      mark(pick || items[0]);
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    items.forEach(function (it) { obs.observe(it.head); });
  }

  /* the observer only fires on a crossing, so settle the initial state here */
  var pick = items[0];
  items.forEach(function (it) {
    if (it.head.getBoundingClientRect().top <= window.innerHeight * 0.32) pick = it;
  });
  mark(pick);
})();
