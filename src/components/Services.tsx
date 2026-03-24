import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/Services.css';

gsap.registerPlugin(ScrollTrigger);

interface ServicesProps {
  onLearnMore?: (type: 'webdev' | 'ai') => void;
}

const Services = ({ onLearnMore }: ServicesProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title — word split reveal
      const titleEl = sectionRef.current!.querySelector('.services__title') as HTMLElement;
      if (titleEl) {
        const split = new SplitType(titleEl, { types: 'words' });
        if (split.words) {
          gsap.fromTo(split.words,
            { yPercent: 80, opacity: 0, filter: 'blur(4px)' },
            { yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, stagger: 0.04, ease: 'power3.out',
              scrollTrigger: { trigger: titleEl, start: 'top 82%' } }
          );
        }
      }

      // Cards — 3D tilt reveal
      gsap.fromTo('.services__card',
        { y: 100, opacity: 0, rotateX: 15, transformOrigin: 'bottom center' },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.25, ease: 'power3.out',
          scrollTrigger: { trigger: '.services__grid', start: 'top 80%' } }
      );

      // Card icons — spin in
      gsap.fromTo('.services__card-icon',
        { scale: 0, rotate: -180 },
        { scale: 1, rotate: 0, duration: 0.8, stagger: 0.25, ease: 'back.out(1.7)', delay: 0.3,
          scrollTrigger: { trigger: '.services__grid', start: 'top 80%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services" ref={sectionRef}>
      <h2 className="services__title">Beyond Marketing: Development & AI Services</h2>
      <div className="services__grid">
        <div className="services__card">
          <div className="services__card-icon">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="10" width="26" height="48" rx="3" stroke="#144530" strokeWidth="2.5" fill="none"/>
              <circle cx="18" cy="19" r="3.5" stroke="#144530" strokeWidth="1.5" fill="none"/>
              <rect x="10" y="29" width="16" height="4" rx="1" stroke="#144530" strokeWidth="1.5" fill="none"/>
              <line x1="10" y1="40" x2="26" y2="40" stroke="#144530" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="10" y1="44" x2="26" y2="44" stroke="#144530" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="10" y1="48" x2="26" y2="48" stroke="#144530" strokeWidth="1.5" strokeLinecap="round"/>
              <rect x="38" y="10" width="37" height="28" rx="2" stroke="#144530" strokeWidth="2.5" fill="none"/>
              <line x1="38" y1="16" x2="75" y2="16" stroke="#144530" strokeWidth="1" opacity="0.4"/>
              <line x1="44" y1="21" x2="62" y2="21" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              <line x1="44" y1="26" x2="54" y2="26" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              <line x1="44" y1="31" x2="68" y2="31" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              <line x1="56.5" y1="38" x2="56.5" y2="48" stroke="#144530" strokeWidth="2.5"/>
              <line x1="47" y1="48" x2="66" y2="48" stroke="#144530" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="services__card-title">Web & Mobile Development</h3>
          <p className="services__card-desc">
            High-performance, SEO-optimized websites and custom mobile apps designed for seamless user experiences and maximum conversion rates.
          </p>
          <button className="services__card-btn" onClick={() => onLearnMore?.('webdev')}>Learn More</button>
        </div>

        <div className="services__card">
          <div className="services__card-icon">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 66 L30 54 C26 48 22 40 22 30 C22 14 32 6 44 6 C56 6 62 16 58 26 L56 30 L62 36 L56 40 C54 48 50 54 48 56 L48 66 Z"
                stroke="#144530" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="40" cy="24" r="7" stroke="#144530" strokeWidth="2" fill="none"/>
              <line x1="40" y1="15" x2="40" y2="17" stroke="#144530" strokeWidth="3" strokeLinecap="round"/>
              <line x1="40" y1="31" x2="40" y2="33" stroke="#144530" strokeWidth="3" strokeLinecap="round"/>
              <line x1="31" y1="24" x2="33" y2="24" stroke="#144530" strokeWidth="3" strokeLinecap="round"/>
              <line x1="47" y1="24" x2="49" y2="24" stroke="#144530" strokeWidth="3" strokeLinecap="round"/>
              <line x1="34.1" y1="18.1" x2="35.5" y2="19.5" stroke="#144530" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="44.5" y1="28.5" x2="45.9" y2="29.9" stroke="#144530" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="44.5" y1="19.5" x2="45.9" y2="18.1" stroke="#144530" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="34.1" y1="29.9" x2="35.5" y2="28.5" stroke="#144530" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="40" cy="24" r="2.5" fill="#144530"/>
              <circle cx="54" cy="16" r="2.5" fill="#144530"/>
              <line x1="47" y1="20" x2="52" y2="17" stroke="#144530" strokeWidth="1.5"/>
              <circle cx="34" cy="38" r="2" fill="#144530"/>
              <line x1="36" y1="30" x2="34.5" y2="36" stroke="#144530" strokeWidth="1.5"/>
            </svg>
          </div>
          <h3 className="services__card-title">AI & Automation Solutions</h3>
          <p className="services__card-desc">
            Future-proof your operations with custom AI integration. From smart chatbots to automated workflows, we make technology work for your growth.
          </p>
          <button className="services__card-btn" onClick={() => onLearnMore?.('ai')}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
