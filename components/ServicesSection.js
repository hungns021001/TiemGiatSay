import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

import { services } from '../data/siteData';

export default function ServicesSection() {
  return (
    <section id="services" className="section-space services-section">
      <div className="container section-heading">
        <div>
          <span className="section-kicker">Dịch vụ</span>
          <h2>Giải pháp giặt gọn gàng cho mọi loại đồ</h2>
        </div>
        <a className="secondary-button" href="#booking">Tất cả dịch vụ</a>
      </div>

      <div className="container service-grid">
        {services.map((service) => (
          <article
            key={service.title}
            className={`service-card accent-${service.accent}`}
          >
            <div className="service-image">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
              />
            </div>
            <div className="service-content">
              <span className="service-badge">{service.price}</span>
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
              <a href="#booking">
                Tìm hiểu thêm <ChevronRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
