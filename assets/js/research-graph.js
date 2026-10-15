/* ============================================================
   Research graph. Papers and notes laid out as a live network,
   in the manner of a note graph: each program settles around its
   own home, links pull related pieces together, and nodes can be
   dragged. Papers are dark, notes are small and grey. No dependency.
   ============================================================ */
(function () {
  'use strict';

  var N = {
    antic: {
      g: "fiscal",
      k: "wp",
      s: "Fiscal anticipation",
      date: "December 2021, revised September 2026",
      title: "The anticipation content of fiscal policy: UK tax measures, 1945–2019",
      plain: "A tax change is announced on one date and takes effect on another. In Britain, the share of tax changes announced more than four months ahead has roughly quadrupled since the postwar decades, so most of them have been public for months by the time they take effect. The standard way of measuring the effect of tax policy treats a change as news on the day it takes effect. That was a fair approximation when most changes arrived that way, and it no longer is. The gap also follows a pattern. It depends on which tax is changed, where the Budget falls in the calendar, and to a lesser degree on whether an election is coming. Tax rises are about four times more likely than cuts to take effect after an election.",
      abs: "Narrative tax shocks are dated by implementation, and the resulting series are pooled across decades. Using 2,252 UK tax measures announced between 1945 and 2019, I show that the interval between announcement and implementation has changed enough for such a series to mix two economically different objects. The share of the tax impulse announced more than 120 days before taking effect rises from 0.18 in 1945–79 to 0.70 since 2000, and the unanticipated component of the quarterly impulse falls roughly fivefold. Computing the same quantity from the century-long dataset of Cloyne et al. (2025), on their coding and their threshold, reproduces the series and extends it back to 0.02 in 1920–44. Its length is also systematic. Within the same Budget, National Insurance changes are 39 percentage points more likely than excise duties to arrive with long notice, the fiscal-year calendar produces long notice only when the Budget falls late in the year, and tax rises are four times more likely than cuts to take effect after an election. The rise dates to the early 1990s, when the Budget process was reformed in the name of scrutiny and predictability, and its macroeconomic consequences were never assessed; the crises of the period do not appear to have shortened it.",
      links: [["Download the paper","/assets/papers/fiscal-anticipation.pdf"]]
    },

    fiscal: {
      g: "fiscal",
      k: "wp",
      s: "When to raise taxes",
      date: "September 2026",
      title: "When to raise taxes: state dependence in the UK tax multiplier",
      plain: "Governments choose when to raise taxes, but the research they rely on mostly reports one average number for the effect of a tax change. Using a century of UK narrative tax measures and quarterly household consumption from 1955, the paper finds that the same unanticipated tax rise costs about twice as much when the economy has slack. Consumption falls 7.3 percent at its trough, against 3.2 percent when there is no slack, and the difference is estimated directly with its own standard error. The paper uses consumption as the outcome because it responds more than output, and because the output result depends on a single 1979 Budget whose coded value changed fourfold between two versions of the same dataset. The aggregate data cannot yet show whose spending falls, and the paper names the household data that could.",
      abs: "Using UK narrative tax measures from 1918 to 2018 and quarterly household consumption from 1955, I estimate the response of consumption to tax changes that were not anticipated, and split it by whether unemployment was above or below its own recent average when the change took effect. Against a tax rise worth one percent of annual GDP, consumption falls by 7.3 percent at its trough when there is slack and by 3.2 percent when there is not, so the same rise costs roughly twice as much in a slack economy. The difference is estimated directly, with its own standard error, and is significant at eight of seventeen horizons. Consumption is also the better outcome to study: it responds more than output, on three times as many horizons, and unlike the output response it survives the removal of the single Budget on which the published UK multiplier depends. The shock series reproduces Cloyne (2013) exactly before it is extended, which settles the dating conventions the estimate relies on. The aggregate record is too thin to separate one tax from another or to detect whether pre-announcement weakens the effect, and whose spending falls is a question for household data, which the paper identifies.",
      links: [["Download the paper","/assets/papers/when-to-raise-taxes.pdf"]]
    },

    p1: {
      g: "phd",
      k: "wp",
      s: "Ecosystem framework",
      date: "December 2024, revised October 2026",
      title: "A regional development ecosystem framework: place, people and economy in European regions and their national systems",
      plain: "About 1.5 trillion euros of European cohesion funding has been spent since 1989, and the map of lagging regions looks much as it did. The gap between what aggregate indicators report and what people in those regions experience has also grown. People working in community organizations, community colleges and workforce boards already treat a region’s places, people and economy as connected, because in their daily work they are, but the research behind their funding mostly studies one pair at a time. This paper assembles those pairwise findings into one system of three pillars, names the six pathways between them, and derives five propositions about how a region should behave in calm years and under a shock, which the next two papers test and then fit.",
      abs: "In this paper I propose a framework for understanding regional economic development as an ecosystem, in which three domains, Place-based Conditions, Human and Social Capital and Economic Activity, act on one another and do not add up as separate factors. European regional disparities have persisted despite roughly 1.5 trillion euro of cohesion funding since 1989. A gap has also grown between what aggregate indicators report and what people in those regions experience. My premise is that neither is well explained by approaches that treat infrastructure, human capital and economic performance one at a time. A substantial literature already establishes that these domains interact, one pair at a time, and several measurement traditions already score regions on many dimensions side by side. However, neither models the system as a whole. The framework draws these strands together by naming the enabling, mediating and feedback mechanisms that run between the three pillars and giving each its precedent in the literature, and from them I derive five propositions about how regions should behave in calm conditions and under a shock, which the empirical companion tests on European NUTS 2 data. The framework is presented as a dynamic system, in which regions settle into stable but shiftable configurations. Its unit is the region inside its national system, since the level a region settles at is set largely by its country, and the regional part is the balance between the pillars and the speed at which an imbalance is corrected. In the companion, the euro crisis, which entered through the economy, pulled the economic pillar away from the social and territorial ones, which is the pattern the framework implies. The pandemic, by contrast, arrived through a different channel and did not separate them. This paper is the first of a sequence. It is followed by the empirical test and by a linear state-space model of the ecosystem, fitted to an annual panel of European regions from 2000 to 2023 in the form ecologists use to estimate a community matrix from time series.",
      links: [["Download the paper","/assets/papers/ecosystem-framework.pdf"],["Slides","/assets/papers/three-pillars-slides.pdf"]]
    },

    p2: {
      g: "phd",
      k: "wp",
      s: "Two crises, one structure",
      date: "September 2025, revised October 2026",
      title: "Two crises, one structure: coupling and scale in European regional ecosystems",
      plain: "If a region’s development were a single quantity, its parts would always move together. In calm years they almost do, and one factor fits thirty-five regional indicators better than three. The two shocks in the panel then behave differently. The euro crisis, which entered through the economy, pulled the Mediterranean economy away from its people and places and left it displaced a decade later, while the pandemic moved no bloc by much. Most of the gradient between regions is a gradient between countries, and within countries anti-establishment voting follows a region’s income level more than how long it has been stuck.",
      abs: "In this paper I test the ecosystem framework of the conceptual companion, which organises regional development around three interacting pillars: Place-based Conditions, Human and Social Capital and Economic Activity. I use a cross-section of thirty-five indicators for 294 NUTS 2 regions in 2017 to 2019 and an annual panel of 152 regions in 23 countries from 2008 to 2023. Development is strongly organised in space, a single general factor fits the indicators better than three, and regions sort into four stable tiers, with between two thirds and nine tenths of the gradient lying between countries. The two shocks in the panel behave differently. Between 2008 and 2013 Mediterranean regions fell 0.52 standard deviations in relative position, with the economic pillar taking almost all of the fall and still displaced a decade later, whereas in the pandemic years no bloc moved by more than 0.18 and the South gained. The regions worst hit in one episode were no more likely than chance to be worst hit in the other. The correlation between the people and economy composites has declined since 2011, a slide that began with the recovery from the euro crisis. A development-trap index built to the standard specification agrees with the two-shock account by bloc but bears no relation to the tiers. Within countries anti-establishment voting follows a region's level, chiefly its income, at the last election and more weakly at the one before, and bears no relation to its years in the trap, with both measured before each vote. A partial-correlation network over the indicators shows that, in this panel, most of the association behind the pairwise relations reported in the literature lies on one shared development dimension. The analysis is descriptive, and mechanisms are left to the modelling companion.",
      links: [["Download the paper","/assets/papers/two-crises-one-structure.pdf"],["Supplement","/assets/papers/two-crises-one-structure-supplement.pdf"]]
    },

    p3: {
      g: "phd",
      k: "wp",
      s: "Slow ecosystems",
      date: "October 2026",
      title: "Slow ecosystems: regional development, national systems and the limits of cohesion policy in Europe, 2000 to 2023",
      plain: "The third paper estimates the dynamics the first two could only describe, fitting a model of the three domains to 210 regions over 24 years in the form ecologists use to estimate a community matrix. Everywhere the system has one slow mode and two fast ones. The slow mode is a region’s level, set mostly by its country, and less than half of a gap in level closes within a working life. Imbalances between the domains are corrected within a generation, faster where countries spend more on education and on people of working age. Cohesion money spread thinly, in seven-year cycles, to the regions least able to absorb it, could not have moved the regions it exists for, and the paper sets out what a policy fitting the system would look like.",
      abs: "Europe's regions have not converged in thirty years of cohesion policy, and the regions left behind are now where anti-system parties do best. Treating a region as an ecosystem of place, people and economy, I estimate its dynamics on 210 regions in 23 countries from 2000 to 2023 and test cohesion policy against them. Everywhere the system has one slow mode and two fast ones. The slow mode is a region's level, set mostly by the country, with a half-life of fifty-five to seventy years, and a century of regional income data agrees that less than half of a gap in level closes within a working life. The fast modes, imbalances between domains, are corrected within a generation. People lead the economy in the South, the economy leads people in the East, and in struggling regions the economy does not feed people at all. An economy hit alone, as in the euro crisis, keeps 52 per cent of its loss after twenty-five years in the South against 32 per cent in the East. Under maintained conditions about a seventh of regions stay in Europe's bottom quarter, seven of them under every assumption tried. Cohesion money, spread at an intensity that buys no relative gain, to regions that on the causal evidence absorb it least, in cycles far shorter than the decades the system takes to respond, could not have moved them. A policy fitting the system would be concentrated, sustained beyond a cycle and aimed at capacity where the economy cannot yet take the money.",
      links: [["Download the paper","/assets/papers/slow-ecosystems.pdf"]]
    },

    sage: {
      g: "sage",
      k: "pub",
      s: "Wellbeing and macroeconomics",
      date: "September 2020",
      title: "Wellbeing and macroeconomics: a SAGE approach",
      plain: "Standard macroeconomic models give a household two choices, consume or rest, and little else it can want. That is part of why they keep being surprised by how people behave in a crisis. In this model a household manages its means and its needs within an economy, a set of social relationships and a physical place, so the support people draw on when a shock hits is part of the model. That changes how a household responds to a shock and what counts as recovering from it. A recovery that restores income but leaves the household’s social ties damaged no longer counts as a full recovery.",
      abs: "The aim of this project is to develop an economic model that improves on existing ones in capturing wellbeing outcomes stemming from economic shocks. The premise is that personal welfare depends on more than just preference satisfaction and that the other determinants, which are affected by economic choices may not be captured by standard models. A theoretical approach for representing wellbeing more completely, the SAGE framework, is presented as the basis for this analysis and adapted to a Bewley-class model. Some parameters are derived from data while others are calibrated in an equilibrium state, and then a modest productivity shock is simulated to understand how groups in different wealth categories respond and what the wellbeing implications are. While the model needs further development, the results follow some general patterns observed in economic data and offer insights into behavior of the different wealth groups, including a decoupling of personal welfare dimensions following a productivity shock. In general, the introduction of wellbeing into the model shows promise for future development that better encompasses the motivations of groups and their responses to changes in their economic environments.",
      links: [["Download the paper","/assets/papers/wellbeing-macroeconomics.pdf"],["Oxford series","https://www.bsg.ox.ac.uk/research/publications/wellbeing-and-macroeconomics-sage-approach"],["QuantEcon notebook","https://conway1521.github.io/sage-bewley/"]]
    },

    sagetool: {
      g: "sage",
      k: "note",
      s: "SAGE notebook",
      date: "Finished 2024, updated 2026",
      title: "Wellbeing and macroeconomics notebook",
      plain: "The paper argues that a household’s social life belongs inside the model. The notebook lets anyone test that claim by turning the social terms up and down and seeing which results change. The parameters it exposes are the ones the paper’s argument depends on.",
      links: [["Launch the notebook","https://conway1521.github.io/sage-bewley/"],["The paper","/assets/papers/wellbeing-macroeconomics.pdf"]]
    },

    sageroad: {
      g: "sage",
      k: "note",
      s: "SAGE roadmap",
      date: "Begun 2023 · in progress",
      title: "The SAGE program: a roadmap",
      plain: "The 2020 paper put a household’s social life inside a macroeconomic model. The program built on it since 2023 makes the model modular, with four dimensions of wellbeing (material, social, agency and environment) that can each be switched on or off. A dimension earns its place only if switching it on changes what households do or how well off they are, by an amount taken from published estimates and then tested against data it was not fitted to. The macroeconomics has to hold throughout, from hours worked to the marginal propensity to consume and general equilibrium. The social dimension and the notebook were finished in 2024 and updated in 2026. Papers applying the model to France and to Europe’s regions are in progress.",
      links: [["The notebook","https://conway1521.github.io/sage-bewley/"],["The 2020 paper","/assets/papers/wellbeing-macroeconomics.pdf"]]
    },

    flows: {
      g: "labor",
      k: "wp",
      s: "Where workers come from",
      date: "Begun 2025 · working paper, November 2025, revised September 2026",
      title: "Where workers come from",
      plain: "States fund nursing school places, teacher preparation and apprenticeships on the assumption that an occupation short of people is short of graduates, and that assumption has never been checked against a full account of where an occupation’s workers come from. Building that account shows that training is the smallest inflow. Occupations are refilled mostly by people moving in from other occupations, and people make those moves at all ages. Most of the movement also cancels out, and the change in an occupation’s size is about a tenth of the flows in and out of it. That is why raising arrivals changes its size much less than one would expect.",
      abs: "Workforce policy in the United States concentrates on training, on the understanding that an occupation short of people is an occupation short of graduates. This paper builds the full account of where an occupation’s people come from and where they go, for 230 occupations, annually from 2009 to 2025 and by age band. It uses a single survey in which each person is counted once on each side, with standard errors from the 160 replicate weights the Census Bureau publishes. Arrivals from other occupations run four to twelve times arrivals from education, exceed all arrivals from outside employment in 99 percent of occupations, and occur at every age: lateral arrivals aged thirty-five and over, taken on their own, outnumber every arrival from education by nearly seven to one. Most of that movement cancels, so the change in occupation sizes that lateral movement produces is about a tenth of the gross flow. The account depends on a measurement result established first. Two independent codings of a job the survey records as unchanged disagree in 48.1 percent of cases at the detailed level, so occupational mobility cannot be measured in this survey by linking a person across interviews. The within-interview design, whose two codes share an error that cancels in the difference, is the one that measures it.",
      math: ["Workers now = held it last year + arrivals from education, other non-work and other occupations − departures to other occupations and out of work"],
      links: [["Download the paper","/assets/papers/flows-engine.pdf"]]
    },

    migration: {
      g: "labor",
      k: "wp",
      s: "Interstate migration",
      date: "Begun 2025 · working paper, March 2026, revised September 2026",
      title: "Where occupations move",
      plain: "Interstate migration is usually measured for people and rarely for occupations, even though most of the rules that make moving hard are tied to the job. This paper builds state-to-state flows by occupation from 59.8 million census records and measures what share of each occupation a state brings in from other states each year. The share varies about fifteenfold, from tool and die makers to sailors. Licensing, the barrier most often blamed for low mobility, explains very little of it. Physicians, who need a license in each state, are near the top of the ranking, and postal workers are near the bottom. The people who arrive are always younger than the workforce they join. Flows into a state that pays ten percent more are about one percent higher, while distance counts six times as much, so any pay premium a state is likely to offer changes its intake by only a few percent. The gravity model is given no information about how large each occupation is in each state. Where a state draws far more of an occupation than the model predicts, the flows are picking up a concentration of that occupation by themselves, and that measure agrees with an independent employer survey.",
      abs: "Interstate migration in the United States has been measured for persons and rarely for occupations, although most of the rules that make moving difficult attach to the job. This paper builds bilateral interstate migration flows by occupation from nineteen vintages of American Community Survey microdata, 59.8 million person records across 51 jurisdictions and 475 harmonized occupation codes, and measures the share of each state’s occupational workforce arriving from another state within the year, with design-based standard errors. That share varies close to fifteenfold across occupations, from tool and die makers to sailors, and licensure explains almost none of the ordering. Arrivals are younger than the workforce they join in every occupation measured, and arrivals and leavers have the same mean age cell by cell, both about seven years younger than the incumbents. A Poisson pseudo-maximum-likelihood gravity model with origin-year, destination-year, occupation-year, and state-pair effects puts the wage elasticity of flows at 0.114 and the distance elasticity at −0.72, some six times as large. The benchmark omits employment by state and occupation, so its residual recovers occupational concentration from the flows alone. The concentrations hold their position across two decades and agree with the location quotient in an independent establishment survey, while three pre-specified tests on wage growth return tightly estimated nulls.",
      math: ["E[ flowₒ→d^kt ] = exp( η ln(w_dkt/w_okt) + β ln distₒd + λ contigₒd + φₒt + ψ_dt + θ_kt + μₒd )"],
      links: [["Download the paper","/assets/papers/occupation-migration.pdf"]]
    },

    leaving: {
      g: "labor",
      k: "draft",
      s: "Leaving work",
      date: "Begun 2025 · in progress",
      title: "Leaving work: realized and official rates of leaving the labor force by occupation",
      plain: "A hospital, a school district or a state agency that plans for an occupation has to assume how many of its people will leave work. The official rate is predicted from a model estimated on broad occupational groups, because samples for detailed occupations are small. This paper asks how far those predicted rates agree with what happens in detailed occupations, and what last year’s holders of an occupation are doing a year on.",
      links: []
    },

    training: {
      g: "labor",
      k: "draft",
      s: "Training outcomes",
      date: "Begun 2026 · in progress",
      title: "Do publicly funded trainees work in the field they trained for?",
      plain: "The federal workforce system pays for training in a named occupation, and its public records report whether trainees found work but not whether the work is in the field they trained for. This paper builds a match measure from public records, judges it against what chance would produce, and asks whether training buys a better job. The work on how far trainees move from their previous occupation is folded into it.",
      links: []
    },

    moves: {
      g: "labor",
      k: "note",
      s: "Do skills predict moves?",
      date: "Begun 2025 · research note, January 2026, revised September 2026",
      title: "Do skills predict moves?",
      plain: "A whole industry now advises workers and workforce boards with similarity scores. Two occupations whose skill profiles overlap at 98.5 percent are presented as a few months of retraining apart, and a machinist is steered toward industrial maintenance. A high score says a move is possible, but it does not show that workers make it. If the scores are wrong, the advice sends people toward jobs they will not get and public money after them. The data to check this is public, and the check is cheap. The paper sets up the test as a gravity model on the occupation changes that the CPS March supplement records within a single interview, the only design in that survey that separates real moves from coding noise. The model separates how much traffic flows between two occupations, which similarity should explain, from its direction, which the wage difference should explain, and it will compare the field’s thresholds at 0.985, 0.970 and 0.950 with where the flows drop off.",
      abs: "A whole advisory industry now tells workers and workforce boards which occupations they can move to, and it does so with a similarity score. The score is a claim about feasibility, that a person with one profile could do the other job. Whether anyone makes the move is a different claim, and the advice depends on it, yet it has not been tested at scale, although the data to test it are public and the test costs little. This paper specifies the test and fixes its inputs. Observed flows between occupations come from the March supplement of the Current Population Survey, which records in one interview what a person does now and what they did last year. Two independent codings of a job the survey itself records as unchanged disagree 48.1 percent of the time at the detailed level, so a matrix linked across interviews measures coding disagreement. The within-interview design cancels that error, and it is the one used here. Similarity is a composite over the skills, knowledge, and work activities the Occupational Information Network records, held as 798,342 occupation pairs above a similarity of 0.5, and the tier thresholds used in workforce practice sit at 0.985, 0.970, and 0.950. The model is a gravity equation estimated by Poisson pseudo-maximum likelihood on gross flows, with origin and destination effects that absorb the size of each occupation. A flexible version of the model enters similarity in bins instead of as one elasticity, locates where observed flows break, and sets the breaks against the three thresholds in use. Licensing is read from the residuals rather than entered as a regressor: the pairs that similarity places close and that nobody is observed crossing are a map of what the score misses, and the residuals show whether that map concentrates in licensed occupations.",
      math: ["E[flowᵢ→ⱼ] = exp(η ln simᵢⱼ + β ln(wⱼ/wᵢ) + αᵢ + δⱼ), with symmetric pair effects added to identify β from direction alone"],
      links: [["Download the note","/assets/papers/skills-and-moves.pdf"]]
    },

    shortage: {
      g: "labor",
      k: "note",
      s: "Shortage arithmetic",
      date: "Begun 2025 · research note, March 2026, revised September 2026",
      title: "Shortage arithmetic",
      plain: "Headline shortage figures subtract the supply for an occupation from the demand for that same occupation, as if every opening had to be filled by someone newly trained for it. The occupational flow account shows that in every occupation it covers, more people arrive from other occupations than from education, by a median factor of 19. For five healthcare occupations in North Carolina, arrivals from other occupations at the observed rate equal 49 to 158 percent of the openings the state projects each year, so the channel the standard calculation leaves out is comparable in size to the openings themselves. The paper writes down the correction tier by tier of skill adjacency, with every term measured and capped by history, and infers licensing barriers from the occupation pairs that no one crosses.",
      abs: "An occupational shortage figure is a subtraction. A projection of the positions an occupation will need to fill is set against a count of the people being trained for it, and the difference is published as the number a state is short. The subtraction assumes something that is never written down: that a position in the occupation can be filled only by a person newly trained for exactly that occupation, so that nobody arrives from anywhere else. The occupational flow account built in the companion paper (Conway, 2025) measures where an occupation’s people come from, and in every one of the 172 occupations it covers, arrivals from another occupation exceed arrivals from education, by a median factor of 19. This paper writes the correction down and measures its first term. For five healthcare occupations in North Carolina, arrivals from another occupation at the rate the national account observes come to between 49 and 158 percent of the annual openings the state projection expects. Those arrivals are gross and are matched by departures of similar size, and the projection already nets part of that movement out of its replacement figure, so the table cannot be read as a shortage half the size of its headline. The table establishes instead that movement from adjacent occupations supplies these occupations on a scale comparable to the openings themselves, and that a supply count consisting of graduates counts the smallest inflow. A raw gap is reduced, tier by tier of skill adjacency, by the workers the adjacent occupations can release into it. Licensing is a reading of the results rather than a parameter.",
      math: ["G* = G − Σₜ min( Σⱼ∈ₜ mⱼᵢ Sⱼ , m̄ₜᵢ Eᵢ ), the raw gap less what each adjacency tier releases at observed transition rates, capped by history"],
      links: [["Download the note","/assets/papers/shortage-arithmetic.pdf"]]
    },

    skillsdna: {
      g: "ai",
      k: "wp",
      s: "AI exposure at three levels",
      date: "Begun 2025 · working paper, May 2026, revised September 2026",
      title: "AI exposure at three levels",
      plain: "A labor market can be described three ways at once: by what each occupation is paid, by the tasks each occupation performs, and by the skills those tasks use. The three descriptions have to add up to the same wage bill, but they cannot all be tested the same way. Wages are observed once per occupation, so a description with more tasks than occupations will always fit the data, while one with fewer skills than occupations can be rejected. Each research team that has scored AI exposure scored one of these three levels. This paper places each score at the level where it was collected, and finds that the capability measures are one measure under three names. It then tests realized wages and employment through 2025. No skill group has shifted beyond its normal year-to-year variation, and every break in the series comes with the pandemic, two years before generative AI. So far generative AI has not shown up in the number of jobs or in what they pay, and the paper sets out the test on job postings that should pick it up first.",
      abs: "Measures of exposure to generative artificial intelligence are collected at three levels of the labor market, occupations, tasks, and skills, and compared as though they described one object. This paper writes the labor market as one wage bill at three levels and counts what each can identify: 829 observed wages against an identity, against 17,383 task prices that no wage data can contradict, and against 25 skill prices that can. Which quantities in this literature are testable therefore follows from how many statements the analysts of the Occupational Information Network wrote at each level. The leading capability measures are, on inspection, one construct under three names. Converting the Eloundou task ratings to abilities reproduces the Felten ability scores in the right order across AI applications, the Srinivasan automation score is the Eloundou construction re-run on a later release, and a quadratic in automation explains 77 percent of augmentation. The skill layer supports a structure of about twenty-five dimensions, which explains occupational wages at a cross-validated 0.648 in the Network’s own named groups, and whose loadings are informative as changes over time but uninformative as levels. On a balanced panel of 693 occupations from 2012 to 2025, nothing in realized wages or employment has moved beyond ordinary volatility since language models were released. No skill group moved by more than 1.51 times its own year-to-year variation, and every deviation from the pre-2020 path begins with the pandemic. If the technology is changing what employers want, the change should appear in job postings before it appears in employment, and the paper specifies that test on the task composition of postings.",
      math: ["Y = Σₒ Eₒ wₒ, the wage bill as an identity over 829 occupations","wₒ = Σᵢ βₒᵢ pᵢ, an occupation’s wage as task shares times 17,383 task prices, never identified","pᵢ = Σₖ γᵢₖ πₖ, a task’s price as skill content times 25 skill prices, which can fail"],
      links: [["Download the paper","/assets/papers/skills-dna.pdf"],["The production system","/portfolio/skills-framework/"]]
    },

    limits: {
      g: "ai",
      k: "draft",
      s: "Measurement limits",
      date: "Begun 2025 · in progress",
      title: "Measurement limits: what standard task data can identify",
      plain: "Most research on AI and work rests on the task data of the Occupational Information Network. This paper asks which quantities those data can support: which can be contradicted by wages and which cannot, and where conventional inference reports change that is not there.",
      links: []
    },

    employers: {
      g: "ai",
      k: "draft",
      s: "What employers ask for",
      date: "Begun 2026 · in progress",
      title: "What employers ask for",
      plain: "Is AI changing what employers ask for, and does that change lead pay and jobs? A change in demand should appear in job ads before it appears in employment. This paper judges the content of ads against what ordinary years look like, separates exposure to AI from the business cycle and from the wider contraction in technology hiring, and tests whether ad content predicts pay and employment beyond ad volume.",
      links: []
    },

    atrisk: {
      g: "ai",
      k: "draft",
      s: "Activities at risk",
      date: "Begun 2026 · in progress",
      title: "Activities at risk",
      plain: "Where could AI enter work but has not yet? This paper works at the level of activities rather than jobs or skills, maps the activities AI could do against those the usage data show it doing, and values the difference in wages. Its predictions about where AI enters next are registered before the data that test them arrive.",
      links: []
    },

    exposure: {
      g: "ai",
      k: "note",
      s: "AI exposure measures",
      date: "Begun 2025 · research note, June 2026, revised September 2026",
      title: "Does the choice of AI-exposure measure matter?",
      plain: "At least six serious measures score how exposed each occupation is to AI, and studies that report a share of jobs at risk usually pick one without saying why. If the measures disagree, any ranking of at-risk occupations reflects the choice of measure as well as the labor market. The usual comparison is a rank correlation, which weights an occupation of five hundred people the same as one of three million and is driven by the extremes, where all the measures agree. This note specifies a comparison of the measures by the wage dollars they classify as exposed, at a common cutoff and decile by decile, holding everything else fixed, and states in advance what each result would mean.",
      abs: "At least six serious measures score how exposed each occupation is to artificial intelligence, and a study that reports the share of jobs at risk picks one of them, usually without saying why. If the measures agree, the choice is harmless. If they disagree, then every ranking of at-risk occupations, every regional exposure map, and every policy brief built on one of them reflects the instrument as well as the labor market, and no reader can tell by how much. This note specifies the comparison that policy needs and fixes its statistic. Rank correlations, the usual comparison, weight an occupation of five hundred people and one of three million equally, and they are dominated by the tails, where every measure agrees that telemarketers are exposed and roofers are not. Policy questions are posed on people and on dollars, and they are posed in the middle of the distribution, where the marginal occupation is classified one way or the other. The statistic is therefore the share of the wage bill on which two measures disagree about whether an occupation is exposed, at a common cut, together with the agreement rate by decile of the pooled ranking, which separates the extremes from the interior. The design holds population, occupational base, vintage, and every downstream computation fixed and varies only the measure, which is possible because the model built alongside the companion paper takes each measure as an interchangeable input. The readings that decide whether the choice matters are written down before the numbers are.",
      math: ["Dₐᵦ(q) = Σₒ ωₒ |1[o ∈ Xₐ(q)] − 1[o ∈ Xᵦ(q)]|, the share of the wage bill one measure calls exposed and the other does not"],
      links: [["Download the note","/assets/papers/exposure-measures.pdf"],["The production system","/portfolio/skills-framework/"]]
    },

    roles: {
      g: "ds",
      k: "note",
      s: "Roles not titles",
      date: "Begun 2025 · in progress",
      title: "Roles not titles: a role taxonomy anchored to the federal occupation system",
      plain: "Federal occupation codes are too coarse for employers and job titles are too noisy. This note asks whether a finer taxonomy of roles can be built that nests strictly inside the federal codes, including the residual “All other” categories that hold so many workers.",
      links: []
    },

    coding: {
      g: "ds",
      k: "note",
      s: "Occupation autocoding",
      date: "Begun 2025 · in progress",
      title: "Classification beats retrieval: the ceiling for occupational autocoding",
      plain: "Assigning a detailed occupation code to a job title or a job ad is the first step in most labor-market work with text. This note asks how accurately it can be done at the eight-digit level, and whether a trained classifier or a retrieval approach gets closer to the ceiling.",
      links: []
    },

    beige: {
      g: "ds",
      k: "note",
      s: "Beige Book signals",
      date: "Begun 2026 · in progress",
      title: "Reading the Beige Book with LLMs",
      plain: "Eight times a year the twelve Federal Reserve districts publish qualitative reports full of labor market detail, collected because the hard statistics arrive too late to be useful. Economists have mined them with dictionaries and hand-coding for decades. An LLM can pull structured labor sentiment out of each release for about thirteen cents, so the full forty-year archive costs a few hundred dollars to process. Once the archive is on the same district-by-quarter basis as the official series, it can be tested against them.",
      abs: "The Federal Reserve Beige Book carries district-level qualitative labor-market reporting eight times a year, collected because hard statistics arrive with a lag, and it has historically been analyzed with keyword dictionaries or hand-coding. This note applies structured LLM extraction across the full forty-year archive at roughly thirteen cents per release, producing labor-market sentiment on the same district-by-quarter grain as the official series, with every extracted signal carrying the sentence it came from. The evaluation tests whether the extracted series carries information beyond the hard series it should lead, with the test specified before the extraction is scored. The resulting dataset is released publicly.",
      links: []
    }
  };

  /* Links. A link means one piece builds on or feeds the other. */
  var E = [
    ['antic', 'fiscal'],
    ['p1', 'p2'], ['p2', 'p3'], ['fiscal', 'p3'],
    ['sage', 'sagetool'], ['sage', 'sageroad'], ['sage', 'p1'], ['sageroad', 'p3'],
    ['flows', 'migration'], ['flows', 'leaving'], ['flows', 'training'],
    ['moves', 'migration'], ['moves', 'training'], ['shortage', 'flows'],
    ['skillsdna', 'limits'], ['skillsdna', 'employers'], ['skillsdna', 'atrisk'],
    ['employers', 'atrisk'], ['exposure', 'skillsdna'],
    ['skillsdna', 'flows'], ['employers', 'training'],
    ['roles', 'employers'], ['coding', 'flows'], ['beige', 'shortage']
  ];

  /* Where each program settles. The layout is a live simulation, these
     only give each program a home so the picture is stable from load to load. */
  var HOME = {
    phd: [210, 140], sage: [150, 420], fiscal: [400, 470],
    ds: [470, 190], ai: [770, 150], labor: [740, 420]
  };

  var W = 960, H = 600;
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

  var svg = graph.querySelector('svg');
  var base = graph.getAttribute('data-base') || '';
  var gEdges = document.getElementById('rg-edges');
  var gNodes = document.getElementById('rg-nodes');
  var detail = document.getElementById('rg-detail');
  var edgeEls = [], nodeEls = {}, adj = {};
  var selected = null;

  function url(h) {
    return (h && h.charAt(0) === '/') ? base.replace(/\/$/, '') + h : h;
  }

  var ids = Object.keys(N);
  ids.forEach(function (id) { adj[id] = []; });
  E.forEach(function (p) { adj[p[0]].push(p[1]); adj[p[1]].push(p[0]); });

  /* size grows with the number of links, as in a note graph */
  function radius(n, id) {
    var d = adj[id].length;
    if (n.k === 'note') return 3 + Math.sqrt(d) * 0.9;
    return 5.5 + Math.sqrt(d) * 1.7;
  }

  /* a seeded jitter, so every visitor sees the same settled picture */
  var seed = 7;
  function rand() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }

  ids.forEach(function (id) {
    var n = N[id], h = HOME[n.g];
    n.x = h[0] + (rand() - 0.5) * 80;
    n.y = h[1] + (rand() - 0.5) * 80;
    n.vx = 0; n.vy = 0;
    n.r = radius(n, id);
    n.hw = Math.max(n.r, n.s.length * (n.k === 'note' ? 2.9 : 3.3)) + 6;
  });

  /* ---------- forces ---------- */
  var alpha = 1;
  function tick() {
    var i, j, a, b, dx, dy, d2, d, f;
    for (i = 0; i < ids.length; i++) {
      a = N[ids[i]];
      for (j = i + 1; j < ids.length; j++) {
        b = N[ids[j]];
        dx = b.x - a.x; dy = b.y - a.y;
        d2 = dx * dx + dy * dy || 0.01;
        d = Math.sqrt(d2);
        f = 4200 / d2;
        var min = a.r + b.r + 26;
        if (d < min) f += (min - d) * 0.25;
        dx /= d; dy /= d;
        a.vx -= dx * f * alpha; a.vy -= dy * f * alpha;
        b.vx += dx * f * alpha; b.vy += dy * f * alpha;
      }
    }
    E.forEach(function (p) {
      a = N[p[0]]; b = N[p[1]];
      dx = b.x - a.x; dy = b.y - a.y;
      d = Math.sqrt(dx * dx + dy * dy) || 0.01;
      var rest = (a.g === b.g) ? 90 : 170;
      f = (d - rest) * 0.035 * alpha;
      dx /= d; dy /= d;
      a.vx += dx * f; a.vy += dy * f;
      b.vx -= dx * f; b.vy -= dy * f;
    });
    /* keep labels apart: each node occupies its dot and the label under it */
    for (i = 0; i < ids.length; i++) {
      a = N[ids[i]];
      for (j = i + 1; j < ids.length; j++) {
        b = N[ids[j]];
        dx = b.x - a.x; dy = b.y - a.y;
        var ox = a.hw + b.hw - Math.abs(dx);
        var oy = (dy > 0 ? a.r + 19 + b.r : b.r + 19 + a.r) - Math.abs(dy);
        if (ox > 0 && oy > 0) {
          if (ox < oy * 1.6) { f = (dx < 0 ? -1 : 1) * ox * 0.12; a.vx -= f; b.vx += f; }
          else { f = (dy < 0 ? -1 : 1) * oy * 0.12; a.vy -= f; b.vy += f; }
        }
      }
    }
    ids.forEach(function (id) {
      var n = N[id], h = HOME[n.g];
      n.vx += (h[0] - n.x) * 0.014 * alpha;
      n.vy += (h[1] - n.y) * 0.014 * alpha;
      if (n.fixed) { n.vx = 0; n.vy = 0; return; }
      n.vx *= 0.62; n.vy *= 0.62;
      n.x += n.vx; n.y += n.vy;
      n.x = Math.max(n.hw + 4, Math.min(W - n.hw - 4, n.x));
      n.y = Math.max(24, Math.min(H - 30, n.y));
    });
    alpha = Math.max(alpha * 0.985, 0.002);
  }

  /* ---------- drawing ---------- */
  E.forEach(function (p) {
    var a = N[p[0]], b = N[p[1]];
    var thin = a.k === 'note' || b.k === 'note';
    var line = el('line', { class: 'rg-edge' + (thin ? ' rg-edge--note' : '') });
    gEdges.appendChild(line);
    edgeEls.push({ el: line, a: p[0], b: p[1] });
  });

  ids.forEach(function (id) {
    var n = N[id];
    var g = el('g', { class: 'rg-node rg-node--' + n.k, tabindex: '0', role: 'button', 'aria-label': n.title });
    n.sel = el('circle', { r: n.r + 7, class: 'rg-sel' });
    g.appendChild(n.sel);
    if (n.k === 'pub') { n.halo = el('circle', { r: n.r + 4, class: 'rg-halo' }); g.appendChild(n.halo); }
    n.dot = el('circle', { r: n.r, class: 'rg-dot rg-dot--' + n.k });
    g.appendChild(n.dot);
    n.label = el('text', { 'text-anchor': 'middle', class: 'rg-label rg-label--' + n.k });
    n.label.textContent = n.s;
    g.appendChild(n.label);
    n.hit = el('circle', { r: Math.max(n.r + 8, 14), class: 'rg-hit' });
    g.appendChild(n.hit);
    gNodes.appendChild(g);
    nodeEls[id] = g;

    g.addEventListener('mouseenter', function () { if (!dragging) light(id); });
    g.addEventListener('mouseleave', function () { if (!dragging) unlight(); });
    g.addEventListener('focus', function () { light(id); });
    g.addEventListener('blur', function () { unlight(); });
    g.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); open(id); }
    });
    g.addEventListener('pointerdown', function (ev) { startDrag(ev, id); });
  });

  function draw() {
    edgeEls.forEach(function (e) {
      var a = N[e.a], b = N[e.b];
      e.el.setAttribute('x1', a.x.toFixed(1)); e.el.setAttribute('y1', a.y.toFixed(1));
      e.el.setAttribute('x2', b.x.toFixed(1)); e.el.setAttribute('y2', b.y.toFixed(1));
    });
    ids.forEach(function (id) {
      var n = N[id], x = n.x.toFixed(1), y = n.y.toFixed(1);
      [n.sel, n.dot, n.hit, n.halo].forEach(function (c) {
        if (c) { c.setAttribute('cx', x); c.setAttribute('cy', y); }
      });
      n.label.setAttribute('x', x);
      n.label.setAttribute('y', (n.y + n.r + 13).toFixed(1));
    });
  }

  /* settle most of the way before the first paint, then let it breathe */
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  for (var t = 0; t < (still ? 600 : 260); t++) tick();
  draw();

  var running = false;
  function loop() {
    tick(); draw();
    if (alpha > 0.004 || dragging) requestAnimationFrame(loop);
    else running = false;
  }
  function reheat(to) {
    alpha = Math.max(alpha, to);
    if (!running && !still) { running = true; requestAnimationFrame(loop); }
  }
  reheat(0.12);

  /* ---------- dragging, as in a note graph ---------- */
  var dragging = null, moved = 0, start = null;
  function point(ev) {
    var p = svg.createSVGPoint();
    p.x = ev.clientX; p.y = ev.clientY;
    return p.matrixTransform(svg.getScreenCTM().inverse());
  }
  function startDrag(ev, id) {
    if (ev.button !== undefined && ev.button !== 0) return;
    dragging = id; moved = 0; start = point(ev);
    N[id].fixed = true;
    light(id);
    graph.classList.add('is-dragging');
    if (ev.target.setPointerCapture) ev.target.setPointerCapture(ev.pointerId);
    ev.preventDefault();
  }
  svg.addEventListener('pointermove', function (ev) {
    if (!dragging) return;
    var p = point(ev), n = N[dragging];
    moved = Math.max(moved, Math.abs(p.x - start.x) + Math.abs(p.y - start.y));
    n.x = Math.max(20, Math.min(W - 20, p.x));
    n.y = Math.max(20, Math.min(H - 20, p.y));
    reheat(0.3);
  });
  function endDrag() {
    if (!dragging) return;
    var id = dragging;
    N[id].fixed = false;
    dragging = null;
    graph.classList.remove('is-dragging');
    if (moved < 4) open(id); else unlight();
  }
  svg.addEventListener('pointerup', endDrag);
  svg.addEventListener('pointercancel', endDrag);

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
      (n.abs ?
        '<div class="rg-tabs">' +
          '<button type="button" class="rg-tab is-on" data-tab="plain" aria-pressed="true">Description</button>' +
          '<button type="button" class="rg-tab" data-tab="abs" aria-pressed="false">Abstract</button>' +
        '</div>' : '<div class="rg-tabs"></div>') +
      '<p class="rg-pane" data-pane="plain">' + esc(n.plain) + '</p>' +
      (n.abs ? '<div class="rg-pane is-hidden" data-pane="abs"><p>' + esc(n.abs) + '</p>' + math + '</div>' : '') +
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
    ['Labor markets', ['flows', 'migration', 'leaving', 'training', 'moves', 'shortage']],
    ['AI and work', ['skillsdna', 'limits', 'employers', 'atrisk', 'exposure']],
    ['Regional development', ['p1', 'p2', 'p3']],
    ['Fiscal policy', ['antic', 'fiscal']],
    ['Wellbeing and macroeconomics', ['sage', 'sagetool', 'sageroad']],
    ['Data science notes', ['roles', 'coding', 'beige']]
  ];
  var GLYPH = { pub: '◉', wp: '●', draft: '○', note: '·' };
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
        b.className = 'rg-lrow' + (n.k === 'note' || n.k === 'draft' ? ' is-wip' : '');
        b.innerHTML = '<span class="glyph">' + GLYPH[n.k] + '</span><span class="t">' + esc(n.title) + '</span>';
        b.addEventListener('click', function () { open(id); });
        d.appendChild(b);
      });
      flist.appendChild(d);
    });
  }
})();
