import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, MapPin, Clock, Users, ArrowRightLeft } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Wishlist = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const wishlistItems = [
    {
      id: 1,
      operator: "VRL Travels",
      route: "Hyderabad - Bangalore",
      from: "Hyderabad",
      to: "Bangalore",
      rating: 4.8,
      reviews: 245,
      price: 1200,
      originalPrice: 1500,
      duration: "12 hours",
      departureTime: "10:00 PM",
      features: ["Sleeper AC", "Pushback Seats", "Charging Points"],
      images: [
      "../../public/download.jpg",
      "../../public/download.jpg",
      "../../public/download.jpg",
      ],
      type: "Sleeper AC",
      via: "Via Bangalore",
      seatsLeft: 8
    },
    {
      id: 2,
      operator: "Orange Travels",
      route: "Chennai - Bangalore",
      from: "Chennai",
      to: "Bangalore",
      rating: 4.5,
      reviews: 189,
      price: 950,
      originalPrice: 1200,
      duration: "8 hours",
      departureTime: "11:00 PM",
      features: ["Semi-Sleeper AC", "WiFi", "Water Bottle"],
      images: [
        "../../public/download.jpg",
        "../../public/download.jpg",
        "../../public/download.jpg",
        ],
      type: "Semi-Sleeper AC",
      via: "Via Chennai",
      seatsLeft: 5
    },
    {
      id: 3,
      operator: "SRS Travels",
      route: "Mumbai - Pune",
      from: "Mumbai",
      to: "Pune",
      rating: 4.7,
      reviews: 156,
      price: 750,
      originalPrice: 900,
      duration: "4 hours",
      departureTime: "9:00 PM",
      features: ["Non-AC Sleeper", "Snacks", "Blanket"],
      images: [
       "../../public/download.jpg",
      "../../public/download.jpg",
      "../../public/download.jpg",
      ],
      type: "Non-AC Sleeper",
      via: "Via Mumbai",
      seatsLeft: 12
    }
  ];

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h6>My Wishlist</h6>
          <p className="fs-14">Items in Wishlist : {wishlistItems.length}</p>
        </div>
      </div>

      {/* Bus List */}
      <div className="hotel-list">
        {wishlistItems.map((item) => (
          <div key={item.id} className="place-item mb-4 border rounded p-3">
            <div className="place-img position-relative">
              <Slider {...settings} className="img-slider image-slide nav-center">
                {item.images.map((img, i) => (
                  <div className="slide-images" key={i}>
                    <Link to={`/bus-details/${item.id}`}>
                      <img src={img} className="img-fluid rounded" alt={item.operator} />
                    </Link>
                  </div>
                ))}
              </Slider>
              <div className="fav-item position-absolute top-0 end-0 m-2">
                <div className="d-flex align-items-center">
                  <a className="fav-icon me-2 selected text-danger fs-5">
                    <Heart className="w-5 h-5 text-primary-500" fill="currentColor" />
                  </a>
                  <span className="badge bg-primary">Best Seller</span>
                </div>
                <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium rounded mt-2 text-light">
                  {item.rating.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="place-content p-2 ps-3">
              <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 mb-3">
                <div>
                  <h5 className="text-truncate mb-1">
                    <Link to={`/busdetail/${item.id}`}>{item.operator}</Link>
                  </h5>
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-sm me-2">
                      <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/3a5a40/bus.png" alt="bus" className="rounded-circle"/>
                    </span>
                    <p className="fs-14 mb-0 me-2">{item.type}</p>
                    <p className="fs-14 mb-0 fw-bold">
                      <i className="ti ti-point-filled text-primary me-2"></i>{item.via}
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="badge bg-outline-success fs-10 fw-medium me-2">
                    {item.seatsLeft} Seats Left
                  </span>
                  <a className="avatar avatar-sm">
                    <img width="40" height="40" src="https://img.icons8.com/fluency-systems-filled/48/3a5a40/baby-car-seat.png" alt="baby-car-seat" className="" />
                  </a>
                </div>
              </div>

              <p className="fs-14 mb-3">
                Experience comfortable journey with {item.operator} featuring {item.features.join(', ')}.
              </p>

              <div className="flight-loc d-flex align-items-center justify-content-between mb-3">
                <span className="loc-name d-inline-flex justify-content-center align-items-center w-100">
                  <i className="isax isax-location me-2"></i>{item.from}
                </span>
                <a className="flex-shrink-0 mx-2 text-gray-700 hover:text-primary transition">
                  <ArrowRightLeft className="w-5 h-5" />
                </a>
                <span className="loc-name d-inline-flex justify-content-center align-items-center w-100">
                  <i className="isax isax-location me-2"></i>{item.to}
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-between border-top flex-wrap gap-2 pt-3">
                <div className="date-info p-2 border-e-teal-100">
                  <p className="d-flex align-items-center">
                    <Clock size={16} className="me-2" />
                    {item.duration} | {item.departureTime}
                  </p>
                </div>
                <h6 className="text-primary">
                  <span className="fs-14 fw-normal text-default">From </span>₹{item.price}
                  <span className="ms-1 fs-14 fw-normal text-gray-3 text-decoration-line-through">
                    ₹{item.originalPrice}
                  </span>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist; 