'use client';

import React from 'react';
import { Globe, Crosshair, Video, BarChart2, Award } from 'lucide-react';

export default function StatsStrip() {
  const stats = [
    {
      icon: <Globe size={22} className="text-[#e51b24]" />,
      title: "FULL-FUNNEL ADS",
      desc: "Google Ads & Meta Ads with precision STAG structures."
    },
    {
      icon: <Crosshair size={22} className="text-[#e51b24]" />,
      title: "TECHNICAL SEO",
      desc: "Keyword research, technical audits & organic ranking."
    },
    {
      icon: <Video size={22} className="text-[#e51b24]" />,
      title: "70+ COMMERCE SHOOTS",
      desc: "Studio lighting, cinema camera rigs & model staging."
    },
    {
      icon: <BarChart2 size={22} className="text-[#e51b24]" />,
      title: "GA4 DATA ENGINE",
      desc: "GTM event tracking & conversion funnel exploration."
    },
    {
      icon: <Award size={22} className="text-[#e51b24]" />,
      title: "7 VERIFIED MODULES",
      desc: "Internshala Digital Marketing comprehensive training."
    }
  ];

  return (
    <section className="bg-[#050303] border-b border-[#261818] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1720px] mx-auto px-2 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#261818]">
          {stats.map((item, idx) => (
            <div key={item.title} className={`flex items-start gap-3 ${idx > 0 ? 'md:pl-6' : ''} pt-4 md:pt-0`}>
              <div className="shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <h4 className="font-['Oswald','Bebas_Neue',sans-serif] text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-white text-xs leading-tight mt-1 font-sans font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
