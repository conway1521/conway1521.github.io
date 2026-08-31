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
      plain: 'A standard macroeconomic model gives a household a choice between consuming and resting, and that is very nearly the whole of what it is allowed to want, which is why those models keep being surprised by what people do in a crisis. This one lets a household manage its means and its needs inside an economic system, embedded in a web of social relationships and rooted in a physical place, so that the things people actually draw on when things go wrong are inside the model rather than outside it. That changes both how a household responds when a shock arrives and what it would mean for that shock to have been absorbed, because a recovery that restores income while leaving the social fabric damaged is no longer scored as a full recovery.',
      abs: 'Standard macroeconomic models represent household welfare over consumption and leisure, which restricts the channels through which a shock can transmit and understates the persistence of its effects. This paper extends an incomplete-markets model of the Bewley type so that period utility carries arguments for social capital and place-based conditions directly, rather than admitting them through the budget constraint. Households save against idiosyncratic income risk while drawing wellbeing from consumption and from the social environment around them. The household problem is written so that the social terms can be switched off to recover the standard case exactly, which makes the contribution of each channel separable and measurable. The model is solved numerically and calibrated, and the resulting consumption and welfare responses to an income shock differ from the standard case in both magnitude and persistence. The implementation is released as a runnable notebook.',
      links: [['PDF', '/assets/papers/wellbeing-macroeconomics.pdf'], ['Oxford series', 'https://www.bsg.ox.ac.uk/research/publications/wellbeing-and-macroeconomics-sage-approach'], ['QuantEcon notebook', 'https://conway1521.github.io/sage-bewley/']]
    },

    sagetool: {
      x: 88, y: 552, k: 'tool', l: ['SAGE model', 'explorer'], lx: -17, ly: 2, a: 'end',
      title: 'Wellbeing and macroeconomics explorer',
      meta: 'Live tool, published in QuantEcon',
      short: 'Turns the SAGE model into something you can move the parameters on, so you can watch how the social psychology terms change what happens to a household during a shock.',
      plain: 'The paper argues that a household’s social fabric belongs inside the model rather than outside it, and the explorer is where anyone can check whether that argument does any work, by turning the social terms up and down and seeing which results move and which stay where they were. The parameters it exposes are the ones the paper argues over, so the argument can be checked rather than taken on trust.',
      abs: 'An interactive implementation of the SAGE household problem, exposing the preference weights on consumption, income risk, and the social terms as adjustable parameters and solving the model on each change. The tool is distributed through QuantEcon, the open source project for quantitative economics, computational lectures and tools in Python and Julia founded by Thomas Sargent and John Stachurski and used widely in teaching and research, which puts the model in front of an audience that can test it rather than only read about it.',
      links: [['Launch the explorer', 'https://conway1521.github.io/sage-bewley/'], ['The paper', '/assets/papers/wellbeing-macroeconomics.pdf']]
    },

    atlas: {
      x: 262, y: 508, k: 'tool', l: ['Open Inequality', 'Atlas'], lx: 17, ly: 2, a: 'start',
      title: 'Open Inequality Atlas',
      meta: 'Live tool, open data, 10,783 observations across 213 countries',
      short: 'A single versioned openly licensed panel of household net-wealth inequality, built because assembling a comparable one is a research project in itself and nobody had published the result.',
      plain: 'Wealth inequality data is scattered across mutually incompatible sources, the World Inequality Database, the ECB’s HFCS, the Luxembourg Wealth Study, the US Survey of Consumer Finances, and the Federal Reserve’s Distributional Financial Accounts, and each of them uses a different unit, a different methodology, and a different license, so anyone wanting a cross-country panel has to rebuild it from scratch before they can begin their actual work. I built it because I needed it, and it is released under an open license.',
      abs: 'A reconciled cross-country panel of household net-wealth inequality covering 10,783 observations across 213 countries from 1800 to 2025, assembled from sources that differ in unit of observation, imputation methodology, coverage and license. Reconciliation is explicit rather than silent: every row carries a source-priority tag and a comparability tier, so a user can restrict the panel to the level of cross-source comparability their question requires instead of inheriting the compiler’s judgement. The panel is versioned, so results built on it remain reproducible against the vintage they were built on, and it is released under an open license.',
      links: [['Launch the Atlas', 'https://conway1521.github.io/open-inequality-atlas/']]
    },

    fiscal: {
      x: 128, y: 392, k: 'wip', l: ['Fiscal policy and', 'consumption'], lx: -15, ly: 2, a: 'end',
      title: 'Fiscal policy’s distributional impact on consumption',
      meta: 'In development, with Paul Hubert and Fergus Cumming',
      short: 'Identifies the channels through which fiscal policy reaches consumption across households of varying credit constraints, building on Hubert and Cumming (2021) to connect asset liquidity with a fiscal policy dataset.',
      plain: 'An average multiplier tells you what a fiscal shock did to the country and almost nothing about who it reached, and the households whose consumption responds most are exactly the ones that a specification estimated on the aggregate averages away. Whether a pound of stimulus is spent or saved depends on whether the household receiving it can borrow, and on whether its assets can be turned into cash this month, so the same policy reaches some households and barely reaches others, and an aggregate multiplier hides which.',
      abs: 'Fiscal multipliers estimated on aggregate data mask substantial heterogeneity in the household response. This paper pairs a narrative identification of fiscal shocks, built from a two-decade series of UK legislative measures, with household-level heterogeneity in credit constraints and asset liquidity, extending Hubert and Cumming (2021). The consumption response is estimated conditionally on liquidity position rather than in aggregate, which identifies the margin along which fiscal transmission actually operates and gives a basis for targeting. Joint work with Paul Hubert of the Banque de France and OFCE and Fergus Cumming of the Bank of England.',
      links: []
    },

    /* ---------------- regional development ---------------- */

    p1: {
      x: 252, y: 148, k: 'wp', l: ['Ecosystem', 'framework'], lx: 0, ly: -24, a: 'middle',
      title: 'A modular framework for inclusive economic development',
      meta: 'Working paper, first dissertation paper, RePEc listing in process',
      short: 'Builds the conceptual framework, in which regional economies are ecosystems resting on three pillars, place-based conditions, human and social capital, and economic activity, arranged so that complexity can be added one component at a time.',
      plain: 'Practitioners in community organizations, community colleges and workforce boards already work as though everything connects, because in their daily experience it plainly does, and the models they are handed to justify their spending do not. That gap is not a communication problem, it is a modelling problem, and it is why interventions that look well designed on paper keep underperforming in places where the supporting conditions are absent. This paper formalizes what those practitioners see, and sets out the three pillars that the two papers after it go on to measure and then to price.',
      abs: 'Regional development policy is typically evaluated intervention by intervention, which assumes a separability between labor markets, housing, transport, education, employer demand and social networks that the evidence does not support. This paper specifies regional economies as ecosystems resting on three pillars, place-based conditions, human and social capital, and economic activity, and formalizes them as a modular structure in which components can be introduced individually without respecifying the whole. Modularity is what makes the framework testable at the level of aggregation regional statistics actually reach, and it fixes the measurement targets used in the second paper and the calibration targets used in the third.',
      links: [['Slides', '/assets/papers/three-pillars-slides.pdf']]
    },

    p2: {
      x: 366, y: 214, k: 'wp', l: ['EU regional', 'ladder'], lx: 17, ly: 2, a: 'start',
      title: 'Regional economic development as ecosystem: empirical evidence from EU regions',
      meta: 'Working paper, second dissertation paper, RePEc listing in process',
      short: 'Measures where European regions actually stand, finding that they sort into a four-tier ladder along the three pillars, and that the pandemic shock moved regions down that ladder four times as often as it moved them up.',
      plain: 'If regions really are ecosystems then they should sort into coherent types rather than spreading out smoothly along a single axis of income, and this tests that directly on European regional data. They do sort, into four tiers, and most of the structure sits between countries rather than within them, which already says something about where policy leverage lies. The pandemic then hit those tiers asymmetrically in a way that is hard to read as anything other than fragility, because struggling regions held their position most of the time while the strongest regions were the ones that moved.',
      abs: 'This paper tests whether European regions sort into coherent development types once economic, social and place-based conditions are treated as one interacting system rather than as separate indicators. Clustering over the three pillars on the Eurostat regional panel recovers a stable four-tier structure, with the majority of variance sitting between countries rather than within them. Transition probabilities estimated across the pandemic window show a strongly asymmetric shock: regions in the lowest tier retained their position 92 percent of the time while regions in the highest tier retained theirs only 57 percent, and downward transitions outnumbered upward transitions four to one. The tier assignments and transition matrix become the calibration targets for the third paper.',
      links: []
    },

    p3: {
      x: 254, y: 296, k: 'wip', l: ['Pricing the', 'ladder'], lx: 0, ly: 28, a: 'middle',
      title: 'Pricing Europe’s regional ladder in wellbeing terms',
      meta: 'In development, third dissertation paper',
      short: 'Asks what life on each rung of the regional ladder is worth to a household, and how much of the gap between rungs is money rather than the social fabric that the income accounts do not capture.',
      plain: 'The second paper measured the ladder and this one prices it, which is the step that turns a description into something a finance ministry can argue about. Households in the model save against income risk and draw wellbeing both from consumption and from the social fabric around them, living under their own tier’s conditions inside their own country’s tax and transfer system, so comparing tiers gives a gap that can be split into how much is income, how much is exposure to risk, and how much is everything the income accounts miss. The same numbers price the slide, meaning the expected cost of the pandemic-era transitions the second paper observed, and they show how much of the ladder national transfers already flatten.',
      abs: 'This paper attaches a welfare price to the regional tiers identified in the preceding paper. A calibrated heterogeneous-agent model, carrying the wellbeing arguments developed in the SAGE framework, places households under their tier’s measured conditions within their own country’s tax and transfer system, saving against idiosyncratic income risk and drawing utility from consumption and from social capital. Welfare differences across tiers are reported in consumption-equivalent and in wellbeing units and decomposed into income level, income risk, and the social component. Applying the transition matrix from the second paper prices the expected welfare cost of observed pandemic-era downward moves, and comparing pre-tax and post-transfer outcomes measures how far national fiscal systems already compress the ladder. The model values measured positions and does not claim to explain how regions arrived at them.',
      links: []
    },

    ned: {
      x: 142, y: 212, k: 'tool', l: ['NED regional', 'dashboard'], lx: -17, ly: 2, a: 'end',
      title: 'NED dashboard: California regional analysis',
      meta: 'Live tool',
      short: 'An interactive assessment of economic development across California’s regions, built on indicators that start from what mayors, community colleges, workforce boards and employers see on the ground and turn it into something measurable.',
      plain: 'This is the three-pillar framework running on a real place, which is the test that matters, because a framework that cannot be populated with data that actually exists is not much of a framework. Rather than beginning from the indicators that happen to be collected and calling whatever they measure development, it begins from what regional actors say determines whether a household can get on and stay on, and then asks which of those things can be measured well enough to compare one region against another.',
      abs: 'An interactive assessment tool covering California’s economic regions along dimensions selected to represent households’ enablers of equitable and durable development, rather than the standard growth and employment aggregates. Indicator selection proceeds from practitioner accounts, gathered from municipal government, community colleges, workforce boards and employers, and is then constrained to what is measurable at a consistent regional grain, which makes the gap between what practitioners identify as decisive and what the statistical system currently records an explicit output of the exercise.',
      links: [['Launch the dashboard', 'https://ned-dashboard.onrender.com']]
    },

    /* ---------------- labor markets ---------------- */

    panel: {
      x: 452, y: 302, k: 'wip', l: ['Panels to', 'regional stocks'], lx: 0, ly: -22, a: 'middle',
      title: 'From employer panels to regional stocks',
      meta: 'In development',
      short: 'Takes an employer’s panel together with public benchmarks and reconstructs workforce stocks for the regions where official statistics go thin.',
      plain: 'Official statistics get less reliable the smaller the geography, which is exactly the geography that regional policy operates on, while private employer panels carry a great deal of detail about those same places and no way of knowing how representative any of it is. Putting the two together, with the public benchmarks anchoring the panel rather than the panel being trusted on its own, is what makes the ecosystem framing measurable at the level where somebody actually has to make a decision.',
      abs: 'Official statistics report occupational employment counts by region but not the microstructure a workforce planner needs, meaning the tenure distribution, the age curve, the level mix, and the distinction between transfer risk and retirement risk. Employer HR data carries exactly that structure for a non-random subset of the market. This paper treats the reconstruction as a small-area estimation problem with an explicit synthesis step: the panel is standardized onto public vocabularies, its departure from the public margins is measured directly and reported as a result in its own right, reweighting is applied where the margins permit it, and synthetic worker records are drawn for uncovered segments from panel-estimated conditional distributions calibrated to public totals. Validation proceeds by holding out segments the panel does cover and testing whether the synthesis reconstructs them. Every synthetic record carries provenance flags and anonymity floors are built in, so every published object is aggregate or synthetic and never a real worker.',
      links: [['Working paper', '/working-papers/panel-synthesis/']]
    },

    facility: {
      x: 438, y: 398, k: 'wip', l: ['Facility hiring', 'profiles'], lx: -15, ly: 2, a: 'end',
      title: 'Workforce demand from a press release',
      meta: 'In development',
      short: 'Turns an announced job count into a quarterly occupational hiring profile, so a region can tell what a new facility actually means for it.',
      plain: 'A new plant is announced with a headline headcount and a ribbon cutting, and the region then has to work out how many workers in which occupations arriving on what schedule, which the announcement does not say and which staffing statistics answer only for the mix that facilities of that type had yesterday. For a leading-edge facility that mix is wrong in ways that matter, so the profile has to be built rather than looked up, and it has to be built before the facility exists, which is the only moment at which anyone can still prepare.',
      abs: 'When a fab, a battery plant or a hospital expansion is announced, workforce boards need the occupational mix and the quarter-by-quarter ramp that the announced headcount implies, and no source publishes either. The estimator has three parts: a staffing template giving the occupational mix for a facility class, assembled from industry staffing matrices and sector workforce data; a ramp curve spreading employment across construction, tool installation and production on a characteristic schedule; and the product of the two against announced scale, which turns a dated announcement into a specific quarterly profile by occupation. Validation is out of sample against ten to fifteen completed buildouts whose realized employment is recovered from public county-industry data, scored on total employment at maturity and on timing, with the naive announced-jobs figure as the baseline to beat. Scoring announcement inflation itself, claimed against realized, is a useful result independently of the estimator.',
      links: [['Working paper', '/working-papers/facility-demand/']]
    },

    coding: {
      x: 606, y: 128, k: 'wp', l: ['Occupational', 'coding'], lx: 0, ly: -24, a: 'middle',
      title: 'Occupational coding at the 8-digit frontier',
      meta: 'Working paper, public evaluation harness',
      short: 'Finds where title retrieval stops working and classification has to take over, which is the measurement result that everything else in the labor strand rests on.',
      plain: 'Employers name the same job a hundred ways, and nothing downstream works until those titles collapse onto one taxonomy, so there is no benchmark, no forecast and no comparison across employers until the collapsing is solved. Matching a title against a list of official titles gets you most of the way and then stops, and where it stops is not where people assume, so this establishes where the ceiling is and what has to replace the method once you are past it.',
      abs: 'Every labor dataset built from job titles must map unstructured strings onto an occupation code. At the 6-digit level this is close to solved. At the 8-digit level, where wage, task and mobility differences actually live, it is considerably harder, and the choice of method changes the resulting distribution. This paper benchmarks retrieval-based and classification-based approaches against the official 8-digit taxonomy, characterizing the ceiling on retrieval rather than asserting it, and evaluating classification on the residual where retrieval fails. The evaluation harness is public, which makes the comparison reproducible and the ceiling contestable.',
      links: [['Working paper', '/working-papers/occupation-coding/']]
    },

    taxonomy: {
      x: 708, y: 176, k: 'wp', l: ['Role', 'taxonomy'], lx: 17, ly: -8, a: 'start',
      title: 'A role taxonomy anchored to the federal codes',
      meta: 'Working paper, 3,939 roles, releasable as a public artifact',
      short: '3,939 roles nested inside the federal occupation codes and checked against the official 8-digit taxonomy.',
      plain: 'The official codes are too coarse for what employers actually hire for, since one nurse code covers an ICU night nurse and a school nurse, while raw job titles are too fine to compare across employers. Private taxonomies solve the granularity by floating free of the government codes, which buys detail at the cost of ever reconciling with public statistics again. A role layer nested strictly inside the codes is the middle both sides miss, and it lets an employer’s own vocabulary join to public data without either side being distorted to fit the other.',
      abs: 'This paper constructs a role taxonomy of 3,939 roles as a strict refinement of the federal occupation codes, so that every role maps up to exactly one code and aggregation to published statistics remains exact. The discipline is a single rule: a distinction counts as a role only when it stays inside an 8-digit boundary and is meaningful within it, while anything that is really a level, a shift, a staffing arrangement or a specialty modifier is stored as a facet rather than promoted to a new occupation. Titles are stripped of facets, embedded, and clustered recursively with an abstention margin. Validation uses ground truth nobody else uses, since the official 8-digit splits are themselves known-correct partitions against which the clustering can be scored directly. The economic test is how much within-code wage variation is explained once workers are split into roles, where even a modest gain settles the question. Because the inputs are public, the taxonomy and its resolver ship as a public artifact.',
      links: [['Working paper', '/working-papers/role-taxonomy/']]
    },

    skillsdna: {
      x: 792, y: 252, k: 'wp', l: ['Skills DNA', 'of the economy'], lx: 0, ly: 30, a: 'middle',
      title: 'Skills DNA of the economy',
      meta: 'Working paper, at draft, open-source engine and versioned data snapshot',
      short: 'Roles, tasks and skills are three equivalent decompositions of the same output, so pricing every task and every skill turns AI exposure into a question of dollars, meaning which steps an application can do, which abilities lose their market, and who is affected.',
      plain: 'An industry produces its output through roles, each role performs a set of tasks, and each task demands a set of skills. Government data already records how many workers hold each role and what they are paid, which tasks each role performs, and which abilities each task demands, so pushing the pay down through those links creates and destroys nothing and the same national total appears four times over, as industry output, as occupational pay, as the value of tasks, and as the value of skills. AI then enters as an appliance that can perform some of the priced steps, which turns exposure from an index number into a flow of money you can point at.',
      abs: 'Claims about AI exposure are made in index units that cannot be aggregated, compared across studies, or checked against any national account. This paper prices the task-based labor market directly. Occupational pay is decomposed through the tasks each role performs and the skills each task demands, under an accounting identity in which the same national total is recoverable as industry output, occupational pay, task value and skill value. In levels the identity is theory-free arithmetic: task shares, skill shares and automatable shares are read from the data rather than estimated. The CES curvature and the augmentation term enter only when the instrument is asked for counterfactuals, which keeps the descriptive result separable from the modelling assumptions. AI enters as an appliance capable of performing a subset of priced steps, so exposure is expressed as a measurable flow of dollars and can be attributed to specific abilities and specific workers. Released as an open-source engine against a versioned data snapshot.',
      math: ['Y = A · R^α K^β', 'R = ( Σₖ γₖ sₖ^ρ )^(1/ρ)'],
      links: [['Working paper', '/working-papers/skills-dna/'], ['The production system', '/portfolio/skills-framework/']]
    },

    exposure: {
      x: 888, y: 190, k: 'wp', l: ['AI exposure', 'measures'], lx: 0, ly: -24, a: 'middle',
      title: 'Does the choice of AI-exposure measure matter?',
      meta: 'Working paper, common task framework, fully public data',
      short: 'Six measures held constant except for the measure itself, which agree at the extremes and disagree in the middle, and the middle is where every interesting policy question sits.',
      plain: 'At least six serious measures score how exposed each occupation is to AI, and most studies pick one without ever justifying the choice. If those measures disagree with each other, then every claim about which jobs are at risk is partly an artifact of which measure the author happened to reach for, and no reader can tell how much. Holding everything else fixed and varying only the measure shows how much of a published finding is the world and how much is the instrument.',
      abs: 'At least six serious measures score occupational exposure to AI, and studies routinely select one without justification. If the measures disagree, conclusions about which occupations are at risk are partly artifacts of that selection. This paper holds population, occupational base and specification constant and varies only the measure, quantifying where the choice binds. Comparison is on dollar-weighted agreement rather than rank correlation, since rank agreement at the tails conceals disagreement in the middle of the distribution, which is where policy questions are actually posed. The measures converge at the extremes and diverge substantially in the interior.',
      links: [['Working paper', '/working-papers/exposure-measures/']]
    },

    moves: {
      x: 864, y: 344, k: 'wip', l: ['Do skills', 'predict moves'], lx: 17, ly: 2, a: 'start',
      title: 'Do skills predict moves?',
      meta: 'In development, gravity model on public microdata',
      short: 'Skill-similarity scores are used as though they were evidence that workers move, when what they are is a hypothesis about feasibility, and this tests whether workers actually move in proportion to similarity once size, wages and geography are held constant.',
      plain: 'A whole industry now advises workers and workforce boards using similarity scores, telling a machinist that industrial maintenance is 98.5 percent similar and therefore a few months of retraining away. But similarity is a claim that a move is feasible, which is a different thing from a claim that anyone makes it, and if the scores are wrong then the advice built on them sends people toward jobs they will not get and sends public money after them. Checking is cheap, the data is public, and nobody appears to have done it at scale.',
      abs: 'Skill-similarity scores derived from occupational skill, knowledge and activity profiles are widely used as though a high score were evidence of realized mobility, when the score is a hypothesis about feasibility. This paper estimates a gravity model of observed occupational flows on public microdata and reads off the elasticity of moves to skill similarity, holding occupation size, wage differentials and geography constant, with licensing at the destination entered directly. It then tests whether the similarity thresholds the field uses to define transition tiers correspond to where observed flows actually break.',
      math: ['ln flowᵢ→ⱼ = η ln simᵢⱼ + β₁ ln(wⱼ/wᵢ) + β₂ ln Eᵢ + β₃ ln Eⱼ + γ licensedⱼ + εᵢⱼ'],
      links: [['Working paper', '/working-papers/skills-and-moves/']]
    },

    migration: {
      x: 744, y: 400, k: 'wp', l: ['Occupational', 'migration'], lx: 0, ly: 30, a: 'middle',
      title: 'Where occupations move',
      meta: 'Working paper, 501 occupations, twenty years of census microdata',
      short: 'We know a great deal about the interstate migration of people and very little about migration by occupation, yet occupation is where migration policy actually bites, through nurse licensure compacts, engineer reciprocity, teacher pension portability and remote-work eligibility.',
      plain: 'Migration policy is written at the level of the occupation and studied at the level of the person, which means the instruments that policymakers actually control are the ones nobody has measured. This maps bilateral state-to-state migration across 501 occupations, 51 jurisdictions and nineteen vintages of census microdata, producing an atlas of which occupations move and where they go, together with the wage elasticities of who moves for money. It is the wide complement to the workforce flow engine, which goes deep on a single state instead.',
      abs: 'Interstate migration is well documented at the level of the individual and largely unmeasured at the level of the occupation, despite occupation being the unit on which migration policy operates, through licensure compacts, reciprocity agreements, pension portability and remote-work eligibility. This paper constructs bilateral state-to-state migration flows by occupation across 501 codes, 51 jurisdictions and nineteen vintages of census microdata, and estimates a Poisson pseudo-maximum-likelihood gravity specification in which origin and destination fixed effects absorb level differences so that wage and distance terms are identified off bilateral variation. The output is a descriptive atlas of occupational mobility together with a distribution of wage elasticities, and the licensing coefficient gives a direct estimate of how much occupational regulation dampens flows.',
      math: ['E[ flowₒ→d^k ] = exp( ηₖ ln(w_d/wₒ) + β ln distₒd + φₒ + ψ_d )'],
      links: [['Working paper', '/working-papers/occupation-migration/']]
    },

    flows: {
      x: 622, y: 344, k: 'wp', l: ['Workforce', 'flow engine'], lx: -17, ly: 2, a: 'end',
      title: 'Workforce flow engine',
      meta: 'Working paper, dissertation paper and queryable parameter database',
      short: 'Every occupation in every state has rates at which people enter it, leave it, and move between states, with a background rate of turnover underneath all three, and standard forecasts give the totals while this measures the rates that produce them.',
      plain: 'A state that knows its nurse stock will fall by twelve percent has a problem statement, and a state that knows the fall is driven by out-migration concentrated in the 35 to 44 age band while entry and retirement track national norms has an intervention design. Standard forecasts answer how many, which is the question a state can do least with, because a shortfall caused by people leaving needs a completely different response from one caused by nobody arriving. Decomposing the stock into entry, exit, migration and residual churn lets a state tell a retention problem from a pipeline problem before it spends anything.',
      abs: 'Occupational workforce stocks are decomposed into behavioral flow parameters, entry, exit, interstate migration and residual churn, at the grain of state by occupation by age band by year, with design-based uncertainty throughout. The identity is a cohort-component accounting relation adapted from formal demography and applied to ACS repeated cross-sections. Migration is observed directly from one-year-ago state of residence, entry is estimated from the young age bands and validated against graduation and licensure counts, and exit is estimated from the decline of upper age bands across vintages. Because the ACS is a repeated cross-section rather than a true panel, occupation switching and re-entry are not separately identified and both fold into the churn residual, which is retained as a behavioral parameter rather than discarded as error, measured with replicate-weight standard errors and netted for mortality. Across six occupations and nine vintages, 1.67 million records with all 80 replicate weights, occupational lifecycles separate cleanly and national exit schedules correlate up to 0.75 across the pandemic break, with state migration fingerprints persisting at about 0.6.',
      math: ['Stockₜ₊₁ = Stockₜ + Entrants + In-migrants − Exits − Out-migrants + Residual churn'],
      links: [['Working paper', '/working-papers/flows-engine/']]
    },

    shortage: {
      x: 604, y: 470, k: 'wp', l: ['Shortage', 'arithmetic'], lx: -17, ly: 2, a: 'end',
      title: 'Shortage arithmetic',
      meta: 'Working paper, a correction any workforce board can apply',
      short: 'Substitution across neighbouring occupations reduces estimated shortage gaps by 15 to 20 percent.',
      plain: 'Headline shortage figures subtract the supply of one occupation from the demand for that same occupation, as though every unfilled role had to be filled by somebody already trained for exactly it. But employers are buying output rather than credentials, and a good deal of any gap is absorbed by workers moving in from nearby occupations. Ignoring that margin overstates the shortage, the correction turns out to be large, and grading licensing back in on top of it produces a number a workforce board can actually act on.',
      abs: 'Occupational shortage estimates subtract the supply of an occupation from the demand for that same occupation, which implicitly assumes zero substitution. Because demand is for output rather than for credentials, employers substitute across near occupations, and ignoring that margin overstates the shortage materially. This paper recomputes the gap by subtracting, tier by tier of skill adjacency, the workers who can actually fill it, weighting each tier by observed transition rates and then re-restricting by licensing barriers at the destination. The correction reduces estimated gaps by 15 to 20 percent. The approach is arithmetic rather than equilibrium modelling, and any workforce board can apply and audit it.',
      math: ['gap_corrected = gap_raw − Σ_tiers min( absorbable share × adjacent slack, tier capacity )'],
      links: [['Working paper', '/working-papers/shortage-arithmetic/']]
    },

    vacancy: {
      x: 726, y: 522, k: 'wip', l: ['Vacancy', 'measurement'], lx: 0, ly: 28, a: 'middle',
      title: 'What does a vacancy measure?',
      meta: 'In development, successor to a discontinued time-to-fill series',
      short: 'One word covers three different objects, a stock of open roles, a flow of new postings, and an intention to hire, and separating them turns a headline series into something you can reason about.',
      plain: 'Open jobs sound like one number but they are three different things: what employers tell a government survey, what job boards advertise, and what an employer’s applicant tracking system records. For the same employers and the same occupations these disagree by two to three times, so two sources can both be right and still contradict each other, and the gap between them is itself information about what employers are doing that gets thrown away every time the three are collapsed into one figure.',
      abs: 'Vacancy counts from establishment surveys, job boards and applicant tracking systems disagree by factors of two to three for the same employers and occupations, because they measure different objects on different clocks. This paper reconciles them in three moves. First, a concept map from every requisition state, open, on hold, filled, cancelled and evergreen, to its survey and posting counterpart, with explicit columns for whether each state is counted in the survey and visible in postings. Second, time-to-fill measured with Kaplan-Meier curves that retain still-open requisitions as censored rather than dropping them, which is the selection bias the literature warns about and the practice routinely commits. Third, a decomposition of the two-to-three-times gap into named components including multi-hire requisitions and evergreen postings. The result is a replicable successor to a discontinued public time-to-fill series.',
      links: [['Working paper', '/working-papers/vacancy-measurement/']]
    },

    beige: {
      x: 852, y: 470, k: 'wip', l: ['Beige Book', 'signals'], lx: 17, ly: 2, a: 'start',
      title: 'Reading the Beige Book with LLMs',
      meta: 'In development, methods note with a public dataset attached',
      short: 'Forty years of Federal Reserve prose carries labor signals that no hard series records, and extracting them onto the same grain as the statistics makes them testable against the series they should lead.',
      plain: 'Eight times a year the twelve Federal Reserve districts publish qualitative reports full of labor-market detail, gathered precisely because the hard statistics arrive too late to be useful, and economists have mined them with dictionaries and hand-coding for decades. An LLM extracts structured labor sentiment from each release for about thirteen cents, which means the full forty-year archive can be processed for a few hundred dollars, and once it is on the same district-by-quarter grain as the official series it can be tested rather than merely quoted.',
      abs: 'The Federal Reserve Beige Book carries district-level qualitative labor-market reporting eight times a year, collected because hard statistics arrive with a lag, and it has historically been analyzed with keyword dictionaries or hand-coding. This note applies structured LLM extraction across the full forty-year archive at roughly thirteen cents per release, producing labor-market sentiment on the same district-by-quarter grain as the official series, with every extracted signal carrying the sentence it came from. The evaluation asks whether the extracted series carries information beyond the hard series it should lead, and a finding that it adds nothing is reported as such. The resulting dataset is released publicly.',
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
            '<button type="button" class="rg-tab is-on" data-tab="plain" role="tab">In plain terms</button>' +
            '<button type="button" class="rg-tab" data-tab="abs" role="tab">Abstract</button>' +
          '</div>' +
          '<p class="rg-abs" data-pane="plain">' + esc(n.plain) + '</p>' +
          '<div class="rg-abs is-hidden" data-pane="abs"><p>' + esc(n.abs) + '</p>' + math + '</div>' +
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
