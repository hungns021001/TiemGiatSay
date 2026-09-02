import { useState } from 'react';

const initialForm = {
  name: '',
  phone: '',
  service: 'giat-say',
  method: 'delivery',
  time: 'sang',
  notes: '',
  address: '',
};

function BookingSection() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const payload = {
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      method: formData.method,
      time: formData.time,
      address: formData.method === 'delivery' ? formData.address : 'Nhận tại cửa hàng',
      notes: formData.notes,
      _subject: 'Đơn đặt lịch mới từ website Giặt Sấy Cảnh Hương',
      _captcha: 'false',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/hungns.mmo@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Không thể gửi yêu cầu');
      }

      setStatus({
        type: 'success',
        message: 'Đặt lịch thành công. Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.',
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Hệ thống chưa gửi được email. Vui lòng gọi trực tiếp qua số 0909 123 456.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="section-space booking-section">
      <div className="container booking-shell glass-card">
        <div className="booking-copy">
          <span className="section-kicker">Đặt lịch</span>
          <h2>Đặt lịch giặt đồ nhanh chóng</h2>
          <p>
            Chúng tôi giúp bạn tiết kiệm thời gian với lịch hẹn rõ ràng, nhận đồ tận nơi và báo tiến độ nhanh chóng.
          </p>

          <div className="booking-points">
            <div>
              <strong>09:00 - 21:00</strong>
              <span>Giờ làm việc</span>
            </div>
            <div>
              <strong>2h15</strong>
              <span>Thời gian xử lý trung bình</span>
            </div>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              <span>Họ tên</span>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nguyễn Văn A"
                required
              />
            </label>

            <label>
              <span>Số điện thoại</span>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="09xxxxxxxx"
                required
              />
            </label>

            <label>
              <span>Loại dịch vụ</span>
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="giat-say">Giặt Sấy</option>
                <option value="giat-giay">Giặt giày</option>
                <option value="giat-hop">Giặt rèm – sofa – thảm</option>
                <option value="khac">Dịch vụ khác</option>
              </select>
            </label>

            <label>
              <span>Hình thức</span>
              <select name="method" value={formData.method} onChange={handleChange}>
                <option value="delivery">Đưa tới</option>
                <option value="pickup">Tới lấy</option>
              </select>
            </label>

            {formData.method === 'delivery' ? (
              <label className="full-span">
                <span>Địa chỉ</span>
                <input
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Số nhà, đường, phường, quận..."
                />
              </label>
            ) : (
              <label>
                <span>Khung giờ nhận đồ</span>
                <select name="time" value={formData.time} onChange={handleChange}>
                  <option value="sang">Sáng (8:00 - 12:00)</option>
                  <option value="chieu">Chiều (13:00 - 17:00)</option>
                  <option value="toi">Tối (18:00 - 21:00)</option>
                </select>
              </label>
            )}

            <label className="full-span">
              <span>Ghi chú</span>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                placeholder="Ví dụ: Giặt riêng đồ trắng, không dùng nước xả, cần lấy đồ sớm..."
              />
            </label>
          </div>

          {status.message ? (
            <div className={`form-status ${status.type === 'success' ? 'success' : 'error'}`}>
              {status.message}
            </div>
          ) : null}

          <button type="submit" className="primary-button submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Đang gửi...' : 'Gửi đặt lịch'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingSection;
