import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Team.css';

const teamMembers = [
  { name: 'Sarah Mitchell', role: 'Head of Marketing Strategy', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=260&fit=crop&crop=top' },
  { name: 'James Carter', role: 'Lead Software Engineer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=260&fit=crop&crop=top' },
  { name: 'Priya Sharma', role: 'AI Solutions Architect', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=260&fit=crop&crop=top' },
  { name: 'David Kim', role: 'SEO & Growth Lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=260&fit=crop&crop=top' },
];

interface TeamProps {
  onReadMore: () => void;
}

const Team = ({ onReadMore }: TeamProps) => {
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
    <section className="team" ref={revealRef}>
      <div className="team__inner">
        <div className="team__header reveal">
          <div className="team__header-left">
            <span className="team__badge">Our Team</span>
            <h2 className="team__title">Experts Driving Your Digital Success</h2>
          </div>
          <div className="team__header-right">
            <p className="team__desc">
              A passionate, multidisciplinary team of strategists, developers, and creatives dedicated to helping your business thrive in the digital landscape.
            </p>
            <button className="team__read-more" onClick={onReadMore}>Read More</button>
          </div>
        </div>
        <div className="team__carousel-wrapper reveal reveal-delay-1">
          <button className="team__carousel-btn team__carousel-btn--left" onClick={() => scroll('left')} aria-label="Previous">&#8249;</button>
          <div className="team__grid" ref={scrollRef}>
            {teamMembers.map((member, i) => (
              <div key={i} className="team__card">
                <img
                  src={member.img}
                  alt={member.name}
                  className="team__card-image"
                />
                <div className="team__card-socials">
                  <a href="#" className="team__card-social" aria-label="LinkedIn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" fill="white"/></svg>
                  </a>
                  <a href="#" className="team__card-social" aria-label="Twitter">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="white"/></svg>
                  </a>
                  <a href="#" className="team__card-social" aria-label="Email">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="2"/><path d="M2 7l10 7 10-7" stroke="white" strokeWidth="2"/></svg>
                  </a>
                </div>
                <div className="team__card-name">{member.name}</div>
                <div className="team__card-role">{member.role}</div>
              </div>
            ))}
          </div>
          <button className="team__carousel-btn team__carousel-btn--right" onClick={() => scroll('right')} aria-label="Next">&#8250;</button>
        </div>
      </div>
    </section>
  );
};

export default Team;
