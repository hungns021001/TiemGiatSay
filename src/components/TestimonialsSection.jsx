import { Star } from 'lucide-react';

import { reviews } from '../data/siteData';

function TestimonialsSection() {
  return (
    <section id="reviews" className="section-space testimonial-section">
      <div className="container">
        <div className="content-center narrow">
          <span className="section-kicker">Khách hàng nói gì</span>
          <h2>Niềm tin được xây dựng từ mỗi trải nghiệm giặt và phục vụ</h2>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <div key={review.name} className="glass-card review-card">
              <div className="review-stars">
                {[...Array(review.rating)].map((_, index) => (
                  <Star key={`${review.name}-${index}`} size={16} fill="currentColor" />
                ))}
              </div>
              <p>“{review.text}”</p>
              <div className="review-person">
                <div className="avatar">{review.name.charAt(0)}</div>
                <strong>{review.name}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
