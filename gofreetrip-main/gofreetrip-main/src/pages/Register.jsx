import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, Bus } from 'lucide-react';
import AuthLayout from '../layouts/AuthLayout';

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <AuthLayout>
      <div className="p-4 text-center">
        {/* <Bus size={48} className="text-primary mb-3" />
        <h4 className="mb-0">GofreeTrio</h4> */}
                   <img src="public/gofreelogo.png" className="logo" alt="Logo" style={{width:'200px'}} />

      </div>
      <div className="card authentication-card">
        <div className="card-header">
          <div className="text-center">
            <h5 className="mb-1">Create Account</h5>
            <p>Sign up to Start Manage your GofreeTrio Account</p>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <div className="input-icon">
                <span className="input-icon-addon">
                  <User size={20} />
                </span>
                <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Enter Full Name"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <div className="input-icon">
                <span className="input-icon-addon">
                  <Mail size={20} />
                </span>
                <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-icon">
                <span className="input-icon-addon">
                  <Lock size={20} />
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="form-control form-control-lg pass-input" 
                  placeholder="Enter Password"
                />
                <span 
                  className="input-icon-addon toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer' }}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </div>
            <div className="mb-3">
              <button 
                type="submit" 
                className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
              >
                Create Account
                <ArrowRight size={20} className="ms-2" />
              </button>
            </div>
            <div className="login-or mb-3">
              <span className="span-or">Or</span>
            </div>
            {/* <div className="d-flex align-items-center mb-3">
              <a href="javascript:void(0);" className="btn btn-light flex-fill d-flex align-items-center justify-content-center me-2">
                <img src="/assets/img/icons/google-icon.svg" className="me-2" alt="Google" />
                Google
              </a>
              <a href="javascript:void(0);" className="btn btn-light flex-fill d-flex align-items-center justify-content-center">
                <img src="/assets/img/icons/fb-icon.svg" className="me-2" alt="Facebook" />
                Facebook
              </a>
            </div> */}
            <div className="d-flex justify-content-center">
              <p className="fs-14">
                Already have an account? 
                <Link to="/login" className="link-primary fw-medium ms-1">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register; 