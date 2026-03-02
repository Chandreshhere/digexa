import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Services.css';

interface ServicesProps {
  onLearnMore: (service: string) => void;
}

const Services = ({ onLearnMore }: ServicesProps) => {
  const ref = useScrollReveal();

  return (
    <section className="services" ref={ref}>
      <h2 className="services__title reveal">Beyond Marketing: Development & AI Services</h2>
      <div className="services__grid">
        <div className="services__card reveal reveal-delay-1">
          <div className="services__card-icon">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="20" width="100" height="70" rx="8" stroke="#144530" strokeWidth="3" fill="none"/>
              <line x1="10" y1="36" x2="110" y2="36" stroke="#144530" strokeWidth="2"/>
              <circle cx="22" cy="28" r="3" fill="#A8FA00"/>
              <circle cx="32" cy="28" r="3" fill="#144530" opacity="0.3"/>
              <circle cx="42" cy="28" r="3" fill="#144530" opacity="0.3"/>
              <text x="24" y="54" fontFamily="monospace" fontSize="11" fill="#144530" fontWeight="700">&lt;div&gt;</text>
              <text x="32" y="66" fontFamily="monospace" fontSize="10" fill="#A8FA00">&lt;h1/&gt;</text>
              <text x="32" y="78" fontFamily="monospace" fontSize="10" fill="#144530" opacity="0.5">&lt;p/&gt;</text>
              <text x="24" y="89" fontFamily="monospace" fontSize="11" fill="#144530" fontWeight="700">&lt;/div&gt;</text>
              <rect x="68" y="44" width="30" height="18" rx="3" stroke="#A8FA00" strokeWidth="2" fill="none"/>
              <rect x="68" y="68" width="20" height="10" rx="2" fill="#A8FA00" opacity="0.3"/>
              <rect x="92" y="68" width="8" height="10" rx="2" fill="#A8FA00" opacity="0.3"/>
              <rect x="30" y="96" width="60" height="6" rx="3" fill="#144530" opacity="0.15"/>
            </svg>
          </div>
          <h3 className="services__card-title">Web & Mobile Development</h3>
          <p className="services__card-desc">
            High-performance, SEO-optimized websites and custom mobile apps designed for seamless user experiences and maximum conversion rates.
          </p>
          <button className="services__card-btn" onClick={() => onLearnMore('web')}>Learn More</button>
        </div>

        <div className="services__card reveal reveal-delay-2">
          <div className="services__card-icon">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="52" r="28" stroke="#144530" strokeWidth="3" fill="none"/>
              <path d="M46 46 C46 46 52 38 60 38 C68 38 74 46 74 46" stroke="#144530" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M46 58 C46 58 52 66 60 66 C68 66 74 58 74 58" stroke="#144530" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="60" cy="52" r="6" fill="#A8FA00"/>
              <circle cx="60" cy="52" r="2.5" fill="#144530"/>
              <line x1="60" y1="24" x2="60" y2="14" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              <line x1="60" y1="80" x2="60" y2="90" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              <line x1="32" y1="52" x2="22" y2="52" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              <line x1="88" y1="52" x2="98" y2="52" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              <line x1="40" y1="32" x2="33" y2="25" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              <line x1="80" y1="72" x2="87" y2="79" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              <line x1="80" y1="32" x2="87" y2="25" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              <line x1="40" y1="72" x2="33" y2="79" stroke="#144530" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="60" cy="12" r="4" fill="#A8FA00" opacity="0.6"/>
              <circle cx="60" cy="92" r="4" fill="#A8FA00" opacity="0.6"/>
              <circle cx="20" cy="52" r="4" fill="#A8FA00" opacity="0.6"/>
              <circle cx="100" cy="52" r="4" fill="#A8FA00" opacity="0.6"/>
              <circle cx="31" cy="23" r="3" fill="#A8FA00" opacity="0.4"/>
              <circle cx="89" cy="81" r="3" fill="#A8FA00" opacity="0.4"/>
              <circle cx="89" cy="23" r="3" fill="#A8FA00" opacity="0.4"/>
              <circle cx="31" cy="81" r="3" fill="#A8FA00" opacity="0.4"/>
              <rect x="30" y="100" width="60" height="6" rx="3" fill="#144530" opacity="0.15"/>
            </svg>
          </div>
          <h3 className="services__card-title">AI & Automation Solutions</h3>
          <p className="services__card-desc">
            Future-proof your operations with custom AI integration. From smart chatbots to automated workflows, we make technology work for your growth.
          </p>
          <button className="services__card-btn" onClick={() => onLearnMore('ai')}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
