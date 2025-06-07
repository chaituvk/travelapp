import React from 'react';
import UserDashboardLayout from '../layouts/UserDashboardLayout';
import { Edit2, Mail, Phone, MapPin, User, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <UserDashboardLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card shadow-sm border-0 mb-0">
              <div className="card-header bg-white border-0 d-flex align-items-center justify-content-between py-3">
                <h5 className="mb-0 fw-semibold">My Profile</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <Link to="/dashboard/profile-settings" className="btn btn-primary btn-sm d-flex align-items-center gap-2">
                    <Edit2 size={16} />
                    Edit Profile
                  </Link>
                </div>
              </div>
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card border-0 shadow-sm mb-4">
                      <div className="card-body text-center p-4">
                        <div className="position-relative d-inline-block mb-3">
                          <img 
                            src="/gofreelogo.png" 
                            alt="GoFreeTrip" 
                            className="rounded-circle" 
                            style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                          />
                          <div className="position-absolute bottom-0 end-0">
                            <div className="bg-primary rounded-circle p-2">
                              <Edit2 size={16} className="text-white" />
                            </div>
                          </div>
                        </div>
                        <h5 className="mb-1">Rahul Sharma</h5>
                        <p className="text-muted mb-3">Premium Member</p>
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-primary btn-sm">
                            <Edit2 size={16} className="me-1" />
                            Change Photo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <h6 className="fs-16 mb-4 fw-semibold">Basic Information</h6>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <div className="d-flex align-items-center gap-2">
                              <User size={18} className="text-primary" />
                              <div>
                                <p className="text-muted mb-1">Full Name</p>
                                <h6 className="mb-0">Rahul Sharma</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex align-items-center gap-2">
                              <Mail size={18} className="text-primary" />
                              <div>
                                <p className="text-muted mb-1">Email Address</p>
                                <h6 className="mb-0">rahul.sharma@gmail.com</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex align-items-center gap-2">
                              <Phone size={18} className="text-primary" />
                              <div>
                                <p className="text-muted mb-1">Phone Number</p>
                                <h6 className="mb-0">+91 98765 43210</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex align-items-center gap-2">
                              <Building size={18} className="text-primary" />
                              <div>
                                <p className="text-muted mb-1">Member Since</p>
                                <h6 className="mb-0">January 2024</h6>
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <h6 className="fs-16 mb-4 fw-semibold">Address Information</h6>
                        <div className="row g-3">
                          <div className="col-12">
                            <div className="d-flex align-items-start gap-2">
                              <MapPin size={18} className="text-primary mt-1" />
                              <div>
                                <p className="text-muted mb-1">Complete Address</p>
                                <h6 className="mb-0">Flat No. 302, Green Valley Apartments, Banjara Hills, Hyderabad - 500034</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex align-items-center gap-2">
                              <Building size={18} className="text-primary" />
                              <div>
                                <p className="text-muted mb-1">City</p>
                                <h6 className="mb-0">Hyderabad</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex align-items-center gap-2">
                              <Building size={18} className="text-primary" />
                              <div>
                                <p className="text-muted mb-1">State</p>
                                <h6 className="mb-0">Telangana</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default ProfilePage; 