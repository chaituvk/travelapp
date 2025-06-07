import React from 'react';
import { 
  Ticket, 
  Bus, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  CreditCard,
  CheckCircle2,
  ArrowLeft,
  Smartphone,
  Mail,
  IndianRupee,
  BadgePercent,
  Download,
  Printer
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';

const BookingDetails = () => {
  const navigate = useNavigate();
  
  // Using the same data structure as BusFinalBook
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
    bookingId: "BK123456"
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          {/* <button 
            onClick={() => navigate(-1)}
            className="btn btn-link text-decoration-none text-primary"
          >
            <ArrowLeft size={20} className="me-2" />
            Back to Home
          </button> */}
          <div className='div'></div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-success btn-sm">
              <Download size={16} className="me-1" />
              Download Ticket
            </button>
            <button className="btn btn-outline-success btn-sm">
              <Printer size={16} className="me-1" />
              Print
            </button>
          </div>
        </div>

        <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
          <div className="card-header bg-primary text-white py-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Ticket size={24} className="me-2" />
                <h5 className="mb-0 text-light">Booking Details</h5>
              </div>
              <div className="badge bg-white text-primary px-2 py-1">
                Booking ID: #{bookingDetails.bookingId}
              </div>
            </div>
          </div>
          
          <div className="card-body p-3">
            {/* Booking Status */}
            <div className="alert alert-success d-flex align-items-center mb-3 rounded-2 border-0 py-2">
              <div className="booking-status-icon me-2">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h6 className="mb-0">Booking Confirmed</h6>
                <small>Your ticket has been successfully booked</small>
              </div>
            </div>

            <div className="row g-3">
              {/* Journey Details */}
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded-3">
                  <div className="card-header bg-white border-0 py-2">
                    <h6 className="card-title mb-0 text-primary">
                      <Bus size={20} className="me-2" />
                      Journey Details
                    </h6>
                  </div>
                  <div className="card-body p-3">
                    <div className="journey-path mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="journey-dot bg-primary"></div>
                        <div className="ms-2">
                          <h6 className="fw-bold mb-0">{bookingDetails.bus.from}</h6>
                          <small className="text-muted">Departure</small>
                        </div>
                      </div>
                      <div className="journey-line"></div>
                      <div className="d-flex align-items-center">
                        <div className="journey-dot bg-primary"></div>
                        <div className="ms-2">
                          <h6 className="fw-bold mb-0">{bookingDetails.bus.to}</h6>
                          <small className="text-muted">Arrival</small>
                        </div>
                      </div>
                    </div>
                    <div className="border-top pt-2">
                      <div className="d-flex align-items-center mb-2">
                        <MapPin size={16} className="text-primary me-2" />
                        <div>
                          <small className="fw-bold">Pickup Point</small>
                          <div className="text-muted small">{bookingDetails.pickup}</div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <MapPin size={16} className="text-primary me-2" />
                        <div>
                          <small className="fw-bold">Dropping Point</small>
                          <div className="text-muted small">{bookingDetails.drop}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 p-2 bg-light rounded-2">
                      <Calendar size={16} className="text-primary me-1" />
                      <small className="fw-bold">{bookingDetails.travelDate}</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passenger Details */}
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded-3">
                  <div className="card-header bg-white border-0 py-2">
                    <h6 className="card-title mb-0 text-primary">
                      <User size={20} className="me-2" />
                      Passenger Details
                    </h6>
                  </div>
                  <div className="card-body p-3">
                    <div className="table-responsive">
                      <table className="table table-sm table-hover align-middle mb-0">
                        <thead className="table-light">
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

              {/* Contact Details */}
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded-3">
                  <div className="card-header bg-white border-0 py-2">
                    <h6 className="card-title mb-0 text-primary">
                      <Mail size={20} className="me-2" />
                      Contact Details
                    </h6>
                  </div>
                  <div className="card-body p-3">
                    <div className="contact-info">
                      <div className="d-flex align-items-center mb-2">
                        <div className="contact-icon bg-primary text-white rounded-circle p-1 me-2">
                          <User size={16} />
                        </div>
                        <div>
                          <small className="text-muted">Name</small>
                          <div className="fw-bold small">{bookingDetails.contactDetails.name}</div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <div className="contact-icon bg-primary text-white rounded-circle p-1 me-2">
                          <Smartphone size={16} />
                        </div>
                        <div>
                          <small className="text-muted">Mobile</small>
                          <div className="fw-bold small">{bookingDetails.contactDetails.mobile}</div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <div className="contact-icon bg-primary text-white rounded-circle p-1 me-2">
                          <Mail size={16} />
                        </div>
                        <div>
                          <small className="text-muted">Email</small>
                          <div className="fw-bold small">{bookingDetails.contactDetails.email}</div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="contact-icon bg-primary text-white rounded-circle p-1 me-2">
                          <MapPin size={16} />
                        </div>
                        <div>
                          <small className="text-muted">State</small>
                          <div className="fw-bold small">{bookingDetails.contactDetails.state}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="col-md-6">
                <div className="card border-0 shadow-sm rounded-3">
                  <div className="card-header bg-white border-0 py-2">
                    <h6 className="card-title mb-0 text-primary">
                      <CreditCard size={20} className="me-2" />
                      Payment Details
                    </h6>
                  </div>
                  <div className="card-body p-3">
                    <div className="payment-info">
                      <div className="d-flex justify-content-between mb-2">
                        <small className="text-muted">Transaction ID</small>
                        <small className="fw-bold">#{bookingDetails.transactionId}</small>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <small className="text-muted">Payment Method</small>
                        <span className="badge bg-primary">{bookingDetails.paymentMode}</span>
                      </div>
                      <div className="payment-breakdown p-2 bg-light rounded-2 mb-2">
                        <div className="d-flex justify-content-between mb-1">
                          <small>Total Cost</small>
                          <small>₹{bookingDetails.totalCost}</small>
                        </div>
                        <div className="d-flex justify-content-between mb-1 text-primary">
                          <small>Discount</small>
                          <small>-₹{bookingDetails.discount}</small>
                        </div>
                        <div className="d-flex justify-content-between">
                          <small>GST</small>
                          <small>₹{bookingDetails.gst}</small>
                        </div>
                      </div>
                      <div className="final-amount p-2 bg-primary text-white rounded-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <small>Final Amount</small>
                          <h5 className="fw-bold text-light mb-0">₹{bookingDetails.finalAmount}</h5>
                        </div>
                      </div>
                    </div>
                    {bookingDetails.couponCode && (
                      <div className="mt-2 p-2 bg-light rounded-2">
                        <div className="d-flex align-items-center mb-1">
                          <BadgePercent size={16} className="text-primary me-1" />
                          <small className="fw-bold">Coupon Applied</small>
                        </div>
                        <div className="input-group input-group-sm">
                          <input
                            type="text"
                            className="form-control form-control-sm"
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
        </div>
      </div>

      <style jsx>{`
        .journey-path {
          position: relative;
          padding-left: 16px;
        }
        .journey-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          position: relative;
          z-index: 1;
        }
        .journey-line {
          position: absolute;
          left: 4px;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #198754;
          z-index: 0;
        }
        .contact-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card {
          transition: transform 0.2s;
        }
        .card:hover {
          transform: translateY(-3px);
        }
        .booking-status-icon {
          width: 36px;
          height: 36px;
          background-color: rgba(25, 135, 84, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .table > :not(caption) > * > * {
          padding: 0.5rem;
        }
        .badge {
          font-weight: 500;
          letter-spacing: 0.3px;
        }
        .btn-outline-success {
          border-width: 1px;
          font-weight: 500;
        }
        .btn-outline-success:hover {
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
};

export default BookingDetails; 