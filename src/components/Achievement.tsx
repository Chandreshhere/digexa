import '../styles/Achievement.css';

const stats = [
  { number: '472+', title: 'Projects Completed', desc: 'Lorem ipsum dolor sit amet , consectetur adipiscing' },
  { number: '472+', title: 'Strong Client Relationships', desc: 'Lorem ipsum dolor sit amet , consectetur adipiscing' },
  { number: '472+', title: 'Expertise Across Multiple Channels', desc: 'Lorem ipsum dolor sit amet , consectetur adipiscing' },
  { number: '472+', title: 'Strong Client Relationships', desc: 'Lorem ipsum dolor sit amet , consectetur adipiscing' },
];

const Achievement = () => {
  return (
    <section className="achievement">
      <div className="achievement__inner">
        <span className="achievement__badge">Achievement</span>
        <h2 className="achievement__title">Proven Success in Driving Business Growth</h2>
        <p className="achievement__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam
        </p>
        <div className="achievement__stats">
          {stats.map((stat, i) => (
            <div key={i} className="achievement__stat">
              <div className="achievement__stat-number">{stat.number}</div>
              <div className="achievement__stat-title">{stat.title}</div>
              <div className="achievement__stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
