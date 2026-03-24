import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/Hero.css';

gsap.registerPlugin(ScrollTrigger);

const showcaseCards = [
  { title: 'E-Commerce Growth Strategy', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop' },
  { title: 'AI Customer Support', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=350&fit=crop' },
  { title: '3D Brand Experience', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop' },
  { title: 'SaaS Product Launch', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=350&fit=crop' },
  { title: 'University Platform', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=350&fit=crop' },
  { title: 'Mobile App Design', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=350&fit=crop' },
  { title: 'Marketing Campaign', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500&h=350&fit=crop' },
  { title: 'Brand Identity System', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=350&fit=crop' },
  { title: 'Data Analytics Dashboard', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=350&fit=crop' },
  { title: 'SEO & Growth Engine', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=350&fit=crop' },
  { title: 'Workflow Automation', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=350&fit=crop' },
];

const TOTAL = showcaseCards.length;
const ANGLE_STEP = 360 / TOTAL;

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const splits: SplitType[] = [];

    const ctx = gsap.context(() => {
      // Split each title word into chars
      document.querySelectorAll('.hero-title-word').forEach((el) => {
        const split = new SplitType(el as HTMLElement, { types: 'chars' });
        splits.push(split);
        if (split.chars) {
          gsap.set(split.chars, { yPercent: 120, opacity: 0, rotateX: -90 });
          gsap.to(split.chars, {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.03,
            ease: 'back.out(1.7)',
            delay: 0.4,
          });
        }
      });

      // Asterisk icon — spin in + scale
      gsap.fromTo('.hero-title-accent-icon',
        { opacity: 0, scale: 0, rotate: -360 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)', delay: 0.8 }
      );

      // Subtitle text — reveal word by word
      const subtitleEl = document.querySelector('.hero-subtitle') as HTMLElement;
      if (subtitleEl) {
        gsap.set(subtitleEl, { opacity: 1 });
        const subtitleSplit = new SplitType(subtitleEl, { types: 'words' });
        splits.push(subtitleSplit);
        if (subtitleSplit.words) {
          gsap.fromTo(subtitleSplit.words,
            { opacity: 0, y: 15, filter: 'blur(8px)' },
            {
              opacity: 1, y: 0, filter: 'blur(0px)',
              duration: 0.6,
              stagger: 0.04,
              ease: 'power2.out',
              delay: 1,
            }
          );
        }
      }

      // Pills — pop in with scale bounce
      gsap.fromTo('.hero-pill',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(2)', delay: 1.2 }
      );

      document.querySelectorAll('.radial-center-stat-number').forEach((el) => {
        const target = parseFloat(el.getAttribute('data-value') || '0');
        const suffix = el.getAttribute('data-suffix') || '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.radial-center-content',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            (el as HTMLElement).textContent = (target % 1 === 0 ? Math.round(obj.val) : obj.val.toFixed(1)) + suffix;
          },
        });
      });
    }, heroRef);

    return () => {
      splits.forEach((s) => s.revert());
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={heroRef}>
      {/* Main Hero */}
      <section className="hero-section">
        <div className="hero-center">
          <h1 className="hero-title">
            <span className="hero-title-line">
              <span className="hero-title-word-wrap"><span className="hero-title-word" data-text="Digital Growth">Digital Growth</span></span>
              <span className="hero-title-accent-icon">
                <svg viewBox="0 0 100 100" fill="none">
                  <g transform="translate(50,50)">
                    <rect x="-10" y="-48" width="20" height="96" rx="2" fill="var(--blue-accent)"/>
                    <rect x="-10" y="-48" width="20" height="96" rx="2" fill="var(--blue-accent)" transform="rotate(55)"/>
                    <rect x="-10" y="-48" width="20" height="96" rx="2" fill="var(--blue-accent)" transform="rotate(-55)"/>
                  </g>
                </svg>
              </span>
            </span>
            <span className="hero-title-line">
              <span className="hero-title-word-wrap"><span className="hero-title-word" data-text="Built to Scale">Built to Scale</span></span>
            </span>
          </h1>

          <p className="hero-subtitle">
            Platform packed with{' '}
            <span className="hero-pill">Marketing</span> &amp;{' '}
            <span className="hero-pill">Development</span> resources,{' '}
            <span className="hero-pill">AI tools</span> ,{' '}
            <span className="hero-pill">automation</span>{' '}
            and a full-service{' '}
            <span className="hero-pill">consultancy</span>
          </p>
        </div>

        {/* Radial Semicircle — cards on a spinning circle, only top arc visible */}
        <div className="radial-wrap">
          {/* White gradient fade on top */}
          <div className="radial-fade" />
          <div className="radial-outer">
            <div className="radial-circle">
              <div className="radial-spinner">
                {showcaseCards.map((card, i) => {
                  const angle = i * ANGLE_STEP;
                  return (
                    <div
                      key={i}
                      className="radial-item"
                      style={{
                        transform: `rotate(${angle}deg) translateY(var(--radial-radius))`,
                      }}
                    >
                      <div className="radial-card">
                        <div className="radial-card__inner">
                          <div className="radial-card__img">
                            <img src={card.image} alt={card.title} />
                          </div>
                          <p className="radial-card__label">{card.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Center content overlaying bottom */}
        <div className="radial-center-content">
          <span className="radial-center-badge">Digital Marketing</span>
          <h2 className="radial-center-title">Grow Your Business with Data-Driven Digital Marketing</h2>
          <div className="radial-center-stats">
            <div className="radial-center-stat">
              <span className="radial-center-stat-number" data-value="453" data-suffix="+">0</span>
              <span className="radial-center-stat-label">Projects Delivered</span>
            </div>
            <div className="radial-center-stat">
              <span className="radial-center-stat-number" data-value="9.6" data-suffix="">0</span>
              <span className="radial-center-stat-label">Client Satisfaction</span>
            </div>
            <div className="radial-center-stat">
              <span className="radial-center-stat-number" data-value="453" data-suffix="+">0</span>
              <span className="radial-center-stat-label">Active Clients</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
