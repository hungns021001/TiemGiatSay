import { motion } from 'framer-motion';

import { featureCards } from '../data/siteData';

function FeatureSection() {
  return (
    <section className="section-space why-section">
      <div className="container content-center narrow">
        <span className="section-kicker">Vì sao chọn chúng tôi</span>
        <h2>Quy trình giặt ủi chuyên nghiệp, tối ưu cho mọi nhu cầu</h2>
        <p>
          Giặt Sấy Cảnh Hương mang đến giải pháp giặt sạch và tiện lợi cho gia đình, văn phòng và doanh nghiệp với sự tận tâm và công nghệ hiện đại.
        </p>
      </div>

      <div className="container feature-grid">
        {featureCards.map(({ icon: Icon, title, text }) => (
          <motion.article
            key={title}
            className="glass-card feature-card"
            whileHover={{ y: -8, rotateX: 4 }}
            transition={{ type: 'spring', stiffness: 240, damping: 20 }}
          >
            <div className="feature-icon">
              <Icon size={22} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
