/* ============================================================
   Research graph. The papers and notes in _data/research.json,
   drawn as a note graph with d3-force. Each research area settles
   in its own region under a soft outline with its name, papers are
   dark, papers in progress are rings, notes are small and grey.
   The cards and lists below the graph are plain HTML built from
   the same data, so nothing here is needed to read them.
   ============================================================ */
(function () {
  'use strict';

  var src = document.getElementById('research-data');
  if (!src) return;
  var DATA = JSON.parse(src.textContent);

  var N = {}, AREA = {}, adj = {};
  DATA.areas.forEach(function (a) { AREA[a.key] = a; });
  DATA.nodes.forEach(function (n) { N[n.id] = n; adj[n.id] = []; });
  DATA.edges.forEach(function (e) { adj[e[0]].push(e[1]); adj[e[1]].push(e[0]); });

  var graph = document.getElementById('rgraph');
  var detail = document.getElementById('rg-detail');
  var base = (graph && graph.getAttribute('data-base')) || '';
  var selected = null;

  /* set once the graph is drawn; the lists work without it */
  var lit = null, unlight = null, markSelected = null, focusArea = null;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function url(h) {
    return (h && h.charAt(0) === '/') ? base.replace(/\/$/, '') + h : h;
  }

  /* ---------- the detail panel, opened from the graph or from a list ---------- */
  function open(id, fromList) {
    selected = id;
    var n = N[id];
    if (lit) { lit(id); markSelected(id); }

    var links = n.links.map(function (l) {
      var ext = l.href.indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '';
      return '<a href="' + url(l.href) + '"' + ext + '>' + esc(l.label) + '</a>';
    }).join('');
    var math = n.math ? '<div class="rg-math">' + n.math.map(function (m) {
      return '<div>' + esc(m) + '</div>';
    }).join('') + '</div>' : '';

    detail.innerHTML =
      '<div class="rg-d__top">' +
        '<div>' +
          '<div class="rg-d__prog">' + esc(AREA[n.area].title + (n.sub ? ' · ' + n.sub : '')) + '</div>' +
          '<div class="rg-d__title">' + esc(n.title) + '</div>' +
          (n.date ? '<div class="rg-d__date">' + esc(n.date) + (n.ref ? ' · ' + esc(n.ref) : '') + '</div>' : '') +
        '</div>' +
        '<button class="rg-d__close" type="button" data-close>Close</button>' +
      '</div>' +
      (n.abs ?
        '<div class="rg-tabs">' +
          '<button type="button" class="rg-tab is-on" data-tab="plain" aria-pressed="true">Description</button>' +
          '<button type="button" class="rg-tab" data-tab="abs" aria-pressed="false">Abstract</button>' +
        '</div>' : '<div class="rg-tabs"></div>') +
      '<p class="rg-pane" data-pane="plain">' + esc(n.plain) + '</p>' +
      (n.abs ? '<div class="rg-pane is-hidden" data-pane="abs"><p>' + esc(n.abs) + '</p>' + math + '</div>' : '') +
      (links ? '<div class="rg-d__links">' + links + '</div>' : '');

    detail.hidden = false;
    detail.classList.remove('is-open');
    void detail.offsetWidth;
    detail.classList.add('is-open');
    detail.setAttribute('tabindex', '-1');

    /* Wire the controls before moving the viewport, so a scroll that a browser
       declines to perform cannot leave the panel without a working Close. */
    detail.querySelector('[data-close]').addEventListener('click', close);
    var tabs = detail.querySelectorAll('.rg-tab');
    tabs.forEach(function (b) {
      b.addEventListener('click', function () {
        var want = b.getAttribute('data-tab');
        tabs.forEach(function (o) {
          o.classList.toggle('is-on', o === b);
          o.setAttribute('aria-pressed', o === b ? 'true' : 'false');
        });
        detail.querySelectorAll('[data-pane]').forEach(function (pane) {
          pane.classList.toggle('is-hidden', pane.getAttribute('data-pane') !== want);
        });
      });
    });

    if (!fromList) {
      var tab = document.querySelector('[data-tabset="research"] [data-key="' + n.area + '"]');
      if (tab && window.inkTabs) window.inkTabs.select(tab, { silent: true });
    }
    detail.focus({ preventScroll: true });
    if (detail.scrollIntoView) detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function close() {
    var last = selected;
    selected = null;
    detail.classList.remove('is-open');
    detail.hidden = true;
    if (lit) { markSelected(null); unlight(); }
    var back = document.querySelector('[data-open="' + last + '"]') || document.querySelector('[data-node="' + last + '"]');
    if (back) back.focus({ preventScroll: true });
  }

  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && selected) close();
  });

  document.querySelectorAll('[data-open]').forEach(function (b) {
    b.addEventListener('click', function () { open(b.getAttribute('data-open'), true); });
  });

  document.addEventListener('ink:tab', function (ev) {
    if (ev.detail.set === 'research' && focusArea) focusArea(ev.detail.key);
  });

  /* ---------- the graph ---------- */
  if (!graph || !window.d3) return;
  var d3 = window.d3;
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Each area's home on the canvas: development and macroeconomics on the left,
     labor markets in the middle, where most links run, AI and data science on the right. */
  var W = 960, H = 620;
  var HOME = {
    dev: [180, 165], macro: [190, 470], labor: [475, 405],
    ai: [760, 165], ds: [790, 480]
  };

  /* a few pieces have a natural order: the thesis reads from framework to fitted model */
  var NUDGE = { p1: [-55, -55], p2: [45, 0], p3: [-35, 60], antic: [-70, -20], fiscal: [-20, 55] };
  function homeX(n) { return HOME[n.area][0] + (NUDGE[n.id] ? NUDGE[n.id][0] : 0); }
  function homeY(n) { return HOME[n.area][1] + (NUDGE[n.id] ? NUDGE[n.id][1] : 0); }

  /* labels break onto two lines, so each node claims a compact footprint */
  function lines(s) {
    if (s.length <= 14) return [s];
    var w = s.split(' '), best = [s], gap = 1e9;
    for (var i = 1; i < w.length; i++) {
      var a = w.slice(0, i).join(' '), b = w.slice(i).join(' ');
      var g = Math.abs(a.length - b.length);
      if (g < gap) { gap = g; best = [a, b]; }
    }
    return best;
  }

  var seed = 5;
  function rand() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }

  var nodes = DATA.nodes.map(function (n) {
    var d = adj[n.id].length;
    n.x = homeX(n) + (rand() - 0.5) * 90;
    n.y = homeY(n) + (rand() - 0.5) * 70;
    n.r = n.k === 'note' ? 3.2 + Math.sqrt(d) * 0.8 : 5.5 + Math.sqrt(d) * 1.7;
    n.lines = lines(n.s);
    var longest = Math.max.apply(null, n.lines.map(function (l) { return l.length; }));
    /* room for the label as well as the dot */
    n.room = Math.max(n.r + 8, longest * (n.k === 'note' ? 2.75 : 3.1) + 6);
    /* each node floats on its own slow cycle, run by the browser's compositor */
    n.float = '--fd:' + (9 + rand() * 6).toFixed(1) + 's;--fdl:-' + (rand() * 12).toFixed(1) + 's;' +
      '--fx:' + ((rand() - 0.5) * (n.k === 'note' ? 2.4 : 3.2)).toFixed(2) + 'px;' +
      '--fy:' + ((rand() * 0.6 + 0.7) * (n.k === 'note' ? 1.2 : 1.6)).toFixed(2) + 'px';
    return n;
  });
  var links = DATA.edges.map(function (e) {
    var cross = N[e[0]].area !== N[e[1]].area;
    var note = N[e[0]].k === 'note' || N[e[1]].k === 'note';
    return { source: e[0], target: e[1], cross: cross, note: note };
  });

  var svg = d3.select(graph).select('svg').attr('viewBox', '0 0 ' + W + ' ' + H);
  var world = svg.select('#rg-world');

  var areaSel = world.select('#rg-areas').selectAll('g').data(DATA.areas).join('g').attr('class', 'rg-area');
  var titleSel = areaSel.append('text').attr('class', 'rg-area__title').attr('text-anchor', 'middle')
    .text(function (a) { return a.title; });

  var edgeSel = world.select('#rg-edges').selectAll('line').data(links).join('line')
    .attr('class', function (l) {
      return 'rg-edge' + (l.note ? ' rg-edge--note' : '') + (l.cross ? ' rg-edge--cross' : '');
    });

  var nodeSel = world.select('#rg-nodes').selectAll('g').data(nodes).join('g')
    .attr('class', function (n) { return 'rg-node rg-node--' + n.k; })
    .attr('tabindex', 0)
    .attr('role', 'button')
    .attr('data-node', function (n) { return n.id; })
    .attr('aria-label', function (n) { return n.title + ', ' + n.kind; });

  var floatSel = nodeSel.append('g').attr('class', 'rg-float').attr('style', function (n) { return n.float; });
  floatSel.append('circle').attr('class', 'rg-sel').attr('r', function (n) { return n.r + 6; });
  floatSel.filter(function (n) { return n.k === 'pub'; })
    .append('circle').attr('class', 'rg-halo').attr('r', function (n) { return n.r + 4; });
  floatSel.append('circle').attr('class', function (n) { return 'rg-dot rg-dot--' + n.k; })
    .attr('r', function (n) { return n.r; });
  var labelSel = floatSel.append('text')
    .attr('class', function (n) { return 'rg-label rg-label--' + n.k; })
    .attr('text-anchor', 'middle');
  labelSel.selectAll('tspan').data(function (n) { return n.lines; }).join('tspan')
    .attr('x', 0).attr('dy', function (l, i) { return i === 0 ? 0 : '1.15em'; })
    .text(function (l) { return l; });
  nodeSel.append('circle').attr('class', 'rg-hit').attr('r', function (n) { return Math.max(n.r + 8, 14); });

  /* text keeps its size on screen while the network spreads under zoom */
  function placeLabels(k) {
    labelSel.attr('transform', 'scale(' + (1 / k) + ')')
      .attr('y', function (n) { return n.r * k + 13; });
  }
  placeLabels(1);

  /* the extent of an area, with room for its labels, which places its title */
  function shape(a) {
    var pts = [];
    nodes.forEach(function (n) {
      if (n.area !== a.key) return;
      var rx = Math.max(n.room, 22) + 10;
      var top = n.r + 18;
      var bottom = n.r + 18 + 13 * n.lines.length;
      for (var i = 0; i < 12; i++) {
        var t = i / 12 * Math.PI * 2, c = Math.cos(t), s = Math.sin(t);
        pts.push([n.x + c * rx, n.y + s * (s < 0 ? top : bottom)]);
      }
    });
    return d3.polygonHull(pts);
  }

  var sim = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(function (n) { return n.id; })
      .distance(function (l) { return l.cross ? 250 : (l.note ? 84 : 108); })
      .strength(function (l) { return l.cross ? 0.012 : 0.55; }))
    .force('charge', d3.forceManyBody()
      .strength(function (n) { return n.k === 'note' ? -130 : -300; })
      .distanceMax(280))
    .force('x', d3.forceX(homeX).strength(0.085))
    .force('y', d3.forceY(homeY).strength(0.11))
    .force('collide', d3.forceCollide(function (n) { return n.room * 1.0; })
      .strength(0.9).iterations(2))
    .velocityDecay(0.5)
    .alphaDecay(0.03)
    .on('tick', draw)
    .stop();

  function draw() {
    edgeSel
      .attr('x1', function (l) { return l.source.x; }).attr('y1', function (l) { return l.source.y; })
      .attr('x2', function (l) { return l.target.x; }).attr('y2', function (l) { return l.target.y; });
    nodeSel.attr('transform', function (n) { return 'translate(' + n.x.toFixed(2) + ',' + n.y.toFixed(2) + ')'; });
    areaSel.each(function (a) { a.hull = shape(a); });
    titleSel
      .attr('x', function (a) { return a.hull ? d3.mean(a.hull, function (p) { return p[0]; }) : 0; })
      .attr('y', function (a) { return a.hull ? d3.min(a.hull, function (p) { return p[1]; }) - 8 : 0; });
  }

  /* Settle fully before the first paint, so the graph arrives calm and only moves
     when someone moves it. */
  for (var t = 0; t < 420; t++) sim.tick();
  draw();
  graph.classList.add('is-ready');

  /* the float pauses while the graph is off screen */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      graph.classList.toggle('is-away', !es[0].isIntersecting);
    }).observe(graph);
  }

  /* ---------- zoom and pan: pinch or ctrl-scroll to zoom, so the page still scrolls ---------- */
  var zoom = d3.zoom()
    .scaleExtent([0.6, 3])
    .filter(function (ev) {
      if (ev.type === 'wheel') return ev.ctrlKey || ev.metaKey;
      return !ev.button && ev.type !== 'dblclick';
    })
    .on('zoom', function (ev) {
      var k = ev.transform.k;
      world.attr('transform', ev.transform);
      graph.classList.toggle('is-near', k > 1.35);
      placeLabels(k);
      titleSel.attr('font-size', 11 / k);
    });
  svg.call(zoom).on('dblclick.zoom', null);

  graph.querySelectorAll('[data-zoom]').forEach(function (b) {
    b.addEventListener('click', function () {
      var how = b.getAttribute('data-zoom');
      var tr = still ? svg : svg.transition().duration(320).ease(d3.easeCubicOut);
      if (how === 'reset') tr.call(zoom.transform, d3.zoomIdentity);
      else tr.call(zoom.scaleBy, how === 'in' ? 1.35 : 1 / 1.35);
    });
  });

  /* ---------- dragging: neighbours follow softly, then everything comes to rest ---------- */
  var dragging = false;
  nodeSel.call(d3.drag()
    .clickDistance(4)
    .on('start', function (ev, n) {
      if (!ev.active) sim.alphaTarget(0.12).restart();
      n.fx = n.x; n.fy = n.y;
      dragging = true;
      graph.classList.add('is-dragging');
      tip(null);
      lit(n.id);
    })
    .on('drag', function (ev, n) { n.fx = ev.x; n.fy = ev.y; })
    .on('end', function (ev, n) {
      if (!ev.active) sim.alphaTarget(0);
      n.fx = null; n.fy = null;
      dragging = false;
      graph.classList.remove('is-dragging');
      unlight();
    }));

  nodeSel
    .on('click', function (ev, n) { ev.stopPropagation(); open(n.id); })
    .on('mouseenter', function (ev, n) { if (!dragging) { lit(n.id); tip(n); } })
    .on('mouseleave', function () { if (!dragging) unlight(); tip(null); })
    .on('focus', function (ev, n) { lit(n.id); tip(n); })
    .on('blur', function () { unlight(); tip(null); })
    .on('keydown', function (ev, n) {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); open(n.id); }
    });

  svg.on('click', function () { focusArea(null); });

  /* a double-click on empty space returns to the full view */
  svg.on('dblclick', function (ev) {
    if (ev.target.closest && ev.target.closest('.rg-node')) return;
    focusArea(null);
    if (selected) close();
    (still ? svg : svg.transition().duration(380).ease(d3.easeCubicOut)).call(zoom.transform, d3.zoomIdentity);
  });

  /* a small card beside the hovered or focused node: what it is and when */
  var tipEl = document.createElement('div');
  tipEl.className = 'rg-tip';
  tipEl.setAttribute('role', 'tooltip');
  tipEl.hidden = true;
  graph.appendChild(tipEl);
  function tip(n) {
    if (!n || dragging) { tipEl.hidden = true; tipEl.classList.remove('is-on'); return; }
    tipEl.innerHTML = '<span class="rg-tip__k">' + esc(n.kind) + (n.when ? ' · ' + esc(n.when) : '') + '</span>' +
      '<span class="rg-tip__t">' + esc(n.title) + '</span>';
    var t = d3.zoomTransform(svg.node());
    var box = svg.node().getBoundingClientRect(), host = graph.getBoundingClientRect();
    var sx = box.width / W, sy = box.height / H, s = Math.min(sx, sy);
    var ox = (box.width - W * s) / 2, oy = (box.height - H * s) / 2;
    var px = ox + (t.applyX(n.x)) * s + (box.left - host.left);
    var py = oy + (t.applyY(n.y)) * s + (box.top - host.top);
    tipEl.hidden = false;
    tipEl.style.left = Math.max(8, Math.min(host.width - 268, px + 14)) + 'px';
    tipEl.style.top = Math.max(8, py - 18 - tipEl.offsetHeight) + 'px';
    requestAnimationFrame(function () { tipEl.classList.add('is-on'); });
  }

  lit = function (id) {
    graph.classList.add('is-dimmed');
    var on = {};
    on[id] = 1;
    adj[id].forEach(function (k) { on[k] = 1; });
    nodeSel.classed('is-lit', function (n) { return !!on[n.id]; });
    edgeSel.classed('is-lit', function (l) { return l.source.id === id || l.target.id === id; });
  };

  unlight = function () {
    if (selected) { lit(selected); return; }
    graph.classList.remove('is-dimmed');
    nodeSel.classed('is-lit', false);
    edgeSel.classed('is-lit', false);
  };

  markSelected = function (id) {
    nodeSel.classed('is-selected', function (n) { return n.id === id; });
  };

  focusArea = function (key) {
    graph.classList.toggle('is-program', !!key);
    areaSel.classed('is-in', function (a) { return a.key === key; });
    nodeSel.classed('is-in', function (n) { return n.area === key; });
    edgeSel.classed('is-in', function (l) { return l.source.area === key && l.target.area === key; });
  };
})();
