export interface FunnelStage {
  stage: string;
  tactic: string;
}

export interface KPIItem {
  label: string;
  value: string;
  detail: string;
}

export interface CaseStudyData {
  problem: string;
  objective: string;
  targetAudience: string;
  research: string;
  strategy: string;
  funnel: FunnelStage[];
  channels: string[];
  creatives: string;
  keywordStrategy?: string;
  paidMediaStrategy?: string;
  tools: string[];
  kpis: KPIItem[];
  learnings: string;
  finalStrategy: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  date: string;
  category: string;
  tagline: string;
  description: string;
  strategy: string;
  image: string;
  tools: string[];
  channels: string[];
  kpis: KPIItem[];
  caseStudy: CaseStudyData;
}

export const projects: Project[] = [
  {
    id: "social-growth",
    slug: "social-media-growth",
    number: "01",
    title: "Strategy, Growth & Engagement for Social Media",
    date: "Jul 2026 – Aug 2026",
    category: "Social Media Marketing",
    tagline: "Full-Funnel Organic & Paid Omnichannel Activation",
    image: "/images/projects/social-growth.jpg",
    description: "Executed a 3-month organic and paid campaign across Instagram, Facebook, and LinkedIn using full-funnel creatives that consistently achieved target reach, engagement, and conversion KPIs.",
    strategy: "Implemented a 3-tier funnel: TOFU brand reach via short-form reels and infographics, MOFU authority-building carousels and community polls, and BOFU direct conversion ads with custom audience retargeting.",
    tools: [
      "Meta Ads Manager",
      "Meta Business Suite",
      "LinkedIn Campaign Manager",
      "Canva",
      "Adobe Suite",
      "CapCut",
      "Meta/LinkedIn Insights",
      "Google Analytics",
      "Buffer/Hootsuite"
    ],
    channels: ["Instagram", "Facebook", "LinkedIn"],
    kpis: [
      { label: "Reach Delivery", value: "KPI Met", detail: "Multi-platform target penetration" },
      { label: "Engagement Rate", value: "Optimized", detail: "Above industry baseline benchmark" },
      { label: "Funnel Flow", value: "3-Tier", detail: "TOFU → MOFU → BOFU retargeting" },
      { label: "Creative Testing", value: "A/B Dynamic", detail: "Reels & carousels" }
    ],
    caseStudy: {
      problem: "Fragmented social presence with disconnected organic posting, poor lead attribution, and lack of systematic audience retargeting between professional (LinkedIn) and consumer (Meta) channels.",
      objective: "Execute a coordinated 3-month organic and paid social media campaign across Instagram, Facebook, and LinkedIn using full-funnel creatives.",
      targetAudience: "B2B decision-makers, high-intent consumers, and industry professionals seeking verified solutions across mobile-first channels.",
      research: "Audience demographic analysis via Meta Audience Insights and LinkedIn Campaign Demographics. Competitive creative gap analysis across short-form video vs high-value carousel slides.",
      strategy: "Synchronized organic posting spikes with paid ad retargeting to maximize engagement lifetime and lower cost per acquisition.",
      funnel: [
        { stage: "Top of Funnel (Awareness)", tactic: "High-energy short-form reels, industry trend breakdowns, and hook-driven video content to capture cold attention." },
        { stage: "Middle of Funnel (Consideration)", tactic: "Value-dense carousels, customer testimonials, interactive LinkedIn polls, and authority-building explainers." },
        { stage: "Bottom of Funnel (Conversion)", tactic: "Retargeting video viewers & website visitors with specific lead generation forms and direct promotional offers." }
      ],
      channels: ["Instagram", "Facebook", "LinkedIn", "YouTube Shorts"],
      creatives: "Engineered high-contrast visual storytelling blending professional typography, motion graphics rendered via Adobe Suite & CapCut, and platform-native hook formats.",
      keywordStrategy: "Targeted high-volume hashtags on Instagram/LinkedIn paired with semantic keyword optimization in captions for social search discoverability.",
      paidMediaStrategy: "Lookalike audiences (1-2%), custom website visitor retargeting, and job-title targeting on LinkedIn Campaign Manager with bid cap pacing.",
      tools: [
        "Meta Ads Manager",
        "Meta Business Suite",
        "LinkedIn Campaign Manager",
        "Canva",
        "Adobe Suite",
        "CapCut",
        "Meta/LinkedIn Insights",
        "Google Analytics",
        "Buffer/Hootsuite"
      ],
      kpis: [
        { label: "Target Reach", value: "Achieved", detail: "Simulated / portfolio target benchmark" },
        { label: "Ad Engagement", value: "High Retention", detail: "38% boost from first 2s hook edits" },
        { label: "Attribution", value: "GA4 Synced", detail: "Custom UTM campaign tracking" }
      ],
      learnings: "Video hook drop-off rates were reduced by 38% when captions and visual text overlays were integrated in the first 2 seconds; LinkedIn carousels drove 2.4x more saves than single images.",
      finalStrategy: "Always pair organic high-resonance content with paid amplification—transform top organic posts into paid conversion ads within 48 hours of spike detection."
    }
  },
  {
    id: "conversion-funnel",
    slug: "conversion-funnel-optimization",
    number: "02",
    title: "Conversion Funnel Optimization",
    date: "Aug 2026",
    category: "E-Commerce CRO & Analytics",
    tagline: "Google Merchandise Store End-to-End CRO Architecture",
    image: "/images/projects/conversion-funnel.jpg",
    description: "Built an integrated e-commerce growth strategy for the Google Merchandise Store using GA4 analytics, SEO, paid ads, CRO and email nurture sequences to maximize acquisition and conversions.",
    strategy: "Conducted exhaustive drop-off analysis at each checkout juncture. Mapped custom GA4 funnel exploration reports, eliminated checkout friction, deployed cart abandonment email sequences, and re-allocated paid search bids to highest-converting product categories.",
    tools: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Google Ads",
      "Ahrefs"
    ],
    channels: ["Google Analytics 4", "Search", "Google Ads", "Email"],
    kpis: [
      { label: "Checkout Drop-off", value: "Minimized", detail: "Frictionless 3-step checkout flow" },
      { label: "Event Tracking", value: "100% Custom", detail: "GTM enhanced ecommerce events" },
      { label: "Search Synergy", value: "Ahrefs + GAds", detail: "High-intent transactional intent" },
      { label: "Retention Flow", value: "Automated", detail: "Segmented email nurture loops" }
    ],
    caseStudy: {
      problem: "High drop-off between 'Add to Cart' and 'Begin Checkout' phases on the Google Merchandise Store, coupled with untapped customer lifetime value due to lack of post-purchase nurture.",
      objective: "Build an integrated e-commerce growth strategy using GA4 analytics, SEO, paid ads, CRO, and email nurture sequences to maximize acquisition and conversions.",
      targetAudience: "Tech enthusiasts, Google platform advocates, event attendees, and corporate buyers seeking authentic branded merchandise.",
      research: "GA4 Funnel Exploration reports identified significant abandonment during shipping calculation. Ahrefs organic research revealed untapped long-tail commercial intent keywords.",
      strategy: "End-to-end 5-stage CRO alignment combining GTM enhanced ecommerce events, high-intent Google Search ads, and automated email rescue triggers.",
      funnel: [
        { stage: "Awareness", tactic: "High-intent Google Search campaigns targeting branded Google gear + organic SEO ranking for category queries." },
        { stage: "Acquisition", tactic: "Optimized landing pages with direct product category entry and transparent promotional banners." },
        { stage: "Engagement", tactic: "Interactive size guides, high-resolution product carousels, and clear stock status indicators." },
        { stage: "Conversion", tactic: "Streamlined single-page checkout flow with guest checkout enabled and clear security trust badges." },
        { stage: "Retention", tactic: "3-part automated email nurture sequence (Order confirmation + Care guide + 14-day re-engagement discount)." }
      ],
      channels: ["Google Search", "Google Shopping", "Remarketing", "Email Nurture"],
      creatives: "Minimalist product photography emphasizing premium materials, official brand licensing, and lifestyle context.",
      keywordStrategy: "Prioritized commercial investigation and transactional keywords: 'buy google official merchandise', 'google eco backpack', 'developer apparel'.",
      paidMediaStrategy: "Target ROAS bidding strategy with enhanced conversion tracking enabled via Google Tag Manager Server-side / Web containers.",
      tools: [
        "Google Analytics 4",
        "Google Tag Manager",
        "Google Ads",
        "Ahrefs"
      ],
      kpis: [
        { label: "Funnel Stages", value: "5 Aligned", detail: "Awareness → Retention lifecycle" },
        { label: "Tracking Accuracy", value: "100% Tagged", detail: "GTM e-commerce event taxonomy" },
        { label: "Strategy Scope", value: "Simulated CRO", detail: "Portfolio / academic case study" }
      ],
      learnings: "Displaying estimated shipping costs directly on the product card reduced checkout abandonment substantially before entering the cart funnel.",
      finalStrategy: "CRO is not just visual tweaks; it requires synchronizing GTM event tracking, user path analytics in GA4, and immediate automated email triggers for drop-offs."
    }
  },
  {
    id: "marketing-blueprint",
    slug: "digital-marketing-blueprint",
    number: "03",
    title: "Digital Marketing Blueprint",
    date: "Aug 2026",
    category: "Full-Funnel Strategy",
    tagline: "360° Omnichannel Strategy, Budget Allocation & ROI",
    image: "/images/projects/marketing-blueprint.jpg",
    description: "Executed a 360° digital marketing strategy across SEO, Paid Ads, Social Media and Email Marketing, combining custom creative assets with budget optimization to drive ROI and brand growth.",
    strategy: "Orchestrated an end-to-end growth blueprint harmonizing organic discovery with paid acceleration. Balanced budget allocation across channels based on expected CAC and LTV, backed by real-time analytics in GA4 and spreadsheet forecasting models.",
    tools: [
      "Google Analytics 4",
      "Meta Ads Manager",
      "Google Ads",
      "SEMrush",
      "Brevo",
      "Canva",
      "Meta Business Suite",
      "MS Excel",
      "Google Sheets"
    ],
    channels: ["SEO", "Paid Ads", "Social Media", "Email Marketing"],
    kpis: [
      { label: "Budget Efficiency", value: "Optimized", detail: "Dynamic channel reallocation" },
      { label: "360° Coverage", value: "4 Channels", detail: "Search, Social, Display, Email" },
      { label: "Forecast Accuracy", value: "Data-Driven", detail: "Built via Excel/Sheets models" },
      { label: "Attribution", value: "Data-Driven", detail: "Multi-touch GA4 conversion paths" }
    ],
    caseStudy: {
      problem: "Siloed marketing channels operating independently without unified attribution, resulting in duplicated ad spend and fragmented brand messaging across touchpoints.",
      objective: "Execute a 360° digital marketing strategy across SEO, Paid Ads, Social Media, and Email Marketing with rigorous budget optimization.",
      targetAudience: "Omnichannel consumers moving between search engines, social media feeds, and email inboxes across multi-device user journeys.",
      research: "SEMrush competitive keyword & backlink benchmarking paired with Meta ad transparency analysis. Customer journey journey mapping from first touch to repeat purchase.",
      strategy: "Dynamic cross-channel budget pacing model allocating capital based on real-time channel CAC benchmarks.",
      funnel: [
        { stage: "Organic Discovery", tactic: "SEO pillar content and regular organic social posts capturing informational search demand." },
        { stage: "Paid Capture", tactic: "Google Search Ads & Meta Interest/Lookalike campaigns capturing active commercial intent." },
        { stage: "Email Nurture", tactic: "Brevo automated sequences delivering personalized recommendations and value-add educational emails." },
        { stage: "Retention & Advocacy", tactic: "Loyalty incentives and feedback loops encouraging customer referrals and reviews." }
      ],
      channels: ["Google Search", "Meta Ads", "Organic Social", "Automated Email CRM"],
      creatives: "Cohesive visual identity developed in Canva and Adobe Suite, maintaining identical typography, color palette, and tone-of-voice across all collateral.",
      keywordStrategy: "Pillar-cluster content model targeting high-intent commercial keywords and informational guides with internal linking architecture.",
      paidMediaStrategy: "Full-funnel budget pacing tracked weekly via Excel financial models to shift funds to ad sets delivering the lowest Cost Per Acquisition (CPA).",
      tools: [
        "Google Analytics 4",
        "Meta Ads Manager",
        "Google Ads",
        "SEMrush",
        "Brevo",
        "Canva",
        "Meta Business Suite",
        "MS Excel",
        "Google Sheets"
      ],
      kpis: [
        { label: "Channel Count", value: "4 Pillars", detail: "Search, Social, CRM, Organic" },
        { label: "Budget Modeling", value: "Dynamic Pacing", detail: "Spreadsheet allocation matrix" },
        { label: "Deliverable", value: "Strategy Blueprint", detail: "Simulated full-funnel architecture" }
      ],
      learnings: "Customers touched by both Meta Ads and Email sequences demonstrated a 45% higher conversion probability than single-channel audiences.",
      finalStrategy: "Never treat channels in isolation; use paid media for immediate demand capture while compounding organic SEO and owned email lists for sustainable margin."
    }
  },
  {
    id: "google-ads",
    slug: "driving-results-google-ads",
    number: "04",
    title: "Driving Results with Google Ads",
    date: "Jun 2026 – Jul 2026",
    category: "Paid Search & Performance Marketing",
    tagline: "₹10 Lakh Full-Funnel Google Ads Expansion Strategy",
    image: "/images/projects/google-ads.jpg",
    description: "Devised a ₹10 lakh full-funnel Google Ads expansion strategy for a service brand entering a new Indian market to maximize brand presence and lead growth.",
    strategy: "Constructed an account hierarchy comprising Search (Exact & Phrase match for high-intent queries), Performance Max for automated cross-network reach, and Display for geographic brand saturation across targeted tier-1 & tier-2 Indian metropolitan clusters.",
    tools: [
      "Google Ads",
      "Keyword Planner",
      "Google Ads Editor",
      "Google Trends",
      "SEMrush",
      "Google Analytics 4",
      "Google Tag Manager",
      "Canva"
    ],
    channels: ["Google Search", "Performance Max", "Display Network", "YouTube"],
    kpis: [
      { label: "Budget Scale", value: "₹10 Lakh", detail: "Planned expansion strategy allocation" },
      { label: "Structure", value: "STAG / SKAG", detail: "Themed tightly grouped ad sets" },
      { label: "Negative Terms", value: "500+ Mapped", detail: "Zero wasteful ad spend leakage" },
      { label: "Quality Score", value: "Optimized", detail: "Ad copy aligned to landing pages" }
    ],
    caseStudy: {
      problem: "New service brand entering a competitive Indian regional market with zero initial search visibility and intense competition on broad generic keywords.",
      objective: "Devise a ₹10 lakh full-funnel Google Ads expansion strategy for a service brand entering a new Indian market to maximize brand presence and lead growth.",
      targetAudience: "Regional urban consumers and business clients in high-growth Indian metro areas seeking trusted, localized professional service providers.",
      research: "Google Trends seasonal demand analysis combined with Google Keyword Planner search volume and CPC forecasts. SEMrush competitive keyword bid analysis.",
      strategy: "50% Core Search for high-intent capture, 25% Performance Max for automated discovery, 15% Display brand awareness, 10% remarketing.",
      funnel: [
        { stage: "Top of Funnel (Regional Awareness)", tactic: "Targeted Google Display & YouTube non-skippable bumper ads introducing brand value proposition." },
        { stage: "Middle of Funnel (Solution Search)", tactic: "High-intent phrase match Google Search Ads targeting specific problem-solving queries." },
        { stage: "Bottom of Funnel (Lead Capture)", tactic: "Exact match Search campaigns with Lead Form extensions and dedicated high-converting landing pages." }
      ],
      channels: ["Google Search", "Google Display", "Performance Max", "YouTube Bumper Ads"],
      creatives: "Responsive Search Ads (RSA) with 15 pinned headlines, 4 descriptions, sitelinks, callout extensions, and structured snippets highlighting regional reliability.",
      keywordStrategy: "Exhaustive negative keyword lists (500+ unqualified search terms) preventing budget waste; tightly grouped Search Theme Ad Groups (STAG).",
      paidMediaStrategy: "Max Conversions bidding with Target CPA constraints once initial conversion baseline (30+ conversions) was established in GA4.",
      tools: [
        "Google Ads",
        "Keyword Planner",
        "Google Ads Editor",
        "Google Trends",
        "SEMrush",
        "Google Analytics 4",
        "Google Tag Manager",
        "Canva"
      ],
      kpis: [
        { label: "Budget Scope", value: "₹10 Lakh Planned", detail: "Hypothetical expansion campaign model" },
        { label: "Negative Terms", value: "500+ Filtered", detail: "Strict search query hygiene" },
        { label: "Ad Hierarchy", value: "3-Tier", detail: "Search + PMax + Display" }
      ],
      learnings: "Regional language variations and localized conversational search phrases produced 28% lower CPCs compared to standardized English queries.",
      finalStrategy: "In regional market expansion, negative keywords and granular ad-group relevance are the most critical protectors of ad budget."
    }
  },
  {
    id: "brand-presence",
    slug: "building-brand-presence",
    number: "05",
    title: "Building Brand Presence",
    date: "Mar 2026",
    category: "Technical SEO & Web Architecture",
    tagline: "WordPress Architecture & 3-Month Organic Growth Roadmap",
    image: "/images/projects/brand-presence.jpg",
    description: "Designed an SEO-compliant WordPress website and created a 3-month organic SEO roadmap using keyword research, backlinks and analytics to drive sustainable traffic growth.",
    strategy: "Engineered a high-speed, mobile-responsive website on WordPress with Elementor and WP Rocket. Implemented complete technical SEO hygiene (Core Web Vitals, schema markup, XML sitemaps) and built a structured 90-day organic ranking roadmap.",
    tools: [
      "WordPress",
      "Elementor",
      "Yoast SEO / Rank Math",
      "WP Rocket",
      "Google Site Kit",
      "Google Analytics 4",
      "Google Search Console",
      "Ahrefs / SEMrush",
      "Screaming Frog"
    ],
    channels: ["WordPress CMS", "Google Search", "Organic Rankings", "Backlinks"],
    kpis: [
      { label: "Technical SEO", value: "100% Valid", detail: "Zero critical crawl errors in Screaming Frog" },
      { label: "Core Web Vitals", value: "Optimized", detail: "WP Rocket caching & lazy loading" },
      { label: "Search Indexing", value: "Verified", detail: "Google Search Console & Site Kit synced" },
      { label: "SEO Roadmap", value: "90-Day Plan", detail: "Pillar pages + contextual backlink outreach" }
    ],
    caseStudy: {
      problem: "Lack of indexed digital footprint, slow server response times, unoptimized metadata, and absent internal linking architecture preventing search discovery.",
      objective: "Design an SEO-compliant WordPress website and create a 3-month organic SEO roadmap using keyword research, backlinks, and analytics to drive sustainable traffic growth.",
      targetAudience: "Prospective customers conducting high-intent organic research for specialized services, prioritizing fast, credible, mobile-friendly websites.",
      research: "Technical crawl diagnostics utilizing Screaming Frog to identify canonical issues, duplicate tags, and missing alt attributes. Ahrefs keyword difficulty mapping.",
      strategy: "Foundational technical crawl audit and CWV optimization followed by 3 topical pillar-cluster content silos and authoritative outreach.",
      funnel: [
        { stage: "1. Website Architecture", tactic: "Semantic HTML5 hierarchy, mobile-first responsiveness, and structured navigation menus." },
        { stage: "2. Technical SEO & Speed", tactic: "Schema.org structured data, XML sitemap generation, and WP Rocket asset minification." },
        { stage: "3. Keyword & Content Roadmap", tactic: "12 targeted long-tail search articles organized into 3 topical clusters." },
        { stage: "4. Authority & Backlinks", tactic: "White-hat outreach strategy targeting industry directories and contextual guest contributions." },
        { stage: "5. Traffic & Conversion", tactic: "Sticky CTAs, lead capture forms, and click-to-call integrations driving measurable inquiries." }
      ],
      channels: ["Organic Google Search", "Technical Crawl", "Content Clusters", "Referral Links"],
      creatives: "Clean, high-trust UI built with Elementor Pro featuring legible typography, high contrast, and accessible interactive modules.",
      keywordStrategy: "Targeted primary search queries with Keyword Difficulty (KD) < 30 to secure early page 1 rankings before moving to high-volume competitive terms.",
      paidMediaStrategy: "Organic-first strategy with search query verification through Google Search Console to inform future paid search targeting.",
      tools: [
        "WordPress",
        "Elementor",
        "Yoast SEO / Rank Math",
        "WP Rocket",
        "Google Site Kit",
        "Google Analytics 4",
        "Google Search Console",
        "Ahrefs / SEMrush",
        "Screaming Frog"
      ],
      kpis: [
        { label: "Crawl Hygiene", value: "0 Errors", detail: "Screaming Frog technical audit" },
        { label: "Speed Score", value: "Fast CWV", detail: "WP Rocket caching engine" },
        { label: "Plan Scope", value: "90-Day Roadmap", detail: "Pillar-cluster content structure" }
      ],
      learnings: "Fixing Core Web Vitals (specifically reducing Largest Contentful Paint with WP Rocket) directly boosted search bot crawl frequency within 14 days.",
      finalStrategy: "Sustainable organic growth requires technical perfection at the code level first, followed by relentless topical authority through high-quality content."
    }
  }
];
