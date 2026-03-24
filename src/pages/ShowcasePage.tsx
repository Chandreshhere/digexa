import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/PageStyles.css';

gsap.registerPlugin(ScrollTrigger);

const featuredProject = {
  name: 'Vertex Digital Agency',
  category: 'FULL-SERVICE',
  services: '12 SERVICES USED',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop',
};

const projects = [
  { title: 'E-Commerce Growth Strategy', category: 'DIGITAL MARKETING', award: 'SOTD', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=450&fit=crop' },
  { title: 'University Enrollment Platform', category: 'WEB DEVELOPMENT', award: '', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&h=450&fit=crop' },
  { title: 'AI-Powered Customer Support', category: 'AI & AUTOMATION', award: 'SOTM', image: 'https://images.unsplash.com/photo-1531746790095-e5577f030b71?w=700&h=450&fit=crop' },
  { title: 'SaaS Product Launch', category: 'FULL-SERVICE', award: '', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=450&fit=crop' },
  { title: 'Brand Identity Overhaul', category: 'BRAND STRATEGY', award: 'SOTD', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&h=450&fit=crop' },
  { title: 'Mobile Banking App', category: 'MOBILE DEV', award: '', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&h=450&fit=crop' },
  { title: 'Marketing Campaign Engine', category: 'MARKETING', award: '', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=700&h=450&fit=crop' },
  { title: 'Data Analytics Dashboard', category: 'AI & AUTOMATION', award: 'SOTD', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=700&h=450&fit=crop' },
  { title: 'Startup Growth Engine', category: 'CONSULTANCY', award: '', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&h=450&fit=crop' },
];

const ShowcasePage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const splits: SplitType[] = [];
    const ctx = gsap.context(() => {
      // Hero title
      const heroTitle = document.querySelector('.sc-hero-title') as HTMLElement;
      if (heroTitle) {
        const split = new SplitType(heroTitle, { types: 'chars' });
        splits.push(split);
        if (split.chars) {
          gsap.set(split.chars, { yPercent: 120, opacity: 0 });
          gsap.to(split.chars, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.02, ease: 'power3.out', delay: 0.3 });
        }
      }

      // Featured card
      gsap.fromTo('.sc-featured-card', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.sc-featured', start: 'top 80%' },
      });

      // Grid cards stagger
      gsap.fromTo('.sc-grid-card', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.sc-grid', start: 'top 80%' },
      });

      // Text heading
      const textH = document.querySelector('.sc-text-heading') as HTMLElement;
      if (textH) {
        const split = new SplitType(textH, { types: 'words' });
        splits.push(split);
        if (split.words) {
          gsap.fromTo(split.words, { opacity: 0, y: 15 }, {
            opacity: 1, y: 0, duration: 0.5, stagger: 0.04, ease: 'power2.out',
            scrollTrigger: { trigger: textH, start: 'top 80%' },
          });
        }
      }
    }, pageRef);

    return () => { splits.forEach(s => s.revert()); ctx.revert(); ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <div className="page sc-page" ref={pageRef}>
      {/* ===== HERO (light) — geometric bg lines ===== */}
      <section className="sc-hero">
        <div className="sc-hero-bg">
          <div className="sc-hero-bg__circle">
            <svg viewBox="0 0 600 600" fill="none"><circle cx="300" cy="300" r="250" stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray="4 4" /></svg>
          </div>
          <div className="sc-hero-bg__hline" />
          <div className="sc-hero-bg__vline" />
        </div>
        <h1 className="sc-hero-title">Showcase</h1>
      </section>

      {/* ===== FEATURED PROJECT ===== */}
      <section className="sc-featured">
        <div className="sc-featured-tags">
          <span className="sc-tag">Work we love this week</span>
          <span className="sc-tag sc-tag--drag">Drag</span>
        </div>
        <div className="sc-featured-card">
          <div className="sc-featured-card__media">
            <img src={featuredProject.image} alt={featuredProject.name} />
          </div>
          <div className="sc-featured-card__bottom">
            <h3 className="sc-featured-card__name">{featuredProject.name}</h3>
            <div className="sc-featured-card__meta">
              <span className="sc-tag sc-tag--purple">{featuredProject.category}</span>
              <span className="sc-tag">{featuredProject.services}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEXT SECTION ===== */}
      <section className="sc-text">
        <h2 className="sc-text-heading">Check out the incredible work our clients have built with BeyondEdge services</h2>
        <button className="sc-text-btn">Submit your project →</button>
      </section>

      {/* ===== PROJECT GRID ===== */}
      <section className="sc-grid-section">
        <div className="sc-grid">
          {projects.map((p, i) => (
            <div key={i} className="sc-grid-card">
              <div className="sc-grid-card__media">
                <img src={p.image} alt={p.title} />
                {p.award && (
                  <span className={`sc-grid-card__award ${p.award === 'SOTM' ? 'sc-grid-card__award--purple' : ''}`}>{p.award}</span>
                )}
              </div>
              <div className="sc-grid-card__info">
                <span className="sc-grid-card__category">{p.category}</span>
                <h3 className="sc-grid-card__title">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MEETUPS SECTION (light) — OSMO style ===== */}
      <section className="sc-meetup">
        <div className="sc-meetup-inner">
          <h2 className="sc-meetup-title">Meetups</h2>
          <div className="sc-meetup-scribble">
            <span className="sc-meetup-scribble__text">Touch some grass</span>
            <svg className="sc-meetup-scribble__arrow" viewBox="0 0 80 60" fill="none">
              <path d="M5 55 C20 50, 40 40, 55 25 C62 18, 68 10, 72 5" stroke="#f84131" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M65 2 L73 5 L68 12" stroke="#f84131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          <div className="sc-meetup-avatars">
            <div className="sc-meetup-avatar">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=top" alt="Team member" />
            </div>
            <div className="sc-meetup-avatar">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=top" alt="Team member" />
            </div>
          </div>

          <div className="sc-meetup-line" />

          <div className="sc-meetup-content">
            <div className="sc-meetup-left">
              <h3 className="sc-meetup-left__title">We're not just an online community...</h3>
              <p className="sc-meetup-left__text">
                Sometimes we take things offline, meeting up at conferences, events, or spontaneous hangouts around the world. Before any trip, we usually drop a message in Slack to see who else will be there.
              </p>

              <div className="sc-meetup-event">
                <div className="sc-meetup-event__tags">
                  <span className="sc-meetup-tag sc-meetup-tag--green">UPCOMING</span>
                  <span className="sc-meetup-tag">EVENT</span>
                </div>
                <h4 className="sc-meetup-event__title">To Be Announced</h4>
                <p className="sc-meetup-event__sub">We're not sure yet!</p>
              </div>

              <div className="sc-meetup-event-line" />

              <div className="sc-meetup-event sc-meetup-event--past">
                <div className="sc-meetup-event__tags">
                  <span className="sc-meetup-tag">PAST EVENT</span>
                  <span className="sc-meetup-tag">2025</span>
                </div>
                <h4 className="sc-meetup-event__title sc-meetup-event__title--past">New York City, USA</h4>
                <p className="sc-meetup-event__sub sc-meetup-event__sub--past">Wednesday 17 September, 2025</p>
              </div>

              <div className="sc-meetup-event-line" />

              <div className="sc-meetup-event sc-meetup-event--past">
                <div className="sc-meetup-event__tags">
                  <span className="sc-meetup-tag">PAST EVENT</span>
                  <span className="sc-meetup-tag">2025</span>
                </div>
                <h4 className="sc-meetup-event__title sc-meetup-event__title--past">Manchester, UK</h4>
                <p className="sc-meetup-event__sub sc-meetup-event__sub--past">Friday 8 August, 2025</p>
              </div>
            </div>

            <div className="sc-meetup-photos">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop" alt="Meetup 1" className="sc-meetup-photo sc-meetup-photo--1" />
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=700&fit=crop" alt="Meetup 2" className="sc-meetup-photo sc-meetup-photo--2" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop" alt="Meetup 3" className="sc-meetup-photo sc-meetup-photo--3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowcasePage;
