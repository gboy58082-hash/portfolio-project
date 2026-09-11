'use client';

import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin } from 'lucide-react';

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const resumeText = `ANSHU
Digital Marketer & Creative Producer
Email: maxgamer7642@gmail.com | Phone: +91 9667461227 | Location: New Delhi

CAREER OBJECTIVE
Motivated digital marketer passionate about brand strategy and online consumer journeys, seeking to apply funnel optimization, email marketing, and paid campaign execution for an innovative e-commerce brand.

WORK EXPERIENCE
Cameraman Assistant (Jul 2024 - Apr 2026)
Colorful Clouds India, OKHLA, New Delhi
- 20+ months of hands-on experience in studio, fashion, model, and e-commerce production, specializing in camera setup, studio lighting, and equipment staging.
- Proficient in cinema camera systems, follow-focus rigs, and professional lighting equipment, supporting high-quality fashion and commercial productions.
- Managed production equipment for 70+ e-commerce shoots and 20+ model shoots, ensuring efficient setup, operation, and smooth on-set workflow.
- Skilled in designing, rigging, and configuring studio lighting setups for model and product photography while maintaining consistent visual quality and production standards.

PROJECTS
1. Strategy, Growth & Engagement for Social Media (Jul 2026 - Aug 2026)
   - Executed a 3-month organic and paid campaign across Instagram, Facebook, and LinkedIn using full-funnel creatives that consistently achieved target reach, engagement, and conversion KPIs.
   - Tools Used: Meta Ads Manager, Meta Business Suite, LinkedIn Campaign Manager, Canva, Adobe Suite, CapCut, Meta/LinkedIn Insights, Google Analytics, Buffer/Hootsuite.

2. Conversion Funnel Optimization (Aug 2026)
   - Built an integrated e-commerce growth strategy for the Google Merchandise Store using GA4 analytics, SEO, paid ads, CRO, and email nurture sequences to maximize acquisition and conversions.
   - Tools Used: Google Analytics 4 (GA4), Google Tag Manager, Google Ads, Ahrefs.

3. Digital Marketing Blueprint (Aug 2026)
   - Executed a 360° digital marketing strategy across SEO, Paid Ads, Social Media, and Email Marketing, combining custom creative assets with budget optimization to drive ROI and brand growth.
   - Tools Used: Google Analytics 4 (GA4), Meta Ads Manager, Google Ads, SEMrush, Brevo, Canva, Meta Business Suite, MS Excel/Google Sheets.

4. Driving Results with Google Ads (Jun 2026 - Jul 2026)
   - Devised a ₹10 lakh full-funnel Google Ads expansion strategy for a service brand entering a new Indian market to maximize brand presence and lead growth.
   - Tools Used: Google Ads (Keyword Planner & Editor), Google Trends, SEMrush, Google Analytics 4 (GA4), Google Tag Manager, Canva.

5. Building Brand Presence (Mar 2026)
   - Designed an SEO-compliant WordPress website and created a 3-month organic SEO roadmap using keyword research, backlinks, and analytics to drive sustainable traffic growth.
   - Tools & Plugins Used: WordPress, Elementor, Yoast SEO/Rank Math, WP Rocket, Site Kit by Google, GA4, Google Search Console, Ahrefs/SEMrush, Screaming Frog.

SKILLS
- English Proficiency (Written), WordPress, Search Engine Optimization (SEO)
- Google AdWords, Social Media Marketing, Content Writing
- Canva, Facebook Ads, Problem Solving
- Teamwork, Digital Marketing, Generative AI Tools
- Search Engine Marketing (SEM), Market research, Blogging

EDUCATION
- Bachelor of Computer Applications (BCA), Arts (2021 - 2026) - MDU Rohtak
- Senior Secondary (XII), CBSE Arts (2020) - Sarvodaya Bal Vidyalaya Rly Colony Tuglakabad ND
- Secondary (X), CBSE (2018) - Sarvodaya Bal Vidyalaya Rly Colony Tuglakabad ND

TRAININGS / CERTIFICATIONS
- Digital Marketing (Mar 2026 - Present) - Internshala, Virtual
`;
    const element = document.createElement('a');
    const file = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Anshu_Digital_Marketing_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl shadow-cyan-500/10"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 font-mono text-xs font-semibold">
              ATS-READY RESUME
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              VERIFIED OFFICIAL CREDENTIALS
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-mono font-bold hover:shadow-[0_0_15px_#00f2fe] transition-all"
            >
              <Download size={14} />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div id="printable-resume" className="space-y-6 text-slate-300 text-sm leading-relaxed">
          {/* Header */}
          <div className="text-center pb-6 border-b border-white/10">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">
              ANSHU
            </h2>
            <p className="font-mono text-cyan-400 font-semibold text-sm mb-3">
              Digital Marketer & Creative Production Specialist
            </p>
            <div className="flex justify-center items-center gap-3 sm:gap-6 flex-wrap text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Mail size={13} className="text-cyan-400" /> maxgamer7642@gmail.com
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone size={13} className="text-cyan-400" /> +91 9667461227
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-cyan-400" /> New Delhi
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
              CAREER OBJECTIVE
            </h3>
            <p className="text-slate-300">
              Motivated digital marketer passionate about brand strategy and online consumer journeys, seeking to apply funnel optimization, email marketing, and paid campaign execution for an innovative e-commerce brand.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
              WORK EXPERIENCE
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline flex-wrap">
                <strong className="text-white text-base">Cameraman Assistant</strong>
                <span className="font-mono text-xs text-cyan-400">Jul 2024 — Apr 2026</span>
              </div>
              <div className="text-slate-400 text-xs italic">
                Colorful Clouds India, OKHLA, New Delhi
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs sm:text-sm pl-1">
                <li>20+ months of hands-on experience in studio, fashion, model, and e-commerce production, specializing in camera setup, studio lighting, and equipment staging.</li>
                <li>Proficient in cinema camera systems, follow-focus rigs, and professional lighting equipment, supporting high-quality fashion and commercial productions.</li>
                <li>Managed production equipment for 70+ e-commerce shoots and 20+ model shoots, ensuring efficient setup, operation, and smooth on-set workflow.</li>
                <li>Skilled in designing, rigging, and configuring studio lighting setups for model and product photography while maintaining consistent visual quality and production standards.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
              DIGITAL MARKETING PROJECTS
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <div className="flex justify-between items-baseline flex-wrap font-semibold text-white">
                  <span>Strategy, Growth & Engagement for Social Media</span>
                  <span className="font-mono text-xs text-cyan-400 font-normal">Jul 2026 – Aug 2026</span>
                </div>
                <p className="text-slate-300 text-xs mt-1">
                  Executed a 3-month organic and paid campaign across Instagram, Facebook, and LinkedIn using full-funnel creatives that consistently achieved target reach, engagement, and conversion KPIs.
                </p>
                <p className="text-slate-400 text-[11px] font-mono mt-0.5">
                  Tools: Meta Ads Manager, Meta Business Suite, LinkedIn Campaign Manager, Canva, Adobe Suite, CapCut, Meta/LinkedIn Insights, GA4, Buffer/Hootsuite.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline flex-wrap font-semibold text-white">
                  <span>Conversion Funnel Optimization (Google Merchandise Store)</span>
                  <span className="font-mono text-xs text-cyan-400 font-normal">Aug 2026</span>
                </div>
                <p className="text-slate-300 text-xs mt-1">
                  Built an integrated e-commerce growth strategy using GA4 analytics, SEO, paid ads, CRO, and email nurture sequences to maximize acquisition and conversions.
                </p>
                <p className="text-slate-400 text-[11px] font-mono mt-0.5">
                  Tools: Google Analytics 4 (GA4), Google Tag Manager, Google Ads, Ahrefs.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline flex-wrap font-semibold text-white">
                  <span>Driving Results with Google Ads</span>
                  <span className="font-mono text-xs text-cyan-400 font-normal">Jun 2026 – Jul 2026</span>
                </div>
                <p className="text-slate-300 text-xs mt-1">
                  Devised a ₹10 lakh full-funnel Google Ads expansion strategy for a service brand entering a new Indian market to maximize brand presence and lead growth.
                </p>
                <p className="text-slate-400 text-[11px] font-mono mt-0.5">
                  Tools: Google Ads, Keyword Planner, Google Ads Editor, Google Trends, SEMrush, GA4, GTM, Canva.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
                EDUCATION
              </h3>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="font-semibold text-white">Bachelor of Computer Applications (BCA)</div>
                  <div className="text-slate-400">MDU Rohtak • 2021 — 2026</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Senior Secondary (XII) CBSE — Arts</div>
                  <div className="text-slate-400">Sarvodaya Bal Vidyalaya • 2020</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Secondary (X) CBSE</div>
                  <div className="text-slate-400">Sarvodaya Bal Vidyalaya • 2018</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
                TRAINING & CERTIFICATION
              </h3>
              <div className="text-xs">
                <div className="font-semibold text-white">Digital Marketing Specialization</div>
                <div className="text-cyan-400 font-mono">Internshala • Mar 2026 — Present</div>
                <p className="text-slate-400 text-[11px] mt-1">
                  Marketing Fundamentals, Website Building & Ranking, SEM, Social Media Organic, Paid Social Media Marketing, Lead Engage Sell, Google Analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
