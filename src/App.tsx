import { useEffect, useState, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Achievement from './components/Achievement';
import Expertise from './components/Expertise';
import Strategies from './components/Strategies';
import Team from './components/Team';
import Partners from './components/Partners';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Modal from './components/Modal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';

type ModalType = null | 'webdev' | 'ai' | 'team' | 'cases' | 'subscribe' | 'contact';

function HomePage() {
  const [modal, setModal] = useState<ModalType>(null);
  const navigate = useNavigate();
  const close = useCallback(() => setModal(null), []);

  return (
    <>
      <Hero />
      <About />
      <Services onLearnMore={(type: 'webdev' | 'ai') => setModal(type)} />
      <Features />
      <Achievement />
      <Expertise />
      <Strategies />
      <Team onReadMore={() => setModal('team')} />
      <Partners onViewCases={() => setModal('cases')} />
      <Newsletter onSubscribe={() => setModal('subscribe')} onContact={() => setModal('contact')} />

      {/* Web Dev Modal */}
      <Modal isOpen={modal === 'webdev'} onClose={close} title="Web & Mobile Development">
        <p className="modal-service__desc">
          High-performance, SEO-optimized websites and custom mobile apps built with React, Next.js, Swift, and Flutter. Every pixel is crafted for speed, accessibility, and maximum conversion.
        </p>
        <div className="modal-service__features">
          {['Custom Web Applications & SPAs', 'Progressive Web Apps (PWA)', 'iOS & Android Native Development', 'E-Commerce Platforms (Shopify, Headless)', 'Performance Optimization & Core Web Vitals'].map((f, i) => (
            <div key={i} className="modal-service__feature">
              <span className="modal-service__check">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="#144530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              {f}
            </div>
          ))}
        </div>
        <button className="modal-service__cta" onClick={() => { close(); navigate('/services'); window.scrollTo(0, 0); }}>View All Services →</button>
      </Modal>

      {/* AI Modal */}
      <Modal isOpen={modal === 'ai'} onClose={close} title="AI & Automation Solutions">
        <p className="modal-service__desc">
          Future-proof your operations with custom AI integration. From smart chatbots to full workflow automation, we make technology work for your growth — saving time, reducing costs, and scaling intelligently.
        </p>
        <div className="modal-service__features">
          {['Custom AI Chatbots & Virtual Assistants', 'Workflow & Process Automation', 'Predictive Analytics & Insights', 'Custom Machine Learning Models', 'CRM & Tool Integration'].map((f, i) => (
            <div key={i} className="modal-service__feature">
              <span className="modal-service__check">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="#144530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              {f}
            </div>
          ))}
        </div>
        <button className="modal-service__cta" onClick={() => { close(); navigate('/services'); window.scrollTo(0, 0); }}>View All Services →</button>
      </Modal>

      {/* Team Modal */}
      <Modal isOpen={modal === 'team'} onClose={close} title="Meet Our Team" variant="drawer">
        <div className="modal-team">
          {[
            { name: 'James Mitchell', role: 'Founder & CEO', bio: 'Visionary leader with 10+ years in digital strategy. James founded Digexa to bridge the gap between marketing and technology.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=top' },
            { name: 'Sarah Chen', role: 'Head of Marketing', bio: 'Data-driven marketer specializing in growth strategies. Led campaigns that generated over $50M in client revenue.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=top' },
            { name: 'Alex Rivera', role: 'Lead Developer', bio: 'Full-stack engineer passionate about performance and clean code. Architected 100+ web applications and platforms.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=top' },
            { name: 'Priya Sharma', role: 'AI & Automation Lead', bio: 'Machine learning specialist building intelligent systems. Previously at Google AI and a Stanford CS graduate.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=top' },
          ].map((m, i) => (
            <div key={i} className="modal-team__member">
              <img src={m.img} alt={m.name} className="modal-team__avatar" />
              <div>
                <div className="modal-team__name">{m.name}</div>
                <div className="modal-team__role">{m.role}</div>
                <div className="modal-team__bio">{m.bio}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="modal-service__cta" onClick={() => { close(); navigate('/about'); window.scrollTo(0, 0); }}>About Us →</button>
      </Modal>

      {/* Case Studies Modal */}
      <Modal isOpen={modal === 'cases'} onClose={close} title="Our Case Studies" variant="drawer">
        <div className="modal-services-grid">
          {[
            { title: 'Vertex Digital Agency', desc: 'Full-funnel marketing strategy that tripled revenue in 6 months. SEO, paid ads, and content marketing combined.', icon: '📈' },
            { title: 'EduGlobal University', desc: 'Digital enrollment platform with automated lead nurturing — 60% enrollment boost year over year.', icon: '🎓' },
            { title: 'NovaTech SaaS', desc: 'End-to-end SaaS platform build from concept to 10K users in 90 days with growth loops.', icon: '🚀' },
            { title: 'Pulse AI Labs', desc: 'Custom AI chatbots that reduced response times by 70% and cut support costs in half.', icon: '🤖' },
            { title: 'UrbanCart Commerce', desc: 'Headless e-commerce with personalized recommendations — 250% sales increase.', icon: '🛒' },
          ].map((c, i) => (
            <div key={i} className="modal-services-item">
              <div className="modal-services-item__icon" style={{ fontSize: '22px' }}>{c.icon}</div>
              <div>
                <div className="modal-services-item__title">{c.title}</div>
                <div className="modal-services-item__desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="modal-service__cta" onClick={() => { close(); navigate('/work'); window.scrollTo(0, 0); }}>View All Work →</button>
      </Modal>

      {/* Subscribe Modal */}
      <Modal isOpen={modal === 'subscribe'} onClose={close} title="Subscribe to Our Newsletter">
        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); close(); }}>
          <div className="modal-form__row">
            <div className="modal-form__group">
              <label className="modal-form__label">First Name</label>
              <input className="modal-form__input" placeholder="John" />
            </div>
            <div className="modal-form__group">
              <label className="modal-form__label">Last Name</label>
              <input className="modal-form__input" placeholder="Doe" />
            </div>
          </div>
          <div className="modal-form__group">
            <label className="modal-form__label">Email Address</label>
            <input className="modal-form__input" type="email" placeholder="john@example.com" />
          </div>
          <div className="modal-form__group">
            <label className="modal-form__label">What are you interested in?</label>
            <select className="modal-form__select">
              <option>Digital Marketing</option>
              <option>Web Development</option>
              <option>AI & Automation</option>
              <option>Brand Strategy</option>
              <option>All of the above</option>
            </select>
          </div>
          <button type="submit" className="modal-form__submit">Subscribe Now</button>
        </form>
      </Modal>

      {/* Contact Modal */}
      <Modal isOpen={modal === 'contact'} onClose={close} title="Get in Touch">
        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); close(); }}>
          <div className="modal-form__row">
            <div className="modal-form__group">
              <label className="modal-form__label">Name</label>
              <input className="modal-form__input" placeholder="Your name" />
            </div>
            <div className="modal-form__group">
              <label className="modal-form__label">Email</label>
              <input className="modal-form__input" type="email" placeholder="you@company.com" />
            </div>
          </div>
          <div className="modal-form__group">
            <label className="modal-form__label">Company / Organization</label>
            <input className="modal-form__input" placeholder="Your company name" />
          </div>
          <div className="modal-form__group">
            <label className="modal-form__label">How can we help?</label>
            <textarea className="modal-form__textarea" placeholder="Tell us about your project or question..." />
          </div>
          <button type="submit" className="modal-form__submit">Send Message</button>
        </form>
      </Modal>
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/about" element={<><Header /><AboutPage /><Footer /></>} />
      <Route path="/services" element={<><Header /><ServicesPage /><Footer /></>} />
      <Route path="/work" element={<><Header /><WorkPage /><Footer /></>} />
      <Route path="/contact" element={<><Header /><ContactPage /><Footer /></>} />
      <Route path="/faq" element={<><Header /><FaqPage /><Footer /></>} />
      <Route path="/blog" element={<><Header /><BlogPage /><Footer /></>} />
      <Route path="*" element={<><Header /><HomePage /><Footer /></>} />
    </Routes>
  );
}

export default App;
