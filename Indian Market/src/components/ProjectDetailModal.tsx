import React, { useState, useEffect } from 'react';
import type { ProjectItem } from '../types';
import { X, CheckCircle2, ArrowRight, Award, MapPin, ChevronLeft, ChevronRight, Images, Calendar } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem;
  onClose: () => void;
  onInquire: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquire
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const projectImages = project.images && project.images.length > 0
    ? project.images
    : [project.image];
  const hasMultiple = projectImages.length > 1;

  const touchStartXRef = React.useRef<number | null>(null);
  const touchEndXRef = React.useRef<number | null>(null);

  // Auto-cycle in modal when not hovering
  useEffect(() => {
    if (!hasMultiple || isHovered) return;
    const timer = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % projectImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [hasMultiple, isHovered, projectImages.length]);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % projectImages.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 35) {
      handleNext();
    } else if (diff < -35) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content-box-widescreen" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button 
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Widescreen 2-Column Responsive Layout */}
        <div className="modal-widescreen-grid">
          
          {/* LEFT COLUMN: Multi-Photo Showcase & Media Badges */}
          <div className="modal-media-col">
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main Photo Display */}
              <div 
                className="modal-photo-stage"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ touchAction: 'pan-y' }}
              >
                {/* Ambient soft glow backdrop behind active photo */}
                {projectImages[activePhotoIndex] && (
                  <img
                    key={`ambient-${activePhotoIndex}`}
                    src={projectImages[activePhotoIndex]}
                    alt=""
                    aria-hidden="true"
                    className="modal-photo-ambient"
                  />
                )}

                {/* Crisp Main Photo with zero blur */}
                {projectImages.map((imgSrc, idx) => {
                  const isActive = idx === activePhotoIndex;
                  return (
                    <img 
                      key={`${imgSrc}-${idx}`}
                      src={imgSrc} 
                      alt={`${project.title} photo ${idx + 1}`} 
                      className="modal-crisp-photo"
                      style={{ 
                        opacity: isActive ? 1 : 0,
                        transition: 'opacity 0.32s ease-in-out',
                        pointerEvents: isActive ? 'auto' : 'none',
                        zIndex: 1
                      }} 
                    />
                  );
                })}

                {/* Photo Counter Badge */}
                {hasMultiple && (
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    background: 'rgba(8, 9, 13, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    zIndex: 4
                  }}>
                    <Images size={13} color="var(--accent-orange)" />
                    <span>Photo {activePhotoIndex + 1} of {projectImages.length}</span>
                  </div>
                )}

                {/* Prev / Next Arrows */}
                {hasMultiple && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous photo"
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'rgba(10, 10, 15, 0.75)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 5,
                        transition: 'background 0.2s, transform 0.2s'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'var(--accent-orange)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(10, 10, 15, 0.75)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                      }}
                    >
                      <ChevronLeft size={22} />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next photo"
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'rgba(10, 10, 15, 0.75)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 5,
                        transition: 'background 0.2s, transform 0.2s'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'var(--accent-orange)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(10, 10, 15, 0.75)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                      }}
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Strip */}
              {hasMultiple && (
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginTop: '12px',
                  overflowX: 'auto',
                  paddingBottom: '4px',
                  scrollbarWidth: 'thin'
                }}>
                  {projectImages.map((thumbSrc, tIdx) => {
                    const isSelected = tIdx === activePhotoIndex;
                    return (
                      <button
                        key={`thumb-${tIdx}`}
                        type="button"
                        onClick={() => setActivePhotoIndex(tIdx)}
                        style={{
                          position: 'relative',
                          width: '74px',
                          height: '52px',
                          borderRadius: '6px',
                          overflow: 'hidden',
                          flexShrink: 0,
                          border: isSelected ? '2px solid var(--accent-orange)' : '1px solid var(--border-subtle)',
                          background: '#0a0a0f',
                          padding: 0,
                          cursor: 'pointer',
                          opacity: isSelected ? 1 : 0.6,
                          transform: isSelected ? 'scale(1.04)' : 'scale(1)',
                          transition: 'all 0.2s ease',
                          boxShadow: isSelected ? '0 0 10px rgba(255, 106, 0, 0.5)' : 'none'
                        }}
                        aria-label={`Select photo ${tIdx + 1}`}
                      >
                        <img 
                          src={thumbSrc} 
                          alt="" 
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            imageRendering: '-webkit-optimize-contrast'
                          }} 
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick Meta Footer for Media Side */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              marginTop: '0.75rem', 
              padding: '0.85rem 1rem', 
              background: 'var(--bg-card)', 
              borderRadius: '8px', 
              border: '1px solid var(--border-subtle)',
              flexWrap: 'wrap'
            }}>
              {project.date && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  <Calendar size={15} color="var(--accent-orange)" /> <strong>Dates:</strong> {project.date}
                </span>
              )}
              {project.location && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={15} color="var(--accent-orange)" /> <strong>Location:</strong> {project.location}
                </span>
              )}
              {project.year && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  <Award size={15} color="var(--accent-orange)" /> <strong>Edition / Year:</strong> {project.year}
                </span>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Event Dossier Details with Official Logo */}
          <div className="modal-info-col">
            
            {/* Header: Official Logo + Client & Category Pills */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <span style={{ 
                    background: 'var(--accent-orange-subtle)', 
                    color: 'var(--accent-orange)', 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '4px', 
                    fontSize: '0.78rem', 
                    fontWeight: 700, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.08em' 
                  }}>
                    {project.category}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    Client / Partner: <strong style={{ color: 'var(--text-primary)' }}>{project.client}</strong>
                  </span>
                </div>
              </div>

              {/* Event Official Logo Badge */}
              {project.logo && (
                <div className="modal-event-logo-badge" title={`${project.title} Official Logo`}>
                  <img src={project.logo} alt={`${project.title} logo`} />
                </div>
              )}
            </div>

            {/* Event Main Title */}
            <h2 className="font-bebas" style={{ fontSize: 'clamp(1.65rem, 2.4vw, 2.1rem)', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '0.35rem' }}>
              {project.title}
            </h2>

            {/* Subtitle */}
            {project.subtitle && (
              <p style={{ color: 'var(--accent-orange)', fontSize: '1.02rem', fontWeight: 600, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                "{project.subtitle}"
              </p>
            )}

            {/* Core Concept if present */}
            {project.concept && (
              <div style={{ 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border-subtle)', 
                borderLeft: '3px solid var(--accent-orange)',
                padding: '1rem 1.25rem', 
                borderRadius: '8px', 
                marginBottom: '1.25rem' 
              }}>
                <h4 style={{ fontSize: '0.78rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem', fontWeight: 700 }}>
                  Core Campaign Concept
                </h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {project.concept}
                </p>
              </div>
            )}

            {/* Description / Overview */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem', fontWeight: 700 }}>
                Campaign Overview & Delivery
              </h4>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.96rem', lineHeight: 1.65 }}>
                {project.description}
              </p>
            </div>

            {/* Outcome Highlight Box */}
            {project.outcome && (
              <div style={{ 
                background: 'var(--accent-orange-subtle)', 
                border: '1px solid rgba(255, 106, 0, 0.35)', 
                borderRadius: '8px', 
                padding: '1rem 1.2rem', 
                marginBottom: '1.25rem' 
              }}>
                <h4 style={{ fontSize: '0.78rem', color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem', fontWeight: 700 }}>
                  Reported Campaign Outcome
                </h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.96rem', fontWeight: 600, lineHeight: 1.55 }}>
                  {project.outcome}
                </p>
              </div>
            )}

            {/* Execution Highlights Checklist */}
            {project.highlights && project.highlights.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem', fontWeight: 700 }}>
                  Execution Highlights
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {project.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      <CheckCircle2 size={16} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom Actions */}
            <div 
              className="modal-actions-wrapper"
              style={{ 
                marginTop: 'auto', 
                paddingTop: '1.25rem', 
                borderTop: '1px solid var(--border-subtle)', 
                display: 'flex', 
                justifyContent: 'flex-end', 
                alignItems: 'center', 
                gap: '0.75rem', 
                flexWrap: 'wrap' 
              }}
            >
              <button 
                className="btn-secondary"
                onClick={onClose}
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}
              >
                Close
              </button>
              <button 
                className="btn-primary"
                onClick={() => {
                  onClose();
                  onInquire();
                }}
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}
              >
                Inquire About Similar Campaign <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
