import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="main-wrapper authentication-wrapper" >
      <div className="container-fuild">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
          <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
            <div className="col-xxl-4 col-lg-6 col-md-6 col-11 mx-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="coprright-footer">
        <p className="fs-14">
          Copyright &copy; {new Date().getFullYear()}. All Rights Reserved, 
          <a href="javascript:void(0);" className="text-primary fw-medium ms-1">
            GofreeTrio
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout; 