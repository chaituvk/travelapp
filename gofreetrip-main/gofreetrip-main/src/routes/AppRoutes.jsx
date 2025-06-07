import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BusList from '../pages/BusList';
import BusDetail from '../pages/BusDetail';
import Busconform from '../pages/Busconform';
import BusBookFinal from '../pages/BusBookFinal';
import Ticket from '../pages/Ticket';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import BusBookings from '../pages/BusBookings';
import BusSingleView from '../pages/BusSingleView';
import WishlistPage from '../pages/WishlistPage';
import PaymentsPage from '../pages/PaymentsPage';
import TransactionInvoice from '../pages/TransactionInvoice';
import TicketInvoice from '../pages/TicketInvoice';
import ProfilePage from '../pages/ProfilePage';
import ProfileSettings from '../pages/ProfileSettings';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      //auth
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Login />} />

      <Route path="/register" element={<Register />} />
      <Route path="/buslist" element={<BusList />} />
      <Route path="/busdetail/*" element={<BusDetail />} />
      <Route path="/booking" element={<Busconform />} />
      <Route path="/bookingconfirmation" element={<BusBookFinal />} />
      <Route path="/booking-details" element={<Ticket />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/dashboard/bus-bookings" element={<BusBookings />} />
      <Route path="/dashboard/bookings/:id" element={<BusSingleView />} />
      <Route path="/dashboard/wishlist" element={<WishlistPage />} />
      <Route path="/dashboard/payments" element={<PaymentsPage />} />
      <Route path="/dashboard/payments/:id" element={<TransactionInvoice />} />
      <Route path="/dashboard/tickets/:id" element={<TicketInvoice />} />
      <Route path="/dashboard/profile" element={<ProfilePage />} />
      <Route path="/dashboard/profile-settings" element={<ProfileSettings />} />
    </Routes>
  );
};

export default AppRoutes;
