import { process } from '../data/siteData';
import SectionIntro from './SectionIntro';

export default function ProcessSection() {
  return (
    <section id="process" className="section-space process-section">
      <div className="container">
        <SectionIntro kicker="Quy trình" title="4 bước để đồ của bạn sạch đẹp, an toàn và đúng hẹn" />

        <div className="process-grid">
          {process.map(({ icon: Icon, ...item }) => (
            <div key={item.step} className="process-item glass-card">
              <div className="process-step-head">
                <span className="step-number">{item.step}</span>
                <Icon className="process-icon" size={23} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
