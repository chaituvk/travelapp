import React from 'react';
import { Bus, Calendar, MapPin, Users } from 'lucide-react';
import UserDashboardLayout from '../layouts/UserDashboardLayout';
import StatsCard from '../components/Dashboard/StatsCard';
import NotificationCard from '../components/Dashboard/NotificationCard';
import InvoiceCard from '../components/Dashboard/InvoiceCard';
import FilterDropdown from '../components/Dashboard/FilterDropdown';

const Dashboard = () => {
  const statsData = [
    { 
      icon: Bus, 
      value: '25', 
      label: 'Active Buses', 
      bgColor: 'bg-primary',
      description: 'Running across Telangana'
    },
    { 
      icon: MapPin, 
      value: '12', 
      label: 'Major Routes', 
      bgColor: 'bg-secondary',
      description: 'Covering key cities'
    },
    { 
      icon: Users, 
      value: '1.2K', 
      label: 'Daily Passengers', 
      bgColor: 'bg-purple',
      description: 'Happy travelers'
    }
  ];

  const notifications = [
    {
      icon: Bus,
      title: 'New Route Added',
      time: '2 hours ago',
      message: 'Hyderabad → Warangal route now available with premium buses',
      bgColor: 'bg-primary'
    },
    {
      icon: Calendar,
      title: 'Holiday Special',
      time: '1 day ago',
      message: 'Book your tickets for Sankranti festival with 10% discount',
      bgColor: 'bg-secondary'
    },
    {
      icon: Users,
      title: 'Group Booking',
      time: '2 days ago',
      message: 'Special rates available for group bookings of 10+ passengers',
      bgColor: 'bg-purple'
    }
  ];

  const invoices = [
    {
      image: '/assets/img/bus/bus-01.jpg',
      title: 'Hyderabad → Warangal',
      invoiceNumber: '#BK12565',
      date: '15 Jan 2024',
      amount: '₹450',
      status: 'Confirmed',
      busType: 'Deluxe AC Sleeper',
      seats: 'A1, A2'
    },
    {
      image: '/assets/img/bus/bus-02.jpg',
      title: 'Hyderabad → Karimnagar',
      invoiceNumber: '#BK12564',
      date: '20 Jan 2024',
      amount: '₹550',
      status: 'Pending',
      busType: 'Premium AC Seater',
      seats: 'B3, B4'
    }
  ];

  return (
    <UserDashboardLayout>
      <div className="alert alert-teal alert-dismissible d-flex align-items-center border-0 mb-4 fade show">
        <Bus size={20} className="me-2" /> 
        Welcome to GoFreeTrip! Book your bus tickets for all major routes in Telangana. Enjoy safe and comfortable travel with our premium bus services.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      
      <div className="row">
        {statsData.map((stat, index) => (
          <div key={index} className="col-xl-4">
            <StatsCard {...stat} />
          </div>
        ))}
      </div>

      <div className="row">
        {/* Notifications */}
        <div className="col-xl-5 d-flex">
          <div className="card shadow-none flex-fill">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6>Latest Updates</h6>
                <FilterDropdown 
                  title="All"
                  options={['All', 'Routes', 'Offers', 'Announcements']}
                />
              </div>
              {notifications.map((notification, index) => (
                <NotificationCard key={index} {...notification} />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="col-xl-7 d-flex">
          <div className="card shadow-none flex-fill">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6>Recent Bookings</h6>
                <FilterDropdown 
                  title="All"
                  options={['All', 'Confirmed', 'Pending', 'Cancelled']}
                />
              </div>
              {invoices.map((invoice, index) => (
                <InvoiceCard key={index} {...invoice} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default Dashboard; 