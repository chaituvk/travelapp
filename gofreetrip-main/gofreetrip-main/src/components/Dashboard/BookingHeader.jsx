import React from 'react';
import { Calendar, Download } from 'lucide-react';

const BookingHeader = () => {
  return (
    <div className="card booking-header">
      <div className="card-body header-content d-flex align-items-center justify-content-between flex-wrap">
        <div>
          <h6>Bus Bookings</h6>
          <p className="fs-14 text-gray-6 fw-normal">No of Booking: 40</p>
        </div>

        <div className="d-flex align-items-center flex-wrap">
          <div className="input-icon-start me-3 position-relative">
            <span className="icon-addon">
              <Calendar size={14} />
            </span>
            <input 
              type="text" 
              className="form-control date-range bookingrange" 
              placeholder="Select" 
              defaultValue="Academic Year: 2024 / 2025"
            />
          </div>
          <div className="dropdown">
            <a 
              href="javascript:void(0);" 
              className="dropdown-toggle btn border text-gray-6 rounded fw-normal fs-14 d-inline-flex align-items-center" 
             
            >
              <Download size={14} className="me-2 text-gray-6" />Export
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHeader; 