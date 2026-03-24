import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/Partners.css';

gsap.registerPlugin(ScrollTrigger);

const partnerLogos = [
  { name: 'Google Cloud', img: 'https://cdn.svgporn.com/logos/google-cloud.svg' },
  { name: 'AWS', img: 'https://cdn.svgporn.com/logos/aws.svg' },
  { name: 'Microsoft', img: 'https://cdn.svgporn.com/logos/microsoft.svg' },
  { name: 'Stripe', img: 'https://cdn.svgporn.com/logos/stripe.svg' },
  { name: 'Digital Ocean', img: 'https://cdn.svgporn.com/logos/digital-ocean.svg' },
  { name: 'Shopify', img: 'https://cdn.svgporn.com/logos/shopify.svg' },
  { name: 'Slack', img: 'https://cdn.svgporn.com/logos/slack-icon.svg' },
  { name: 'Notion', img: 'https://cdn.svgporn.com/logos/notion-icon.svg' },
  { name: 'Figma', img: 'https://cdn.svgporn.com/logos/figma.svg' },
  { name: 'Vercel', img: 'https://cdn.svgporn.com/logos/vercel-icon.svg' },
  { name: 'Meta', img: 'https://cdn.svgporn.com/logos/meta-icon.svg' },
  { name: 'Salesforce', img: 'https://cdn.svgporn.com/logos/salesforce.svg' },
  { name: 'HubSpot', img: 'https://cdn.svgporn.com/logos/hubspot.svg' },
  { name: 'Mailchimp', img: 'https://cdn.svgporn.com/logos/mailchimp.svg' },
  { name: 'Zendesk', img: 'https://cdn.svgporn.com/logos/zendesk-icon.svg' },
];

const marqueeRows = [
  partnerLogos.slice(0, 5),
  partnerLogos.slice(5, 10),
  partnerLogos.slice(10, 15),
];

interface PartnersProps {
  onViewCases?: () => void;
}

const Partners = ({ onViewCases }: PartnersProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const splits: SplitType[] = [];
    const ctx = gsap.context(() => {
      // Title — word by word with blur
      const titleEl = sectionRef.current!.querySelector('.partners__title') as HTMLElement;
      if (titleEl) {
        const split = new SplitType(titleEl, { types: 'words' });
        splits.push(split);
        if (split.words) {
          gsap.fromTo(split.words,
            { opacity: 0, y: 25, filter: 'blur(6px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, stagger: 0.04, ease: 'power3.out',
              scrollTrigger: { trigger: titleEl, start: 'top 82%' } }
          );
        }
      }

      // Desc
      gsap.fromTo('.partners__desc',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.2,
          scrollTrigger: { trigger: '.partners__desc', start: 'top 85%' } }
      );

      // Marquee rows — staggered fade in from sides
      gsap.fromTo('.partners__marquee-row',
        { opacity: 0, x: (_i: number, el: Element) => {
          const idx = Array.from(el.parentElement!.children).indexOf(el);
          return idx % 2 === 0 ? -60 : 60;
        }},
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.partners__marquee', start: 'top 80%' } }
      );

      // CTA button
      gsap.fromTo('.partners__cta',
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 0.5,
          scrollTrigger: { trigger: '.partners__cta', start: 'top 90%' } }
      );
    }, sectionRef);

    return () => {
      splits.forEach(s => s.revert());
      ctx.revert();
    };
  }, []);

  return (
    <section id="work" className="partners" ref={sectionRef}>
      <div className="partners__inner">
        <h2 className="partners__title">Our Trusted Partners & Global Affiliates</h2>
        <p className="partners__desc">
          Collaboration is at the heart of what we do. We've teamed up with industry leaders and innovative tech giants to deliver world-class results for our clients.
        </p>
        <div className="partners__marquee">
          {marqueeRows.map((row, rowIndex) => (
            <div key={rowIndex} className="partners__marquee-row">
              <div
                className={`partners__marquee-track ${
                  rowIndex % 2 === 0
                    ? 'partners__marquee-track--left'
                    : 'partners__marquee-track--right'
                }`}
              >
                {[...row, ...row, ...row, ...row].map((partner, i) => (
                  <div key={i} className="partners__marquee-logo">
                    <img src={partner.img} alt={partner.name} className="partners__logo-img" />
                    <span className="partners__logo-text">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="partners__cta" onClick={onViewCases}>View All Case Studies</button>
      </div>
    </section>
  );
};

export default Partners;
