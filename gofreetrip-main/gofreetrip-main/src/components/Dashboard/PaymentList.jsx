import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar } from 'lucide-react';

const PaymentList = () => {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedPage, setSelectedPage] = useState(4);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const payments = [
    {
      id: "PA-1245",
      service: "VRL Travels",
      type: "Bus",
      paymentType: "Card",
      date: "15 May 2025, 10:00 AM",
      amount: 11569,
      status: "Completed"
    },
    {
      id: "PA-3215",
      service: "Orange Travels",
      type: "Bus",
      paymentType: "Paypal",
      date: "20 May 2025, 10:00 AM",
      amount: 12543,
      status: "Pending"
    },
    {
      id: "PA-4581",
      service: "SRS Travels",
      type: "Bus",
      paymentType: "Stripe",
      date: "27 May 2025, 10:00 AM",
      amount: 14697,
      status: "Completed"
    },
    {
      id: "PA-6545",
      service: "VRL Travels",
      type: "Bus",
      paymentType: "Card",
      date: "12 Jun 2025, 10:00 AM",
      amount: 10528,
      status: "Completed"
    },
    {
      id: "PA-5769",
      service: "Orange Travels",
      type: "Bus",
      paymentType: "Stripe",
      date: "18 Jun 2025, 10:00 AM",
      amount: 12297,
      status: "Completed"
    },
    {
      id: "PA-4742",
      service: "SRS Travels",
      type: "Bus",
      paymentType: "Card",
      date: "22 Jun 2025, 10:00 AM",
      amount: 18349,
      status: "Completed"
    },
    {
      id: "PA-9364",
      service: "VRL Travels",
      type: "Bus",
      paymentType: "Stripe",
      date: "16 Jul 2025, 10:00 AM",
      amount: 17875,
      status: "Completed"
    },
    {
      id: "PA-6184",
      service: "Orange Travels",
      type: "Bus",
      paymentType: "Paypal",
      date: "25 Jul 2025, 10:00 AM",
      amount: 15175,
      status: "Completed"
    },
    {
      id: "PA-8207",
      service: "SRS Travels",
      type: "Bus",
      paymentType: "Card",
      date: "14 Jul 2025, 10:00 AM",
      amount: 12766,
      status: "Cancelled"
    },
    {
      id: "PA-3854",
      service: "VRL Travels",
      type: "Bus",
      paymentType: "Paypal",
      date: "28 Aug 2025, 10:00 AM",
      amount: 13496,
      status: "Completed"
    }
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'badge-success';
      case 'Pending':
        return 'badge-secondary';
      case 'Cancelled':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  };

  return (
    <>
      <div className="card hotel-list">
        <div className="card-body p-0">
          <div className="list-header d-flex align-items-center justify-content-between flex-wrap">
            <h6>Payments</h6>
            <div className="d-flex align-items-center flex-wrap">
              <div className="input-icon-start me-2 position-relative">
                <span className="icon-addon">
                  <Search size={14} />
                </span>
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="custom-datatable-filter table-responsive">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>S.No</th>
                  <th>Transaction ID</th>
                  <th>Bus Service</th>
                  {/* <th>Service</th> */}
                  <th>Payment Type</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={payment.id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/dashboard/payments/${payment.id}`} className="link-primary fw-medium">
                        {payment.id}
                      </Link>
                    </td>
                    <td className="text-gray-9 fw-medium">{payment.service}</td>
                    {/* <td>{payment.type}</td> */}
                    <td>{payment.paymentType}</td>
                    <td>{payment.date}</td>
                    <td>₹{payment.amount.toLocaleString()}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(payment.status)} rounded-pill d-inline-flex align-items-center fs-10`}>
                        <i className="fa-solid fa-circle fs-5 me-1"></i>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div className="table-paginate d-flex justify-content-between align-items-center flex-wrap row-gap-3">
        <div className="value d-flex align-items-center">
          <span>Show</span>
          <select 
            className="form-select mx-2" 
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span>of {payments.length} Results</span>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <a href="javascript:void(0);"><span className="me-3"><i className="isax isax-arrow-left-2"></i></span></a>
          <nav aria-label="Page navigation">
            <ul className="paginations d-flex justify-content-center align-items-center">
              {[1, 2, 3, 4, 5].map((page) => (
                <li key={page} className="page-item me-2">
                  <a 
                    className={`page-link-1 d-flex justify-content-center align-items-center ${selectedPage === page ? 'active' : ''}`}
                    href="javascript:void(0);"
                    onClick={() => setSelectedPage(page)}
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="javascript:void(0);"><span className="ms-3"><i className="isax isax-arrow-right-3"></i></span></a>
        </div>
      </div> */}
    </>
  );
};

export default PaymentList; 