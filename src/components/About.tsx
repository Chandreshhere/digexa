import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/About.css';

const steps = [
  {
    number: '01',
    title: 'Customized Strategies',
    desc: 'Every business is unique. We craft tailored marketing and development plans that align with your specific goals and industry.',
  },
  {
    number: '02',
    title: 'Experienced Team',
    desc: 'Our specialists bring years of expertise in digital marketing, software development, and AI to deliver measurable outcomes.',
  },
  {
    number: '03',
    title: 'Client-Centric Approach',
    desc: 'We prioritize transparency, communication, and results — treating your growth as our own mission from day one.',
  },
];

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="about" ref={ref}>
      <span className="about__badge reveal">About Us</span>
      <div className="about__top reveal">
        <div className="about__top-left">
          <h2 className="about__title">
            Maximize Your Growth with Our Digital Expertise
          </h2>
        </div>
        <div className="about__top-right">
          <p className="about__top-desc">
            BeyondEdge brings together marketing strategy, cutting-edge development, and AI-driven solutions to help businesses scale faster and smarter in the digital era.
          </p>
        </div>
      </div>

      <div className="about__content">
        <div className="about__image reveal">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=580&h=500&fit=crop"
            alt="Team analyzing data"
          />
        </div>
        <div className="about__steps">
          {steps.map((step, i) => (
            <div key={i} className={`about__step reveal reveal-delay-${i + 1}`}>
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
