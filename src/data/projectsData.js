export const projectsData = [
  {
    id: "social-media-growth",
    number: "01",
    title: "Strategy, Growth & Engagement for Social Media",
    period: "Jul 2026 – Aug 2026",
    tagline: "Full-Funnel Organic & Paid Omnichannel Activation",
    channels: ["Instagram", "Facebook", "LinkedIn"],
    objective: "Execute a 3-month organic and paid campaign across Instagram, Facebook, and LinkedIn using full-funnel creatives to consistently hit target reach, engagement, and conversion milestones.",
    strategy: "Implemented a full-funnel architecture: Top-of-funnel (TOFU) awareness reels & carousel educational infographics; Middle-of-funnel (MOFU) consideration case-studies & community polls; Bottom-of-funnel (BOFU) direct-response conversion ads with retargeting custom audiences.",
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
      { label: "Target Reach", value: "KPI Met", detail: "Multi-platform audience penetration" },
      { label: "Engagement Rate", value: "Optimized", detail: "Above industry benchmark" },
      { label: "Funnel Flow", value: "3-Tier", detail: "TOFU → MOFU → BOFU retargeting" },
      { label: "Creative Testing", value: "A/B Dynamic", detail: "Multi-format reels & carousels" }
    ],
    visualType: "social-dashboard",
    fullCaseStudy: {
      problem: "Fragmented social presence with disconnected organic posting, poor lead attribution, and lack of systematic audience retargeting between professional (LinkedIn) and consumer (Meta) channels.",
      targetAudience: "B2B decision-makers, high-intent consumers, and industry professionals seeking verified solutions across mobile-first channels.",
      research: "Audience demographic analysis via Meta Audience Insights and LinkedIn Campaign Demographics. Competitive creative gap analysis across short-form video vs high-value carousel slides.",
      funnel: [
        { stage: "Top of Funnel (Awareness)", tactic: "High-energy short-form reels, industry trend breakdowns, and hook-driven video content to capture cold attention." },
        { stage: "Middle of Funnel (Consideration)", tactic: "Value-dense carousels, customer testimonials, interactive LinkedIn polls, and live Q&As building authority." },
        { stage: "Bottom of Funnel (Conversion)", tactic: "Retargeting video viewers & website visitors with specific lead gen forms and direct promotional offers." }
      ],
      campaignStructure: "Split budgets: 45% Top-of-Funnel Brand Reach, 35% Middle-of-Funnel Lead Qualification, 20% Dynamic Retargeting on Meta Pixel & LinkedIn Insight Tag audiences.",
      creativeStrategy: "Engineered high-contrast visual storytelling blending professional typography, motion graphics rendered via Adobe Suite & CapCut, and platform-native hook formats.",
      keywordStrategy: "Targeted high-volume hashtags on Instagram/LinkedIn paired with semantic keyword optimization in captions for social search discoverability.",
      paidMediaStrategy: "Lookalike audiences (1-2%), custom website visitor retargeting, and job-title targeting on LinkedIn Campaign Manager with bid cap pacing.",
      analytics: "Unified cross-channel tracking utilizing UTM parameters feeding GA4 events, Meta Business Suite metrics, and custom LinkedIn Conversion tracking.",
      learnings: "Video hook drop-off rates were reduced by 38% when captions and visual text overlays were integrated in the first 2 seconds; LinkedIn carousels drove 2.4x more saves than single images.",
      finalStrategy: "Always pair organic high-resonance content with paid amplification—transform top organic posts into paid conversion ads within 48 hours of spike detection."
    }
  },
  {
    id: "conversion-funnel-cro",
    number: "02",
    title: "Conversion Funnel Optimization",
    period: "Aug 2026",
    tagline: "Google Merchandise Store End-to-End CRO Architecture",
    channels: ["GA4", "Search", "Google Ads", "Email"],
    objective: "Build an integrated e-commerce growth and conversion rate optimization (CRO) strategy for the Google Merchandise Store using GA4 analytics, SEO, paid ads, and email nurture sequences.",
    strategy: "Conducted exhaustive drop-off analysis at each checkout juncture. Mapped custom GA4 funnel exploration reports, eliminated checkout friction, deployed cart abandonment email sequences, and re-allocated paid search bids to highest-converting product categories.",
    tools: [
      "Google Analytics 4 (GA4)",
      "Google Tag Manager",
      "Google Ads",
      "Ahrefs"
    ],
    kpis: [
      { label: "Checkout Drop-off", value: "Minimized", detail: "Frictionless 3-step checkout flow" },
      { label: "Event Tracking", value: "100% Custom", detail: "GTM enhanced ecommerce events" },
      { label: "Search Synergy", value: "Ahrefs + GAds", detail: "High-intent transactional intent" },
      { label: "Retention Flow", value: "Automated", detail: "Segmented email nurture loops" }
    ],
    visualType: "funnel-3d",
    fullCaseStudy: {
      problem: "High drop-off between 'Add to Cart' and 'Begin Checkout' phases on the Google Merchandise Store, coupled with untapped customer lifetime value due to lack of post-purchase nurture.",
      targetAudience: "Tech enthusiasts, Google platform advocates, event attendees, and corporate buyers seeking authentic branded merchandise.",
      research: "GA4 Funnel Exploration reports identified significant abandonment during shipping calculation. Ahrefs organic research revealed untapped long-tail commercial intent keywords.",
      funnel: [
        { stage: "Awareness", tactic: "High-intent Google Search campaigns targeting branded Google gear + organic SEO ranking for category queries." },
        { stage: "Acquisition", tactic: "Optimized landing pages with direct product category entry and transparent promotional banners." },
        { stage: "Engagement", tactic: "Interactive size guides, high-resolution product carousels, and clear stock status indicators." },
        { stage: "Conversion", tactic: "Streamlined single-page checkout flow with guest checkout enabled and clear security trust badges." },
        { stage: "Retention", tactic: "3-part automated email nurture sequence (Order confirmation + Care guide + 14-day re-engagement discount)." }
      ],
      campaignStructure: "Tier 1: High-ROAS Google Shopping / Performance Max campaigns. Tier 2: Search Ads targeting transactional queries. Tier 3: GA4 Audience remarketing.",
      creativeStrategy: "Minimalist product photography emphasizing premium materials, official brand licensing, and lifestyle context.",
      keywordStrategy: "Prioritized commercial investigation and transactional keywords: 'buy google official merchandise', 'google eco backpack', 'developer apparel'.",
      paidMediaStrategy: "Target ROAS bidding strategy with enhanced conversion tracking enabled via Google Tag Manager Server-side / Web containers.",
      analytics: "Configured enhanced e-commerce events: view_item, add_to_cart, begin_checkout, add_payment_info, purchase with precise revenue attribution.",
      learnings: "Displaying estimated shipping costs directly on the product card reduced checkout abandonment substantially before entering the cart funnel.",
      finalStrategy: "CRO is not just visual tweaks; it requires synchronizing GTM event tracking, user path analytics in GA4, and immediate automated email triggers for drop-offs."
    }
  },
  {
    id: "digital-marketing-blueprint",
    number: "03",
    title: "Digital Marketing Blueprint",
    period: "Aug 2026",
    tagline: "360° Omnichannel Strategy, Budget Allocation & ROI",
    channels: ["SEO", "Paid Ads", "Social Media", "Email Marketing"],
    objective: "Execute a 360° digital marketing strategy across SEO, Paid Ads, Social Media, and Email Marketing, combining custom creative assets with budget optimization to drive ROI and brand growth.",
    strategy: "Orchestrated an end-to-end growth blueprint harmonizing organic discovery with paid acceleration. Balanced budget allocation across channels based on expected CAC and LTV, backed by real-time analytics in GA4 and spreadsheet forecasting models.",
    tools: [
      "Google Analytics 4 (GA4)",
      "Meta Ads Manager",
      "Google Ads",
      "SEMrush",
      "Brevo",
      "Canva",
      "Meta Business Suite",
      "MS Excel / Google Sheets"
    ],
    kpis: [
      { label: "Budget Efficiency", value: "Optimized", detail: "Dynamic channel reallocation" },
      { label: "360° Coverage", value: "4 Channels", detail: "Search, Social, Display, Email" },
      { label: "Forecast Accuracy", value: "Data-Driven", detail: "Built via Excel/Sheets models" },
      { label: "Attribution", value: "Data-Driven", detail: "Multi-touch GA4 conversion paths" }
    ],
    visualType: "ecosystem-360",
    fullCaseStudy: {
      problem: "Siloed marketing channels operating independently without unified attribution, resulting in duplicated ad spend and fragmented brand messaging across touchpoints.",
      targetAudience: "Omnichannel consumers moving between search engines, social media feeds, and email inboxes across multi-device user journeys.",
      research: "SEMrush competitive keyword & backlink benchmarking paired with Meta ad transparency analysis. Customer journey journey mapping from first touch to repeat purchase.",
      funnel: [
        { stage: "Organic Discovery", tactic: "SEO pillar content and regular organic social posts capturing informational search demand." },
        { stage: "Paid Capture", tactic: "Google Search Ads & Meta Interest/Lookalike campaigns capturing active commercial intent." },
        { stage: "Email Nurture", tactic: "Brevo automated sequences delivering personalized recommendations and value-add educational emails." },
        { stage: "Retention & Advocacy", tactic: "Loyalty incentives and feedback loops encouraging customer referrals and reviews." }
      ],
      campaignStructure: "Total Budget split: 40% Google Search & Shopping, 35% Meta Performance Ads, 15% Content & SEO Production, 10% Email Marketing & CRM automation.",
      creativeStrategy: "Cohesive visual identity developed in Canva and Adobe Suite, maintaining identical typography, color palette, and tone-of-voice across all collateral.",
      keywordStrategy: "Pillar-cluster content model targeting high-intent commercial keywords and informational guides with internal linking architecture.",
      paidMediaStrategy: "Full-funnel budget pacing tracked weekly via Excel financial models to shift funds to ad sets delivering the lowest Cost Per Acquisition (CPA).",
      analytics: "GA4 Data-Driven Attribution model tracking assisted conversions and multi-touch channel interactions across 30-day lookback windows.",
      learnings: "Customers touched by both Meta Ads and Email sequences demonstrated a 45% higher conversion probability than single-channel audiences.",
      finalStrategy: "Never treat channels in isolation; use paid media for immediate demand capture while compounding organic SEO and owned email lists for sustainable margin."
    }
  },
  {
    id: "driving-results-google-ads",
    number: "04",
    title: "Driving Results with Google Ads",
    period: "Jun 2026 – Jul 2026",
    tagline: "₹10 Lakh Full-Funnel Market Expansion Strategy",
    channels: ["Google Search", "Google Display", "Google Trends", "YouTube"],
    objective: "Devise a ₹10 Lakh full-funnel Google Ads expansion strategy for a service brand entering a new Indian market to maximize brand presence and lead growth.",
    strategy: "Constructed a comprehensive account hierarchy comprising Search (Exact & Phrase match for high-intent queries), Performance Max for automated cross-network reach, and Display for geographic brand saturation across targeted tier-1 & tier-2 Indian metropolitan clusters.",
    tools: [
      "Google Ads (Keyword Planner & Editor)",
      "Google Trends",
      "SEMrush",
      "Google Analytics 4 (GA4)",
      "Google Tag Manager",
      "Canva"
    ],
    kpis: [
      { label: "Budget Scale", value: "₹10 Lakh", detail: "Full planned campaign allocation" },
      { label: "Keyword Granularity", value: "SKAG & STAG", detail: "Tight ad-group theme relevance" },
      { label: "Negative Match", value: "500+ Terms", detail: "Zero wasteful ad spend leakage" },
      { label: "Quality Score", value: "Optimized", detail: "Ad copy aligned to landing pages" }
    ],
    visualType: "ads-dashboard",
    fullCaseStudy: {
      problem: "New service brand entering a competitive Indian regional market with zero initial search visibility and intense competition on broad generic keywords.",
      targetAudience: "Regional urban consumers and business clients in high-growth Indian metro areas seeking trusted, localized professional service providers.",
      research: "Google Trends seasonal demand analysis combined with Google Keyword Planner search volume and CPC forecasts. SEMrush competitive keyword bid analysis.",
      funnel: [
        { stage: "Top of Funnel (Regional Awareness)", tactic: "Targeted Google Display & YouTube non-skippable bumper ads introducing brand value proposition." },
        { stage: "Middle of Funnel (Solution Search)", tactic: "High-intent phrase match Google Search Ads targeting specific problem-solving queries." },
        { stage: "Bottom of Funnel (Lead Capture)", tactic: "Exact match Search campaigns with Lead Form extensions and dedicated high-converting landing pages." }
      ],
      campaignStructure: "₹10 Lakh Allocation: ₹5 Lakh Core Search Lead Gen (50%), ₹2.5 Lakh Performance Max (25%), ₹1.5 Lakh Display Brand Awareness (15%), ₹1 Lakh Remarketing & Experimentation (10%).",
      creativeStrategy: "Responsive Search Ads (RSA) with 15 pinned headlines, 4 descriptions, sitelinks, callout extensions, and structured snippets highlighting regional reliability.",
      keywordStrategy: "Exhaustive negative keyword lists (500+ unqualified search terms) preventing budget waste; tightly grouped Search Theme Ad Groups (STAG).",
      paidMediaStrategy: "Max Conversions bidding with Target CPA constraints once initial conversion baseline (30+ conversions) was established in GA4.",
      analytics: "Server-side and client-side Google Tag Manager conversion tags linked directly to GA4 key events and Google Ads Offline Conversion Tracking.",
      learnings: "Regional language variations and localized conversational search phrases produced 28% lower CPCs compared to standardized English queries.",
      finalStrategy: "In regional market expansion, negative keywords and granular ad-group relevance are the most critical protectors of ad budget."
    }
  },
  {
    id: "building-brand-presence",
    number: "05",
    title: "Building Brand Presence & Organic SEO",
    period: "Mar 2026",
    tagline: "WordPress Architecture & 3-Month Organic Growth Roadmap",
    channels: ["WordPress", "Technical SEO", "On-Page SEO", "Backlinks"],
    objective: "Designed an SEO-compliant WordPress website and created a 3-month organic SEO roadmap using keyword research, backlinks, and analytics to drive sustainable traffic growth.",
    strategy: "Engineered a high-speed, mobile-responsive website on WordPress with Elementor and WP Rocket. Implemented complete technical SEO hygiene (Core Web Vitals, schema markup, XML sitemaps) and built a structured 90-day organic ranking roadmap.",
    tools: [
      "WordPress",
      "Elementor",
      "Yoast SEO / Rank Math",
      "WP Rocket",
      "Site Kit by Google",
      "Google Analytics 4 (GA4)",
      "Google Search Console",
      "Ahrefs / SEMrush",
      "Screaming Frog"
    ],
    kpis: [
      { label: "Technical SEO", value: "100% Valid", detail: "Zero critical crawl errors in Screaming Frog" },
      { label: "Core Web Vitals", value: "Optimized", detail: "WP Rocket caching & lazy loading" },
      { label: "Search Indexing", value: "Verified", detail: "Google Search Console & Site Kit synced" },
      { label: "SEO Roadmap", value: "90-Day Plan", detail: "Pillar pages + contextual backlink outreach" }
    ],
    visualType: "seo-journey",
    fullCaseStudy: {
      problem: "Lack of indexed digital footprint, slow server response times, unoptimized metadata, and absent internal linking architecture preventing search discovery.",
      targetAudience: "Prospective customers conducting high-intent organic research for specialized services, prioritizing fast, credible, mobile-friendly websites.",
      research: "Technical crawl diagnostics utilizing Screaming Frog to identify canonical issues, duplicate tags, and missing alt attributes. Ahrefs keyword difficulty mapping.",
      funnel: [
        { stage: "1. Website Architecture", tactic: "Semantic HTML5 hierarchy, mobile-first responsiveness, and structured navigation menus." },
        { stage: "2. Technical SEO & Speed", tactic: "Schema.org structured data, XML sitemap generation, and WP Rocket asset minification." },
        { stage: "3. Keyword & Content Roadmap", tactic: "12 targeted long-tail search articles organized into 3 topical clusters." },
        { stage: "4. Authority & Backlinks", tactic: "White-hat outreach strategy targeting industry directories and contextual guest contributions." },
        { stage: "5. Traffic & Conversion", tactic: "Sticky CTAs, lead capture forms, and click-to-call integrations driving measurable inquiries." }
      ],
      campaignStructure: "Month 1: Foundation (Technical crawl audit, speed optimization, site architecture). Month 2: On-page SEO & Content Creation. Month 3: Off-page backlink acquisition and conversion tracking.",
      creativeStrategy: "Clean, high-trust UI built with Elementor Pro featuring legible typography, high contrast, and accessible interactive modules.",
      keywordStrategy: "Targeted primary search queries with Keyword Difficulty (KD) < 30 to secure early page 1 rankings before moving to high-volume competitive terms.",
      paidMediaStrategy: "Organic-first strategy with search query verification through Google Search Console to inform future paid search targeting.",
      analytics: "Dual configuration of Google Search Console (clicks, impressions, average position) and GA4 (organic user sessions, engagement time, goal completions).",
      learnings: "Fixing Core Web Vitals (specifically reducing Largest Contentful Paint with WP Rocket) directly boosted search bot crawl frequency within 14 days.",
      finalStrategy: "Sustainable organic growth requires technical perfection at the code level first, followed by relentless topical authority through high-quality content."
    }
  }
];
