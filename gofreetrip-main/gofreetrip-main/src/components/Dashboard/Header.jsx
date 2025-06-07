import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="menu-toggle-btn mr-15">
          <button id="menu-toggle" className="main-btn primary-btn btn-hover">
            <Menu size={20} />
          </button>
        </div>
        <div className="header-left">
          <div className="header-search d-none d-md-flex">
            <form action="#">
              <div className="form-group mb-0">
                <input type="text" placeholder="Search..." />
                <button type="submit">
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-link ml-20">
            <Link to="/dashboard/profile" className="d-flex align-items-center">
              <div className="header-right-link-icon">
                <img src="/gofreelogo.png" alt="GoFreeTrip" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              </div>
              <div className="header-right-link-text">
                <span className="d-block">GoFreeTrip</span>
                <span className="d-block">Premium Member</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 