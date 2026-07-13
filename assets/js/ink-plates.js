/* ============================================================
   Figure interactions. One interactive moment per figure;
   three verbs only: hover to inspect, click to expand,
   select to refocus. Values lifted from the design reference.
   ============================================================ */
(function () {
  'use strict';

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function $(id) { return document.getElementById(id); }

  /* ---------- generic hover-to-inspect: focus stays lit, rest recede ---------- */
  function initHoverDim(containerId, rowSelector, noteId) {
    var container = $(containerId);
    if (!container) return;
    var rows = Array.prototype.slice.call(container.querySelectorAll(rowSelector));
    var note = noteId ? $(noteId) : null;
    var defaultNote = container.getAttribute('data-default');
    rows.forEach(function (row) {
      row.addEventListener('mouseenter', function () {
        rows.forEach(function (r) { if (r !== row) r.classList.add('is-dim'); });
        if (note && row.getAttribute('data-note')) note.innerHTML = row.getAttribute('data-note');
      });
      row.addEventListener('mouseleave', function () {
        rows.forEach(function (r) { r.classList.remove('is-dim'); });
        if (note && defaultNote != null) note.innerHTML = defaultNote;
      });
    });
  }

  /* ---------- federal classification (three tiers, substring demo) ----------
     row = [original, canonical_title, specialty, level, grade,
            onet8_code, onet8_title, soc6_code, soc6_title, subfamily, family]
     Real employer HRIS and public posting titles from the panel. */
  var SAMPLE = [
    ['AmbFloat LPN / II', 'LPN', '', 'staff', 'II', '29-2061.00', 'Licensed Practical and Licensed Vocational Nurses', '29-2061', 'Licensed Practical and Licensed Vocational Nurses', 'Licensed Practical and Licensed Vocational Nurses', 'Health Technologists and Technicians'],
    ['AI Digital Supply Chain Program Manager', 'Program Manager', 'Supply Chain', 'manager', '', '11-9072.00', 'Entertainment and Recreation Managers, Except Gambling', '11-9072', 'Entertainment and Recreation Managers, Except Gambling', 'Entertainment and Recreation Managers', 'Other Management Occupations'],
    ['DevOps Engineer-Software Engineer III, Enterprise Risk Finance Technology', 'Software Engineer', 'DevOps', 'staff', 'III', '15-1252.00', 'Software Developers', '15-1252', 'Software Developers', 'Software and Web Developers, Programmers, and Testers', 'Computer Occupations'],
    ['Certified Nursing Assistant I - B1D Critical Care 1st Floor', 'Nurse Aide', 'Critical Care', 'staff', 'I', '31-1131.00', 'Nursing Assistants', '31-1131', 'Nursing Assistants', 'Nursing Assistants, Orderlies, and Psychiatric Aides', 'Nursing Assistants, Orderlies, and Psychiatric Aides'],
    ['Associate Professor BSN - Nursing', 'RN', '', 'staff', '', '29-1141.00', 'Registered Nurses', '29-1141', 'Registered Nurses', 'Registered Nurses', 'Healthcare Diagnosing or Treating Practitioners'],
    ['CRNA ( Only)', 'CRNA', '', 'staff', '', '29-1151.00', 'Nurse Anesthetists', '29-1151', 'Nurse Anesthetists', 'Nurse Anesthetists', 'Healthcare Diagnosing or Treating Practitioners'],
    ['Biomedical Equipment Tech Senior', 'Biomedical Equipment Tech', '', 'senior', '', '49-9062.00', 'Medical Equipment Repairers', '49-9062', 'Medical Equipment Repairers', 'Precision Instrument and Equipment Repairers', 'Other Installation, Maintenance, and Repair Occupations'],
    ['SVP & Chief Technology Officer', 'Chief Technology Officer', '', 'manager', '', '11-1011.00', 'Chief Executives', '11-1011', 'Chief Executives', 'Chief Executives', 'Top Executives'],
    ['Senior Industrial Engineer', 'Industrial Engineer', '', 'senior', '', '17-2112.00', 'Industrial Engineers', '17-2112', 'Industrial Engineers', 'Industrial Engineers, Including Health and Safety', 'Engineers'],
    ['Registered Nurse - Supervisor - Neurosurgical Telemetry - FT Days', 'Charge Nurse', 'Telemetry', 'supervisor', '', '29-1141.00', 'Registered Nurses', '29-1141', 'Registered Nurses', 'Registered Nurses', 'Healthcare Diagnosing or Treating Practitioners'],
    ['Clinical Staff Pharmacist Pharmacy and ED', 'Clinical Pharmacist', '', 'staff', '', '29-1051.00', 'Pharmacists', '29-1051', 'Pharmacists', 'Pharmacists', 'Healthcare Diagnosing or Treating Practitioners'],
    ['Sr. Scrum Master - (Remote & Onsite 1 Day a week) - LOCALS ONLY', 'Scrum Master', '', 'senior', 'I', '15-1299.09', 'Information Technology Project Managers', '15-1299', 'Computer Occupations, All Other', 'Miscellaneous Computer Occupations', 'Computer Occupations'],
    ['Travel Nurse RN - Med/Surg - $1,976 per week in Odessa, TX', 'RN', 'Med Surg', 'staff', '', '29-1141.00', 'Registered Nurses', '29-1141', 'Registered Nurses', 'Registered Nurses', 'Healthcare Diagnosing or Treating Practitioners'],
    ['CDL Truck Driver - Residential', 'CDL Driver', 'Truck', 'staff', '', '53-3032.00', 'Heavy and Tractor-Trailer Truck Drivers', '53-3032', 'Heavy and Tractor-Trailer Truck Drivers', 'Driver/Sales Workers and Truck Drivers', 'Motor Vehicle Operators'],
    ['Upper School Mathematics Teacher', 'High School Math Teacher', '', 'staff', '', '25-2031.00', 'Secondary School Teachers, Except Special and Career/Technical Education', '25-2031', 'Secondary School Teachers, Except Special and Career/Technical Education', 'Secondary School Teachers', 'Preschool, Elementary, Middle, Secondary, and Special Education Teachers'],
    ['Surgical Technologist (FT Days / 10s) KH Soin', 'Surgical Technologist', '', 'staff', '', '29-2055.00', 'Surgical Technologists', '29-2055', 'Surgical Technologists', 'Health Practitioner Support Technologists and Technicians', 'Health Technologists and Technicians']
  ];
  var TIER_NAMES = ['open-source baseline', 'fine-tuned model', 'LLM adjudication'];

  function resolve(input) {
    var q = (input || '').toLowerCase().trim();
    if (!q) return undefined;
    var hit = null, i;
    for (i = 0; i < SAMPLE.length; i++) {
      var o = SAMPLE[i][0].toLowerCase();
      if (o.indexOf(q) !== -1 || q.indexOf(o) !== -1) { hit = { row: SAMPLE[i], tier: 0 }; break; }
    }
    if (!hit) {
      var toks = q.split(/[^a-z0-9]+/).filter(function (t) { return t.length > 2; });
      if (toks.length) {
        for (i = 0; i < SAMPLE.length; i++) {
          var oo = SAMPLE[i][0].toLowerCase(), cc = SAMPLE[i][1].toLowerCase();
          if (toks.every(function (t) { return oo.indexOf(t) !== -1 || cc.indexOf(t) !== -1; })) { hit = { row: SAMPLE[i], tier: 1 }; break; }
        }
        if (!hit) {
          for (i = 0; i < SAMPLE.length; i++) {
            var c2 = SAMPLE[i][1].toLowerCase();
            if (toks.some(function (t) { return c2.indexOf(t) !== -1; })) { hit = { row: SAMPLE[i], tier: 2 }; break; }
          }
        }
      }
    }
    return hit;
  }

  function initResolve() {
    var input = $('resolve-input'), btn = $('resolve-btn'), out = $('resolve-output');
    if (!input || !out) return;
    function sub(label, val) {
      return '<div class="resolve-out__sub"><span class="rlbl">' + label + '</span>' +
        (val ? esc(val) : '<span class="rmuted">not specified</span>') + '</div>';
    }
    var go = function () {
      var hit = resolve(input.value);
      if (hit === undefined) { out.innerHTML = ''; return; }
      if (hit === null) {
        out.innerHTML = '<div style="border-top:1px solid var(--ink); padding-top:12px; font-size:13px; color:var(--muted);">No confident match in the demo sample. A real input of this shape routes to LLM adjudication and human review.</div>';
        return;
      }
      var r = hit.row;
      var tierNote = 'Resolved by the ' + TIER_NAMES[hit.tier] +
        (hit.tier === 0 ? ', cheap certainty first.' : (hit.tier === 1 ? ', an in-domain pair carried it.' : ', the long tail, adjudicated.'));
      out.innerHTML =
        '<div class="resolve-out">' +
          '<div class="resolve-out__l">' +
            '<div class="resolve-out__lbl">Employer role</div>' +
            '<div class="resolve-out__val">' + esc(r[1]) + '</div>' +
            sub('Specialty', r[2]) + sub('Level', r[3]) + sub('Grade', r[4]) +
          '</div>' +
          '<div class="resolve-out__r">' +
            '<div class="resolve-out__lbl">Federal classification</div>' +
            '<div class="resolve-out__val">' + esc(r[6]) + ' <span class="rmuted">(' + esc(r[5]) + ')</span></div>' +
            '<div class="resolve-out__sub"><span class="rlbl">SOC-6</span>' + esc(r[8]) + ' <span class="rmuted">(' + esc(r[7]) + ')</span></div>' +
            sub('Family', r[10]) + sub('Subfamily', r[9]) +
          '</div>' +
        '</div>' +
        '<div style="border-top:1px solid var(--ink); padding-top:10px; font-size:12.5px; color:var(--muted);">' + esc(tierNote) + '</div>';
    };
    if (btn) btn.addEventListener('click', go);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    Array.prototype.forEach.call(document.querySelectorAll('.resolve-example'), function (chip) {
      chip.addEventListener('click', function () { input.value = chip.textContent.trim(); go(); });
    });
  }

  /* ---------- sample source tabs ---------- */
  function initSampleTabs() {
    var tabs = document.querySelectorAll('.sample-tab');
    if (!tabs.length) return;
    Array.prototype.forEach.call(tabs, function (tab) {
      tab.addEventListener('click', function () {
        Array.prototype.forEach.call(tabs, function (t) { t.classList.remove('is-active'); });
        tab.classList.add('is-active');
        var src = tab.getAttribute('data-src');
        var hris = $('sample-hris'), post = $('sample-post');
        if (hris) hris.style.display = src === 'hris' ? '' : 'none';
        if (post) post.style.display = src === 'post' ? '' : 'none';
      });
    });
  }

  /* ---------- the console, end to end (staged reveal) ---------- */
  var CON = [
    ['$ radius ingest --employer acme_health --file hris_export_q2.csv', ['4,182 rows · 14 columns · 3 facilities detected']],
    ['> resolving titles, facilities, locations…', ['titles → canonical: 4,182 → 212 titles → 48 occupations (SOC-6)', 'facilities → 3 canonical sites · geocoded (lat/lon)', 'flags: 61 rows ambiguous → review queue']],
    ['> canonical extract ready ✓', ['employer twin written: acme_health.parquet', '48 occupation cells × 3 facilities × 26 periods']],
    ['> exploratory analysis', ['vacancy rate 4.3% overall · 7.1% Equipment Tech (Fab AZ)', 'headcount / hires / terms by occupation × facility', 'seasonality: Q4 requisition spike (+31%), stable terms trend']],
    ['> mapping facilities', ['3 sites plotted · nearest training providers within 50 mi attached']],
    ['> demand & turnover projections', ['total positions +9.2% over 8 quarters · retirements 6.8% of techs', 'scenario levers armed: wage +5% · shift pattern · training capacity']]
  ];
  function initConsole() {
    var out = $('console-out'), btn = $('console-btn'), phases = $('console-phases');
    if (!out || !btn) return;
    out.innerHTML = CON.map(function (d) {
      return '<div class="con-line"><div class="con-line__cmd">' + esc(d[0]) + '</div>' +
        d[1].map(function (o) { return '<div class="con-line__out">' + esc(o) + '</div>'; }).join('') + '</div>';
    }).join('');
    var lines = out.querySelectorAll('.con-line');
    var chips = phases ? phases.querySelectorAll('.con-phase') : [];
    var step = 0, timer = null, running = false;
    function render() {
      Array.prototype.forEach.call(lines, function (l, i) { l.classList.toggle('is-on', step > i); });
      Array.prototype.forEach.call(chips, function (c, i) { c.classList.toggle('is-on', step > i); });
      btn.textContent = step >= 6 ? 'Run again' : (step === 0 ? 'Run the pipeline' : 'Running…');
    }
    function tick() {
      if (step >= 6) { running = false; render(); var io = $('illustrative'); if (io) io.classList.add('is-shown'); return; }
      step += 1; render();
      timer = setTimeout(tick, 650);
    }
    btn.addEventListener('click', function () {
      if (running) return;
      if (timer) clearTimeout(timer);
      running = true; step = 0; render();
      timer = setTimeout(tick, 350);
    });
    render();
  }

  /* ---------- Job Opportunity Index (click an occupation) ---------- */
  var JOI_OCCS = [
    ['Equipment Technician', [82, 74, 66, 88, 71], 76],
    ['Industrial Maintenance', [76, 81, 72, 70, 64], 73],
    ['Surgical Technologist', [68, 62, 84, 58, 77], 70],
    ['Wind Turbine Technician', [88, 58, 61, 74, 69], 70],
    ['CNC Machinist', [64, 70, 58, 66, 62], 64]
  ];
  var JOI_PILLARS = ['Demand', 'Wage', 'Access', 'Transition', 'Resilience'];
  var JOI_DESC = [
    'Openings per worker, growth of total positions, requisition persistence.',
    'Median wage vs regional benchmark; wage growth over 5 years.',
    'Shortest credential path in; training capacity within commuting range.',
    'How many higher-wage occupations are one adjacency step away.',
    'Automation exposure and cyclical sensitivity, inverted.'
  ];
  function initJoi() {
    var rowsEl = $('joi-rows'), detEl = $('joi-detail');
    if (!rowsEl || !detEl) return;
    var sel = 0;
    function render() {
      rowsEl.innerHTML = JOI_OCCS.map(function (o, i) {
        return '<div class="joi-row' + (i === sel ? ' is-sel' : '') + '" data-i="' + i + '">' +
          '<span class="joi-row__name">' + esc(o[0]) + '</span>' +
          '<span class="joi-row__idx">' + o[2] + '</span></div>';
      }).join('');
      var o = JOI_OCCS[sel];
      detEl.innerHTML =
        '<div class="joi__selhead"><span class="joi__selname">' + esc(o[0]) + '</span><span class="joi__selidx">' + o[2] + '</span></div>' +
        JOI_PILLARS.map(function (p, i) {
          var v = o[1][i];
          return '<div class="joi-pillar"><div class="joi-pillar__head"><span class="joi-pillar__name">' + p + '</span><span class="joi-pillar__v">' + v + '</span></div>' +
            '<div class="joi-pillar__track"><div class="joi-pillar__bar' + (v >= 75 ? '' : ' is-low') + '" style="width:' + v + '%;"></div></div>' +
            '<div class="joi-pillar__desc">' + JOI_DESC[i] + '</div></div>';
        }).join('');
      Array.prototype.forEach.call(rowsEl.querySelectorAll('.joi-row'), function (r) {
        r.addEventListener('click', function () { sel = parseInt(r.getAttribute('data-i'), 10); render(); });
      });
    }
    render();
  }

  /* ---------- policy levers (select a lever) ---------- */
  var LEVERS = [
    ['Expand program capacity', 'Enrollment cap lifted at matched CIP programs', 14, 6, 24, [12, 4, 6]],
    ['Last-mile stipend', 'Completion stipend for final-term students', 9, 4, 15, [8, 5, 3]],
    ['Licensure compact', 'Recognise out-of-state licenses on arrival', 7, 2, 13, [6, 2, 3]],
    ['Employer training credit', 'Tax credit per incumbent upskilled', 5, -1, 12, [9, 1, 4]]
  ];
  function initLevers() {
    var tabsEl = $('lever-tabs'), bodyEl = $('lever-body');
    if (!tabsEl || !bodyEl) return;
    var sel = 0, SCALE = 30;
    function render() {
      tabsEl.innerHTML = LEVERS.map(function (d, i) {
        return '<button class="lev-tab' + (i === sel ? ' is-sel' : '') + '" data-i="' + i + '">' + esc(d[0]) + '</button>';
      }).join('');
      var d = LEVERS[sel];
      var mid = d[2], lo = d[3], hi = d[4], ev = d[5];
      var obs = ev[0] - ev[1] - ev[2];
      bodyEl.innerHTML =
        '<div style="font-size:12.5px; color:var(--muted); margin-bottom:14px;">' + esc(d[1]) + '</div>' +
        '<div class="lev-band-area"><div class="lev-band-zero"></div>' +
          '<div class="lev-band" style="left:' + (50 + lo / SCALE * 50) + '%; width:' + ((hi - lo) / SCALE * 50) + '%;"></div>' +
          '<div class="lev-mid" style="left:' + (50 + mid / SCALE * 50) + '%;"></div></div>' +
        '<div class="lev-scale"><span>baseline</span><span>' + (lo > 0 ? '+' : '') + lo + '% … <strong style="color:var(--ink);">+' + mid + '%</strong> … +' + hi + '%</span></div>' +
        '<div style="border-top:1px solid var(--rule); margin-top:12px; padding-top:10px; font-size:12px; color:var(--muted); line-height:1.5;">The hatched band is the 90% interval; the solid line the central estimate. Uncertainty is part of the answer.</div>' +
        '<div class="lev-evidence"><div class="lev-evidence__head"><span style="font-size:11px; letter-spacing:0.08em; text-transform:uppercase; color:var(--faint);">Evidence base</span><span style="font-size:15px; font-weight:600;">' + ev[0] + ' studies</span></div>' +
          '<div class="lev-evidence__bar">' +
            '<div style="width:' + Math.round(ev[1] / ev[0] * 100) + '%; background:var(--ink);"></div>' +
            '<div style="width:' + Math.round(ev[2] / ev[0] * 100) + '%; background:var(--hatch); border-top:1px solid var(--ink); border-bottom:1px solid var(--ink);"></div>' +
            '<div style="width:' + Math.round(obs / ev[0] * 100) + '%; background:var(--light);"></div></div>' +
          '<div class="lev-evidence__row"><span><strong>' + ev[1] + '</strong> <span style="color:var(--faint);">causal</span></span>' +
            '<span><strong>' + ev[2] + '</strong> <span style="color:var(--faint);">quasi-exp.</span></span>' +
            '<span><strong>' + obs + '</strong> <span style="color:var(--faint);">observational</span></span></div></div>';
      Array.prototype.forEach.call(tabsEl.querySelectorAll('.lev-tab'), function (t) {
        t.addEventListener('click', function () { sel = parseInt(t.getAttribute('data-i'), 10); render(); });
      });
    }
    render();
  }

  /* ---------- observatories (select a studio) ---------- */
  var OBS = [
    ['Economy Studio', 'Gaps, growth and total positions by sector and region', ['gap index by occupation', 'requisition seasonality', 'sector growth decomposition']],
    ['Skills Studio', 'The skill space: clusters, adjacencies, transition ladders', ['cluster map', 'adjacency scores', 'credential-only ladders']],
    ['Migration Flows Studio', 'Who arrives, who leaves, by occupation and origin', ['net flows by state pair', 'occupation mix of arrivals', 'retention after 1 year']]
  ];
  function initObs() {
    var tabsEl = $('obs-tabs'), panelEl = $('obs-panel');
    if (!tabsEl || !panelEl) return;
    var sel = 0;
    function render() {
      tabsEl.innerHTML = OBS.map(function (d, i) {
        return '<button class="obs-tab' + (i === sel ? ' is-sel' : '') + '" data-i="' + i + '">' + esc(d[0]) + '</button>';
      }).join('');
      var d = OBS[sel];
      panelEl.innerHTML = '<div class="obs-panel__name">' + esc(d[0]) + '</div>' +
        '<div class="obs-panel__desc">' + esc(d[1]) + '</div>' +
        d[2].map(function (v) { return '<div class="obs-panel__view">' + esc(v) + '</div>'; }).join('');
      Array.prototype.forEach.call(tabsEl.querySelectorAll('.obs-tab'), function (t) {
        t.addEventListener('click', function () { sel = parseInt(t.getAttribute('data-i'), 10); render(); });
      });
    }
    render();
  }

  /* ---------- the flow model (hover a node) ----------
     One occupation, one region. Nodes and arrows from the reference. */
  var FLOW_NODES = [
    ['hires', 10, 12, 150, 44, 'Hires', 'inflow', 'Gross hires into the occupation, from the employer HRIS panel.'],
    ['train', 10, 68, 150, 44, 'Training pipeline', 'inflow', 'CIP- and RAPIDS-matched completers, weighted by in-state hire probability. Graduate trends carry the projection.'],
    ['migin', 10, 124, 150, 44, 'Migration in', 'inflow', 'Bilateral flows from ACS PUMS, 19 vintages, chained SOC harmonization with uncertainty flags.'],
    ['adj', 10, 180, 150, 44, 'Adjacent population', 'inflow', 'Skill-adjacent workers via 798k occupation-pair similarities; tiered by retraining distance.'],
    ['inact', 10, 236, 150, 44, 'Eligible inactive', 'inflow', 'Experienced inactive workers with a modelled activation probability.'],
    ['stock', 250, 104, 150, 104, 'Occupation stock', 'stock', 'Cohort accounting over 501 occupations and 51 jurisdictions. Every projection must satisfy the identity.'],
    ['term', 180, 330, 140, 44, 'True exits', 'outflow', 'Terminations decomposed; transfers removed. Raw 19% becomes a true 4.29%.'],
    ['migout', 340, 330, 140, 44, 'Migration out', 'outflow', 'Workers leaving the region, same ACS grain as inflows.'],
    ['retire', 500, 330, 140, 44, 'Retirements', 'outflow', 'Empirical age-specific exit rates, not a flat assumption.'],
    ['demand', 460, 104, 140, 104, 'Demand', 'demand', 'Four layers, deliberately never averaged. Divergence between them is information.'],
    ['req', 650, 44, 160, 40, 'Requisitions', 'L1', 'Pooled employer requisition rates and hire slopes, with confidence tiers.'],
    ['struct', 650, 96, 160, 40, 'Structural', 'L2', 'Statistical projections and wage trend; what the statistical system expects.'],
    ['fwd', 650, 148, 160, 40, 'Forward need', 'L3', 'Population-anchored scenarios with aging intensity adjustment.'],
    ['blue', 650, 200, 160, 40, 'Blueprints', 'L4', 'Ideal composition per facility archetype and ramp state, triangulated from public sources.'],
    ['gap', 315, 4, 200, 42, 'Supply-demand gap', 'output', 'Demand minus available supply. What the engine solves for; substitution absorbs 10 to 25% of raw gaps.']
  ];
  var FLOW_ARROWS = [
    ['hires', 'stock', 160, 34, 250, 124, 'h'], ['train', 'stock', 160, 90, 250, 142, 'h'], ['migin', 'stock', 160, 146, 250, 158, 'h'], ['adj', 'stock', 160, 202, 250, 174, 'h'], ['inact', 'stock', 160, 258, 250, 190, 'h'],
    ['stock', 'term', 285, 208, 250, 330, 'v'], ['stock', 'migout', 325, 208, 410, 330, 'v'], ['stock', 'retire', 365, 208, 560, 330, 'v'],
    ['req', 'demand', 650, 64, 600, 132, 'h'], ['struct', 'demand', 650, 116, 600, 150, 'h'], ['fwd', 'demand', 650, 168, 600, 166, 'h'], ['blue', 'demand', 650, 220, 600, 184, 'h'],
    ['stock', 'gap', 325, 104, 380, 46, 'v'], ['demand', 'gap', 530, 104, 455, 46, 'v']
  ];
  function initFlow() {
    var canvas = $('flow-canvas');
    if (!canvas) return;
    var noteName = $('flow-note-name'), noteBlurb = $('flow-note-blurb');
    var defName = noteName ? noteName.textContent : '';
    var defBlurb = noteBlurb ? noteBlurb.textContent : '';
    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '820'); svg.setAttribute('height', '390');
    svg.style.cssText = 'position:absolute; left:0; top:0; overflow:visible; pointer-events:none;';
    svg.innerHTML = '<defs>' +
      '<marker id="fm-a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#B9B9B4"></path></marker>' +
      '<marker id="fm-b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#131313"></path></marker></defs>';
    var paths = FLOW_ARROWS.map(function (a) {
      var sx = a[2], sy = a[3], ex = a[4], ey = a[5];
      var d = a[6] === 'h'
        ? 'M' + sx + ' ' + sy + ' C ' + (sx + ex) / 2 + ' ' + sy + ', ' + (sx + ex) / 2 + ' ' + ey + ', ' + ex + ' ' + ey
        : 'M' + sx + ' ' + sy + ' C ' + sx + ' ' + (sy + ey) / 2 + ', ' + ex + ' ' + (sy + ey) / 2 + ', ' + ex + ' ' + ey;
      var p = document.createElementNS(svgNS, 'path');
      p.setAttribute('d', d); p.setAttribute('fill', 'none');
      p.setAttribute('stroke', '#B9B9B4'); p.setAttribute('stroke-width', '1.1');
      p.setAttribute('marker-end', 'url(#fm-a)');
      svg.appendChild(p);
      return { el: p, from: a[0], to: a[1] };
    });
    canvas.appendChild(svg);
    var nodeEls = FLOW_NODES.map(function (n) {
      var div = document.createElement('div');
      var mod = n[6] === 'stock' ? ' flow-node--stock' : (n[6] === 'demand' ? ' flow-node--demand' : (/^L\d$/.test(n[6]) ? ' flow-node--layer' : (n[6] === 'output' ? ' flow-node--output' : '')));
      div.className = 'flow-node' + mod;
      div.style.cssText = 'left:' + n[1] + 'px; top:' + n[2] + 'px; width:' + n[3] + 'px; height:' + n[4] + 'px;';
      div.innerHTML = '<div class="flow-node__label">' + esc(n[5]) + '</div><div class="flow-node__kind">' + esc(n[6]) + '</div>';
      canvas.appendChild(div);
      return { el: div, id: n[0], label: n[5], blurb: n[7] };
    });
    function focus(id) {
      nodeEls.forEach(function (n) { n.el.style.opacity = (id && n.id !== id) ? '0.25' : '1'; });
      paths.forEach(function (p) {
        var on = id && (p.from === id || p.to === id);
        p.el.setAttribute('stroke', on ? '#131313' : '#B9B9B4');
        p.el.setAttribute('stroke-width', on ? '1.8' : '1.1');
        p.el.setAttribute('marker-end', on ? 'url(#fm-b)' : 'url(#fm-a)');
      });
      var n = null;
      if (id) nodeEls.forEach(function (x) { if (x.id === id) n = x; });
      if (noteName) noteName.textContent = n ? n.label : defName;
      if (noteBlurb) noteBlurb.textContent = n ? n.blurb : defBlurb;
    }
    nodeEls.forEach(function (n) {
      n.el.addEventListener('mouseenter', function () { focus(n.id); });
      n.el.addEventListener('mouseleave', function () { focus(null); });
    });
  }

  /* ---------- divergence lines (hover the legend) ---------- */
  function initDivergence() {
    var fig = $('div-lines'), legend = $('div-legend');
    if (!fig || !legend) return;
    var note = $('div-note');
    var defaultNote = legend.getAttribute('data-default');
    var paths = fig.querySelectorAll('path[data-i]');
    var rows = legend.querySelectorAll('.div-legend-row');
    Array.prototype.forEach.call(rows, function (row) {
      var idx = row.getAttribute('data-i');
      row.addEventListener('mouseenter', function () {
        Array.prototype.forEach.call(rows, function (r) { if (r !== row) r.classList.add('is-dim'); });
        Array.prototype.forEach.call(paths, function (p) {
          var on = p.getAttribute('data-i') === idx;
          p.style.opacity = on ? '1' : '0.25';
          p.setAttribute('stroke-width', on ? '2.4' : '1.3');
        });
        if (note && row.getAttribute('data-note')) note.innerHTML = row.getAttribute('data-note');
      });
      row.addEventListener('mouseleave', function () {
        Array.prototype.forEach.call(rows, function (r) { r.classList.remove('is-dim'); });
        Array.prototype.forEach.call(paths, function (p) { p.style.opacity = '1'; p.setAttribute('stroke-width', '1.3'); });
        if (note && defaultNote != null) note.innerHTML = defaultNote;
      });
    });
  }

  /* ---------- the lake: one dot per dataset, filled = live ---------- */
  function initLakeDots() {
    var lake = $('lake');
    if (!lake) return;
    Array.prototype.forEach.call(lake.querySelectorAll('.matrix-row'), function (row) {
      var count = parseInt(row.getAttribute('data-count'), 10) || 0;
      var filled = parseInt(row.getAttribute('data-filled'), 10) || 0;
      var holder = row.querySelector('.matrix-row__dots');
      if (!holder) return;
      var html = '';
      for (var i = 0; i < count; i++) {
        html += '<span class="mdot' + (i < filled ? '' : ' mdot--hollow') + '"></span>';
      }
      holder.innerHTML = html;
    });
  }

  /* ---------- employer facility map (illustrative outputs) ---------- */
  var FACILITIES = [
    ['Phoenix Central', 'Acute-care hospital', 63, 20, 2840, 41, 33, 128, '4.3%'],
    ['Mesa East', 'Surgical center', 74, 40, 640, 9, 11, 44, '6.8%'],
    ['Tucson South', 'Clinic network', 55, 78, 1120, 18, 15, 61, '5.2%'],
    ['Flagstaff North', 'Rural hospital', 44, 24, 380, 6, 7, 33, '8.1%']
  ];
  var TRAINING = [
    ['Maricopa Community Colleges', 'Nursing (ADN)', '29-1141', '1,240/yr', '71% in-state'],
    ['Northern Arizona University', 'Nursing (BSN)', '29-1141', '540/yr', '63% in-state'],
    ['Pima Community College', 'Medical Assisting', '31-9092', '410/yr', '82% in-state'],
    ['Gateway Community College', 'Surgical Technology', '29-2055', '120/yr', '77% in-state'],
    ['Chandler-Gilbert CC', 'Radiography', '29-2034', '90/yr', '68% in-state']
  ];
  var STAFFING = [
    ['Aya Healthcare', 'Travel RN', '29-1141', '~9k placements/yr'],
    ['Medical Solutions', 'Nursing, allied', '29-1141', '~6k placements/yr'],
    ['Cross Country', 'Multi-specialty', '29-2061', '~5k placements/yr'],
    ['Trusted Health', 'RN, per diem', '29-1141', '~3k placements/yr'],
    ['CrossMed', 'Allied health', '29-2055', '~2k placements/yr']
  ];
  var TITLE_METRICS = [
    ['Registered Nurse', '29-1141', '5.1%', '47d', '39d', '4.4%'],
    ['Licensed Practical Nurse', '29-2061', '6.3%', '41d', '35d', '5.0%'],
    ['Surgical Technologist', '29-2055', '8.4%', '62d', '71d', '6.1%'],
    ['Nurse Aide', '31-1131', '7.2%', '22d', '18d', '6.8%']
  ];
  function initFacility() {
    var map = $('fac-map'), panel = $('fac-panel');
    if (!map || !panel) return;
    var defaultPanel = panel.innerHTML;
    FACILITIES.forEach(function (f, i) {
      var dot = document.createElement('div');
      dot.className = 'fac-dot';
      dot.style.left = f[2] + '%'; dot.style.top = f[3] + '%';
      map.appendChild(dot);
      function show() {
        Array.prototype.forEach.call(map.querySelectorAll('.fac-dot'), function (d) { d.classList.remove('is-on'); });
        dot.classList.add('is-on');
        panel.innerHTML =
          '<div class="fac-panel__name">' + esc(f[0]) + '</div>' +
          '<div class="fac-panel__type">' + esc(f[1]) + '</div>' +
          '<div class="fac-panel__grid">' +
            '<span>Headcount</span><strong>' + f[4].toLocaleString() + '</strong>' +
            '<span>Hires / mo</span><strong>' + f[5] + '</strong>' +
            '<span>Terminations / mo</span><strong>' + f[6] + '</strong>' +
            '<span>Open requisitions</span><strong>' + f[7] + '</strong>' +
            '<span>Vacancy rate</span><strong>' + f[8] + '</strong>' +
          '</div>';
      }
      dot.addEventListener('mouseenter', show);
      dot.addEventListener('click', show);
    });
    var supplyBtn = $('fac-supply');
    if (supplyBtn) {
      var on = false;
      supplyBtn.addEventListener('click', function () {
        on = !on;
        map.classList.toggle('show-supply', on);
        var inv = $('fac-inventory');
        if (inv) inv.style.display = on ? '' : 'none';
        supplyBtn.classList.toggle('is-active', on);
        supplyBtn.textContent = on ? 'Hide local supply' : 'Show local supply';
      });
      // supply dots (training + staffing), hidden until toggled
      [[30, 30, 'train'], [82, 34, 'train'], [60, 62, 'staff'], [48, 46, 'staff'], [70, 20, 'train']].forEach(function (s) {
        var d = document.createElement('div');
        d.className = 'fac-supdot fac-supdot--' + s[2];
        d.style.left = s[0] + '%'; d.style.top = s[1] + '%';
        map.appendChild(d);
      });
    }
    var invT = $('inv-training'), invS = $('inv-staffing'), mt = $('metrics-body');
    function invRows(arr) {
      return arr.map(function (t) {
        return '<div class="inv-row"><span class="inv-row__name">' + esc(t[0]) + '</span>' +
          '<span class="inv-row__meta">' + esc(t[1]) + ' · ' + esc(t[2]) + '</span>' +
          '<span class="inv-row__n">' + esc(t[3]) + (t[4] ? ' · ' + esc(t[4]) : '') + '</span></div>';
      }).join('');
    }
    if (invT) invT.innerHTML = invRows(TRAINING);
    if (invS) invS.innerHTML = invRows(STAFFING);
    if (mt) mt.innerHTML = TITLE_METRICS.map(function (m) {
      return '<div class="metrics-row"><span>' + esc(m[0]) + ' <span class="rmuted">' + esc(m[1]) + '</span></span>' +
        '<span class="r">' + esc(m[2]) + '</span><span class="r">' + esc(m[3]) + '</span>' +
        '<span class="r">' + esc(m[4]) + '</span><span class="r rmuted">' + esc(m[5]) + '</span></div>';
    }).join('');
  }

  /* ---------- job clusters: the adjacent population (hover a node) ----------
     One target occupation at the centre. Around it, the occupations one
     retraining step away, sized by pool and weighted by transition distance. */
  var CLUSTER_CENTER = ['Registered Nurse', '29-1141'];
  var CLUSTER_SATS = [
    ['lpn', 'Licensed Practical Nurse', '29-2061', 'near', 320, '~11,400 in region', 'Bridge: LPN-to-RN, 12 to 18 months. Wage +34%. The shortest ladder in, with many bridge programs and strong in-state retention.'],
    ['aide', 'Nurse Aide', '31-1131', 'far', 320, '~26,800 in region', 'Bridge: full ADN, two years. Wage +118%. The largest pool by far, and the longest, most attrition-prone path.'],
    ['surg', 'Surgical Technologist', '29-2055', 'mid', 320, '~2,100 in region', 'Bridge: ADN with credit transfer. Wage +41%. Clinical overlap shortens the didactic requirement.'],
    ['para', 'Paramedic', '29-2043', 'mid', 320, '~3,400 in region', 'Bridge: accelerated ADN. Wage +52%. Acute-care experience transfers; scheduling is the main barrier.'],
    ['resp', 'Respiratory Therapist', '29-1126', 'near', 320, '~1,900 in region', 'Bridge: RN completion. Wage +9%. Adjacent scope but a small pool and modest wage gain limit the pull.'],
    ['ma', 'Medical Assistant', '31-9092', 'far', 320, '~8,700 in region', 'Bridge: full ADN, two years. Wage +96%. Large pool with ambulatory experience, but a long clinical ladder.']
  ];
  var CLUSTER_POS = [[110, 70], [320, 44], [530, 70], [530, 250], [320, 276], [110, 250]];
  var CLUSTER_W = { near: 2.4, mid: 1.6, far: 1.0 };
  function initClusters() {
    var canvas = $('cluster-canvas'), note = $('cluster-note');
    if (!canvas) return;
    var defaultNote = note ? note.getAttribute('data-default') : null;
    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '640'); svg.setAttribute('height', '320');
    svg.style.cssText = 'position:absolute; left:0; top:0; pointer-events:none;';
    var edges = CLUSTER_SATS.map(function (s, i) {
      var p = CLUSTER_POS[i];
      var line = document.createElementNS(svgNS, 'line');
      line.setAttribute('x1', 320); line.setAttribute('y1', 160);
      line.setAttribute('x2', p[0]); line.setAttribute('y2', p[1]);
      line.setAttribute('stroke', '#131313');
      line.setAttribute('stroke-width', CLUSTER_W[s[3]]);
      line.setAttribute('opacity', '0.55');
      if (s[3] === 'far') line.setAttribute('stroke-dasharray', '3 4');
      else if (s[3] === 'mid') line.setAttribute('stroke-dasharray', '8 4');
      svg.appendChild(line);
      return line;
    });
    canvas.appendChild(svg);
    var center = document.createElement('div');
    center.className = 'clu-node clu-node--center';
    center.style.left = '320px'; center.style.top = '160px';
    center.innerHTML = '<div class="clu-node__label">' + esc(CLUSTER_CENTER[0]) + '</div>' +
      '<div class="clu-node__meta">' + esc(CLUSTER_CENTER[1]) + ' &middot; target</div>';
    canvas.appendChild(center);
    var sats = CLUSTER_SATS.map(function (s, i) {
      var p = CLUSTER_POS[i];
      var div = document.createElement('div');
      div.className = 'clu-node';
      div.style.left = p[0] + 'px'; div.style.top = p[1] + 'px';
      div.innerHTML = '<div class="clu-node__label">' + esc(s[1]) + '</div>' +
        '<div class="clu-node__meta">' + esc(s[5]) + '</div>';
      canvas.appendChild(div);
      return div;
    });
    function focus(i) {
      sats.forEach(function (d, j) { d.classList.toggle('is-dim', i !== null && j !== i); });
      edges.forEach(function (e, j) {
        var on = i === null || j === i;
        e.setAttribute('opacity', on ? (i === null ? '0.55' : '1') : '0.15');
      });
      if (note) note.innerHTML = i === null ? defaultNote : esc(CLUSTER_SATS[i][6]);
    }
    sats.forEach(function (d, i) {
      d.addEventListener('mouseenter', function () { focus(i); });
      d.addEventListener('mouseleave', function () { focus(null); });
    });
    center.addEventListener('mouseenter', function () {
      sats.forEach(function (d) { d.classList.remove('is-dim'); });
      edges.forEach(function (e) { e.setAttribute('opacity', '1'); });
      if (note) note.innerHTML = 'Registered Nurse, the target. The six occupations around it are the reachable pool, near steps in solid, mid dashed, far dotted. Adjacency comes from 798k occupation-pair similarities, tiered by retraining distance.';
    });
    center.addEventListener('mouseleave', function () { focus(null); });
  }

  /* ---------- employment hierarchy (hover a level) ----------
     The reporting tree reconstructed from manager IDs in the HRIS. */
  var HIER = [
    ['exec', 'Nurse executive & directors', '14', 44, 'span 1 : 9', 'Fourteen executives and directors, reconstructed from reporting lines in the raw export. The top of the clinical org.'],
    ['mgr', 'Nurse managers', '128', 126, 'span 1 : 11', 'One manager per unit. Turnover at this level is the strongest leading signal of frontline attrition below it.'],
    ['lead', 'Charge nurses & leads', '412', 208, 'span 1 : 6', 'Working leads, counted in staffing yet carrying a span. The layer most often mislabelled in raw exports.'],
    ['rn', 'Staff RNs & LPNs', '4,180', 290, 'frontline', 'The bulk of the panel. Vacancy and time-to-fill are tracked here by unit and facility.'],
    ['aide', 'Nurse aides & support', '1,360', 344, 'frontline', 'Support roles feeding the RN ladder, the internal pipeline the adjacency model draws on.']
  ];
  function initHierarchy() {
    var canvas = $('hier-canvas'), note = $('hier-note');
    if (!canvas) return;
    var defaultNote = note ? note.getAttribute('data-default') : null;
    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '620'); svg.setAttribute('height', '372');
    svg.style.cssText = 'position:absolute; left:0; top:0; pointer-events:none;';
    var edges = [];
    for (var i = 0; i < HIER.length - 1; i++) {
      var line = document.createElementNS(svgNS, 'line');
      line.setAttribute('x1', 310); line.setAttribute('y1', HIER[i][3] + 13);
      line.setAttribute('x2', 310); line.setAttribute('y2', HIER[i + 1][3] - 13);
      line.setAttribute('stroke', '#131313');
      line.setAttribute('stroke-width', 1.2 + i * 0.7);
      line.setAttribute('opacity', '0.5');
      svg.appendChild(line);
      edges.push(line);
    }
    canvas.appendChild(svg);
    var nodes = HIER.map(function (h) {
      var div = document.createElement('div');
      div.className = 'hier-node' + (h[0] === 'exec' ? ' hier-node--exec' : '');
      div.style.left = '310px'; div.style.top = h[3] + 'px';
      div.innerHTML = '<span class="hier-node__role">' + esc(h[1]) + '</span>' +
        '<span class="hier-node__n">' + esc(h[2]) + ' &middot; ' + esc(h[4]) + '</span>';
      canvas.appendChild(div);
      return div;
    });
    function focus(i) {
      nodes.forEach(function (d, j) { d.classList.toggle('is-dim', i !== null && j !== i); });
      edges.forEach(function (e, j) {
        var on = i === null || j === i || j === i - 1;
        e.setAttribute('opacity', on ? (i === null ? '0.5' : '0.9') : '0.15');
      });
      if (note) note.innerHTML = i === null ? defaultNote : esc(HIER[i][5]);
    }
    nodes.forEach(function (d, i) {
      d.addEventListener('mouseenter', function () { focus(i); });
      d.addEventListener('mouseleave', function () { focus(null); });
    });
  }

  function init() {
    initLakeDots();
    initResolve();
    initSampleTabs();
    initConsole();
    initFacility();
    initJoi();
    initLevers();
    initObs();
    initFlow();
    initClusters();
    initHierarchy();
    initDivergence();
    initHoverDim('resolution', '.res-row', 'resolution-note');
    initHoverDim('layers', '.layer-row', null);
    initHoverDim('lake', '.matrix-row', 'lake-note');
    initHoverDim('blueprint', '.bp-row', 'bp-note');
    initHoverDim('signals', '.sig-row', 'sig-note');
    initHoverDim('coverage', '.cov-row', 'cov-note');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
