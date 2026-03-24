import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/Expertise.css';

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const splits: SplitType[] = [];
    const ctx = gsap.context(() => {
      // Title — character reveal
      const titleEl = sectionRef.current!.querySelector('.expertise__title') as HTMLElement;
      if (titleEl) {
        const split = new SplitType(titleEl, { types: 'chars' });
        splits.push(split);
        if (split.chars) {
          gsap.fromTo(split.chars,
            { opacity: 0, y: 20, filter: 'blur(6px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, stagger: 0.02, ease: 'power2.out',
              scrollTrigger: { trigger: titleEl, start: 'top 80%' } }
          );
        }
      }

      // Description
      gsap.fromTo('.expertise__desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.3,
          scrollTrigger: { trigger: '.expertise__desc', start: 'top 85%' } }
      );

      // Cards — slide from right + stagger
      gsap.fromTo('.expertise__card',
        { x: 100, opacity: 0, rotateY: -15 },
        { x: 0, opacity: 1, rotateY: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.expertise__cards', start: 'top 75%' } }
      );

      // Card icons pulse
      gsap.fromTo('.expertise__card-icon',
        { scale: 0 },
        { scale: 1, duration: 0.6, stagger: 0.2, ease: 'elastic.out(1, 0.5)', delay: 0.4,
          scrollTrigger: { trigger: '.expertise__cards', start: 'top 75%' } }
      );
    }, sectionRef);

    return () => {
      splits.forEach(s => s.revert());
      ctx.revert();
    };
  }, []);

  return (
    <section className="expertise" ref={sectionRef}>
      <div className="expertise__inner">
        <div className="expertise__left">
          <h2 className="expertise__title">
            Specialized Expertise: Educational & IT Institutes
          </h2>
          <p className="expertise__desc">
            Tailored marketing consultancy for institutions that empower. We offer specialized strategies for educational centers and tech startups.
          </p>
        </div>
        <div className="expertise__cards">
          <div className="expertise__card">
            <div className="expertise__card-icon">
              <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10L14 5L24 10L14 15L4 10Z" stroke="#144530" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M8 12V19C8 19 11 22 14 22C17 22 20 19 20 19V12" stroke="#144530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="24" y1="10" x2="24" y2="18" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="expertise__card-title">Educational Institutes</h3>
            <p className="expertise__card-desc">
              Comprehensive marketing consulting for universities, colleges, and online learning platforms. Includes a FREE initial consultation to boost your enrollment.
            </p>
          </div>
          <div className="expertise__card">
            <div className="expertise__card-icon">
              <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="16" height="14" rx="2" stroke="#144530" strokeWidth="2" fill="none"/>
                <rect x="9" y="7" width="10" height="7" rx="1" stroke="#144530" strokeWidth="1.5" fill="none"/>
                <line x1="14" y1="18" x2="14" y2="22" stroke="#144530" strokeWidth="2"/>
                <line x1="10" y1="22" x2="18" y2="22" stroke="#144530" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="expertise__card-title">IT & Tech Startups</h3>
            <p className="expertise__card-desc">
              Growth strategies for software companies, IT schools, and tech innovators. Accelerate your market presence and lead generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
