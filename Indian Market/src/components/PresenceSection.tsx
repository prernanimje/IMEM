import React from 'react';
import { presenceData, companyProfile } from '../data/companyData';
import { MapPin, Globe, Building } from 'lucide-react';

export const PresenceSection: React.FC = () => {
  return (
    <section id="presence" className="section-padding" style={{ backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="section-tag">
            <Globe size={14} />
            <span>Geographic Footprint</span>
          </div>

          <h2 className="font-bebas" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.1rem)', lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
            OUR <span className="text-orange">PRESENCE</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Headquartered in Nashik with established regional execution coverage across Western and Southern India and scalable project-based capability nationwide.
          </p>
        </div>

        {/* 4 Regions Grid */}
        <div className="presence-grid">
          {presenceData.map((reg) => (
            <div 
              key={reg.id} 
              className={`presence-card ${reg.id === 'maharashtra' ? 'highlight' : ''}`}
            >
              <div className="presence-status">{reg.status}</div>
              <h3 className="presence-state">{reg.state}</h3>
              <p className="presence-desc">{reg.description}</p>
              <div className="presence-centers">
                <strong>Coverage Zones:</strong> {reg.keyCenters}
              </div>
            </div>
          ))}
        </div>

        {/* Official Registered Office Callout (Accuracy without inventing fake offices) */}
        <div 
          className="presence-office-callout"
          style={{
            marginTop: '3.5rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: 'var(--card-shadow)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'var(--accent-orange-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Building size={22} color="var(--accent-orange)" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-orange)' }}>
                Registered Head Office
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 700, margin: '2px 0 4px' }}>
                {companyProfile.name}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                {companyProfile.contact.officeAddress} &bull; GSTIN: {companyProfile.contact.gstin}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'var(--bg-surface)', padding: '0.75rem 1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
            <MapPin size={18} color="var(--accent-orange)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              Nashik, Maharashtra &bull; Pan-India Deployment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
