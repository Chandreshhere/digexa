import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Expertise.css';

interface ExpertiseProps {
  onConsult: () => void;
}

const Expertise = ({ onConsult }: ExpertiseProps) => {
  const ref = useScrollReveal();

  return (
    <section className="expertise" ref={ref}>
      <div className="expertise__inner">
        <div className="expertise__left reveal">
          <h2 className="expertise__title">
            Specialized Expertise: Educational & IT Institutes
          </h2>
          <p className="expertise__desc">
            Tailored marketing consultancy for institutions that empower. We offer specialized strategies for educational centers and tech startups.
          </p>
        </div>
        <div className="expertise__cards">
          <div className="expertise__card reveal reveal-delay-1">
            <div className="expertise__card-icon">
              <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10L14 5L24 10L14 15L4 10Z" stroke="#144530" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M8 12V19C8 19 11 22 14 22C17 22 20 19 20 19V12" stroke="#144530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="24" y1="10" x2="24" y2="18" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="expertise__card-title">Educational Institutes</h3>
            <p className="expertise__card-desc">
              Comprehensive marketing consulting for universities, colleges, and online learning platforms. Includes a FREE initial consultation to boost your enrollment.
            </p>
            <button className="expertise__card-btn" onClick={onConsult}>Book Free Consultation</button>
          </div>
          <div className="expertise__card reveal reveal-delay-2">
            <div className="expertise__card-icon">
              <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="16" height="14" rx="2" stroke="#144530" strokeWidth="2" fill="none"/>
                <rect x="9" y="7" width="10" height="7" rx="1" stroke="#144530" strokeWidth="1.5" fill="none"/>
                <line x1="14" y1="18" x2="14" y2="22" stroke="#144530" strokeWidth="2"/>
                <line x1="10" y1="22" x2="18" y2="22" stroke="#144530" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="expertise__card-title">IT & Tech Startups</h3>
            <p className="expertise__card-desc">
              Growth strategies for software companies, IT schools, and tech innovators. Accelerate your market presence and lead generation.
            </p>
            <button className="expertise__card-btn" onClick={onConsult}>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
