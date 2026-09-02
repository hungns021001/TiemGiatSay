import { Check } from 'lucide-react';

import { pricing } from '../data/siteData';

function PricingSection() {
  return (
    <section className="section-space pricing-section">
      <div className="container section-heading">
        <div>
          <span className="section-kicker">Bảng giá</span>
          <h2>Chọn gói phù hợp với nhu cầu của bạn</h2>
        </div>
      </div>

      <div className="container pricing-grid">
        {pricing.map((plan) => (
          <div key={plan.name} className={`pricing-card ${plan.highlight ? 'featured' : ''}`}>
            <div className="pricing-header">
              <h3>{plan.name}</h3>
              <div className="price-line">
                <strong>{plan.price}</strong>
                <span>/gói</span>
              </div>
            </div>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={16} /> {feature}
                </li>
              ))}
            </ul>
            <button className={plan.highlight ? 'primary-button full-width' : 'secondary-button full-width'}>
              Chọn gói này
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
