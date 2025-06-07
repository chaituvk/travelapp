import React from "react";
import { useState } from "react";
import {
  BusFront,
  UserRound,
  Mail,
  Smartphone,
  MapPin,
  BadgePercent,
  IndianRupee,
  CalendarDays,
  ArrowRight,
  Ticket,
  CreditCard,
  Landmark,
} from "lucide-react";
import { Link } from "react-router-dom";
import PaymentSuccessModal from './PaymentSuccessModal';
const BusFinalBook = () => {
  const booking = {
    contactDetails: {
      name: "Swarjan Raj",
      mobile: "9876543210",
      email: "swarjan@example.com",
      state: "Telangana",
    },
    passengers: [
      { seat: "A1", name: "Swarjan Raj", age: 28, gender: "Male" },
      { seat: "A2", name: "Sneha Raj", age: 26, gender: "Female" },
    ],
    bus: {
      from: "Hyderabad",
      to: "Warangal",
    //   via: "NH-163",
    },
    pickup: "Hyderabad Bus Station",
    drop: "Warangal Bus Stand",
    travelDate: "30 May 2025, 10:00 AM",
    totalCost: 1500,
    discount: 100,
    gst: 135,
    finalAmount: 1535,
    couponCode: "WELCOME100",
    paymentMode: "UPI",
  };

  const {
    contactDetails,
    passengers,
    bus,
    pickup,
    drop,
    travelDate,
    totalCost,
    discount,
    gst,
    finalAmount,
    couponCode,
    paymentMode,
  } = booking;
  const [showModal, setShowModal] = useState(false);
const handleConfirmPayment = () => {
    // Process payment logic...
    setShowModal(true); // show modal on success
  };
    return (
    <div className="container my-4">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8">
          {/* Journey Details */}
          <div className="card border-primary mb-3 shadow-sm">
            <div className="card-header bg-primary text-white">
              <BusFront className="me-2" size={18} />
              Journey Details
            </div>
            <div className="card-body">
              <p>
                <strong>From:</strong> {bus.from} <ArrowRight className="mx-2" size={16} />
                <strong>To:</strong> {bus.to}
              </p>
              <p><CalendarDays size={16} className="me-2" /> <strong>Date & Time:</strong> {travelDate}</p>
              {/* <p><MapPin size={16} className="me-2" /> <strong>Via:</strong> {bus.via}</p> */}
              <p><MapPin size={16} className="me-2" /> <strong>Pickup Point:</strong> {pickup}</p>
              <p><MapPin size={16} className="me-2" /> <strong>Dropping Point:</strong> {drop}</p>
            </div>
          </div>

          {/* Passenger Details */}
          <div className="card border-primary mb-3 shadow-sm overflow-hidden">
            <div className="card-header bg-primary text-white">
              <UserRound size={18} className="me-2" />
              Passenger & Seat Details
            </div>
            <div className="card-body p-0">
              <table className="table mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Seat</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {passengers.map((p, i) => (
                    <tr key={i}>
                      <td>{p.seat}</td>
                      <td>{p.name}</td>
                      <td>{p.age}</td>
                      <td>{p.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Details */}
          <div className="card border-primary mb-3 shadow-sm">
            <div className="card-header bg-primary text-white">
              <Mail size={18} className="me-2" />
              Contact Details
            </div>
            <div className="card-body">
              <p><UserRound size={16} className="me-2" /><strong>Name:</strong> {contactDetails.name}</p>
              <p><Smartphone size={16} className="me-2" /><strong>Mobile:</strong> {contactDetails.mobile}</p>
              <p><Mail size={16} className="me-2" /><strong>Email:</strong> {contactDetails.email}</p>
              <p><MapPin size={16} className="me-2" /><strong>State:</strong> {contactDetails.state}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="sticky-top" style={{ top: "80px" }}>
            {/* Fare Summary */}
            <div className="card border-success mb-3 shadow-sm">
              <div className="card-header bg-success text-white d-flex align-items-center">
  <IndianRupee size={18} className="me-2" />
  Fare Summary
</div>
<div className="card-body">
  <div className="row mb-2">
    <div className="col-6 text-muted">Total</div>
    <div className="col-6 text-end">₹{totalCost}</div>
  </div>
  <div className="row mb-2">
    <div className="col-6 text-muted">Discount</div>
    <div className="col-6 text-end text-success">-₹{discount}</div>
  </div>
  <div className="row mb-2">
    <div className="col-6 text-muted">GST</div>
    <div className="col-6 text-end">₹{gst}</div>
  </div>
  <hr />
  <div className="row mb-3 fw-bold text-primary">
    <div className="col-6">Final Amount</div>
    <div className="col-6 text-end">₹{finalAmount}</div>
  </div>

  {/* Coupon Code Section */}
  <div className="border rounded p-3 bg-light">
    <div className="mb-2 d-flex align-items-center">
      <BadgePercent size={16} className="me-2 text-secondary" />
      <strong className="text-secondary">Coupon Code</strong>
    </div>
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={couponCode || ""}
        placeholder="Enter code"
        readOnly
      />
      <button className="btn btn-primary" disabled>Apply</button>
    </div>
  </div>
</div>
            </div>
            <div className="card border-success shadow-sm">
              <div className="card-header bg-success text-white">
                <CreditCard size={18} className="me-2" />
                Payment Mode
              </div>
              <div className="card-body">
                {["UPI", "Card", "NetBanking"].map((mode) => (
                  <div className="form-check" key={mode}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id={mode.toLowerCase()}
                      value={mode}
                      checked={paymentMode === mode}
                      readOnly
                    />
                    <label className="form-check-label" htmlFor={mode.toLowerCase()}>
                      {mode === "UPI" && "UPI"}
                      {mode === "Card" && "Credit/Debit Card"}
                      {mode === "NetBanking" && "Net Banking"}
                    </label>
                  </div>
                ))}
                <button
                          type="submit"
                          className="btn mt-3 btn-primary search-btn rounded"
                           onClick={handleConfirmPayment}
                        >
                          Confirm Payment
                        </button>
              </div>
                    <PaymentSuccessModal show={showModal} onClose={() => setShowModal(false)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusFinalBook;
