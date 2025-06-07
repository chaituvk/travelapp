import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Ticket, 
  Bus, 
  Calendar, 
  MapPin, 
  User, 
  CreditCard,
  CheckCircle2,
  ArrowLeft,
  Smartphone,
  Mail,
  BadgePercent,
  Download,
  Printer
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export const SingleBookingView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const bookingDetails = {
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
      operator: "VRL Travels",
      busType: "Sleeper AC"
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
    transactionId: "TXN000123",
    bookingId: id || "BK123456",
    status: "Confirmed"
  };

  return (
    <>
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
         <div>
          
         </div>
          <div>
            <button className="btn btn-outline-primary me-2">
              <Download size={16} className="me-1" />
              Download
            </button>
            <Link to={`/dashboard/tickets/${id}`} className="btn btn-outline-primary">
              <Printer size={16} className="me-1" />
              Print
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="row">
          <div className="col-lg-7">
            {/* Booking Status */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h5 className="mb-1">Booking #{bookingDetails.bookingId}</h5>
                    <p className="text-muted mb-0">{bookingDetails.travelDate}</p>
                  </div>
                  <div className="badge bg-success">Confirmed</div>
                </div>
              </div>
            </div>

            {/* Journey Details */}
            <div className="card mb-4">
              <div className="card-header bg-white">
                <h6 className="mb-0">
                  <Bus size={20} className="me-2" />
                  Journey Details
                </h6>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <small className="text-muted d-block">From</small>
                      <strong>{bookingDetails.bus.from}</strong>
                      <div className="text-muted small">{bookingDetails.pickup}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <small className="text-muted d-block">To</small>
                      <strong>{bookingDetails.bus.to}</strong>
                      <div className="text-muted small">{bookingDetails.drop}</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <small className="text-muted d-block">Bus Type</small>
                      <strong>{bookingDetails.bus.busType}</strong>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <small className="text-muted d-block">Operator</small>
                      <strong>{bookingDetails.bus.operator}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Passenger Details */}
            <div className="card">
              <div className="card-header bg-white">
                <h6 className="mb-0">
                  <User size={20} className="me-2" />
                  Passenger Details
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Seat</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookingDetails.passengers.map((passenger, index) => (
                        <tr key={index}>
                          <td><span className="badge bg-primary">{passenger.seat}</span></td>
                          <td>{passenger.name}</td>
                          <td>{passenger.age}</td>
                          <td>{passenger.gender}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            {/* Contact Details */}
            <div className="card mb-4">
              <div className="card-header bg-white">
                <h6 className="mb-0">
                  <Mail size={20} className="me-2" />
                  Contact Details
                </h6>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <small className="text-muted d-block">Name</small>
                  <strong>{bookingDetails.contactDetails.name}</strong>
                </div>
                <div className="mb-3">
                  <small className="text-muted d-block">Mobile</small>
                  <strong>{bookingDetails.contactDetails.mobile}</strong>
                </div>
                <div className="mb-3">
                  <small className="text-muted d-block">Email</small>
                  <strong>{bookingDetails.contactDetails.email}</strong>
                </div>
                <div>
                  <small className="text-muted d-block">State</small>
                  <strong>{bookingDetails.contactDetails.state}</strong>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="card">
              <div className="card-header bg-white">
                <h6 className="mb-0">
                  <CreditCard size={20} className="me-2" />
                  Payment Details
                </h6>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <small className="text-muted d-block">Transaction ID</small>
                  <strong>#{bookingDetails.transactionId}</strong>
                </div>
                <div className="mb-3">
                  <small className="text-muted d-block">Payment Method</small>
                  <span className="badge bg-primary">{bookingDetails.paymentMode}</span>
                </div>
                <div className="border-top pt-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Total Cost</span>
                    <span>₹{bookingDetails.totalCost}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2 text-success">
                    <span>Discount</span>
                    <span>-₹{bookingDetails.discount}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>GST</span>
                    <span>₹{bookingDetails.gst}</span>
                  </div>
                  <div className="d-flex justify-content-between pt-2 border-top">
                    <strong>Final Amount</strong>
                    <strong>₹{bookingDetails.finalAmount}</strong>
                  </div>
                </div>
                {bookingDetails.couponCode && (
                  <div className="mt-3">
                    <small className="text-muted d-block">Coupon Applied</small>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value={bookingDetails.couponCode}
                        readOnly
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBookingView; 