import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const pillRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const openMenu = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setMenuOpen(true);

    const tl = gsap.timeline({
      onComplete: () => { isAnimating.current = false; },
    });

    // Phase 1: Expand width
    tl.to(pillRef.current, {
      maxWidth: '64em',
      duration: 0.4,
      ease: 'power3.inOut',
    });

    // Phase 2: Show separator line
    tl.to(lineRef.current, {
      opacity: 1,
      duration: 0.15,
    }, '-=0.1');

    // Phase 3: Drop down panel
    tl.to(bottomRef.current, {
      gridTemplateRows: '1fr',
      duration: 0.5,
      ease: 'power3.out',
    }, '-=0.1');

    // Phase 4: Fade in panel content
    tl.fromTo('.nav-pill__panel', { opacity: 0, y: -10 }, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    }, '-=0.25');
  }, []);

  const closeMenu = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
        setMenuOpen(false);
      },
    });

    // Phase 1: Fade out panel content
    tl.to('.nav-pill__panel', {
      opacity: 0,
      y: -10,
      duration: 0.2,
      ease: 'power2.in',
    });

    // Phase 2: Collapse panel
    tl.to(bottomRef.current, {
      gridTemplateRows: '0fr',
      duration: 0.4,
      ease: 'power3.inOut',
    });

    // Phase 3: Hide line
    tl.to(lineRef.current, {
      opacity: 0,
      duration: 0.15,
    });

    // Phase 4: Shrink width back AFTER fully closed
    tl.to(pillRef.current, {
      maxWidth: '38em',
      duration: 0.4,
      ease: 'power3.inOut',
    });
  }, []);

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const handleNav = (path: string) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
        setMenuOpen(false);
        navigate(path);
        window.scrollTo(0, 0);
      },
    });

    tl.to('.nav-pill__panel', { opacity: 0, y: -10, duration: 0.15, ease: 'power2.in' });
    tl.to(bottomRef.current, { gridTemplateRows: '0fr', duration: 0.3, ease: 'power3.inOut' });
    tl.to(lineRef.current, { opacity: 0, duration: 0.1 });
    tl.to(pillRef.current, { maxWidth: '38em', duration: 0.3, ease: 'power3.inOut' });
  };

  return (
    <>
      {menuOpen && <div className="nav-backdrop" onClick={closeMenu} />}

      <div className="nav-pill-wrap">
        <div className="nav-pill" ref={pillRef}>
          <div className="nav-pill__bg" />
          <div className="nav-pill__outline" />

          {/* Top row */}
          <div className="nav-pill__top">
            <button className={`nav-pill__menu${menuOpen ? ' open' : ''}`} onClick={toggleMenu}>
              <div className="nav-pill__hamburger">
                <span />
                <span />
              </div>
              <span className="nav-pill__menu-label">Menu</span>
            </button>

            <div className="nav-pill__logo" onClick={() => { if (menuOpen) handleNav('/'); else { navigate('/'); window.scrollTo(0, 0); } }}>
              <span className="nav-pill__logo-beyond">Beyond</span>
              <span className="nav-pill__logo-edge">Edge</span>
            </div>

            <div className="nav-pill__buttons">
              <button className="nav-pill__btn nav-pill__btn--login" onClick={() => { if (menuOpen) handleNav('/contact'); else { navigate('/contact'); window.scrollTo(0, 0); } }}>Login</button>
              <button className="nav-pill__btn nav-pill__btn--join" onClick={() => { if (menuOpen) handleNav('/contact'); else { navigate('/contact'); window.scrollTo(0, 0); } }}>Join</button>
            </div>
          </div>

          {/* Separator */}
          <div className="nav-pill__line" ref={lineRef} />

          {/* Expanding panel */}
          <div className="nav-pill__bottom" ref={bottomRef}>
            <div className="nav-pill__bottom-inner">
              <div className="nav-pill__panel">
                {/* Explore — main nav */}
                <div className="nav-pill__col nav-pill__col--explore">
                  <span className="nav-pill__eyebrow">Explore</span>
                  <ul className="nav-pill__ul-explore">
                    <li><button onClick={() => handleNav('/services')}>Services</button></li>
                    <li><button onClick={() => handleNav('/work')}>Work</button></li>
                    <li><button onClick={() => handleNav('/about')}>About Us</button></li>
                    <li><button onClick={() => handleNav('/blog')}>Blog</button></li>
                    <li><button onClick={() => handleNav('/contact')}>Contact</button></li>
                    <li><button onClick={() => handleNav('/faq')}>FAQs</button></li>
                  </ul>
                  <div className="nav-pill__socials">
                    <a href="#" className="nav-pill__social" aria-label="LinkedIn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/></svg>
                    </a>
                    <a href="#" className="nav-pill__social" aria-label="Instagram">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
                    </a>
                    <a href="#" className="nav-pill__social" aria-label="X">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/></svg>
                    </a>
                  </div>
                </div>

                {/* Column 3: CTA */}
                <div className="nav-pill__col nav-pill__col--ad">
                  <span className="nav-pill__ad-badge">AVAILABLE <span className="nav-pill__ad-badge-highlight">TODAY</span></span>
                  <h3 className="nav-pill__ad-title">Digital Growth Consultancy</h3>
                  <div className="nav-pill__ad-image">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" alt="Consultancy" />
                  </div>
                  <button className="nav-pill__ad-btn" onClick={() => handleNav('/contact')}>More info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
