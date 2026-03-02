import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
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

type ModalType = null | 'contact' | 'getStarted' | 'subscribe' | 'webDev' | 'aiService' | 'learnMore' | 'teamInfo' | 'servicesOverview';

function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openModal = (modal: ModalType) => {
    setFormSubmitted(false);
    setActiveModal(modal);
  };
  const closeModal = () => setActiveModal(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="*" element={
        <>
          <Header onGetStarted={() => openModal('getStarted')} />
          <Hero onContact={() => openModal('contact')} onLearnMore={() => openModal('learnMore')} />
          <LogoBar />
          <About />
          <Services onLearnMore={(service: string) => openModal(service === 'web' ? 'webDev' : 'aiService')} />
          <Features />
          <Achievement />
          <Expertise onConsult={() => openModal('contact')} />
          <Strategies />
          <Team onReadMore={() => openModal('teamInfo')} />
          <Partners onViewServices={() => openModal('servicesOverview')} />
          <Newsletter onSubscribe={() => openModal('subscribe')} onContact={() => openModal('contact')} />
          <Footer onContact={() => openModal('contact')} />

          {/* Contact / Get Started Modal */}
      <Modal isOpen={activeModal === 'contact' || activeModal === 'getStarted'} onClose={closeModal} title={activeModal === 'getStarted' ? 'Get Started Today' : 'Contact Us'}>
        {formSubmitted ? (
          <div className="modal-form__success">
            <div className="modal-form__success-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleFormSubmit}>
            <div className="modal-form__row">
              <div className="modal-form__group">
                <label className="modal-form__label">First Name</label>
                <input className="modal-form__input" type="text" placeholder="John" required />
              </div>
              <div className="modal-form__group">
                <label className="modal-form__label">Last Name</label>
                <input className="modal-form__input" type="text" placeholder="Doe" required />
              </div>
            </div>
            <div className="modal-form__group">
              <label className="modal-form__label">Email Address</label>
              <input className="modal-form__input" type="email" placeholder="john@company.com" required />
            </div>
            <div className="modal-form__group">
              <label className="modal-form__label">Service Interested In</label>
              <select className="modal-form__select" required>
                <option value="">Select a service</option>
                <option>Digital Marketing Strategy</option>
                <option>Web & Mobile Development</option>
                <option>AI & Automation Solutions</option>
                <option>SEO & Organic Growth</option>
                <option>Education Consultancy</option>
                <option>IT Startup Growth</option>
              </select>
            </div>
            <div className="modal-form__group">
              <label className="modal-form__label">Message</label>
              <textarea className="modal-form__textarea" placeholder="Tell us about your project or goals..." required />
            </div>
            <button type="submit" className="modal-form__submit">Send Message</button>
          </form>
        )}
      </Modal>

      {/* Subscribe Modal */}
      <Modal isOpen={activeModal === 'subscribe'} onClose={closeModal} title="Subscribe to Our Newsletter">
        {formSubmitted ? (
          <div className="modal-form__success">
            <div className="modal-form__success-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>You're Subscribed!</h3>
            <p>Welcome to the BeyondEdge community. You'll receive our latest insights and industry updates.</p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleFormSubmit}>
            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, marginBottom: '4px' }}>
              Get weekly insights on digital strategy, marketing trends, and growth tips delivered straight to your inbox.
            </p>
            <div className="modal-form__group">
              <label className="modal-form__label">Full Name</label>
              <input className="modal-form__input" type="text" placeholder="Your name" required />
            </div>
            <div className="modal-form__group">
              <label className="modal-form__label">Email Address</label>
              <input className="modal-form__input" type="email" placeholder="you@company.com" required />
            </div>
            <button type="submit" className="modal-form__submit">Subscribe Now</button>
          </form>
        )}
      </Modal>

      {/* Web Dev Service Modal */}
      <Modal isOpen={activeModal === 'webDev'} onClose={closeModal} title="Web & Mobile Development">
        <p className="modal-service__desc">
          We build high-performance, SEO-optimized websites and custom mobile apps designed for seamless user experiences and maximum conversion rates.
        </p>
        <div className="modal-service__features">
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>Custom responsive websites built with modern frameworks</span>
          </div>
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>Native & cross-platform mobile app development</span>
          </div>
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>E-commerce platforms with payment integration</span>
          </div>
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>Performance optimization & technical SEO</span>
          </div>
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>Ongoing maintenance & support plans</span>
          </div>
        </div>
        <button className="modal-service__cta" onClick={() => { closeModal(); openModal('contact'); }}>Request a Free Consultation</button>
      </Modal>

      {/* AI Service Modal */}
      <Modal isOpen={activeModal === 'aiService'} onClose={closeModal} title="AI & Automation Solutions">
        <p className="modal-service__desc">
          Future-proof your operations with custom AI integration. We help businesses automate workflows, leverage data intelligence, and scale smarter.
        </p>
        <div className="modal-service__features">
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>Custom AI chatbots & virtual assistants</span>
          </div>
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>Workflow automation & process optimization</span>
          </div>
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>Data analytics & business intelligence dashboards</span>
          </div>
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>AI-powered marketing & lead scoring</span>
          </div>
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>Integration with existing tools & platforms</span>
          </div>
        </div>
        <button className="modal-service__cta" onClick={() => { closeModal(); openModal('contact'); }}>Request a Free Consultation</button>
      </Modal>

      {/* Team Info Modal */}
      <Modal isOpen={activeModal === 'teamInfo'} onClose={closeModal} title="Meet Our Team" variant="drawer">
        <p className="modal-service__desc">
          Our team is the backbone of BeyondEdge. Each member brings deep expertise in their domain, united by a shared passion for driving digital transformation and delivering exceptional results for our clients.
        </p>
        <div className="modal-team">
          <div className="modal-team__member">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=top" alt="Sarah Mitchell" className="modal-team__avatar" />
            <div>
              <h4 className="modal-team__name">Sarah Mitchell</h4>
              <span className="modal-team__role">Head of Marketing Strategy</span>
              <p className="modal-team__bio">10+ years crafting data-driven campaigns for Fortune 500 brands. Sarah leads our strategic initiatives and client partnerships.</p>
            </div>
          </div>
          <div className="modal-team__member">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=top" alt="James Carter" className="modal-team__avatar" />
            <div>
              <h4 className="modal-team__name">James Carter</h4>
              <span className="modal-team__role">Lead Software Engineer</span>
              <p className="modal-team__bio">Full-stack architect with expertise in React, Node.js, and cloud infrastructure. James has shipped 200+ production applications.</p>
            </div>
          </div>
          <div className="modal-team__member">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=top" alt="Priya Sharma" className="modal-team__avatar" />
            <div>
              <h4 className="modal-team__name">Priya Sharma</h4>
              <span className="modal-team__role">AI Solutions Architect</span>
              <p className="modal-team__bio">ML engineer and automation specialist. Priya designs intelligent systems that streamline operations and unlock growth.</p>
            </div>
          </div>
          <div className="modal-team__member">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=top" alt="David Kim" className="modal-team__avatar" />
            <div>
              <h4 className="modal-team__name">David Kim</h4>
              <span className="modal-team__role">SEO & Growth Lead</span>
              <p className="modal-team__bio">Growth hacker who's driven 3x organic traffic for 50+ brands. David turns search visibility into measurable revenue.</p>
            </div>
          </div>
        </div>
        <button className="modal-service__cta" onClick={() => { closeModal(); openModal('contact'); }}>Work With Our Team</button>
      </Modal>

      {/* Services Overview Modal */}
      <Modal isOpen={activeModal === 'servicesOverview'} onClose={closeModal} title="Our Services" variant="drawer">
        <p className="modal-service__desc">
          From strategy to execution, BeyondEdge offers end-to-end digital solutions tailored to accelerate your business growth.
        </p>
        <div className="modal-services-grid">
          <div className="modal-services-item">
            <div className="modal-services-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="14" rx="2" stroke="#144530" strokeWidth="2"/><line x1="2" y1="8" x2="22" y2="8" stroke="#144530" strokeWidth="1.5"/><line x1="8" y1="22" x2="16" y2="22" stroke="#144530" strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="18" x2="12" y2="22" stroke="#144530" strokeWidth="2"/></svg>
            </div>
            <div>
              <h4 className="modal-services-item__title">Web & Mobile Development</h4>
              <p className="modal-services-item__desc">Custom responsive websites, native mobile apps, and full-stack e-commerce platforms optimized for speed and conversions.</p>
            </div>
          </div>
          <div className="modal-services-item">
            <div className="modal-services-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#144530" strokeWidth="2"/><circle cx="12" cy="12" r="3" fill="#A8FA00"/><line x1="12" y1="2" x2="12" y2="4" stroke="#144530" strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="20" x2="12" y2="22" stroke="#144530" strokeWidth="2" strokeLinecap="round"/><line x1="2" y1="12" x2="4" y2="12" stroke="#144530" strokeWidth="2" strokeLinecap="round"/><line x1="20" y1="12" x2="22" y2="12" stroke="#144530" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div>
              <h4 className="modal-services-item__title">AI & Automation Solutions</h4>
              <p className="modal-services-item__desc">Smart chatbots, automated workflows, data analytics dashboards, and AI-powered marketing tools for smarter operations.</p>
            </div>
          </div>
          <div className="modal-services-item">
            <div className="modal-services-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 3h18v14H7l-4 4V3z" stroke="#144530" strokeWidth="2" strokeLinejoin="round"/><line x1="8" y1="8" x2="16" y2="8" stroke="#144530" strokeWidth="2" strokeLinecap="round"/><line x1="8" y1="12" x2="13" y2="12" stroke="#144530" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div>
              <h4 className="modal-services-item__title">Digital Marketing Strategy</h4>
              <p className="modal-services-item__desc">SEO, paid ad campaigns, content strategy, social media management, and data-driven brand growth plans.</p>
            </div>
          </div>
          <div className="modal-services-item">
            <div className="modal-services-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#144530" strokeWidth="2" strokeLinejoin="round"/><path d="M2 17l10 5 10-5" stroke="#144530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12l10 5 10-5" stroke="#144530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <h4 className="modal-services-item__title">Education & Startup Consultancy</h4>
              <p className="modal-services-item__desc">Tailored digital growth programs, mentorship, and strategic guidance for educational institutions and early-stage startups.</p>
            </div>
          </div>
        </div>
        <button className="modal-service__cta" onClick={() => { closeModal(); openModal('contact'); }}>Get a Free Consultation</button>
      </Modal>

      {/* Learn More Modal */}
      <Modal isOpen={activeModal === 'learnMore'} onClose={closeModal} title="About BeyondEdge">
        <p className="modal-service__desc">
          BeyondEdge is a full-service digital consultancy that bridges the gap between strategy and execution. We partner with agencies, educational institutions, and tech startups to deliver measurable growth through data-driven marketing, cutting-edge development, and intelligent automation.
        </p>
        <div className="modal-service__features">
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>500+ projects delivered across 12 countries</span>
          </div>
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>Dedicated teams for marketing, development & AI</span>
          </div>
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>Free consultancy for educational institutions</span>
          </div>
          <div className="modal-service__feature">
            <div className="modal-service__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#144530" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span>Trusted by leading brands and global partners</span>
          </div>
        </div>
        <button className="modal-service__cta" onClick={() => { closeModal(); openModal('contact'); }}>Let's Work Together</button>
      </Modal>
        </>
      } />
    </Routes>
  );
}

export default App;
