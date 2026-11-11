import React, { useRef, useState, useEffect } from 'react';
import type { ProjectItem } from '../types';
import { heldProgramsList, portfolioProjects } from '../data/companyData';
import { Bookmark, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeldProgramsSectionProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export const HeldProgramsSection: React.FC<HeldProgramsSectionProps> = ({ onSelectProject }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const activeIdxRef = useRef(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

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
    if (isInteracting || !isSectionVisible || heldProgramsList.length <= 1) return;

    const timer = setInterval(() => {
      if (document.hidden || !sliderRef.current) return;
      const el = sliderRef.current;
      // Only auto-slide if horizontally scrollable
      if (el.scrollWidth <= el.clientWidth + 10) return;

      const card = el.querySelector('.held-event-card') as HTMLElement;
      if (!card) return;

      const cardWidth = card.offsetWidth + 14;
      const nextIdx = (activeIdxRef.current + 1) % heldProgramsList.length;

      el.scrollTo({
        left: nextIdx * cardWidth,
        behavior: 'smooth'
      });
      activeIdxRef.current = nextIdx;
      setActiveIdx(nextIdx);
    }, 1900);

    return () => clearInterval(timer);
  }, [isInteracting, isSectionVisible]);

  const handleInteractionStart = () => {
    setIsInteracting(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleInteractionEnd = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2500);
  };

  const handleProgramClick = (projectId?: string) => {
    handleInteractionStart();
    if (!onSelectProject || !projectId) return;
    const project = portfolioProjects.find((p) => p.id === projectId);
    if (project) {
      onSelectProject(project);
    }
    handleInteractionEnd();
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const el = sliderRef.current;
    const card = el.querySelector('.held-event-card') as HTMLElement;
    if (card) {
      const cardWidth = card.offsetWidth + 14;
      const newIdx = Math.round(el.scrollLeft / cardWidth);
      const clamped = Math.max(0, Math.min(newIdx, heldProgramsList.length - 1));
      activeIdxRef.current = clamped;
      setActiveIdx(clamped);
    }
  };

  const scrollToSlide = (idx: number) => {
    handleInteractionStart();
    if (!sliderRef.current) return;
    const el = sliderRef.current;
    const card = el.querySelector('.held-event-card') as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 14 : 170;
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
      ? Math.min(activeIdxRef.current + 2, heldProgramsList.length - 1)
      : Math.max(activeIdxRef.current - 2, 0);
    scrollToSlide(nextIdx);
  };

  return (
    <section ref={sectionRef} id="programs" className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem' }}>
          <div className="section-tag">
            <Bookmark size={14} />
            <span>Held Programs &bull; Campaign Directory</span>
          </div>

          <h2 className="font-bebas" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.1rem)', lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: 0 }}>
            HELD <span className="text-orange">PROGRAMS</span>
          </h2>
        </div>

        {/* Mobile Swipe Navigation Controls (Only on small screens) */}
        <div className="mobile-carousel-controls">
          <div className="mobile-carousel-hint">
            <span className="mobile-swipe-text">&larr; Swipe Programs &rarr;</span>
            <span className="mobile-carousel-counter">{activeIdx + 1} / {heldProgramsList.length}</span>
          </div>
          <div className="mobile-carousel-nav-btns">
            <button
              className="mobile-carousel-btn"
              onClick={() => scroll('prev')}
              aria-label="Previous programs"
              disabled={activeIdx === 0}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="mobile-carousel-btn"
              onClick={() => scroll('next')}
              aria-label="Next programs"
              disabled={activeIdx >= heldProgramsList.length - 2}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Clean Programs Grid — Slidable Carousel on Small Devices */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          className="programs-grid-clean"
        >
          {heldProgramsList.map((program, idx) => {
            const hasCase = Boolean(program.projectId);
            return (
              <div 
                key={idx} 
                className={`held-event-card ${hasCase ? 'is-clickable' : ''}`}
                onClick={hasCase ? () => handleProgramClick(program.projectId) : undefined}
                role={hasCase ? "button" : undefined}
                tabIndex={hasCase ? 0 : undefined}
                onKeyDown={hasCase ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleProgramClick(program.projectId);
                  }
                } : undefined}
                title={hasCase ? `View ${program.name} Details` : program.name}
                style={{ cursor: hasCase ? 'pointer' : 'default' }}
              >
                {/* Event Logo Container */}
                <div className="held-event-logo-box">
                  <img 
                    src={program.logo} 
                    alt={`${program.name} logo`} 
                    className="held-event-logo-img" 
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Company / Brand Name */}
                <h3 className="held-event-name">{program.name}</h3>

                {/* Subtitle / Program Info */}
                {program.highlight && (
                  <div 
                    style={{ 
                      fontSize: '0.74rem', 
                      color: 'var(--text-secondary)', 
                      marginTop: '0.2rem', 
                      lineHeight: 1.3,
                      fontWeight: 500
                    }}
                  >
                    {program.name === 'HP' ? 'HP miniTEK Conference' : program.highlight}
                  </div>
                )}

                {/* Subtle hover prompt only if case exists */}
                {hasCase ? (
                  <div className="held-event-hover-hint">
                    <span>View Case</span>
                    <ArrowUpRight size={13} />
                  </div>
                ) : (
                  <div style={{ height: '16px', marginTop: '0.4rem' }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
