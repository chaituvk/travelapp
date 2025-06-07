import React from "react";

const BookingConfirmation = ({ booking }) => {
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

  return (
    <div className="row">
      <div className="col-md-8">
        <div className="card p-4 mb-3">
          <h5 className="mb-3">Journey Details</h5>
          <p><strong>From:</strong> {bus.from} <strong>→</strong> <strong>To:</strong> {bus.to}</p>
          <p><strong>Date & Time:</strong> {travelDate}</p>
          <p><strong>Via:</strong> {bus.via || "NH-163"}</p>
          <p><strong>Pickup Point:</strong> {pickup}</p>
          <p><strong>Dropping Point:</strong> {drop}</p>
        </div>

        <div className="card p-4 mb-3">
          <h5 className="mb-3">Passenger & Seat Details</h5>
          {passengers.map((p, i) => (
            <div key={i} className="border-bottom pb-2 mb-2">
              <p><strong>Seat:</strong> {p.seat}</p>
              <p><strong>Name:</strong> {p.name}</p>
              <p><strong>Age:</strong> {p.age}</p>
              <p><strong>Gender:</strong> {p.gender}</p>
            </div>
          ))}
        </div>

        <div className="card p-4">
          <h5 className="mb-3">Contact Details</h5>
          <p><strong>Name:</strong> {contactDetails.name}</p>
          <p><strong>Mobile:</strong> {contactDetails.mobile}</p>
          <p><strong>Email:</strong> {contactDetails.email}</p>
          <p><strong>State:</strong> {contactDetails.state}</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-4 mb-3">
          <h5 className="mb-3">Fare Summary</h5>
          <p><strong>Total:</strong> ₹{totalCost}</p>
          <p><strong>Discount:</strong> ₹{discount}</p>
          <p><strong>GST:</strong> ₹{gst}</p>
          <p className="fw-bold text-primary"><strong>Final Amount:</strong> ₹{finalAmount}</p>

          <div className="mt-3">
            <label>Coupon Code</label>
            <input type="text" className="form-control mb-2" defaultValue={couponCode || ""} />
            <button className="btn btn-sm btn-outline-primary">Apply Coupon</button>
          </div>
        </div>

        <div className="card p-4">
          <h5 className="mb-3">Payment Mode</h5>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="payment" id="upi" value="UPI" defaultChecked={paymentMode === "UPI"} />
            <label className="form-check-label" htmlFor="upi">UPI</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="payment" id="card" value="Card" defaultChecked={paymentMode === "Card"} />
            <label className="form-check-label" htmlFor="card">Credit/Debit Card</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="payment" id="netbanking" value="NetBanking" defaultChecked={paymentMode === "NetBanking"} />
            <label className="form-check-label" htmlFor="netbanking">Net Banking</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
