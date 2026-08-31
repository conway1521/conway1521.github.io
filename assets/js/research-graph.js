/* ============================================================
   Research graph. Twenty pieces of work laid out by what each
   one needs from the others. Hover to trace, click to open.
   Hand-authored positions, no force simulation, no dependency.
   ============================================================ */
(function () {
  'use strict';

  var N = {

    /* ---------------- macroeconomics ---------------- */

    sage: {
      x: 150, y: 480, k: 'pub', l: ['Wellbeing and', 'macroeconomics'], lx: 0, ly: 30, a: 'middle',
      title: 'Wellbeing and macroeconomics: a SAGE approach',
      meta: 'Published, University of Oxford Social Macroeconomics working paper series',
      short: 'My master’s thesis integrates social psychology into a standard macroeconomic model, so that household behavior during a shock is represented by something closer to how households actually behave.',
      plain: 'A standard macroeconomic model gives a household a choice between consuming and resting, and that is very nearly the whole of what it is allowed to want. This one lets a household manage its means and its needs inside an economic system, embedded in a web of social relationships and rooted in a physical place, which changes both how it responds when a shock arrives and what it would mean for that shock to have been absorbed.',
      tech: 'An incomplete-markets model of the Bewley type in which period utility carries arguments beyond consumption and leisure, so that social relationships and place-based conditions enter preferences directly rather than arriving through the budget constraint. Solved numerically and calibrated, with the household problem written so that the social terms can be switched off to recover the standard case.',
      links: [['PDF', '/assets/papers/wellbeing-macroeconomics.pdf'], ['Oxford series', 'https://www.bsg.ox.ac.uk/research/publications/wellbeing-and-macroeconomics-sage-approach']]
    },

    sagetool: {
      x: 88, y: 552, k: 'tool', l: ['SAGE model', 'explorer'], lx: -17, ly: 2, a: 'end',
      title: 'Wellbeing and macroeconomics explorer',
      meta: 'Live tool, published in QuantEcon',
      short: 'Turns the SAGE model into something you can move the parameters on, so you can watch how the social psychology terms change what happens to a household during a shock.',
      plain: 'The paper argues that a household’s social fabric belongs inside the model rather than outside it, and the explorer is where you can check whether that argument does any work, by turning the social terms up and down and seeing which results move and which do not.',
      tech: 'The model is available in QuantEcon, the open source project for quantitative economics, computational lectures and tools in Python and Julia founded by Thomas Sargent and John Stachurski and used widely in teaching and research.',
      links: [['Launch the explorer', 'https://conway1521.github.io/sage-bewley/']]
    },

    atlas: {
      x: 262, y: 508, k: 'tool', l: ['Open Inequality', 'Atlas'], lx: 17, ly: 2, a: 'start',
      title: 'Open Inequality Atlas',
      meta: 'Live tool, open data',
      short: 'A single versioned openly licensed panel of household net-wealth inequality, built because assembling a comparable one is a research project in itself and nobody had published the result.',
      plain: 'Wealth inequality data is scattered across mutually incompatible sources, the World Inequality Database, the ECB’s HFCS, the Luxembourg Wealth Study, the US Survey of Consumer Finances, and the Federal Reserve’s Distributional Financial Accounts, and each of them uses a different unit, a different methodology, and a different license, so anyone wanting a cross-country panel has to rebuild it before they can begin. The Atlas closes that gap for my own research and for anyone else who needs it, and it currently holds 10,783 observations across 213 countries from 1800 to 2025.',
      tech: 'Every row is tagged by source priority and by comparability tier, so a user can decide how much reconciliation they are willing to accept rather than inheriting mine, and the panel is versioned so results built on it stay reproducible against the vintage they were built on.',
      links: [['Launch the Atlas', 'https://conway1521.github.io/open-inequality-atlas/']]
    },

    fiscal: {
      x: 128, y: 392, k: 'wip', l: ['Fiscal policy and', 'consumption'], lx: -15, ly: 2, a: 'end',
      title: 'Fiscal policy’s distributional impact on consumption',
      meta: 'In development, with Paul Hubert and Fergus Cumming',
      short: 'Identifies the channels through which fiscal policy reaches consumption across households of varying credit constraints, building on Hubert and Cumming (2021) to connect asset liquidity with a fiscal policy dataset.',
      plain: 'An average multiplier tells you what a fiscal shock did to the country and almost nothing about who it reached, and the households whose consumption responds most are exactly the ones a standard specification averages away. This pairs a narrative identification of the shocks with heterogeneity across households, so the effect can be measured where it actually lands.',
      tech: 'Narrative identification of fiscal shocks over a two-decade UK series of legislative measures, interacted with household-level asset liquidity and credit constraint status, so that the response is estimated conditionally rather than in aggregate.',
      links: []
    },

    /* ---------------- regional development ---------------- */

    p1: {
      x: 252, y: 148, k: 'wp', l: ['Ecosystem', 'framework'], lx: 0, ly: -24, a: 'middle',
      title: 'A modular framework for inclusive economic development',
      meta: 'Working paper, first dissertation paper',
      short: 'Builds the conceptual framework, in which regional economies are ecosystems resting on three pillars, place-based conditions, human and social capital, and economic activity, arranged so that complexity can be added one component at a time.',
      plain: 'Practitioners in community organizations, community colleges and workforce boards already work as though everything connects, because in their daily experience it does, and the models they are handed do not. This formalizes what they see, and sets out the three pillars that the two papers after it go on to measure and to price.',
      tech: 'The ecosystem is specified as a modular structure so that components can be introduced individually without respecifying the whole, which is what makes the framework testable at the level of data that regional statistics actually reach. RePEc listing in process.',
      links: [['Slides', '/assets/papers/three-pillars-slides.pdf']]
    },

    p2: {
      x: 366, y: 214, k: 'wp', l: ['EU regional', 'ladder'], lx: 17, ly: 2, a: 'start',
      title: 'Regional economic development as ecosystem: empirical evidence from EU regions',
      meta: 'Working paper, second dissertation paper',
      short: 'Measures where European regions actually stand, finding that they sort into a four-tier ladder along the three pillars, and that the pandemic shock moved regions down that ladder four times as often as it moved them up.',
      plain: 'If regions really are ecosystems then they should sort into coherent types rather than spreading out along a single axis of income, and on Eurostat regional data they do, into four tiers, with most of the structure sitting between countries rather than within them. The pandemic then hit those tiers asymmetrically, and struggling regions held their position 92 percent of the time while high-performing regions held theirs only 57 percent.',
      tech: 'Clustering over the three pillars on the Eurostat regional panel, with tier stability and transition probabilities estimated across the pandemic window, and the between-country share of variance reported alongside the within-country share so the reader can see where the structure sits. RePEc listing in process.',
      links: []
    },

    p3: {
      x: 254, y: 296, k: 'wip', l: ['Pricing the', 'ladder'], lx: 0, ly: 28, a: 'middle',
      title: 'Pricing Europe’s regional ladder in wellbeing terms',
      meta: 'In development, third dissertation paper',
      short: 'Asks what life on each rung of the regional ladder is worth to a household, and how much of the gap between rungs is money rather than the social fabric that the income accounts do not capture.',
      plain: 'The second paper measured the ladder and this one prices it. Households in the model save against income risk and draw wellbeing both from consumption and from the social fabric around them, living under their own tier’s conditions inside their own country’s tax and transfer system, so that comparing tiers gives a welfare gap that can be split into income, income risk, and the social component. The same numbers price the slide, meaning the expected wellbeing cost of the pandemic-era transitions the second paper observed, and show how far national transfers already compress the ladder.',
      tech: 'A calibrated heterogeneous-agent model with the wellbeing arguments carried over from the SAGE thesis, where the calibration targets are built directly from the second paper’s regional panel. Welfare differences are reported in consumption-equivalent and in wellbeing units. The model values measured positions and does not claim to explain them.',
      links: []
    },

    ned: {
      x: 142, y: 212, k: 'tool', l: ['NED regional', 'dashboard'], lx: -17, ly: 2, a: 'end',
      title: 'NED dashboard: California regional analysis',
      meta: 'Live tool',
      short: 'An interactive assessment of economic development across California’s regions, built on indicators that start from what mayors, community colleges, workforce boards and employers see on the ground and turn it into something measurable.',
      plain: 'This is the three-pillar framework running on a real place. Rather than beginning from the indicators that happen to be collected, it begins from what regional actors say determines whether a household can get on and stay on, and then asks which of those things can be measured well enough to compare regions against each other.',
      tech: 'An interdisciplinary assessment tool covering California’s regions along dimensions chosen to represent households’ enablers for equitable and durable development, rather than the standard growth and employment aggregates.',
      links: [['Launch the dashboard', 'https://ned-dashboard.onrender.com']]
    },

    /* ---------------- labor markets ---------------- */

    panel: {
      x: 452, y: 302, k: 'wip', l: ['Panels to', 'regional stocks'], lx: 0, ly: -22, a: 'middle',
      title: 'From employer panels to regional stocks',
      meta: 'In development',
      short: 'Takes an employer’s panel together with public benchmarks and reconstructs workforce stocks for the regions where official statistics go thin.',
      plain: 'Official statistics get less reliable the smaller the geography, which is exactly the geography that regional policy operates on, while private employer panels carry a great deal of information about those same places and no way to know how representative they are. Putting the two together, with the public benchmarks anchoring the panel rather than the other way around, is what makes the ecosystem framing measurable where it needs to be.',
      tech: 'Small-area estimation against public benchmarks, with the employer panel entering as an auxiliary series whose selection is modelled rather than assumed away.',
      links: [['Working paper', '/working-papers/panel-synthesis/']]
    },

    facility: {
      x: 438, y: 398, k: 'wip', l: ['Facility hiring', 'profiles'], lx: -15, ly: 2, a: 'end',
      title: 'Workforce demand from a press release',
      meta: 'In development',
      short: 'Turns an announced job count into a quarterly occupational hiring profile, so a region can tell what a new facility actually means for it.',
      plain: 'A new plant is announced with a headline headcount and a ribbon cutting, and the region has to work out how many workers in which occupations on what schedule, which the announcement does not say and which staffing statistics answer only for the mix that facilities had yesterday. The profile has to be built rather than looked up.',
      tech: 'Occupational staffing patterns conditioned on facility type and vintage, phased across a construction and ramp schedule, so the output is a quarterly hiring profile by occupation rather than a single headline number.',
      links: [['Working paper', '/working-papers/facility-demand/']]
    },

    coding: {
      x: 606, y: 128, k: 'wp', l: ['Occupational', 'coding'], lx: 0, ly: -24, a: 'middle',
      title: 'Occupational coding at the 8-digit frontier',
      meta: 'Working paper',
      short: 'Finds where title retrieval stops working and classification has to take over, which is the measurement result that everything else in the labor strand rests on.',
      plain: 'Employers name the same job a hundred ways, and nothing downstream works until those titles collapse onto one taxonomy, so there is no benchmark, no forecast, and no comparison across employers until the collapsing is solved. Retrieval against a title list gets you most of the way and then stops, and this establishes where it stops and what has to replace it.',
      tech: 'Retrieval and classification approaches compared against the official 8-digit taxonomy, with the ceiling on retrieval characterized rather than asserted, and the classification layer evaluated on the residual where retrieval fails.',
      links: [['Working paper', '/working-papers/occupation-coding/']]
    },

    taxonomy: {
      x: 708, y: 176, k: 'wp', l: ['Role', 'taxonomy'], lx: 17, ly: -8, a: 'start',
      title: 'A role taxonomy anchored to the federal codes',
      meta: 'Working paper',
      short: '3,939 roles nested inside the federal occupation codes and checked against the official 8-digit taxonomy.',
      plain: 'The federal codes are too coarse for what employers actually hire for and raw job titles are too fine to compare across employers, so neither one can carry the analysis on its own. A role layer nested inside the codes sits between them, which lets an employer’s own vocabulary be joined to public statistics without either side being distorted to fit the other.',
      tech: 'Roles are constructed as a strict refinement of the federal codes, so every role maps up to exactly one code and aggregation to published statistics remains exact, and the layer is validated against the official 8-digit taxonomy where the two overlap.',
      links: [['Working paper', '/working-papers/role-taxonomy/']]
    },

    skillsdna: {
      x: 792, y: 252, k: 'wp', l: ['Skills DNA', 'of the economy'], lx: 0, ly: 30, a: 'middle',
      title: 'Skills DNA of the economy',
      meta: 'Working paper, at draft',
      short: 'Roles, tasks and skills are three equivalent decompositions of the same output, so pricing every task and every skill turns AI exposure into a question of dollars, meaning which steps an application can do, which abilities lose their market, and who is affected.',
      plain: 'Push occupational pay down through the tasks each role performs and the skills each task demands, and because nothing is created or destroyed on the way down, the same national total appears four times over, as industry output, as occupational pay, as the value of tasks, and as the value of skills. AI then enters as an appliance that can perform some of the priced steps, which turns exposure from an index into a measurable flow of money.',
      tech: 'In levels the identity is theory-free arithmetic. The task shares, the skill shares and the automatable shares are read straight from the data, and the CES curvature and the augmentation term enter only when the model is asked for counterfactuals.',
      math: ['Y = A · R^α K^β', 'R = ( Σₖ γₖ sₖ^ρ )^(1/ρ)'],
      links: [['Working paper', '/working-papers/skills-dna/'], ['The production system', '/portfolio/skills-framework/']]
    },

    exposure: {
      x: 888, y: 190, k: 'wp', l: ['AI exposure', 'measures'], lx: 0, ly: -24, a: 'middle',
      title: 'Does the choice of AI-exposure measure matter?',
      meta: 'Working paper',
      short: 'Six measures held constant except for the measure itself, which agree at the extremes and disagree in the middle, and the middle is where every interesting policy question sits.',
      plain: 'The main measures of AI exposure disagree with each other, and claims about what AI is doing to jobs have run well ahead of anyone’s ability to measure it, so a finding can rest on the instrument rather than on the world without anyone noticing. Holding everything else fixed and varying only the measure shows how much of a published result is which.',
      tech: 'Six exposure measures applied to a common occupational base, compared on dollar-weighted agreement rather than on rank correlation, since rank agreement at the tails hides the disagreement that matters. What would change my mind is dollar-weighted agreement rising sharply across new releases of the major measures.',
      links: [['Working paper', '/working-papers/exposure-measures/']]
    },

    moves: {
      x: 864, y: 344, k: 'wip', l: ['Do skills', 'predict moves'], lx: 17, ly: 2, a: 'start',
      title: 'Do skills predict moves?',
      meta: 'In development',
      short: 'Skill-similarity scores are used as though they were evidence that workers move, when what they are is a hypothesis about feasibility, and this tests whether workers actually move in proportion to similarity once size, wages and geography are held constant.',
      plain: 'Reskilling recommendations and transition maps are built on similarity scores that were never validated against anyone actually moving, and if the scores are wrong then the advice built on them sends people toward jobs they will not get. Checking is cheap and nobody seems to have done it at scale.',
      tech: 'A gravity model of occupational flows, from which the elasticity of moves to skill similarity is read off directly, followed by a check on whether the tier thresholds the field uses line up with where observed flows actually break. What would change my mind is flows breaking somewhere other than the similarity tiers, which is half the reason for asking.',
      math: ['ln flowᵢ→ⱼ = η ln simᵢⱼ + β₁ ln(wⱼ/wᵢ) + β₂ ln Eᵢ + β₃ ln Eⱼ + γ licensedⱼ + εᵢⱼ'],
      links: [['Working paper', '/working-papers/skills-and-moves/']]
    },

    migration: {
      x: 744, y: 400, k: 'wp', l: ['Occupational', 'migration'], lx: 0, ly: 30, a: 'middle',
      title: 'Where occupations move',
      meta: 'Working paper',
      short: 'We know a great deal about the interstate migration of people and very little about migration by occupation, yet occupation is where migration policy actually bites, through nurse licensure compacts, engineer reciprocity, and remote-work eligibility.',
      plain: 'This maps bilateral state-to-state migration across 501 occupations, 51 jurisdictions and nineteen vintages of census microdata, which gives an atlas of which occupations move and where they go, together with the wage elasticities of who moves for money. It is the wide complement to the workforce flow engine, which goes deep on a single state.',
      tech: 'A Poisson pseudo-maximum-likelihood gravity specification on bilateral occupational flows, with origin and destination fixed effects absorbing the level differences so that the wage and distance terms are identified off the bilateral variation.',
      math: ['E[ flowₒ→d^k ] = exp( ηₖ ln(w_d/wₒ) + β ln distₒd + φₒ + ψ_d )'],
      links: [['Working paper', '/working-papers/occupation-migration/']]
    },

    flows: {
      x: 622, y: 344, k: 'wp', l: ['Workforce', 'flow engine'], lx: -17, ly: 2, a: 'end',
      title: 'Workforce flow engine',
      meta: 'Working paper',
      short: 'Every occupation in every state has a metabolism, meaning who enters, who exits, who moves, and a background rate of churn underneath all three, and standard forecasts give the totals while this measures the rates that produce them.',
      plain: 'Standard forecasts answer how many, which is the question a state can do least with, because a shortfall caused by people leaving needs a different response from a shortfall caused by nobody arriving. Decomposing the stock into entry, exit, migration and residual churn, at state by occupation by age band by year, lets a state tell a retention problem from a pipeline problem before it spends anything.',
      tech: 'A cohort-component identity on ACS repeated cross-sections. Migration is observed directly, entry and exit are estimated from age-band dynamics and validated against external records, and the churn residual is retained as a behavioral parameter rather than discarded as error.',
      math: ['Stockₜ₊₁ = Stockₜ + Entrants + In-migrants − Exits − Out-migrants + Residual churn'],
      links: [['Working paper', '/working-papers/flows-engine/']]
    },

    shortage: {
      x: 604, y: 470, k: 'wp', l: ['Shortage', 'arithmetic'], lx: -17, ly: 2, a: 'end',
      title: 'Shortage arithmetic',
      meta: 'Working paper',
      short: 'Substitution across neighbouring occupations deflates headline shortage gaps by 15 to 20 percent, which is the difference between a number that can be planned against and a number that cannot.',
      plain: 'Headline shortage figures are computed as though every unfilled role has to be filled by somebody already trained for exactly that role, when in practice a good deal of the gap is absorbed by workers moving in from nearby occupations. Grading in the substitution margin, and then grading licensing back in on top of it, produces a number a workforce board can actually act on.',
      tech: 'The gap is recomputed with a substitution matrix over near occupations, weighted by observed transition rates, and then re-restricted by licensing barriers at the destination. What would change my mind is worked cases where the substitution margin absorbs nothing once licensing is graded in.',
      links: [['Working paper', '/working-papers/shortage-arithmetic/']]
    },

    vacancy: {
      x: 726, y: 522, k: 'wip', l: ['Vacancy', 'measurement'], lx: 0, ly: 28, a: 'middle',
      title: 'What does a vacancy measure?',
      meta: 'In development',
      short: 'One word covers three different objects, a stock of open roles, a flow of new postings, and an intention to hire, and separating them turns a headline series into something you can reason about.',
      plain: 'A vacancy count is read as though it were a single quantity, when the series that produce it are measuring different things on different clocks, so two sources can both be right and still disagree. The gap between the three is itself a signal about what employers are doing, and it is thrown away every time they are collapsed into one number.',
      tech: 'The three objects are reconciled onto a common grain and the residuals between them are retained as a diagnostic series. What would change my mind is the three moving together tightly enough that the distinction stops mattering.',
      links: [['Working paper', '/working-papers/vacancy-measurement/']]
    },

    beige: {
      x: 852, y: 470, k: 'wip', l: ['Beige Book', 'signals'], lx: 17, ly: 2, a: 'start',
      title: 'Reading the Beige Book with LLMs',
      meta: 'In development',
      short: 'Forty years of Federal Reserve prose carries labor signals that no hard series records, and extracting them onto the same grain as the statistics makes them testable against the series they should lead.',
      plain: 'The Beige Book is district-level qualitative reporting going back four decades, gathered precisely because the hard statistics arrive too late, and it has largely been read rather than measured. Structured extraction puts it on the same district-by-quarter grain as the official series, at which point it can be checked rather than merely quoted.',
      tech: 'Structured extraction of labor-market sentiment by district and quarter across the full archive, evaluated on whether it adds anything over the hard series it should lead. What would change my mind is it adding nothing.',
      links: [['Working paper', '/working-papers/beige-book/']]
    }
  };

  var E = [
    ['sage', 'sagetool'], ['sage', 'p3'], ['atlas', 'fiscal'], ['atlas', 'p3'],
    ['p1', 'p2'], ['p2', 'p3'], ['p1', 'ned'], ['p2', 'panel'],
    ['coding', 'taxonomy'], ['taxonomy', 'skillsdna'], ['skillsdna', 'exposure'],
    ['skillsdna', 'moves'], ['moves', 'migration'], ['flows', 'migration'],
    ['flows', 'shortage'], ['flows', 'panel'], ['vacancy', 'shortage'],
    ['beige', 'vacancy'], ['facility', 'shortage'], ['facility', 'ned'],
    ['skillsdna', 'flows']
  ];

  var CLUSTERS = [
    { l: 'Macroeconomics', x: 86, y: 336 },
    { l: 'Regional development', x: 142, y: 88 },
    { l: 'Labor markets', x: 606, y: 70 }
  ];

  var R = { pub: 11, wp: 9, tool: 8.5, wip: 5 };
  var SVGNS = 'http://www.w3.org/2000/svg';

  function el(n, attrs) {
    var e = document.createElementNS(SVGNS, n);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  var graph = document.getElementById('rgraph');
  if (!graph) return;

  var base = graph.getAttribute('data-base') || '';
  var gEdges = document.getElementById('rg-edges');
  var gNodes = document.getElementById('rg-nodes');
  var gClusters = document.getElementById('rg-clusters');
  var note = document.getElementById('rg-note');
  var detail = document.getElementById('rg-detail');
  var defaultNote = note ? note.innerHTML : '';
  var edgeEls = [], nodeEls = {}, adj = {};
  var selected = null;

  function url(h) {
    return (h && h.charAt(0) === '/') ? base.replace(/\/$/, '') + h : h;
  }

  Object.keys(N).forEach(function (id) { adj[id] = []; });
  E.forEach(function (p) { adj[p[0]].push(p[1]); adj[p[1]].push(p[0]); });

  CLUSTERS.forEach(function (c) {
    var t = el('text', { x: c.x, y: c.y, class: 'rg-cluster' });
    t.textContent = c.l;
    gClusters.appendChild(t);
  });

  E.forEach(function (p) {
    var a = N[p[0]], b = N[p[1]];
    var wip = a.k === 'wip' || b.k === 'wip';
    var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    var dx = b.x - a.x, dy = b.y - a.y;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var bow = Math.min(len * 0.09, 22);
    var cx = mx - (dy / len) * bow, cy = my + (dx / len) * bow;
    var path = el('path', {
      d: 'M' + a.x + ',' + a.y + ' Q' + cx.toFixed(1) + ',' + cy.toFixed(1) + ' ' + b.x + ',' + b.y,
      class: 'rg-edge' + (wip ? ' rg-edge--wip' : ''),
      'stroke-width': wip ? 0.9 : 1.5
    });
    gEdges.appendChild(path);
    edgeEls.push({ el: path, a: p[0], b: p[1] });
  });

  Object.keys(N).forEach(function (id) {
    var n = N[id];
    var g = el('g', { class: 'rg-node', tabindex: '0', role: 'button', 'aria-label': n.title });
    g.appendChild(el('circle', { cx: n.x, cy: n.y, r: R[n.k] + 12, class: 'rg-sel' }));

    if (n.k === 'tool') {
      var s = R.tool;
      g.appendChild(el('rect', {
        x: n.x - s, y: n.y - s, width: s * 2, height: s * 2,
        transform: 'rotate(45 ' + n.x + ' ' + n.y + ')',
        class: 'rg-dot rg-dot--tool'
      }));
    } else {
      if (n.k === 'pub') {
        g.appendChild(el('circle', { cx: n.x, cy: n.y, r: R.pub + 6, class: 'rg-halo' }));
      }
      g.appendChild(el('circle', {
        cx: n.x, cy: n.y, r: R[n.k],
        class: 'rg-dot' + (n.k === 'wip' ? ' rg-dot--wip' : '')
      }));
    }

    var t = el('text', {
      x: n.x + (n.lx || 0), y: n.y + (n.ly || 0),
      'text-anchor': n.a || 'middle',
      class: 'rg-label' + (n.k === 'wip' ? ' rg-label--wip' : '')
    });
    n.l.forEach(function (line, i) {
      var ts = el('tspan', { x: n.x + (n.lx || 0), dy: i === 0 ? 0 : 13 });
      ts.textContent = line;
      t.appendChild(ts);
    });
    g.appendChild(t);
    g.appendChild(el('circle', { cx: n.x, cy: n.y, r: Math.max(R[n.k] + 10, 17), class: 'rg-hit' }));

    g.addEventListener('mouseenter', function () { light(id); });
    g.addEventListener('mouseleave', function () { unlight(); });
    g.addEventListener('focus', function () { light(id); });
    g.addEventListener('blur', function () { unlight(); });
    g.addEventListener('click', function () { open(id); });
    g.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); open(id); }
    });

    gNodes.appendChild(g);
    nodeEls[id] = g;
  });

  function light(id) {
    graph.classList.add('is-dimmed');
    var lit = {};
    lit[id] = 1;
    adj[id].forEach(function (n) { lit[n] = 1; });
    Object.keys(nodeEls).forEach(function (k) {
      nodeEls[k].classList.toggle('is-lit', !!lit[k]);
    });
    edgeEls.forEach(function (e) {
      e.el.classList.toggle('is-lit', e.a === id || e.b === id);
    });
    if (!note) return;
    var n = N[id];
    var deps = adj[id].map(function (k) { return N[k].l.join(' '); }).join(', ');
    note.innerHTML = '<strong>' + esc(n.title) + '</strong><br>' + esc(n.meta) +
      (deps ? '. Feeds or draws on ' + esc(deps) + '.' : '.');
  }

  function unlight() {
    if (selected) return;
    graph.classList.remove('is-dimmed');
    Object.keys(nodeEls).forEach(function (k) { nodeEls[k].classList.remove('is-lit'); });
    edgeEls.forEach(function (e) { e.el.classList.remove('is-lit'); });
    if (note) note.innerHTML = defaultNote;
  }

  function open(id) {
    selected = id;
    var n = N[id];
    graph.classList.add('is-focused');
    Object.keys(nodeEls).forEach(function (k) {
      nodeEls[k].classList.toggle('is-selected', k === id);
    });
    light(id);

    var nbrs = adj[id].map(function (k) {
      return '<a href="#" data-goto="' + k + '">' + esc(N[k].l.join(' ')) + '</a>';
    }).join(' &nbsp;&middot;&nbsp; ');

    var links = n.links.map(function (l) {
      var ext = l[1].indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '';
      return '<a href="' + url(l[1]) + '"' + ext + '>' + esc(l[0]) + '</a>';
    }).join('');

    var math = n.math ? '<div class="rg-math">' + n.math.map(function (m) {
      return '<div>' + esc(m) + '</div>';
    }).join('') + '</div>' : '';

    detail.innerHTML =
      '<div class="rg-d__top">' +
        '<div>' +
          '<div class="rg-d__title">' + esc(n.title) + '</div>' +
          '<div class="rg-d__meta">' + esc(n.meta) + '</div>' +
        '</div>' +
        '<button class="rg-d__close" type="button" data-close>Close</button>' +
      '</div>' +
      '<p class="rg-d__short">' + esc(n.short) + '</p>' +
      '<details class="rg-more">' +
        '<summary>More info</summary>' +
        '<div class="rg-more__body">' +
          '<div class="rg-tabs" role="tablist">' +
            '<button type="button" class="rg-tab is-on" data-tab="plain" role="tab">Plain language</button>' +
            '<button type="button" class="rg-tab" data-tab="tech" role="tab">Technical</button>' +
          '</div>' +
          '<p class="rg-abs" data-pane="plain">' + esc(n.plain) + '</p>' +
          '<div class="rg-abs is-hidden" data-pane="tech"><p>' + esc(n.tech) + '</p>' + math + '</div>' +
          (links ? '<div class="rg-d__links">' + links + '</div>' : '') +
        '</div>' +
      '</details>' +
      (nbrs ? '<div class="rg-d__nbrs">Connected to ' + nbrs + '</div>' : '');

    detail.hidden = false;
    detail.classList.add('is-open');

    detail.querySelector('[data-close]').addEventListener('click', close);
    detail.querySelectorAll('[data-goto]').forEach(function (a) {
      a.addEventListener('click', function (ev) {
        ev.preventDefault();
        open(a.getAttribute('data-goto'));
      });
    });
    var tabs = detail.querySelectorAll('.rg-tab');
    tabs.forEach(function (b) {
      b.addEventListener('click', function () {
        var want = b.getAttribute('data-tab');
        tabs.forEach(function (o) { o.classList.toggle('is-on', o === b); });
        detail.querySelectorAll('[data-pane]').forEach(function (p) {
          p.classList.toggle('is-hidden', p.getAttribute('data-pane') !== want);
        });
      });
    });
  }

  function close() {
    selected = null;
    graph.classList.remove('is-focused');
    Object.keys(nodeEls).forEach(function (k) { nodeEls[k].classList.remove('is-selected'); });
    detail.classList.remove('is-open');
    detail.hidden = true;
    unlight();
  }

  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && selected) close();
  });

  /* ---------- narrow screens get the same content as a list ---------- */
  var GROUPS = [
    ['Labor markets', ['skillsdna', 'flows', 'migration', 'shortage', 'exposure', 'taxonomy', 'coding', 'moves', 'vacancy', 'beige', 'panel', 'facility']],
    ['Regional development', ['p1', 'p2', 'p3', 'ned']],
    ['Macroeconomics', ['sage', 'sagetool', 'atlas', 'fiscal']]
  ];
  var GLYPH = { pub: '◉', wp: '●', tool: '◇', wip: '○' };
  var flist = document.getElementById('rg-list');
  if (flist) {
    GROUPS.forEach(function (grp) {
      var d = document.createElement('div');
      d.className = 'rg-lgrp';
      var h = document.createElement('div');
      h.className = 'rg-lgrp__h';
      h.textContent = grp[0];
      d.appendChild(h);
      grp[1].forEach(function (id) {
        var n = N[id];
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'rg-lrow' + (n.k === 'wip' ? ' is-wip' : '');
        b.innerHTML = '<span class="glyph">' + GLYPH[n.k] + '</span><span class="t">' + esc(n.title) + '</span>';
        b.addEventListener('click', function () { open(id); });
        d.appendChild(b);
      });
      flist.appendChild(d);
    });
  }
})();
