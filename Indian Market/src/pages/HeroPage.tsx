import React from 'react';
import { ArrowRight, Layers, MapPin, Sparkles, Award, Globe, Phone } from 'lucide-react';
import { companyProfile } from '../data/companyData';
import { CurvedCardCarousel } from '../components/CurvedCardCarousel';
import { CompanyLogo } from '../components/CompanyLogo';
import { ThemeToggle } from '../components/ThemeToggle';
import type { ProjectItem } from '../types';

interface HeroPageProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
  onSelectProject?: (project: ProjectItem) => void;
  onSwitchToFullSite: () => void;
}

export const HeroPage: React.FC<HeroPageProps> = ({
  onOpenContact,
  onExploreWork,
  onSelectProject,
  onSwitchToFullSite
}) => {
  return (
    <div className="hero-page-standalone">
      {/* Background Gradients & Ambient Glow */}
      <div className="hero-bg-overlay" />
      <div className="hero-grid-pattern" />

      {/* Dedicated In-Hero Top Bar (NO global navbar with 10 links) */}
      <header className="hero-page-topbar">
        {/* Brand Logo on extreme left */}
        <div className="hero-page-logo-wrap">
          <CompanyLogo height={42} />
        </div>

        {/* Minimal Controls on extreme right */}
        <div className="hero-page-topbar-actions">
          {/* Switch to Full Website Button */}
          <button
            className="hero-page-switch-btn"
            onClick={onSwitchToFullSite}
            title="View Full Multi-Section Website"
          >
            <Globe size={14} />
            <span>Full Website</span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Direct CTA */}
          <button
            className="btn-primary hero-page-cta-pill"
            onClick={onOpenContact}
          >
            <Phone size={14} />
            <span>Let's Work Together</span>
          </button>
        </div>
      </header>

      {/* Hero Center Body - Zero Side Space on Container */}
      <main className="hero-page-body">
        {/* Centered Headline & Badge Content */}
        <div className="hero-page-text-content">
          {/* Badge */}
          <div className="section-tag hero-badge-anim" style={{ marginBottom: '0.6rem' }}>
            <Sparkles size={14} />
            <span>{companyProfile.name} &bull; ESTD {companyProfile.established} &bull; PAN-INDIA EXECUTION</span>
          </div>

          {/* Big Bold Headline */}
          <h1 className="hero-title hero-title-anim">
            Turning Ideas into <span className="text-orange">Impact</span>
          </h1>

          {/* Sub-Positioning */}
          <div className="hero-positioning hero-subline-anim">
            Brand Activation &bull; Events &bull; Branding
          </div>
        </div>

        {/* Arched Curved Video Carousel - 100% Full Width (ZERO side space) */}
        <div className="hero-page-carousel-fullwidth hero-carousel-anim">
          <CurvedCardCarousel
            onSelectProject={onSelectProject}
            onExploreWork={onExploreWork}
          />
        </div>

        {/* Centered CTAs & Action Area */}
        <div className="hero-page-cta-wrapper hero-cta-anim">
          {/* Primary Action Button inside Animated Dashed Ring */}
          <div className="btn-pill-ring-container">
            <div className="btn-dashed-ring" />
            <button
              className="btn-pill-hero"
              onClick={onOpenContact}
              aria-label="Let's Work Together"
            >
              <span>Let's Work Together</span>
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Secondary Action Button */}
          <button
            className="btn-secondary"
            onClick={onSwitchToFullSite}
            style={{
              borderRadius: '9999px',
              padding: '0.85rem 1.8rem',
              fontSize: '0.95rem'
            }}
          >
            Explore Full Directory
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="hero-page-highlights-bar hero-cta-anim">
          <div className="hero-highlight-pill">
            <div className="hero-highlight-icon">
              <Layers size={17} color="var(--accent-orange)" />
            </div>
            <div>
              <div className="hero-highlight-title">Integrated Workflow</div>
              <div className="hero-highlight-sub">Concept &bull; Production &bull; Manpower</div>
            </div>
          </div>

          <div className="hero-highlight-pill">
            <div className="hero-highlight-icon">
              <MapPin size={17} color="var(--accent-orange)" />
            </div>
            <div>
              <div className="hero-highlight-title">Pan-India Reach</div>
              <div className="hero-highlight-sub">Maharashtra &bull; Gujarat &bull; Karnataka &bull; Multi-City</div>
            </div>
          </div>

          <div className="hero-highlight-pill">
            <div className="hero-highlight-icon">
              <Award size={17} color="var(--accent-orange)" />
            </div>
            <div>
              <div className="hero-highlight-title">{companyProfile.experienceYears} Track Record</div>
              <div className="hero-highlight-sub">120,000+ Participants Engaged</div>
            </div>
          </div>
        </div>
      </main>

      {/* Clean Minimal Footer Credit */}
      <footer className="hero-page-footer">
        <span>&copy; {new Date().getFullYear()} {companyProfile.name}. All Rights Reserved.</span>
        <button
          className="hero-page-link-btn"
          onClick={onSwitchToFullSite}
        >
          View All Services, Portfolio & Directory &rarr;
        </button>
      </footer>
    </div>
  );
};
