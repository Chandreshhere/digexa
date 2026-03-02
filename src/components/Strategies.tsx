import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Strategies.css';

const Strategies = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="strategies" ref={ref}>
      <div className="strategies__content">
        <div className="strategies__left">
          <span className="strategies__badge reveal">Services</span>
          <h2 className="strategies__title reveal reveal-delay-1">
            Tailored Strategies for Maximum Business Growth
          </h2>
          <p className="strategies__desc reveal reveal-delay-2">
            We combine deep industry knowledge with data-driven insights to craft strategies that don't just look good on paper — they deliver real, scalable results.
          </p>
          <div className="strategies__features reveal reveal-delay-2">
            <div className="strategies__feature">
              <div className="strategies__feature-icon">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6L10 2L18 6L10 10L2 6Z" stroke="#144530" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M5 7.5V13C5 13 7.5 15.5 10 15.5C12.5 15.5 15 13 15 13V7.5" stroke="#144530" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="strategies__feature-title">Research-Driven Strategies</div>
                <div className="strategies__feature-desc">
                  Every campaign starts with deep market analysis and competitor research to find your edge.
                </div>
              </div>
            </div>
            <div className="strategies__feature">
              <div className="strategies__feature-icon">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 15L8 9L12 13L18 5" stroke="#144530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 5H18V9" stroke="#144530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="strategies__feature-title">End-to-End Digital Solutions</div>
                <div className="strategies__feature-desc">
                  From marketing funnels to app development — everything your business needs under one roof.
                </div>
              </div>
            </div>
          </div>
          <p className="strategies__bottom-text reveal reveal-delay-3">
            Our holistic approach ensures that every touchpoint in your digital presence works together to drive growth, engagement, and lasting customer relationships.
          </p>
        </div>
        <div className="strategies__right reveal reveal-delay-2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=446&fit=crop"
            alt="Team Strategy Session"
            className="strategies__image"
          />
          <div className="strategies__stats">
            <div className="strategies__stat">
              <div className="strategies__stat-number">500+</div>
              <div className="strategies__stat-label">Projects delivered</div>
            </div>
            <div className="strategies__stat">
              <div className="strategies__stat-number">40+</div>
              <div className="strategies__stat-label">Team members</div>
            </div>
            <div className="strategies__stat">
              <div className="strategies__stat-number">8+</div>
              <div className="strategies__stat-label">Years experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
