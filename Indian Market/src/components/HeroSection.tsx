import React from 'react';
import { Layers, MapPin, Sparkles, Award } from 'lucide-react';
import { companyProfile } from '../data/companyData';
import { CurvedCardCarousel } from './CurvedCardCarousel';
import type { ProjectItem } from '../types';

interface HeroSectionProps {
  onExploreWork: () => void;
  onWorkTogether: () => void;
  onSelectProject?: (project: ProjectItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onWorkTogether: _onWorkTogether,
  onSelectProject
}) => {
  return (
    <section id="hero" className="hero-wrapper">
      <div className="hero-bg-overlay" />
      <div className="hero-grid-pattern" />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
        <div className="hero-content">
          {/* Company Badge / Tagline with entrance animation */}
          <div className="section-tag hero-badge-anim hero-main-badge" style={{ marginBottom: '0.6rem' }}>
            <Sparkles size={14} />
            <span className="hero-badge-full-text">{companyProfile.name} &bull; ESTD {companyProfile.established} &bull; PAN-INDIA EXECUTION</span>
            <span className="hero-badge-short-text">ESTD {companyProfile.established} &bull; PAN-INDIA EXECUTION</span>
          </div>

          {/* Primary Big Bold Headline */}
          <h1 className="hero-title hero-title-anim">
            Turning Ideas into <span className="text-orange">Impact</span>
          </h1>

          {/* Sub-Positioning */}
          <div className="hero-positioning hero-subline-anim">
            Brand Activation &bull; Events &bull; Branding
          </div>
        </div>

        {/* Arched Curved Video Carousel of 10 Held Event Cards - ZERO SIDE SPACE */}
        <div className="hero-carousel-anim" style={{ width: '100%', maxWidth: '100%', margin: '0.8rem 0 1.6rem', padding: 0, overflow: 'hidden' }}>
          <CurvedCardCarousel
            onSelectProject={onSelectProject}
            onExploreWork={onExploreWork}
          />
        </div>

        <div className="hero-content">
          {/* Quick Key Highlights Bar */}
          <div className="hero-cta-anim hero-highlights-bar">
            <div className="hero-highlight-item" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'var(--accent-orange-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Layers size={18} color="var(--accent-orange)" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)' }}>Integrated Workflow</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Concept &bull; Production &bull; Manpower</div>
              </div>
            </div>

            <div className="hero-highlight-item" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'var(--accent-orange-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <MapPin size={18} color="var(--accent-orange)" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)' }}>Pan-India Reach</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Maharashtra &bull; Gujarat &bull; Karnataka &bull; Multi-City</div>
              </div>
            </div>

            <div className="hero-highlight-item" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'var(--accent-orange-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Award size={18} color="var(--accent-orange)" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)' }}>{companyProfile.experienceYears} Track Record</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>120,000+ Participants Engaged</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
