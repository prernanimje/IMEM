import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Sparkles, Play, ArrowUpRight, Images } from 'lucide-react';
import type { ProjectItem } from '../types';
import { portfolioProjects } from '../data/companyData';

interface HeldCardItem {
  id: string;
  name: string;
  client: string;
  category: string;
  highlight: string;
  tileIndex: number;
  tag: string;
  imageFallback: string;
  images?: string[];
  projectId?: string;
}

const HELD_CARDS_DATA: HeldCardItem[] = [
  {
    id: 'padwa-pahat-jalgaon',
    name: 'Padwa Pahat – Diwali Musical',
    client: 'HDFC Bank & MT',
    category: 'Cultural Celebration',
    highlight: 'Held Yesterday at Jalgaon • Festive Treats',
    tileIndex: 0,
    tag: 'DIWALI PADWA',
    imageFallback: '/photos/padwa1.jpeg',
    images: [
      '/photos/padwa1.jpeg',
      '/photos/padwa2.jpeg',
      '/photos/padwa3.jpeg',
      '/photos/padwa4.jpeg',
      '/photos/padwa5.jpeg',
      '/photos/padwa6.jpeg'
    ],
    projectId: 'padwa-pahat-jalgaon'
  },
  {
    id: 'cancer-awareness-program',
    name: 'Cancer Awareness Program',
    client: 'सार्वजनिक आरोग्य विभाग',
    category: 'Public Health',
    highlight: 'Ongoing in Multiple Cities • ASHA Workers',
    tileIndex: 1,
    tag: 'CANCER AWARENESS',
    imageFallback: '/photos/cancer1.jpeg',
    images: [
      '/photos/cancer1.jpeg',
      '/photos/cancer2.jpeg',
      '/photos/cancer3.jpeg',
      '/photos/cancer4.jpeg',
      '/photos/cancer5.jpeg',
      '/photos/cancer6.jpeg',
      '/photos/cancer7.jpeg',
      '/photos/cancer8.jpeg'
    ],
    projectId: 'cancer-awareness-program'
  },
  {
    id: 'hp-minitek',
    name: 'HP miniTEK Conference',
    client: 'HP',
    category: 'Corporate Events',
    highlight: 'Industry Meet 25th Oct • HP Event 27th Oct',
    tileIndex: 2,
    tag: 'TECH CONFERENCE',
    imageFallback: '/photos/hp1.jpeg',
    images: [
      '/photos/hp1.jpeg',
      '/photos/hp4.jpeg',
      '/photos/hp2.jpeg',
      '/photos/hp3.jpeg'
    ],
    projectId: 'hp-minitek'
  },
  {
    id: 'sun-pharma-cpr',
    name: 'Sun Pharma CPR Initiative',
    client: 'Sun Pharma',
    category: 'CSR / Lifesaving',
    highlight: 'CALS CPR Training (Ongoing, Multiple Cities)',
    tileIndex: 3,
    tag: 'LIFESAVING',
    imageFallback: '/photos/cpr3.jpeg',
    images: [
      '/photos/cpr3.jpeg',
      '/photos/cpr1.jpeg',
      '/photos/cpr2.jpeg',
      '/photos/cpr4.jpeg'
    ],
    projectId: 'sun-pharma-cpr'
  },
  {
    id: 'mt-helpline',
    name: 'MT Helpline',
    client: 'Maharashtra Times',
    category: 'Student Merit Financial Award',
    highlight: 'Awarding Prize Money to Top Scorers',
    tileIndex: 4,
    tag: 'MERIT AWARDS',
    imageFallback: '/photos/mt-photo.jpg',
    projectId: 'mt-helpline'
  },
  {
    id: 'meg-scholars',
    name: 'My Bappa & My Colours',
    client: 'MEG Scholars Academy',
    category: 'Creative Celebration',
    highlight: 'Ganesh Chaturthi Art & Creativity',
    tileIndex: 5,
    tag: 'CREATIVE CELEBRATION',
    imageFallback: '/photos/Mega1.jpg',
    projectId: 'meg-scholars'
  },
  {
    id: 'sony-yay-break-time',
    name: 'Sony YAY! Break Time',
    client: 'Sony YAY!',
    category: 'School Engagement Activity',
    highlight: 'Values, Fun & Teamwork',
    tileIndex: 6,
    tag: 'SCHOOL ENGAGEMENT',
    imageFallback: '/photos/sony1.jpg',
    projectId: 'sony-yay-break-time'
  },
  {
    id: 'toi-icons-education',
    name: 'Icons of Education',
    client: 'The Times of India',
    category: 'Award Ceremony for Teachers',
    highlight: 'ICONS of Education 2026 • Nagpur',
    tileIndex: 7,
    tag: 'EDUCATION AWARDS',
    imageFallback: '/photos/edu1.jpg',
    projectId: 'toi-icons-education'
  },
  {
    id: 'toi-icons-healthcare',
    name: 'Icons of Healthcare',
    client: 'The Times of India',
    category: 'Award Ceremony for Doctors',
    highlight: 'ICONS of Healthcare 2026 • Nashik',
    tileIndex: 8,
    tag: 'HEALTHCARE AWARDS',
    imageFallback: '/events/toi-icons-healthcare-main.jpeg',
    projectId: 'toi-icons-healthcare'
  },
  {
    id: 'pentel-write-and-shine',
    name: 'Pentel Write & Shine',
    client: 'Pentel',
    category: 'Product Demonstration',
    highlight: 'Interactive School Learning Sessions',
    tileIndex: 9,
    tag: 'BRAND ACTIVATION',
    imageFallback: '/photos/pen1.jpg',
    projectId: 'pentel-write-and-shine'
  },
  {
    id: 'smart-bazaar-cooking',
    name: "Women's Culinary Showcase",
    client: 'Smart Bazaar',
    category: 'Culinary Competition',
    highlight: 'In-Store Culinary Contest • Nagpur',
    tileIndex: 10,
    tag: 'CULINARY SHOWCASE',
    imageFallback: '/photos/bazar1.jpg',
    projectId: 'smart-bazaar-cooking'
  },
  {
    id: 'times-power-women',
    name: 'Times Power Women',
    client: 'The Times of India',
    category: 'Women Achievers Celebration',
    highlight: 'Times Power Women 2026 • Nashik',
    tileIndex: 11,
    tag: 'LEADERSHIP GALA',
    imageFallback: '/photos/women1.jpg',
    projectId: 'times-power-women'
  },
  {
    id: 'times-of-yoga',
    name: 'The Times of Yoga',
    client: 'The Times of India',
    category: 'Wellness & Mindfulness',
    highlight: 'Open-Air Group Yoga Across 4+ Cities',
    tileIndex: 12,
    tag: 'WELLNESS INITIATIVE',
    imageFallback: '/photos/yoga1.jpg',
    projectId: 'times-of-yoga'
  },
  {
    id: 'kya-zamana-tha',
    name: 'Kya Zamana Tha',
    client: 'Maharashtra Times & HDFC Bank',
    category: 'Celebration of Nostalgia',
    highlight: 'Senior Citizen Gathering • Latur',
    tileIndex: 13,
    tag: 'COMMUNITY GATHERING',
    imageFallback: '/photos/age1.jpg',
    projectId: 'kya-zamana-tha'
  }
];

const VIDEO_SRC = 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/04fd3d5f-99d7-476e-98a4-46c08518ffb3.mp4';
const POSTER_SRC = 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/b7ebb74a-8c8a-4f7e-8f80-55e2d74ecd05.webp';

interface CurvedCardCarouselProps {
  onSelectProject?: (project: ProjectItem) => void;
  onExploreWork?: () => void;
}

export const CurvedCardCarousel: React.FC<CurvedCardCarouselProps> = ({
  onSelectProject,
  onExploreWork
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const mediaRefs = useRef<{ video: HTMLVideoElement | null; poster: HTMLImageElement | null }[]>([]);
  
  // Physics & Animation state
  const scrollOffsetRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const lastXRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const totalDragDistanceRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const [isGrabbed, setIsGrabbed] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  // Multi-image auto-cycle for cards with multiple photos (HP & others)
  const [activePhotoIndices, setActivePhotoIndices] = useState<Record<string, number>>({});

  useEffect(() => {
    const multiCards = HELD_CARDS_DATA.filter((c) => c.images && c.images.length > 1);
    if (multiCards.length === 0) return;

    const timer = setInterval(() => {
      setActivePhotoIndices((prev) => {
        const next = { ...prev };
        multiCards.forEach((c) => {
          const cur = prev[c.id] || 0;
          next[c.id] = (cur + 1) % c.images!.length;
        });
        return next;
      });
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  // Sync videos
  const handleVideoLoaded = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  // Handle card click
  const handleCardClick = useCallback((item: HeldCardItem) => {
    if (totalDragDistanceRef.current > 7) {
      // Drag action, ignore click
      return;
    }
    if (item.projectId && onSelectProject) {
      const found = portfolioProjects.find(p => p.id === item.projectId);
      if (found) {
        onSelectProject(found);
        return;
      }
    }
    if (onExploreWork) {
      onExploreWork();
    }
  }, [onSelectProject, onExploreWork]);

  // Pointer Down
  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    // Only primary button
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    setIsGrabbed(true);
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    totalDragDistanceRef.current = 0;
    velocityRef.current = 0;
  }, []);

  useEffect(() => {
    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const now = performance.now();
      const dt = Math.max(1, now - lastTimeRef.current);
      const dx = e.clientX - lastXRef.current;
      
      totalDragDistanceRef.current += Math.abs(dx);
      // Follow drag 1:1 (dragging left moves cards left, which increases scrollOffset)
      scrollOffsetRef.current -= dx;
      
      // Calculate instantaneous velocity in pixels/second
      const instantVelocity = - (dx / (dt / 1000));
      // Light smoothing
      velocityRef.current = velocityRef.current * 0.4 + instantVelocity * 0.6;
      
      lastXRef.current = e.clientX;
      lastTimeRef.current = now;
    };

    const handleGlobalPointerUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsGrabbed(false);
    };

    window.addEventListener('pointermove', handleGlobalPointerMove, { passive: true });
    window.addEventListener('pointerup', handleGlobalPointerUp);
    window.addEventListener('pointercancel', handleGlobalPointerUp);

    return () => {
      window.removeEventListener('pointermove', handleGlobalPointerMove);
      window.removeEventListener('pointerup', handleGlobalPointerUp);
      window.removeEventListener('pointercancel', handleGlobalPointerUp);
    };
  }, []);

  // Animation Loop: Render cylinder curved carousel with Viewport Awareness
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let isVisible = true;

    // Reset ref array bounds
    cardRefs.current.length = HELD_CARDS_DATA.length;
    pathRefs.current.length = HELD_CARDS_DATA.length;
    mediaRefs.current.length = HELD_CARDS_DATA.length;

    const render = (now: number) => {
      if (!isVisible) {
        animationFrameIdRef.current = null;
        return;
      }

      const N = HELD_CARDS_DATA.length;
      if (lastFrameTimeRef.current === 0) {
        lastFrameTimeRef.current = now;
      }
      const dt = Math.min(0.08, (now - lastFrameTimeRef.current) / 1000);
      lastFrameTimeRef.current = now;

      const container = containerRef.current;
      if (!container) {
        animationFrameIdRef.current = requestAnimationFrame(render);
        return;
      }

      const containerWidth = container.clientWidth || 1440;
      const containerHeight = container.clientHeight || 420;

      // Scale unit u and carousel geometry tailored for mobile and desktop
      const isMobile = containerWidth <= 820;
      const isSmall = containerWidth <= 520;

      let u: number;
      let pitch: number;
      let baseW: number;
      let baseH: number;
      let L: number;

      if (isSmall) {
        u = Math.max(0.82, Math.min(1.0, containerWidth / 420));
        baseW = 196;
        baseH = 265;
        pitch = 205 * u;
        L = Math.max(260, (containerWidth / 2) * 1.15);
      } else if (isMobile) {
        u = Math.max(0.65, Math.min(0.85, containerWidth / 640));
        baseW = 180;
        baseH = 280;
        pitch = 200 * u;
        L = Math.max(480 * u, (containerWidth / 2) * 0.98);
      } else {
        u = Math.min(1.0, containerWidth / 1440);
        baseW = 170;
        baseH = 280;
        pitch = 196 * u;
        L = Math.max(706 * u, (containerWidth / 2) * 0.96);
      }

      const totalTrackWidth = N * pitch;
      const center = containerWidth / 2;
      const Y_base = containerHeight / 2 + (isSmall ? 4 : 10 * u);

      // Physics update when not dragging
      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 1.5) {
          scrollOffsetRef.current += velocityRef.current * dt;
          velocityRef.current *= Math.pow(0.05, dt);
        } else {
          velocityRef.current = 0;
          if (!prefersReducedMotion) {
            scrollOffsetRef.current += 50 * u * dt;
          }
        }
      }

      scrollOffsetRef.current = ((scrollOffsetRef.current % totalTrackWidth) + totalTrackWidth) % totalTrackWidth;

      // Update geometry of each card
      for (let i = 0; i < N; i++) {
        const cardEl = cardRefs.current[i];
        const pathEl = pathRefs.current[i];
        const media = mediaRefs.current[i];
        if (!cardEl) continue;

        let t = ((i * pitch - scrollOffsetRef.current) % totalTrackWidth + totalTrackWidth) % totalTrackWidth;
        if (t > totalTrackWidth / 2) {
          t -= totalTrackWidth;
        }

        const maxVisibleDistance = containerWidth / 2 + 350 * u;
        if (Math.abs(t) > maxVisibleDistance) {
          cardEl.style.display = 'none';
          continue;
        } else {
          cardEl.style.display = 'block';
        }

        const tNorm = t / L;
        const x = center + t * (1 + (isSmall ? 0.05 : 0.083) * (tNorm * tNorm));
        const d = Math.min(1.35, Math.abs(x - center) / L);
        const W = (baseW + (isSmall ? 22 : 48) * (d * d)) * u;

        const xL = x - W / 2;
        const xR = x + W / 2;
        const qL = Math.min(1.4, Math.abs(xL - center) / L);
        const qR = Math.min(1.4, Math.abs(xR - center) / L);

        const HL = (baseH + (isSmall ? 35 : 92) * Math.pow(qL, 2.6)) * u;
        const HR = (baseH + (isSmall ? 35 : 92) * Math.pow(qR, 2.6)) * u;
        const Hmax = Math.max(HL, HR);

        const Y = Y_base - ((isSmall ? 6 : 12) * (d * d)) * u;
        const cardLeft = x - W / 2;
        const cardTop = Y - Hmax / 2;

        cardEl.style.width = `${W}px`;
        cardEl.style.height = `${Hmax}px`;
        cardEl.style.transform = `translate3d(${cardLeft}px, ${cardTop}px, 0)`;
        cardEl.style.zIndex = `${Math.round(100 - d * 20)}`;

        const Ymid = Hmax / 2;
        const yTL = Ymid - HL / 2;
        const yBL = Ymid + HL / 2;
        const yTR = Ymid - HR / 2;
        const yBR = Ymid + HR / 2;

        const r = Math.min(15 * u, W / 2, HL / 2, HR / 2);
        const pathD = `M ${r} ${yTL} L ${W - r} ${yTR} Q ${W} ${yTR} ${W} ${yTR + r} L ${W} ${yBR - r} Q ${W} ${yBR} ${W - r} ${yBR} L ${r} ${yBL} Q 0 ${yBL} 0 ${yBL - r} L 0 ${yTL + r} Q 0 ${yTL} ${r} ${yTL} Z`;

        if (pathEl) {
          pathEl.setAttribute('d', pathD);
        }

        const clipStyle = `url(#card-quad-clip-${i})`;
        cardEl.style.clipPath = clipStyle;
        (cardEl.style as any).webkitClipPath = clipStyle;

        if (media) {
          const tileAspect = 0.7111;
          let tileH = Math.max(Hmax, W / tileAspect);
          let tileW = tileH * tileAspect;
          if (tileW < W) {
            tileW = W;
            tileH = W / tileAspect;
          }

          const gridW = 5 * tileW;
          const gridH = 2 * tileH;
          const tileIdx = HELD_CARDS_DATA[i].tileIndex % 10;
          const col = tileIdx % 5;
          const row = Math.floor(tileIdx / 5);

          const offsetX = - (col * tileW) - (tileW - W) / 2;
          const offsetY = - (row * tileH) - (tileH - Hmax) / 2;

          const transformStr = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
          if (media.video) {
            media.video.style.width = `${gridW}px`;
            media.video.style.height = `${gridH}px`;
            media.video.style.transform = transformStr;
          }
          if (media.poster) {
            media.poster.style.width = `${gridW}px`;
            media.poster.style.height = `${gridH}px`;
            media.poster.style.transform = transformStr;
          }
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    // Intersection observer to pause carousel when off-screen
    const container = containerRef.current;
    let observer: IntersectionObserver | null = null;
    if (container && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (!wasVisible && isVisible) {
          lastFrameTimeRef.current = performance.now();
          if (!animationFrameIdRef.current) {
            animationFrameIdRef.current = requestAnimationFrame(render);
          }
          // Resume videos if any
          mediaRefs.current.forEach((m) => {
            if (m?.video && m.video.paused) {
              m.video.play().catch(() => {});
            }
          });
        } else if (!isVisible) {
          // Pause videos when scrolled away to free CPU/GPU
          mediaRefs.current.forEach((m) => {
            if (m?.video && !m.video.paused) {
              m.video.pause();
            }
          });
        }
      }, { threshold: 0.05 });
      observer.observe(container);
    }

    animationFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [HELD_CARDS_DATA.length]);

  return (
    <div className="curved-carousel-section">
      {/* SVG ClipPath Definitions for 10 cards */}
      <svg
        style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
        aria-hidden="true"
      >
        <defs>
          {HELD_CARDS_DATA.map((card, idx) => (
            <clipPath key={card.id} id={`card-quad-clip-${idx}`} clipPathUnits="userSpaceOnUse">
              <path
                ref={(el) => {
                  pathRefs.current[idx] = el;
                }}
                d="M 0 0 L 100 0 L 100 100 L 0 100 Z"
              />
            </clipPath>
          ))}
        </defs>
      </svg>

      {/* Hand-Drawn Notes and Doodles Overlay */}
      <div className="curved-carousel-doodles" aria-hidden="true">
        {/* Note: 15+ Held Programs with Curling Arrow */}
        <div className="doodle-note doodle-note-top-right">
          <div className="doodle-text-badge">
            <span className="doodle-hand-text">15+ Held Programs</span>
            <span className="doodle-sub-text">National Brand Work</span>
          </div>
          {/* Hand-drawn curving arrow pointing down to cards (never crossing words) */}
          <svg
            className="doodle-arrow-svg"
            viewBox="0 0 160 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="doodle-stroke"
              d="M 20,10 C 65,12 115,25 125,58 C 132,78 110,95 85,92"
              stroke="var(--accent-orange)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              className="doodle-arrowhead"
              d="M 98,84 L 83,92 L 92,104"
              stroke="var(--accent-orange)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Note: Drag & Explore with small curved arrow */}
        <div className="doodle-note doodle-note-bottom-left">
          <div className="doodle-text-badge-bottom">
            <span className="doodle-hand-text-small">Pan-India Scale &bull; Zero Friction</span>
          </div>
          <svg
            className="doodle-arrow-mini-svg"
            viewBox="0 0 110 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="doodle-stroke"
              d="M 10,25 Q 55,42 90,20"
              stroke="var(--accent-orange)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              className="doodle-arrowhead"
              d="M 78,16 L 92,20 L 84,32"
              stroke="var(--accent-orange)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* "//" Accent Doodle at top left */}
        <div className="doodle-slashes">
          <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="8" y1="28" x2="22" y2="6" stroke="var(--accent-orange)" strokeWidth="3" strokeLinecap="round" className="doodle-stroke" />
            <line x1="22" y1="28" x2="36" y2="6" stroke="var(--accent-orange)" strokeWidth="3" strokeLinecap="round" className="doodle-stroke" style={{ animationDelay: '0.4s' }} />
          </svg>
        </div>
      </div>

      {/* Main Curved Track Container */}
      <div
        ref={containerRef}
        className={`curved-carousel-track ${isGrabbed ? 'is-grabbing' : 'is-grab'}`}
        onPointerDown={handlePointerDown}
      >
        {HELD_CARDS_DATA.map((card, idx) => (
          <div
            key={card.id}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className="curved-card-item"
            onClick={() => handleCardClick(card)}
            role="button"
            tabIndex={0}
            aria-label={`Held Event: ${card.name} for ${card.client}`}
          >
            {/* Inner Media Container */}
            <div className="curved-card-media-wrapper">
              {/* Poster Layer (5x2 grid) */}
              <img
                ref={(el) => {
                  if (!mediaRefs.current[idx]) {
                    mediaRefs.current[idx] = { video: null, poster: el };
                  } else {
                    mediaRefs.current[idx].poster = el;
                  }
                }}
                src={POSTER_SRC}
                alt={card.name}
                className="curved-card-poster"
                loading={idx < 2 ? "eager" : "lazy"}
                decoding="async"
              />

              {/* Video Loop Layer (5x2 grid) */}
              <video
                ref={(el) => {
                  if (!mediaRefs.current[idx]) {
                    mediaRefs.current[idx] = { video: el, poster: null };
                  } else {
                    mediaRefs.current[idx].video = el;
                  }
                }}
                src={VIDEO_SRC}
                className={`curved-card-video ${videoLoaded ? 'loaded' : ''}`}
                muted
                loop
                playsInline
                preload="metadata"
                autoPlay
                onLoadedData={handleVideoLoaded}
              />

              {/* Specific Project Imagery Blend (Multi-image crossfade if card has multiple photos) */}
              {card.images && card.images.length > 1 ? (
                card.images.map((imgSrc, imgIdx) => {
                  const isActive = (activePhotoIndices[card.id] || 0) === imgIdx;
                  return (
                    <div
                      key={imgSrc}
                      className="curved-card-bg-blend"
                      style={{
                        backgroundImage: `url("${imgSrc}")`,
                        opacity: isActive ? 0.96 : 0,
                        transition: 'opacity 0.75s ease-in-out'
                      }}
                    />
                  );
                })
              ) : (
                <div
                  className="curved-card-bg-blend"
                  style={{
                    backgroundImage: `url("${card.imageFallback}")`
                  }}
                />
              )}

              {/* Scrim Overlays - Preserves contrast in both dark & light themes */}
              <div className="curved-card-scrim" />
              <div className="curved-card-glow-border" />

              {/* Held Event Card Details */}
              <div className="curved-card-content">
                {/* Top Badge: Client Brand Name */}
                <div className="curved-card-top-bar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span className="curved-card-brand-pill">
                      {card.client}
                    </span>
                    {card.images && card.images.length > 1 && (
                      <span 
                        style={{
                          background: 'rgba(8, 9, 13, 0.82)',
                          backdropFilter: 'blur(6px)',
                          border: '1px solid rgba(255, 255, 255, 0.22)',
                          color: '#fff',
                          fontSize: '0.62rem',
                          fontWeight: 700,
                          padding: '0.14rem 0.45rem',
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '3px'
                        }}
                      >
                        <Images size={9} color="var(--accent-orange)" />
                        {((activePhotoIndices[card.id] || 0) + 1)}/{card.images.length}
                      </span>
                    )}
                  </div>
                  <span className="curved-card-live-dot" title="Executed Held Campaign">
                    <span className="live-pulse" />
                    HELD
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="curved-card-bottom-info">
                  {/* Dots Indicator for multi-photo cards */}
                  {card.images && card.images.length > 1 && (
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '0.4rem' }}>
                      {card.images.map((_, dotIdx) => {
                        const isDotActive = (activePhotoIndices[card.id] || 0) === dotIdx;
                        return (
                          <div
                            key={dotIdx}
                            style={{
                              width: isDotActive ? '14px' : '5px',
                              height: '4px',
                              borderRadius: '9999px',
                              background: isDotActive ? 'var(--accent-orange)' : 'rgba(255, 255, 255, 0.4)',
                              transition: 'all 0.3s ease',
                              boxShadow: isDotActive ? '0 0 6px rgba(255, 106, 0, 0.8)' : 'none'
                            }}
                          />
                        );
                      })}
                    </div>
                  )}

                  <div className="curved-card-category-tag">
                    <Sparkles size={11} className="inline-icon" />
                    <span>{card.tag}</span>
                  </div>

                  <h3 className="curved-card-title">{card.name}</h3>

                  <div className="curved-card-highlight-badge">
                    <span>{card.highlight}</span>
                  </div>

                  {/* Frosted Play / Inspect Button */}
                  <div className="curved-card-play-action">
                    <div className="curved-card-play-circle">
                      <Play size={13} fill="currentColor" color="currentColor" />
                    </div>
                    <span className="curved-card-tap-label">View Project</span>
                    <ArrowUpRight size={13} className="curved-card-arrow-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
