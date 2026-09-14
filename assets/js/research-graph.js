/* ============================================================
   Research graph. The work laid out by what each
   one needs from the others.
   Hand-authored positions, no force simulation, no dependency.
   ============================================================ */
(function () {
  'use strict';

  var N = {

    /* ---------------- macroeconomics ---------------- */

    sage: {
      x: 150, y: 480, k: 'pub', l: ['Wellbeing and', 'macroeconomics'], lx: 0, ly: 30, a: 'middle',
      date: 'September 2020',
      title: 'Wellbeing and macroeconomics: a SAGE approach',
      plain: 'A standard macroeconomic model gives a household a choice between consuming and resting, and that is very nearly the whole of what it is allowed to want, which is why those models keep being surprised by what people do in a crisis. This one lets a household manage its means and its needs inside an economic system, embedded in a web of social relationships and rooted in a physical place, so that what people actually draw on when a shock arrives is inside the model rather than outside it. That changes both how a household responds when a shock arrives and what it would mean for that shock to have been absorbed, because a recovery that restores income while leaving the social fabric damaged is no longer scored as a full recovery.',
      abs: 'Standard macroeconomic models represent household welfare over consumption and leisure, which restricts the channels through which a shock can transmit and understates the persistence of its effects. This paper extends an incomplete-markets model of the Bewley type so that period utility carries arguments for social capital and place-based conditions directly, rather than admitting them through the budget constraint. Households save against idiosyncratic income risk while drawing wellbeing from consumption and from the social environment around them. The household problem is written so that the social terms can be switched off to recover the standard case exactly, which makes the contribution of each channel separable and measurable. The model is solved numerically and calibrated, and the resulting consumption and welfare responses to an income shock differ from the standard case in both magnitude and persistence. The implementation is released as a runnable notebook.',
      links: [['Download the paper', '/assets/papers/wellbeing-macroeconomics.pdf'], ['Oxford series', 'https://www.bsg.ox.ac.uk/research/publications/wellbeing-and-macroeconomics-sage-approach'], ['QuantEcon notebook', 'https://conway1521.github.io/sage-bewley/']]
    },

    sagetool: {
      x: 88, y: 552, k: 'tool', l: ['SAGE model', 'explorer'], lx: -17, ly: 2, a: 'end',
      date: 'May 2021',
      title: 'Wellbeing and macroeconomics explorer',
      plain: 'The paper argues that a household’s social fabric belongs inside the model rather than outside it, and the explorer is where anyone can check whether that argument does any work, by turning the social terms up and down and seeing which results move and which stay where they were. The parameters it exposes are the ones the paper argues over, so the argument can be checked rather than taken on trust.',
      abs: 'An interactive implementation of the SAGE household problem, exposing the preference weights on consumption, income risk, and the social terms as adjustable parameters and solving the model on each change. The tool is distributed through QuantEcon, the open source project for quantitative economics, computational lectures and tools in Python and Julia founded by Thomas Sargent and John Stachurski and used widely in teaching and research, which puts the model in front of an audience that can test it rather than only read about it.',
      links: [['Launch the explorer', 'https://conway1521.github.io/sage-bewley/'], ['The paper', '/assets/papers/wellbeing-macroeconomics.pdf']]
    },

    atlas: {
      x: 262, y: 508, k: 'tool', l: ['Open Inequality', 'Atlas'], lx: 17, ly: 2, a: 'start',
      date: 'January 2026',
      title: 'Open Inequality Atlas',
      plain: 'The number people are given about inequality in their country is almost always the income Gini, because that is the one that gets published, and it measures what they are paid rather than what they own. The Atlas sets the two side by side and they disagree: a country can pay out more evenly than almost anywhere and still own more unevenly than Britain, with its bottom half taking a quarter of national income while owning less than nothing. Ownership is what determines whether somebody can buy a house or survive losing a job, so which of the two numbers a reader happens to have seen changes what they believe about where they live.',
      abs: 'Inequality is used as one word for several measurements that do not agree with each other, and the one usually quoted is income concentration, because that is what the World Bank publishes most often. The Atlas separates the measurements, states them on comparable ground and shows where they diverge, across ten series covering wealth, income, poverty, life expectancy and life satisfaction. Wealth is the half that is hardest to harmonize and least often quoted, and the series is assembled from the World Inequality Database, the ECB household survey, the Luxembourg Wealth Study, the US Survey of Consumer Finances and the Federal Reserve\u2019s Distributional Financial Accounts, which differ in unit of observation, imputation method, coverage and license. Reconciliation is explicit rather than silent, since every row carries a source-priority tag and a comparability tier, so a user can restrict the panel to the tier their question needs. A United States layer resolves to the commuting zone, holding credit, debt and delinquency against measures of opportunity. Every claim in the app is graded by the strength the evidence supports, and a chart that cannot be justified at that strength is not shipped.',
      links: [['Launch the Atlas', 'https://conway1521.github.io/open-inequality-atlas/']]
    },

    antic: {
      x: 232, y: 428, k: 'wp', l: ['Fiscal', 'anticipation'], lx: 17, ly: 2, a: 'start',
      date: 'December 2021, revised September 2026',
      title: 'The anticipation content of fiscal policy: UK tax measures, 1945\u20132019',
      plain: 'When a tax change is announced and when it takes effect are different dates, and the gap between them has roughly quadrupled since the middle of the last century, so a British tax change today mostly arrives having been visible for months. That matters because the standard way of measuring the effect of tax policy treats a change as news on the day it takes effect, which was a fair approximation when most changes did arrive that way and is not one now. The gap is also not random: it depends on which tax is being changed, on where the Budget falls in the calendar, and, at the margin, on whether an election is coming, since tax rises are about four times more likely than cuts to take effect on the far side of a vote.',
      abs: 'Narrative tax shocks are dated by implementation, and the resulting series are pooled across decades. Using 2,252 UK tax measures announced between 1945 and 2019, this paper shows that the interval between announcement and implementation has changed enough that such a series mixes two economically different objects. The share of the tax impulse announced more than 120 days before taking effect rises from 0.18 in 1945 to 1979 to 0.70 since 2000, and the unanticipated component of the quarterly impulse falls roughly fivefold. Computing the same quantity from the century-long dataset of Cloyne, H\u00fcrtgen and Dimsdale, on their coding and their threshold, reproduces the series and extends it back to 0.02 in 1920 to 1944. Within the same Budget, National Insurance changes are 39 percentage points more likely than excise duties to arrive with long notice, and the fiscal-year calendar produces long notice only when the Budget falls late in the year. The rise dates to the early 1990s and the move to a unified autumn Budget, a reform of the Budget process justified by parliamentary scrutiny and predictability and never assessed for macroeconomic consequence. Crises do not visibly shorten the interval.',
      links: [['Download the paper', '/assets/papers/fiscal-anticipation.pdf']]
    },

    fiscal: {
      x: 128, y: 392, k: 'wp', l: ['When to', 'raise taxes'], lx: -15, ly: 2, a: 'end',
      date: 'September 2026',
      title: 'When to raise taxes: state dependence in the UK tax multiplier',
      plain: 'Governments choose when to raise taxes, and the advice they receive rarely turns on that choice, because the literature reports one average number for the effect of a tax change. On a century of UK narrative tax measures and quarterly household consumption from 1955, the same unanticipated tax rise costs about twice as much when the economy has slack as when it does not: consumption falls by 7.3 percent at its trough against 3.2 percent, and the gap is estimated directly with its own standard error. Consumption is the outcome to use, because it responds more than output and, unlike output, the result does not rest on the single 1979 Budget whose coded value moved fourfold between two vintages of the same dataset. The aggregate record cannot yet say whose spending falls, and the paper names the household data that can.',
      abs: 'A tax rise costs about twice as much when the economy has slack. Using UK narrative tax measures from 1918 to 2018 and quarterly household consumption from 1955, this paper estimates the consumption response to tax changes that were not anticipated, and splits it by whether unemployment was above or below its own recent average when the change took effect. Against a tax rise worth one percent of annual GDP, consumption falls by 7.3 percent at its trough when there is slack and by 3.2 percent when there is not. The difference is estimated directly, with its own standard error, and is significant at eight of seventeen horizons. Consumption is the better outcome to use: it responds more than output, on three times as many horizons, and unlike the output response it holds when the single Budget on which the published UK multiplier rests is removed. The shock series reproduces Cloyne (2013) exactly before being extended, which fixes the conventions the estimate turns on. The aggregate record cannot separate one tax from another, cannot detect whether pre-announcement blunts the effect, and cannot say whose spending falls, and the paper measures each of those limits and names the household data that the distributional question needs.',
      links: [['Download the paper', '/assets/papers/when-to-raise-taxes.pdf']]
    },

    /* ---------------- regional development ---------------- */

    p1: {
      x: 252, y: 148, k: 'wp', l: ['Ecosystem', 'framework'], lx: 0, ly: -24, a: 'middle',
      date: 'December 2024',
      title: 'A regional economic development ecosystem framework',
      plain: 'Roughly 1.5 trillion euro of European cohesion funding has been spent since 1989, and regional disparities have persisted and in several respects widened, while the gap between what the aggregate indicators report and what people in those regions experience has grown rather than closed. A region can post acceptable output figures while its labor market, its civic life and its sense of opportunity deteriorate. Practitioners in community organizations, community colleges and workforce boards already work as though everything connects, because in their daily experience it plainly does, and the models they are handed to justify their spending do not. This paper formalizes what those practitioners see, and sets out the three pillars that the two papers after it go on to measure and then to price.',
      abs: 'Regional development policy is typically evaluated one domain at a time, which sets aside the interdependencies between domains that the persistence of disparities appears to turn on. This paper organizes regional development around three interacting pillars: place-based conditions as the territorial and institutional foundation, human and social capital as the capabilities and connections that activate it, and economic activity as both the current outcome and the structural basis of future potential. The claim is not that the dimensions are new, nor that their interactions have been ignored, since a substantial body of recent work establishes that institutional quality conditions the returns to investment and that bridging social capital conditions mobility. The contribution is to hold those pairwise results inside one structure, formalized so that components can be introduced individually without respecifying the whole. Modularity is what makes the framework testable at the level of aggregation regional statistics actually reach, and it fixes the measurement targets used in the second paper and the calibration targets used in the third.',
      links: [['Download the paper', '/assets/papers/ecosystem-framework.pdf'], ['Slides', '/assets/papers/three-pillars-slides.pdf']]
    },

    p2: {
      x: 366, y: 214, k: 'wp', l: ['EU regional', 'ladder'], lx: 17, ly: 2, a: 'start',
      date: 'September 2025',
      title: 'A shock reveals the structure',
      plain: 'A tightly coupled system looks one-dimensional when nothing is happening to it, and shows its separate parts only under stress, which is why you cannot see the structure of a regional economy until the system is stressed. In calm times the three pillars of the framework do not behave as three separable dimensions at all, and a single factor fits the indicators better than three do. Then the pandemic arrives and the link between the people side and the economic side comes apart while the two links involving place barely move, which is the pattern a coupled system produces and the pattern independent dimensions could not. The four tiers of regions that emerge hold their members very unevenly: the struggling tier kept more than nine in ten of its regions across the shock while the high-performing tier lost nearly half, so the structure is far stickier at the bottom than at the top.',
      abs: 'This paper tests the ecosystem framework of the conceptual companion on European regions at NUTS 2 level. In calm conditions the three pillars do not separate: a single general factor fits the thirty-five indicators better than three factors do, and the pillar composites correlate at 0.85 to 0.89. Under the pandemic the correlation between human and social capital and economic activity falls while the two correlations involving place-based conditions barely move, and dimensions that were genuinely independent would not have correlated so highly beforehand, so the single-factor result and the selective decoupling together identify a coupled system rather than refuting the framework. Between-country differences account for roughly three-quarters to nine-tenths of the total variation, and the decoupling occurs between national systems while within countries the correlation holds steady, which points to divergent national policy responses. Four tiers, struggling, catching-up, stable core and high-performing, are stable across the shock, geographically contiguous and present before it, and they retain their members unequally, with the struggling tier holding more than nine in ten and the high-performing tier losing nearly half. Movement between tiers ran downhill, with downward transitions outnumbering upward ones by more than four to one, a pattern closer to allostasis than to equilibrium, in which a configuration is the most stable setting the conditions allow rather than a good one. Of 224 strong cross-pillar correlations, more than a third fall to near zero once the shared development dimension is partialled out, while 47 direct links hold once it is, estimated with a partial-correlation network borrowed from psychometrics.',
      links: [['Download the paper', '/assets/papers/shock-reveals-structure.pdf']]
    },

    p3: {
      x: 254, y: 296, k: 'wip', l: ['Pricing the', 'ladder'], lx: 0, ly: 28, a: 'middle',
      date: 'September 2026',
      title: 'Pricing Europe’s regional ladder in wellbeing terms',
      plain: 'The second paper measured the ladder and this one prices it, which is the step that turns a description into something a finance ministry can argue about. Households in the model save against income risk and draw wellbeing both from consumption and from the social fabric around them, living under their own tier’s conditions inside their own country’s tax and transfer system, so comparing tiers gives a gap that can be split into how much is income, how much is exposure to risk, and how much is everything the income accounts miss. The same numbers price the slide, meaning the expected cost of the pandemic-era transitions the second paper observed, and they show how much of the ladder national transfers already flatten.',
      abs: 'This paper attaches a welfare price to the regional tiers identified in the preceding paper. A calibrated heterogeneous-agent model, carrying the wellbeing arguments developed in the SAGE framework, places households under their tier’s measured conditions within their own country’s tax and transfer system, saving against idiosyncratic income risk and drawing utility from consumption and from social capital. Welfare differences across tiers are reported in consumption-equivalent and in wellbeing units and decomposed into income level, income risk, and the social component. Applying the transition matrix from the second paper prices the expected welfare cost of observed pandemic-era downward moves, and comparing pre-tax and post-transfer outcomes measures how far national fiscal systems already compress the ladder. The model values measured positions and does not claim to explain how regions arrived at them.',
      links: []
    },

    ned: {
      x: 142, y: 212, k: 'tool', l: ['NED regional', 'dashboard'], lx: -17, ly: 2, a: 'end',
      date: 'March 2023',
      title: 'NED dashboard: California regional analysis',
      plain: 'This is the three-pillar framework running on a real place, which is the test that matters, because a framework that cannot be populated with data that actually exists is not much of a framework. Rather than beginning from the indicators that happen to be collected and calling whatever they measure development, it begins from what regional actors say determines whether a household can get on and stay on, and then asks which of those can be measured well enough to compare one region against another.',
      abs: 'An interactive assessment tool covering California’s economic regions along dimensions selected to represent households’ enablers of equitable and durable development, rather than the standard growth and employment aggregates. Indicator selection proceeds from practitioner accounts, gathered from municipal government, community colleges, workforce boards and employers, and is then constrained to what is measurable at a consistent regional grain, which makes the gap between what practitioners identify as decisive and what the statistical system currently records an explicit output of the exercise.',
      links: [['Launch the dashboard', 'https://ned-dashboard.onrender.com']]
    },

    /* ---------------- labor markets ---------------- */

    skillsdna: {
      x: 792, y: 252, k: 'wp', l: ['AI exposure', 'at three levels'], lx: 0, ly: 30, a: 'middle',
      date: 'May 2026, revised September 2026',
      title: 'AI exposure at three levels',
      plain: 'A labor market can be described three ways at once: by what each occupation is paid, by the tasks each occupation performs, and by the skills those tasks use. The three descriptions have to add up to the same wage bill, and they differ in what they can support. Wages are observed once per occupation, so a description with more tasks than occupations can never be wrong, and a description with fewer skills than occupations can. The teams that have scored how exposed work is to AI each scored one of the three levels, and this paper places each score at the level it was collected and finds that the capability measures are one measure under three names. It then runs the test the framework licenses on realized wages and employment through 2025, and nothing has moved: no skill group has shifted beyond its ordinary year-to-year variation, and every break in the series arrives with the pandemic, two years before the technology. Whatever generative AI is doing to work has not yet reached the stock of jobs or the prices paid for them, and the paper specifies the test on job postings that will see it first.',
      abs: 'Measures of exposure to generative artificial intelligence are collected at three levels of the labor market, occupations, tasks and skills, and compared as though they described one object. This paper writes the labor market as one wage bill at three levels and counts what each can identify: 829 observed wages against an identity, against 17,383 task prices that no wage data can contradict, against 25 skill prices that can. Which quantities in this literature are testable therefore follows from how many statements the O*NET analysts wrote at each level. Three findings follow. The leading capability measures are one construct under three names: carrying the Eloundou task ratings to abilities reproduces the Felten ability scores in the right order across AI applications, the Srinivasan automation score is the Eloundou construction re-run on a later release, and augmentation is explained to 77 percent by a quadratic in automation. The skill layer supports a structure of about twenty-five dimensions, which explains occupational wages at a cross-validated 0.648 in O*NET’s own named groups, with loadings that are usable as changes and not as levels. And on a balanced panel of 693 occupations from 2012 to 2025, nothing in realized wages or employment has moved beyond ordinary volatility since language models were released: no skill group moved by more than 1.51 times its own year-to-year variation, and every deviation from the pre-2020 path begins with the pandemic. If the technology is changing what employers want, it shows first in what they ask for, and the paper specifies that test on the task composition of job postings.',
      math: ['Y = Σₒ Eₒ wₒ, the wage bill as an identity over 829 occupations', 'wₒ = Σᵢ βₒᵢ pᵢ, an occupation’s wage as task shares times 17,383 task prices, never identified', 'pᵢ = Σₖ γᵢₖ πₖ, a task’s price as skill content times 25 skill prices, which can fail'],
      links: [['Download the paper', '/assets/papers/skills-dna.pdf'], ['The production system', '/portfolio/skills-framework/']]
    },

    exposure: {
      x: 888, y: 190, k: 'wip', l: ['AI exposure', 'measures'], lx: 0, ly: -24, a: 'middle',
      date: 'April 2026',
      title: 'Does the choice of AI-exposure measure matter?',
      plain: 'At least six serious measures score how exposed each occupation is to AI, and most studies pick one without ever justifying the choice. If those measures disagree with each other, then every claim about which jobs are at risk is partly an artifact of which measure the author happened to reach for, and no reader can tell how much. Holding everything else fixed and varying only the measure shows how much of a published finding is the world and how much is the instrument.',
      abs: 'At least six serious measures score occupational exposure to AI, and studies routinely select one without justification. If the measures disagree, conclusions about which occupations are at risk are partly artifacts of that selection. This paper holds population, occupational base and specification constant and varies only the measure, quantifying where the choice binds. Comparison is on dollar-weighted agreement rather than rank correlation, since rank agreement at the tails conceals disagreement in the middle of the distribution, which is where policy questions are actually posed. The measures converge at the extremes and diverge substantially in the interior.',
      links: []
    },

    moves: {
      x: 864, y: 344, k: 'wip', l: ['Do skills', 'predict moves'], lx: 17, ly: 2, a: 'start',
      date: 'November 2025',
      title: 'Do skills predict moves?',
      plain: 'A whole industry now advises workers and workforce boards using similarity scores, telling a machinist that industrial maintenance is 98.5 percent similar and therefore a few months of retraining away. But similarity is a claim that a move is feasible, which is a different thing from a claim that anyone makes it, and if the scores are wrong then the advice built on them sends people toward jobs they will not get and sends public money after them. Checking is cheap, the data is public, and nobody appears to have done it at scale.',
      abs: 'Skill-similarity scores derived from occupational skill, knowledge and activity profiles are widely used as though a high score were evidence of realized mobility, when the score is a hypothesis about feasibility. This paper estimates a gravity model of observed occupational flows on public microdata and reads off the elasticity of moves to skill similarity, holding occupation size, wage differentials and geography constant, with licensing at the destination entered directly. It then tests whether the similarity thresholds the field uses to define transition tiers correspond to where observed flows actually break.',
      math: ['ln flowᵢ→ⱼ = η ln simᵢⱼ + β₁ ln(wⱼ/wᵢ) + β₂ ln Eᵢ + β₃ ln Eⱼ + γ licensedⱼ + εᵢⱼ'],
      links: []
    },

    migration: {
      x: 744, y: 400, k: 'wp', l: ['Occupational', 'migration'], lx: 0, ly: 30, a: 'middle',
      date: 'March 2026, revised September 2026',
      title: 'Where occupations move',
      plain: 'Interstate migration has been measured for people and hardly ever for occupations, although most of the rules that make moving hard attach to the job. This builds state-to-state flows by occupation from 59.8 million census records and measures what share of each occupation a state imports each year. The spread is close to fifteenfold, from tool and die makers to sailors, and licensure, the barrier most often blamed for immobility, explains almost none of it: physicians sit near the top of the ranking and postal workers near the bottom. The arrivals are always younger than the workforce they join, and flows into a state paying ten per cent more run about one per cent higher while distance weighs six times as much, so a pay premium of any size a state is likely to offer changes its intake by a few per cent. The gravity benchmark is deliberately told nothing about how large each occupation is in each state, so where a state draws far more of an occupation than it predicts the flows are recovering a concentration on their own, and that measure agrees with an independent employer survey.',
      abs: 'Interstate migration in the United States has been measured for persons and rarely for occupations, although most of the rules that make moving difficult attach to the job. This paper builds bilateral interstate migration flows by occupation from nineteen vintages of American Community Survey microdata, 59.8 million person records across 51 jurisdictions and 475 harmonized occupation codes, and measures the share of each state\'s occupational workforce arriving from another state within the year, with design-based standard errors. That share varies close to fifteenfold across occupations, from tool and die makers to sailors, and licensure explains almost none of the ordering. The channel is a young-worker channel in every occupation measured: arrivals and leavers have the same mean age cell by cell, and both are seven years younger than the workforce they join. A Poisson pseudo-maximum-likelihood gravity model with origin-year, destination-year, occupation-year and state-pair effects puts the wage elasticity of flows at 0.114 and the distance elasticity at −0.72, so distance weighs six times as much as pay. The benchmark omits employment by state and occupation, so its residual recovers occupational concentration from the flows alone; the concentrations hold their position across two decades and track the location quotient in an independent establishment survey, while three pre-specified wage tests return precise zeros.',
      math: ['E[ flowₒ→d^kt ] = exp( η ln(w_dkt/w_okt) + β ln distₒd + λ contigₒd + φₒt + ψ_dt + θ_kt + μₒd )'],
      links: [['Download the paper', '/assets/papers/occupation-migration.pdf']]
    },

    flows: {
      x: 622, y: 344, k: 'wp', l: ['Where workers', 'come from'], lx: -17, ly: 2, a: 'end',
      date: 'November 2025, revised September 2026',
      title: 'Where workers come from',
      plain: 'States fund nursing school places, teacher preparation and apprenticeships on the understanding that an occupation short of people is an occupation short of graduates, and that diagnosis has never been checked against a full account of where an occupation\u2019s people come from. Building one shows that training is the smallest of the inflows, that occupations are refilled mostly by people arriving from other occupations, and that those arrivals happen at every age rather than only among the young. It also shows that most of the movement cancels, so an occupation is churned by flows several times larger than the change in its size, which is why raising arrivals moves a stock so much less than it appears it should.',
      abs: 'Workforce policy in the United States acts on the training pipeline, on the understanding that an occupation short of people is an occupation short of graduates. This paper builds the full account of where an occupation’s people come from and where they go, for 230 occupations, annually from 2009 to 2025 and by age band, from a single survey in which each person is counted once on each side, with a standard error on every figure from the 160 replicate weights the Census Bureau publishes. Arrivals from other occupations run four to twelve times arrivals from education, exceed all arrivals from outside employment in 99 percent of occupations, and occur at every age: lateral arrivals aged thirty-five and over, taken on their own, outnumber every arrival from education by nearly seven to one. Most of that movement cancels, so the change in occupation sizes that lateral movement produces is about a tenth of the gross flow. The account rests on a measurement result established first: two independent codings of a job the survey records as unchanged disagree in 48.1 percent of cases at the detailed level, so occupational mobility cannot be measured in this survey by linking a person across interviews, and the within-interview design, whose two codes share an error that cancels in the difference, is the one that measures it.',
      math: ['Workers now = held it last year + arrivals from education, other non-work and other occupations − departures to other occupations and out of work'],
      links: [['Download the paper', '/assets/papers/flows-engine.pdf']]
    },

    shortage: {
      x: 604, y: 470, k: 'wip', l: ['Shortage', 'arithmetic'], lx: -17, ly: 2, a: 'end',
      date: 'August 2025',
      title: 'Shortage arithmetic',
      plain: 'Headline shortage figures subtract the supply of one occupation from the demand for that same occupation, as though every unfilled role had to be filled by somebody already trained for exactly it. But employers are buying output rather than credentials, and a good deal of any gap is absorbed by workers moving in from nearby occupations. Ignoring that margin overstates the shortage, the correction turns out to be large, and grading licensing back in on top of it produces a number a workforce board can actually act on.',
      abs: 'Occupational shortage estimates subtract the supply of an occupation from the demand for that same occupation, which implicitly assumes zero substitution. Because demand is for output rather than for credentials, employers substitute across near occupations, and ignoring that margin overstates the shortage materially. This paper recomputes the gap by subtracting, tier by tier of skill adjacency, the workers who can actually fill it, weighting each tier by observed transition rates and then re-restricting by licensing barriers at the destination. The correction reduces estimated gaps by 15 to 20 percent. The approach is arithmetic rather than equilibrium modeling, and any workforce board can apply and audit it.',
      math: ['gap_corrected = gap_raw − Σ_tiers min( absorbable share × adjacent slack, tier capacity )'],
      links: []
    },

    beige: {
      x: 852, y: 470, k: 'wip', l: ['Beige Book', 'signals'], lx: 17, ly: 2, a: 'start',
      date: 'March 2026',
      title: 'Reading the Beige Book with LLMs',
      plain: 'Eight times a year the twelve Federal Reserve districts publish qualitative reports full of labor-market detail, gathered precisely because the hard statistics arrive too late to be useful, and economists have mined them with dictionaries and hand-coding for decades. An LLM extracts structured labor sentiment from each release for about thirteen cents, which means the full forty-year archive can be processed for a few hundred dollars, and once it is on the same district-by-quarter grain as the official series it can be tested rather than merely quoted.',
      abs: 'The Federal Reserve Beige Book carries district-level qualitative labor-market reporting eight times a year, collected because hard statistics arrive with a lag, and it has historically been analyzed with keyword dictionaries or hand-coding. This note applies structured LLM extraction across the full forty-year archive at roughly thirteen cents per release, producing labor-market sentiment on the same district-by-quarter grain as the official series, with every extracted signal carrying the sentence it came from. The evaluation tests whether the extracted series carries information beyond the hard series it should lead, with the test specified before the extraction is scored. The resulting dataset is released publicly.',
      links: []
    }
  };

  var E = [
    ['sage', 'sagetool'], ['sage', 'p3'], ['atlas', 'fiscal'], ['atlas', 'p3'], ['antic', 'fiscal'],
    ['p1', 'p2'], ['p2', 'p3'], ['p1', 'ned'], 
    ['skillsdna', 'exposure'],
    ['skillsdna', 'moves'], ['moves', 'migration'], ['flows', 'migration'],
    ['flows', 'shortage'], 
    ['beige', 'shortage'], 
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
  var detail = document.getElementById('rg-detail');
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
  }

  function unlight() {
    if (selected) { light(selected); return; }
    graph.classList.remove('is-dimmed');
    Object.keys(nodeEls).forEach(function (k) { nodeEls[k].classList.remove('is-lit'); });
    edgeEls.forEach(function (e) { e.el.classList.remove('is-lit'); });
  }

  function open(id) {
    selected = id;
    var n = N[id];
    graph.classList.add('is-focused');
    Object.keys(nodeEls).forEach(function (k) {
      nodeEls[k].classList.toggle('is-selected', k === id);
    });
    light(id);

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
          (n.date ? '<div class="rg-d__date">' + esc(n.date) + '</div>' : '') +
        '</div>' +
        '<button class="rg-d__close" type="button" data-close>Close</button>' +
      '</div>' +
      '<div class="rg-tabs">' +
        '<button type="button" class="rg-tab is-on" data-tab="plain" aria-pressed="true">Description</button>' +
        '<button type="button" class="rg-tab" data-tab="abs" aria-pressed="false">Abstract</button>' +
      '</div>' +
      '<p class="rg-pane" data-pane="plain">' + esc(n.plain) + '</p>' +
      '<div class="rg-pane is-hidden" data-pane="abs"><p>' + esc(n.abs) + '</p>' + math + '</div>' +
      (links ? '<div class="rg-d__links">' + links + '</div>' : '');

    detail.hidden = false;
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

    detail.focus({ preventScroll: true });
    if (detail.scrollIntoView) detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function close() {
    var last = selected;
    selected = null;
    graph.classList.remove('is-focused');
    Object.keys(nodeEls).forEach(function (k) { nodeEls[k].classList.remove('is-selected'); });
    detail.classList.remove('is-open');
    detail.hidden = true;
    unlight();
    if (last && nodeEls[last]) nodeEls[last].focus();
  }

  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && selected) close();
  });

  /* ---------- narrow screens get the same content as a list ---------- */
  var GROUPS = [
    ['Labor markets', ['skillsdna', 'flows', 'migration', 'shortage', 'exposure', 'moves', 'beige']],
    ['Regional development', ['p1', 'p2', 'p3', 'ned']],
    ['Macroeconomics', ['sage', 'sagetool', 'atlas', 'antic', 'fiscal']]
  ];
  var GLYPH = { pub: '◉', wp: '●', tool: '◆', wip: '○' };
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
