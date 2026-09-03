'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, Droplets, ShieldCheck, Sparkles } from 'lucide-react';

import { serviceHighlights, stats } from '../data/siteData';
import ThreeLaundryScene from './ThreeLaundryScene';

function getDailyOrderCount() {
  const now = new Date();
  const daySeed = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
  const seedValue = Array.from(daySeed).reduce((total, char) => total + char.charCodeAt(0), 0);
  const hourFactor = now.getHours() / 24;
  const randomBase = ((seedValue * 17 + now.getMinutes() * 7 + now.getSeconds()) % 100) / 100;
  const phase = Math.sin((now.getHours() + now.getMinutes() / 60) / 12 * Math.PI);

  return Math.max(18, Math.min(126, Math.round(42 + randomBase * 28 + phase * 18 + hourFactor * 10)));
}

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const currentOrderCount = getDailyOrderCount();

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">
            <Sparkles size={16} /> Dịch vụ giặt ủi cao cấp
          </span>

          <h1>
            Làm mới quần áo của bạn với <span>công nghệ hiện đại</span>
          </h1>

          <p>
            Trải nghiệm giặt sấy chuyên nghiệp, sạch sâu, thơm lâu và giao nhận tận nơi theo đúng lịch hẹn.
          </p>

          <div className="cta-row">
            <a className="primary-button" href="#booking">
              Đặt lịch giặt ngay <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#services">
              Xem dịch vụ
            </a>
          </div>

          <div className="mini-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, rotateX: 18 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="spotlight-card glass-card">
            <div className="card-top">
              <div>
                <p>Đơn hàng hôm nay</p>
                <strong>{currentOrderCount} bộ đồ</strong>
              </div>
              <span className="live-pill">Live</span>
            </div>

            <div className="washing-visual">
              <div className="hardware-scene">
                {!isMobile ? <ThreeLaundryScene /> : <div className="hero-fallback-image" />}
              </div>
              <div className="floating-tag tag-primary">
                <Droplets size={16} />
                <span>Khử mùi</span>
              </div>
              <div className="floating-tag tag-secondary">
                <ShieldCheck size={16} />
                <span>An toàn</span>
              </div>
            </div>

            <div className="card-bottom">
              <div>
                <span>Thời gian dự kiến</span>
                <strong>2 giờ 15 phút</strong>
              </div>
              <a className="icon-button" href="#booking" aria-label="Xem chi tiết">
                <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="mini-card glass-card trust-card">
            <div className="trust-badge">
              <Check size={14} />
            </div>
            <div>
              <p>Đánh giá</p>
              <strong>4.9/5</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container highlight-row">
        {serviceHighlights.map(({ icon: Icon, text }) => (
          <div key={text} className="highlight-item">
            <Icon size={18} />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
