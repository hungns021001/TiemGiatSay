import { process } from '../data/siteData';

export default function ProcessSection() {
  return (
    <section id="process" className="section-space process-section">
      <div className="container">
        <div className="content-center narrow">
          <span className="section-kicker">Quy trình</span>
          <h2>4 bước để đồ của bạn sạch đẹp, an toàn và đúng hẹn</h2>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <div key={item.step} className="process-item glass-card">
              <span className="step-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
