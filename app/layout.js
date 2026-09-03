import './globals.css';
import './styles/theme.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/blog.css';
import Script from 'next/script';

import { GoogleAnalytics } from '../components/GoogleAnalytics';

export const metadata = {
  metadataBase: new URL('https://giatsaycanhhuong.vercel.app'),
  title: 'Giặt Sấy Cảnh Hương | Dịch vụ giặt ủi chuyên nghiệp',
  description: 'Dịch vụ giặt sấy, giặt giày, thảm sofa, chăn ga gối chuyên nghiệp tại Hà Tĩnh. Đặt lịch nhanh, giao nhận tiện lợi.',
  keywords: ['giặt sấy', 'giặt đồ', 'giặt giày', 'thảm sofa', 'laundry Hà Tĩnh'],
  openGraph: {
    title: 'Giặt Sấy Cảnh Hương',
    description: 'Dịch vụ giặt ủi chuyên nghiệp, sạch sâu, đúng giờ hẹn.',
    url: 'https://giatsaycanhhuong.vercel.app',
    siteName: 'Giặt Sấy Cảnh Hương',
    type: 'website',
    images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80'],
  },
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Giặt Sấy Cảnh Hương',
  image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
  telephone: '+84909123456',
  email: 'hungns.mmo@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hà Tĩnh',
    addressCountry: 'VN',
  },
  priceRange: '35.000đ - 199.000đ+',
  url: 'https://giatsaycanhhuong.vercel.app',
  openingHours: 'Mo-Su 07:30-21:00',
  description: 'Dịch vụ giặt sấy, giặt giày, giặt sofa và thảm chuyên nghiệp.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Script id="ld-json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
