import { useNavigate } from 'react-router-dom';
import '../styles/Footer.css';

interface FooterProps {
  onContact: () => void;
}

const Footer = ({ onContact }: FooterProps) => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span>*</span> BeyondEdge
          </div>
          <p className="footer__brand-desc">
            A full-service digital consultancy helping agencies, institutions, and startups scale through strategic marketing, development, and intelligent automation.
          </p>
          <p className="footer__social-label">Follow Us :</p>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" fill="#A8FA00"/></svg>
            </a>
            <a href="#" className="footer__social" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="#A8FA00"/></svg>
            </a>
            <a href="#" className="footer__social" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#A8FA00" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#A8FA00" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#A8FA00"/></svg>
            </a>
          </div>
        </div>

        <div className="footer__nav-group">
          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <a href="#home" className="footer__col-link">Home</a>
            <a href="#about" className="footer__col-link">About Us</a>
            <a href="#services" className="footer__col-link">Services</a>
            <a href="#work" className="footer__col-link">Our Work</a>
          </div>

          <div className="footer__col footer__col--right">
            <h4 className="footer__col-title">Quick Links</h4>
            <a href="#services" className="footer__col-link">Pricing</a>
            <a href="#about" className="footer__col-link">FAQs</a>
            <button className="footer__col-link footer__col-link--btn" onClick={onContact}>Contact</button>
            <a href="#contact" className="footer__col-link">Newsletter</a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Contact Info</h4>
          <div className="footer__contact-item">
            <div className="footer__contact-icon">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5L10 10L17 5" stroke="#A8FA00" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M17 5C17 4 16 3 15 3H5C4 3 3 4 3 5V15C3 16 4 17 5 17H15C16 17 17 16 17 15V5Z" stroke="#A8FA00" strokeWidth="1.5"/>
              </svg>
            </div>
            <span className="footer__contact-text">+1 (555) 123-4567</span>
          </div>
          <div className="footer__contact-item">
            <div className="footer__contact-icon">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="14" height="12" rx="2" stroke="#A8FA00" strokeWidth="1.5"/>
                <path d="M3 7L10 12L17 7" stroke="#A8FA00" strokeWidth="1.5"/>
              </svg>
            </div>
            <span className="footer__contact-text">hello@beyondedge.com</span>
          </div>
          <div className="footer__contact-item">
            <div className="footer__contact-icon">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2C6.5 2 4 5 4 8C4 12 10 18 10 18C10 18 16 12 16 8C16 5 13.5 2 10 2Z" stroke="#A8FA00" strokeWidth="1.5"/>
                <circle cx="10" cy="8" r="2.5" stroke="#A8FA00" strokeWidth="1.5"/>
              </svg>
            </div>
            <span className="footer__contact-text">123 Innovation Drive, San Francisco, CA</span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">&copy; 2026 BeyondEdge. All rights reserved.</p>
          <div className="footer__bottom-links">
            <button className="footer__bottom-link footer__bottom-link--btn" onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
            <button className="footer__bottom-link footer__bottom-link--btn" onClick={() => navigate('/terms')}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
