'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, WashingMachine, X } from 'lucide-react';

import { navItems } from '../data/siteData';

const headerOrder = ['Trang chủ', 'Dịch vụ', 'Quy trình', 'Bảng giá', 'Đánh giá', 'Blog', 'Liên hệ'];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const goHome = (event) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    if (window.location.pathname === '/') {
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    } else {
      router.push('/');
    }
  };

  return (
    <header className="topbar" id="top">
      <div className="container nav-wrap">
        <Link className="brand-block" href="/" onClick={goHome}>
          <div className="brand-mark">
            <WashingMachine size={24} />
          </div>
          <div>
            <p className="brand-name">Giặt Sấy Cảnh Hương</p>
            <span className="brand-tag">Laundry Studio</span>
          </div>
        </Link>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {headerOrder.map((label) => navItems.find((item) => item.label === label)).filter(Boolean).map((item) => (
            <a href={item.label === 'Trang chủ' ? '/' : item.href} key={item.label} onClick={item.label === 'Trang chủ' ? goHome : () => setMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="primary-button nav-button" href="#booking">
            Đặt lịch ngay
          </a>
          <button className="menu-button" onClick={() => setMobileMenuOpen((value) => !value)} aria-label="Mở menu">
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
