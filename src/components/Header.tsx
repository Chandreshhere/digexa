import { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`header${hidden ? ' header--hidden' : ''}${menuOpen ? ' header--menu-open' : ''}`}>
      <div className="header__inner">
        <div className="header__logo">Digexa</div>
        <div className="header__right">
          <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
            <a href="#home" className="header__nav-link" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="header__nav-link" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" className="header__nav-link" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#work" className="header__nav-link" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#contact" className="header__nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
            <button className="header__cta header__cta--mobile" onClick={() => setMenuOpen(false)}>Get Started</button>
          </nav>
          <button className="header__cta header__cta--desktop">Get Started</button>
          <button
            className={`header__hamburger${menuOpen ? ' header__hamburger--active' : ''}`}
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
