import '../styles/Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="features__inner">
        <p className="features__badge">Features</p>
        <h2 className="features__title">
          What Makes Our Digital Marketing Agency Stand Out ?
        </h2>
        <div className="features__cards">
          <div className="features__card">
            <h3 className="features__card-title">Data- Driven Marketing Strategies</h3>
            <div className="features__card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="12" width="4" height="8" rx="1" fill="#144530"/>
                <rect x="10" y="8" width="4" height="12" rx="1" fill="#144530"/>
                <rect x="17" y="4" width="4" height="16" rx="1" fill="#144530"/>
              </svg>
            </div>
          </div>
          <div className="features__card">
            <h3 className="features__card-title">Cutting- Edge SEO & Organic Growth</h3>
            <div className="features__card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18L9 12L13 16L21 6" stroke="#144530" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 6H21V10" stroke="#144530" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="features__card">
            <h3 className="features__card-title">Free Consultancy for Education Institutions</h3>
            <div className="features__card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6L12 2L22 6L12 10L2 6Z" stroke="#144530" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M6 8V14C6 14 9 17 12 17C15 17 18 14 18 14V8" stroke="#144530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="22" y1="6" x2="22" y2="14" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
