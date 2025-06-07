import React, { useState } from 'react';
import { Search, Eye, Bus } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BookingList = () => {
  const [selectedTicketType, setSelectedTicketType] = useState('Ticket Type');
  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [selectedSort, setSelectedSort] = useState('Recommended');
  
  // Dropdown visibility states
  const [showTicketTypeDropdown, setShowTicketTypeDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const bookings = [
    {
      id: 'BK123456',
      busName: 'VRL Travels',
      operator: 'VRL Travels',
      ticketType: 'Sleeper AC',
      passengers: [
        { seat: "A1", name: "Swarjan Raj", age: 28, gender: "Male" },
        { seat: "A2", name: "Sneha Raj", age: 26, gender: "Female" }
      ],
      from: "Ameerpet",
      to: "MG Road",
      pickup: "Ameerpet Bus Station",
      drop: "MG Road Bus Stand",
      travelDate: "10 Sep 2024",
      departureTime: "10:00 PM",
      price: 950,
      status: 'Upcoming',
      paymentMode: "UPI",
      transactionId: "TXN000123",
      rating: 4.0,
      features: ["Pushback Seats", "Charging Points", "On-time Service"]
    },
    {
      id: 'BK123457',
      busName: 'Orange Travels',
      operator: 'Orange Travels',
      ticketType: 'Semi-Sleeper AC',
      passengers: [
        { seat: "B1", name: "John Doe", age: 35, gender: "Male" },
        { seat: "B2", name: "Jane Doe", age: 32, gender: "Female" }
      ],
      from: "LB Nagar",
      to: "Jubilee Hills",
      pickup: "LB Nagar Bus Station",
      drop: "Jubilee Hills Bus Stand",
      travelDate: "15 Sep 2024",
      departureTime: "08:30 PM",
      price: 870,
      status: 'Completed',
      paymentMode: "Credit Card",
      transactionId: "TXN000124",
      rating: 3.8,
      features: ["Pushback Seats", "Charging Points", "On-time Service"]
    },
    {
      id: 'BK123458',
      busName: 'SRS Travels',
      operator: 'SRS Travels',
      ticketType: 'Non-AC Sleeper',
      passengers: [
        { seat: "C1", name: "Alice Smith", age: 45, gender: "Female" },
        { seat: "C2", name: "Bob Smith", age: 48, gender: "Male" },
        { seat: "C3", name: "Charlie Smith", age: 15, gender: "Male" }
      ],
      from: "Hyderabad",
      to: "Anantapur",
      pickup: "Hyderabad Bus Station",
      drop: "Anantapur Bus Stand",
      travelDate: "20 Sep 2024",
      departureTime: "11:45 PM",
      price: 750,
      status: 'Cancelled',
      paymentMode: "Debit Card",
      transactionId: "TXN000125",
      rating: 4.2,
      features: ["Pushback Seats", "Charging Points", "On-time Service"]
    }
  ];

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'upcoming':
        return 'badge-info';
      case 'completed':
        return 'badge-success';
      case 'cancelled':
        return 'badge-danger';
      default:
        return 'badge-info';
    }
  };

  const handleTicketTypeSelect = (type) => {
    setSelectedTicketType(type);
    setShowTicketTypeDropdown(false);
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setShowStatusDropdown(false);
  };

  const handleSortSelect = (sort) => {
    setSelectedSort(sort);
    setShowSortDropdown(false);
  };

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setShowTicketTypeDropdown(false);
        setShowStatusDropdown(false);
        setShowSortDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="card hotel-list">
      <div className="card-body p-0">
        <div className="list-header d-flex align-items-center justify-content-between flex-wrap">
          <h6>Booking List</h6>
          <div className="d-flex align-items-center flex-wrap">
            <div className="input-icon-start me-2 position-relative">
              <span className="icon-addon">
                <Search size={14} />
              </span>
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className="dropdown me-3">
              <button 
                className="btn btn-light dropdown-toggle text-gray-6 rounded border d-inline-flex align-items-center" 
                type="button"
                onClick={() => setShowTicketTypeDropdown(!showTicketTypeDropdown)}
              >
                {selectedTicketType}
              </button>
              <ul className={`dropdown-menu ${showTicketTypeDropdown ? 'show' : ''}`}>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => handleTicketTypeSelect('Sleeper AC')}
                  >
                    Sleeper AC
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => handleTicketTypeSelect('Semi-Sleeper AC')}
                  >
                    Semi-Sleeper AC
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => handleTicketTypeSelect('Non-AC Sleeper')}
                  >
                    Non-AC Sleeper
                  </button>
                </li>
              </ul>
            </div>
            <div className="dropdown me-3">
              <button 
                className="btn btn-light dropdown-toggle text-gray-6 rounded border d-inline-flex align-items-center" 
                type="button"
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
              >
                {selectedStatus}
              </button>
              <ul className={`dropdown-menu ${showStatusDropdown ? 'show' : ''}`}>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => handleStatusSelect('Upcoming')}
                  >
                    Upcoming
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => handleStatusSelect('Completed')}
                  >
                    Completed
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => handleStatusSelect('Cancelled')}
                  >
                    Cancelled
                  </button>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center sort-by">
              <span className="fs-14 text-gray-9 fw-medium">Sort By:</span>
              <div className="dropdown">
                <button 
                  className="btn btn-light dropdown-toggle text-gray-6 rounded d-inline-flex align-items-center" 
                  type="button"
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                >
                  {selectedSort}
                </button>
                <ul className={`dropdown-menu ${showSortDropdown ? 'show' : ''}`}>
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={() => handleSortSelect('Recently Added')}
                    >
                      Recently Added
                    </button>
                  </li>
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={() => handleSortSelect('Ascending')}
                    >
                      Ascending
                    </button>
                  </li>
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={() => handleSortSelect('Descending')}
                    >
                      Descending
                    </button>
                  </li>
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={() => handleSortSelect('Last Month')}
                    >
                      Last Month
                    </button>
                  </li>
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={() => handleSortSelect('Last 7 Days')}
                    >
                      Last 7 Days
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-datatable-filter table-responsive">
          <table className="table datatable">
            <thead className="thead-light">
              <tr>
                <th>ID</th>
                <th>Bus</th>
                <th>Ticket</th>
                <th>From - To</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>
                    <span className="link-primary fw-medium">
                      #{booking.id}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="/bus-details" className="avatar avatar-lg bg-light-200 rounded-circle d-flex align-items-center justify-content-center">
                        <Bus size={24} className="text-primary" />
                      </Link>
                      <div className="ms-2">
                        <p className="text-dark mb-0 fw-medium fs-14">
                          <Link to="/bus-details">{booking.busName}</Link>
                        </p>
                        <span className="fs-14 fw-normal text-gray-6">{booking.operator}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 className="fs-14 mb-1">{booking.ticketType}</h6>
                    <span className="fs-14 fw-normal text-gray-6">
                      {booking.passengers.length} {booking.passengers.length > 1 ? 'Passengers' : 'Passenger'}
                    </span>
                  </td>
                  <td>{`${booking.from} - ${booking.to}`}</td>
                  <td>₹{booking.price}</td>
                  <td>{booking.travelDate}</td>
                  <td>
                    <span className={`badge ${getStatusBadgeClass(booking.status)} rounded-pill d-inline-flex align-items-center fs-10`}>
                      <i className="fa-solid fa-circle fs-5 me-1"></i>{booking.status}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link 
                        to={`/dashboard/bookings/${booking.id}`}
                        className="btn btn-link p-0" 
                      >
                        <Eye size={20} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingList; 