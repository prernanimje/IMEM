import React from 'react';
import { CheckCircle2, ShieldCheck, Globe, Workflow, ArrowRight } from 'lucide-react';
import { companyProfile } from '../data/companyData';

interface AboutSectionProps {
  onLearnServices: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnServices }) => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="about-split-grid">
          {/* Left Text Narrative */}
          <div>
            <div className="section-tag">
              <span>About Us &bull; Established {companyProfile.established}</span>
            </div>

            <h2 className="font-bebas" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.1rem)', lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
              Turning Briefs into <br />
              <span className="text-orange">Well-Managed Experiences</span>
            </h2>

            <p style={{ fontSize: '1.12rem', lineHeight: 1.75, color: 'var(--text-primary)', marginBottom: '1.4rem', fontWeight: 500 }}>
              Established in 2018, Indian Market Events & Promotion delivers event management and marketing solutions for brands, institutions and corporate teams.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.4rem' }}>
              From concept and coordination to production, manpower and execution, we provide an integrated workflow that keeps every part of the campaign connected.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              With Pan-India execution capability and a flexible manpower network, we turn briefs into well-managed experiences by combining creative thinking, operational discipline and local execution.
            </p>

            <button 
              className="btn-primary"
              onClick={onLearnServices}
              style={{ padding: '0.75rem 1.8rem' }}
            >
              Explore Our Expertise <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Highlights Cards Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Card 1: Integrated Delivery */}
            <div className="about-highlight-card">
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'var(--accent-orange-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Workflow size={22} color="var(--accent-orange)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Integrated Campaign Workflow
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  Covering the complete process from concept, spatial planning and coordination to fabrication, audio-visuals, manpower deployment and live execution.
                </p>
              </div>
            </div>

            {/* Card 2: Pan-India Capability */}
            <div className="about-highlight-card">
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'var(--accent-orange-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Globe size={22} color="var(--accent-orange)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Pan-India Execution & Manpower
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  Supported by a flexible team and local manpower network designed to support synchronized multi-city campaigns across Maharashtra, Gujarat, Karnataka and beyond.
                </p>
              </div>
            </div>

            {/* Card 3: Operational Discipline */}
            <div className="about-highlight-card">
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'var(--accent-orange-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={22} color="var(--accent-orange)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Creative Thinking & Local Execution
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  Bridging big brand concepts with on-ground local realities, vendor coordination, venue permissions and reliable real-time supervision.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Delivery Banner */}
        <div className="about-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <CheckCircle2 size={24} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.98rem', color: 'var(--text-primary)', fontWeight: 600, lineHeight: 1.5 }}>
              Event Management &bull; Marketing &bull; Brand Activation &bull; Promotion &bull; Event Production &bull; Manpower Solutions
            </div>
          </div>

          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Serving Brands, Institutions & Corporate Teams
          </div>
        </div>
      </div>
    </section>
  );
};
