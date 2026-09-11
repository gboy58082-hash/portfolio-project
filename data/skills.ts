export interface Skill {
  id: string;
  name: string;
  category: string;
  level: "Advanced" | "Proficient" | "Specialist";
  description: string;
  relatedProjects: string[];
  toolsUsed: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  color: string;
  accent: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "performance",
    name: "PERFORMANCE",
    color: "#00f2fe",
    accent: "rgba(0, 242, 254, 0.2)",
    description: "Data-backed paid customer acquisition, campaign architecture, and high-conversion ad scaling across major ad networks.",
    skills: [
      {
        id: "google-ads",
        name: "Google Ads",
        category: "PERFORMANCE",
        level: "Advanced",
        description: "Search, Performance Max, Display, Keyword Planner & Editor campaign structures.",
        relatedProjects: ["Driving Results with Google Ads", "Conversion Funnel Optimization"],
        toolsUsed: ["Google Ads", "Keyword Planner", "Google Ads Editor"]
      },
      {
        id: "facebook-ads",
        name: "Facebook Ads",
        category: "PERFORMANCE",
        level: "Advanced",
        description: "Meta Ads Manager custom audience segmentation, lookalikes, and dynamic creative testing.",
        relatedProjects: ["Strategy, Growth & Engagement for Social Media", "Digital Marketing Blueprint"],
        toolsUsed: ["Meta Ads Manager", "Meta Business Suite"]
      },
      {
        id: "paid-social",
        name: "Paid Social Media",
        category: "PERFORMANCE",
        level: "Advanced",
        description: "Cross-platform full-funnel activation across Meta and LinkedIn Campaign Manager.",
        relatedProjects: ["Strategy, Growth & Engagement for Social Media"],
        toolsUsed: ["LinkedIn Campaign Manager", "Meta Ads Manager"]
      },
      {
        id: "sem",
        name: "SEM",
        category: "PERFORMANCE",
        level: "Advanced",
        description: "Search intent mapping, bid pacing, negative keyword lists, and quality score optimization.",
        relatedProjects: ["Driving Results with Google Ads"],
        toolsUsed: ["Google Ads", "SEMrush", "Google Trends"]
      }
    ]
  },
  {
    id: "organic",
    name: "ORGANIC GROWTH",
    color: "#4facfe",
    accent: "rgba(79, 172, 254, 0.2)",
    description: "Sustainable long-term organic search discovery, content architecture, and authority building.",
    skills: [
      {
        id: "seo",
        name: "SEO",
        category: "ORGANIC GROWTH",
        level: "Advanced",
        description: "Technical crawl audits, on-page optimization, backlink roadmaps, and schema markup.",
        relatedProjects: ["Building Brand Presence", "Conversion Funnel Optimization"],
        toolsUsed: ["Google Search Console", "Ahrefs", "Screaming Frog", "Yoast SEO"]
      },
      {
        id: "blogging",
        name: "Blogging",
        category: "ORGANIC GROWTH",
        level: "Proficient",
        description: "Pillar-cluster article architecture designed for featured snippets and organic commercial traffic.",
        relatedProjects: ["Building Brand Presence"],
        toolsUsed: ["WordPress", "SEMrush"]
      },
      {
        id: "content-writing",
        name: "Content Writing",
        category: "ORGANIC GROWTH",
        level: "Proficient",
        description: "High-retention copy for landing pages, ad headlines, and search-intent articles.",
        relatedProjects: ["Strategy, Growth & Engagement for Social Media", "Building Brand Presence"],
        toolsUsed: ["Google Docs", "WordPress", "Canva"]
      },
      {
        id: "market-research",
        name: "Market Research",
        category: "ORGANIC GROWTH",
        level: "Proficient",
        description: "Competitor gap analysis, search volume seasonality, and consumer journey mapping.",
        relatedProjects: ["Driving Results with Google Ads", "Digital Marketing Blueprint"],
        toolsUsed: ["Google Trends", "SEMrush", "Ahrefs"]
      }
    ]
  },
  {
    id: "analytics",
    name: "ANALYTICS",
    color: "#818cf8",
    accent: "rgba(129, 140, 248, 0.2)",
    description: "Attribution modeling, custom funnel tracking, and quantitative decision-making frameworks.",
    skills: [
      {
        id: "ga4",
        name: "GA4",
        category: "ANALYTICS",
        level: "Advanced",
        description: "Custom funnel exploration reports, enhanced e-commerce events, and data-driven attribution.",
        relatedProjects: ["Conversion Funnel Optimization", "Digital Marketing Blueprint"],
        toolsUsed: ["Google Analytics 4", "Google Tag Manager"]
      },
      {
        id: "gsc",
        name: "Google Search Console",
        category: "ANALYTICS",
        level: "Advanced",
        description: "Indexation tracking, organic query clicks, CTR analysis, and crawl error debugging.",
        relatedProjects: ["Building Brand Presence"],
        toolsUsed: ["Google Search Console", "Site Kit"]
      },
      {
        id: "gtm",
        name: "Google Tag Manager",
        category: "ANALYTICS",
        level: "Proficient",
        description: "Web container tag deployment, trigger logic, and conversion event verification.",
        relatedProjects: ["Conversion Funnel Optimization", "Driving Results with Google Ads"],
        toolsUsed: ["Google Tag Manager"]
      }
    ]
  },
  {
    id: "creative",
    name: "CREATIVE",
    color: "#a855f7",
    accent: "rgba(168, 85, 247, 0.2)",
    description: "Hands-on studio production, commercial visual storytelling, and high-retention post-production.",
    skills: [
      {
        id: "canva",
        name: "Canva",
        category: "CREATIVE",
        level: "Advanced",
        description: "Rapid ad creative generation, high-engagement carousels, and client pitch assets.",
        relatedProjects: ["Strategy, Growth & Engagement for Social Media", "Driving Results with Google Ads"],
        toolsUsed: ["Canva Pro"]
      },
      {
        id: "adobe-suite",
        name: "Adobe Suite",
        category: "CREATIVE",
        level: "Proficient",
        description: "Visual composition, photo correction, color grading, and commercial asset formatting.",
        relatedProjects: ["Strategy, Growth & Engagement for Social Media"],
        toolsUsed: ["Photoshop", "Illustrator"]
      },
      {
        id: "capcut",
        name: "CapCut",
        category: "CREATIVE",
        level: "Advanced",
        description: "Short-form video editing, hook pacing, dynamic typography, and sound effects.",
        relatedProjects: ["Strategy, Growth & Engagement for Social Media"],
        toolsUsed: ["CapCut Pro"]
      },
      {
        id: "creative-strategy",
        name: "Creative Strategy",
        category: "CREATIVE",
        level: "Advanced",
        description: "Direct-response ad scripting, visual storytelling, and multi-angle testing frameworks.",
        relatedProjects: ["Strategy, Growth & Engagement for Social Media", "Creative Production"],
        toolsUsed: ["Canva", "CapCut", "Meta Ads Manager"]
      }
    ]
  },
  {
    id: "web",
    name: "WEB",
    color: "#10b981",
    accent: "rgba(16, 185, 129, 0.2)",
    description: "Conversion-optimized CMS architecture, landing page design, and website performance hygiene.",
    skills: [
      {
        id: "wordpress",
        name: "WordPress",
        category: "WEB",
        level: "Advanced",
        description: "CMS deployment, SEO plugin architecture, database caching, and blog management.",
        relatedProjects: ["Building Brand Presence"],
        toolsUsed: ["WordPress", "WP Rocket", "Rank Math"]
      },
      {
        id: "elementor",
        name: "Elementor",
        category: "WEB",
        level: "Advanced",
        description: "High-conversion responsive page design, custom layout blocks, and dynamic UI elements.",
        relatedProjects: ["Building Brand Presence"],
        toolsUsed: ["Elementor Pro", "WordPress"]
      }
    ]
  },
  {
    id: "professional",
    name: "PROFESSIONAL",
    color: "#38bdf8",
    accent: "rgba(56, 189, 248, 0.2)",
    description: "Core collaborative execution, analytical problem solving, and modern AI acceleration.",
    skills: [
      {
        id: "problem-solving",
        name: "Problem Solving",
        category: "PROFESSIONAL",
        level: "Advanced",
        description: "Diagnosing funnel drop-offs, untangling campaign attribution, and debugging ad account flags.",
        relatedProjects: ["Conversion Funnel Optimization", "Digital Marketing Blueprint"],
        toolsUsed: ["GA4", "GTM", "Excel"]
      },
      {
        id: "teamwork",
        name: "Teamwork",
        category: "PROFESSIONAL",
        level: "Advanced",
        description: "Collaborative coordination across creative production crews, directors, and marketing managers.",
        relatedProjects: ["Creative Production", "Social Media Growth"],
        toolsUsed: ["Colorful Clouds India", "Meta Business Suite"]
      },
      {
        id: "english-comm",
        name: "English Communication",
        category: "PROFESSIONAL",
        level: "Proficient",
        description: "Clear written technical reports, persuasive ad copy, and executive campaign briefs.",
        relatedProjects: ["All Projects"],
        toolsUsed: ["Written Proficiency"]
      },
      {
        id: "gen-ai",
        name: "Generative AI Tools",
        category: "PROFESSIONAL",
        level: "Advanced",
        description: "Leveraging LLMs for ad angle research, copy ideation, content structuring, and data synthesis.",
        relatedProjects: ["Digital Marketing Blueprint"],
        toolsUsed: ["Generative AI Models"]
      }
    ]
  }
];
