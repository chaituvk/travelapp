import React from "react";
import BusCard from "./BusCard";
import { Link } from "react-router-dom";
const busList = [
  {
    id: 1,
    operator: "VRL Travels",
    type: "Sleeper AC",
    departure: "10:00 PM",
    arrival: "7:00 AM",
    duration: "9h",
    seatsLeft: 8,
    price: 950,
    rating: 4.3,
    reviews: 128,
    boarding: "Ameerpet",
    dropping: "MG Road",
    amenities: ["AC", "Wi-Fi", "Charger", "Water Bottle"],
    images: [
      "public/download.jpg",
      "public/download.jpg",
      "public/download.jpg",
    ],
    via: "Bangalore",
    date: "Sep 10, 2024 - Sep 11, 2024",
  },
  {
    id: 2,
    operator: "Orange Travels",
    type: "Semi-Sleeper AC",
    departure: "9:30 PM",
    arrival: "6:30 AM",
    duration: "9h",
    seatsLeft: 5,
    price: 870,
    rating: 4.0,
    reviews: 95,
    boarding: "LB Nagar",
    dropping: "Jubilee Hills",
    amenities: ["AC", "Reading Light", "Water Bottle"],
    images: [
      "public/download.jpg",
      "public/download.jpg",
      "public/download.jpg",
    ],
    via: "Kurnool",
    date: "Sep 11, 2024 - Sep 12, 2024",
  },
  {
    id: 3,
    operator: "SRS Travels",
    type: "Non-AC Sleeper",
    departure: "8:00 PM",
    arrival: "5:00 AM",
    duration: "9h",
    seatsLeft: 14,
    price: 650,
    rating: 3.8,
    reviews: 62,
    boarding: "Miyapur",
    dropping: "Secunderabad",
    amenities: ["Blanket", "Water Bottle"],
    images: [
      "public/download.jpg",
      "public/download.jpg",
      "public/download.jpg",
    ],
    via: "Anantapur",
    date: "Sep 12, 2024 - Sep 13, 2024",
  },
];

const BusListView = () => {
  return (
    <div className="col-xl-9 col-lg-9">
      {/* Header and sorting UI here (keep your original) */}

      {/* Example header updated with bus count */}
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <h6 className="mb-3">{busList.length} Buses Found on Your Search</h6>
        {/* ...sorting and filter UI (keep as is) */}
      </div>

      {/* Info Banner */}
      <div className="bg-primary br-10 p-3 pb-2 mb-4">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <p className="fs-14 fw-medium mb-2 d-inline-flex align-items-center">
            <i className="isax isax-info-circle me-2"></i>Save an average of 15%
            on Booking of Bus when you're signed in
          </p>
          <Link to="/login" className="btn btn-white btn-sm mb-2">
            Sign In
          </Link>
        </div>
      </div>

      <div className="hotel-list">
        <div className="row justify-content-center">
          <div className="col-md-12">
            {/* Map through busList array */}
            {busList.map((bus) => (
              <BusCard key={bus.id} bus={bus} />
            ))}
          </div>
        </div>
      </div>

      {/* Pagination (keep your original) */}
      <nav className="pagination-nav">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="javascript:void(0);"
              aria-label="Previous"
            >
              <span aria-hidden="true">
                <i className="fa-solid fa-chevron-left"></i>
              </span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:void(0);">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:void(0);">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:void(0);">
              3
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="javascript:void(0);">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:void(0);">
              5
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="javascript:void(0);"
              aria-label="Next"
            >
              <span aria-hidden="true">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BusListView;
