import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

import { services } from '../data/siteData';

function ServicesSection() {
  return (
    <section id="services" className="section-space services-section">
      <div className="container section-heading">
        <div>
          <span className="section-kicker">Dịch vụ</span>
          <h2>Giải pháp giặt gọn gàng cho mọi loại đồ</h2>
        </div>
        <button className="secondary-button">Tất cả dịch vụ</button>
      </div>

      <div className="container service-grid">
        {services.map((service) => (
          <motion.article
            key={service.title}
            className={`service-card accent-${service.accent}`}
            whileHover={{ y: -10, rotateY: 3 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          >
            <div className="service-image" style={{ backgroundImage: `url(${service.image})` }} />
            <div className="service-content">
              <span className="service-badge">{service.price}</span>
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
              <a href="#booking">
                Tìm hiểu thêm <ChevronRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
