import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TransactionInvoicePDF = ({ payment }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="card mb-0">
          <div className="card-body">
            <div className="border-bottom mb-4">
              <div className="row justify-content-between align-items-center flex-wrap row-gap-4">
                <div className="col-md-6">
                  <div className="mb-2 invoice-logo-dark">
                    <img src="/assets/img/logo-dark.svg" className="img-fluid" alt="GoFreeTrip" />
                  </div>
                  <div className="mb-2 invoice-logo-white">
                    <img src="/assets/img/logo.svg" className="img-fluid" alt="GoFreeTrip" />
                  </div>
                  <p className="fs-12">Hitech City, Madhapur, Hyderabad, Telangana - 500081</p>
                </div>
                <div className="col-md-6">
                  <div className="text-end mb-3">
                    <h6 className="text-default mb-1">Transaction ID <span className="text-primary fw-medium">#{payment.id}</span></h6>
                    <p className="fs-14 mb-1 fw-medium">Created Date : <span className="text-gray-9">{payment.date}</span></p>
                    <p className="fs-14 fw-medium">Status : <span className={`badge ${payment.status === 'Completed' ? 'badge-success' : payment.status === 'Pending' ? 'badge-secondary' : 'badge-danger'} rounded-pill`}>{payment.status}</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom mb-4">
              <div className="row align-items-center g-4">
                <div className="col-md-5">
                  <h6 className="mb-3 fw-semibold fs-14">From</h6>
                  <div>
                    <h6 className="mb-1">GoFreeTrip</h6>
                    <p className="fs-14 mb-1">Hitech City, Madhapur, Hyderabad, Telangana - 500081</p>
                    <p className="fs-14 mb-1">Email : <span className="text-gray-9">support@gofreetrip.com</span></p>
                    <p className="fs-14">Phone : <span className="text-gray-9">+91 98765 43210</span></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <h6 className="mb-3 fw-semibold fs-14">To</h6>
                  <div>
                    <h6 className="mb-1">Rahul Sharma</h6>
                    <p className="fs-14 mb-1">Email : <span className="text-gray-9">rahul.sharma@gmail.com</span></p>
                    <p className="fs-14">Phone : <span className="text-gray-9">+91 98765 43210</span></p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <h6 className="mb-1 fs-14 fw-medium">Payment Status</h6>
                    <span className={`badge ${payment.status === 'Completed' ? 'badge-success' : payment.status === 'Pending' ? 'badge-secondary' : 'badge-danger'} align-items-center fs-10 mb-4`}>
                      <i className="fa-solid fa-circle fs-5 me-1"></i>
                      {payment.status}
                    </span>
                    <div>
                      <img src="/assets/img/invoice/qr.svg" className="img-fluid" alt="QR" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="fw-medium mb-3">Invoice For : <span className="text-dark fw-medium">Bus Booking</span></p>
              <div className="table-responsive">
                <table className="table invoice-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="w-50 bg-light-400">Description</th>
                      <th className="text-center bg-light-400">Qty</th>
                      <th className="text-end bg-light-400">Cost</th>
                      <th className="text-end bg-light-400">Discount</th>
                      <th className="text-end bg-light-400">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h6 className="fs-14">Bus Booking ({payment.service})</h6>
                        <p className="fs-12 text-gray-9 mb-0">Hyderabad → Bangalore</p>
                        <p className="fs-12 text-gray-9 mb-0">Deluxe AC Sleeper (2+1)</p>
                        <p className="fs-12 text-gray-9">Seat Numbers: A1, A2</p>
                      </td>
                      <td className="text-gray fs-14 fw-medium text-center">2</td>
                      <td className="text-gray fs-14 fw-medium text-end">₹{payment.amount.toLocaleString()}</td>
                      <td className="text-gray fs-14 fw-medium text-end">₹0</td>
                      <td className="text-gray fs-14 fw-medium text-end">₹{payment.amount.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row border-bottom mb-3">
              <div className="col-md-7">
                <div className="py-4">
                  <div className="mb-3">
                    <h6 className="fs-14 mb-1">Terms and Conditions</h6>
                    <p className="fs-12">Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.</p>
                  </div>
                  <div className="mb-3">
                    <h6 className="fs-14 mb-1">Notes</h6>
                    <p className="fs-12">Please quote transaction ID when remitting funds.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="d-flex justify-content-between align-items-center border-bottom my-2 pe-3">
                  <p className="fs-14 fw-medium text-gray mb-0">Sub Total</p>
                  <p className="text-gray-9 fs-14 fw-medium mb-2">₹{payment.amount.toLocaleString()}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom my-2 pe-3">
                  <p className="fs-14 fw-medium text-gray mb-0">Discount (0%)</p>
                  <p className="text-gray-9 fs-14 fw-medium mb-2">₹0</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                  <p className="fs-14 fw-medium text-gray mb-0">GST (5%)</p>
                  <p className="text-gray-9 fs-14 fw-medium mb-2">₹{(payment.amount * 0.05).toLocaleString()}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                  <h6>Total Amount</h6>
                  <h6>₹{(payment.amount * 1.05).toLocaleString()}</h6>
                </div>
                <p className="fs-12">
                  Amount in Words : Indian Rupees {payment.amount.toLocaleString()} Only
                </p>
              </div>
            </div>
            <div className="row justify-content-end align-items-end text-end border-bottom mb-3 me-2">
              <div className="col-md-3">
                <div className="text-end">
                  <img src="/assets/img/invoice/sign.svg" className="img-fluid" alt="sign" />
                </div>
                <div className="text-end mb-3">
                  <h6 className="fs-14 fw-medium pe-3">GoFreeTrip</h6>
                  <p>Payment Manager</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-3 invoice-logo-dark">
                <img src="/assets/img/logo-dark.svg" className="img-fluid" alt="GoFreeTrip" />
              </div>
              <div className="mb-3 invoice-logo-white">
                <img src="/assets/img/logo.svg" className="img-fluid" alt="GoFreeTrip" />
              </div>
              <p className="text-gray-9 fs-12 mb-1">Payment Made Via {payment.paymentType}</p>
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-2">
                <p className="fs-12 mb-0">Bank Name : <span className="text-gray-9">HDFC Bank</span></p>
                <p className="fs-12 mb-0">Account Number : <span className="text-gray-9">45366287987</span></p>
                <p className="fs-12">IFSC : <span className="text-gray-9">HDFC0018159</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInvoicePDF; 