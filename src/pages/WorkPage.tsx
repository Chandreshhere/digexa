import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useNavigate } from 'react-router-dom';
import '../styles/WorkPage.css';

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
  {
    title: 'Vertex Digital Agency',
    category: 'FULL-SERVICE DIGITAL',
    result: '3x Revenue Growth',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop',
    tags: ['Branding', 'Web Dev', 'SEO', 'Paid Ads'],
    color: '#A8FA00',
  },
  {
    title: 'EduGlobal University',
    category: 'EDUCATION CONSULTANCY',
    result: '60% Enrollment Boost',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=600&fit=crop',
    tags: ['Education', 'Web App', 'Automation'],
    color: '#3B82F6',
  },
  {
    title: 'NovaTech SaaS',
    category: 'PRODUCT LAUNCH',
    result: '10K Users in 90 Days',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=600&fit=crop',
    tags: ['SaaS', 'UI/UX', 'React', 'Growth'],
    color: '#8B5CF6',
  },
  {
    title: 'Pulse AI Labs',
    category: 'AI & AUTOMATION',
    result: '70% Faster Response',
    image: 'https://images.unsplash.com/photo-1531746790095-e5577f030b71?w=900&h=600&fit=crop',
    tags: ['AI', 'Chatbot', 'Automation'],
    color: '#F97316',
  },
  {
    title: 'UrbanCart Commerce',
    category: 'E-COMMERCE',
    result: '250% Sales Increase',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop',
    tags: ['E-Commerce', 'Shopify', 'Marketing'],
    color: '#EC4899',
  },
  {
    title: 'Meridian Health',
    category: 'BRAND STRATEGY',
    result: 'Complete Rebrand',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&h=600&fit=crop',
    tags: ['Branding', 'Design System', 'Campaign'],
    color: '#14B8A6',
  },
];

const gridProjects = [
  { title: 'Mega Navigation System', category: 'NAVIGATION', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop' },
  { title: 'Sticky Steps Layout', category: 'SECTIONS & LAYOUTS', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop' },
  { title: 'AI Dashboard Interface', category: 'AI & DATA', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
  { title: 'Pixelated Wave Transition', category: 'ANIMATIONS', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop' },
  { title: 'Annual Overview Portal', category: 'WEB DEVELOPMENT', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop' },
  { title: 'Stacked Cards Transition', category: 'MICRO INTERACTIONS', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop' },
];

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 12, suffix: '+', label: 'Industries Served' },
  { value: 8, suffix: '+', label: 'Years Experience' },
];

const WorkPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const dragDx = useRef(0);
  const dragDy = useRef(0);
  const topCardEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (isAnimating) return;
    const target = e.currentTarget as HTMLDivElement;
    isDragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
    dragDx.current = 0;
    dragDy.current = 0;
    topCardEl.current = target;
    target.setPointerCapture(e.pointerId);
    target.style.transition = 'none';
    target.style.cursor = 'grabbing';
  }, [isAnimating]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !topCardEl.current) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    dragDx.current = dx;
    dragDy.current = dy;
    const rotation = dx * 0.06;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const progress = Math.min(distance / 250, 1);

    topCardEl.current.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotation}deg)`;
    topCardEl.current.style.opacity = String(Math.max(0.2, 1 - progress * 0.8));

    // Animate behind cards to "come forward" as you drag
    const deck = topCardEl.current.parentElement;
    if (deck) {
      const card1 = deck.querySelector('.wk-scard--1') as HTMLElement;
      const card2 = deck.querySelector('.wk-scard--2') as HTMLElement;
      const card3 = deck.querySelector('.wk-scard--3') as HTMLElement;
      if (card1) {
        card1.style.transition = 'none';
        card1.style.transform = `scale(${0.94 + progress * 0.06}) translateY(${20 - progress * 20}px)`;
        card1.style.filter = `brightness(${0.85 + progress * 0.15})`;
      }
      if (card2) {
        card2.style.transition = 'none';
        card2.style.transform = `scale(${0.88 + progress * 0.06}) translateY(${40 - progress * 20}px)`;
        card2.style.filter = `brightness(${0.7 + progress * 0.15})`;
      }
      if (card3) {
        card3.style.transition = 'none';
        card3.style.transform = `scale(${0.82 + progress * 0.06}) translateY(${60 - progress * 20}px)`;
        card3.style.filter = `brightness(${0.55 + progress * 0.15})`;
      }
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    if (!isDragging.current || !topCardEl.current) return;
    isDragging.current = false;
    const dx = dragDx.current;
    const dy = dragDy.current;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const card = topCardEl.current;
    const deck = card.parentElement;

    if (distance > 120) {
      setIsAnimating(true);
      const angle = Math.atan2(dy, dx);
      const flingX = Math.cos(angle) * 1500;
      const flingY = Math.sin(angle) * 1500;
      card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s';
      card.style.transform = `translate(${flingX}px, ${flingY}px) rotate(${dx * 0.12}deg)`;
      card.style.opacity = '0';

      // Animate behind cards to final position
      if (deck) {
        const card1 = deck.querySelector('.wk-scard--1') as HTMLElement;
        const card2 = deck.querySelector('.wk-scard--2') as HTMLElement;
        const card3 = deck.querySelector('.wk-scard--3') as HTMLElement;
        [card1, card2, card3].forEach(c => {
          if (c) c.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s';
        });
        if (card1) { card1.style.transform = 'scale(1) translateY(0)'; card1.style.filter = 'brightness(1)'; }
        if (card2) { card2.style.transform = 'scale(0.94) translateY(20px)'; card2.style.filter = 'brightness(0.85)'; }
        if (card3) { card3.style.transform = 'scale(0.88) translateY(40px)'; card3.style.filter = 'brightness(0.7)'; }
      }

      setTimeout(() => {
        setCurrentCard(prev => (prev + 1) % featuredProjects.length);
        setIsAnimating(false);
      }, 600);
    } else {
      // Snap back
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s';
      card.style.transform = '';
      card.style.opacity = '1';
      card.style.cursor = '';

      // Reset behind cards
      if (deck) {
        const card1 = deck.querySelector('.wk-scard--1') as HTMLElement;
        const card2 = deck.querySelector('.wk-scard--2') as HTMLElement;
        const card3 = deck.querySelector('.wk-scard--3') as HTMLElement;
        [card1, card2, card3].forEach(c => {
          if (c) c.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s';
        });
        if (card1) { card1.style.transform = ''; card1.style.filter = ''; }
        if (card2) { card2.style.transform = ''; card2.style.filter = ''; }
        if (card3) { card3.style.transform = ''; card3.style.filter = ''; }
      }
    }
    topCardEl.current = null;
  }, []);

  useEffect(() => {
    const splits: SplitType[] = [];
    const ctx = gsap.context(() => {

      const heroTitle = document.querySelector('.wk-hero__title') as HTMLElement;
      if (heroTitle) {
        const split = new SplitType(heroTitle, { types: 'chars' });
        splits.push(split);
        if (split.chars) {
          gsap.set(split.chars, { yPercent: 130, opacity: 0 });
          gsap.to(split.chars, { yPercent: 0, opacity: 1, duration: 1, stagger: 0.025, ease: 'power3.out', delay: 0.3 });
        }
      }

      gsap.fromTo('.wk-hero__subtitle',
        { opacity: 0, y: 25, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out', delay: 0.9 }
      );

      gsap.fromTo('.wk-hero__last-added',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.1 }
      );

      gsap.to('.wk-hero__scroll-arrow', {
        y: 6, duration: 0.8, ease: 'power1.inOut', yoyo: true, repeat: -1,
      });

      document.querySelectorAll('.wk-stack__title').forEach((el) => {
        const split = new SplitType(el as HTMLElement, { types: 'chars' });
        splits.push(split);
        if (split.chars) {
          gsap.set(split.chars, { yPercent: 100, opacity: 0 });
          gsap.to(split.chars, {
            yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.015, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 80%' },
          });
        }
      });

      gsap.fromTo('.wk-stack__deck',
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.wk-stack', start: 'top 70%' } }
      );

      gsap.fromTo('.wk-grid__card',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.wk-grid', start: 'top 75%' } }
      );

      document.querySelectorAll('.wk-grid__card-img img').forEach((img) => {
        gsap.to(img, {
          yPercent: -10, ease: 'none',
          scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
        });
      });

      const quoteEl = document.querySelector('.wk-quote__text') as HTMLElement;
      if (quoteEl) {
        const split = new SplitType(quoteEl, { types: 'words' });
        splits.push(split);
        if (split.words) {
          gsap.fromTo(split.words,
            { opacity: 0.12 },
            { opacity: 1, duration: 0.3, stagger: 0.05, ease: 'none',
              scrollTrigger: { trigger: quoteEl, start: 'top 70%', end: 'bottom 40%', scrub: true } }
          );
        }
      }

      // Made with — single line horizontal
      gsap.fromTo('.wk-made__title',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.wk-made', start: 'top 75%' } }
      );

      gsap.fromTo('.wk-made__scribble',
        { opacity: 0, y: 20, rotate: -5 },
        { opacity: 1, y: 0, rotate: 0, duration: 0.8, ease: 'power2.out', delay: 0.3,
          scrollTrigger: { trigger: '.wk-made', start: 'top 75%' } }
      );

      gsap.fromTo('.wk-made__showcase-card',
        { y: 80, opacity: 0, rotateY: -15 },
        { y: 0, opacity: 1, rotateY: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.wk-made__showcase', start: 'top 80%' } }
      );

      document.querySelectorAll('.wk-stats__number').forEach((el, i) => {
        const target = stats[i].value;
        const suffix = stats[i].suffix;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration: 2.5, ease: 'power2.out',
          scrollTrigger: { trigger: '.wk-stats', start: 'top 82%' },
          onUpdate: () => { (el as HTMLElement).textContent = Math.round(obj.val) + suffix; },
        });
      });

      gsap.fromTo('.wk-stats__item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.wk-stats', start: 'top 82%' } }
      );

      gsap.fromTo('.wk-cta',
        { y: 50, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.wk-cta', start: 'top 85%' } }
      );

    }, pageRef);

    return () => { splits.forEach(s => s.revert()); ctx.revert(); ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  // Build visible stack: show 4 cards deep
  const getVisibleCards = () => {
    const total = featuredProjects.length;
    const visible = [];
    for (let offset = 0; offset < 4; offset++) {
      const idx = (currentCard + offset) % total;
      visible.push({ ...featuredProjects[idx], offset });
    }
    return visible;
  };

  return (
    <div className="wk-page" ref={pageRef}>

      {/* ===== HERO ===== */}
      <section className="wk-hero">
        <div className="wk-hero__bg">
          <div className="wk-hero__gridline wk-hero__gridline--v" />
          <div className="wk-hero__gridline wk-hero__gridline--h" />
          {[...Array(6)].map((_, i) => (
            <div key={i} className="wk-hero__dash" style={{
              top: `${15 + i * 14}%`,
              opacity: 0.03 + (i % 2) * 0.02,
            }} />
          ))}
        </div>
        <div className="wk-hero__content">
          <h1 className="wk-hero__title">Collection</h1>
          <p className="wk-hero__last-added">Last added <span className="wk-hero__accent">1 day ago</span></p>
          <p className="wk-hero__subtitle">
            Take a peek inside our ever-growing collection of resources.<br/>
            We've delivered 500+ projects across 12 countries.
          </p>
        </div>
        <div className="wk-hero__scroll-hint">
          <span className="wk-hero__scroll-text">Scroll to explore</span>
          <span className="wk-hero__scroll-arrow">↓</span>
        </div>
      </section>

      {/* ===== DRAGGABLE CARD STACK ===== */}
      <section className="wk-stack">
        <div className="wk-stack__inner">
          <div className="wk-stack__header">
            <span className="wk-stack__eyebrow">FEATURED PROJECTS</span>
            <h2 className="wk-stack__title">Case Studies</h2>
            <p className="wk-stack__hint">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10H17M17 10L12 5M17 10L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Grab & drag cards to explore
            </p>
          </div>

          <div className="wk-stack__deck">
            {getVisibleCards().reverse().map((project) => {
              const isTop = project.offset === 0;
              return (
                <div
                  key={currentCard + '-' + project.offset}
                  className={`wk-scard wk-scard--${project.offset}`}
                  style={{ '--card-accent': project.color } as React.CSSProperties}
                  onPointerDown={isTop ? handlePointerDown : undefined}
                  onPointerMove={isTop ? handlePointerMove : undefined}
                  onPointerUp={isTop ? handlePointerUp : undefined}
                >
                  <div className="wk-scard__img">
                    <img src={project.image} alt={project.title} draggable={false} />
                    <div className="wk-scard__gradient" />
                    <div className="wk-scard__tag-badge">
                      {project.offset === 0 && <span className="wk-scard__new">NEW</span>}
                      <span className="wk-scard__cat-badge">{project.category}</span>
                    </div>
                  </div>
                  <div className="wk-scard__body">
                    <div className="wk-scard__row">
                      <h3 className="wk-scard__title">{project.title}</h3>
                      <div className="wk-scard__result">
                        <span className="wk-scard__result-val">{project.result}</span>
                      </div>
                    </div>
                    <div className="wk-scard__tags">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="wk-scard__tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="wk-stack__nav">
              {featuredProjects.map((_, i) => (
                <button
                  key={i}
                  className={`wk-stack__dot ${i === currentCard ? 'wk-stack__dot--active' : ''}`}
                  onClick={() => { if (!isAnimating) setCurrentCard(i); }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECT GRID ===== */}
      <section className="wk-grid">
        <div className="wk-grid__inner">
          <div className="wk-grid__header">
            <span className="wk-grid__eyebrow">ALL WORK</span>
            <div className="wk-grid__header-row">
              <h2 className="wk-grid__title">Latest Resources</h2>
              <div className="wk-grid__filters">
                {['All', 'Web', 'AI', 'Branding'].map((f, i) => (
                  <button key={f} className={`wk-grid__filter ${i === 0 ? 'wk-grid__filter--active' : ''}`}>{f}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="wk-grid__cards">
            {gridProjects.map((project, i) => (
              <div key={i} className="wk-grid__card">
                <div className="wk-grid__card-img">
                  <img src={project.image} alt={project.title} />
                  <div className="wk-grid__card-hover">
                    <span>View Project</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 14L14 6M14 6H8M14 6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                </div>
                <div className="wk-grid__card-info">
                  <h3 className="wk-grid__card-name">{project.title}</h3>
                  <span className="wk-grid__card-cat">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="wk-stats">
        <div className="wk-stats__inner">
          {stats.map((s, i) => (
            <div key={i} className="wk-stats__item">
              <span className="wk-stats__number">0</span>
              <span className="wk-stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== QUOTE ===== */}
      <section className="wk-quote">
        <div className="wk-quote__inner">
          <h2 className="wk-quote__text">
            &ldquo;Every project we deliver is engineered to move the needle. We don't chase vanity metrics — we build competitive advantages that compound over time.&rdquo;
          </h2>
          <div className="wk-quote__author">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=top" alt="Founder" className="wk-quote__avatar" />
            <div>
              <span className="wk-quote__name">James Mitchell</span>
              <span className="wk-quote__role">Founder & CEO</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MADE WITH ===== */}
      <section className="wk-made">
        <div className="wk-made__inner">
          <h2 className="wk-made__title">
            <span>Made</span>
            <span className="wk-made__title-with">with</span>
            <span className="wk-made__title-accent">BeyondEdge</span>
          </h2>
          <p className="wk-made__scribble">These folks are talented</p>

          <div className="wk-made__showcase">
            {featuredProjects.slice(0, 3).map((project, i) => (
              <div key={i} className="wk-made__showcase-card" style={{
                '--rotation': `${(i - 1) * 8}deg`,
              } as React.CSSProperties}>
                <img src={project.image} alt={project.title} />
                <div className="wk-made__showcase-bottom">
                  <span className="wk-made__showcase-name">{project.title}</span>
                  <div className="wk-made__showcase-right">
                    <span className="wk-made__showcase-meta">{project.tags.length} RESOURCES USED</span>
                    <span className="wk-made__showcase-star">✦</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="wk-cta">
        <div className="wk-cta__inner">
          <h2 className="wk-cta__title">Have a project in mind?</h2>
          <p className="wk-cta__desc">Let's turn your vision into measurable results.</p>
          <button className="wk-cta__btn" onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}>
            Start a Conversation <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
