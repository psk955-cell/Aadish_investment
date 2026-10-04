import {
  ServiceItem,
  UniverseCategory,
  MarketUpdate,
  BlogPost,
  Testimonial,
  SuccessStory,
} from '../types';

export const COMPANY_INFO = {
  name: 'Aadish Investments',
  tagline: 'Trusted financial guidance for every life goal.',
  supportingLine:
    'From protection and insurance to investments, retirement planning, and wealth creation—Aadish Investments helps you make informed financial decisions with confidence.',
  established: 2014,
  location: {
    address: '580, Narayan Peth',
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    pincode: '411030',
  },
  contacts: {
    shrinivas: {
      name: 'Shrinivas Kulkarni',
      role: 'Co-Founder & Financial Advisor',
      phone: '+91 99606 88388',
      phoneRaw: '919960688388',
      email: 'aadishinvestment@gmail.com',
      experienceYears: '12+ Years Industry Experience',
      focus: 'Life Insurance, MDRT Honoree, Wealth Creation & Goal Planning',
      image: '/src/assets/images/shrinivas_portrait_official_1790591856519.jpg',
      awardImage: '/src/assets/images/mdrt_award_recognition_1790590962428.jpg',
      bio: 'Shrinivas Kulkarni co-founded Aadish Investments in 2014, continuing a proud second-generation family legacy in life insurance and financial protection. Over the last decade, he has achieved MDRT (Million Dollar Round Table) recognition connected with LIC for 10 consecutive years. His advisory philosophy centers on deep client relationships, transparent risk management, and disciplined execution.',
    },
    prachi: {
      name: 'Prachi Kulkarni',
      role: 'Co-Founder & Financial Advisor',
      phone: '+91 99607 88388',
      phoneRaw: '919960788388',
      email: 'aadishinvestment@gmail.com',
      experienceYears: '10+ Years Industry Experience',
      focus: 'Client Relationship Management, Health & Mediclaim, Systematic Investments',
      image: '/src/assets/images/prachi_portrait_official_1790592294984.jpg',
      bio: 'Prachi Kulkarni leads client onboarding and operational advisory at Aadish Investments. With specialized expertise in health insurance portfolios, comprehensive family mediclaim analysis, and systematic investment planning, she ensures clients receive swift, empathetic, and detail-oriented financial support at every life stage.',
    },
  },
  email: 'aadishinvestment@gmail.com',
  workingHours: 'Monday – Saturday: 10:00 AM – 7:30 PM IST (Sunday by appointment)',
  socialLinks: {
    instagram: 'https://instagram.com/aadish_investments',
    linkedin: 'https://linkedin.com/in/shrinivas-kulkarni-aadish',
  },
  disclaimerFootnote:
    '*Figures and recognitions are based on internal business records and are subject to periodic updates and verification. Investment outcomes vary by client, market conditions, product selection, and time horizon. Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.',
  stats: [
    { label: 'Established', value: '2014', sub: 'Over a Decade of Trust' },
    { label: 'AUM Milestone', value: '₹100 Cr+*', sub: 'Subject to verification' },
    { label: 'Life Insurance Customers', value: '2,000+*', sub: 'Second-Gen Legacy' },
    { label: 'Wealth-Creation Clients', value: '1,000+*', sub: 'Disciplined Journeys' },
    { label: 'MDRT Recognition', value: '10 Years*', sub: 'Excellence in LIC Advisory' },
  ],
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'mutual-funds-sip',
    title: 'Mutual Funds & SIPs',
    category: 'investment',
    shortDesc:
      'Disciplined, goal-oriented systematic investment plans (SIPs) and lump-sum fund distribution backed by asset allocation.',
    fullDesc:
      'Systematic Investment Plans (SIPs) enable you to invest fixed amounts at regular intervals into selected mutual fund schemes. This instills rupee-cost averaging and compounding over long horizons without attempting to time the market.',
    features: [
      'Goal-linked equity, hybrid, and debt fund mapping',
      'Step-up SIP strategies to mirror annual income increments',
      'Lump-sum deployment with systematic transfer plans (STP)',
      'Regular portfolio rebalancing against asset allocation targets',
    ],
    suitability: 'Ideal for salaried professionals, business owners, and long-term goal builders.',
    regulatoryNote:
      'Mutual Fund investments are subject to market risks. Read all scheme related documents carefully. Aadish Investments operates as an AMFI-registered Mutual Fund Distributor (ARN verification pending publication).',
    icon: 'TrendingUp',
    badge: 'Popular',
  },
  {
    id: 'goal-based-planning',
    title: 'Goal-Based Financial Planning',
    category: 'investment',
    shortDesc:
      'Transform life aspirations into mathematical milestones: higher education, home purchase, and children’s future.',
    fullDesc:
      'We work with you to quantify timelines, inflation rates, and target corpuses for your major milestones. By matching time horizons with appropriate asset categories, we reduce panic during market fluctuations.',
    features: [
      'Child education & overseas degree funding calculators',
      'Down-payment planning for residential real estate',
      'Financial buffer and emergency fund structuring (6–12 months)',
      'Dedicated milestone tracking and annual review sessions',
    ],
    suitability: 'Couples, young parents, and individuals planning major milestones over 3–20 years.',
    regulatoryNote:
      'Financial planning frameworks provide educational and goal mapping structure. Outcomes depend on execution and market conditions.',
    icon: 'Target',
  },
  {
    id: 'tax-retirement-planning',
    title: 'Tax & Retirement Planning',
    category: 'investment',
    shortDesc:
      'Build a self-sustaining post-retirement income stream while optimizing annual tax outgo within regulatory frameworks.',
    fullDesc:
      'Retirement planning requires balancing longevity risk, escalating healthcare inflation, and sustainable withdrawal rates. We help structure long-term accumulation and stable pension/SWP drawdown strategies.',
    features: [
      'Systematic Withdrawal Plan (SWP) modeling for tax-efficient cash flow',
      'NPS, PPF, and tax-saving mutual fund (ELSS) allocations',
      'Post-retirement healthcare corpus isolation',
      'Inflation-adjusted purchasing power preservation',
    ],
    suitability: 'Working professionals in their 30s, 40s, and 50s preparing for financial independence.',
    regulatoryNote:
      'Tax rules are subject to change by the Ministry of Finance. Investors are advised to consult a qualified tax professional for statutory filings.',
    icon: 'CalendarClock',
  },
  {
    id: 'wealth-creation-allocation',
    title: 'Wealth Creation & Asset Allocation',
    category: 'investment',
    shortDesc:
      'Risk-adjusted portfolio architecture balancing equity growth, debt stability, and liquid reserves.',
    fullDesc:
      'Long-term wealth creation requires appropriate planning, disciplined investing, diversification, and periodic review. Returns are not assured and depend on market conditions and product performance.',
    features: [
      'Strategic vs. Tactical asset allocation modeling',
      'Risk profiling matching financial tolerance and behavioral capacity',
      'Drawdown mitigation during volatile equity cycles',
      'Periodic rebalancing triggers to harvest gains and restore target weights',
    ],
    suitability: 'Investors seeking disciplined compounding over 7+ year market cycles.',
    regulatoryNote:
      'Past performance is not an indicator of future results. Asset diversification mitigates specific asset risk but does not eliminate market risk.',
    icon: 'PieChart',
  },
  {
    id: 'life-insurance-lic',
    title: 'Life Insurance & LIC Solutions',
    category: 'insurance',
    shortDesc:
      'Comprehensive term life cover, pure protection, LIC savings plans, maturity service, and family financial security.',
    fullDesc:
      'With over a decade of dedication and 10 consecutive years of MDRT recognition in life insurance advisory, we help families establish adequate human life value (HLV) coverage so loved ones are protected unconditionally.',
    features: [
      'Human Life Value (HLV) calculation for optimal term coverage',
      'LIC endowment, money-back, and pension plan advisory',
      'Assistance with policy revivals, address updates, and nominee assignments',
      'Maturity processing and proactive death claim documentation guidance',
    ],
    suitability: 'Primary breadwinners, business partners, and parents protecting dependents.',
    regulatoryNote:
      'Insurance is the subject matter of solicitation. Policy terms, exclusions, and waiting periods apply. Claim decisions are made strictly by the insurer.',
    icon: 'ShieldCheck',
    badge: 'MDRT 10-Yr Recognition',
  },
  {
    id: 'health-mediclaim-general',
    title: 'Health, Mediclaim & General Insurance',
    category: 'insurance',
    shortDesc:
      'Family floater health plans, super top-ups, critical illness safeguards, motor, and personal accident covers.',
    fullDesc:
      'A single hospitalization can derail years of investment savings. We analyze policy terms including room rent capping, co-payment clauses, PED waiting periods, and network hospital cashless facilities.',
    features: [
      'Base family floater + high-deductible super top-up combination (cost-efficient)',
      'Review of sub-limits, modern treatment allowances, and restore benefits',
      'Critical illness and personal accident disability riders',
      'Dedicated guidance during emergency admission and cashless TPA processes',
    ],
    suitability: 'Individuals, nuclear and joint families, and senior citizen parents.',
    regulatoryNote:
      'Pre-existing disease declarations and policy waiting periods govern health claims. Complete disclosures ensure smooth claim assessments.',
    icon: 'HeartHandshake',
  },
  {
    id: 'hni-nri-solutions',
    title: 'HNI & NRI Investment Solutions',
    category: 'specialized',
    shortDesc:
      'Tailored India-focused wealth structuring, NRE/NRO compliance, FEMA guidance, and dedicated advisory.',
    fullDesc:
      'Non-Resident Indians and High-Net-Worth individuals face unique taxation, repatriation rules, and currency considerations. We provide clear, friction-free onboarding and digital review channels.',
    features: [
      'NRE / NRO bank account linkage and PIS / non-PIS investment channels',
      'FEMA compliance and double taxation avoidance agreement (DTAA) awareness',
      'High-conviction portfolio distribution and bespoke family asset review',
      'Virtual consultation across international time zones (US, Gulf, UK, SG)',
    ],
    suitability: 'NRIs in GCC, USA, UK, Singapore, and domestic Indian HNIs.',
    regulatoryNote:
      'Subject to RBI, FEMA, and SEBI regulations governing non-resident investment in Indian financial instruments.',
    icon: 'Globe',
  },
  {
    id: 'pms-aif-nfo-ipo',
    title: 'PMS, AIF, SIF, NFO & IPO Information',
    category: 'specialized',
    shortDesc:
      'Sophisticated high-ticket strategies, private equity/credit insights, and curated public offer educational analysis.',
    fullDesc:
      'For accredited investors and seasoned wealth builders seeking specialized strategies. We provide transparent fee breakdowns, regulatory status disclosure, and objective risk evaluations.',
    features: [
      'Portfolio Management Services (PMS) overview (min ₹50 Lakh ticket size as per SEBI)',
      'Alternative Investment Funds (AIF Cat I, II, III) eligibility briefings',
      'New Fund Offer (NFO) mandate review and category fit evaluation',
      'Initial Public Offering (IPO) educational prospectus breakdowns',
    ],
    suitability: 'Accredited investors, business founders, and family offices.',
    regulatoryNote:
      'PMS & AIF products carry higher minimum capital requirements and risk profiles. Aadish Investments provides informational briefings in distributor/referral capacity under applicable SEBI guidelines.',
    icon: 'Layers',
  },
];

export const GOALS_LIST = [
  {
    id: 'child-education',
    title: 'Child Higher Education',
    timeHorizon: '10–18 Years',
    description: 'Counter 10–12% education inflation with disciplined equity compounding for premier Indian or global universities.',
    recommendedVehicles: 'Diversified Equity Mutual Funds, Step-Up SIPs, Child Gift LIC Plans',
    icon: 'GraduationCap',
  },
  {
    id: 'home-purchase',
    title: 'Home Purchase Down-Payment',
    timeHorizon: '3–7 Years',
    description: 'Build a secure, inflation-beating corpus for your dream home down-payment without liquidating retirement funds.',
    recommendedVehicles: 'Balanced Advantage Funds, Multi-Asset Allocation, Short Duration Debt',
    icon: 'Home',
  },
  {
    id: 'family-protection',
    title: 'Family Protection & HLV',
    timeHorizon: 'Immediate & Ongoing',
    description: 'Ensure 15–20x annual income coverage through pure term plans, safeguarding your family against unforeseen events.',
    recommendedVehicles: 'Pure Term Life Insurance, Comprehensive Health Floater, Personal Accident Cover',
    icon: 'Shield',
  },
  {
    id: 'retirement-corpus',
    title: 'Comfortable Retirement',
    timeHorizon: '15–30 Years',
    description: 'Design a self-generating corpus that sustains your lifestyle, handles medical inflation, and provides regular monthly income.',
    recommendedVehicles: 'Equity Funds Accumulation -> Systematic Withdrawal Plans (SWP), LIC Annuities, NPS',
    icon: 'Sunset',
  },
  {
    id: 'emergency-planning',
    title: 'Emergency Liquidity Buffer',
    timeHorizon: '0–1 Year',
    description: 'Maintain 6 to 12 months of household expenses in high-liquidity, low-volatility instruments for unexpected events.',
    recommendedVehicles: 'Liquid Funds, Overnight Funds, High-Yield Sweep Bank Deposits',
    icon: 'LifeBuoy',
  },
  {
    id: 'long-term-wealth',
    title: 'Multi-Generational Wealth',
    timeHorizon: '10+ Years',
    description: 'Harness the full power of compounding and asset allocation to build lasting financial independence.',
    recommendedVehicles: 'Flexi-cap Equity, Mid & Large Cap Funds, PMS / AIF for eligible HNIs',
    icon: 'Sparkles',
  },
];

export const UNIVERSE_CATEGORIES: UniverseCategory[] = [
  {
    id: 'mutual-funds',
    title: 'Mutual Funds (Equity, Debt, Hybrid)',
    group: 'wealth',
    summary: 'Pooled investment vehicles managed by professional fund managers across SEBI-defined market caps and durations.',
    riskProfile: 'Moderate',
    timeHorizon: '3–10+ Years',
    whoShouldConsider: 'Salaried individuals, professionals, and business owners building wealth systematically.',
    regulatoryScope: 'Regulated under SEBI (Mutual Funds) Regulations. Distributed via AMFI-registered ARN.',
    keyProducts: ['Large & Mid Cap Funds', 'Flexi Cap Funds', 'Balanced Advantage Funds', 'Short Duration Debt Funds'],
  },
  {
    id: 'sips',
    title: 'Systematic Investment Plans (SIP)',
    group: 'wealth',
    summary: 'A disciplined mechanism to invest fixed amounts periodically, benefiting from rupee-cost averaging and compounding.',
    riskProfile: 'Moderate',
    timeHorizon: '5+ Years',
    whoShouldConsider: 'Anyone with a regular monthly cash flow seeking disciplined long-term investing.',
    regulatoryScope: 'Operated through mutual fund AMCs. No lock-in except for ELSS (3 years).',
    keyProducts: ['Monthly Step-Up SIP', 'Weekly SIP', 'Multi-Scheme SIP Portfolio'],
  },
  {
    id: 'life-insurance',
    title: 'Term Life Insurance',
    group: 'protection',
    summary: 'Pure financial protection providing high life coverage at economical premiums for primary earners.',
    riskProfile: 'Conservative',
    timeHorizon: 'To age 60–75',
    whoShouldConsider: 'All breadwinners with financial dependents, mortgages, or education liabilities.',
    regulatoryScope: 'Regulated by IRDAI. Claims assessed under Section 45 of Insurance Act.',
    keyProducts: ['Pure Term Insurance', 'Term with Return of Premium (TROP)', 'Critical Illness Riders'],
  },
  {
    id: 'lic-plans',
    title: 'LIC Traditional Savings & Pension Plans',
    group: 'protection',
    summary: 'Sovereign-backed savings, endowment, child education, and guaranteed annuity plans from India’s premier insurer.',
    riskProfile: 'Conservative',
    timeHorizon: '10–25 Years',
    whoShouldConsider: 'Families seeking capital safety, disciplined long-term savings, and guaranteed pension cash flows.',
    regulatoryScope: 'Backed by Life Insurance Corporation Act, 1956. Subject to policy terms and bonus declarations.',
    keyProducts: ['LIC Jeevan Labh', 'LIC Jeevan Umang', 'LIC SIIP', 'LIC Jeevan Akshay / Shanti Annuity'],
  },
  {
    id: 'health-insurance',
    title: 'Health & Mediclaim Insurance',
    group: 'protection',
    summary: 'Comprehensive hospitalization and medical expense cover with cashless access across India’s network hospitals.',
    riskProfile: 'Conservative',
    timeHorizon: 'Annual Renewal (Lifelong)',
    whoShouldConsider: 'Every individual and family to shield wealth from escalating healthcare costs.',
    regulatoryScope: 'Regulated by IRDAI. Policy terms, waiting periods for pre-existing diseases apply.',
    keyProducts: ['1 Crore Comprehensive Health Cover', 'Base + Super Top-up Floater', 'Senior Citizen Mediclaim'],
  },
  {
    id: 'general-insurance',
    title: 'General & Motor Insurance',
    group: 'protection',
    summary: 'Protection for motor vehicles, commercial premises, residential property, and personal accident risks.',
    riskProfile: 'Conservative',
    timeHorizon: '1–3 Years',
    whoShouldConsider: 'Vehicle owners, homeowners, business operators, and industrial facilities.',
    regulatoryScope: 'IRDAI non-life regulations. Standard surveyor assessment guidelines apply.',
    keyProducts: ['Comprehensive Private Car Cover', 'Commercial Vehicle Cover', 'Home / Property Insurance'],
  },
  {
    id: 'travel-insurance',
    title: 'Overseas Travel Insurance',
    group: 'protection',
    summary: 'Safeguard against medical emergencies abroad, baggage loss, trip cancellations, and evacuation.',
    riskProfile: 'Conservative',
    timeHorizon: 'Duration of International Trip',
    whoShouldConsider: 'International vacationers, business travelers, and students studying abroad.',
    regulatoryScope: 'IRDAI registered travel underwriters. Pre-existing disease restrictions apply abroad.',
    keyProducts: ['Worldwide Ex-US/Canada', 'Worldwide Including US/Canada', 'Student Travel Cover'],
  },
  {
    id: 'debt-fixed-income',
    title: 'Debt & Fixed-Income Instruments',
    group: 'fixed-income',
    summary: 'Capital preservation instruments offering steady income accrual and liquidity with lower volatility.',
    riskProfile: 'Conservative',
    timeHorizon: '6 Months – 5 Years',
    whoShouldConsider: 'Conservative investors, retirees needing monthly interest, and emergency fund builders.',
    regulatoryScope: 'SEBI and RBI guidelines. Credit rating standards (AAA, AA) apply.',
    keyProducts: ['Corporate Fixed Deposits (AAA rated)', 'Banking & PSU Debt Funds', 'Target Maturity Bond Funds'],
  },
  {
    id: 'tax-planning',
    title: 'Tax-Saving Investments',
    group: 'wealth',
    summary: 'Investments eligible for deductions under Section 80C, 80D, 80CCD(1B), and tax-efficient capital gains management.',
    riskProfile: 'Moderate',
    timeHorizon: '3+ Years',
    whoShouldConsider: 'Income taxpayers in the old or new regime seeking to optimize their net take-home wealth.',
    regulatoryScope: 'Governed by the Income Tax Act, 1961. Subject to annual Union Budget provisions.',
    keyProducts: ['ELSS Mutual Funds (3-year lock-in)', 'National Pension System (NPS)', 'Health Insurance (Sec 80D)'],
  },
  {
    id: 'retirement-planning',
    title: 'Retirement & SWP Solutions',
    group: 'wealth',
    summary: 'Constructing robust accumulation portfolios and transition plans into tax-efficient Systematic Withdrawal Plans (SWP).',
    riskProfile: 'Moderate',
    timeHorizon: '10–30 Years',
    whoShouldConsider: 'Professionals seeking financial independence and retirees needing predictable monthly cash flows.',
    regulatoryScope: 'SEBI mutual funds & IRDAI annuity guidelines. SWPs taxed under capital gains rules.',
    keyProducts: ['Equity-to-SWP Transition Blueprints', 'Hybrid Conservative Portfolios', 'Immediate Life Annuities'],
  },
  {
    id: 'pms',
    title: 'Portfolio Management Services (PMS)',
    group: 'specialized',
    summary: 'Discretionary or non-discretionary equity portfolios managed directly in client-owned demat accounts.',
    riskProfile: 'Aggressive',
    timeHorizon: '5+ Years',
    whoShouldConsider: 'High-Net-Worth Individuals with minimum ₹50 Lakh ticket size as mandated by SEBI.',
    regulatoryScope: 'SEBI (Portfolio Managers) Regulations. Aadish Investments acts in distributor/referral capacity.',
    keyProducts: ['Multi-Cap PMS', 'Small-Cap Focused PMS', 'Thematic Manufacturing PMS'],
  },
  {
    id: 'aif',
    title: 'Alternative Investment Funds (AIF)',
    group: 'specialized',
    summary: 'Privately pooled investment vehicles investing in unlisted equities, private credit, and venture ecosystems.',
    riskProfile: 'Aggressive',
    timeHorizon: '5–8 Years (Illiquid)',
    whoShouldConsider: 'Accredited investors and family offices capable of committing minimum ₹1 Crore as per SEBI regulations.',
    regulatoryScope: 'SEBI (Alternative Investment Funds) Regulations, 2012. Cat I, II, and III structures.',
    keyProducts: ['Cat II Private Credit Funds', 'Cat III Long-Short Equity Funds', 'Venture Debt Funds'],
  },
  {
    id: 'sif',
    title: 'Specialized Investment Funds (SIF)',
    group: 'specialized',
    summary: 'Niche sector funds, overseas feeders, and specialized structured debt allocation vehicles.',
    riskProfile: 'Tailored',
    timeHorizon: '3–7 Years',
    whoShouldConsider: 'Experienced investors seeking non-correlated alternative exposures.',
    regulatoryScope: 'Subject to scheme-specific regulatory clearances and risk categorization.',
    keyProducts: ['Global Innovation Feeder Funds', 'Infrastructure Yield Trusts', 'Structured Mezzanine Vehicles'],
  },
  {
    id: 'nfos',
    title: 'New Fund Offers (NFO)',
    group: 'wealth',
    summary: 'First-time subscription windows for newly registered mutual fund schemes by Asset Management Companies.',
    riskProfile: 'Moderate',
    timeHorizon: '5+ Years',
    whoShouldConsider: 'Investors where a new scheme fills a distinct, missing asset class or strategy in their portfolio.',
    regulatoryScope: 'Governed by SEBI scheme launch rules. Not an IPO; units issued at par NAV of ₹10.',
    keyProducts: ['Thematic / Sectoral NFOs', 'Factor & Smart-Beta NFOs', 'Target Maturity Debt NFOs'],
  },
  {
    id: 'ipos',
    title: 'Initial Public Offerings (IPO)',
    group: 'wealth',
    summary: 'Information and prospectus educational analysis for companies issuing shares to the public for the first time.',
    riskProfile: 'Aggressive',
    timeHorizon: 'Listing to Long-term',
    whoShouldConsider: 'Informed equity investors conducting rigorous business model and valuation due diligence.',
    regulatoryScope: 'SEBI ICDR regulations. Allotment by lottery/proportionate rules; no assured listing gains.',
    keyProducts: ['Mainboard IPO Information', 'SME IPO Due Diligence Briefings', 'Anchor Book Analysis'],
  },
  {
    id: 'stock-broking',
    title: 'Stock Broking Facilitation',
    group: 'wealth',
    summary: 'Facilitating demat and trading account onboarding through authorized, registered corporate stock broking partners.',
    riskProfile: 'Aggressive',
    timeHorizon: 'Dynamic',
    whoShouldConsider: 'Direct equity investors wishing to trade and hold listed Indian equities and ETFs.',
    regulatoryScope: 'Operated through SEBI-registered partner stock brokers. Aadish Investments operates as authorized facilitator.',
    keyProducts: ['2-in-1 Demat & Trading Setup', 'Direct Equity Delivery Accounts', 'Exchange-Traded Funds (ETFs)'],
  },
  {
    id: 'hni-solutions',
    title: 'HNI Bespoke Wealth Solutions',
    group: 'specialized',
    summary: 'Holistic wealth advisory encompassing asset allocation, debt management, estate planning, and family office support.',
    riskProfile: 'Tailored',
    timeHorizon: '7+ Years',
    whoShouldConsider: 'Founders, business owners, senior corporate CXOs with portfolios > ₹2–10 Crores.',
    regulatoryScope: 'Tailored product mix complying with applicable SEBI and RBI regulations.',
    keyProducts: ['Comprehensive Family Balance Sheet Review', 'Multi-Asset Yield Optimization', 'Trust & Succession Structuring'],
  },
  {
    id: 'nri-solutions',
    title: 'NRI India Investment Desk',
    group: 'specialized',
    summary: 'Comprehensive India investment management for Non-Resident Indians across Middle East, USA, UK, and Singapore.',
    riskProfile: 'Tailored',
    timeHorizon: '3–10 Years',
    whoShouldConsider: 'Indian diaspora seeking participation in India’s economic growth with compliant tax repatriation.',
    regulatoryScope: 'FEMA guidelines, NRE/NRO KYC norms, FATCA/CRS compliance, and DTAA tax benefits.',
    keyProducts: ['NRI Paperless KYC & Demat Setup', 'NRE/NRO Mutual Fund Portfolios', 'Repatriation & 15CA/CB Guidance'],
  },
];

export const MARKET_UPDATES: MarketUpdate[] = [
  {
    id: 'up-1',
    title: 'Navigating Volatility: Why Sticking to Monthly SIPs Wins Over Timing Market Dips',
    category: 'Mutual Fund Updates',
    publishDate: 'September 2026',
    author: 'Shrinivas Kulkarni',
    summary:
      'Historical evidence across two decades of Indian equity cycles shows that missing just the 10 best days in a decade reduces equity returns by more than half. Here is why disciplined SIP investing outperforms speculative cash holding.',
    fullContent:
      'During periods of heightened market volatility, investors naturally feel an impulse to pause SIPs or attempt to time market corrections. However, extensive rolling-return studies across Nifty 50 and Nifty 500 demonstrate that continuing SIPs through drawdowns lowers your average acquisition cost through rupee-cost averaging. When markets eventually rebound, portfolios that maintained disciplined accumulation consistently achieve higher terminal wealth than those that waited on the sidelines for "market certainty."',
    disclaimer:
      'Educational analysis only. Mutual fund investments are subject to market risks. Read all scheme related documents carefully.',
    tags: ['SIP Discipline', 'Market Volatility', 'Asset Allocation'],
  },
  {
    id: 'up-2',
    title: 'IRDAI Guidelines on Health Insurance: What Room-Rent Limits Mean for Your Claim',
    category: 'Insurance Updates',
    publishDate: 'August 2026',
    author: 'Prachi Kulkarni',
    summary:
      'Many policyholders are surprised when proportionate deduction reduces their reimbursement claim because they opted for a hospital room beyond their policy eligibility. A guide to reviewing your policy sub-limits.',
    fullContent:
      'Room-rent sub-limits (e.g., 1% of sum insured) do not only limit the room charges; hospitals and insurers apply proportionate deductions to associated medical fees (doctor visits, nursing, ICU, surgical charges). We strongly advise families to upgrade to modern health policies with no proportionate room-rent capping, or secure an appropriate super top-up policy with high aggregate limits.',
    disclaimer:
      'Insurance is the subject matter of solicitation. Policy terms, exclusions, and conditions govern all claim assessments.',
    tags: ['Health Insurance', 'Mediclaim', 'Room Rent Clause'],
  },
  {
    id: 'up-3',
    title: 'Understanding New Fund Offers (NFOs): When Does a New Mutual Fund Make Sense?',
    category: 'NFO Updates',
    publishDate: 'August 2026',
    author: 'Aadish Research Desk',
    summary:
      'Unlike an IPO where a company issues fresh equity at a valuation price, an NFO is simply a new pool of capital entering the market at ₹10 par NAV. Here is how to evaluate whether a new NFO adds genuine diversification.',
    fullContent:
      'An NFO does not possess an established track record. Investors should only subscribe to an NFO if it provides exposure to a distinct theme, specialized index, or asset category that cannot be accessed through existing mutual fund schemes with 5- to 10-year audited performance histories. Never invest in an NFO solely because its NAV is ₹10; a lower NAV does not signify that a mutual fund is "cheap".',
    disclaimer:
      'Educational commentary. Aadish Investments does not guarantee future performance of any scheme.',
    tags: ['NFO Analysis', 'Investor Education', 'Mutual Funds'],
  },
  {
    id: 'up-4',
    title: 'Evaluating Mainboard and SME IPOs: Avoiding Euphoria and Reading the Red Herring Prospectus',
    category: 'IPO Updates',
    publishDate: 'July 2026',
    author: 'Shrinivas Kulkarni',
    summary:
      'With active retail interest in public issues, investors must distinguish between short-term grey market premiums (GMP) and fundamental business strength. Key parameters to examine in the RHP.',
    fullContent:
      'Grey Market Premiums are unregulated and fluctuate wildly. Before applying for an IPO, prudent investors must examine: 1) The Offer for Sale (OFS) vs. Fresh Issue proportion (is capital going to the company for expansion or exiting promoters?), 2) Return on Equity (RoE) and operating cash flows over 3 prior years, and 3) Relative valuation against listed peers. IPO allocation is subject to registrar allotment rules; listing gains are never guaranteed.',
    disclaimer:
      'Informational purpose only. Not an investment recommendation or solicitation for any IPO.',
    tags: ['IPO Due Diligence', 'Primary Market', 'Equity Research'],
  },
  {
    id: 'up-5',
    title: 'Retirement Readiness for Pune Tech Professionals: Balancing ESOPs with Liquid Portfolios',
    category: 'Retirement Planning',
    publishDate: 'June 2026',
    author: 'Shrinivas Kulkarni',
    summary:
      'Many IT and tech professionals in Pune have significant wealth tied up in employer ESOPs or concentrated domestic real estate. Here is how to build a diversified financial plan that safeguards early retirement.',
    fullContent:
      'Concentration risk is the greatest silent threat to high-earning professionals. If your company experiences industry headwind, both your primary salary and your ESOP valuation can decline simultaneously. A resilient retirement blueprint systematically harvests vesting stock into diversified domestic mutual funds, liquid reserves, and debt instruments, creating an independent secondary income pillar.',
    disclaimer:
      'Illustrative financial education. Consult an advisor to align plans with your specific risk profile.',
    tags: ['Retirement', 'Pune IT Sector', 'Concentration Risk'],
  },
  {
    id: 'up-6',
    title: 'Tax Season Checklist: Making the Most of Section 80C, 80D, and NPS 80CCD(1B)',
    category: 'Tax Updates',
    publishDate: 'June 2026',
    author: 'Prachi Kulkarni',
    summary:
      'A practical review of how to maximize tax savings without locking capital into inefficient, low-yield endowment plans with multi-decade surrender penalties.',
    fullContent:
      'Many taxpayers rush in the last month of the financial year to purchase random tax-saving instruments. We emphasize planning tax allocations in April using ELSS mutual funds (which feature the shortest statutory lock-in of 3 years under Sec 80C) combined with health insurance for parents under Sec 80D and voluntary NPS allocations under Sec 80CCD(1B) for additional ₹50,000 deduction under old tax regime.',
    disclaimer:
      'Subject to tax regime provisions of the Income Tax Act. Please consult your chartered accountant.',
    tags: ['Tax Planning', 'ELSS', 'NPS', '80D'],
  },
  {
    id: 'up-7',
    title: 'Why Asset Allocation Matters More Than Stock Picking for Building ₹1 Crore+ Corpuses',
    category: 'Investor Education',
    publishDate: 'May 2026',
    author: 'Shrinivas Kulkarni',
    summary:
      'Global academic studies and empirical market data consistently prove that over 90% of portfolio return variability is determined by asset allocation—not by picking individual winning stocks.',
    fullContent:
      'Investors often spend countless hours trying to identify the next multi-bagger stock while neglecting their high-level ratio of equity, debt, gold, and cash. By maintaining a disciplined asset allocation suitable to your age and goals, you automatically enforce the discipline of "buying low and selling high" during annual rebalancing sessions.',
    disclaimer:
      'Educational material for investor awareness. Returns vary based on market conditions.',
    tags: ['Asset Allocation', 'Wealth Building', 'Disciplined Investing'],
  },
  {
    id: 'up-8',
    title: 'NRI Investment in India: Key FEMA, KYC, and Repatriation Rules Explained',
    category: 'Market Updates',
    publishDate: 'April 2026',
    author: 'Aadish Advisory Desk',
    summary:
      'Non-Resident Indians face changing compliance norms when investing in Indian mutual funds and equities. A concise roadmap for NRE vs NRO accounts and tax withholding.',
    fullContent:
      'NRIs can invest in Indian mutual funds on a repatriable basis through NRE accounts or on a non-repatriable basis through NRO accounts. While capital gains tax is deducted at source (TDS) for NRIs, Double Tax Avoidance Agreements (DTAA) with countries like the US, UK, UAE, and Singapore help mitigate dual taxation. We assist NRI clients with smooth digital KYC documentation and ongoing portfolio reporting.',
    disclaimer:
      'FEMA and RBI guidelines apply. Tax laws vary by jurisdiction of residence.',
    tags: ['NRI Investing', 'FEMA Compliance', 'India Growth'],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How to Start a SIP: A Simple Step-by-Step Guide for Beginners',
    slug: 'how-to-start-a-sip-guide-beginners',
    category: 'Mutual Funds',
    author: 'Shrinivas Kulkarni',
    publishDate: 'September 2026',
    reviewDate: 'September 2026',
    readTime: '6 min read',
    summary:
      'A Systematic Investment Plan (SIP) is one of the simplest and most effective ways to build wealth over time. Learn how it works, how much to start with, and how to stay disciplined.',
    keyTakeaways: [
      'SIP enforces rupee-cost averaging: buying more units when prices fall and fewer when prices rise.',
      'You can start with as little as ₹500 or ₹1,000 per month and step it up as your salary increases.',
      'Link your SIPs to specific life milestones (education, home, retirement) rather than chasing random returns.',
      'Never stop your SIP in a falling market; down markets are when your money accumulates maximum units.',
    ],
    contentParagraphs: [
      'Investing for the first time can feel overwhelming. Financial news is often filled with complicated jargon, fluctuating indices, and sensationalist predictions. A Systematic Investment Plan (SIP) cuts through this noise by turning wealth accumulation into an automated, hassle-free monthly habit.',
      'When you set up an SIP, a predetermined sum is debited from your bank account on a chosen date and allocated to a mutual fund scheme. Because the market moves up and down, your fixed monthly sum purchases varying numbers of units. Over a 5, 10, or 15-year period, this smooths out market volatility and harnesses the exponential power of compounding.',
      'At Aadish Investments, our first advice to young professionals in Pune is to start with an amount you can comfortably sustain without stressing your monthly living budget. As your career progresses and your annual compensation grows, implementing an annual "Step-Up SIP" of 10% will dramatically expand your final corpus over a 15-year horizon.',
    ],
    disclaimer:
      'Mutual Fund investments are subject to market risks. Read all scheme related documents carefully. This article is for investor education only.',
  },
  {
    id: 'blog-2',
    title: 'Term Insurance vs. Traditional Life Insurance: Understanding the True Difference',
    slug: 'term-insurance-vs-traditional-life-insurance',
    category: 'Life Insurance',
    author: 'Shrinivas Kulkarni',
    publishDate: 'August 2026',
    reviewDate: 'September 2026',
    readTime: '7 min read',
    summary:
      'Many individuals confuse protection with investment. Discover the distinct roles of pure term plans and traditional endowment savings plans in a well-balanced family portfolio.',
    keyTakeaways: [
      'Pure term insurance provides high financial cover (₹1 Cr+) at an affordable annual cost to protect dependents.',
      'Traditional life insurance plans combine moderate cover with guaranteed or bonus-linked capital safety.',
      'A complete financial plan separates pure risk protection from long-term wealth compounding.',
      'Your total life cover should equal at least 15 to 20 times your annual household income.',
    ],
    contentParagraphs: [
      'A common mistake in Indian households is purchasing a low-cover endowment policy and assuming the family is fully protected. When an earner earning ₹12 Lakhs per annum holds a policy with a sum assured of ₹5 Lakhs, the family remains severely underinsured.',
      'Pure term insurance is designed solely to replace the breadwinner’s future economic contribution. If something happens to the insured during the term, the nominee receives the full sum assured to pay off loans, fund children’s education, and cover monthly household expenses.',
      'Traditional LIC plans, on the other hand, serve a conservative savings purpose: they offer disciplined, sovereign-backed capital preservation and predictable milestones. At Aadish Investments, we help you clearly distinguish the two: buy adequate term cover for family protection, and deploy wealth investments into disciplined equity and debt instruments.',
    ],
    disclaimer:
      'Insurance is the subject matter of solicitation. Policy terms, exclusions, and conditions govern benefits. Claim settlement is determined by the insurer.',
  },
  {
    id: 'blog-3',
    title: 'How Much Health Insurance Does Your Family Truly Need in 2026?',
    slug: 'how-much-health-insurance-family-needs',
    category: 'Health Insurance',
    author: 'Prachi Kulkarni',
    publishDate: 'August 2026',
    reviewDate: 'August 2026',
    readTime: '5 min read',
    summary:
      'Medical inflation in India currently exceeds 12–14% annually. Relying on a basic ₹3 Lakh corporate policy leaves families vulnerable to catastrophic hospital bills. Here is how to size your coverage.',
    keyTakeaways: [
      'Corporate group health cover terminates immediately if you change jobs or retire.',
      'A base family floater of ₹10–15 Lakhs combined with a ₹50 Lakh to ₹1 Crore Super Top-up provides economical high coverage.',
      'Look for policies with zero room-rent sub-limits and comprehensive pre- and post-hospitalization allowances.',
      'Disclose all pre-existing medical conditions truthfully during proposal to avoid claim rejections.',
    ],
    contentParagraphs: [
      'The cost of tertiary healthcare in tier-1 cities like Pune, Mumbai, and Bengaluru has grown exponentially. A multi-week ICU stay or specialized cardiac or oncology treatment can quickly surpass ₹15 to ₹25 Lakhs. Relying solely on an employer-provided health cover creates a precarious situation.',
      'We recommend a "Two-Tier Health Architecture": keep an independent personal base policy of ₹10–15 Lakhs to establish continuous policy tenure and clock waiting periods, and superimpose a high-deductible Super Top-up policy of ₹50 Lakhs to ₹1 Crore. Because the top-up only triggers after the deductible is breached, the combined annual premium is surprisingly affordable.',
      'Furthermore, scrutinize policy conditions: avoid policies with 1% room rent limits, verify modern treatment allowances (robotic surgeries, stem cell therapy), and ensure the insurer has an extensive cashless hospital network in Pune and Maharashtra.',
    ],
    disclaimer:
      'Health insurance terms, waiting periods for specific ailments, and exclusions apply as per policy wording approved by IRDAI.',
  },
  {
    id: 'blog-4',
    title: 'Why Asset Allocation Matters for Long-Term Investors',
    slug: 'why-asset-allocation-matters-long-term-investors',
    category: 'Wealth Creation',
    author: 'Shrinivas Kulkarni',
    publishDate: 'July 2026',
    reviewDate: 'August 2026',
    readTime: '6 min read',
    summary:
      'No single asset class wins every year. Understanding how spreading investments across equity, fixed income, and liquid reserves preserves your wealth during market storms.',
    keyTakeaways: [
      'Asset allocation determines over 90% of long-term portfolio return stability.',
      'Equities provide inflation-beating growth; debt and fixed income provide emotional calm and rebalancing ammunition.',
      'Annual rebalancing enforces the discipline of booking profits from overheated assets and buying undervalued ones.',
      'Your allocation should reflect your age, milestone horizon, and behavioral risk tolerance.',
    ],
    contentParagraphs: [
      'Every investor wants maximum returns when markets are booming, but few have the emotional stomach to endure a 30% drop in an all-equity portfolio. Asset allocation is the antidote to emotional decision-making.',
      'By holding an intentional mix of large-cap equity, mid-cap growth, short-term debt funds, and gold or liquid reserves, you ensure that a setback in one market segment is buffered by stability elsewhere. During market crashes, debt holdings allow you to rebalance into equities at bargain valuations without infusing fresh capital.',
      'At Aadish Investments, we conduct annual portfolio reviews with our clients to restore their original target asset allocations. This simple, disciplined habit protects gains and prevents speculative overexposure.',
    ],
    disclaimer:
      'Asset allocation does not guarantee profit or protect against loss in declining markets. Mutual fund investments are subject to market risks.',
  },
  {
    id: 'blog-5',
    title: 'Retirement Planning Checklist for Professionals in Their 30s and 40s',
    slug: 'retirement-planning-checklist-professionals-30s-40s',
    category: 'Retirement',
    author: 'Shrinivas Kulkarni',
    publishDate: 'June 2026',
    reviewDate: 'July 2026',
    readTime: '8 min read',
    summary:
      'Retirement is not an age; it is a financial number. Practical steps for mid-career professionals to estimate their corpus, adjust for healthcare costs, and avoid the silent drain of inflation.',
    keyTakeaways: [
      'Account for 6–7% regular inflation and 12% healthcare inflation over 25+ retirement years.',
      'Start accumulating early: waiting until your 40s requires three times the monthly investment to achieve the same corpus.',
      'Do not rely solely on EPF and gratuity; they rarely suffice for maintaining current lifestyle standards.',
      'Build a transition blueprint that moves from growth accumulation to Systematic Withdrawal Plans (SWP).',
    ],
    contentParagraphs: [
      'If your current household expenses are ₹1 Lakh per month, at a modest 6.5% inflation rate, you will need approximately ₹3.3 Lakhs per month 20 years from now just to purchase the same basket of goods and services.',
      'For professionals in their 30s and 40s, the greatest asset is time. By allocating a dedicated portion of monthly savings to diversified equity mutual funds through SIPs, compounding does the heavy lifting. Waiting until age 45 to begin retirement planning drastically increases the required monthly contribution.',
      'Equally important is planning for post-retirement health coverage. Since employer insurance terminates upon retirement, securing an independent family health policy with lifetime renewability while in good health is an indispensable step in retirement planning.',
    ],
    disclaimer:
      'Retirement projections are illustrative calculations based on assumed rates of inflation and compounding. Actual returns will vary.',
  },
  {
    id: 'blog-6',
    title: 'What to Check Before Buying a Mediclaim Policy: The 7 Critical Clauses',
    slug: 'what-to-check-before-buying-mediclaim-policy',
    category: 'Health Insurance',
    author: 'Prachi Kulkarni',
    publishDate: 'May 2026',
    reviewDate: 'June 2026',
    readTime: '6 min read',
    summary:
      'Low premiums often mask severe hidden restrictions. Read this checklist before signing your health proposal to prevent traumatic claim surprises.',
    keyTakeaways: [
      'Check room rent limits: Ensure your policy has "No Room Rent Capping" or "Single Private Room".',
      'Examine co-payment clauses: Some policies force you to pay 10–20% of every hospital bill out of pocket.',
      'Review Pre-Existing Disease (PED) waiting periods: Typically 1 to 3 years before specific treatments are covered.',
      'Confirm cashless network hospitals in your neighborhood in Pune and surrounding regions.',
    ],
    contentParagraphs: [
      'When buying health insurance, most buyers simply compare the premium amount on web aggregators. However, a policy that is 20% cheaper often contains clauses that can reduce your claim reimbursement by 50% during an emergency.',
      'The most critical clause to inspect is the Room Rent Limit. If a policy caps room rent at 1% of the sum insured, choosing a deluxe room triggers proportionate deductions across doctor consultations, surgeries, and ICU fees. Always choose a policy with no room-rent capping.',
      'Second, clarify the waiting periods for declared lifestyle conditions such as hypertension, thyroid, and diabetes. Full transparency at the proposal stage protects your family against wrongful claim repudiation later.',
    ],
    disclaimer:
      'Claim approvals and exclusions depend strictly on insurer terms and condition documents approved by IRDAI.',
  },
  {
    id: 'blog-7',
    title: 'How NRIs Can Plan Investments in India: Compliance, Tax & Practical Steps',
    slug: 'how-nris-can-plan-investments-in-india',
    category: 'NRI Solutions',
    author: 'Aadish Advisory Desk',
    publishDate: 'May 2026',
    reviewDate: 'June 2026',
    readTime: '7 min read',
    summary:
      'India’s demographic expansion and digital infrastructure make it one of the world’s fastest-growing major economies. Here is how NRIs can seamlessly invest back home.',
    keyTakeaways: [
      'Understand NRE vs NRO accounts: NRE funds are freely repatriable; NRO accounts handle income earned in India.',
      'Mutual fund investments for NRIs can be executed fully paperless with digital KYC verification.',
      'Take advantage of Double Tax Avoidance Agreements (DTAA) to avoid being taxed twice on capital gains.',
      'Beware of restrictions for US and Canada residents due to FATCA/PFIC regulations; select AMCs compliant with these frameworks.',
    ],
    contentParagraphs: [
      'Non-Resident Indians across the Gulf, Southeast Asia, the UK, and North America increasingly recognize India’s structural multi-decade growth story. However, managing investments from abroad requires navigating regulatory compliance like FEMA, FATCA, and NRE/NRO banking.',
      'To invest in mutual funds or real estate, an NRI must maintain an NRE (Non-Resident External) or NRO (Non-Resident Ordinary) account with an authorized Indian bank. Mutual fund redemptions from an NRE account can be fully repatriated back to your country of residence.',
      'At Aadish Investments, our dedicated NRI desk assists with end-to-end paperless onboarding, power of attorney (POA) advisory if required, and regular consolidated digital reporting to keep your portfolio organized.',
    ],
    disclaimer:
      'FEMA regulations, RBI guidelines, and local tax laws in the investor’s country of residence govern NRI transactions.',
  },
  {
    id: 'blog-8',
    title: 'Understanding NFOs: What Investors Should Know Before Subscribing',
    slug: 'understanding-nfos-what-investors-should-know',
    category: 'Mutual Funds',
    author: 'Shrinivas Kulkarni',
    publishDate: 'April 2026',
    reviewDate: 'May 2026',
    readTime: '5 min read',
    summary:
      'Why a ₹10 NAV is not "cheap" and how to evaluate whether a newly launched mutual fund scheme belongs in your portfolio.',
    keyTakeaways: [
      'A ₹10 NAV is an arbitrary par unit value; it has zero relationship to whether a fund is undervalued.',
      'Existing mutual funds have audited track records spanning bull and bear cycles; NFOs have no track record.',
      'Only consider an NFO if it provides a truly unique strategy or fills a missing asset class not available in existing funds.',
      'Do not confuse mutual fund NFOs with corporate equity IPOs.',
    ],
    contentParagraphs: [
      'A persistent misconception among retail investors is that subscribing to a New Fund Offer (NFO) at ₹10 per unit is similar to buying a stock at a discount before it shoots up. In reality, a mutual fund NAV merely reflects the total market value of underlying securities divided by total units.',
      'If Scheme A has a NAV of ₹10 and Scheme B has a NAV of ₹100, and both invest in the exact same underlying portfolio of shares that rises by 10%, both schemes will yield the exact same 10% return on your invested capital.',
      'Therefore, unless an AMC launches an NFO representing a genuinely unique investment thesis (such as an international index or factor strategy not previously accessible), existing established schemes with seasoned fund managers are usually the more prudent choice.',
    ],
    disclaimer:
      'Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing.',
  },
  {
    id: 'blog-9',
    title: 'IPO Investing: Risks, Research, and Common Misconceptions',
    slug: 'ipo-investing-risks-research-misconceptions',
    category: 'Equity & IPOs',
    author: 'Shrinivas Kulkarni',
    publishDate: 'March 2026',
    reviewDate: 'April 2026',
    readTime: '6 min read',
    summary:
      'Unpacking primary market hype, understanding promoter Offer for Sale (OFS), and conducting fundamental due diligence on newly listed firms.',
    keyTakeaways: [
      'Listing day gains are never guaranteed; market sentiment on listing day can swing drastically.',
      'Examine whether IPO funds are being injected into business growth (Fresh Issue) or pocketed by exiting investors (OFS).',
      'Compare price-to-earnings (P/E) and valuation metrics against established, listed peer competitors.',
      'Do not apply with borrowed capital hoping to flip for quick listing gains.',
    ],
    contentParagraphs: [
      'The Indian primary market has witnessed tremendous retail participation. However, chasing unverified Grey Market Premiums (GMP) without reading the Draft Red Herring Prospectus (DRHP) exposes investors to sharp downside risks when market sentiment softens.',
      'When evaluating an IPO, begin with the "Objects of the Issue": is the company raising fresh capital to retire debt, build manufacturing plants, or invest in R&D? Or is the issue predominantly an Offer for Sale (OFS) where early venture capitalists and promoters are offloading their holdings?',
      'Furthermore, analyze operating cash flows. Companies that generate positive operating cash flow and maintain conservative debt-to-equity ratios are significantly better equipped to weather post-listing market cycles.',
    ],
    disclaimer:
      'Equity markets involve substantial capital risk. Content is intended strictly for educational analysis and does not constitute a buy or sell recommendation.',
  },
  {
    id: 'blog-10',
    title: 'Building a Financial Plan for Your Child’s Higher Education',
    slug: 'building-financial-plan-child-higher-education',
    category: 'Goal-Based Planning',
    author: 'Prachi Kulkarni',
    publishDate: 'February 2026',
    reviewDate: 'March 2026',
    readTime: '6 min read',
    summary:
      'Higher education costs in India and abroad are compounding at 10–12% per year. Here is a framework to calculate the future corpus and invest systematically from day one.',
    keyTakeaways: [
      'A ₹25 Lakh engineering or MBA degree today will cost over ₹60–75 Lakhs in 12–15 years due to educational inflation.',
      'Allocate child education funds in a separate, earmarked portfolio so it is never cannibalized for lifestyle upgrades.',
      'De-risk the portfolio gradually: shift from high-equity funds into stable debt funds 2–3 years before college admission.',
      'Back the goal with adequate term life insurance so your child’s educational dreams are funded even in your absence.',
    ],
    contentParagraphs: [
      'Parents often cite their children’s education as their highest priority, yet many rely on low-yield traditional savings policies that grow at only 5–6% annually—barely matching headline inflation, let alone education-specific inflation.',
      'A realistic educational plan begins by identifying the expected graduation year. With a 10 to 15-year horizon, an equity-oriented mutual fund portfolio structured via monthly SIPs has historically provided the growth potential required to outpace tuition fee escalation.',
      'Equally vital is the exit glidepath: when your child turns 15 or 16, gradually transfer accumulated gains via Systematic Transfer Plans (STP) into capital-preserving liquid or short-term debt instruments. This ensures that a sudden market correction right before university fee submission does not impair the goal.',
    ],
    disclaimer:
      'Illustrative educational guidance. Future education costs depend on university choice, foreign exchange rates, and inflation.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientIdentifier: 'Anand & Radhika Joshi',
    category: 'Mutual Funds & SIP',
    city: 'Kothrud, Pune',
    experienceYear: 'Clients since 2016',
    quote:
      'Shrinivas and Prachi helped us look past daily market volatility and focus entirely on our children’s college timeline. We have maintained our monthly SIPs through multiple market swings because of their constant reassurance and objective clarity. There were never any unrealistic promises—just structured, disciplined guidance.',
    serviceFocus: 'Goal-based SIP planning & child education fund',
  },
  {
    id: 'test-2',
    clientIdentifier: 'Verified Client (IT Director)',
    category: 'Life Insurance',
    city: 'Hinjawadi, Pune',
    experienceYear: 'Client since 2018',
    quote:
      'When our family experienced a medical emergency and later required LIC policy documentation support, Shrinivas personally guided us step-by-step through the paperwork. In a financial services industry where agents disappear after selling a policy, Aadish Investments has stood by us with genuine care for years.',
    serviceFocus: 'Family term cover & claim documentation support',
  },
  {
    id: 'test-3',
    clientIdentifier: 'Mahesh Deshmukh (Business Owner)',
    category: 'Health Insurance',
    city: 'Narayan Peth, Pune',
    experienceYear: 'Client since 2015',
    quote:
      'Prachi analyzed our existing family mediclaim and highlighted a 1% room-rent clause that would have severely cut our reimbursement. She restructured our health coverage with a modern floater and super top-up. The transparency and depth of knowledge at Aadish Investments is truly exceptional.',
    serviceFocus: 'Family health floater & cashless cover restructuring',
  },
  {
    id: 'test-4',
    clientIdentifier: 'Sunil K., Non-Resident Indian',
    category: 'NRI Advisory',
    city: 'Dubai (Resident) / Roots in Pune',
    experienceYear: 'Client since 2019',
    quote:
      'Managing investments in India while living overseas used to be a logistical headache. Aadish Investments handled the NRE/NRO onboarding, KYC updates, and digital mutual fund allocation seamlessly. Their regular review calls give me immense peace of mind regarding my family’s future in Pune.',
    serviceFocus: 'NRI wealth allocation & paperless India investing',
  },
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    title: 'Structuring a Child’s Higher Education Blueprint',
    clientProfile: 'Pune-based Senior Software Architect (Age 34) and Homemaker',
    initialChallenge:
      'The family had ad-hoc savings scattered across fixed deposits, gold, and random insurance policies without any consolidated roadmap for their 4-year-old daughter’s future overseas education.',
    advisoryApproach: [
      'Calculated projected foreign degree costs accounting for 10% educational inflation and FX depreciation over a 14-year horizon.',
      'Established a dedicated monthly Step-Up SIP mapped to a diversified equity portfolio with automated 10% annual increments.',
      'Secured a ₹2 Crore pure term life insurance policy to ensure the educational fund is fulfilled unconditionally in case of any adversity.',
    ],
    outcome:
      'Built a disciplined, earmarked investment plan that has weathered two major market corrections without interruption. The family tracks their goal annually with complete clarity.',
    category: 'Goal-Based Planning',
    disclaimer:
      'This is an illustrative client experience based on internal business records. Investment outcomes depend on individual investor discipline, market cycles, and product performance. Returns are not guaranteed.',
  },
  {
    id: 'story-2',
    title: 'Transitioning an Entrepreneur’s Wealth Toward Retirement Readiness',
    clientProfile: 'Self-employed Manufacturing Business Owner in Pune (Age 52)',
    initialChallenge:
      '90% of the client’s net worth was tied up in factory machinery, commercial premises, and business working capital, with zero personal retirement cash flow planned for post-age 60.',
    advisoryApproach: [
      'Instituted a systematic corporate profit withdrawal mechanism into hybrid mutual funds and conservative debt instruments.',
      'Isolated a dedicated family healthcare contingency fund with zero corporate co-payment.',
      'Structured a phased transition model to initiate Systematic Withdrawal Plans (SWP) starting at age 60.',
    ],
    outcome:
      'Successfully diversified family wealth away from single-business concentration, establishing an independent secondary liquidity pillar for long-term peace of mind.',
    category: 'Retirement & Wealth Creation',
    disclaimer:
      'Past performance is not indicative of future returns. Asset allocation mitigates concentration risks but does not eliminate market risk.',
  },
  {
    id: 'story-3',
    title: 'Critical Health Claim Documentation & Family Support',
    clientProfile: 'Family of 4 with Senior Citizen Parents residing in Pune',
    initialChallenge:
      'An unexpected emergency hospitalization occurred while the family was traveling. The hospital initially flagged documentation inconsistencies regarding a pre-existing medical condition.',
    advisoryApproach: [
      'The Aadish Investments team assisted the family in real time, liaising with the TPA desk to retrieve historical medical records and policy endorsements.',
      'Clarified the waiting-period fulfillment to the insurer’s grievance channel with complete transparency.',
      'Guided the family through post-hospitalization reimbursement filings for associated diagnostics.',
    ],
    outcome:
      'The insurer approved the cashless authorization and subsequent post-discharge claims in accordance with policy terms, saving the family from out-of-pocket stress.',
    category: 'Insurance Claim Guidance',
    disclaimer:
      'Claim acceptance, assessment, and settlement are decided exclusively by the licensed insurance company as per policy terms and conditions. Aadish Investments provides documentation and advisory facilitation.',
  },
];
