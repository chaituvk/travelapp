import React, { useState, forwardRef } from 'react';
import Select, { components } from 'react-select';
import { FaMapMarkerAlt, FaSearch, FaCalendarAlt, FaBus, FaTrain, FaPlane, FaBed } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";

const locationOptions = [
  { value: 'hyderabad', label: 'Hyderabad' },
  { value: 'warangal', label: 'Warangal' },
  { value: 'vijayawada', label: 'Vijayawada' },
  { value: 'bangalore', label: 'Bangalore' },
  { value: 'chennai', label: 'Chennai' },
];

// Custom option with icon
const customSingleValue = ({ data }) => (
  <div className="d-flex align-items-center">
    <FaMapMarkerAlt className="me-2 text-primary" />
    {data.label}
  </div>
);

const CustomInput = forwardRef(({ value, onClick, onFocus, onBlur }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <div
      className={`form-control d-flex align-items-center justify-content-between w-100 ${
        isFocused ? 'border-primary shadow-sm' : ''
      }`}
      onClick={onClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={ref}
      style={{ cursor: 'pointer', userSelect: 'none', width: '100%' }}
      tabIndex={0} // make it keyboard accessible
      role="button"
    >
      <span>{value || 'Select Travel Date'}</span>
      <FaCalendarAlt className="text-secondary" />
    </div>
  );
});

const customOption = (props) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div ref={innerRef} {...innerProps} className="d-flex align-items-center p-2">
      <FaMapMarkerAlt className="me-2 text-primary" />
      {data.label}
    </div>
  );
};

// Custom DropdownIndicator to show search icon
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaSearch className="text-secondary" />
    </components.DropdownIndicator>
  );
};

const customStyles = {
  control: (base) => ({
    ...base,
    textAlign: 'left',
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
  }),
};

const HomeBanner = () => {
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [travelDate, setTravelDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      from: fromLocation?.label,
      to: toLocation?.label,
      date: travelDate,
    });
  };

  const tabIcons = {
    Bus: FaBus,
    Train: FaTrain,
    Flight: FaPlane,
    Hotel: FaBed,
  };

  return (
    <section className="hero-section">
      <div className="banner-slider banner-sec owl-carousel w-100">
        <div className="slider-img w-100">
          <img src="../../public/5352.jpg" className="w-100" alt="Img" />
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="row align-items-center">
            <div className="col-md-12 mx-auto">
              <div className="banner-content mx-auto text-center">
                <h1 className="text-white display-5 mb-2">
                  Book Your <span>Bus</span> Journey
                </h1>
                <h6 className="text-light">
                  Choose your route and travel date to begin.
                </h6>
              </div>

              <div className="banner-form card mb-0">
                <div className="card-header">
                  <ul className="nav">
                    {["Bus", "Train", "Flight", "Hotel"].map((tab) => {
                      const IconComponent = tabIcons[tab];
                      return (
                        <li key={tab}>
                          <a href="#" className={`nav-link ${tab === "Bus" ? "active" : ""}`}>
                            <IconComponent className="me-2" />
                            {tab}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 ">
                      <div className="col-12 col-md-3">
                        <label className="form-label fs-14 text-default mb-1">
                          From
                        </label>
                        <Select
                          className="form-control p-0"
                          styles={customStyles}
                          components={{
                            Option: customOption,
                            SingleValue: customSingleValue,
                            DropdownIndicator,
                          }}
                          options={locationOptions}
                          placeholder="Select From"
                          value={fromLocation}
                          onChange={setFromLocation}
                          isSearchable
                        />
                      </div>

                      <div className="col-12 col-md-3">
                        <label className="form-label fs-14 text-default mb-1">
                          To
                        </label>
                        <Select
                          className="form-control p-0"
                          styles={customStyles}
                          components={{
                            Option: customOption,
                            SingleValue: customSingleValue,
                            DropdownIndicator,
                          }}
                          options={locationOptions}
                          placeholder="Select To"
                          value={toLocation}
                          onChange={setToLocation}
                          isSearchable
                        />
                      </div>

                      <div className="col-12 col-md-3">
                        <label className="form-label fs-14 text-default mb-1">
                          Travel Date
                        </label>
                        <br />
                        <DatePicker
                          style={{ width: "100%" }}
                          selected={travelDate}
                          onChange={(date) => setTravelDate(date)}
                          dateFormat="dd/MM/yyyy"
                          minDate={new Date()}
                          customInput={<CustomInput />}
                        />
                      </div>

                      <div className="col-12 col-md-2 d-flex align-items-center">
                        <Link
                        to='buslist'
                          type="submit"
                          className="btn btn-primary search-btn w-100 rounded d-flex align-items-center justify-content-center"
                        >
                          <FaSearch className="me-2" /> Search
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
