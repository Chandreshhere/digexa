import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import ParallaxImage from '../components/ParallaxImage';
import '../styles/Pages.css';

gsap.registerPlugin(ScrollTrigger);

const gridItems = [
  { num: '01', title: 'Build faster and better', desc: 'Our strategies save you months of guesswork. Each one is crafted for real-world impact, so you can focus on shipping work that stands out.' },
  { num: '02', title: 'Speed without compromise', desc: 'These aren\'t stripped-down templates. Every solution is built to be fast, flexible, and production-ready, so you can ship beautiful work without trading quality for time.' },
  { num: '03', title: 'Clear documentation', desc: 'We don\'t sell magic tricks. Every service shows the real setup. Clean, documented, and ready to use. You\'ll see exactly how it works, apart, rebuild it, or drop it straight into your project.' },
  { num: '04', title: 'A living and growing system', desc: 'We keep adding new resources, ideas, and techniques every week. The vault evolves with you, so your toolkit never stops expanding.' },
];

const services = [
  { number: '01', title: 'Digital Marketing Strategy', items: ['Market Research', 'SEO Optimization', 'Paid Ad Campaigns', 'Social Media Management', 'Analytics & Reporting'] },
  { number: '02', title: 'Web & Mobile Development', items: ['Custom Websites', 'Mobile Apps', 'E-commerce Platforms', 'Performance Optimization', 'Maintenance & Support'] },
  { number: '03', title: 'AI & Automation', items: ['Custom Chatbots', 'Workflow Automation', 'Data Analytics', 'AI-Powered Marketing', 'Platform Integration'] },
  { number: '04', title: 'Brand Strategy', items: ['Market Positioning', 'Visual Identity', 'Messaging Framework', 'Audience Analysis', 'Growth Planning'] },
  { number: '05', title: 'Education & Startup Consultancy', items: ['Enrollment Marketing', 'Digital Transformation', 'Lead Generation', 'Free Consultations', 'Growth Acceleration'] },
];

const caseStudies = [
  { tag: 'NEW PROJECT', title: 'E-Commerce Growth Strategy', category: 'DIGITAL MARKETING', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop' },
  { tag: 'CASE STUDY', title: 'University Enrollment Platform', category: 'WEB DEVELOPMENT', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=350&fit=crop' },
  { tag: 'FEATURED', title: 'AI-Powered Customer Support', category: 'AI & AUTOMATION', image: 'https://images.unsplash.com/photo-1531746790095-e5577f030b71?w=500&h=350&fit=crop' },
];

const productCards = [
  { name: 'Marketing', desc: 'Full-funnel strategies that drive traffic, leads, and revenue.', color: '#A8FA00', textColor: '#144530' },
  { name: 'Development', desc: 'Custom websites, apps, and platforms built for performance.', color: '#201d1d', textColor: '#f4f4f4' },
  { name: 'AI Solutions', desc: 'Intelligent automation that scales your operations.', color: '#2563EB', textColor: '#f4f4f4' },
  { name: 'Consultancy', desc: 'Strategic guidance for education and startups.', color: '#f4f4f4', textColor: '#201d1d' },
];

const clientLogos = [
  { name: 'Google Cloud', logo: 'https://cdn.svgporn.com/logos/google-cloud.svg' },
  { name: 'AWS', logo: 'https://cdn.svgporn.com/logos/aws.svg' },
  { name: 'Microsoft', logo: 'https://cdn.svgporn.com/logos/microsoft-icon.svg' },
  { name: 'Stripe', logo: 'https://cdn.svgporn.com/logos/stripe.svg' },
  { name: 'Shopify', logo: 'https://cdn.svgporn.com/logos/shopify.svg' },
  { name: 'Slack', logo: 'https://cdn.svgporn.com/logos/slack-icon.svg' },
  { name: 'Figma', logo: 'https://cdn.svgporn.com/logos/figma.svg' },
  { name: 'Vercel', logo: 'https://cdn.svgporn.com/logos/vercel-icon.svg' },
  { name: 'Meta', logo: 'https://cdn.svgporn.com/logos/meta-icon.svg' },
  { name: 'Salesforce', logo: 'https://cdn.svgporn.com/logos/salesforce.svg' },
  { name: 'HubSpot', logo: 'https://cdn.svgporn.com/logos/hubspot.svg' },
  { name: 'Mailchimp', logo: 'https://cdn.svgporn.com/logos/mailchimp.svg' },
];

const AboutPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const splits: SplitType[] = [];

    const ctx = gsap.context(() => {
      // Hero heading char animation
      document.querySelectorAll('.about-hero-heading').forEach((el) => {
        const split = new SplitType(el as HTMLElement, { types: 'chars' });
        splits.push(split);
        if (split.chars) {
          gsap.set(split.chars, { yPercent: 120, opacity: 0 });
          gsap.to(split.chars, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.02, ease: 'power3.out', delay: 0.3 });
        }
      });

      // Hero desc word reveal
      document.querySelectorAll('.about-hero-desc').forEach((el) => {
        const split = new SplitType(el as HTMLElement, { types: 'words' });
        splits.push(split);
        if (split.words) {
          gsap.fromTo(split.words,
            { opacity: 0, y: 10, filter: 'blur(4px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, stagger: 0.03, ease: 'power2.out', delay: 0.8 }
          );
        }
      });

      // Info grid items — stagger in
      gsap.fromTo('.info-grid-item', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.info-grid-section', start: 'top 70%' },
      });

      // Last added title chars
      document.querySelectorAll('.last-added-title').forEach((el) => {
        const split = new SplitType(el as HTMLElement, { types: 'chars' });
        splits.push(split);
        if (split.chars) {
          gsap.set(split.chars, { yPercent: 100, opacity: 0 });
          gsap.to(split.chars, {
            yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.015, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 80%' },
          });
        }
      });

      // Case study cards
      gsap.fromTo('.case-study-card', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.last-added-cards', start: 'top 80%' },
      });

      // Services section
      document.querySelectorAll('.about-service-number, .about-service-title').forEach((el) => {
        const split = new SplitType(el as HTMLElement, { types: 'chars' });
        splits.push(split);
        if (split.chars) {
          gsap.set(split.chars, { yPercent: 100, opacity: 0 });
          gsap.to(split.chars, {
            yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.02, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 80%' },
          });
        }
      });

      document.querySelectorAll('.about-service').forEach((el) => {
        gsap.fromTo(el.querySelectorAll('.about-service-item'), { x: 40, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 75%' },
        });
      });

      // Product cards
      gsap.fromTo('.product-card', { y: 60, opacity: 0, rotate: 5 }, {
        y: 0, opacity: 1, rotate: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.product-slider-section', start: 'top 75%' },
      });

      // CTA section
      gsap.fromTo('.cta-card', { y: 80, opacity: 0, scale: 0.95 }, {
        y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-section', start: 'top 75%' },
      });

      // Stats counters
      document.querySelectorAll('.stat-counter').forEach((el) => {
        const target = parseFloat(el.getAttribute('data-value') || '0');
        const suffix = el.getAttribute('data-suffix') || '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration: 2.5, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          onUpdate: () => { (el as HTMLElement).textContent = Math.round(obj.val) + suffix; },
        });
      });

      // Pinned expertise (desktop)
      const mm = gsap.matchMedia();
      mm.add('(min-width: 901px)', () => {
        const section = expertiseRef.current;
        if (!section) return;
        const header = section.querySelector('.about-expertise-header');
        const servicesList = section.querySelector('.about-services');
        if (!header || !servicesList) return;
        ScrollTrigger.create({
          trigger: section, start: 'top top',
          end: () => `+=${servicesList.getBoundingClientRect().height - window.innerHeight}`,
          pin: header, pinSpacing: false,
        });
      });

      // Logo grid
      gsap.fromTo('.about-logo-item', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power2.out',
        scrollTrigger: { trigger: '.about-logos-grid', start: 'top 85%' },
      });
    }, pageRef);

    return () => {
      splits.forEach((s) => s.revert());
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="page about-page" ref={pageRef}>

      {/* ===== SECTION 1: HERO (dark) — OSMO Vault style ===== */}
      <section className="about-hero about-dark">
        {/* Decorative background lines */}
        <div className="about-hero-deco">
          <div className="about-hero-deco__vline" />
          <svg className="about-hero-deco__arc" viewBox="0 0 800 800" fill="none">
            <circle cx="400" cy="400" r="300" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="8 8" />
            <circle cx="400" cy="400" r="200" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 6" />
            {/* Tick marks around the circle */}
            {[...Array(60)].map((_, i) => {
              const angle = (i * 6) * (Math.PI / 180);
              const inner = i % 5 === 0 ? 280 : 290;
              const outer = 300;
              return (
                <line
                  key={i}
                  x1={400 + inner * Math.cos(angle)}
                  y1={400 + inner * Math.sin(angle)}
                  x2={400 + outer * Math.cos(angle)}
                  y2={400 + outer * Math.sin(angle)}
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth={i % 5 === 0 ? 1.5 : 0.75}
                />
              );
            })}
          </svg>
        </div>

        {/* Tags row below nav */}
        <div className="about-hero-tags">
          <div className="about-hero-tags__left">
            <span className="about-hero-tag">ABOUT</span>
            <span className="about-hero-tag about-hero-tag--filled">BEYONDEDGE</span>
          </div>
          <div className="about-hero-tags__right">
            <span className="about-hero-tag about-hero-tag--green">✓ DIGITAL CONSULTANCY</span>
          </div>
        </div>

        {/* Main content */}
        <div className="about-hero-center">
          <h1 className="about-hero-heading">About Us</h1>
          <p className="about-hero-subtitle">Take a peek inside our world of digital growth</p>
          <p className="about-hero-scribble">Bridging Strategy & Execution ↗</p>
        </div>
      </section>

      {/* ===== SECTION 2: INFO GRID (dark) — 4 numbered items ===== */}
      <section className="about-dark info-grid-section">
        <div className="about-container about-container--m">
          <div className="info-grid-intro">
            <h2 className="info-grid-intro-title">
              Discover our expertise across <span className="color-accent">500+</span> projects delivered, designed to be used, tweaked and customised. Easily plug into your workflow.
            </h2>
          </div>
          <div className="info-grid">
            {gridItems.map((item, i) => (
              <div key={i} className="info-grid-item">
                <div className="info-grid-item__nr">
                  <span>{item.num}</span>
                </div>
                <div className="info-grid-item__col">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: LAST ADDED (light) ===== */}
      <section className="about-light last-added-section">
        <div className="about-container about-container--m">
          <div className="last-added-title-row">
            <h2 className="last-added-title">Recent Work</h2>
            <span className="last-added-scribble">Projects Added Weekly</span>
            <h2 className="last-added-title">Featured</h2>
          </div>
          <p className="last-added-desc">
            Take a peek inside our ever-growing collection of case studies. We've delivered 500+ projects across 12 countries.
          </p>
          <div className="last-added-cards">
            {caseStudies.map((study, i) => (
              <div key={i} className="case-study-card">
                <div className="case-study-card__start">
                  <div className="case-study-card__tags">
                    <span className="case-study-tag case-study-tag--green">{study.tag}</span>
                  </div>
                  <div className="case-study-card__info">
                    <h4>{study.title}</h4>
                    <span className="case-study-card__category">{study.category}</span>
                  </div>
                </div>
                <div className="case-study-card__end">
                  <img src={study.image} alt={study.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FOR WHO — OSMO split dark ===== */}
      <section className="about-dark for-who-section">
        <div className="for-who-row">
          {/* Left column */}
          <div className="for-who-col">
            <div className="for-who-col__logo">
              <span className="for-who-label">For Agencies</span>
            </div>
            <h3 className="for-who-heading">For Agencies</h3>
            <p className="for-who-text">
              Easily plug our marketing strategies into your agency workflow. Customize with your own data, and you're ready to go!
            </p>
            <div className="for-who-card for-who-card--light">
              <div className="for-who-card__header">
                <span className="for-who-card__title">Strategy Dashboard</span>
                <div className="for-who-card__tabs">
                  <span className="for-who-card__tab for-who-card__tab--active">Marketing</span>
                  <span className="for-who-card__tab">Analytics</span>
                </div>
              </div>
              <div className="for-who-card__body">
                <p className="for-who-card__step">Step 1: Define your audience</p>
                <div className="for-who-card__btn-row">
                  <span className="for-who-card__btn">Launch Campaign</span>
                </div>
                <div className="for-who-card__divider" />
                <p className="for-who-card__step">Step 2: Set KPIs & budget</p>
              </div>
            </div>
          </div>

          {/* "or" divider */}
          <div className="for-who-or">or</div>

          {/* Right column */}
          <div className="for-who-col">
            <div className="for-who-col__logo for-who-col__logo--marquee">
              <div className="for-who-marquee">
                <div className="for-who-marquee__track">
                  {[...Array(3)].map((_, r) => (
                    <div key={r} className="for-who-marquee__set">
                      <img src="https://cdn.svgporn.com/logos/google-cloud.svg" alt="Google Cloud" />
                      <img src="https://cdn.svgporn.com/logos/aws.svg" alt="AWS" />
                      <img src="https://cdn.svgporn.com/logos/microsoft.svg" alt="Microsoft" />
                      <img src="https://cdn.svgporn.com/logos/shopify.svg" alt="Shopify" />
                      <img src="https://cdn.svgporn.com/logos/slack-icon.svg" alt="Slack" />
                      <img src="https://cdn.svgporn.com/logos/figma.svg" alt="Figma" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="for-who-heading">Custom Dev & AI</h3>
            <p className="for-who-text">
              For startups and institutions, we offer full development, AI integration, and automation so you can scale smarter.
            </p>
            <div className="for-who-card for-who-card--dark">
              <div className="for-who-card__header">
                <span className="for-who-card__title">Documentation</span>
                <div className="for-who-card__tabs">
                  <span className="for-who-card__tab">Webflow</span>
                  <span className="for-who-card__tab for-who-card__tab--active">Code</span>
                </div>
              </div>
              <div className="for-who-card__body">
                <p className="for-who-card__step">Step 1: Add HTML</p>
                <div className="for-who-card__code">
                  <span className="for-who-code--tag">&lt;div</span> <span className="for-who-code--attr">class</span>=<span className="for-who-code--val">"beyond-edge"</span><span className="for-who-code--tag">&gt;</span><br/>
                  &nbsp;&nbsp;<span className="for-who-code--tag">&lt;div</span> <span className="for-who-code--attr">class</span>=<span className="for-who-code--val">"growth-engine"</span><span className="for-who-code--tag">&gt;&lt;/div&gt;</span><br/>
                  <span className="for-who-code--tag">&lt;/div&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: EXPERTISE — pinned services ===== */}
      <section className="about-light about-expertise" ref={expertiseRef}>
        <div className="about-expertise-header">
          <h1 className="about-expertise-title">What we<br/>do best</h1>
          <div className="about-expertise-images">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" alt="Strategy" />
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop" alt="Workspace" />
          </div>
        </div>
        <div className="about-services">
          {services.map((service) => (
            <div key={service.number} className="about-service">
              <h3 className="about-service-number">({service.number})</h3>
              <h2 className="about-service-title">{service.title}</h2>
              <div className="about-service-items">
                {service.items.map((item, i) => (
                  <p key={i} className="about-service-item">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 7: PRODUCT SLIDER (light) ===== */}
      <section className="about-light product-slider-section">
        <div className="about-container" style={{ textAlign: 'center' }}>
          <h2 className="product-slider-title">A growing toolkit for ambitious brands</h2>
          <p className="product-slider-desc">Access everything with a single partnership:</p>
        </div>
        <div className="product-slider-cards">
          {productCards.map((card, i) => (
            <div key={i} className="product-card" style={{ background: card.color, color: card.textColor }}>
              <div className="product-card__badge">PART OF THE MEMBERSHIP</div>
              <h3 className="product-card__name">{card.name}</h3>
              <p className="product-card__desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 8: STATS (dark) ===== */}
      <section className="about-dark about-stats-section">
        <div className="about-container about-container--m">
          <div className="about-stats-grid">
            <div className="about-stats-item">
              <span className="stat-counter" data-value="500" data-suffix="+">0</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="about-stats-item">
              <span className="stat-counter" data-value="98" data-suffix="%">0</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="about-stats-item">
              <span className="stat-counter" data-value="12" data-suffix="+">0</span>
              <span className="stat-label">Countries Served</span>
            </div>
            <div className="about-stats-item">
              <span className="stat-counter" data-value="40" data-suffix="+">0</span>
              <span className="stat-label">Team Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: CTA — two cards ===== */}
      <section className="about-light cta-section">
        <div className="about-container">
          <div className="cta-row">
            <div className="cta-card cta-card--dark">
              <span className="cta-card__scribble">We'll see you there!</span>
              <div className="cta-card__visual">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop" alt="Team" />
              </div>
            </div>
            <div className="cta-card cta-card--accent">
              <p className="cta-card__join">Join 500+ clients</p>
              <h2 className="cta-card__title">Ready to level up?</h2>
              <p className="cta-card__desc">Become a partner to unlock the full BeyondEdge toolkit today.</p>
              <div className="cta-card__buttons">
                <button className="cta-btn cta-btn--dark">Get Started</button>
                <button className="cta-btn cta-btn--light">FAQs</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
