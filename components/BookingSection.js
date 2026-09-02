'use client';

import { useState } from 'react';

const initialState = {
  name: '',
  phone: '',
  service: 'giat-say',
  method: 'delivery',
  pickupDate: '',
  pickupTime: '08:00',
  address: '',
  notes: '',
};

export default function BookingSection() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (event.target.website?.value) return;

    if (!formData.name || !formData.phone || !formData.pickupDate || !formData.address) {
      setStatus({ type: 'error', message: 'Vui lòng điền đầy đủ thông tin bắt buộc.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const payload = {
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      method: formData.method,
      date: formData.pickupDate,
      time: formData.pickupTime,
      address: formData.address,
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
        throw new Error('Gửi form thất bại');
      }

      setStatus({ type: 'success', message: 'Đặt lịch thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.' });
      setFormData(initialState);
    } catch (error) {
      setStatus({ type: 'error', message: 'Hệ thống chưa gửi được email. Vui lòng gọi trực tiếp qua số 0909 123 456.' });
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
              <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Nguyễn Văn A" required />
            </label>

            <label>
              <span>Số điện thoại</span>
              <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="09xxxxxxxx" required />
            </label>

            <label>
              <span>Loại dịch vụ</span>
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="giat-say">Giặt sấy quần áo</option>
                <option value="giat-giay">Giặt giày & túi xách</option>
                <option value="giat-rerem">Giặt rèm – sofa – thảm</option>
                <option value="giat-do-dong-phuc">Đồ đồng phục công sở</option>
                <option value="khac">Dịch vụ khác</option>
              </select>
            </label>

            <label>
              <span>Hình thức</span>
              <select name="method" value={formData.method} onChange={handleChange}>
                <option value="delivery">Giao nhận tận nơi</option>
                <option value="pickup">Khách mang đến</option>
              </select>
            </label>

            <label>
              <span>Ngày lấy đồ</span>
              <input name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} required />
            </label>

            <label>
              <span>Khung giờ</span>
              <select name="pickupTime" value={formData.pickupTime} onChange={handleChange}>
                <option value="08:00">08:00 - 10:00</option>
                <option value="10:00">10:00 - 12:00</option>
                <option value="13:00">13:00 - 15:00</option>
                <option value="15:00">15:00 - 17:00</option>
                <option value="18:00">18:00 - 21:00</option>
              </select>
            </label>

            <label className="full-span">
              <span>Địa chỉ</span>
              <input name="address" type="text" value={formData.address} onChange={handleChange} placeholder="Số nhà, đường, phường, quận..." required />
            </label>

            <label className="full-span">
              <span>Ghi chú</span>
              <textarea name="notes" value={formData.notes} onChange={handleChange} rows="4" placeholder="Ví dụ: cần giặt riêng đồ trắng, có mùi dễ nhờ khử mùi, cần lấy sớm..." />
            </label>

            <input type="text" name="website" className="hidden-field" tabIndex="-1" autoComplete="off" />
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
