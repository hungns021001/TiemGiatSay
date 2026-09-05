import { Star } from 'lucide-react';
import Image from 'next/image';

import { reviews } from '../data/siteData';
import SectionIntro from './SectionIntro';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="section-space testimonial-section">
      <div className="container">
        <SectionIntro kicker="Khách hàng nói gì" title="Niềm tin được xây dựng từ mỗi trải nghiệm giặt và phục vụ" />

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
                <div className="avatar">
                  <Image src={review.image} alt={review.name} width={40} height={40} />
                </div>
                <strong>{review.name}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
