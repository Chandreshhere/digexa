import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/BlogPage.css';

gsap.registerPlugin(ScrollTrigger);

const featuredPost = {
  title: 'The Future of AI in Digital Marketing: What Every Brand Needs to Know',
  excerpt: 'Artificial intelligence is reshaping how brands connect with audiences. From predictive analytics to hyper-personalized content, here\'s what the next 5 years look like.',
  category: 'AI & STRATEGY',
  date: 'Mar 20, 2026',
  readTime: '8 min read',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=700&fit=crop',
  author: { name: 'James Mitchell', role: 'Founder', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=top' },
};

const posts = [
  {
    title: 'Why Your Website Redesign Keeps Failing (And How to Fix It)',
    excerpt: 'Most redesigns fail because they focus on aesthetics over strategy. Here\'s our battle-tested framework.',
    category: 'WEB DEVELOPMENT',
    date: 'Mar 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
  },
  {
    title: 'From Zero to 10K Users: Our SaaS Launch Playbook',
    excerpt: 'The exact steps we used to launch NovaTech and acquire 10,000 users in just 90 days.',
    category: 'GROWTH',
    date: 'Mar 10, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
  },
  {
    title: 'The Brand Identity Checklist: 23 Things You\'re Probably Missing',
    excerpt: 'A comprehensive audit checklist for brands that want consistency across every touchpoint.',
    category: 'BRANDING',
    date: 'Mar 5, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
  },
  {
    title: 'How We Reduced Client Support Tickets by 70% with AI Chatbots',
    excerpt: 'A deep dive into our Pulse AI Labs project and the automation stack behind it.',
    category: 'AI & AUTOMATION',
    date: 'Feb 28, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1531746790095-e5577f030b71?w=600&h=400&fit=crop',
  },
  {
    title: 'E-Commerce Conversion Secrets: Lessons from $50M in Sales',
    excerpt: 'The psychology, UX patterns, and funnel optimizations that drive real revenue.',
    category: 'E-COMMERCE',
    date: 'Feb 20, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    title: 'Design Systems That Actually Scale: A Practical Guide',
    excerpt: 'How to build a design system that grows with your product without becoming a bottleneck.',
    category: 'DESIGN',
    date: 'Feb 14, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
  },
];

const categories = ['All', 'AI & Strategy', 'Web Dev', 'Branding', 'Growth', 'Design'];

const BlogPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const splits: SplitType[] = [];

    const ctx = gsap.context(() => {
      // Hero title
      const heroTitle = document.querySelector('.bl-hero__title') as HTMLElement;
      if (heroTitle) {
        const split = new SplitType(heroTitle, { types: 'chars' });
        splits.push(split);
        if (split.chars) {
          gsap.set(split.chars, { yPercent: 120, opacity: 0 });
          gsap.to(split.chars, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.02, ease: 'power3.out', delay: 0.3 });
        }
      }

      // Hero subtitle
      gsap.fromTo('.bl-hero__subtitle',
        { opacity: 0, y: 20, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out', delay: 0.8 }
      );

      // Marquee
      gsap.fromTo('.bl-hero__marquee',
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 1 }
      );

      // Featured card
      gsap.fromTo('.bl-featured',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.bl-featured', start: 'top 80%' } }
      );

      // Category filters
      gsap.fromTo('.bl-filter',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out',
          scrollTrigger: { trigger: '.bl-filters', start: 'top 85%' } }
      );

      // Grid cards stagger
      gsap.fromTo('.bl-card',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.bl-grid', start: 'top 75%' } }
      );

      // Newsletter section
      gsap.fromTo('.bl-newsletter__inner',
        { y: 60, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.bl-newsletter', start: 'top 80%' } }
      );

    }, pageRef);

    return () => {
      splits.forEach((s) => s.revert());
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="bl-page" ref={pageRef}>

      {/* ===== HERO ===== */}
      <section className="bl-hero">
        <div className="bl-hero__bg">
          <div className="bl-hero__line bl-hero__line--v" />
          <div className="bl-hero__line bl-hero__line--h" />
          {/* Floating dots */}
          <div className="bl-hero__dot" style={{ top: '20%', left: '15%' }} />
          <div className="bl-hero__dot" style={{ top: '70%', left: '80%' }} />
          <div className="bl-hero__dot bl-hero__dot--lg" style={{ top: '40%', right: '10%' }} />
        </div>

        <div className="bl-hero__content">
          <span className="bl-hero__eyebrow">INSIGHTS & IDEAS</span>
          <h1 className="bl-hero__title">Blog</h1>
          <p className="bl-hero__subtitle">
            Thoughts on strategy, design, development, and the future of digital — from the team behind 500+ projects.
          </p>
        </div>

        {/* Scrolling category marquee */}
        <div className="bl-hero__marquee">
          <div className="bl-hero__marquee-track">
            {[...Array(3)].map((_, r) => (
              <div key={r} className="bl-hero__marquee-set">
                {['Strategy', 'Design', 'Development', 'AI', 'Marketing', 'Branding', 'Growth', 'UX', 'E-Commerce', 'Automation'].map((tag) => (
                  <span key={tag + r} className="bl-hero__marquee-tag">{tag}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED POST ===== */}
      <section className="bl-featured-section">
        <div className="bl-featured-container">
          <div className="bl-featured">
            <div className="bl-featured__img">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className="bl-featured__overlay" />
              <div className="bl-featured__badges">
                <span className="bl-featured__badge bl-featured__badge--new">FEATURED</span>
                <span className="bl-featured__badge">{featuredPost.category}</span>
              </div>
            </div>
            <div className="bl-featured__body">
              <div className="bl-featured__meta">
                <span>{featuredPost.date}</span>
                <span className="bl-featured__dot-sep">·</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h2 className="bl-featured__title">{featuredPost.title}</h2>
              <p className="bl-featured__excerpt">{featuredPost.excerpt}</p>
              <div className="bl-featured__footer">
                <div className="bl-featured__author">
                  <img src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                  <div>
                    <span className="bl-featured__author-name">{featuredPost.author.name}</span>
                    <span className="bl-featured__author-role">{featuredPost.author.role}</span>
                  </div>
                </div>
                <button className="bl-featured__read-btn">
                  Read Article
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 14L14 4M14 4H7M14 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FILTERS + GRID ===== */}
      <section className="bl-grid-section">
        <div className="bl-grid-container">
          <div className="bl-grid-header">
            <h2 className="bl-grid-title">All Articles</h2>
            <div className="bl-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`bl-filter ${activeCategory === cat ? 'bl-filter--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bl-grid">
            {posts.map((post, i) => (
              <article key={i} className="bl-card">
                <div className="bl-card__img">
                  <img src={post.image} alt={post.title} />
                  <div className="bl-card__img-hover">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M10 22L22 10M22 10H14M22 10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <span className="bl-card__category">{post.category}</span>
                </div>
                <div className="bl-card__body">
                  <div className="bl-card__meta">
                    <span>{post.date}</span>
                    <span className="bl-card__dot-sep">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="bl-card__title">{post.title}</h3>
                  <p className="bl-card__excerpt">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="bl-load-more">
            <button className="bl-load-more__btn">
              Load More Articles
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="bl-newsletter">
        <div className="bl-newsletter__inner">
          <div className="bl-newsletter__content">
            <span className="bl-newsletter__eyebrow">STAY IN THE LOOP</span>
            <h2 className="bl-newsletter__title">Get insights delivered to your inbox</h2>
            <p className="bl-newsletter__desc">No spam. Just actionable strategies, design inspiration, and growth tips — once a week.</p>
            <form className="bl-newsletter__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" className="bl-newsletter__input" />
              <button type="submit" className="bl-newsletter__submit">Subscribe</button>
            </form>
            <p className="bl-newsletter__note">Join 4,000+ subscribers. Unsubscribe anytime.</p>
          </div>
          <div className="bl-newsletter__visual">
            <div className="bl-newsletter__card bl-newsletter__card--1">
              <div className="bl-newsletter__card-dot" />
              <span>New article published</span>
            </div>
            <div className="bl-newsletter__card bl-newsletter__card--2">
              <div className="bl-newsletter__card-dot bl-newsletter__card-dot--blue" />
              <span>Weekly digest sent</span>
            </div>
            <div className="bl-newsletter__card bl-newsletter__card--3">
              <div className="bl-newsletter__card-dot bl-newsletter__card-dot--purple" />
              <span>Case study available</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bl-cta">
        <div className="bl-cta__inner">
          <h2 className="bl-cta__title">Have a story to share?</h2>
          <p className="bl-cta__desc">We're always looking for guest writers and collaborators.</p>
          <button className="bl-cta__btn" onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}>
            Get in Touch <span>→</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default BlogPage;
