import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero">
        <div className="hero__left">
          <span className="hero__badge">Digital Marketing</span>
          <h1 className="hero__title">
            Grow Your Business with Data-Driven Digital Marketing
          </h1>
          <p className="hero__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad minim veniam
          </p>
          <div className="hero__buttons">
            <button className="hero__btn hero__btn--primary">Read More</button>
            <button className="hero__btn hero__btn--secondary">Contact Us</button>
          </div>
        </div>

        <div className="hero__right">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=626&h=442&fit=crop&crop=top"
            alt="Digital Marketing Professional"
            className="hero__image"
          />
          <div className="hero__card">
            <h3 className="hero__card-title">
              Creating Impactful Digital Experiences for Your Business
            </h3>
            <div className="hero__card-rating">
              <span className="hero__card-score">9.6</span>
              <span className="hero__card-score-text">
                Lorem ipsum dolor sit amet, consectetur
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
          <div className="hero__cta-bottom">
            <span className="hero__cta-bottom-text">Join the Future of Marketing</span>
          </div>
        </div>
      </div>

      <div className="hero__bottom-row">
        <div className="hero__growth-card">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=180&fit=crop"
            alt="Team collaboration"
            className="hero__growth-image"
          />
          <div className="hero__growth-content">
            <h3>Maximize Your Growth with Our Expert Digital Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor incididunt ut labore
            </p>
            <button className="hero__growth-btn">Learn More</button>
          </div>
        </div>

        <div className="hero__success-wrapper">
          <div className="hero__success-card">
            <h3>Success Our Priority</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod</p>
          </div>
          <div className="hero__success-stats">
            <div className="hero__success-stat-item">
              <div className="hero__success-stat-number">453+</div>
              <div className="hero__success-stat-label">Creating impactful</div>
            </div>
            <div className="hero__success-stat-item">
              <div className="hero__success-stat-number">453+</div>
              <div className="hero__success-stat-label">Creating impactful</div>
            </div>
            <div className="hero__success-stat-item">
              <div className="hero__success-stat-number">453+</div>
              <div className="hero__success-stat-label">Creating impactful</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
