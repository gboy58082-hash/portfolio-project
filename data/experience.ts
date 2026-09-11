export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  summary: string;
  responsibilities: string[];
  metrics: { value: string; label: string }[];
  gearStaging: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  field?: string;
  board?: string;
  highlights: string;
}

export interface CertificationData {
  title: string;
  provider: string;
  period: string;
  status: string;
  modules: { title: string; description: string }[];
}

export const workExperience: ExperienceItem[] = [
  {
    id: "colorful-clouds",
    role: "Cameraman Assistant",
    company: "Colorful Clouds India",
    location: "Okhla, New Delhi",
    period: "Jul 2024 — Apr 2026",
    duration: "20+ Months Experience",
    summary: "20+ months of hands-on experience in studio, fashion, model, and e-commerce production, specializing in camera setup, studio lighting, and equipment staging.",
    responsibilities: [
      "Proficient in cinema camera systems, follow-focus rigs, and professional lighting equipment, supporting high-quality fashion and commercial productions.",
      "Managed production equipment for 70+ e-commerce shoots and 20+ model shoots, ensuring efficient setup, operation, and smooth on-set workflow.",
      "Skilled in designing, rigging, and configuring studio lighting setups for model and product photography while maintaining consistent visual quality and production standards.",
      "Ensured flawless on-set coordination between art directors, models, lighting grips, and post-production editors to deliver broadcast-ready assets."
    ],
    metrics: [
      { value: "20+", label: "Months On-Set Experience" },
      { value: "70+", label: "E-Commerce Shoots Managed" },
      { value: "20+", label: "Fashion & Model Shoots" },
      { value: "5", label: "Core Digital Blueprints" }
    ],
    gearStaging: [
      "Cinema Camera Systems",
      "Follow-Focus Rigs",
      "Studio Strobe & Continuous Lights",
      "Softboxes & Diffusers",
      "Gimbals & Stabilizers",
      "Turntable Product Rigs"
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "MDU Rohtak",
    period: "2021 — 2026",
    field: "Arts / Computer Applications",
    highlights: "Synthesized computing fundamentals, web architecture, analytical thinking, and database logic."
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Sarvodaya Bal Vidyalaya Rly Colony Tuglakabad ND",
    board: "CBSE — Arts",
    period: "2020",
    highlights: "Focus on humanities, critical thinking, written English expression, and cultural context."
  },
  {
    degree: "Secondary (X)",
    institution: "Sarvodaya Bal Vidyalaya Rly Colony Tuglakabad ND",
    board: "CBSE",
    period: "2018",
    highlights: "Foundational academic curriculum with distinction in problem-solving and English communication."
  }
];

export const certificationInfo: CertificationData = {
  title: "Digital Marketing Specialization",
  provider: "Internshala",
  period: "Mar 2026 — Present",
  status: "Active & Verified",
  modules: [
    { title: "Marketing Fundamentals", description: "Core marketing mix, buyer personas, consumer journey touchpoint mapping." },
    { title: "Website Building & Ranking", description: "WordPress CMS architecture, technical SEO crawl hygiene, on-page optimization." },
    { title: "Search Engine Marketing", description: "Google Ads campaign hierarchy, keyword intent clustering, bid pacing & quality score." },
    { title: "Social Media Organic", description: "Content calendar systems, engagement algorithms, short-form hook optimization." },
    { title: "Paid Social Media Marketing", description: "Meta Ads Manager, custom audience segmentation, retargeting funnels, ROAS scaling." },
    { title: "Lead, Engage, Sell in Marketing", description: "Full-funnel lead nurturing, email automation sequences, conversion psychology." },
    { title: "Google Analytics", description: "GA4 setup, custom event triggers, funnel explorations, data-driven attribution." }
  ]
};
