import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Team.css';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: 'John Bae', role: 'SEO& Organic Growth' },
  { name: 'John Bae', role: 'SEO& Organic Growth' },
  { name: 'John Bae', role: 'SEO& Organic Growth' },
  { name: 'John Bae', role: 'SEO& Organic Growth' },
];

interface TeamProps {
  onReadMore?: () => void;
}

const Team = ({ onReadMore }: TeamProps) => {
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
      // Header — badge + title
      gsap.fromTo('.team__badge',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.team__header', start: 'top 85%' } }
      );

      gsap.fromTo('.team__title',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1,
          scrollTrigger: { trigger: '.team__header', start: 'top 85%' } }
      );

      gsap.fromTo('.team__header-right',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.2,
          scrollTrigger: { trigger: '.team__header', start: 'top 85%' } }
      );

      // Team cards — staggered rise with image clip reveal
      const cards = gsap.utils.toArray<HTMLElement>('.team__card');
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: i * 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: '.team__grid', start: 'top 78%' } }
        );

        const img = card.querySelector('.team__card-image') as HTMLElement;
        if (img) {
          gsap.fromTo(img,
            { scale: 1.2 },
            { scale: 1, duration: 1.2, delay: i * 0.12, ease: 'power2.out',
              scrollTrigger: { trigger: '.team__grid', start: 'top 78%' } }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="team" ref={sectionRef}>
      <div className="team__inner">
        <div className="team__header">
          <div className="team__header-left">
            <span className="team__badge">Our Team</span>
            <h2 className="team__title">Experts Driving Your Digital Success</h2>
          </div>
          <div className="team__header-right">
            <p className="team__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <button className="team__read-more" onClick={onReadMore}>Read More</button>
          </div>
        </div>
        <div className="team__carousel-wrapper">
          <button className="team__carousel-btn team__carousel-btn--left" onClick={() => scroll('left')} aria-label="Previous">&#8249;</button>
          <div className="team__grid" ref={scrollRef}>
            {teamMembers.map((member, i) => (
              <div key={i} className="team__card">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=260&fit=crop&crop=top"
                  alt={member.name}
                  className="team__card-image"
                />
                <div className="team__card-socials">
                  <div className="team__card-social"></div>
                  <div className="team__card-social"></div>
                  <div className="team__card-social"></div>
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
