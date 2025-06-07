import React from 'react';
import UserDashboardLayout from '../layouts/UserDashboardLayout';
import TicketInvoicePDF from '../components/Dashboard/TicketInvoicePDF';

const TicketInvoice = () => {
  return (
    <UserDashboardLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center mb-4">
              <h5 className="mb-0">Bus Ticket</h5>
            </div>
            <TicketInvoicePDF />
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default TicketInvoice; 