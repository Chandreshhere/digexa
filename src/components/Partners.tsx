import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Partners.css';

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
  onViewServices: () => void;
}

const Partners = ({ onViewServices }: PartnersProps) => {
  const ref = useScrollReveal();

  return (
    <section id="work" className="partners" ref={ref}>
      <div className="partners__inner">
        <h2 className="partners__title reveal">Our Trusted Partners & Global Affiliates</h2>
        <p className="partners__desc reveal reveal-delay-1">
          Collaboration is at the heart of what we do. We've teamed up with industry leaders and innovative tech giants to deliver world-class results for our clients.
        </p>
        <div className="partners__grid reveal reveal-delay-2">
          {partnerLogos.map((partner, i) => (
            <div key={i} className="partners__logo">
              <img src={partner.img} alt={partner.name} className="partners__logo-img" />
              <span className="partners__logo-text">{partner.name}</span>
            </div>
          ))}
        </div>
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
        <button className="partners__cta reveal reveal-delay-3" onClick={onViewServices}>View Our Services</button>
      </div>
    </section>
  );
};

export default Partners;
