import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { executionStages } from '../data/companyData';

export const ExecutionSection: React.FC = () => {
  return (
    <section id="execution" className="section-padding" style={{ backgroundColor: '#08090d', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="section-tag">
            <span>End-to-End Campaign Delivery</span>
          </div>

          <h2 className="font-bebas" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.1rem)', lineHeight: 1.08, color: '#ffffff', marginBottom: '0.85rem' }}>
            EXECUTION <span className="text-orange">CAPABILITY</span>
          </h2>

          <p style={{ color: '#e2e8f0', fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.6, marginBottom: '0.6rem' }}>
            "One accountable workflow. Clear coordination. Execution focused on the campaign objective."
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
            We manage the entire campaign lifecycle from the initial briefing to the final campaign tracking dossier.
          </p>
        </div>

        {/* 5 Stages Lifecycle Grid */}
        <div className="execution-stages-grid">
          {executionStages.map((stage) => (
            <div key={stage.stage} className="stage-card">
              <div className="stage-step-num">{stage.stepNumber}</div>
              <div className="stage-name">{stage.stage}</div>
              <h3 className="stage-title">{stage.title}</h3>
              <p className="stage-desc">{stage.description}</p>

              <ul className="stage-deliverables">
                {stage.deliverables.map((item, idx) => (
                  <li key={idx} className="stage-deliverable-item">
                    <CheckCircle2 size={12} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Supporting Lifecycle Summary */}
        <div 
          className="execution-summary-banner"
          style={{
            marginTop: '3.5rem',
            background: '#0d1019',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
            padding: '1.75rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Accountability Standard:
            </span>
            <span style={{ color: '#cbd5e1', fontSize: '0.92rem' }}>
              Dedicated single point of contact &bull; Real-time status dashboards &bull; Quality-controlled vendors
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-orange)', fontSize: '0.88rem', fontWeight: 700 }}>
            <span>Complete Lifecycle Governance</span>
            <ArrowRight size={15} />
          </div>
        </div>
      </div>
    </section>
  );
};
