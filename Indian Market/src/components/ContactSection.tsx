import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Shield } from 'lucide-react';
import { companyProfile } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    serviceRequired: 'Brand Activation',
    campaignCity: 'Maharashtra',
    brief: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 100% Frontend Client-Side Storage
    try {
      const stored = JSON.parse(localStorage.getItem('imem_inquiries') || '[]');
      stored.push({
        id: 'inq_' + Date.now(),
        date: new Date().toLocaleString(),
        ...formData
      });
      localStorage.setItem('imem_inquiries', JSON.stringify(stored));
    } catch {
      // Browser storage fallback
    }

    // Non-blocking background notification (never blocks or fails the frontend)
    try {
      if (typeof window !== 'undefined' && navigator.onLine) {
        fetch('https://formsubmit.co/ajax/indianmarket.pratik@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `New Client Query: ${formData.organization || formData.name} - ${formData.serviceRequired}`,
            _template: 'table',
            _captcha: 'false',
            'Client Name': formData.name,
            'Brand / Organization': formData.organization,
            'Email Address': formData.email,
            'Phone Number': formData.phone,
            'Service Required': formData.serviceRequired,
            'Location': formData.campaignCity,
            'Brief Details': formData.brief
          })
        }).catch(() => {});
      }
    } catch {
      // Ignore network restrictions
    }

    // Smooth client-side UX feedback
    await new Promise((resolve) => setTimeout(resolve, 450));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="section-tag">
            <Mail size={14} />
            <span>Direct Inquiries</span>
          </div>

          <h2 className="font-bebas" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.1rem)', lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
            CONNECT WITH <span className="text-orange">OUR TEAM</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Share your upcoming campaign brief or event requirements with our event directors.
          </p>
        </div>

        {/* 2-Column Split: Official Details on Left, Interactive Form on Right */}
        <div className="contact-split-grid">
          {/* Left Column: Official Contact Card */}
          <div>
            <div className="contact-info-card" style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem', marginBottom: '1.75rem', paddingBottom: '1.35rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ 
                  position: 'relative',
                  width: '72px', 
                  height: '72px', 
                  borderRadius: '14px', 
                  overflow: 'hidden',
                  border: '2px solid var(--accent-orange)',
                  boxShadow: '0 4px 16px rgba(255, 106, 0, 0.28)',
                  flexShrink: 0,
                  background: 'var(--bg-subtle)'
                }}>
                  <img 
                    src={companyProfile.contact.founderPhoto} 
                    alt={`${companyProfile.contact.founderAndDirector} - ${companyProfile.contact.designation}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--accent-orange)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '3px' }}>
                    Direct Campaign Inquiries
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0, lineHeight: 1.2 }}>
                    {companyProfile.contact.founderAndDirector}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '3px' }}>
                    {companyProfile.contact.designation}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                {/* Phone */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Phone size={20} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Direct Phone
                    </div>
                    <a href={`tel:${companyProfile.contact.phone}`} style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 600, textDecoration: 'none' }}>
                      {companyProfile.contact.formattedPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Mail size={20} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Official Email
                    </div>
                    <a href={`mailto:${companyProfile.contact.email}`} style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>
                      {companyProfile.contact.email}
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin size={20} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Registered Office Address
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5, marginTop: '2px' }}>
                      {companyProfile.contact.officeAddress}
                    </p>
                  </div>
                </div>

                {/* GSTIN */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Shield size={20} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      GST Registration Number
                    </div>
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.92rem', fontFamily: 'monospace', fontWeight: 700, marginTop: '2px' }}>
                      {companyProfile.contact.gstin}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Clock size={20} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Execution Availability
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '2px' }}>
                      Monday – Saturday: 9:30 AM – 7:30 PM &bull; 24/7 Live On-Ground Ops
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Campaign Brief Form */}
          <div className="contact-form-card">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div>
                <h3 className="font-bebas" style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  SHARE YOUR CAMPAIGN BRIEF
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                  Fill in your campaign details and our team will connect with a proposed execution plan.
                </p>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', padding: '0.35rem 0.75rem 0.35rem 0.4rem', background: 'var(--bg-subtle)', borderRadius: '24px', border: '1px solid var(--border-subtle)' }}>
                <img 
                  src={companyProfile.contact.founderPhoto} 
                  alt={companyProfile.contact.founderAndDirector}
                  style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 15%', border: '1.5px solid var(--accent-orange)' }}
                />
                <span style={{ fontSize: '0.76rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  Direct to Founder
                </span>
              </div>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ position: 'relative', width: '74px', height: '74px', margin: '0 auto 1.25rem' }}>
                  <img 
                    src={companyProfile.contact.founderPhoto} 
                    alt={companyProfile.contact.founderAndDirector}
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 15%', border: '2.5px solid var(--accent-orange)', boxShadow: '0 6px 20px rgba(255, 106, 0, 0.3)' }}
                  />
                  <div style={{ position: 'absolute', bottom: -2, right: -2, background: 'var(--accent-orange)', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg-card)' }}>
                    <CheckCircle2 size={15} color="#fff" />
                  </div>
                </div>
                <h4 className="font-bebas" style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  INQUIRY SENT DIRECTLY
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 1.25rem', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name || 'Partner'}</strong>. Your inquiry for <strong>{formData.organization || 'your organization'}</strong> has been dispatched directly to Founder & Event Director Pratik Medhane at <strong style={{ color: 'var(--accent-orange)' }}>indianmarket.pratik@gmail.com</strong>.
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  <a
                    href={`mailto:indianmarket.pratik@gmail.com?subject=${encodeURIComponent(`Campaign Brief: ${formData.organization || formData.name} - ${formData.serviceRequired}`)}&body=${encodeURIComponent(
`Hi Pratik,

Here are the details of our campaign brief:
- Client / Brand: ${formData.organization}
- Contact Person: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Service: ${formData.serviceRequired}
- Location: ${formData.campaignCity}

Brief Details:
${formData.brief}

Looking forward to connecting.`
                    )}`}
                    className="btn-outline"
                    style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
                  >
                    <Mail size={15} color="var(--accent-orange)" /> Send Copy via Email
                  </a>

                  <a
                    href={`https://wa.me/918788972147?text=${encodeURIComponent(
                      `Hi Pratik, I just submitted an inquiry on your website for ${formData.serviceRequired} (${formData.organization || formData.name}). Looking forward to discussing!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
                  >
                    <Phone size={15} /> WhatsApp Pratik
                  </a>
                </div>

                <button 
                  onClick={() => setSubmitted(false)}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2col">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rahul Sharma" 
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Brand / Organization</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Enterprise / Brand Name" 
                      className="form-input"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2col">
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@organization.com" 
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98000 00000" 
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2col">
                  <div className="form-group">
                    <label className="form-label">Service Required</label>
                    <select 
                      className="form-select"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    >
                      <option value="Brand Activation">Brand Activation</option>
                      <option value="Brand Promotion">Brand Promotion</option>
                      <option value="Corporate Events">Corporate Events</option>
                      <option value="CSR Campaigns">CSR Campaigns</option>
                      <option value="School Contact Programs">School Contact Programs</option>
                      <option value="Event Production">Event Production</option>
                      <option value="Manpower Solutions">Manpower Solutions</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Campaign Location / State</label>
                    <select 
                      className="form-select"
                      value={formData.campaignCity}
                      onChange={(e) => setFormData({ ...formData, campaignCity: e.target.value })}
                    >
                      <option value="Maharashtra">Maharashtra (Nashik, Mumbai, Pune, etc.)</option>
                      <option value="Gujarat">Gujarat (Ahmedabad, Surat, etc.)</option>
                      <option value="Karnataka">Karnataka (Bengaluru, etc.)</option>
                      <option value="Pan-India">Multi-City / Pan-India</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Brief Description & Timeline</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Tell us about the scope, audience profile, event dates, or specific requirements..." 
                    className="form-textarea"
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary"
                  disabled={loading}
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  {loading ? 'Submitting...' : (
                    <>Send Campaign Brief <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
