import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/About.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Customized Strategies',
    desc: 'Every business is unique. We craft data-driven strategies tailored to your specific goals, audience, and market position.',
  },
  {
    number: '02',
    title: 'Experienced Team',
    desc: 'Our team of 40+ specialists brings expertise across marketing, development, AI, and design — all under one roof.',
  },
  {
    number: '03',
    title: 'Client-Centric Approach',
    desc: 'We treat every project as a partnership. Transparent communication, weekly updates, and measurable results you can track.',
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Badge slide in
      gsap.fromTo('.about__badge',
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.about__badge', start: 'top 85%' } }
      );

      // Title — split chars, reveal with stagger
      const titleEl = sectionRef.current!.querySelector('.about__title') as HTMLElement;
      if (titleEl) {
        const split = new SplitType(titleEl, { types: 'words' });
        if (split.words) {
          gsap.fromTo(split.words,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power3.out',
              scrollTrigger: { trigger: titleEl, start: 'top 80%' } }
          );
        }
      }

      // Description text fade in
      gsap.fromTo('.about__top-desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: '.about__top-desc', start: 'top 85%' } }
      );

      // Image — parallax + clip reveal
      gsap.fromTo('.about__image',
        { clipPath: 'inset(100% 0 0 0)' },
        { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.inOut',
          scrollTrigger: { trigger: '.about__image', start: 'top 80%' } }
      );

      gsap.fromTo('.about__image img',
        { scale: 1.3 },
        { scale: 1, duration: 1.4, ease: 'power2.out',
          scrollTrigger: { trigger: '.about__image', start: 'top 80%' } }
      );

      // Steps — staggered slide up with number counter
      gsap.fromTo('.about__step',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.about__steps', start: 'top 80%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <span className="about__badge">About Us</span>
      <div className="about__top">
        <div className="about__top-left">
          <h2 className="about__title">
            Maximize Your Growth with Our Digital Marketing
          </h2>
        </div>
        <div className="about__top-right">
          <p className="about__top-desc">
            We combine marketing, development, and AI under one roof to deliver end-to-end digital solutions. From strategy to execution, we help brands grow faster with measurable, data-driven results across 12+ countries.
          </p>
        </div>
      </div>

      <div className="about__content">
        <div className="about__image">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=580&h=500&fit=crop"
            alt="Team analyzing data"
          />
        </div>
        <div className="about__steps">
          {steps.map((step, i) => (
            <div key={i} className="about__step">
              <div className="about__step-number">{step.number}</div>
              <div className="about__step-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
