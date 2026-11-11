import React from 'react';
import { whyWorkWithUsData } from '../data/companyData';
import { Shield, Sparkles } from 'lucide-react';

export const WhyWorkWithUsSection: React.FC = () => {
  return (
    <section id="why-us" className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="section-tag">
            <Shield size={14} />
            <span>Operational Strengths</span>
          </div>

          <h2 className="font-bebas" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.1rem)', lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
            WHY WORK <span className="text-orange">WITH US</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Reliable event management and brand activation anchored in rigorous planning, local relationships, and hands-on operational discipline.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="why-us-grid">
          {whyWorkWithUsData.map((item, idx) => (
            <div key={idx} className="why-us-card">
              <div className="why-us-badge">{item.badge}</div>
              <h3 className="why-us-title">{item.title}</h3>
              <p className="why-us-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Core Philosophy Callout */}
        <div 
          className="philosophy-callout"
          style={{
            marginTop: '3.5rem',
            background: 'var(--bg-card)',
            border: '1px solid rgba(255, 106, 0, 0.3)',
            borderRadius: '10px',
            padding: '2rem 2.5rem',
            textAlign: 'center',
            boxShadow: 'var(--card-shadow)'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-orange)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            <Sparkles size={15} /> Company Operating Principle
          </div>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 600, maxWidth: '840px', margin: '0 auto', lineHeight: 1.5 }}>
            "We turn briefs into well-managed experiences—combining creative thinking, operational discipline and local execution."
          </p>
        </div>
      </div>
    </section>
  );
};
