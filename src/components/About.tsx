import '../styles/About.css';

const steps = [
  {
    number: '01',
    title: 'Customized Strategies',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    number: '02',
    title: 'Experienced Team',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    number: '03',
    title: 'Client- Centric Approach',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <span className="about__badge">About Us</span>
      <div className="about__top">
        <div className="about__top-left">
          <h2 className="about__title">
            Maximize Your Growth with Our Digital Marketing
          </h2>
        </div>
        <div className="about__top-right">
          <p className="about__top-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
      </div>

      <div className="about__content">
        <div className="about__image">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=580&h=500&fit=crop"
            alt="Team analyzing data"
          />
        </div>
        <div className="about__steps">
          {steps.map((step, i) => (
            <div key={i} className="about__step">
              <div className="about__step-number">{step.number}</div>
              <div className="about__step-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
