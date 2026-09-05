import { Clock3, MapPin, Phone, Shirt } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand-block footer-brand" href="/#top">
            <div className="brand-mark">
              <Shirt size={22} />
            </div>
            <div>
              <p className="brand-name">Giặt Sấy Cảnh Hương</p>
            </div>
          </Link>
          <p className="footer-copy">Dịch vụ giặt ủi chuyên nghiệp, hiện đại và thân thiện với người dùng.</p>
        </div>

        <div className="footer-list">
          <h4>Liên hệ</h4>
          <span><Phone size={16} /> 0367 123 568</span>
          <span><MapPin size={16} />Đối diện Đài Tưởng niệm Xã Hương Phố, Tỉnh Hà Tĩnh, Việt Nam</span>
          <span><Clock3 size={16} /> 7:00 - 21:00</span>
        </div>

        <div className="footer-list">
          <h4>Chính sách</h4>
          <a href="#">Bảo hành vải</a>
          <a href="#">Chính sách giao nhận</a>
          <a href="#">Điều khoản sử dụng</a>
        </div>
      </div>
    </footer>
  );
}
