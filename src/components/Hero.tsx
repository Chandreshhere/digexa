import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Hero.css';

interface HeroProps {
  onContact: () => void;
  onLearnMore: () => void;
}

const Hero = ({ onContact, onLearnMore }: HeroProps) => {
  const ref = useScrollReveal();

  return (
    <section id="home" className="hero-section" ref={ref}>
      <div className="hero">
        <div className="hero__left reveal">
          <span className="hero__badge">Digital Consultancy</span>
          <h1 className="hero__title">
            Grow Your Business with Data-Driven Digital Strategy
          </h1>
          <p className="hero__desc">
            We help agencies, institutions, and startups scale through strategic marketing, modern development, and intelligent automation — all under one roof.
          </p>
          <div className="hero__buttons">
            <button className="hero__btn hero__btn--primary" onClick={onLearnMore}>Read More</button>
            <button className="hero__btn hero__btn--secondary" onClick={onContact}>Contact Us</button>
          </div>
        </div>

        <div className="hero__right reveal reveal-delay-2">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=626&h=442&fit=crop"
            alt="Digital Business Dashboard Analytics"
            className="hero__image"
          />
          <div className="hero__card">
            <h3 className="hero__card-title">
              Creating Impactful Digital Experiences for Your Business
            </h3>
            <div className="hero__card-rating">
              <span className="hero__card-score">9.6</span>
              <span className="hero__card-score-text">
                Client satisfaction score across 500+ projects
              </span>
            </div>
            <div className="hero__card-clients">
              <div className="hero__card-dots">
                <div className="hero__card-dot"></div>
                <div className="hero__card-dot"></div>
                <div className="hero__card-dot"></div>
              </div>
              <span className="hero__card-client-text">Our Client Active</span>
            </div>
          </div>
          <div className="hero__cta-bottom" onClick={onContact} style={{ cursor: 'pointer' }}>
            <span className="hero__cta-bottom-text">Join the Future of Marketing</span>
          </div>
        </div>
      </div>

      <div className="hero__bottom-row">
        <div className="hero__growth-card reveal reveal-delay-1">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=180&fit=crop"
            alt="Team collaboration"
            className="hero__growth-image"
          />
          <div className="hero__growth-content">
            <h3>Maximize Your Growth with Our Expert Digital Strategies</h3>
            <p>
              From SEO and paid campaigns to full-stack development — we craft solutions that drive real, measurable results for your business.
            </p>
            <button className="hero__growth-btn" onClick={onLearnMore}>Learn More</button>
          </div>
        </div>

        <div className="hero__success-wrapper reveal reveal-delay-2">
          <div className="hero__success-card">
            <h3>Your Success, Our Priority</h3>
            <p>We treat every project as a partnership, aligning our expertise with your vision to deliver outcomes that matter.</p>
          </div>
          <div className="hero__success-stats">
            <div className="hero__success-stat-item">
              <div className="hero__success-stat-number">500+</div>
              <div className="hero__success-stat-label">Projects delivered</div>
            </div>
            <div className="hero__success-stat-item">
              <div className="hero__success-stat-number">98%</div>
              <div className="hero__success-stat-label">Client retention</div>
            </div>
            <div className="hero__success-stat-item">
              <div className="hero__success-stat-number">12+</div>
              <div className="hero__success-stat-label">Countries served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
