import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span>*</span> Digexa
          </div>
          <p className="footer__brand-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
          <p className="footer__social-label">Follow Us :</p>
        </div>

        <div className="footer__nav-group">
          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <a href="#" className="footer__col-link">About Us</a>
            <a href="#" className="footer__col-link">About Us</a>
            <a href="#" className="footer__col-link">About Us</a>
            <a href="#" className="footer__col-link">Services</a>
          </div>

          <div className="footer__col footer__col--right">
            <h4 className="footer__col-title">Quick Link</h4>
            <a href="#" className="footer__col-link">Pages</a>
            <a href="#" className="footer__col-link">FAQs</a>
            <a href="#" className="footer__col-link">Contact</a>
            <a href="#" className="footer__col-link">Blog</a>
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
            <span className="footer__contact-text">+ 123-456-789</span>
          </div>
          <div className="footer__contact-item">
            <div className="footer__contact-icon">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="14" height="12" rx="2" stroke="#A8FA00" strokeWidth="1.5"/>
                <path d="M3 7L10 12L17 7" stroke="#A8FA00" strokeWidth="1.5"/>
              </svg>
            </div>
            <span className="footer__contact-text">example@grasy.com</span>
          </div>
          <div className="footer__contact-item">
            <div className="footer__contact-icon">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2C6.5 2 4 5 4 8C4 12 10 18 10 18C10 18 16 12 16 8C16 5 13.5 2 10 2Z" stroke="#A8FA00" strokeWidth="1.5"/>
                <circle cx="10" cy="8" r="2.5" stroke="#A8FA00" strokeWidth="1.5"/>
              </svg>
            </div>
            <span className="footer__contact-text">Address Line 01, Any City</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
