import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Strategies.css';

gsap.registerPlugin(ScrollTrigger);

const Strategies = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left side — badge, title, desc stagger
      gsap.fromTo('.strategies__badge',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.strategies__badge', start: 'top 85%' } }
      );

      gsap.fromTo('.strategies__title',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1,
          scrollTrigger: { trigger: '.strategies__title', start: 'top 82%' } }
      );

      gsap.fromTo('.strategies__desc',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.2,
          scrollTrigger: { trigger: '.strategies__desc', start: 'top 85%' } }
      );

      // Features slide in from left
      gsap.fromTo('.strategies__feature',
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.strategies__features', start: 'top 82%' } }
      );

      // Right — image parallax with clip reveal
      gsap.fromTo('.strategies__image',
        { clipPath: 'inset(0 0 100% 0)', scale: 1.2 },
        { clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 1.2, ease: 'power4.inOut',
          scrollTrigger: { trigger: '.strategies__right', start: 'top 75%' } }
      );

      // Image parallax on scroll
      gsap.to('.strategies__image', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.strategies__right',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Stats — pop in with counter
      const statEls = gsap.utils.toArray<HTMLElement>('.strategies__stat');
      statEls.forEach((el, i) => {
        gsap.fromTo(el,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, delay: 0.8 + i * 0.1, ease: 'back.out(2)',
            scrollTrigger: { trigger: '.strategies__stats', start: 'top 80%' } }
        );

        const numEl = el.querySelector('.strategies__stat-number') as HTMLElement;
        if (numEl) {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: 453,
            duration: 2,
            ease: 'power2.out',
            delay: 0.8 + i * 0.1,
            scrollTrigger: { trigger: '.strategies__stats', start: 'top 80%' },
            onUpdate: () => { numEl.textContent = Math.round(obj.val) + '+'; },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="strategies" ref={sectionRef}>
      <div className="strategies__content">
        <div className="strategies__left">
          <span className="strategies__badge">Services</span>
          <h2 className="strategies__title">
            Tailored Strategies for Maximum Business Growth
          </h2>
          <p className="strategies__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <div className="strategies__features">
            <div className="strategies__feature">
              <div className="strategies__feature-icon">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6L10 2L18 6L10 10L2 6Z" stroke="#144530" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M5 7.5V13C5 13 7.5 15.5 10 15.5C12.5 15.5 15 13 15 13V7.5" stroke="#144530" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="strategies__feature-title">Driven Strategies</div>
                <div className="strategies__feature-desc">
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit ,
                </div>
              </div>
            </div>
            <div className="strategies__feature">
              <div className="strategies__feature-icon">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 15L8 9L12 13L18 5" stroke="#144530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 5H18V9" stroke="#144530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="strategies__feature-title">Digital Solution</div>
                <div className="strategies__feature-desc">
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit ,
                </div>
              </div>
            </div>
          </div>
          <p className="strategies__bottom-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="strategies__right">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=446&fit=crop"
            alt="Team Strategy Session"
            className="strategies__image"
          />
          <div className="strategies__stats">
            <div className="strategies__stat">
              <div className="strategies__stat-number">0</div>
              <div className="strategies__stat-label">Creating impactful</div>
            </div>
            <div className="strategies__stat">
              <div className="strategies__stat-number">0</div>
              <div className="strategies__stat-label">Creating impactful</div>
            </div>
            <div className="strategies__stat">
              <div className="strategies__stat-number">0</div>
              <div className="strategies__stat-label">Creating impactful</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
