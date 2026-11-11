import React from 'react';
import { MapPin, Phone, Mail, Shield, ArrowUp } from 'lucide-react';
import { companyProfile } from '../data/companyData';
import { CompanyLogo } from './CompanyLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand & Taglines */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <CompanyLogo forceVariant="dark" height={48} onClick={() => onNavigate('hero')} />
            </div>
            <div style={{ fontSize: '0.82rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-orange)', fontWeight: 700, marginBottom: '0.75rem' }}>
              EVENTS & PROMOTION &bull; ESTD 2018
            </div>

            <p style={{ fontStyle: 'italic', color: '#ffffff', fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              "{companyProfile.tagline}"
            </p>

            <div style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '1.5rem' }}>
              {companyProfile.primaryPositioning}
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, maxWidth: '380px' }}>
              {companyProfile.coreMessage}
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.18rem', color: '#fff', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              QUICK NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'var(--transition)' }}
                >
                  About Us (Established 2018)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'var(--transition)' }}
                >
                  Services & Expertise
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('portfolio')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'var(--transition)' }}
                >
                  Our Work (Portfolio)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('programs')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'var(--transition)' }}
                >
                  Held Programs List
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('presence')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'var(--transition)' }}
                >
                  Geographic Presence
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Registered Office */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.18rem', color: '#fff', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              REGISTERED OFFICE
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{companyProfile.contact.officeAddress}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={18} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
                <a href={`tel:${companyProfile.contact.phone}`} style={{ color: '#fff', textDecoration: 'none' }}>
                  {companyProfile.contact.formattedPhone}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Mail size={18} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${companyProfile.contact.email}`} style={{ color: '#fff', textDecoration: 'none' }}>
                  {companyProfile.contact.email}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginTop: '0.2rem' }}>
                <Shield size={18} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
                <span>GSTIN: <strong>{companyProfile.contact.gstin}</strong></span>
              </div>

              <div style={{ marginTop: '0.5rem', color: '#e2e8f0', fontSize: '0.85rem' }}>
                Founder & Event Director: <strong>{companyProfile.contact.founderAndDirector}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {companyProfile.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Pan-India Execution &bull; People &bull; Production</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                padding: '0.4rem 0.8rem',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem'
              }}
            >
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
