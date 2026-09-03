'use client';

import Link from 'next/link';
import { RefreshCw, WashingMachine } from 'lucide-react';

export default function Error({ reset }) {
  return (
    <main className="error-page">
      <div className="error-card">
        <div className="error-icon">
          <WashingMachine size={34} />
        </div>
        <p className="section-kicker">Có lỗi xảy ra</p>
        <h1>Trang đang được làm mới</h1>
        <p className="error-copy">
          Hệ thống gặp sự cố tạm thời. Bạn có thể thử lại hoặc quay về trang chủ để tiếp tục đặt lịch.
        </p>
        <div className="error-actions">
          <button className="primary-button" onClick={() => reset()}>
            <RefreshCw size={17} /> Thử lại
          </button>
          <Link className="secondary-button" href="/#top">Về trang chủ</Link>
        </div>
      </div>
    </main>
  );
}
