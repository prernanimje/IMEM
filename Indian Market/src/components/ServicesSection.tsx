import React, { useRef, useState, useEffect } from 'react';
import { 
  Sparkles, 
  Megaphone, 
  Briefcase, 
  HeartHandshake, 
  GraduationCap, 
  Layers, 
  Users, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../data/companyData';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const activeIdxRef = useRef(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  // Auto-slide effect on small devices
  useEffect(() => {
    if (isInteracting) return;

    const timer = setInterval(() => {
      if (document.hidden || !sliderRef.current) return;
      const el = sliderRef.current;
      // Only auto-slide if horizontally scrollable (small devices)
      if (el.scrollWidth <= el.clientWidth + 10) return;

      const card = el.querySelector('.service-card') as HTMLElement;
      if (!card) return;

      const cardWidth = card.offsetWidth + 18;
      const nextIdx = (activeIdxRef.current + 1) % servicesData.length;

      el.scrollTo({
        left: nextIdx * cardWidth,
        behavior: 'smooth'
      });
      activeIdxRef.current = nextIdx;
      setActiveIdx(nextIdx);
    }, 2200);

    return () => clearInterval(timer);
  }, [isInteracting]);

  const handleInteractionStart = () => {
    setIsInteracting(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleInteractionEnd = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 3000);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const el = sliderRef.current;
    const card = el.querySelector('.service-card') as HTMLElement;
    if (card) {
      const cardWidth = card.offsetWidth + 18;
      const newIdx = Math.round(el.scrollLeft / cardWidth);
      const clamped = Math.max(0, Math.min(newIdx, servicesData.length - 1));
      activeIdxRef.current = clamped;
      setActiveIdx(clamped);
    }
  };

  const scrollToSlide = (idx: number) => {
    handleInteractionStart();
    if (!sliderRef.current) return;
    const el = sliderRef.current;
    const card = el.querySelector('.service-card') as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 18 : 300;
    el.scrollTo({
      left: idx * cardWidth,
      behavior: 'smooth'
    });
    activeIdxRef.current = idx;
    setActiveIdx(idx);
    handleInteractionEnd();
  };

  const scroll = (direction: 'prev' | 'next') => {
    const nextIdx = direction === 'next' 
      ? Math.min(activeIdxRef.current + 1, servicesData.length - 1)
      : Math.max(activeIdxRef.current - 1, 0);
    scrollToSlide(nextIdx);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={20} color="var(--accent-orange)" />;
      case 'Megaphone': return <Megaphone size={20} color="var(--accent-orange)" />;
      case 'Briefcase': return <Briefcase size={20} color="var(--accent-orange)" />;
      case 'HeartHandshake': return <HeartHandshake size={20} color="var(--accent-orange)" />;
      case 'GraduationCap': return <GraduationCap size={20} color="var(--accent-orange)" />;
      case 'Layers': return <Layers size={20} color="var(--accent-orange)" />;
      case 'Users': return <Users size={20} color="var(--accent-orange)" />;
      default: return <Sparkles size={20} color="var(--accent-orange)" />;
    }
  };

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.2rem' }}>
          <div className="section-tag">
            <span>Our Expertise &bull; Capabilities</span>
          </div>

          <h2 className="font-bebas" style={{ fontSize: 'clamp(1.45rem, 2.6vw, 2.15rem)', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
            INTEGRATED SERVICES & <span className="text-orange">SOLUTIONS</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.55 }}>
            End-to-end execution across brand activation, corporate event production, institutional school programs and disciplined on-ground manpower.
          </p>
        </div>

        {/* Mobile Swipe Navigation Controls (Only on small screens) */}
        <div className="mobile-carousel-controls">
          <div className="mobile-carousel-hint">
            <span className="mobile-swipe-text">&larr; Swipe Services &rarr;</span>
            <span className="mobile-carousel-counter">{activeIdx + 1} / {servicesData.length}</span>
          </div>
          <div className="mobile-carousel-nav-btns">
            <button
              className="mobile-carousel-btn"
              onClick={() => scroll('prev')}
              aria-label="Previous service"
              disabled={activeIdx === 0}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="mobile-carousel-btn"
              onClick={() => scroll('next')}
              aria-label="Next service"
              disabled={activeIdx === servicesData.length - 1}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* 7 Services Grid / Slidable Carousel on Small Devices */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          className="services-grid-7"
        >
          {servicesData.map((service) => (
            <div key={service.number} className="service-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '7px', background: 'var(--accent-orange-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {getIcon(service.icon)}
                  </div>
                  <div className="service-card-num">{service.number}</div>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
              </div>

              <ul className="service-features-list">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature-item">
                    <CheckCircle2 size={13} color="var(--accent-orange)" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Dots Indicator */}
        <div className="mobile-carousel-dots">
          {servicesData.map((_, idx) => (
            <button
              key={idx}
              className={`mobile-dot ${idx === activeIdx ? 'active' : ''}`}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
