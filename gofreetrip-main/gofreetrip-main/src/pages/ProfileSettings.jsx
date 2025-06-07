import React from 'react';
import UserDashboardLayout from '../layouts/UserDashboardLayout';
import { Link } from 'react-router-dom';

const ProfileSettings = () => {
  return (
    <UserDashboardLayout>
      
            <div className="card settings mb-0">
              <div className="card-header">
                <h6>Settings</h6>
              </div>
              <div className="card-body pb-3">
                {/* Settings Content */}
                <div className="settings-content mb-3">
                  <h6 className="fs-16 mb-3">Basic Information</h6>
                  <div className="row gy-2">
                    <div className="col-lg-12">
                      <div className="d-flex align-items-center">
                        <img 
                          src="/gofreelogo.png" 
                          alt="GoFreeTrip" 
                          className="img-fluid avatar avatar-xxl br-10 flex-shrink-0 me-3"
                          style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                        />
                        <div>
                          <p className="fs-14 text-gray-6 fw-normal mb-2">
                            Recommended dimensions are typically 400 x 400 pixels.
                          </p>
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                              <label className="upload-btn" htmlFor="fileUpload">Upload</label>
                              <input type="file" id="fileUpload" style={{ display: 'none' }} />
                            </div>
                            <button className="btn btn-light btn-md">Remove</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" defaultValue="Rahul" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" defaultValue="Sharma" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" defaultValue="rahul.sharma@gmail.com" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <label className="form-label">Phone</label>
                        <input type="tel" className="form-control" defaultValue="+91 98765 43210" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="settings-content">
                  <h6 className="fs-16 mb-3">Address Information</h6>
                  <div className="row gy-2">
                    <div className="col-lg-12">
                      <div>
                        <label className="form-label">Address</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          defaultValue="Flat No. 302, Green Valley Apartments, Banjara Hills"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <label className="form-label">Country</label>
                        <input type="text" className="form-control" defaultValue="India" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <label className="form-label">State</label>
                        <select className="form-select">
                          <option value="">Select</option>
                          <option value="Telangana" selected>Telangana</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <label className="form-label">City</label>
                        <select className="form-select">
                          <option value="">Select</option>
                          <option value="Hyderabad" selected>Hyderabad</option>
                          <option value="Warangal">Warangal</option>
                          <option value="Karimnagar">Karimnagar</option>
                          <option value="Nizamabad">Nizamabad</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <label className="form-label">Postal Code</label>
                        <input type="text" className="form-control" defaultValue="500034" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-end">
                  <Link to="/dashboard/profile" className="btn btn-light me-2">Cancel</Link>
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </div>
            </div>
          
    </UserDashboardLayout>
  );
};

export default ProfileSettings; 