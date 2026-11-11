import { useState, lazy, Suspense } from 'react';
import type { ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { HeldProgramsSection } from './components/HeldProgramsSection';
import { ClientsPartnersSection } from './components/ClientsPartnersSection';
import { WhyWorkWithUsSection } from './components/WhyWorkWithUsSection';
import { PresenceSection } from './components/PresenceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Phone } from 'lucide-react';

// Code-split heavy modals to minimize initial bundle size and speed up page load
const BriefModal = lazy(() => import('./components/BriefModal').then(m => ({ default: m.BriefModal })));
const ProjectDetailModal = lazy(() => import('./components/ProjectDetailModal').then(m => ({ default: m.ProjectDetailModal })));

export function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="app-container"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-primary)',
        width: '100%',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      {/* 1. Navbar */}
      <Navbar
        onNavigate={scrollToSection}
        onOpenContact={() => setIsBriefOpen(true)}
      />

      <main>
        {/* 2. Hero — Turning Ideas into Impact */}
        <HeroSection
          onExploreWork={() => scrollToSection('portfolio')}
          onWorkTogether={() => setIsBriefOpen(true)}
          onSelectProject={setSelectedProject}
        />

        {/* 3. About Us */}
        <AboutSection
          onLearnServices={() => scrollToSection('services')}
        />

        {/* 4. Expertise / Services (7 Services) */}
        <ServicesSection />

        {/* 7. Selected Work / Portfolio */}
        <PortfolioSection
          onSelectProject={setSelectedProject}
        />

        {/* 8. Held Programs (19 Items Directory with Logos) */}
        <HeldProgramsSection
          onSelectProject={setSelectedProject}
        />

        {/* 9. Clients & Partners */}
        <ClientsPartnersSection />

        {/* 10. Why Work With Us */}
        <WhyWorkWithUsSection />

        {/* 12. Our Presence (Geographic Reach) */}
        <PresenceSection />

        {/* 14. Contact Section with Direct Form & Director Details */}
        <ContactSection />
      </main>

      {/* 15. Footer */}
      <Footer
        onNavigate={scrollToSection}
      />

      {/* Floating Quick Action CTA */}
      <button
        className="floating-contact-btn"
        onClick={() => setIsBriefOpen(true)}
        aria-label="Let's Work Together"
      >
        <Phone size={15} />
        <span>Work With Us</span>
      </button>

      {/* Campaign Brief / RFP Modal - only mounts when opened */}
      {isBriefOpen && (
        <Suspense fallback={null}>
          <BriefModal
            isOpen={isBriefOpen}
            onClose={() => setIsBriefOpen(false)}
          />
        </Suspense>
      )}

      {/* Project Case Detail Deep-Dive Modal - only mounts when selected */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onInquire={() => setIsBriefOpen(true)}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
