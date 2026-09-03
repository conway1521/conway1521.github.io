(function () {
  var track = document.getElementById('inspo-track');
  var box = document.getElementById('inspo');
  if (!track || !box) return;
  var base = box.getAttribute('data-base') || '';
  var MAX = 16, pending = MAX, shown = 0;
  function decide() {
    if (pending > 0) return;
    if (shown === 0) return;
    [].slice.call(track.children)
      .sort(function (a, b) { return (+a.dataset.n) - (+b.dataset.n); })
      .forEach(function (el) { track.appendChild(el); });
    box.hidden = false;
    var prev = box.querySelector('.inspo__nav--prev');
    var next = box.querySelector('.inspo__nav--next');
    if (shown <= 1) { prev.style.display = 'none'; next.style.display = 'none'; return; }
    function step(dir) {
      var first = track.querySelector('img');
      if (!first) return;
      var d = (first.getBoundingClientRect().width + 12) * dir;
      if (dir > 0 && track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) track.scrollTo({ left: 0 });
      else if (dir < 0 && track.scrollLeft <= 4) track.scrollTo({ left: track.scrollWidth });
      else track.scrollBy({ left: d });
    }
    prev.addEventListener('click', function () { step(-1); });
    next.addEventListener('click', function () { step(1); });
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    var timer = setInterval(function () { step(1); }, 4500);
    box.addEventListener('mouseenter', function () { clearInterval(timer); });
    box.addEventListener('mouseleave', function () { timer = setInterval(function () { step(1); }, 4500); });
  }
  for (var i = 1; i <= MAX; i++) {
    (function (n) {
      var img = new Image();
      img.alt = 'Inspiration ' + n;
      img.dataset.n = n;
      img.onload = function () { shown++; track.appendChild(img); pending--; decide(); };
      img.onerror = function () { pending--; decide(); };
      img.src = base + 'inspo-' + n + '.jpg';
    })(i);
  }
})();
