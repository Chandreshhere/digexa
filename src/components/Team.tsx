import '../styles/Team.css';

const teamMembers = [
  { name: 'John Bae', role: 'SEO& Organic Growth' },
  { name: 'John Bae', role: 'SEO& Organic Growth' },
  { name: 'John Bae', role: 'SEO& Organic Growth' },
  { name: 'John Bae', role: 'SEO& Organic Growth' },
];

const Team = () => {
  return (
    <section className="team">
      <div className="team__inner">
        <div className="team__header">
          <div className="team__header-left">
            <span className="team__badge">Our Team</span>
            <h2 className="team__title">Experts Driving Your Digital Success</h2>
          </div>
          <div className="team__header-right">
            <p className="team__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <button className="team__read-more">Read More</button>
          </div>
        </div>
        <div className="team__grid">
          {teamMembers.map((member, i) => (
            <div key={i} className="team__card">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=260&fit=crop&crop=top"
                alt={member.name}
                className="team__card-image"
              />
              <div className="team__card-socials">
                <div className="team__card-social"></div>
                <div className="team__card-social"></div>
                <div className="team__card-social"></div>
              </div>
              <div className="team__card-name">{member.name}</div>
              <div className="team__card-role">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
