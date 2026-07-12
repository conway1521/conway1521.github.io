/* ============================================================
   Ink plates — interaction grammar for the portfolio figures.
   One interactive moment per plate. Three verbs: hover, click, select.
   Logic and values lifted from the Visual Language Study by plate id.
   ============================================================ */
(function () {
  'use strict';

  /* ---- shared sample data (plates 10A, 10C) ----
     row = [as delivered, canonical base, specialty, level, SOC-6, SOC title] */
  var SAMPLE_HRIS = [
    ['AmbFloat LPN / II', 'LPN', '', 'staff · II', '29-2061', 'Licensed Practical and Licensed Vocational Nurses'],
    ['DevOps Engineer, Software Engineer III, Enterprise Risk Finance Technology', 'Software Engineer', 'DevOps', 'staff · III', '15-1252', 'Software Developers'],
    ['Certified Nursing Assistant I, B1D Critical Care 1st Floor', 'Nurse Aide', 'Critical Care', 'staff · I', '31-1131', 'Nursing Assistants'],
    ['Associate Professor BSN, Nursing', 'RN', '', 'staff', '29-1141', 'Registered Nurses'],
    ['AI Digital Supply Chain Program Manager', 'Program Manager', 'Supply Chain', 'manager', '11-9072', 'Management Occupations'],
    ['Certified Medical Assistant, Pediatric Gastro', 'Certified Medical Assistant', 'Pediatrics', 'staff', '31-9092', 'Medical Assistants'],
    ['Clinical Staff Pharmacist Pharmacy and ED', 'Clinical Pharmacist', '', 'staff', '29-1051', 'Pharmacists'],
    ['CRNA', 'CRNA', '', 'staff', '29-1151', 'Nurse Anesthetists']
  ];
  var SAMPLE_POST = [
    ['Sr. Scrum Master (Remote, LOCALS)', 'IT Project Manager', '', 'senior', '15-1299', 'Computer Occupations, All Other'],
    ['Upper School Mathematics Teacher', 'High School Math Teacher', '', 'staff', '25-2031', 'Secondary School Teachers'],
    ['Marketing Coordinator', 'Marketing Coordinator', '', 'staff', '13-1161', 'Market Research and Marketing Specialists'],
    ['Travel Nurse RN, Med/Surg', 'RN', 'Med/Surg', 'staff', '29-1141', 'Registered Nurses']
  ];
  var TIER_NAMES = ['01 · open-source baseline', '02 · fine-tuned model', '03 · LLM adjudication'];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---- 10A resolve a title (substring match, three tiers) ---- */
  function resolve(input) {
    var ALL = SAMPLE_HRIS.concat(SAMPLE_POST);
    var q = (input || '').toLowerCase().trim();
    if (!q) return undefined;
    var hit = null, r, i;
    for (i = 0; i < ALL.length; i++) {
      var o = ALL[i][0].toLowerCase();
      if (o.indexOf(q) !== -1 || q.indexOf(o) !== -1) { hit = { row: ALL[i], tier: 0 }; break; }
    }
    if (!hit) {
      var toks = q.split(/[^a-z0-9]+/).filter(function (t) { return t.length > 2; });
      if (toks.length) {
        for (i = 0; i < ALL.length; i++) {
          var oo = ALL[i][0].toLowerCase(), cc = ALL[i][1].toLowerCase();
          if (toks.every(function (t) { return oo.indexOf(t) !== -1 || cc.indexOf(t) !== -1; })) { hit = { row: ALL[i], tier: 1 }; break; }
        }
        if (!hit) {
          for (i = 0; i < ALL.length; i++) {
            var c2 = ALL[i][1].toLowerCase();
            if (toks.some(function (t) { return c2.indexOf(t) !== -1; })) { hit = { row: ALL[i], tier: 2 }; break; }
          }
        }
      }
    }
    return hit; // object, or null when nothing matched
  }

  function renderResolve(out, hit) {
    if (hit === undefined) { out.innerHTML = ''; return; }
    if (hit === null) {
      out.innerHTML = '<div style="border-top:1px solid var(--ink); padding-top:12px; font-size:13px; color:var(--muted);">' +
        'No confident match in the demo sample. A real input of this shape routes to layer 03, LLM adjudication — flagged, never guessed.</div>';
      return;
    }
    var r = hit.row;
    var spec = r[2] ? 'Specialty: ' + r[2] : '';
    var lvl = r[3] ? 'Level: ' + r[3] : '';
    var tierNote = 'Resolved by ' + TIER_NAMES[hit.tier] +
      (hit.tier === 0 ? ' — cheap certainty first' : (hit.tier === 1 ? ' — in-domain pairs carried it' : ' — the long tail, adjudicated'));
    out.innerHTML =
      '<div class="resolve-out">' +
        '<div class="resolve-out__l">' +
          '<div class="resolve-out__lbl">Employer-facing canonical</div>' +
          '<div class="resolve-out__val">' + esc(r[1]) + '</div>' +
          (spec ? '<div class="resolve-out__sub">' + esc(spec) + '</div>' : '') +
          (lvl ? '<div class="resolve-out__sub">' + esc(lvl) + '</div>' : '') +
        '</div>' +
        '<div class="resolve-out__r">' +
          '<div class="resolve-out__lbl">SOC-6 federal code</div>' +
          '<div class="resolve-out__val" style="letter-spacing:0.02em;">' + esc(r[4]) + '</div>' +
          '<div class="resolve-out__sub">' + esc(r[5]) + '</div>' +
        '</div>' +
      '</div>' +
      '<div style="border-top:1px solid var(--ink); padding-top:10px; margin-top:0; font-size:12.5px; color:var(--muted);">' + esc(tierNote) + '</div>';
  }

  function initResolve() {
    var input = document.getElementById('resolve-input');
    var btn = document.getElementById('resolve-btn');
    var out = document.getElementById('resolve-output');
    if (!input || !out) return;
    var go = function () { renderResolve(out, resolve(input.value)); };
    if (btn) btn.addEventListener('click', go);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    Array.prototype.forEach.call(document.querySelectorAll('.resolve-example'), function (chip) {
      chip.addEventListener('click', function () { input.value = chip.textContent.trim(); go(); });
    });
  }

  /* ---- hover-to-inspect: focus stays lit, the rest recede (8B, 10B) ---- */
  function initHoverDim(containerId, rowSelector, noteId, defaultNote) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var rows = Array.prototype.slice.call(container.querySelectorAll(rowSelector));
    var note = noteId ? document.getElementById(noteId) : null;
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

  /* ---- select-to-refocus: sample source tabs (10C) ---- */
  function initSampleTabs() {
    var tabs = document.querySelectorAll('.sample-tab');
    if (!tabs.length) return;
    Array.prototype.forEach.call(tabs, function (tab) {
      tab.addEventListener('click', function () {
        Array.prototype.forEach.call(tabs, function (t) { t.classList.remove('is-active'); });
        tab.classList.add('is-active');
        var src = tab.getAttribute('data-src');
        var hris = document.getElementById('sample-hris');
        var post = document.getElementById('sample-post');
        if (hris) hris.style.display = src === 'hris' ? '' : 'none';
        if (post) post.style.display = src === 'post' ? '' : 'none';
      });
    });
  }

  function init() {
    initResolve();
    var casc = document.getElementById('cascade');
    initHoverDim('cascade', '.casc-row', 'cascade-note', casc ? casc.getAttribute('data-default') : null);
    initHoverDim('layers', '.layer-row', null, null);
    initSampleTabs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
