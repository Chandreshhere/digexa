import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicesPage.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    title: 'Web & Mobile Development',
    desc: 'High-performance websites and native mobile apps built with React, Next.js, Swift, and Flutter. Every pixel crafted for speed, accessibility, and conversion.',
    features: ['Custom Web Applications', 'Progressive Web Apps', 'iOS & Android Native', 'E-Commerce Platforms'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  },
  {
    num: '02',
    title: 'AI & Automation',
    desc: 'Intelligent systems that learn, adapt, and scale. From custom chatbots to full workflow automation, we integrate AI where it matters most.',
    features: ['AI Chatbots & Assistants', 'Process Automation', 'Predictive Analytics', 'Custom ML Models'],
    image: 'https://images.unsplash.com/photo-1531746790095-e5577f030b71?w=800&h=500&fit=crop',
  },
  {
    num: '03',
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns that cut through the noise. SEO, paid media, content strategy, and social media management — all measurable, all optimized.',
    features: ['SEO & Organic Growth', 'Paid Media & PPC', 'Content Strategy', 'Social Media Management'],
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=500&fit=crop',
  },
  {
    num: '04',
    title: 'Brand Strategy & Design',
    desc: 'Brands that resonate. We craft visual identities, messaging frameworks, and design systems that make your business unforgettable.',
    features: ['Visual Identity', 'Brand Guidelines', 'UI/UX Design', 'Motion & 3D'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop',
  },
  {
    num: '05',
    title: 'Education Consultancy',
    desc: 'Free strategic consultancy for universities, colleges, and learning platforms. Boost enrollment, build your digital presence, and connect with students globally.',
    features: ['Enrollment Optimization', 'Campus Branding', 'Student Portal Development', 'Digital Outreach'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop',
  },
];

const stats = [
  { number: 500, suffix: '+', label: 'Projects Delivered' },
  { number: 98, suffix: '%', label: 'Client Retention' },
  { number: 12, suffix: '+', label: 'Countries Served' },
  { number: 4.9, suffix: '/5', label: 'Avg. Client Rating' },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We deep-dive into your brand, market, audience, and goals. Every great project starts with understanding.' },
  { step: '02', title: 'Strategy', desc: 'A data-backed roadmap tailored to your objectives — timelines, KPIs, deliverables, no guesswork.' },
  { step: '03', title: 'Creation', desc: 'Design, develop, and iterate. Agile sprints, weekly demos, and constant refinement until it\'s right.' },
  { step: '04', title: 'Launch & Grow', desc: 'Go live with confidence. Post-launch optimization, analytics dashboards, and ongoing support.' },
];

const testimonials = [
  { quote: 'BeyondEdge transformed our digital presence. The results speak for themselves — 3x organic traffic in 6 months.', name: 'Sarah Chen', role: 'CEO, Vertex Digital', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=top' },
  { quote: 'Their AI integration saved us 40 hours a week. The ROI was visible within the first quarter.', name: 'Marcus Johnson', role: 'CMO, NovaTech', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=top' },
  { quote: 'The free consultancy for our university was genuinely life-changing. Enrollment up 60% year over year.', name: 'Priya Sharma', role: 'Director, EduGlobal', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=top' },
  { quote: 'From concept to a fully functional SaaS in 12 weeks. BeyondEdge didn\'t just build a product — they built a business.', name: 'David Park', role: 'Founder, UrbanCart', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=top' },
  { quote: 'The rebrand gave us an identity we\'re proud of. Every touchpoint feels cohesive and premium now.', name: 'Aisha Patel', role: 'Head of Marketing, Meridian', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=top' },
  { quote: 'We went from zero online presence to dominating search results in our niche. Incredible team.', name: 'Tom Fischer', role: 'COO, Pulse Labs', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=top' },
];

const faqs = [
  { q: 'What industries do you specialize in?', a: 'We work across education, e-commerce, SaaS, healthcare, fintech, and tech startups. Our strategies are tailored to each industry\'s unique challenges.' },
  { q: 'How long does a typical project take?', a: 'Timelines vary — a marketing campaign launches in 2-4 weeks, while a full website or app build typically takes 8-16 weeks.' },
  { q: 'Do you offer free consultations?', a: 'Yes! Free initial consultation for all prospects, and free ongoing consultancy for educational institutions.' },
  { q: 'What makes Digexa different?', a: 'We combine marketing, development, and AI under one roof. No handoffs between agencies — one team, one vision, measurable results.' },
  { q: 'Can you work with our existing tech stack?', a: 'Absolutely. We integrate with WordPress, Shopify, React, custom backends, and more.' },
  { q: 'Do you provide ongoing support after launch?', a: 'Yes — maintenance plans, performance monitoring, and continuous optimization for long-term success.' },
];

const ServicesPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const splits: SplitType[] = [];
    const ctx = gsap.context(() => {
      // === HERO ===
      const heroTitle = document.querySelector('.sv-hero__title') as HTMLElement;
      if (heroTitle) {
        const split = new SplitType(heroTitle, { types: 'chars' });
        splits.push(split);
        if (split.chars) {
          gsap.set(split.chars, { yPercent: 120, opacity: 0, rotateX: -90 });
          gsap.to(split.chars, { yPercent: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.02, ease: 'back.out(1.7)', delay: 0.3 });
        }
      }

      gsap.fromTo('.sv-hero__subtitle',
        { opacity: 0, y: 20, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out', delay: 0.8 }
      );

      gsap.fromTo('.sv-hero__cta',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(2)', delay: 1.1 }
      );

      // Marquee
      gsap.fromTo('.sv-hero__marquee',
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1.4 }
      );

      // === STATS ===
      gsap.fromTo('.sv-stats__item',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.sv-stats', start: 'top 82%' } }
      );

      document.querySelectorAll('.sv-stats__number').forEach((el, i) => {
        const target = stats[i].number;
        const suffix = stats[i].suffix;
        const isFloat = target % 1 !== 0;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration: 2, ease: 'power2.out',
          scrollTrigger: { trigger: '.sv-stats', start: 'top 82%' },
          onUpdate: () => { (el as HTMLElement).textContent = (isFloat ? obj.val.toFixed(1) : Math.round(obj.val).toString()) + suffix; },
        });
      });

      // === SERVICE CARDS ===
      document.querySelectorAll('.sv-card').forEach((card, i) => {
        const isEven = i % 2 === 0;

        gsap.fromTo(card.querySelector('.sv-card__content')!,
          { x: isEven ? -80 : 80, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 75%' } }
        );

        gsap.fromTo(card.querySelector('.sv-card__media')!,
          { clipPath: isEven ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)', scale: 1.2 },
          { clipPath: 'inset(0 0% 0 0%)', scale: 1, duration: 1.2, ease: 'power4.inOut',
            scrollTrigger: { trigger: card, start: 'top 75%' } }
        );

        // Parallax on image
        gsap.to(card.querySelector('.sv-card__img')!, {
          yPercent: -15, ease: 'none',
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1 },
        });

        // Features stagger
        gsap.fromTo(card.querySelectorAll('.sv-card__feature'),
          { x: isEven ? -20 : 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out', delay: 0.4,
            scrollTrigger: { trigger: card, start: 'top 75%' } }
        );
      });

      // === PROCESS ===
      const processTitle = document.querySelector('.sv-process__title') as HTMLElement;
      if (processTitle) {
        const split = new SplitType(processTitle, { types: 'words' });
        splits.push(split);
        if (split.words) {
          gsap.fromTo(split.words,
            { opacity: 0, y: 20, filter: 'blur(4px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, stagger: 0.04, ease: 'power2.out',
              scrollTrigger: { trigger: processTitle, start: 'top 82%' } }
          );
        }
      }

      document.querySelectorAll('.sv-process__step').forEach((step, i) => {
        gsap.fromTo(step,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: i * 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: '.sv-process__steps', start: 'top 78%' } }
        );

        // Line grow
        const line = step.querySelector('.sv-process__line') as HTMLElement;
        if (line) {
          gsap.fromTo(line,
            { scaleY: 0 },
            { scaleY: 1, duration: 0.8, delay: i * 0.12 + 0.3, ease: 'power2.out', transformOrigin: 'top',
              scrollTrigger: { trigger: '.sv-process__steps', start: 'top 78%' } }
          );
        }
      });

      // === TESTIMONIALS ===
      gsap.fromTo('.sv-testimonial',
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.sv-testimonials__track', start: 'top 80%' } }
      );

      // === FAQ ===
      gsap.fromTo('.sv-faq__item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: '.sv-faq__list', start: 'top 85%' } }
      );

      // === CTA BOTTOM ===
      gsap.fromTo('.sv-cta-bottom',
        { y: 60, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.sv-cta-bottom', start: 'top 85%' } }
      );
    }, pageRef);

    return () => { splits.forEach(s => s.revert()); ctx.revert(); ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const marqueeItems = ['Web Development', 'AI Solutions', 'Digital Marketing', 'Brand Strategy', 'Mobile Apps', 'SEO & Growth', 'UI/UX Design', 'Education Consulting'];

  return (
    <div className="sv-page" ref={pageRef}>
      {/* ===== HERO ===== */}
      <section className="sv-hero">
        <div className="sv-hero__bg">
          <div className="sv-hero__grid-lines">
            {[...Array(6)].map((_, i) => <div key={`v${i}`} className="sv-hero__vline" style={{ left: `${(i + 1) * 16.66}%` }} />)}
            {[...Array(4)].map((_, i) => <div key={`h${i}`} className="sv-hero__hline" style={{ top: `${(i + 1) * 25}%` }} />)}
          </div>
        </div>

        <div className="sv-hero__content">
          <span className="sv-hero__badge">Our Services</span>
          <h1 className="sv-hero__title">Services</h1>
          <p className="sv-hero__subtitle">
            We craft digital experiences that drive growth, built at the intersection of design, technology, and strategy.
          </p>
          <button className="sv-hero__cta" onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}>
            Start a Project <span className="sv-hero__cta-arrow">→</span>
          </button>
        </div>

        <div className="sv-hero__marquee">
          <div className="sv-hero__marquee-track">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="sv-hero__marquee-item">
                {item} <span className="sv-hero__marquee-dot">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="sv-stats">
        <div className="sv-stats__inner">
          {stats.map((stat, i) => (
            <div key={i} className="sv-stats__item">
              <span className="sv-stats__number">0</span>
              <span className="sv-stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICE CARDS ===== */}
      <section className="sv-services">
        <div className="sv-services__inner">
          {services.map((service, i) => (
            <div key={i} className={`sv-card ${i % 2 !== 0 ? 'sv-card--reverse' : ''}`}>
              <div className="sv-card__content">
                <span className="sv-card__num">{service.num}</span>
                <h2 className="sv-card__title">{service.title}</h2>
                <p className="sv-card__desc">{service.desc}</p>
                <div className="sv-card__features">
                  {service.features.map((f, j) => (
                    <span key={j} className="sv-card__feature">{f}</span>
                  ))}
                </div>
              </div>
              <div className="sv-card__media">
                <img src={service.image} alt={service.title} className="sv-card__img" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="sv-process">
        <div className="sv-process__inner">
          <span className="sv-process__badge">How We Work</span>
          <h2 className="sv-process__title">From idea to launch — our proven 4-step process</h2>
          <div className="sv-process__steps">
            {process.map((p, i) => (
              <div key={i} className="sv-process__step">
                {i < process.length - 1 && <div className="sv-process__line" />}
                <div className="sv-process__step-num">{p.step}</div>
                <h3 className="sv-process__step-title">{p.title}</h3>
                <p className="sv-process__step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS — horizontal slider ===== */}
      <section className="sv-testimonials">
        <div className="sv-testimonials__inner">
          <div className="sv-testimonials__header">
            <h2 className="sv-testimonials__title">What our clients say</h2>
            <div className="sv-testimonials__arrows">
              <button className="sv-testimonials__arrow" onClick={() => {
                const track = document.querySelector('.sv-testimonials__track') as HTMLElement;
                if (track) track.scrollBy({ left: -380, behavior: 'smooth' });
              }} aria-label="Previous">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="sv-testimonials__arrow" onClick={() => {
                const track = document.querySelector('.sv-testimonials__track') as HTMLElement;
                if (track) track.scrollBy({ left: 380, behavior: 'smooth' });
              }} aria-label="Next">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          <div className="sv-testimonials__track">
            {testimonials.map((t, i) => (
              <div key={i} className="sv-testimonial">
                <p className="sv-testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="sv-testimonial__author">
                  <img src={t.image} alt={t.name} className="sv-testimonial__img" />
                  <div>
                    <span className="sv-testimonial__name">{t.name}</span>
                    <span className="sv-testimonial__role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="sv-faq">
        <div className="sv-faq__inner">
          <div className="sv-faq__header">
            <h2 className="sv-faq__title">Frequently Asked<br />Questions</h2>
          </div>
          <div className="sv-faq__list">
            {faqs.map((faq, i) => (
              <div key={i} className={`sv-faq__item${openFaq === i ? ' sv-faq__item--open' : ''}`}>
                <button className="sv-faq__question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="sv-faq__icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className="sv-faq__answer"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BOTTOM ===== */}
      <section className="sv-cta-bottom">
        <div className="sv-cta-bottom__inner">
          <h2 className="sv-cta-bottom__title">Ready to grow?</h2>
          <p className="sv-cta-bottom__desc">Let's build something extraordinary together.</p>
          <button className="sv-cta-bottom__btn" onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}>
            Get in Touch <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
