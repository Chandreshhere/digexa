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

const Partners = () => {
  return (
    <section id="work" className="partners">
      <div className="partners__inner">
        <h2 className="partners__title">Our Trusted Partners & Global Affiliates</h2>
        <p className="partners__desc">
          Collaboration is at the heart of what we do. We've teamed up with industry leaders and innovative tech giants to deliver world-class results for our clients.
        </p>
        <div className="partners__grid">
          {partnerLogos.map((partner, i) => (
            <div key={i} className="partners__logo">
              <img src={partner.img} alt={partner.name} className="partners__logo-img" />
              <span className="partners__logo-text">{partner.name}</span>
            </div>
          ))}
        </div>
        <button className="partners__cta">View All Case Studies</button>
      </div>
    </section>
  );
};

export default Partners;
