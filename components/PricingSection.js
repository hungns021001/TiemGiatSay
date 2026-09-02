import { Check } from 'lucide-react';

import { pricingTable } from '../data/siteData';

export default function PricingSection() {
  return (
    <section id="pricing" className="section-space pricing-section">
      <div className="container">
        <div className="content-center narrow">
          <span className="section-kicker">Bảng giá</span>
          <h2>Giá dịch vụ minh bạch theo từng loại đồ</h2>
        </div>

        <div className="pricing-grid">
          {pricingTable.map((item) => (
            <div key={item.name} className={`pricing-card ${item.highlight ? 'featured' : ''}`}>
              <div className="pricing-header">
                <h3>{item.name}</h3>
                {item.highlight ? <span className="service-badge">Phổ biến</span> : null}
              </div>
              <div className="price-line">
                <strong>{item.price}</strong>
              </div>
              <p>{item.description}</p>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}><Check size={16} /> {feature}</li>
                ))}
              </ul>
              <a className="primary-button full-width" href="#booking">Đặt lịch</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
