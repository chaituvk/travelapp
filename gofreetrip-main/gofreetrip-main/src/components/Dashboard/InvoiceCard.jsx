import React from 'react';
import { Link } from 'react-router-dom';

const InvoiceCard = ({ image, title, invoiceNumber, date, amount, status }) => {
  return (
    <div className="card shadow-none mb-4">
      <div className="card-body p-2">
        <div className="d-flex align-items-center">
          <Link to="/bus-details" className="avatar avatar-lg rounded-circle flex-shrink-0 me-2">
            <img src={image} className="img-fluid rounded-circle" alt={title} />
          </Link>
          <div className="d-flex justify-content-between align-items-center flex-fill">
            <div>
              <h6 className="fs-16 fw-medium mb-1">
                <Link to="/bus-details">{title}</Link>
              </h6>
              <div className="d-flex align-items-center flex-wrap">
                <Link to="/invoices" className="fs-14 link-primary border-end pe-2 me-2 mb-0">{invoiceNumber}</Link>
                <p className="fs-14">Date: {date}</p>
              </div>
            </div>
            <div className="text-end">
              <h6 className="fw-medium mb-1">{amount}</h6>
              <p className={`fs-14 text-${status === 'Paid' ? 'success' : 'warning'}`}>{status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard; 