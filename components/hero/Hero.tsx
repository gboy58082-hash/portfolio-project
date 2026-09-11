'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ChevronRight, Play, FileText, Star, ArrowDown } from 'lucide-react';

import VerifiedCredentialCard from './VerifiedCredentialCard';

const Hero3DCanvas = dynamic(() => import('../three/Hero3DCanvas'), {
  ssr: false,
  loading: () => null,
});

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center pt-36 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-transparent"
    >

      {/* RDR2 Atmospheric Backdrop: Blood Red Moon, Smoky Fog & Crimson Vignette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blood Red Atmospheric Moon Glow */}
        <div className="absolute -top-20 right-[5%] sm:right-[15%] w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] rounded-full bg-gradient-to-br from-[#e51b24]/30 via-[#8a0c12]/15 to-transparent blur-3xl opacity-70" />
        
        {/* Subtle Textured Grunge / Silhouette Horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#080606] via-[#0d0909]/80 to-transparent" />

        {/* Ambient Crimson Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(229,27,36,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[1720px] mx-auto w-full grid lg:grid-cols-12 gap-10 xl:gap-14 items-center">
        {/* Left Column: Iconic RDR2 Typography & Call To Action */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Label matching "ROCKSTAR GAMES PRESENTS" */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black tracking-[0.25em] text-[#e51b24] uppercase">
              ★ ANSHU PRESENTS ★
            </span>
          </div>

          {/* Huge Western / Cinematic Headline matching "RED DEAD REDEMPTION II" */}
          <div className="space-y-1">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-normal tracking-wide text-white uppercase leading-[0.9] font-['Bebas_Neue',sans-serif] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
              GROWTH <br />
              <span className="text-[#e51b24] drop-shadow-[0_0_35px_rgba(229,27,36,0.7)]">
                MARKETING
              </span>
              <span className="sr-only"> - Anshu | Digital Marketing & Performance SEO Specialist</span>
            </h1>
          </div>

          {/* Star Divider Line matching RDR2 */}
          <div className="flex items-center gap-3 py-1 max-w-md">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#e51b24]" />
            <Star size={14} className="text-[#e51b24] fill-[#e51b24]" />
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#e51b24] to-transparent" />
          </div>

          {/* Slogan matching "AMERICA, 1899. THE END OF THE WILD WEST HAS BEGUN." */}
          <div className="space-y-1.5">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-[#e51b24]">
              NEW DELHI, 2026.
            </p>
            <p className="font-mono text-sm sm:text-base font-bold uppercase tracking-[0.15em] text-white">
              TURNING DIGITAL STRATEGIES INTO MEASURABLE PERFORMANCE.
            </p>
          </div>
          {/* High Impact Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-[#ded8cf] font-sans font-medium leading-relaxed max-w-2xl text-shadow">
            Digital Marketer specialized in <strong className="text-white font-bold">Performance Marketing</strong>, <strong className="text-white font-bold">SEO</strong>, <strong className="text-white font-bold">Paid Media (Google & Meta Ads)</strong>, and <strong className="text-white font-bold">E-commerce Funnel Optimization</strong>.
          </p>

          {/* Core Credentials / Bullet Points */}
          <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-[#ded8cf]">
            <div className="flex items-center gap-2 p-2.5 rounded bg-[#140c0d]/70 border border-[#261818]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e51b24]" />
              <span>20+ Months Experience &bull; Colorful Clouds</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded bg-[#140c0d]/70 border border-[#261818]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e51b24]" />
              <span>BCA Graduate &bull; MDU Rohtak</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded bg-[#140c0d]/70 border border-[#261818]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e51b24]" />
              <span>7 Internshala Certified Specializations</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded bg-[#140c0d]/70 border border-[#261818]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e51b24]" />
              <span>70+ Shoots Commercial Studio Edge</span>
            </div>
          </div>

          {/* Primary Rockstar CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#projects"
              className="rdr-btn-primary"
            >
              <span>INSPECT WORK</span>
              <ChevronRight size={18} />
            </Link>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="rdr-btn-secondary cursor-pointer"
              >
                <FileText size={16} />
                <span>OFFICIAL RESUME</span>
              </button>
            )}

            <Link
              href="#contact"
              className="px-5 py-3.5 rounded font-['Oswald',sans-serif] text-sm uppercase tracking-widest text-[#ded8cf] hover:text-[#e51b24] border border-[#ded8cf]/20 hover:border-[#e51b24] transition-all"
            >
              DISPATCH INQUIRY
            </Link>
          </div>
        </div>

        {/* Right Column: 3D Interactive VERIFIED CREDENTIAL Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center w-full">
          <VerifiedCredentialCard />
        </div>
      </div>
    </section>
  );
}
