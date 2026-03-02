import { useRef } from 'react';
import '../styles/Achievement.css';

const stats = [
  { number: '472+', title: 'Projects Completed', desc: 'Lorem ipsum dolor sit amet , consectetur adipiscing' },
  { number: '472+', title: 'Strong Client Relationships', desc: 'Lorem ipsum dolor sit amet , consectetur adipiscing' },
  { number: '472+', title: 'Expertise Across Multiple Channels', desc: 'Lorem ipsum dolor sit amet , consectetur adipiscing' },
  { number: '472+', title: 'Strong Client Relationships', desc: 'Lorem ipsum dolor sit amet , consectetur adipiscing' },
];

const Achievement = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section className="achievement">
      <div className="achievement__inner">
        <span className="achievement__badge">Achievement</span>
        <h2 className="achievement__title">Proven Success in Driving Business Growth</h2>
        <p className="achievement__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam
        </p>
        <div className="achievement__carousel-wrapper">
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
