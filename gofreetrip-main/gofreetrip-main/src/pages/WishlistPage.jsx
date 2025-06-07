import React from 'react';
import UserDashboardLayout from '../layouts/UserDashboardLayout';
import Wishlist from '../components/Dashboard/Wishlist';

const WishlistPage = () => {
  return (
    <UserDashboardLayout>
      <Wishlist />
    </UserDashboardLayout>
  );
};

export default WishlistPage; 