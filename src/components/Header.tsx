import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">Digexa</div>
        <div className="header__right">
          <nav className="header__nav">
            <a href="#home" className="header__nav-link">Home</a>
            <a href="#about" className="header__nav-link">About</a>
            <a href="#services" className="header__nav-link">Services</a>
            <a href="#work" className="header__nav-link">Work</a>
            <a href="#contact" className="header__nav-link">Contact</a>
          </nav>
          <button className="header__cta">Get Started</button>
          <button className="header__hamburger" aria-label="Menu">
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
