'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/hero/Hero';
import FeatureCardsStrip from '@/components/home/FeatureCardsStrip';
import TheStorySection from '@/components/home/TheStorySection';
import StatsStrip from '@/components/home/StatsStrip';
import Projects from '@/components/projects/Projects';
import Experience from '@/components/experience/Experience';
import Skills from '@/components/skills/Skills';
import Education from '@/components/education/Education';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/ui/Footer';
import ResumeModal from '@/components/ui/ResumeModal';
import Cursor from '@/components/ui/Cursor';
import FullPageScrollAnimation from '@/components/animation/FullPageScrollAnimation';

export default function HomePage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080606] text-[#f7f4ef] selection:bg-[#e51b24]/30 selection:text-white relative overflow-x-hidden">
      {/* Desktop Red Follower Cursor */}
      <Cursor />

      {/* Full Page Top-to-Bottom 300-Frame Scroll Animation */}
      <FullPageScrollAnimation />

      {/* RDR2 Dual-Bar Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Layout with Full Portfolio Content Floating Smoothly on Top */}
      <main id="main-content" className="relative z-10">
        {/* 1. Cinematic Hero with Anshu's photo in VERIFIED CREDENTIAL */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. 4-Column Feature Strip */}
        <FeatureCardsStrip />

        {/* 3. "THE STORY" with Studio Rigging Photo & FROM CAMERA TO CAMPAIGN */}
        <TheStorySection />

        {/* 4. 5-Item Horizontal Feature Row */}
        <StatsStrip />

        {/* 5. Selected Work / Projects */}
        <Projects />

        {/* 6. On-Set Studio Production & Rigging Suite */}
        <Experience />

        {/* 7. Marketing Arsenal & 18 Platforms Dossier */}
        <Skills />

        {/* 8. Credentials & Specialization */}
        <Education />

        {/* 9. Direct Dispatch & Inquiry Form */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* 10. Rockstar-Style Cinematic Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* ATS Resume Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}
