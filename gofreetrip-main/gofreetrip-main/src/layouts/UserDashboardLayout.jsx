import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Calendar, Star, MessageSquare, 
  Heart, Wallet, CreditCard, User, Bell, Settings, LogOut 
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const UserDashboardLayout = ({ children }) => {
  const location = useLocation();
  const userAvatar = '/assets/img/users/user-01.jpg';
  const placeholderAvatar = 'https://placehold.co/100x100/e2e8f0/475569?text=User';

  return (
    <>
      <Header />
      <div className="content content-two pb-0" >
        <div className="container pb-4">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-3 col-lg-4 theiaStickySidebar">
              <div className="card user-sidebar mb-4">
                <div className="card-header user-sidebar-header">
                  <div className="profile-content rounded-pill">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center justify-content-center">
                        <img 
                          src={userAvatar} 
                          alt="user" 
                          className="img-fluid avatar avatar-lg rounded-circle me-1"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = placeholderAvatar;
                          }}
                        />
                        <div>
                          <h6 className="fs-16">Swarjan Raj</h6>
                          {/* <span className="fs-14 text-gray-6">Since 10 May 2025</span> */}
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center justify-content-center">
                          <Link to="/profile-settings" className="p-1 rounded-circle btn btn-light d-flex align-items-center justify-content-center">
                            <Settings size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body user-sidebar-body">
                  <ul>
                  <li className="mb-2">
                  <Link to="/dashboard" className={`d-flex align-items-center ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                        <LayoutDashboard size={20} className="me-2" /> Dashboard
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/dashboard/bus-bookings" className={`d-flex align-items-center ${location.pathname === '/bus-bookings' ? 'active' : ''}`}>
                        <Calendar size={20} className="me-2" /> My Bookings
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/dashboard/wishlist" className="d-flex align-items-center">
                        <Heart size={20} className="me-2" /> Wishlist
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/dashboard/payments" className="d-flex align-items-center">
                        <CreditCard size={20} className="me-2" /> Payments
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/dashboard/profile" className="d-flex align-items-center">
                        <User size={20} className="me-2" /> My Profile
                      </Link>
                    </li>
                   
                    <li className="mb-2">
                      <Link to="/dashboard" className="d-flex align-items-center">
                        <Settings size={20} className="me-2" /> Settings
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/logout" className="d-flex align-items-center pb-0">
                        <LogOut size={20} className="me-2" /> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Sidebar */}

            {/* Main Content */}
            <div className="col-xl-9 col-lg-8 theiaStickySidebar">
              {children}
            </div>
          </div>
        </div> 
        <Footer />
      </div>
      
    </>
  );
};

export default UserDashboardLayout; 