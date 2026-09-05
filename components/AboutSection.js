import { Check, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

const promises = [
  'Tư vấn rõ tình trạng và chất liệu trước khi giặt',
  'Phân loại đồ màu, đồ trắng và đồ cần chăm sóc riêng',
  'Kiểm tra, gấp gọn và bàn giao cẩn thận',
];

export default function AboutSection() {
  return (
    <section className="section-space about-section">
      <div className="container about-grid">
        <div className="about-image" role="img" aria-label="Không gian giặt sấy sạch sẽ" />
        <div className="about-copy">
          <span className="section-kicker"><MapPin size={16} /> Giặt sấy tại địa phương</span>
          <h2>Sạch sẽ, rõ ràng và chu đáo trong từng mẻ giặt</h2>
          <p>
            Cảnh Hương phục vụ gia đình, văn phòng và hộ kinh doanh với quy trình dễ hiểu,
            báo giá trước và luôn ưu tiên sự an tâm của khách hàng.
          </p>
          <ul className="about-promises">
            {promises.map((promise) => (
              <li key={promise}>
                <Check size={17} />
                <span>{promise}</span>
              </li>
            ))}
          </ul>
          <div className="about-note">
            <ShieldCheck size={20} />
            <div>
              <strong>Không giặt chung tùy tiện</strong>
              <span>Đồ được tiếp nhận và xử lý theo từng nhóm phù hợp.</span>
            </div>
          </div>
          <a className="secondary-button" href="#booking">
            <Sparkles size={17} /> Tư vấn nhu cầu giặt
          </a>
        </div>
      </div>
    </section>
  );
}
