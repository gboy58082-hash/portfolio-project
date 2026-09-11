import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BehindTheCreative from './components/BehindTheCreative';
import Experience from './components/Experience';
import ProjectsGallery from './components/ProjectsGallery';
import CaseStudyModal from './components/CaseStudyModal';
import SkillsConstellation from './components/SkillsConstellation';
import MarketingToolbox from './components/MarketingToolbox';
import Education from './components/Education';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="app-root" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Custom 3D Glowing Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section with WebGL Three.js Centerpiece */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* About Me Section with 3D Profile Orb & Pillars */}
        <About />

        {/* Behind The Creative - Major Differentiator Section */}
        <BehindTheCreative />

        {/* Commercial Experience Section (Colorful Clouds India) */}
        <Experience />

        {/* Digital Marketing Projects Gallery & Case Studies */}
        <ProjectsGallery
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Interactive 3D Skills Constellation */}
        <SkillsConstellation />

        {/* Marketing Toolbox 18-tool Workspace */}
        <MarketingToolbox />

        {/* Education & Internshala Certifications */}
        <Education />

        {/* Let's Build Something That Performs - Contact Section */}
        <Contact
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Agency Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* ATS Resume Viewer & Download Modal */}
      {isResumeOpen && (
        <ResumeModal
          onClose={() => setIsResumeOpen(false)}
        />
      )}
    </div>
  );
}
