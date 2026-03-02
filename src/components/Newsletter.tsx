import '../styles/Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__card">
        <div className="newsletter__content">
          <h2 className="newsletter__title">Subscribe Our Newsletter .</h2>
          <p className="newsletter__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua
          </p>
          <div className="newsletter__buttons">
            <button className="newsletter__btn--primary">Subscribe Now</button>
            <button className="newsletter__btn--secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
