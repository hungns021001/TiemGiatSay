'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, WashingMachine, X } from 'lucide-react';

import { navItems } from '../data/siteData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="topbar" id="top">
      <div className="container nav-wrap">
        <div className="brand-block">
          <div className="brand-mark">
            <WashingMachine size={24} />
          </div>
          <div>
            <p className="brand-name">Giặt Sấy Cảnh Hương</p>
            <span className="brand-tag">Laundry Studio</span>
          </div>
        </div>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a href={item.href} key={item.label} onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="primary-button nav-button" href="#booking">
            Đặt lịch ngay
          </a>
          <Link className="secondary-button nav-button-secondary" href="/blog">
            Blog
          </Link>
          <button className="menu-button" onClick={() => setMobileMenuOpen((value) => !value)} aria-label="Mở menu">
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
