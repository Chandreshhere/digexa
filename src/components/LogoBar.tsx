import '../styles/LogoBar.css';

const logos = [
  'Logoipsum Brand Standard',
  'LOGOIPSUM',
  'LOGOIPSUM',
  'LOGOIPSUM',
  'Laya',
  'LOGOIPSUM',
  'LOGOIPSUM',
  'LOGOIPSUM',
  'LOGOIPSUM',
  'Logoipsum',
];

const LogoBar = () => {
  return (
    <section className="logobar">
      <div className="logobar__inner">
        {logos.map((name, i) => (
          <div key={i} className="logobar__item">
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoBar;
