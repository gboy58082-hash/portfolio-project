'use client';

import React from 'react';
import Link from 'next/link';
import { Target, Search, BarChart3, Video, ChevronRight } from 'lucide-react';

export default function FeatureCardsStrip() {
  const features = [
    {
      icon: <Target size={26} className="text-[#e51b24]" />,
      title: "PAID MEDIA",
      desc: "Full-funnel Google Ads & Meta campaigns engineered for high ROAS and scalable CAC.",
      linkText: "EXPLORE CAMPAIGNS",
      href: "/#projects"
    },
    {
      icon: <Search size={26} className="text-[#e51b24]" />,
      title: "ORGANIC SEO",
      desc: "Deep keyword difficulty research, on-page optimization, and technical crawl architecture.",
      linkText: "DISCOVER STRATEGY",
      href: "/#projects"
    },
    {
      icon: <BarChart3 size={26} className="text-[#e51b24]" />,
      title: "GA4 ANALYTICS",
      desc: "Google Tag Manager event pipelines, custom exploration reports, and conversion tracking.",
      linkText: "INSPECT FUNNELS",
      href: "/#skills"
    },
    {
      icon: <Video size={26} className="text-[#e51b24]" />,
      title: "STUDIO PRODUCTION",
      desc: "20+ months on-set rigging cinema camera systems and 3-point lighting for 70+ shoots.",
      linkText: "VIEW STUDIO EXP",
      href: "/#experience"
    }
  ];

  return (
    <section className="bg-[#050404] border-y border-[#261818] py-2">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#261818]">
          {features.map((item) => (
            <div
              key={item.title}
              className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#120b0c] transition-colors relative"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="w-12 h-12 rounded bg-[#1c1011] border border-[#e51b24]/30 flex items-center justify-center group-hover:border-[#e51b24] transition-colors">
                    {item.icon}
                  </div>
                </div>

                <h3 className="font-['Oswald','Bebas_Neue',sans-serif] text-xl font-bold tracking-wider text-white uppercase mb-2">
                  {item.title}
                </h3>

                <p className="text-white text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  {item.desc}
                </p>
              </div>

              <Link
                href={item.href}
                className="inline-flex items-center gap-1 font-mono text-[11px] font-bold tracking-widest text-[#e51b24] group-hover:text-[#ff3b44] uppercase transition-colors"
              >
                <span>{item.linkText}</span>
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Bottom Red Line Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#e51b24] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
