import { featureCards } from '../data/siteData';
import SectionIntro from './SectionIntro';

export default function FeatureSection() {
  return (
    <section className="section-space why-section">
      <div className="container">
        <SectionIntro kicker="Vì sao chọn chúng tôi" title="Quy trình giặt ủi chuyên nghiệp, tối ưu cho mọi nhu cầu">
          <p>
          Giặt Sấy Cảnh Hương mang đến giải pháp giặt sạch và tiện lợi cho gia đình, văn phòng và doanh nghiệp với sự tận tâm và công nghệ hiện đại.
          </p>
        </SectionIntro>
      </div>

      <div className="container feature-grid">
        {featureCards.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="glass-card feature-card"
          >
            <div className="feature-icon">
              <Icon size={22} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
