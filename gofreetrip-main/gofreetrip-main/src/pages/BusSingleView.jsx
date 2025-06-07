import React from 'react';
import UserDashboardLayout from '../layouts/UserDashboardLayout';
import { SingleBookingView } from '../components/Dashboard/SingleBookingView';

const BusSingleView = () => {
  return (
    <UserDashboardLayout>
      <div className="container-fluid">
        <SingleBookingView />
      </div>
    </UserDashboardLayout>
  );
};

export default BusSingleView; 