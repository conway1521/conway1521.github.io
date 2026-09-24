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
      plain: 'Standard macroeconomic models give a household two choices, consume or rest, and little else it can want. That is part of why they keep being surprised by how people behave in a crisis. In this model a household manages its means and its needs within an economy, a set of social relationships and a physical place, so the support people draw on when a shock hits is part of the model. That changes how a household responds to a shock and what counts as recovering from it. A recovery that restores income but leaves the household’s social ties damaged no longer counts as a full recovery.',
      abs: 'The aim of this project is to develop an economic model that improves on existing ones in capturing wellbeing outcomes stemming from economic shocks. The premise is that personal welfare depends on more than just preference satisfaction and that the other determinants, which are affected by economic choices may not be captured by standard models. A theoretical approach for representing wellbeing more completely, the SAGE framework, is presented as the basis for this analysis and adapted to a Bewley-class model. Some parameters are derived from data while others are calibrated in an equilibrium state, and then a modest productivity shock is simulated to understand how groups in different wealth categories respond and what the wellbeing implications are. While the model needs further development, the results follow some general patterns observed in economic data and offer insights into behavior of the different wealth groups, including a decoupling of personal welfare dimensions following a productivity shock. In general, the introduction of wellbeing into the model shows promise for future development that better encompasses the motivations of groups and their responses to changes in their economic environments.',
      links: [['Download the paper', '/assets/papers/wellbeing-macroeconomics.pdf'], ['Oxford series', 'https://www.bsg.ox.ac.uk/research/publications/wellbeing-and-macroeconomics-sage-approach'], ['QuantEcon notebook', 'https://conway1521.github.io/sage-bewley/']]
    },

    sagetool: {
      x: 88, y: 552, k: 'tool', l: ['SAGE model', 'explorer'], lx: -17, ly: 2, a: 'end',
      date: 'May 2021',
      title: 'Wellbeing and macroeconomics explorer',
      plain: 'The paper argues that a household’s social life belongs inside the model. The explorer lets anyone test that claim by turning the social terms up and down and seeing which results change. The parameters it exposes are the ones the paper’s argument depends on.',
      abs: 'An interactive implementation of the SAGE household problem, exposing the preference weights on consumption, income risk, and the social terms as adjustable parameters and solving the model on each change. The tool is distributed through QuantEcon, the open source project for quantitative economics, computational lectures and tools in Python and Julia founded by Thomas Sargent and John Stachurski and used widely in teaching and research, which puts the model in front of an audience that can test it rather than only read about it.',
      links: [['Launch the explorer', 'https://conway1521.github.io/sage-bewley/'], ['The paper', '/assets/papers/wellbeing-macroeconomics.pdf']]
    },

    atlas: {
      x: 262, y: 508, k: 'tool', l: ['Open Inequality', 'Atlas'], lx: 17, ly: 2, a: 'start',
      date: 'January 2026',
      title: 'Open Inequality Atlas',
      plain: 'The inequality figure most people hear about their country is the income Gini, because it is the one that gets published, and it measures what people are paid. The Atlas puts it next to wealth, and the two often disagree. A country can have one of the most even income distributions anywhere and a more uneven wealth distribution than Britain, with its bottom half earning a quarter of national income while holding negative net wealth. Wealth decides whether someone can buy a house or get through a lost job, so which figure a reader has seen shapes what they believe about where they live.',
      abs: 'Inequality is used as one word for several measurements that do not agree with each other, and the one usually quoted is income concentration, because that is what the World Bank publishes most often. The Atlas separates the measurements, states them on comparable ground and shows where they diverge, across ten series covering wealth, income, poverty, life expectancy and life satisfaction. Wealth is the half that is hardest to harmonize and least often quoted, and the series is assembled from the World Inequality Database, the ECB household survey, the Luxembourg Wealth Study, the US Survey of Consumer Finances and the Federal Reserve\u2019s Distributional Financial Accounts, which differ in unit of observation, imputation method, coverage and license. Reconciliation is explicit rather than silent, since every row carries a source-priority tag and a comparability tier, so a user can restrict the panel to the tier their question needs. A United States layer resolves to the commuting zone, holding credit, debt and delinquency against measures of opportunity. Every claim in the app is graded by the strength the evidence supports, and a chart that cannot be justified at that strength is not shipped.',
      links: [['Launch the Atlas', 'https://conway1521.github.io/open-inequality-atlas/']]
    },

    antic: {
      x: 232, y: 428, k: 'wp', l: ['Fiscal', 'anticipation'], lx: 17, ly: 2, a: 'start',
      date: 'December 2021, revised September 2026',
      title: 'The anticipation content of fiscal policy: UK tax measures, 1945\u20132019',
      plain: 'A tax change is announced on one date and takes effect on another. In Britain, the share of tax changes announced more than four months ahead has roughly quadrupled since the postwar decades, so most of them have been public for months by the time they take effect. The standard way of measuring the effect of tax policy treats a change as news on the day it takes effect. That was a fair approximation when most changes arrived that way, and it no longer is. The gap also follows a pattern. It depends on which tax is changed, where the Budget falls in the calendar, and to a lesser degree on whether an election is coming. Tax rises are about four times more likely than cuts to take effect after an election.',
      abs: 'Narrative tax shocks are dated by implementation, and the resulting series are pooled across decades. Using 2,252 UK tax measures announced between 1945 and 2019, I show that the interval between announcement and implementation has changed enough for such a series to mix two economically different objects. The share of the tax impulse announced more than 120 days before taking effect rises from 0.18 in 1945–79 to 0.70 since 2000, and the unanticipated component of the quarterly impulse falls roughly fivefold. Computing the same quantity from the century-long dataset of Cloyne et al. (2025), on their coding and their threshold, reproduces the series and extends it back to 0.02 in 1920–44. Its length is also systematic. Within the same Budget, National Insurance changes are 39 percentage points more likely than excise duties to arrive with long notice, the fiscal-year calendar produces long notice only when the Budget falls late in the year, and tax rises are four times more likely than cuts to take effect after an election. The rise dates to the early 1990s, when the Budget process was reformed in the name of scrutiny and predictability, and its macroeconomic consequences were never assessed; the crises of the period do not appear to have shortened it.',
      links: [['Download the paper', '/assets/papers/fiscal-anticipation.pdf']]
    },

    fiscal: {
      x: 128, y: 392, k: 'wp', l: ['When to', 'raise taxes'], lx: -15, ly: 2, a: 'end',
      date: 'September 2026',
      title: 'When to raise taxes: state dependence in the UK tax multiplier',
      plain: 'Governments choose when to raise taxes, but the research they rely on mostly reports one average number for the effect of a tax change. Using a century of UK narrative tax measures and quarterly household consumption from 1955, the paper finds that the same unanticipated tax rise costs about twice as much when the economy has slack. Consumption falls 7.3 percent at its trough, against 3.2 percent when there is no slack, and the difference is estimated directly with its own standard error. The paper uses consumption as the outcome because it responds more than output, and because the output result depends on a single 1979 Budget whose coded value changed fourfold between two versions of the same dataset. The aggregate data cannot yet show whose spending falls, and the paper names the household data that could.',
      abs: 'Using UK narrative tax measures from 1918 to 2018 and quarterly household consumption from 1955, I estimate the response of consumption to tax changes that were not anticipated, and split it by whether unemployment was above or below its own recent average when the change took effect. Against a tax rise worth one percent of annual GDP, consumption falls by 7.3 percent at its trough when there is slack and by 3.2 percent when there is not, so the same rise costs roughly twice as much in a slack economy. The difference is estimated directly, with its own standard error, and is significant at eight of seventeen horizons. Consumption is also the better outcome to study: it responds more than output, on three times as many horizons, and unlike the output response it survives the removal of the single Budget on which the published UK multiplier depends. The shock series reproduces Cloyne (2013) exactly before it is extended, which settles the dating conventions the estimate relies on. The aggregate record is too thin to separate one tax from another or to detect whether pre-announcement weakens the effect, and whose spending falls is a question for household data, which the paper identifies.',
      links: [['Download the paper', '/assets/papers/when-to-raise-taxes.pdf']]
    },

    /* ---------------- regional development ---------------- */

    p1: {
      x: 252, y: 148, k: 'wp', l: ['Ecosystem', 'framework'], lx: 0, ly: -24, a: 'middle',
      date: 'December 2024',
      title: 'A regional economic development ecosystem framework',
      plain: 'About 1.5 trillion euros of European cohesion funding has been spent since 1989, and regional disparities have persisted and in some ways widened. The gap between what aggregate indicators report and what people in those regions experience has also grown. A region can post acceptable output figures while its labor market, civic life and sense of opportunity decline. People working in community organizations, community colleges and workforce boards already treat these as connected, because in their daily work they are, but the models used to justify their spending treat them separately. This paper formalizes what those practitioners see and sets out three pillars, which the next two papers measure and then put a price on.',
      abs: 'This paper proposes a way of understanding regional economic development as an ecosystem rather than as a collection of separate factors. Despite the cumulative investment of roughly 1.5 trillion euro of European cohesion funding since 1989, regional disparities across Europe have persisted and in several respects widened, and the gap between what aggregate economic indicators report and what people in those regions actually experience has grown rather than closed. Conventional approaches, which examine physical infrastructure, human capital, or economic performance one domain at a time, are not well equipped to explain this, because the interdependencies between domains are precisely what they set aside. The framework developed here organizes regional development around three interacting pillars. Place-based Conditions are the territorial and institutional foundation. Human and Social Capital are the capabilities and connections that activate that foundation. Economic Activity is both the current outcome and the structural basis of future potential. Crucially, the framework is presented as a living system rather than a fixed taxonomy. Regions are coupled wholes that settle into stable but shiftable configurations, and they change as the world economy, demographics, and their own opportunities change. The framework is built to be tested, and the empirical companion to this paper does so on European regions at NUTS 2 level.',
      links: [['Download the paper', '/assets/papers/ecosystem-framework.pdf'], ['Slides', '/assets/papers/three-pillars-slides.pdf']]
    },

    p2: {
      x: 366, y: 214, k: 'wp', l: ['EU regional', 'ladder'], lx: 17, ly: 2, a: 'start',
      date: 'September 2025',
      title: 'A shock reveals the structure',
      plain: 'When nothing is disturbing it, a tightly connected system can look like a single dimension, and its separate parts show only under stress. In calm years the three pillars of the framework move together, and one factor fits the regional indicators better than three. When the pandemic hits, the link between the people side and the economic side weakens while the two links involving place barely move. A connected system would produce that pattern and independent dimensions would not. Most of the variation between regions turns out to be variation between countries, and the weakening happened between national systems while within countries the link held steady. The regions sort into four tiers, which differ a lot in how well they hold their members. The struggling tier kept more than nine in ten of its regions through the shock, while the high-performing tier lost close to half, so regions at the bottom tend to stay there and regions at the top often slip.',
      abs: 'This paper tests, on European regions at NUTS 2 level, the ecosystem framework set out in the conceptual companion. That framework organizes regional development around three interacting pillars, Place-based Conditions, Human and Social Capital, and Economic Activity, and proposes that a region is a coupled, dynamic system rather than a stack of separate factors. The test produces two main findings. First, most of the variation in development across European regions is in fact variation between countries: between-country differences account for roughly three-quarters to nine-tenths of the total, and under the pandemic the correlation between the social and the economic sides of development fell between national systems while within countries it held steady. Second, the four tiers of regions that emerge from the data hold on to their members very unequally: the struggling tier kept more than nine in ten of its regions across the shock, while the high-performing tier lost nearly half, so the regional structure is far stickier at the bottom than at the top. The overarching idea is that a tightly coupled system looks one-dimensional in calm times and shows its separate parts only under stress. In normal conditions the three pillars do not behave as three separable dimensions: a single general factor fits the thirty-five indicators better than three factors do, and the pillar composites correlate at 0.85 to 0.89. When the pandemic hits, however, the correlation between Human and Social Capital and Economic Activity falls while the two correlations involving Place-based Conditions barely move.',
      links: [['Download the paper', '/assets/papers/shock-reveals-structure.pdf']]
    },

    p3: {
      x: 254, y: 296, k: 'wip', l: ['Pricing the', 'ladder'], lx: 0, ly: 28, a: 'middle',
      date: 'September 2026',
      title: 'Pricing Europe’s regional ladder in wellbeing terms',
      plain: 'The second paper measured the gaps between regional tiers, and this one puts a price on them in wellbeing terms. In the model, households save against income risk and get wellbeing from both consumption and the social life around them. Each lives under its own tier’s conditions and its own country’s tax and transfer system. Comparing tiers gives a gap that splits into income, exposure to risk, and what income accounts leave out. The same numbers give the expected cost of the pandemic-era moves between tiers that the second paper observed, and show how much of the gap national transfers already close.',
      abs: 'This paper attaches a welfare price to the regional tiers identified in the preceding paper. A calibrated heterogeneous-agent model, carrying the wellbeing arguments developed in the SAGE framework, places households under their tier’s measured conditions within their own country’s tax and transfer system, saving against idiosyncratic income risk and drawing utility from consumption and from social capital. Welfare differences across tiers are reported in consumption-equivalent and in wellbeing units and decomposed into income level, income risk, and the social component. Applying the transition matrix from the second paper prices the expected welfare cost of observed pandemic-era downward moves, and comparing pre-tax and post-transfer outcomes measures how far national fiscal systems already compress the ladder. The model values measured positions and does not claim to explain how regions arrived at them.',
      links: []
    },

    ned: {
      x: 142, y: 212, k: 'tool', l: ['NED regional', 'dashboard'], lx: -17, ly: 2, a: 'end',
      date: 'March 2023',
      title: 'NED dashboard: California regional analysis',
      plain: 'This applies the three-pillar framework to a real place, California, which tests whether the framework can be filled with data that exists. It starts from what people in each region say decides whether a household can get ahead and stay there, and then checks which of those factors can be measured well enough to compare one region with another.',
      abs: 'An interactive assessment tool covering California’s economic regions along dimensions selected to represent households’ enablers of equitable and durable development, rather than the standard growth and employment aggregates. Indicator selection proceeds from practitioner accounts, gathered from municipal government, community colleges, workforce boards and employers, and is then constrained to what is measurable at a consistent regional grain, which makes the gap between what practitioners identify as decisive and what the statistical system currently records an explicit output of the exercise.',
      links: [['Launch the dashboard', 'https://ned-dashboard.onrender.com']]
    },

    /* ---------------- labor markets ---------------- */

    skillsdna: {
      x: 792, y: 252, k: 'wp', l: ['AI exposure', 'at three levels'], lx: 0, ly: 30, a: 'middle',
      date: 'May 2026, revised September 2026',
      title: 'AI exposure at three levels',
      plain: 'A labor market can be described three ways at once: by what each occupation is paid, by the tasks each occupation performs, and by the skills those tasks use. The three descriptions have to add up to the same wage bill, but they cannot all be tested the same way. Wages are observed once per occupation, so a description with more tasks than occupations will always fit the data, while one with fewer skills than occupations can be rejected. Each research team that has scored AI exposure scored one of these three levels. This paper places each score at the level where it was collected, and finds that the capability measures are one measure under three names. It then tests realized wages and employment through 2025. No skill group has shifted beyond its normal year-to-year variation, and every break in the series comes with the pandemic, two years before generative AI. So far generative AI has not shown up in the number of jobs or in what they pay, and the paper sets out the test on job postings that should pick it up first.',
      abs: 'Measures of exposure to generative artificial intelligence are collected at three levels of the labor market, occupations, tasks, and skills, and compared as though they described one object. This paper writes the labor market as one wage bill at three levels and counts what each can identify: 829 observed wages against an identity, against 17,383 task prices that no wage data can contradict, and against 25 skill prices that can. Which quantities in this literature are testable therefore follows from how many statements the analysts of the Occupational Information Network wrote at each level. The leading capability measures are, on inspection, one construct under three names. Converting the Eloundou task ratings to abilities reproduces the Felten ability scores in the right order across AI applications, the Srinivasan automation score is the Eloundou construction re-run on a later release, and a quadratic in automation explains 77 percent of augmentation. The skill layer supports a structure of about twenty-five dimensions, which explains occupational wages at a cross-validated 0.648 in the Network’s own named groups, and whose loadings are informative as changes over time but uninformative as levels. On a balanced panel of 693 occupations from 2012 to 2025, nothing in realized wages or employment has moved beyond ordinary volatility since language models were released. No skill group moved by more than 1.51 times its own year-to-year variation, and every deviation from the pre-2020 path begins with the pandemic. If the technology is changing what employers want, the change should appear in job postings before it appears in employment, and the paper specifies that test on the task composition of postings.',
      math: ['Y = Σₒ Eₒ wₒ, the wage bill as an identity over 829 occupations', 'wₒ = Σᵢ βₒᵢ pᵢ, an occupation’s wage as task shares times 17,383 task prices, never identified', 'pᵢ = Σₖ γᵢₖ πₖ, a task’s price as skill content times 25 skill prices, which can fail'],
      links: [['Download the paper', '/assets/papers/skills-dna.pdf'], ['The production system', '/portfolio/skills-framework/']]
    },

    exposure: {
      x: 888, y: 190, k: 'wp', l: ['AI exposure', 'measures'], lx: 0, ly: -24, a: 'middle',
      date: 'June 2026, revised September 2026',
      title: 'Does the choice of AI-exposure measure matter?',
      plain: 'At least six serious measures score how exposed each occupation is to AI, and studies that report a share of jobs at risk usually pick one without saying why. If the measures disagree, any ranking of at-risk occupations reflects the choice of measure as well as the labor market. The usual comparison is a rank correlation, which weights an occupation of five hundred people the same as one of three million and is driven by the extremes, where all the measures agree. This note specifies a comparison of the measures by the wage dollars they classify as exposed, at a common cutoff and decile by decile, holding everything else fixed, and states in advance what each result would mean.',
      abs: 'At least six serious measures score how exposed each occupation is to artificial intelligence, and a study that reports the share of jobs at risk picks one of them, usually without saying why. If the measures agree, the choice is harmless. If they disagree, then every ranking of at-risk occupations, every regional exposure map, and every policy brief built on one of them reflects the instrument as well as the labor market, and no reader can tell by how much. This note specifies the comparison that policy needs and fixes its statistic. Rank correlations, the usual comparison, weight an occupation of five hundred people and one of three million equally, and they are dominated by the tails, where every measure agrees that telemarketers are exposed and roofers are not. Policy questions are posed on people and on dollars, and they are posed in the middle of the distribution, where the marginal occupation is classified one way or the other. The statistic is therefore the share of the wage bill on which two measures disagree about whether an occupation is exposed, at a common cut, together with the agreement rate by decile of the pooled ranking, which separates the extremes from the interior. The design holds population, occupational base, vintage, and every downstream computation fixed and varies only the measure, which is possible because the model built alongside the companion paper takes each measure as an interchangeable input. The readings that decide whether the choice matters are written down before the numbers are.',
      math: ['D\u2090\u1D66(q) = \u03A3\u2092 \u03C9\u2092 |1[o \u2208 X\u2090(q)] \u2212 1[o \u2208 X\u1D66(q)]|, the share of the wage bill one measure calls exposed and the other does not'],
      links: [['Download the paper', '/assets/papers/exposure-measures.pdf'], ['The production system', '/portfolio/skills-framework/']]
    },

    moves: {
      x: 864, y: 344, k: 'wp', l: ['Do skills', 'predict moves'], lx: 17, ly: 2, a: 'start',
      date: 'January 2026, revised September 2026',
      title: 'Do skills predict moves?',
      plain: 'A whole industry now advises workers and workforce boards with similarity scores. Two occupations whose skill profiles overlap at 98.5 percent are presented as a few months of retraining apart, and a machinist is steered toward industrial maintenance. A high score says a move is possible, but it does not show that workers make it. If the scores are wrong, the advice sends people toward jobs they will not get and public money after them. The data to check this is public, and the check is cheap. The paper sets up the test as a gravity model on the occupation changes that the CPS March supplement records within a single interview, the only design in that survey that separates real moves from coding noise. The model separates how much traffic flows between two occupations, which similarity should explain, from its direction, which the wage difference should explain, and it will compare the field’s thresholds at 0.985, 0.970 and 0.950 with where the flows drop off.',
      abs: 'A whole advisory industry now tells workers and workforce boards which occupations they can move to, and it does so with a similarity score. The score is a claim about feasibility, that a person with one profile could do the other job. Whether anyone makes the move is a different claim, and the advice depends on it, yet it has not been tested at scale, although the data to test it are public and the test costs little. This paper specifies the test and fixes its inputs. Observed flows between occupations come from the March supplement of the Current Population Survey, which records in one interview what a person does now and what they did last year. Two independent codings of a job the survey itself records as unchanged disagree 48.1 percent of the time at the detailed level, so a matrix linked across interviews measures coding disagreement. The within-interview design cancels that error, and it is the one used here. Similarity is a composite over the skills, knowledge, and work activities the Occupational Information Network records, held as 798,342 occupation pairs above a similarity of 0.5, and the tier thresholds used in workforce practice sit at 0.985, 0.970, and 0.950. The model is a gravity equation estimated by Poisson pseudo-maximum likelihood on gross flows, with origin and destination effects that absorb the size of each occupation. A flexible version of the model enters similarity in bins instead of as one elasticity, locates where observed flows break, and sets the breaks against the three thresholds in use. Licensing is read from the residuals rather than entered as a regressor: the pairs that similarity places close and that nobody is observed crossing are a map of what the score misses, and the residuals show whether that map concentrates in licensed occupations.',
      math: ['E[flow\u1D62\u2192\u2C7C] = exp(\u03B7 ln sim\u1D62\u2C7C + \u03B2 ln(w\u2C7C/w\u1D62) + \u03B1\u1D62 + \u03B4\u2C7C), with symmetric pair effects added to identify \u03B2 from direction alone'],
      links: [['Download the paper', '/assets/papers/skills-and-moves.pdf']]
    },

    migration: {
      x: 744, y: 400, k: 'wp', l: ['Occupational', 'migration'], lx: 0, ly: 30, a: 'middle',
      date: 'March 2026, revised September 2026',
      title: 'Where occupations move',
      plain: 'Interstate migration is usually measured for people and rarely for occupations, even though most of the rules that make moving hard are tied to the job. This paper builds state-to-state flows by occupation from 59.8 million census records and measures what share of each occupation a state brings in from other states each year. The share varies about fifteenfold, from tool and die makers to sailors. Licensing, the barrier most often blamed for low mobility, explains very little of it. Physicians, who need a license in each state, are near the top of the ranking, and postal workers are near the bottom. The people who arrive are always younger than the workforce they join. Flows into a state that pays ten percent more are about one percent higher, while distance counts six times as much, so any pay premium a state is likely to offer changes its intake by only a few percent. The gravity model is given no information about how large each occupation is in each state. Where a state draws far more of an occupation than the model predicts, the flows are picking up a concentration of that occupation by themselves, and that measure agrees with an independent employer survey.',
      abs: 'Interstate migration in the United States has been measured for persons and rarely for occupations, although most of the rules that make moving difficult attach to the job. This paper builds bilateral interstate migration flows by occupation from nineteen vintages of American Community Survey microdata, 59.8 million person records across 51 jurisdictions and 475 harmonized occupation codes, and measures the share of each state’s occupational workforce arriving from another state within the year, with design-based standard errors. That share varies close to fifteenfold across occupations, from tool and die makers to sailors, and licensure explains almost none of the ordering. Arrivals are younger than the workforce they join in every occupation measured, and arrivals and leavers have the same mean age cell by cell, both about seven years younger than the incumbents. A Poisson pseudo-maximum-likelihood gravity model with origin-year, destination-year, occupation-year, and state-pair effects puts the wage elasticity of flows at 0.114 and the distance elasticity at −0.72, some six times as large. The benchmark omits employment by state and occupation, so its residual recovers occupational concentration from the flows alone. The concentrations hold their position across two decades and agree with the location quotient in an independent establishment survey, while three pre-specified tests on wage growth return tightly estimated nulls.',
      math: ['E[ flowₒ→d^kt ] = exp( η ln(w_dkt/w_okt) + β ln distₒd + λ contigₒd + φₒt + ψ_dt + θ_kt + μₒd )'],
      links: [['Download the paper', '/assets/papers/occupation-migration.pdf']]
    },

    flows: {
      x: 622, y: 344, k: 'wp', l: ['Where workers', 'come from'], lx: -17, ly: 2, a: 'end',
      date: 'November 2025, revised September 2026',
      title: 'Where workers come from',
      plain: 'States fund nursing school places, teacher preparation and apprenticeships on the assumption that an occupation short of people is short of graduates, and that assumption has never been checked against a full account of where an occupation’s workers come from. Building that account shows that training is the smallest inflow. Occupations are refilled mostly by people moving in from other occupations, and people make those moves at all ages. Most of the movement also cancels out, and the change in an occupation’s size is about a tenth of the flows in and out of it. That is why raising arrivals changes its size much less than one would expect.',
      abs: 'Workforce policy in the United States concentrates on training, on the understanding that an occupation short of people is an occupation short of graduates. This paper builds the full account of where an occupation’s people come from and where they go, for 230 occupations, annually from 2009 to 2025 and by age band. It uses a single survey in which each person is counted once on each side, with standard errors from the 160 replicate weights the Census Bureau publishes. Arrivals from other occupations run four to twelve times arrivals from education, exceed all arrivals from outside employment in 99 percent of occupations, and occur at every age: lateral arrivals aged thirty-five and over, taken on their own, outnumber every arrival from education by nearly seven to one. Most of that movement cancels, so the change in occupation sizes that lateral movement produces is about a tenth of the gross flow. The account depends on a measurement result established first. Two independent codings of a job the survey records as unchanged disagree in 48.1 percent of cases at the detailed level, so occupational mobility cannot be measured in this survey by linking a person across interviews. The within-interview design, whose two codes share an error that cancels in the difference, is the one that measures it.',
      math: ['Workers now = held it last year + arrivals from education, other non-work and other occupations − departures to other occupations and out of work'],
      links: [['Download the paper', '/assets/papers/flows-engine.pdf']]
    },

    shortage: {
      x: 604, y: 470, k: 'wp', l: ['Shortage', 'arithmetic'], lx: -17, ly: 2, a: 'end',
      date: 'March 2026, revised September 2026',
      title: 'Shortage arithmetic',
      plain: 'Headline shortage figures subtract the supply for an occupation from the demand for that same occupation, as if every opening had to be filled by someone newly trained for it. The occupational flow account shows that in every occupation it covers, more people arrive from other occupations than from education, by a median factor of 19. For five healthcare occupations in North Carolina, arrivals from other occupations at the observed rate equal 49 to 158 percent of the openings the state projects each year, so the channel the standard calculation leaves out is comparable in size to the openings themselves. The paper writes down the correction tier by tier of skill adjacency, with every term measured and capped by history, and infers licensing barriers from the occupation pairs that no one crosses.',
      abs: 'An occupational shortage figure is a subtraction. A projection of the positions an occupation will need to fill is set against a count of the people being trained for it, and the difference is published as the number a state is short. The subtraction assumes something that is never written down: that a position in the occupation can be filled only by a person newly trained for exactly that occupation, so that nobody arrives from anywhere else. The occupational flow account built in the companion paper (Conway, 2025) measures where an occupation’s people come from, and in every one of the 172 occupations it covers, arrivals from another occupation exceed arrivals from education, by a median factor of 19. This paper writes the correction down and measures its first term. For five healthcare occupations in North Carolina, arrivals from another occupation at the rate the national account observes come to between 49 and 158 percent of the annual openings the state projection expects. Those arrivals are gross and are matched by departures of similar size, and the projection already nets part of that movement out of its replacement figure, so the table cannot be read as a shortage half the size of its headline. The table establishes instead that movement from adjacent occupations supplies these occupations on a scale comparable to the openings themselves, and that a supply count consisting of graduates counts the smallest inflow. A raw gap is reduced, tier by tier of skill adjacency, by the workers the adjacent occupations can release into it. Licensing is a reading of the results rather than a parameter.',
      math: ['G* = G \u2212 \u03A3\u209C min( \u03A3\u2C7C\u2208\u209C m\u2C7C\u1D62 S\u2C7C , m\u0304\u209C\u1D62 E\u1D62 ), the raw gap less what each adjacency tier releases at observed transition rates, capped by history'],
      links: [['Download the paper', '/assets/papers/shortage-arithmetic.pdf']]
    },

    beige: {
      x: 852, y: 470, k: 'wip', l: ['Beige Book', 'signals'], lx: 17, ly: 2, a: 'start',
      date: 'March 2026',
      title: 'Reading the Beige Book with LLMs',
      plain: 'Eight times a year the twelve Federal Reserve districts publish qualitative reports full of labor market detail, collected because the hard statistics arrive too late to be useful. Economists have mined them with dictionaries and hand-coding for decades. An LLM can pull structured labor sentiment out of each release for about thirteen cents, so the full forty-year archive costs a few hundred dollars to process. Once the archive is on the same district-by-quarter basis as the official series, it can be tested against them.',
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
