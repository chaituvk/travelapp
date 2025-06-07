import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Heart } from 'lucide-react';
import { ArrowRightLeft } from "lucide-react";
import { Link } from "react-router-dom";
export default function BusCard({ bus }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="place-item mb-4 border rounded p-3">
      <div className="place-img position-relative">
        <Slider {...settings} className="img-slider image-slide nav-center">
          {bus.images.map((img, i) => (
            <div className="slide-images" key={i}>
              <a>
                <img
                  src={img}
                  alt={`Bus ${i + 1}`}
                  className="img-fluid rounded"
                />
              </a>
            </div>
          ))}
        </Slider>

        <div className="fav-item position-absolute top-0 end-0 m-2">
          <div className="d-flex align-items-center">
            <a  className="fav-icon me-2 selected text-danger fs-5">
<Heart className="w-5 h-5 text-primary-500" fill="currentColor" />
            </a>
            <span className="badge bg-primary">Best Seller</span>
          </div>
          <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium rounded mt-2 text-light">
            {bus.rating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="place-content p-2 ps-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 mb-3">
          <div>
            <h5 className="text-truncate mb-1">
              <Link to={`/busdetail/${bus.id}`}>{bus.operator}</Link>
            </h5>
            <div className="d-flex align-items-center">
              <span className="avatar avatar-sm me-2">
               <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/3a5a40/bus.png" alt="bus" className="rounded-circle"/>
              </span>
              <p className="fs-14 mb-0 me-2">{bus.type}</p>
              <p className="fs-14 mb-0 fw-bold">
                <i className="ti ti-point-filled text-primary me-2"></i>{bus.via || 'Via Bangalore'}
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <span className="badge bg-outline-success fs-10 fw-medium me-2">
              {bus.seatsLeft} Seats Left
            </span>
            <a className="avatar avatar-sm">
              <img width="40" height="40" src="https://img.icons8.com/fluency-systems-filled/48/3a5a40/baby-car-seat.png" alt="baby-car-seat" className="" />
            </a>
          </div>
        </div>

        <p className="fs-14 mb-3">
          Enjoy comfortable pushback seats, charging points, and on-time service on every ride.
        </p>

        <div className="flight-loc d-flex align-items-center justify-content-between mb-3">
          <span className="loc-name d-inline-flex justify-content-center align-items-center w-100">
            <i className="isax isax-location me-2"></i>{bus.boarding}
          </span>
          <a className="flex-shrink-0 mx-2 text-gray-700 hover:text-primary transition">
  <ArrowRightLeft className="w-5 h-5" />
</a>
          <span className="loc-name d-inline-flex justify-content-center align-items-center w-100">
            <i className="isax isax-location me-2"></i>{bus.dropping}
          </span>
        </div>

        <div className="d-flex align-items-center justify-content-between border-top flex-wrap gap-2 pt-3">
          <div className="date-info p-2 border-e-teal-100">
            <p className="d-flex align-items-center">
              <i className="isax isax-calendar-2 me-2"></i>
              {bus.date || "Sep 10, 2024 - Sep 11, 2024"}
            </p>
          </div>
          <h6 className="text-primary">
            <span className="fs-14 fw-normal text-default">From </span>₹{bus.price}
          </h6>
        </div>
      </div>
    </div>
  );
}
