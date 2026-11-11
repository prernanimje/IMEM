import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';

interface CardImageSliderProps {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
  showBadge?: boolean;
}

export const CardImageSlider: React.FC<CardImageSliderProps> = ({
  images,
  alt,
  className = '',
  interval = 3600,
  showBadge = true
}) => {
  // Ensure we have at least one image
  const safeImages = images && images.length > 0 ? images : ['/events/mt-helpline-1.jpg'];
  const hasMultiple = safeImages.length > 1;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Viewport visibility observer to avoid running 40+ background timers
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { rootMargin: '250px 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-slide effect ONLY when visible on screen
  useEffect(() => {
    if (!hasMultiple || isHovered || !isInView) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % safeImages.length);
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hasMultiple, isHovered, isInView, safeImages.length, interval]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % safeImages.length);
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentIndex(index);
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
      // Swiped left -> next
      setCurrentIndex((prev) => (prev + 1) % safeImages.length);
    } else if (diff < -35) {
      // Swiped right -> prev
      setCurrentIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      className={`card-image-slider ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: '#0a0a0f',
        touchAction: 'pan-y'
      }}
    >
      {/* Slides Container - Lazy & Async Decoded */}
      {safeImages.map((src, index) => {
        const isActive = index === currentIndex;
        // Don't render inactive offscreen images until the card is in/near viewport
        if (!isInView && index > 0) return null;

        return (
          <img
            key={`${src}-${index}`}
            src={src}
            alt={`${alt} - view ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="card-slider-img"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isActive ? 1 : 0,
              transition: 'opacity 0.4s ease-in-out',
              pointerEvents: isActive ? 'auto' : 'none'
            }}
          />
        );
      })}

      {/* Subtle bottom vignette to enhance dot visibility */}
      {hasMultiple && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '56px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)',
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Multiple Photos Badge at top-right */}
      {hasMultiple && showBadge && (
        <div
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'rgba(8, 9, 13, 0.85)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            fontSize: '0.64rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            padding: '0.18rem 0.5rem',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            zIndex: 4,
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
          }}
        >
          <Images size={10} color="var(--accent-orange)" />
          <span>{currentIndex + 1}/{safeImages.length}</span>
        </div>
      )}

      {/* Navigation Arrows (visible on hover or focus) */}
      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photo"
            className="slider-nav-btn slider-nav-prev"
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '26px',
              height: '26px',
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
              opacity: isHovered ? 1 : 0,
              pointerEvents: isHovered ? 'auto' : 'none',
              transition: 'opacity 0.25s ease, background 0.2s ease, transform 0.2s ease'
            }}
          >
            <ChevronLeft size={15} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photo"
            className="slider-nav-btn slider-nav-next"
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '26px',
              height: '26px',
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
              opacity: isHovered ? 1 : 0,
              pointerEvents: isHovered ? 'auto' : 'none',
              transition: 'opacity 0.25s ease, background 0.2s ease, transform 0.2s ease'
            }}
          >
            <ChevronRight size={15} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {hasMultiple && (
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            zIndex: 4
          }}
        >
          {safeImages.map((_, dotIdx) => {
            const isDotActive = dotIdx === currentIndex;
            return (
              <button
                key={dotIdx}
                type="button"
                onClick={(e) => handleDotClick(e, dotIdx)}
                aria-label={`Jump to slide ${dotIdx + 1}`}
                style={{
                  width: isDotActive ? '16px' : '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  background: isDotActive ? 'var(--accent-orange)' : 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isDotActive ? '0 0 8px rgba(255, 106, 0, 0.7)' : 'none'
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
