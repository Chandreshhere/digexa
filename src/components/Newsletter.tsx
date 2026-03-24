import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Newsletter.css';

gsap.registerPlugin(ScrollTrigger);

interface NewsletterProps {
  onSubscribe?: () => void;
  onContact?: () => void;
}

const Newsletter = ({ onSubscribe, onContact }: NewsletterProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Card — scale up from small
      gsap.fromTo('.newsletter__card',
        { scale: 0.85, opacity: 0, y: 60 },
        { scale: 1, opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.newsletter__card', start: 'top 82%' } }
      );

      // Title
      gsap.fromTo('.newsletter__title',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.3,
          scrollTrigger: { trigger: '.newsletter__card', start: 'top 82%' } }
      );

      // Desc
      gsap.fromTo('.newsletter__desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.45,
          scrollTrigger: { trigger: '.newsletter__card', start: 'top 82%' } }
      );

      // Buttons — pop in
      gsap.fromTo('.newsletter__buttons button',
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(1.7)', delay: 0.6,
          scrollTrigger: { trigger: '.newsletter__card', start: 'top 82%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="newsletter" ref={sectionRef}>
      <div className="newsletter__card">
        <div className="newsletter__content">
          <h2 className="newsletter__title">Subscribe Our Newsletter .</h2>
          <p className="newsletter__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua
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
