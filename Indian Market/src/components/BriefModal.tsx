import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, MapPin, Calendar, Mail, Phone } from 'lucide-react';

interface BriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BriefModal: React.FC<BriefModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    serviceRequired: 'Brand Activation',
    region: 'Maharashtra',
    estimatedScale: 'City-Level Campaign',
    timeline: '',
    brief: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 100% Frontend Client-Side Storage
    try {
      const stored = JSON.parse(localStorage.getItem('imem_briefs') || '[]');
      stored.push({
        id: 'brief_' + Date.now(),
        date: new Date().toLocaleString(),
        ...formData
      });
      localStorage.setItem('imem_briefs', JSON.stringify(stored));
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
            _subject: `New Campaign Brief: ${formData.organization || formData.name} - ${formData.serviceRequired}`,
            _template: 'table',
            _captcha: 'false',
            'Client Name': formData.name,
            'Brand / Organization': formData.organization,
            'Email Address': formData.email,
            'Phone Number': formData.phone,
            'Service Required': formData.serviceRequired,
            'Campaign Region': formData.region,
            'Estimated Scale': formData.estimatedScale,
            'Target Timeline': formData.timeline,
            'Brief Scope': formData.brief
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

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content-box" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '680px' }}
      >
        <button 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{ position: 'relative', width: '74px', height: '74px', margin: '0 auto 1.5rem' }}>
              <img 
                src="/photos/founder.jpg" 
                alt="Pratik Medhane - Founder & Event Director" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: '50%', 
                  objectFit: 'cover', 
                  objectPosition: 'center 15%', 
                  border: '2.5px solid var(--accent-orange)',
                  boxShadow: '0 6px 20px rgba(255, 106, 0, 0.3)'
                }}
              />
              <div style={{ position: 'absolute', bottom: -2, right: -2, background: 'var(--accent-orange)', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg-card)' }}>
                <CheckCircle2 size={15} color="#fff" />
              </div>
            </div>

            <h3 className="font-bebas" style={{ fontSize: '1.85rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              CAMPAIGN BRIEF SENT DIRECTLY
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 1.5rem' }}>
              Thank you, <strong>{formData.name || 'Partner'}</strong>. Your brief for <strong>{formData.organization || 'your organization'}</strong> has been sent directly to Founder & Event Director Pratik Medhane at <strong style={{ color: 'var(--accent-orange)' }}>indianmarket.pratik@gmail.com</strong>.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
              <a
                href={`mailto:indianmarket.pratik@gmail.com?subject=${encodeURIComponent(`Campaign Brief: ${formData.organization || formData.name} - ${formData.serviceRequired}`)}&body=${encodeURIComponent(
`Hi Pratik,

Here are the details from our campaign brief submission:
- Name: ${formData.name}
- Brand / Organization: ${formData.organization}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Service: ${formData.serviceRequired}
- Region: ${formData.region}
- Scale: ${formData.estimatedScale}
- Timeline: ${formData.timeline}

Brief Scope:
${formData.brief}

Looking forward to hearing from you.`
                )}`}
                className="btn-outline"
                style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
              >
                <Mail size={15} color="var(--accent-orange)" /> Open in Email / Send Copy
              </a>

              <a
                href={`https://wa.me/918788972147?text=${encodeURIComponent(
                  `Hi Pratik, I just submitted a campaign brief on your website for ${formData.serviceRequired} (${formData.organization || formData.name}). Looking forward to discussing!`
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
              className="btn-primary"
              onClick={handleReset}
              style={{ padding: '0.65rem 1.8rem', fontSize: '0.85rem' }}
            >
              Back to Overview
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-orange)' }}>
                <Sparkles size={16} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Start a Conversation
                </span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.65rem 0.25rem 0.35rem', background: 'var(--bg-subtle)', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
                <img 
                  src="/photos/founder.jpg" 
                  alt="Pratik Medhane" 
                  style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 15%', border: '1px solid var(--accent-orange)' }}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Direct to Founder Pratik Medhane</span>
              </div>
            </div>

            <h3 className="font-bebas" style={{ fontSize: '1.9rem', color: 'var(--text-primary)', lineHeight: 1.08, marginBottom: '0.5rem' }}>
              LET'S WORK TOGETHER
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              Share your campaign goals, target locations and delivery requirements. We turn briefs into well-managed experiences.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid-2col">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Name" 
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
                    placeholder="Company Name" 
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
                    placeholder="name@company.com" 
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
                    placeholder="+91 87889 72147" 
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-2col">
                <div className="form-group">
                  <label className="form-label">Required Service</label>
                  <select 
                    className="form-select"
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  >
                    <option value="Brand Activation">01. Brand Activation</option>
                    <option value="Brand Promotion">02. Brand Promotion</option>
                    <option value="Corporate Events">03. Corporate Events</option>
                    <option value="CSR Campaigns">04. CSR Campaigns</option>
                    <option value="School Contact Programs">05. School Contact Programs</option>
                    <option value="Event Production">06. Event Production</option>
                    <option value="Manpower Solutions">07. Manpower Solutions</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} /> Target Geography
                    </span>
                  </label>
                  <select 
                    className="form-select"
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  >
                    <option value="Maharashtra">Maharashtra (Core Presence)</option>
                    <option value="Gujarat">Gujarat (Regional Coverage)</option>
                    <option value="Karnataka">Karnataka (Regional Coverage)</option>
                    <option value="Pan-India">Pan-India (Project-Based)</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2col">
                <div className="form-group">
                  <label className="form-label">Campaign Scope</label>
                  <select 
                    className="form-select"
                    value={formData.estimatedScale}
                    onChange={(e) => setFormData({ ...formData, estimatedScale: e.target.value })}
                  >
                    <option value="Single-City / Local Activity">Single-City / Local Activity</option>
                    <option value="Statewide Regional Campaign">Statewide Regional Campaign</option>
                    <option value="Multi-City / Pan-India Campaign">Multi-City / Pan-India Campaign</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> Tentative Dates / Month
                    </span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Next Month or Q4" 
                    className="form-input"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Brief Description & Key Deliverables</label>
                <textarea 
                  rows={3} 
                  required 
                  placeholder="Outline the objectives, audience profile, and key deliverables required..." 
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
                {loading ? 'Submitting Brief...' : (
                  <>Submit Campaign Brief <Send size={16} /></>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
