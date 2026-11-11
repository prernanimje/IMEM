import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { companyProfile } from '../data/companyData';

interface FinalCTASectionProps {
  onWorkTogether: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onWorkTogether }) => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#06070a', borderBottom: '1px solid var(--border-subtle)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          {/* Core Mantra Statement */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '2rem' }}>
            <div className="font-bebas" style={{ fontSize: 'clamp(1.85rem, 4.2vw, 3rem)', color: '#ffffff', lineHeight: 1.08, letterSpacing: '0.04em' }}>
              WE CREATE EXPERIENCES. <br />
              WE ACTIVATE BRANDS. <br />
              WE EXECUTE EVENTS. <br />
              <span className="text-orange">WE CONNECT BRANDS WITH PEOPLE.</span>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            Ready to turn your campaign brief into a well-managed on-ground experience? Connect with our event directors to plan your next brand activation, corporate event, or pan-India campaign.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <button 
              className="btn-primary"
              onClick={onWorkTogether}
              style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}
            >
              Let's Work Together <ArrowRight size={18} />
            </button>

            <a 
              href={`tel:${companyProfile.contact.phone}`}
              className="btn-secondary"
              style={{ padding: '0.9rem 2.2rem', fontSize: '1rem', textDecoration: 'none' }}
            >
              <Phone size={18} color="var(--accent-orange)" />
              <span>Call: {companyProfile.contact.formattedPhone}</span>
            </a>

            <a 
              href={`mailto:${companyProfile.contact.email}`}
              className="btn-secondary"
              style={{ padding: '0.9rem 2.2rem', fontSize: '1rem', textDecoration: 'none' }}
            >
              <Mail size={18} color="var(--accent-orange)" />
              <span>{companyProfile.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
