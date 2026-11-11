import React from 'react';
import { clientPartnersData } from '../data/companyData';
import { Handshake } from 'lucide-react';

export const ClientsPartnersSection: React.FC = () => {
  return (
    <section id="clients" className="section-padding" style={{ backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="section-tag">
            <Handshake size={14} />
            <span>Trusted Relationships</span>
          </div>

          <h2 className="font-bebas" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.1rem)', lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
            OUR CLIENTS / <span className="text-orange">PARTNERS</span>
          </h2>

          <div style={{ fontSize: '0.95rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700, marginBottom: '1.25rem' }}>
            OTHER CORPORATE & MNC CLIENTS
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Collaborating with leading media conglomerates, technology corporations, consumer brands, and educational institutions for on-ground excellence.
          </p>
        </div>

        {/* Clean Corporate Brand Grid */}
        <div className="clients-grid-clean">
          {clientPartnersData.map((client, idx) => (
            <div key={idx} className="client-item-card">
              {client.logo && (
                <div className="client-logo-box">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="client-logo-img" 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
              <div className="client-brand-title">
                {client.name}
              </div>
              <div className="client-brand-cat">
                {client.category}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
