import React from 'react';
import UserDashboardLayout from '../layouts/UserDashboardLayout';
import PaymentList from '../components/Dashboard/PaymentList';

const PaymentsPage = () => {
  return (
    <UserDashboardLayout>
      <PaymentList />
    </UserDashboardLayout>
  );
};

export default PaymentsPage; 