import React, { useState, useEffect } from "react";
import {
  Bus,
  ArrowRightLeft,
  Medal,
  Menu,
  MessageCircle,
  UserPlus,
  ShieldCheck,
} from 'lucide-react';
import SeatModal from "./SeatLayout";

export default function BookSide({ initialDepartureDate }) {
  const today = new Date().toISOString().slice(0, 10);

  const [departureDate, setDepartureDate] = useState(initialDepartureDate || today);
  const [dayName, setDayName] = useState("");

  useEffect(() => {
    if (departureDate) {
      const dateObj = new Date(departureDate);
      const options = { weekday: "long" };
      const day = dateObj.toLocaleDateString(undefined, options);
      setDayName(day);
    } else {
      setDayName("");
    }
  }, [departureDate]);

  return (
    <div className="col-xl-4 theiaStickySidebar">
      <div className="card shadow-none">
        <div className="card-body">
          <div className="d-flex align-items-center mb-4">
            <span className="btn btn-outline-light flex-fill">
              <span className="me-2"><Bus size={16} /></span>
              Hyderabad
            </span>
            <a href="#" className="way-icon badge badge-primary rounded-pill mx-2" onClick={e => e.preventDefault()}>
              <ArrowRightLeft size={16} />
            </a>
            <span className="btn btn-outline-light flex-fill">
              <span className="me-2"><Bus size={16} /></span>
              Warangal
            </span>
          </div>

          <div className="d-flex align-items-center justify-content-between bg-light-200 rounded p-3 mb-3">
            <p className="fs-13 fw-medium mb-0">Starts From</p>
            <h5 className="text-primary">
              ₹500 <span className="fs-14 text-default fw-normal">/ Person</span>
            </h5>
          </div>

          <div className="banner-form">
            <form className="form-info border-0">

              {/* From */}
<div className="form-item border rounded p-3 mb-3 w-100">
  <label className="form-label fs-14 text-default mb-1">From</label>
  <h5 className="mb-1">Hyderabad</h5>
  <p className="fs-12 mb-0">MGBS Bus Station</p>
</div>

{/* To */}
<div className="form-item border rounded p-3 mb-3 w-100">
  <label className="form-label fs-14 text-default mb-1">To</label>
  <h5 className="mb-1">Warangal</h5>
  <p className="fs-12 mb-0">Warangal Bus Station</p>
</div>

              {/* Departure */}
              <div className="form-item border rounded p-3 mb-3 w-100">
                <label className="form-label fs-14 text-default mb-1">Departure</label>
                <input
                  type="date"
                  className="form-control datetimepicker"
                  value={departureDate}
                  onChange={e => setDepartureDate(e.target.value)}
                />
                <p className="fs-12 mb-0">{dayName}</p>
              </div>

              
              <SeatModal />

              <div className="d-flex align-items-center justify-content-between mt-1">
                <h6 className="fs-14 fw-medium text-success">40 Seats Available on your Search</h6>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="card shadow-none mt-4">
        <div className="card-body">
          <form action="">
            <h5 className="mb-3 fs-18">Enquire Us</h5>
            <div className="py-1">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows={3}></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 btn-lg d-flex align-items-center justify-content-center"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>

      <div className="card shadow-none mt-4">
        <div className="card-body">
          <h5 className="fs-18 mb-3">Why Book With Us</h5>
          <div>
            <p className="d-flex align-items-center mb-3">
              <span className="avatar avatar-md bg-light rounded-circle text-dark me-2">
                <Medal size={20} />
              </span>
              Expertise and Experience
            </p>
            <p className="d-flex align-items-center mb-3">
              <span className="avatar avatar-md bg-light rounded-circle text-dark me-2">
                <Menu size={20} />
              </span>
              Tailored Services
            </p>
            <p className="d-flex align-items-center mb-3">
              <span className="avatar avatar-md bg-light rounded-circle text-dark me-2">
                <MessageCircle size={20} />
              </span>
              Comprehensive Planning
            </p>
            <p className="d-flex align-items-center mb-3">
              <span className="avatar avatar-md bg-light rounded-circle text-dark me-2">
                <UserPlus size={20} />
              </span>
              Client Satisfaction
            </p>
            <p className="d-flex align-items-center">
              <span className="avatar avatar-md bg-light rounded-circle text-dark me-2">
                <ShieldCheck size={20} />
              </span>
              24/7 Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
