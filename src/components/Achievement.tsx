import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Achievement.css';

const stats = [
  { number: '500+', title: 'Projects Completed', desc: 'Successfully delivered digital solutions across marketing, development, and AI verticals.' },
  { number: '150+', title: 'Strong Client Relationships', desc: 'Long-term partnerships built on trust, transparency, and consistent results.' },
  { number: '12+', title: 'Industries Served', desc: 'From education and tech to e-commerce and healthcare, our expertise spans sectors.' },
  { number: '98%', title: 'Client Satisfaction Rate', desc: 'Our commitment to excellence is reflected in the feedback from every project.' },
];

const Achievement = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const revealRef = useScrollReveal();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="achievement" ref={revealRef}>
      <div className="achievement__inner">
        <span className="achievement__badge reveal">Achievement</span>
        <h2 className="achievement__title reveal reveal-delay-1">Proven Success in Driving Business Growth</h2>
        <p className="achievement__desc reveal reveal-delay-2">
          Numbers that reflect our dedication to delivering impactful digital strategies and measurable results for every client we serve.
        </p>
        <div className="achievement__carousel-wrapper reveal reveal-delay-2">
          <button className="achievement__carousel-btn achievement__carousel-btn--left" onClick={() => scroll('left')} aria-label="Previous">&#8249;</button>
          <div className="achievement__stats" ref={scrollRef}>
            {stats.map((stat, i) => (
              <div key={i} className="achievement__stat">
                <div className="achievement__stat-number">{stat.number}</div>
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
