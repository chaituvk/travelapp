import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Bus } from 'lucide-react';
import AuthLayout from '../layouts/AuthLayout';

const Login = () => {
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
            <h5 className="mb-1">Sign In</h5>
            <p>Sign in to Start Manage your GofreeTrio Account</p>
          </div>
        </div>
        <div className="card-body">
          <form>
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
            <div className="mt-3 mb-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                <div className="form-check d-flex align-items-center mb-2">
                  <input 
                    className="form-check-input mt-0" 
                    type="checkbox" 
                    value="" 
                    id="remembers_me"
                  />
                  <label className="form-check-label ms-2 text-gray-9 fs-14" htmlFor="remembers_me">
                    Remember Me
                  </label>
                </div>
                <Link to="/forgot-password" className="link-primary fw-medium fs-14 mb-2">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="mb-3">
              <Link 
              to="/dashboard"
                className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
              >
            Login
                <ArrowRight size={20} className="ms-2" />
              </Link>
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
                Don't you have an account? 
                <Link to="/register" className="link-primary fw-medium ms-1">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login; 