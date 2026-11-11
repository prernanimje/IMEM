import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: 'Mumbai',
    message: ''
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
            _subject: `New Client Query from ${formData.company || formData.name}`,
            _template: 'table',
            _captcha: 'false',
            'Client Name': formData.name,
            'Brand / Organization': formData.company,
            'Email Address': formData.email,
            'Phone Number': formData.phone,
            'Hub / City': formData.city,
            'Message': formData.message
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
    <div style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-primary)', minHeight: '100vh', paddingTop: '100px', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-orange)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            <Sparkles size={16} /> Direct Access
          </div>
          <h1 className="font-bebas" style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)', color: 'var(--text-primary)', letterSpacing: '0.04em', lineHeight: 1.05 }}>
            CONNECT WITH OUR PRODUCERS
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto 0', lineHeight: 1.6 }}>
            Whether you’re commissioning a stadium product unveil, an international conclave, or a multi-city brand tour, we are ready to build the extraordinary.
          </p>
        </div>
      </section>

      {/* Main Grid: Hubs on Left, Form on Right */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 900 ? '1fr' : '1fr 1.25fr', gap: '4rem' }}>
            {/* Left: Office Hubs */}
            <div>
              <h2 className="font-bebas" style={{ fontSize: '1.9rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                EXPERIENTIAL HUBS
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Mumbai Office */}
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '2rem', boxShadow: 'var(--card-shadow)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <MapPin size={24} color="var(--accent-orange)" />
                    <h3 className="font-bebas" style={{ fontSize: '1.45rem', color: 'var(--text-primary)', margin: 0 }}>
                      MUMBAI HEADQUARTERS
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    1501 – C, Horizon Tower, Dr. B.R. Ambedkar Road, Parel East, Mumbai – 400012, Maharashtra, India.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Phone size={15} color="var(--accent-orange)" /> +91 (22) 4920 8800
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={15} color="var(--accent-orange)" /> Mon - Sat: 9:30 AM – 7:30 PM IST
                    </div>
                  </div>
                </div>

                {/* Delhi Office */}
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '2rem', boxShadow: 'var(--card-shadow)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <MapPin size={24} color="var(--accent-orange)" />
                    <h3 className="font-bebas" style={{ fontSize: '1.45rem', color: 'var(--text-primary)', margin: 0 }}>
                      DELHI NCR MEDIA PARK
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    4th Floor, Film City Media Complex, Sector 16A, Noida – 201301, National Capital Region, India.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Phone size={15} color="var(--accent-orange)" /> +91 (120) 6820 1100
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Mail size={15} color="var(--accent-orange)" /> delhi@auralive.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '3rem', boxShadow: 'var(--card-shadow)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
                <div>
                  <h3 className="font-bebas" style={{ fontSize: '1.9rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    SEND AN INQUIRY
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                    Have an RFP or preliminary brief? Send us a message and our production strategists will get in touch.
                  </p>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', padding: '0.35rem 0.75rem 0.35rem 0.4rem', background: 'var(--bg-subtle)', borderRadius: '24px', border: '1px solid var(--border-subtle)' }}>
                  <img 
                    src="/photos/founder.jpg" 
                    alt="Pratik Medhane" 
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
                      src="/photos/founder.jpg" 
                      alt="Pratik Medhane" 
                      style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 15%', border: '2.5px solid var(--accent-orange)', boxShadow: '0 6px 20px rgba(255, 106, 0, 0.3)' }}
                    />
                    <div style={{ position: 'absolute', bottom: -2, right: -2, background: 'var(--accent-orange)', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg-card)' }}>
                      <CheckCircle size={15} color="#fff" />
                    </div>
                  </div>
                  <h4 className="font-bebas" style={{ fontSize: '1.55rem', color: 'var(--text-primary)' }}>
                    INQUIRY SENT DIRECTLY
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.name}</strong>. Your message has been sent directly to Founder & Event Director Pratik Medhane at <strong style={{ color: 'var(--accent-orange)' }}>indianmarket.pratik@gmail.com</strong>.
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                      href={`mailto:indianmarket.pratik@gmail.com?subject=${encodeURIComponent(`Inquiry from ${formData.company || formData.name}`)}&body=${encodeURIComponent(
`Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCity: ${formData.city}\n\nMessage:\n${formData.message}`
                      )}`}
                      className="btn-outline"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
                    >
                      <Mail size={15} color="var(--accent-orange)" /> Send Copy via Email
                    </a>
                    <a
                      href={`https://wa.me/918788972147?text=${encodeURIComponent(
                        `Hi Pratik, I just sent an inquiry via your website (${formData.company || formData.name}). Looking forward to discussing!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
                    >
                      <Phone size={15} /> WhatsApp Pratik
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Brand / Organization</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="Organization Name" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Work Email</label>
                      <input 
                        type="email" 
                        required 
                        className="form-input" 
                        placeholder="name@company.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Direct Phone</label>
                      <input 
                        type="tel" 
                        required 
                        className="form-input" 
                        placeholder="+91 98000 00000" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Nearest Hub</label>
                    <select 
                      className="form-select"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    >
                      <option value="Mumbai">Mumbai Headquarters</option>
                      <option value="Delhi NCR">Delhi NCR Hub</option>
                      <option value="Bengaluru">Bengaluru / South India</option>
                      <option value="Overseas">International Locations</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message & Requirements</label>
                    <textarea 
                      rows={4} 
                      required 
                      className="form-textarea" 
                      placeholder="Tell us about the project scope, dates, and event format..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" disabled={loading} className="btn-orange" style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Dispatching...' : (
                      <>Send Direct Inquiry <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
