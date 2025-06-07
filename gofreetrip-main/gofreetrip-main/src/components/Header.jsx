import React, { useEffect, useState } from 'react';
import {
  Menu,
  Moon,
  Sun,
  Heart,
  X,
  Plus,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
useEffect(() => {
    const header = document.getElementById('mainHeader');

    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="main-header">
      <header className="header-three wow fadeInDown" id="mainHeader">
        <div className="container">

          {/* Offcanvas Menu */}
          <div className={`offcanvas-info ${sidebarOpen ? 'show' : ''}`}>
            <div className="offcanvas-wrap">
              <div className="offcanvas-detail">
                <div className="offcanvas-head">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Link to="/" className="black-logo-responsive">
                      <img src="/gofreelogo.png" alt="logo" style={{width:"150px"}} />
                    </Link>
                    <Link to="/" className="white-logo-responsive">
                    <img src="/gofreelogo.png" alt="logo" style={{width:"150px"}} />
                    </Link>
                    <div className="offcanvas-close cursor-pointer" onClick={closeSidebar}>
                      <X className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>

                  {/* <div className="wishlist-info d-flex justify-content-between align-items-center">
                    <h6 className="fs-16 fw-medium">Wishlist</h6>
                    <div>
                      <Link to="/dashboard/wishlist" className="position-relative">
                        <Heart className="w-5 h-5 text-gray-700" />
                        <span className="count-icon bg-secondary text-gray-9">0</span>
                      </Link>
                    </div>
                  </div> */}
                </div>

                <div className="mobile-menu fix mb-3">
                  <ul className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <li className="has-submenu active">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/buslist">Bus</Link>
                     
                    </li>
                  </ul>
                </div>

                <div className="offcanvas__contact mt-4">
                  <Link to="/login" className="btn btn-primary w-100">Sign In</Link>
                </div>
              </div>
            </div>
          </div>

          <div className={`offcanvas-overlay ${sidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>

          {/* Header Navigation */}
          <div className="header-nav">
            <div className="main-menu-wrapper">
              <div className="navbar-logo">
                <Link className="logo-white header-logo" to="/">
                  <img src="/public/gofreelogo.png" className="logo" alt="Logo" style={{width:'150px'}} />
                </Link>
                <Link className="logo-dark header-logo" to="/">
                  <img src="/public/gofreelogo.png" className="logo" alt="Logo" style={{width:'150px'}} />
                </Link>
              </div>
 
              <nav id="mobile-menu">
                <ul className="main-nav d-none d-xl-flex">
                  <li className="has-submenu active">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="has-submenu">
                    <Link to="/buslist">Bus </Link>
                  
                  </li>
                </ul>
              </nav>

              <div className="header-btn d-flex align-items-center">
                <div className="me-3 theme-toggle-icons">
                  {/* <a href="#" id="light-mode-toggle"><Sun style={{ color: "#3a5a40" }} className="w-5 h-5 text-yellow-500 me-3" /></a> */}
                    <Link to="/dashboard" ><User style={{ color: "#3a5a40" }} className="w-5 h-5 text-yellow-500" /></Link>

                </div>
               
                <Link to="/login" className="btn btn-primary text-white">Sign In</Link>

                <div className="header__hamburger d-xl-none ms-3">
                  <div className="sidebar-menu cursor-pointer" onClick={toggleSidebar}>
                    <Menu className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </header>
    </div>
  );
};

export default Header;
