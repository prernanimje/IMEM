import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, X, ArrowRight, ChevronRight } from 'lucide-react';
import { companyProfile } from '../data/companyData';
import { CompanyLogo } from './CompanyLogo';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setDragOffset(0);
      setIsDragging(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Edge swipe gesture: swipe from left edge (< 28px) opens drawer on any page
  useEffect(() => {
    let edgeStartX = 0;
    let edgeStartY = 0;

    const handleWindowTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      edgeStartX = e.touches[0].clientX;
      edgeStartY = e.touches[0].clientY;
    };

    const handleWindowTouchEnd = (e: TouchEvent) => {
      if (edgeStartX > 0 && edgeStartX < 28) {
        const deltaX = e.changedTouches[0].clientX - edgeStartX;
        const deltaY = Math.abs(e.changedTouches[0].clientY - edgeStartY);
        if (deltaX > 60 && deltaX > deltaY) {
          setIsMobileOpen(true);
        }
      }
      edgeStartX = 0;
      edgeStartY = 0;
    };

    window.addEventListener('touchstart', handleWindowTouchStart, { passive: true });
    window.addEventListener('touchend', handleWindowTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleWindowTouchStart);
      window.removeEventListener('touchend', handleWindowTouchEnd);
    };
  }, []);

  // Swipe-to-close touch handlers on the open drawer
  const handleDrawerTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleDrawerTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const diffX = e.touches[0].clientX - touchStartXRef.current;
    const diffY = Math.abs(e.touches[0].clientY - touchStartYRef.current);

    // Only allow left drag (closing direction) when horizontal movement dominates
    if (diffX < 0 && Math.abs(diffX) > diffY) {
      setDragOffset(diffX);
    }
  };

  const handleDrawerTouchEnd = () => {
    setIsDragging(false);
    if (dragOffset < -65) {
      // Swiped far enough to close
      setIsMobileOpen(false);
    }
    setDragOffset(0);
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const navLinks = [
    { label: 'About Us', id: 'about', num: '01' },
    { label: 'Services', id: 'services', num: '02' },
    { label: 'Our Work', id: 'portfolio', num: '03' },
    { label: 'Programs', id: 'programs', num: '04' },
    { label: 'Clients', id: 'clients', num: '05' },
    { label: 'Why Us', id: 'why-us', num: '06' },
    { label: 'Presence', id: 'presence', num: '07' },
    { label: 'Contact', id: 'contact', num: '08' }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileOpen(false);
    setDragOffset(0);
    onNavigate(id);
  };

  return (
    <>
      <header className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Brand Identity / Official Company Logo */}
          <div 
            className="brand-identity-wrapper"
            onClick={() => handleNavClick('hero')}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <CompanyLogo height={60} className="navbar-logo" onClick={() => handleNavClick('hero')} />
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-desktop-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  className="nav-link-btn"
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Light / Dark Mode Toggle */}
            <ThemeToggle />

            <button 
              className="btn-primary header-cta-btn"
              onClick={onOpenContact}
              style={{ padding: '0.55rem 1.35rem', fontSize: '0.85rem' }}
            >
              Let's Work Together <ArrowRight size={15} />
            </button>

            <button 
              className="menu-mobile-btn"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Slidable Mobile Drawer (Slides in from Left) */}
      <div 
        ref={drawerRef}
        className={`mobile-drawer-overlay ${isMobileOpen ? 'open' : ''}`}
        style={{
          transform: isMobileOpen 
            ? (dragOffset ? `translateX(${dragOffset}px)` : 'translateX(0)') 
            : 'translateX(-100%)',
          transition: isDragging 
            ? 'none' 
            : 'transform 0.38s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, visibility 0.38s'
        }}
        onTouchStart={handleDrawerTouchStart}
        onTouchMove={handleDrawerTouchMove}
        onTouchEnd={handleDrawerTouchEnd}
      >
        {/* Drawer Sticky Header */}
        <div className="mobile-drawer-header">
          <CompanyLogo height={42} onClick={() => handleNavClick('hero')} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ThemeToggle />
            <button 
              className="mobile-drawer-close"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close Mobile Menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="mobile-drawer-body">
          {/* Nav Links */}
          <ul className="mobile-drawer-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  className="mobile-nav-item-btn"
                  onClick={() => handleNavClick(link.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="mobile-nav-num">{link.num}</span>
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight size={18} color="var(--accent-orange)" />
                </button>
              </li>
            ))}
          </ul>

          {/* Primary CTA */}
          <div style={{ marginTop: '0.5rem', width: '100%' }}>
            <button
              className="btn-primary"
              style={{ 
                width: '100%', 
                padding: '0.9rem 1.5rem', 
                fontSize: '0.95rem', 
                borderRadius: '12px',
                justifyContent: 'center'
              }}
              onClick={() => {
                setIsMobileOpen(false);
                onOpenContact();
              }}
            >
              Let's Work Together <ArrowRight size={17} />
            </button>
          </div>

          {/* Drawer Contact Footer */}
          <div className="mobile-drawer-footer">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={15} color="var(--accent-orange)" />
                <a href={`tel:${companyProfile.contact.phone}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>
                  {companyProfile.contact.formattedPhone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={15} color="var(--accent-orange)" />
                <a href={`mailto:${companyProfile.contact.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {companyProfile.contact.email}
                </a>
              </div>
            </div>

            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5, letterSpacing: '0.02em' }}>
              {companyProfile.tagline} &bull; Established {companyProfile.established}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
