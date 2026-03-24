import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const navigate = useNavigate();
  const footerRef = useRef<HTMLElement>(null);
  const bigTextRef = useRef<HTMLDivElement>(null);

  const go = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!bigTextRef.current || !footerRef.current) return;

    // Simple: slide up from below on scroll
    gsap.fromTo(bigTextRef.current,
      { yPercent: 50, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bigTextRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <footer className="ft" ref={footerRef}>
      {/* ===== TOP: Newsletter ===== */}
      <div className="ft__newsletter">
        <div className="ft__newsletter-inner">
          <h3 className="ft__newsletter-title">Subscribe to the BeyondEdge Newsletter</h3>
          <form className="ft__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="First name" className="ft__newsletter-input" />
            <input type="email" placeholder="yourname@email.com" className="ft__newsletter-input ft__newsletter-input--wide" />
            <button type="submit" className="ft__newsletter-btn">Get updates</button>
          </form>
          <label className="ft__newsletter-agree">
            <span className="ft__newsletter-checkbox" />
            I agree to the <a href="/privacy-policy">Privacy Policy</a>
          </label>
        </div>
      </div>

      {/* ===== MIDDLE: Nav columns + social ===== */}
      <div className="ft__nav">
        <div className="ft__nav-inner">
          <div className="ft__nav-col">
            <h4 className="ft__nav-heading">Pages</h4>
            <a href="/about" className="ft__nav-link" onClick={go('/about')}>About Us</a>
            <a href="/services" className="ft__nav-link" onClick={go('/services')}>Services</a>
            <a href="/work" className="ft__nav-link" onClick={go('/work')}>Collection</a>
            <a href="/blog" className="ft__nav-link" onClick={go('/blog')}>Blog</a>
            <a href="/contact" className="ft__nav-link" onClick={go('/contact')}>Contact</a>
          </div>
          <div className="ft__nav-col">
            <h4 className="ft__nav-heading">Community</h4>
            <a href="/blog" className="ft__nav-link" onClick={go('/blog')}>Updates</a>
            <a href="/about" className="ft__nav-link" onClick={go('/about')}>About BeyondEdge</a>
            <a href="/faq" className="ft__nav-link" onClick={go('/faq')}>FAQs</a>
            <a href="/contact" className="ft__nav-link" onClick={go('/contact')}>Support</a>
          </div>
          <div className="ft__nav-col">
            <h4 className="ft__nav-heading">Resources</h4>
            <a href="/work" className="ft__nav-link" onClick={go('/work')}>Case Studies</a>
            <a href="/services" className="ft__nav-link" onClick={go('/services')}>Pricing</a>
            <a href="/faq" className="ft__nav-link" onClick={go('/faq')}>FAQ</a>
            <a href="/blog" className="ft__nav-link" onClick={go('/blog')}>
              Blog <span className="ft__nav-badge">NEW</span>
            </a>
          </div>

          <div className="ft__nav-actions">
            <div className="ft__nav-buttons">
              <button className="ft__btn ft__btn--outline">Login</button>
              <button className="ft__btn ft__btn--green" onClick={go('/contact')}>Join BeyondEdge</button>
            </div>
            <div className="ft__socials">
              <a href="#" className="ft__social" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 7.5V13.5M4.5 4.5V4.51M7.5 13.5V7.5L10.5 13.5V7.5M13.5 7.5V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#" className="ft__social" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="3" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12.5" cy="5.5" r="0.75" fill="currentColor"/></svg>
              </a>
              <a href="#" className="ft__social" aria-label="X / Twitter">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3L7.5 9.75L3 15H4.5L8.25 10.5L11.25 15H15L10.5 8.25L15 3H13.5L9.75 7.5L6.75 3H3Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BIG TEXT: BeyondEdge — arched down → straight on scroll ===== */}
      <div className="ft__bigtext-wrapper">
        <div className="ft__bigtext" ref={bigTextRef}>
          {'Beyond'.split('').map((char, i) => (
            <span key={`b${i}`} className="ft-bigtext__char ft-bigtext__char--green">{char}</span>
          ))}
          {'Edge'.split('').map((char, i) => (
            <span key={`e${i}`} className="ft-bigtext__char ft-bigtext__char--blue">{char}</span>
          ))}
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="ft__bottom">
        <div className="ft__bottom-inner">
          <div className="ft__bottom-links">
            <a href="/privacy-policy" className="ft__bottom-link" onClick={go('/privacy-policy')}>PRIVACY</a>
            <a href="/terms" className="ft__bottom-link" onClick={go('/terms')}>T&Cs</a>
          </div>
          <span className="ft__bottom-copy">&copy; 2026 BEYONDEDGE. ALL RIGHTS RESERVED.</span>
          <span className="ft__bottom-credit">
            CREATED BY <span className="ft__bottom-credit-name">BEYONDEDGE</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
