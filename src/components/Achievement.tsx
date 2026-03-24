import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Achievement.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 472, suffix: '+', title: 'Projects Completed', desc: 'Delivering web, AI, and marketing solutions worldwide' },
  { number: 472, suffix: '+', title: 'Strong Client Relationships', desc: 'Trusted partnerships built on transparency and results' },
  { number: 472, suffix: '+', title: 'Expertise Across Multiple Channels', desc: 'From brand strategy to education consultancy at scale' },
  { number: 472, suffix: '+', title: 'Strong Client Relationships', desc: 'Long-term collaborations spanning 12 countries globally' },
];

const Achievement = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Badge
      gsap.fromTo('.achievement__badge',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.achievement__badge', start: 'top 85%' } }
      );

      // Title — clip reveal
      gsap.fromTo('.achievement__title',
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1, ease: 'power4.inOut',
          scrollTrigger: { trigger: '.achievement__title', start: 'top 82%' } }
      );

      // Desc
      gsap.fromTo('.achievement__desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.3,
          scrollTrigger: { trigger: '.achievement__desc', start: 'top 85%' } }
      );

      // Stat cards — staggered with counter animation
      const statEls = gsap.utils.toArray<HTMLElement>('.achievement__stat');
      statEls.forEach((el, i) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, delay: i * 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: '.achievement__stats', start: 'top 80%' } }
        );

        // Counter animation
        const numEl = el.querySelector('.achievement__stat-number') as HTMLElement;
        if (numEl) {
          const target = stats[i].number;
          const suffix = stats[i].suffix;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            delay: i * 0.12,
            scrollTrigger: { trigger: '.achievement__stats', start: 'top 80%' },
            onUpdate: () => { numEl.textContent = Math.round(obj.val) + suffix; },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="achievement" ref={sectionRef}>
      <div className="achievement__inner">
        <span className="achievement__badge">Achievement</span>
        <h2 className="achievement__title">Proven Success in Driving Business Growth</h2>
        <p className="achievement__desc">
          With over 500 projects completed across 12 countries, BeyondEdge has a proven track record of delivering measurable growth through digital innovation and strategy
        </p>
        <div className="achievement__carousel-wrapper">
          <button className="achievement__carousel-btn achievement__carousel-btn--left" onClick={() => scroll('left')} aria-label="Previous">&#8249;</button>
          <div className="achievement__stats" ref={scrollRef}>
            {stats.map((stat, i) => (
              <div key={i} className="achievement__stat">
                <div className="achievement__stat-number">0</div>
                <div className="achievement__stat-title">{stat.title}</div>
                <div className="achievement__stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
          <button className="achievement__carousel-btn achievement__carousel-btn--right" onClick={() => scroll('right')} aria-label="Next">&#8250;</button>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
