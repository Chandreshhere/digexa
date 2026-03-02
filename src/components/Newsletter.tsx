import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Newsletter.css';

interface NewsletterProps {
  onSubscribe: () => void;
  onContact: () => void;
}

const Newsletter = ({ onSubscribe, onContact }: NewsletterProps) => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="newsletter" ref={ref}>
      <div className="newsletter__card reveal">
        <div className="newsletter__content">
          <h2 className="newsletter__title">Subscribe to Our Newsletter</h2>
          <p className="newsletter__desc">
            Stay ahead of the curve with weekly insights on digital strategy, marketing trends, and growth tips from our expert team.
          </p>
          <div className="newsletter__buttons">
            <button className="newsletter__btn--primary" onClick={onSubscribe}>Subscribe Now</button>
            <button className="newsletter__btn--secondary" onClick={onContact}>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
