export interface ToolItem {
  id: string;
  name: string;
  category: "Paid Media" | "Analytics" | "SEO" | "Creative" | "Web" | "Data";
  proficiency: "Advanced" | "Proficient";
  useCase: string;
  badgeColor: string;
}

export const toolsData: ToolItem[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    category: "Paid Media",
    proficiency: "Advanced",
    useCase: "Search, Performance Max, Display, Keyword Planner & Editor",
    badgeColor: "#4285F4"
  },
  {
    id: "ga4",
    name: "GA4",
    category: "Analytics",
    proficiency: "Advanced",
    useCase: "Custom Funnel Explorations, E-Commerce Events, Attribution Modeling",
    badgeColor: "#F9AB00"
  },
  {
    id: "gtm",
    name: "Google Tag Manager",
    category: "Analytics",
    proficiency: "Proficient",
    useCase: "Web Container Deployment, Conversion Linker, Event Triggers",
    badgeColor: "#246FDB"
  },
  {
    id: "meta-ads",
    name: "Meta Ads Manager",
    category: "Paid Media",
    proficiency: "Advanced",
    useCase: "Audience Segmentation, Retargeting Funnels, Ad Creative Testing",
    badgeColor: "#0081FB"
  },
  {
    id: "meta-suite",
    name: "Meta Business Suite",
    category: "Paid Media",
    proficiency: "Advanced",
    useCase: "Cross-Platform Scheduling, Unified Inbox, Content Performance Insights",
    badgeColor: "#0064E0"
  },
  {
    id: "linkedin-ads",
    name: "LinkedIn Campaign Manager",
    category: "Paid Media",
    proficiency: "Proficient",
    useCase: "B2B Lead Generation, Job-Title Targeting, Sponsored Content",
    badgeColor: "#0A66C2"
  },
  {
    id: "semrush",
    name: "SEMrush",
    category: "SEO",
    proficiency: "Proficient",
    useCase: "Competitor Keyword Audits, Domain Authority Tracking, Backlink Analysis",
    badgeColor: "#FF642D"
  },
  {
    id: "ahrefs",
    name: "Ahrefs",
    category: "SEO",
    proficiency: "Proficient",
    useCase: "Backlink Profile Inspection, Content Explorer, Site Audit Crawls",
    badgeColor: "#0058F0"
  },
  {
    id: "canva",
    name: "Canva",
    category: "Creative",
    proficiency: "Advanced",
    useCase: "Rapid High-Converting Ad Formats, Infographic Carousels, Pitch Decks",
    badgeColor: "#7D2AE8"
  },
  {
    id: "adobe-suite",
    name: "Adobe Suite",
    category: "Creative",
    proficiency: "Proficient",
    useCase: "Photoshop Asset Prep, Illustrator Vectors, Color Grading",
    badgeColor: "#FF0000"
  },
  {
    id: "capcut",
    name: "CapCut",
    category: "Creative",
    proficiency: "Advanced",
    useCase: "Short-Form High-Retention Reels, Dynamic Subtitles, Sound Design",
    badgeColor: "#00C8FF"
  },
  {
    id: "wordpress",
    name: "WordPress",
    category: "Web",
    proficiency: "Advanced",
    useCase: "Full Site Architecture, CMS Configuration, Custom Blog Hierarchies",
    badgeColor: "#21759B"
  },
  {
    id: "elementor",
    name: "Elementor",
    category: "Web",
    proficiency: "Advanced",
    useCase: "Visual Landing Page Engineering, Mobile Breakpoint Optimization",
    badgeColor: "#92003B"
  },
  {
    id: "gsc",
    name: "Google Search Console",
    category: "SEO",
    proficiency: "Advanced",
    useCase: "Crawl Error Resolution, Organic Query Performance, Sitemap Indexing",
    badgeColor: "#4586F3"
  },
  {
    id: "screaming-frog",
    name: "Screaming Frog",
    category: "SEO",
    proficiency: "Proficient",
    useCase: "Deep Technical Site Crawls, Redirect Chains, Meta Tag Audits",
    badgeColor: "#48B44A"
  },
  {
    id: "brevo",
    name: "Brevo",
    category: "Paid Media",
    proficiency: "Proficient",
    useCase: "Automated Nurture Sequences, List Segmentation, Cart Abandonment",
    badgeColor: "#0B996F"
  },
  {
    id: "excel",
    name: "Excel",
    category: "Data",
    proficiency: "Advanced",
    useCase: "Financial Ad Forecasting, Pivot Tables, CPA / ROAS Sensitivity Analysis",
    badgeColor: "#107C41"
  },
  {
    id: "sheets",
    name: "Google Sheets",
    category: "Data",
    proficiency: "Advanced",
    useCase: "Collaborative KPI Dashboards, UTM Generator Spreadsheets, Live Reporting",
    badgeColor: "#0F9D58"
  }
];
