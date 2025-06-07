import React from 'react';
import UserDashboardLayout from '../layouts/UserDashboardLayout';
import BookingHeader from '../components/Dashboard/BookingHeader';
import BookingList from '../components/Dashboard/BookingList';
import Pagination from '../components/Dashboard/Pagination';

const BusBookings = () => {
  return (
    <UserDashboardLayout>
      <div className="container-fluid">
        <BookingHeader />
        <BookingList />
        {/* <Pagination /> */}
      </div>
    </UserDashboardLayout>
  );
};

export default BusBookings; 