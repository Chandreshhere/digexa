import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/ContactPage.css';

gsap.registerPlugin(ScrollTrigger);


const formatTime = (timeZone: string): string => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone,
  }).format(new Date());
};

const offices = [
  { city: 'San Francisco', address: '123 Innovation Drive', address2: 'San Francisco, CA 94105', country: 'USA', timeZone: 'America/Los_Angeles', label: 'PST' },
  { city: 'London', address: '45 Tech Square', address2: 'London, EC2A 4BX', country: 'United Kingdom', timeZone: 'Europe/London', label: 'GMT' },
  { city: 'Dubai', address: '88 Digital Tower', address2: 'Dubai Internet City', country: 'UAE', timeZone: 'Asia/Dubai', label: 'GST' },
];

const ContactPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [times, setTimes] = useState(() =>
    offices.map((o) => formatTime(o.timeZone))
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimes(offices.map((o) => formatTime(o.timeZone)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const splits: SplitType[] = [];

    const ctx = gsap.context(() => {
      // Form section reveal — on load since it's the first section
      gsap.fromTo('.ct-form-wrapper', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2,
      });

      gsap.fromTo('.ct-sidebar', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.4,
      });

      // Office cards stagger
      gsap.fromTo('.ct-office-card', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.ct-offices-section', start: 'top 75%' },
      });

      // Office section title
      document.querySelectorAll('.ct-offices-title').forEach((el) => {
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

      // CTA section
      gsap.fromTo('.ct-cta-card', { y: 80, opacity: 0, scale: 0.95 }, {
        y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.ct-cta-section', start: 'top 75%' },
      });

      // FAQ items
      gsap.fromTo('.ct-faq-item', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.ct-faq-section', start: 'top 75%' },
      });

    }, pageRef);

    return () => {
      splits.forEach((s) => s.revert());
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', company: '', budget: '', service: '', message: '' });
  };

  return (
    <div className="page ct-page" ref={pageRef}>

      {/* ===== FORM + SIDEBAR (light) ===== */}
      <section className="ct-form-section ct-form-section--top about-light">
        <div className="ct-form-container">
          <div className="ct-form-wrapper">
            <div className="ct-form-header">
              <span className="ct-form-badge">NEW PROJECT</span>
              <h2 className="ct-form-title">Start a Conversation</h2>
              <p className="ct-form-desc">Tell us about your project. We'll get back to you within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="ct-form-success">
                <div className="ct-form-success__icon">
                  <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="var(--green-accent)" strokeWidth="2"/><path d="M14 24L21 31L34 18" stroke="var(--green-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3>Message Sent!</h3>
                <p>We'll be in touch soon. Expect a reply within 24 hours.</p>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-form-row">
                  <div className="ct-form-group">
                    <label>Your Name *</label>
                    <input type="text" placeholder="John Doe" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="ct-form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="john@company.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>
                <div className="ct-form-row">
                  <div className="ct-form-group">
                    <label>Company</label>
                    <input type="text" placeholder="Your Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                  </div>
                  <div className="ct-form-group">
                    <label>Budget Range</label>
                    <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}>
                      <option value="">Select a range</option>
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="10k-25k">$10,000 – $25,000</option>
                      <option value="25k-50k">$25,000 – $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>
                <div className="ct-form-group">
                  <label>Service Needed</label>
                  <div className="ct-form-chips">
                    {['Web Development', 'Mobile App', 'AI & Automation', 'Digital Marketing', 'Brand Strategy', 'Consultancy'].map((s) => (
                      <button
                        type="button"
                        key={s}
                        className={`ct-form-chip ${formData.service === s ? 'ct-form-chip--active' : ''}`}
                        onClick={() => setFormData({ ...formData, service: s })}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="ct-form-group">
                  <label>Project Details *</label>
                  <textarea placeholder="Tell us about your project, goals, and timeline..." rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <button type="submit" className="ct-form-submit">
                  <span>Send Message</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </form>
            )}
          </div>

          <div className="ct-sidebar">
            <div className="ct-sidebar-card ct-sidebar-card--dark">
              <div className="ct-sidebar-card__badge">RESPONSE TIME</div>
              <h3 className="ct-sidebar-card__stat">{'< 24h'}</h3>
              <p className="ct-sidebar-card__text">Average reply time for new inquiries</p>
            </div>

            <div className="ct-sidebar-card ct-sidebar-card--accent">
              <div className="ct-sidebar-card__badge">JOIN OUR TEAM</div>
              <h3 className="ct-sidebar-card__title">We're Hiring</h3>
              <p className="ct-sidebar-card__text">Looking for talented people to join our growing team.</p>
              <a href="mailto:careers@beyondedge.com" className="ct-sidebar-link">
                careers@beyondedge.com
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </a>
            </div>

            <div className="ct-sidebar-card ct-sidebar-card--glass">
              <h4 className="ct-sidebar-card__label">Follow Us</h4>
              <div className="ct-sidebar-socials">
                {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((s) => (
                  <a key={s} href="#" className="ct-social-link">{s}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: OFFICES (dark) ===== */}
      <section className="ct-offices-section about-dark">
        <div className="ct-offices-container">
          <div className="ct-offices-header">
            <span className="ct-offices-eyebrow">GLOBAL PRESENCE</span>
            <h2 className="ct-offices-title">Our Offices</h2>
          </div>
          <div className="ct-offices-grid">
            {offices.map((office, i) => (
              <div key={i} className="ct-office-card">
                <div className="ct-office-card__top">
                  <span className="ct-office-card__nr">0{i + 1}</span>
                  <span className="ct-office-card__time">{times[i]} {office.label}</span>
                </div>
                <h3 className="ct-office-card__city">{office.city}</h3>
                <div className="ct-office-card__details">
                  <p>{office.address}</p>
                  <p>{office.address2}</p>
                  <p>{office.country}</p>
                </div>
                <div className="ct-office-card__dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FAQ QUICK (light) ===== */}
      <section className="ct-faq-section about-light">
        <div className="ct-faq-container">
          <div className="ct-faq-header">
            <h2 className="ct-faq-title">Common Questions</h2>
            <button className="ct-faq-viewall" onClick={() => navigate('/faq')}>
              View All FAQs
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="ct-faq-grid">
            {[
              { q: 'What is your typical process?', a: 'We start with a discovery call to understand your goals, then move into strategy, design, development, and launch — keeping you in the loop at every stage.' },
              { q: 'How long does a project take?', a: 'Most projects take 4–12 weeks depending on complexity. We\'ll give you a clear timeline during our initial consultation.' },
              { q: 'Do you work with startups?', a: 'Absolutely. We love working with startups and offer flexible engagement models tailored to early-stage budgets.' },
              { q: 'What technologies do you use?', a: 'React, Next.js, Node.js, Python, AWS, and more. We pick the best stack for your specific needs.' },
            ].map((item, i) => (
              <div key={i} className="ct-faq-item">
                <div className="ct-faq-item__nr">0{i + 1}</div>
                <h4 className="ct-faq-item__q">{item.q}</h4>
                <p className="ct-faq-item__a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: CTA (light) ===== */}
      <section className="ct-cta-section about-light">
        <div className="ct-cta-container">
          <div className="ct-cta-row">
            <div className="ct-cta-card ct-cta-card--dark">
              <span className="ct-cta-card__scribble">Let's create something amazing</span>
              <div className="ct-cta-card__visual">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=500&fit=crop" alt="Team collaboration" />
              </div>
            </div>
            <div className="ct-cta-card ct-cta-card--green">
              <p className="ct-cta-card__join">Join 500+ clients worldwide</p>
              <h2 className="ct-cta-card__title">Ready to start?</h2>
              <p className="ct-cta-card__desc">Book a free 30-minute strategy call and let's map out your digital growth plan.</p>
              <div className="ct-cta-card__buttons">
                <a href="mailto:hello@beyondedge.com" className="ct-cta-btn ct-cta-btn--dark">Book a Call</a>
                <button className="ct-cta-btn ct-cta-btn--light" onClick={() => navigate('/faq')}>FAQs</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
