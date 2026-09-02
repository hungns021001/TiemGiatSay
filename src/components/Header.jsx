import { Menu, WashingMachine, X } from 'lucide-react';
import { navItems } from '../data/siteData';

function Header({ mobileMenuOpen, setMobileMenuOpen }) {
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
          <button className="menu-button" onClick={() => setMobileMenuOpen((value) => !value)}>
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
