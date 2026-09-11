export const skillsCategories = [
  {
    id: "performance",
    name: "Performance Marketing",
    color: "#00f2fe",
    description: "Data-backed paid customer acquisition, campaign architecture, and high-conversion ad scaling across major networks.",
    skills: [
      { name: "Google AdWords", level: "Advanced", desc: "Search, Display, Performance Max, Keyword Planner & Editor", relatedProject: "Driving Results with Google Ads" },
      { name: "Facebook & Meta Ads", level: "Advanced", desc: "Meta Ads Manager, lookalike audiences, retargeting funnels", relatedProject: "Social Media Growth" },
      { name: "Search Engine Marketing (SEM)", level: "Advanced", desc: "Keyword intent clustering, bid pacing, quality score optimization", relatedProject: "Driving Results with Google Ads" },
      { name: "Paid Social Media", level: "Advanced", desc: "Cross-platform campaigns across Instagram, Facebook, and LinkedIn", relatedProject: "Social Media Growth" },
      { name: "Budget Optimization", level: "Proficient", desc: "Full-funnel budget forecasting and CPA reduction modeling", relatedProject: "Digital Marketing Blueprint" }
    ]
  },
  {
    id: "organic",
    name: "Organic Growth & SEO",
    color: "#4facfe",
    description: "Long-term organic visibility, keyword strategy, topical authority, and high-ranking content architectures.",
    skills: [
      { name: "Search Engine Optimization (SEO)", level: "Advanced", desc: "Technical audits, on-page optimization, backlink strategies", relatedProject: "Building Brand Presence" },
      { name: "Content Writing", level: "Proficient", desc: "High-value blog posts, landing page copy, search intent guides", relatedProject: "Building Brand Presence" },
      { name: "Blogging", level: "Proficient", desc: "Pillar-cluster content architecture and educational lead magnets", relatedProject: "Digital Marketing Blueprint" },
      { name: "Market Research", level: "Proficient", desc: "Competitor benchmarking, keyword difficulty analysis, user trends", relatedProject: "Driving Results with Google Ads" }
    ]
  },
  {
    id: "analytics",
    name: "Analytics & Tracking",
    color: "#6366f1",
    description: "Multi-touch measurement, tracking infrastructure, conversion rate optimization, and actionable business insights.",
    skills: [
      { name: "Google Analytics 4 (GA4)", level: "Advanced", desc: "Custom funnel explorations, e-commerce events, data-driven attribution", relatedProject: "Conversion Funnel Optimization" },
      { name: "Google Tag Manager (GTM)", level: "Proficient", desc: "Client-side and server-side tag deployment, trigger logic", relatedProject: "Conversion Funnel Optimization" },
      { name: "Google Search Console", level: "Advanced", desc: "Indexation monitoring, query clicks, impressions, crawl diagnostics", relatedProject: "Building Brand Presence" },
      { name: "Marketing Insights", level: "Proficient", desc: "Synthesizing cross-channel metrics into clear growth roadmaps", relatedProject: "Digital Marketing Blueprint" },
      { name: "Conversion Rate Optimization (CRO)", level: "Proficient", desc: "Friction reduction, checkout flow analysis, A/B testing logic", relatedProject: "Conversion Funnel Optimization" }
    ]
  },
  {
    id: "creative",
    name: "Creative & Production",
    color: "#a855f7",
    description: "Hands-on cinema camera operations, studio lighting rigging, and multimedia post-production for commercial high-converting assets.",
    skills: [
      { name: "Canva Pro", level: "Advanced", desc: "Rapid high-impact ad creatives, carousels, and visual decks", relatedProject: "Social Media Growth" },
      { name: "Adobe Suite", level: "Proficient", desc: "Visual storytelling, photo editing, graphic composition", relatedProject: "Social Media Growth" },
      { name: "CapCut", level: "Advanced", desc: "Fast-paced short-form reels, typography hooks, sound design", relatedProject: "Social Media Growth" },
      { name: "Cinema Camera Systems", level: "Advanced", desc: "Studio setup, sensor calibration, follow-focus rigs, staging", relatedProject: "Behind The Creative" },
      { name: "Studio Lighting Rigging", level: "Advanced", desc: "Key, fill, rim lighting design for fashion and e-commerce shoots", relatedProject: "Behind The Creative" }
    ]
  },
  {
    id: "web",
    name: "Web & CMS",
    color: "#10b981",
    description: "High-performance web page building, responsive UI styling, and speed optimization for conversion readiness.",
    skills: [
      { name: "WordPress", level: "Advanced", desc: "Custom page building, CMS configuration, plugin architecture", relatedProject: "Building Brand Presence" },
      { name: "Elementor Pro", level: "Advanced", desc: "Visual page design, dynamic templates, responsive layouts", relatedProject: "Building Brand Presence" },
      { name: "Yoast SEO / Rank Math", level: "Advanced", desc: "On-page metadata, XML sitemaps, schema markup", relatedProject: "Building Brand Presence" },
      { name: "WP Rocket", level: "Proficient", desc: "Caching, CSS/JS deferral, Core Web Vitals optimization", relatedProject: "Building Brand Presence" }
    ]
  },
  {
    id: "professional",
    name: "Professional & AI",
    color: "#38bdf8",
    description: "Core professional leadership, agile team execution, and next-generation AI workflows for hyper-efficient output.",
    skills: [
      { name: "Generative AI Tools", level: "Advanced", desc: "Prompt engineering for copy generation, ad concepting, data synthesis", relatedProject: "Digital Marketing Blueprint" },
      { name: "English Written Proficiency", level: "Fluent", desc: "Persuasive ad copy, technical documentation, formal client communication", relatedProject: "Social Media Growth" },
      { name: "Problem Solving", level: "Advanced", desc: "Analytical debugging of ad account roadblocks and funnel leaks", relatedProject: "Conversion Funnel Optimization" },
      { name: "Cross-functional Teamwork", level: "Advanced", desc: "Proven on-set and agency collaboration with directors, models, marketers", relatedProject: "Behind The Creative" }
    ]
  }
];

export const constellationNodes = [
  { id: "ga4", label: "GA4 Analytics", category: "analytics", x: -140, y: -80, size: 28 },
  { id: "gads", label: "Google Ads", category: "performance", x: 120, y: -90, size: 30 },
  { id: "meta", label: "Meta Ads", category: "performance", x: 160, y: 30, size: 28 },
  { id: "seo", label: "SEO & SEM", category: "organic", x: -90, y: 70, size: 26 },
  { id: "wp", label: "WordPress / CMS", category: "web", x: -180, y: 40, size: 24 },
  { id: "gtm", label: "Tag Manager", category: "analytics", x: -60, y: -130, size: 24 },
  { id: "funnel", label: "CRO Funnel", category: "performance", x: 20, y: -40, size: 32 },
  { id: "creative", label: "Studio & Cinema", category: "creative", x: 80, y: 120, size: 26 },
  { id: "ai", label: "Generative AI", category: "professional", x: 0, y: 140, size: 22 },
  { id: "canva", label: "Canva & Adobe", category: "creative", x: -40, y: 100, size: 22 },
  { id: "gsc", label: "Search Console", category: "analytics", x: -120, y: -20, size: 20 },
  { id: "sheets", label: "Excel / Budgeting", category: "professional", x: 150, y: -30, size: 20 }
];
