import React, { useState, useRef, useEffect } from 'react';
import type { ProjectItem } from '../types';
import { portfolioProjects } from '../data/companyData';
import { ArrowRight, MapPin, Award, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { CardImageSlider } from './CardImageSlider';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeIdx, setActiveIdx] = useState(0);
  const activeIdxRef = useRef(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  const categories = [
    'All',
    'Intellectual Properties',
    'Competitions',
    'School Engagement Activities',
    'Award Ceremonies',
    'Corporate Events',
    'Product Marketing',
    'CSR / Community Engagement',
    'Experiential Marketing'
  ];

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsSectionVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setIsSectionVisible(entry.isIntersecting);
    }, { threshold: 0.05 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-slide effect on small devices ONLY when section is visible
  useEffect(() => {
    if (isInteracting || !isSectionVisible || filteredProjects.length <= 1) return;

    const timer = setInterval(() => {
      if (document.hidden || !sliderRef.current) return;
      const el = sliderRef.current;
      // Only auto-slide if horizontally scrollable
      if (el.scrollWidth <= el.clientWidth + 10) return;

      const card = el.querySelector('.project-card') as HTMLElement;
      if (!card) return;

      const cardWidth = card.offsetWidth + 20;
      const nextIdx = (activeIdxRef.current + 1) % filteredProjects.length;

      el.scrollTo({
        left: nextIdx * cardWidth,
        behavior: 'smooth'
      });
      activeIdxRef.current = nextIdx;
      setActiveIdx(nextIdx);
    }, 2400);

    return () => clearInterval(timer);
  }, [isInteracting, isSectionVisible, filteredProjects.length]);

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

  const handleCategoryChange = (cat: string) => {
    handleInteractionStart();
    setActiveCategory(cat);
    activeIdxRef.current = 0;
    setActiveIdx(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
    handleInteractionEnd();
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const el = sliderRef.current;
    const card = el.querySelector('.project-card') as HTMLElement;
    if (card) {
      const cardWidth = card.offsetWidth + 20;
      const newIdx = Math.round(el.scrollLeft / cardWidth);
      const clamped = Math.max(0, Math.min(newIdx, filteredProjects.length - 1));
      activeIdxRef.current = clamped;
      setActiveIdx(clamped);
    }
  };

  const scrollToSlide = (idx: number) => {
    handleInteractionStart();
    if (!sliderRef.current) return;
    const el = sliderRef.current;
    const card = el.querySelector('.project-card') as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 20 : 320;
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
      ? Math.min(activeIdxRef.current + 1, filteredProjects.length - 1)
      : Math.max(activeIdxRef.current - 1, 0);
    scrollToSlide(nextIdx);
  };

  return (
    <section ref={sectionRef} id="portfolio" className="section-padding" style={{ backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem' }}>
          <div className="section-tag">
            <span>Portfolio &bull; Track Record</span>
          </div>

          <h2 className="font-bebas" style={{ fontSize: 'clamp(1.5rem, 2.7vw, 2.2rem)', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
            OUR <span className="text-orange">WORK</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            A portfolio of verified on-ground activations, educational IPs, corporate galas and community initiatives executed for leading brands and media houses.
          </p>

          {/* Filter Pills */}
          <div className="portfolio-filter-container">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`portfolio-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                style={{
                  background: activeCategory === cat ? 'var(--accent-orange)' : 'var(--bg-card)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-primary)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--accent-orange)' : 'var(--border-subtle)',
                  padding: '0.45rem 1.1rem',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Navigation Controls (Only on small screens) */}
        {filteredProjects.length > 1 && (
          <div className="mobile-carousel-controls">
            <div className="mobile-carousel-hint">
              <span className="mobile-swipe-text">&larr; Swipe Cases &rarr;</span>
              <span className="mobile-carousel-counter">{activeIdx + 1} / {filteredProjects.length}</span>
            </div>
            <div className="mobile-carousel-nav-btns">
              <button
                className="mobile-carousel-btn"
                onClick={() => scroll('prev')}
                aria-label="Previous case"
                disabled={activeIdx === 0}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="mobile-carousel-btn"
                onClick={() => scroll('next')}
                aria-label="Next case"
                disabled={activeIdx === filteredProjects.length - 1}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Projects Grid / Slidable Carousel on Small Devices */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          className="portfolio-grid"
        >
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => onSelectProject(project)}
            >
              <div className="project-media-box">
                <CardImageSlider
                  images={project.images && project.images.length > 0 ? project.images : [project.image]}
                  alt={project.title}
                  interval={2200 + (idx % 3) * 300}
                />
                <div className="project-cat-badge">
                  {project.category}
                </div>
              </div>

              <div className="project-info">
                <div className="project-client-name" title={`Client: ${project.client}`}>
                  Client / Brand: {project.client}
                </div>

                <h3 className="project-title" title={project.title}>
                  {project.title}
                </h3>

                {project.subtitle && (
                  <div className="project-subtitle" title={project.subtitle}>
                    "{project.subtitle}"
                  </div>
                )}

                <p className="project-desc" title={project.description}>
                  {project.description}
                </p>

                {/* Outcome Pill if explicitly documented */}
                {project.outcome && (
                  <div className="project-outcome-pill" title={`Reported Outcome: ${project.outcome}`}>
                    <strong>Outcome:</strong> {project.outcome}
                  </div>
                )}

                <div className="project-card-footer">
                  <div className="project-card-meta">
                    {project.date ? (
                      <><Calendar size={12} color="var(--accent-orange)" /> {project.date}</>
                    ) : project.location ? (
                      <><MapPin size={12} color="var(--accent-orange)" /> {project.location}</>
                    ) : (
                      <><Award size={12} color="var(--accent-orange)" /> {project.year || 'Campaign Case'}</>
                    )}
                  </div>

                  <span className="project-card-action">
                    View Case <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Dots Indicator (shown when projects <= 12) */}
        {filteredProjects.length > 1 && filteredProjects.length <= 12 && (
          <div className="mobile-carousel-dots">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                className={`mobile-dot ${idx === activeIdx ? 'active' : ''}`}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to case ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
