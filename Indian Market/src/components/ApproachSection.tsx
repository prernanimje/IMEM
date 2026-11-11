import React from 'react';
import { approachSteps } from '../data/companyData';
import { Compass, ArrowRight } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="section-padding" style={{ backgroundColor: '#0a0c13', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="section-tag">
            <Compass size={14} />
            <span>Process &bull; Methodology</span>
          </div>

          <h2 className="font-bebas" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.1rem)', lineHeight: 1.08, color: '#ffffff', marginBottom: '0.85rem' }}>
            OUR <span className="text-orange">APPROACH</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            A structured five-step delivery framework ensuring precision alignment from initial client brief to post-campaign documentation.
          </p>
        </div>

        {/* 5 Steps Process Timeline */}
        <div className="approach-grid">
          {approachSteps.map((step) => (
            <div key={step.number} className="approach-step-card">
              <div className="approach-num">{step.number}</div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: 700 }}>
                {step.phase}
              </div>
              <h3 className="approach-title">{step.title}</h3>
              <p className="approach-desc">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Process Guarantee Note */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.88rem' }}>
            <span>Clear milestones</span>
            <ArrowRight size={14} color="var(--accent-orange)" />
            <span>Vetted local sourcing</span>
            <ArrowRight size={14} color="var(--accent-orange)" />
            <span>Live supervisor presence</span>
            <ArrowRight size={14} color="var(--accent-orange)" />
            <span>Transparent post-event reporting</span>
          </div>
        </div>
      </div>
    </section>
  );
};
