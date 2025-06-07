import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
            <div className="col">
              <div className="footer-widget">
                <h5>Quick Links</h5>
                <ul className="footer-menu">
                  <li><Link to="/">About Us</Link></li>
                  <li><Link to="/">Contact Us</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-widget">
                <h5>Popular Routes</h5>
                <ul className="footer-menu">
                  <li><Link to="/">Hyderabad → Warangal</Link></li>
                  <li><Link to="/">Hyderabad → Karimnagar</Link></li>
                  <li><Link to="/">Hyderabad → Nizamabad</Link></li>
                  <li><Link to="/">Hyderabad → Adilabad</Link></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-widget">
                <h5>Support</h5>
                <ul className="footer-menu">
                  <li><Link to="/">Help Center</Link></li>
                  <li><Link to="/">FAQs</Link></li>
                  <li><Link to="/">Cancellation Policy</Link></li>
                  <li><Link to="/">Refund Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-widget">
                <h5>Contact Us</h5>
                <div className="contact-info">
                  <p className="mb-2">
                    <i className="fa-solid fa-location-dot me-2"></i>
                    Hitech City, Madhapur, Hyderabad, Telangana - 500081
                  </p>
                  <p className="mb-2">
                    <i className="fa-solid fa-phone me-2"></i>
                    +91 98765 43210
                  </p>
                  <p className="mb-2">
                    <i className="fa-solid fa-envelope me-2"></i>
                    support@gofreetrip.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <p className="fs-14 mb-0">
                  Copyright © {new Date().getFullYear()}. All Rights Reserved, 
                  <Link to="/" className="text-primary fw-medium ms-1">GoFreeTrip</Link>
                </p>
                <div className="d-flex align-items-center">
                  <ul className="social-icon">
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="back-to-top">
        <a className="back-to-top-icon align-items-center justify-content-center d-flex" href="#top">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer; 