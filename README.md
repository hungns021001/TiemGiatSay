# Giặt Sấy Cảnh Hương

Website dịch vụ giặt ủi chuyên nghiệp — giao diện hiện đại, có hiệu ứng 3D và animation, hỗ trợ đặt lịch giặt online.

🔗 Demo: https://giatsaycanhhuong.vercel.app/

## Công nghệ sử dụng

- **Framework**: Next.js (React)
- **Animation 2D**: Framer Motion
- **3D**: React Three Fiber + drei (`three@0.169.0`)
- **Icon**: Lucide React
- **Deploy**: Vercel

## Tính năng chính

- Hero section với mô hình máy giặt 3D xoay động (desktop), ảnh fallback tĩnh trên mobile
- Đặt lịch giặt online (chọn dịch vụ, ngày giờ, địa chỉ)
- Bảng giá theo từng loại dịch vụ giặt
- Danh sách dịch vụ, quy trình làm việc, đánh giá khách hàng
- Blog/tin tức hỗ trợ SEO
- Nút liên hệ nhanh (Zalo/điện thoại) nổi góc màn hình
- Responsive, tối ưu cho di động

## Cấu trúc thư mục (tham khảo)

```
├── app/                  # Các route/page của Next.js
├── components/           # React components (HeroSection, ThreeLaundryScene, ...)
├── data/                 # Dữ liệu tĩnh (siteData.js: stats, service highlights...)
├── public/
│   └── images/           # Ảnh tĩnh (bgr.webp, fallback images...)
└── styles/               # CSS toàn cục
```

## Cài đặt & chạy dự án

```bash
# Cài dependencies
npm install

# Chạy dev server
npm run dev

# Build production
npm run build
npm start
```

Mặc định chạy tại `http://localhost:3000`.

## Lưu ý kỹ thuật quan trọng

### Version `three.js`
Dự án dùng `@react-three/fiber@8.17.10`, **bắt buộc** giữ `three` ở bản `0.169.0` (không nâng lên 0.170+) để tránh lỗi animation đứng hình / render sai do không tương thích API nội bộ giữa các bản three.js:

```bash
npm ls three @react-three/fiber @react-three/drei
```

Nếu muốn dùng `three` bản mới hơn, cần nâng cấp đồng bộ lên `@react-three/fiber@9` (yêu cầu React 19).

### Scene 3D (`ThreeLaundryScene`)
- Chỉ render trên desktop (`!isMobile`), mobile dùng ảnh fallback tĩnh (`.hero-fallback-image`) để tối ưu hiệu năng.
- Nếu chỉnh sửa model, chú ý set `side={2}` (DoubleSide) cho các mesh dạng đĩa/mặt phẳng để tránh bị "biến mất" khi nhìn từ góc khuất lúc xoay.

### Ảnh nền (`background: cover`)
Khi đổi ảnh nền dùng `background-size: cover`, ảnh sẽ tự crop theo tỷ lệ khung hiển thị. Nếu bị mất chi tiết quan trọng, chỉnh vị trí neo ảnh thay vì đổi sang `contain`:

```css
background: url('/images/bgr.webp') center 30%/cover no-repeat;
```

## Việc cần làm tiếp (đề xuất)

- [ ] Thêm trạng thái đơn hàng (Đã nhận – Đang giặt – Đang sấy – Đang giao)
- [ ] Thêm sitemap.xml, robots.txt, structured data (LocalBusiness schema) cho SEO
- [ ] Kiểm tra Lighthouse score, tối ưu ảnh bằng `next/image`
- [ ] Thêm Google Analytics/Tag Manager
- [ ] Form validation + chống spam cho form đặt lịch/liên hệ
