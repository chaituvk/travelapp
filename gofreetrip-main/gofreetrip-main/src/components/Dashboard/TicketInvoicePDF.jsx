import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
// import QRCode from 'qrcode.react';

const TicketInvoicePDF = () => {
  // Static data
  const bookingData = {
    id: "BK123456",
    journeyDate: "15 May 2025",
    status: "Confirmed",
    busDetails: {
      name: "VRL Travels",
      type: "Deluxe AC Sleeper (2+1)",
      registration: "TS 09 AB 1234",
      route: "Hyderabad → Bangalore",
      departure: "Hyderabad (10:00 PM)",
      arrival: "Bangalore (06:00 AM)",
      operatorName: "VRL Travels",
      operatorEmail: "info@vrltravels.com",
      operatorPhone: "+91 98765 43210"
    },
    passengerDetails: [
      {
        name: "Rahul Sharma",
        age: 28,
        gender: "Male",
        seatNumber: "A1",
        fare: 11569
      },
      {
        name: "Priya Sharma",
        age: 26,
        gender: "Female",
        seatNumber: "A2",
        fare: 11569
      }
    ],
    customerDetails: {
      name: "Rahul Sharma",
      email: "rahul.sharma@gmail.com",
      phone: "+91 98765 43210"
    },
    fareDetails: {
      baseFare: 23138,
      taxes: 1157,
      totalAmount: 24295
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="card mb-0">
          <div className="card-body">
            {/* Header */}
            <div className="border-bottom mb-4">
              <div className="row justify-content-between align-items-center flex-wrap row-gap-4">
                <div className="col-md-6">
                  <div className="mb-2">
                    <img src="/gofreelogo.png" className="img-fluid" alt="GoFreeTrip" style={{ height: '50px' }} />
                  </div>
                  <p className="fs-12">Hitech City, Madhapur, Hyderabad, Telangana - 500081</p>
                </div>
                <div className="col-md-6">
                  <div className="text-end mb-3">
                    <h6 className="text-default mb-1">Booking ID <span className="text-primary fw-medium">#{bookingData.id}</span></h6>
                    <p className="fs-14 mb-1 fw-medium">Journey Date: <span className="text-gray-9">{bookingData.journeyDate}</span></p>
                    <p className="fs-14 fw-medium">Status: <span className={`badge ${bookingData.status === 'Confirmed' ? 'badge-success' : 'badge-warning'} rounded-pill`}>{bookingData.status}</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bus Details */}
            <div className="border-bottom mb-4">
              <h6 className="fs-14 mb-3">Bus Details</h6>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <div className="bg-light p-3 rounded">
                        <img src="/assets/img/invoice/qr.svg" className="img-fluid" alt="QR" />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-1">Scan QR Code</h6>
                      <p className="fs-14 mb-0">Show this at boarding</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <p className="fs-14 mb-1">Bus Name</p>
                      <h6 className="mb-3">{bookingData.busDetails.name}</h6>
                    </div>
                    <div className="col-6">
                      <p className="fs-14 mb-1">Bus Type</p>
                      <h6 className="mb-3">{bookingData.busDetails.type}</h6>
                    </div>
                    <div className="col-6">
                      <p className="fs-14 mb-1">Registration</p>
                      <h6 className="mb-3">{bookingData.busDetails.registration}</h6>
                    </div>
                    <div className="col-6">
                      <p className="fs-14 mb-1">Route</p>
                      <h6 className="mb-3">{bookingData.busDetails.route}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Details */}
            <div className="border-bottom mb-4">
              <h6 className="fs-14 mb-3">Journey Details</h6>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <div className="bg-primary rounded-circle p-2">
                        <i className="fa-solid fa-location-dot text-white"></i>
                      </div>
                    </div>
                    <div>
                      <p className="fs-14 mb-1">Departure</p>
                      <h6 className="mb-0">{bookingData.busDetails.departure}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <div className="bg-primary rounded-circle p-2">
                        <i className="fa-solid fa-location-dot text-white"></i>
                      </div>
                    </div>
                    <div>
                      <p className="fs-14 mb-1">Arrival</p>
                      <h6 className="mb-0">{bookingData.busDetails.arrival}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Passenger Details */}
            <div className="border-bottom mb-4">
              <h6 className="fs-14 mb-3">Passenger Details</h6>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Seat No.</th>
                      <th>Fare</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingData.passengerDetails.map((passenger, index) => (
                      <tr key={index}>
                        <td>{passenger.name}</td>
                        <td>{passenger.age}</td>
                        <td>{passenger.gender}</td>
                        <td>{passenger.seatNumber}</td>
                        <td>₹{passenger.fare}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Information */}
            <div className="row border-bottom mb-4">
              <div className="col-md-6">
                <h6 className="fs-14 mb-3">Customer Contact</h6>
                <div>
                  <p className="fs-14 mb-1">Name: {bookingData.customerDetails.name}</p>
                  <p className="fs-14 mb-1">Email: {bookingData.customerDetails.email}</p>
                  <p className="fs-14 mb-0">Phone: {bookingData.customerDetails.phone}</p>
                </div>
              </div>
              <div className="col-md-6">
                <h6 className="fs-14 mb-3">Bus Operator Contact</h6>
                <div>
                  <p className="fs-14 mb-1">Name: {bookingData.busDetails.operatorName}</p>
                  <p className="fs-14 mb-1">Email: {bookingData.busDetails.operatorEmail}</p>
                  <p className="fs-14 mb-0">Phone: {bookingData.busDetails.operatorPhone}</p>
                </div>
              </div>
            </div>

            {/* Fare Details */}
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <h6 className="fs-14 mb-2">Terms and Conditions</h6>
                  <p className="fs-14 mb-2">1. Please arrive 30 minutes before departure</p>
                  <p className="fs-14 mb-2">2. Valid ID proof required for boarding</p>
                  <p className="fs-14 mb-0">3. Cancellation charges apply as per policy</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-end">
                  <div className="d-flex justify-content-end mb-2">
                    <p className="fs-14 mb-0 me-3">Base Fare:</p>
                    <p className="fs-14 mb-0">₹{bookingData.fareDetails.baseFare}</p>
                  </div>
                  <div className="d-flex justify-content-end mb-2">
                    <p className="fs-14 mb-0 me-3">Taxes:</p>
                    <p className="fs-14 mb-0">₹{bookingData.fareDetails.taxes}</p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <h6 className="mb-0 me-3">Total Amount:</h6>
                    <h6 className="mb-0">₹{bookingData.fareDetails.totalAmount}</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-4">
              <p className="fs-12 mb-1">This is a computer-generated ticket, no signature required.</p>
              <p className="fs-12 mb-0">© 2024 GoFreeTrip. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInvoicePDF; 