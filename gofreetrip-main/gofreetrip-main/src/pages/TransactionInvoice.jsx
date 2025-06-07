import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import UserDashboardLayout from '../layouts/UserDashboardLayout';
import TransactionInvoicePDF from '../components/Dashboard/TransactionInvoicePDF';

const TransactionInvoice = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockPayment = {
      id: id,
      service: "VRL Travels",
      type: "Bus",
      paymentType: "Card",
      date: "15 May 2025, 10:00 AM",
      amount: 11569,
      status: "Completed"
    };
    setPayment(mockPayment);
  }, [id]);

  if (!payment) {
    return <div>Loading...</div>;
  }

  return (
    <UserDashboardLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center mb-4">
             
              <h5 className="mb-0">Transaction Invoice</h5>
            </div>
            <TransactionInvoicePDF payment={payment} />
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default TransactionInvoice; 