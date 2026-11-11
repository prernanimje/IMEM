import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  Building2, 
  Heart, 
  Hammer, 
  UserCheck 
} from 'lucide-react';
import { capabilitiesData } from '../data/companyData';

export const WhatWeDoSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap size={22} color="var(--accent-orange)" />;
      case 'TrendingUp': return <TrendingUp size={22} color="var(--accent-orange)" />;
      case 'Building2': return <Building2 size={22} color="var(--accent-orange)" />;
      case 'Heart': return <Heart size={22} color="var(--accent-orange)" />;
      case 'Hammer': return <Hammer size={22} color="var(--accent-orange)" />;
      case 'UserCheck': return <UserCheck size={22} color="var(--accent-orange)" />;
      default: return <Zap size={22} color="var(--accent-orange)" />;
    }
  };

  return (
    <section id="what-we-do" className="section-padding" style={{ backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
          <div className="section-tag">
            <span>Core Capabilities</span>
          </div>

          <h2 className="font-bebas" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.1rem)', lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
            WHAT WE <span className="text-orange">DO</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Six interconnected action engines driving brand visibility, community touchpoints, and polished event execution.
          </p>
        </div>

        {/* 6 Capabilities Cards */}
        <div className="capabilities-grid-6">
          {capabilitiesData.map((cap) => (
            <div key={cap.id} className="capability-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="capability-tag">{cap.tag}</span>
                <div style={{ width: '40px', height: '40px', borderRadius: '6px', background: 'var(--accent-orange-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {getIcon(cap.icon)}
                </div>
              </div>

              <h3 className="capability-title">{cap.title}</h3>
              <p className="capability-desc">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
