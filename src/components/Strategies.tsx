import '../styles/Strategies.css';

const Strategies = () => {
  return (
    <section id="services" className="strategies">
      <div className="strategies__content">
        <div className="strategies__left">
          <span className="strategies__badge">Services</span>
          <h2 className="strategies__title">
            Tailored Strategies for Maximum Business Growth
          </h2>
          <p className="strategies__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <div className="strategies__features">
            <div className="strategies__feature">
              <div className="strategies__feature-icon">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6L10 2L18 6L10 10L2 6Z" stroke="#144530" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M5 7.5V13C5 13 7.5 15.5 10 15.5C12.5 15.5 15 13 15 13V7.5" stroke="#144530" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="strategies__feature-title">Driven Strategies</div>
                <div className="strategies__feature-desc">
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit ,
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
                <div className="strategies__feature-title">Digital Solution</div>
                <div className="strategies__feature-desc">
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit ,
                </div>
              </div>
            </div>
          </div>
          <p className="strategies__bottom-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="strategies__right">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=446&fit=crop"
            alt="Team Strategy Session"
            className="strategies__image"
          />
          <div className="strategies__stats">
            <div className="strategies__stat">
              <div className="strategies__stat-number">453+</div>
              <div className="strategies__stat-label">Creating impactful</div>
            </div>
            <div className="strategies__stat">
              <div className="strategies__stat-number">453+</div>
              <div className="strategies__stat-label">Creating impactful</div>
            </div>
            <div className="strategies__stat">
              <div className="strategies__stat-number">453+</div>
              <div className="strategies__stat-label">Creating impactful</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
