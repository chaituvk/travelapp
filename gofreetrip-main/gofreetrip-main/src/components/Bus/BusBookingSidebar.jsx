import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBus, FaUsers, FaStar, FaMoneyBillWave } from 'react-icons/fa';
import { MdAccessTime, MdLocationOn, MdStarRate } from 'react-icons/md';

const BusBookingSidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBusTypes, setSelectedBusTypes] = useState({
        Sleeper: true,
        'Semi Sleeper': false,
        'AC / Non-AC': false,
        'Volvo / Luxury': true,
    });
    const [selectedCapacity, setSelectedCapacity] = useState({
        '20 Seater': false,
        '30 Seater': true,
        '40 Seater': true,
        '50 Seater': false,
    });
    const [selectedAmenities, setSelectedAmenities] = useState({
        WiFi: false,
        AC: true,
        Refreshments: false,
        ChargingPorts: true,
    });
    const [travelledDistance, setTravelledDistance] = useState([0, 500]);
    const [priceRange, setPriceRange] = useState([100, 2000]);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedDepartureTime, setSelectedDepartureTime] = useState([]);
    const [selectedArrivalTime, setSelectedArrivalTime] = useState([]);
    const [selectedOperators, setSelectedOperators] = useState([]);
    const [selectedBoardingPoints, setSelectedBoardingPoints] = useState([]);
    const [selectedDroppingPoints, setSelectedDroppingPoints] = useState([]);

    const handleToggle = (stateSetter, key) => {
        stateSetter(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleCheckboxArrayChange = (array, setArray, value) => {
        if (array.includes(value)) {
            setArray(array.filter(v => v !== value));
        } else {
            setArray([...array, value]);
        }
    };

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedBusTypes({
            Standard: true,
            Luxury: false,
            Sleeper: false,
            SemiSleeper: true,
        });
        setSelectedCapacity({
            '20 Seater': false,
            '30 Seater': true,
            '40 Seater': true,
            '50 Seater': false,
        });
        setSelectedAmenities({
            WiFi: false,
            AC: true,
            Refreshments: false,
            ChargingPorts: true,
        });
        setTravelledDistance([0, 500]);
        setPriceRange([100, 2000]);
        setSelectedRatings([]);
        setSelectedDepartureTime([]);
        setSelectedArrivalTime([]);
        setSelectedOperators([]);
        setSelectedBoardingPoints([]);
        setSelectedDroppingPoints([]);
    };

    const renderCheckboxList = (items, selectedItems, setSelectedItems) => (
        items.map(item => (
            <div className="form-check d-flex align-items-center ps-0 mb-2" key={item}>
                <input
                    className="form-check-input ms-0 mt-0"
                    type="checkbox"
                    id={item}
                    checked={selectedItems.includes(item)}
                    onChange={() => handleCheckboxArrayChange(selectedItems, setSelectedItems, item)}
                />
                <label className="form-check-label ms-2" htmlFor={item}>{item}</label>
            </div>
        ))
    );

    return (
        <div className="col-xl-3 col-lg-3 theiaStickySidebar">
            <div className="card filter-sidebar mb-4 mb-lg-0">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <h5>Filters</h5>
                    <a href="#" className="fs-14 link-primary btn btn-sm border"  onClick={resetFilters}>Reset</a>
                </div>
                <div className="card-body p-0">
                    <form>
                        <div className="p-3 border-bottom">
                            <label className="form-label fs-16">Search by Bus Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Bus Name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="accordion accordion-list">
                            <AccordionItem title="Bus Types" icon={<FaBus />}>
                                {Object.keys(selectedBusTypes).map(type => (
                                    <CheckboxItem
                                        key={type}
                                        label={type}
                                        checked={selectedBusTypes[type]}
                                        onChange={() => handleToggle(setSelectedBusTypes, type)}
                                    />
                                ))}
                            </AccordionItem>

                            <AccordionItem title="Seating Capacity" icon={<FaUsers />}>
                                {Object.keys(selectedCapacity).map(capacity => (
                                    <CheckboxItem
                                        key={capacity}
                                        label={capacity}
                                        checked={selectedCapacity[capacity]}
                                        onChange={() => handleToggle(setSelectedCapacity, capacity)}
                                    />
                                ))}
                            </AccordionItem>

                            <AccordionItem title="Amenities" icon={<FaStar />}>
                                {Object.keys(selectedAmenities).map(amenity => (
                                    <CheckboxItem
                                        key={amenity}
                                        label={amenity}
                                        checked={selectedAmenities[amenity]}
                                        onChange={() => handleToggle(setSelectedAmenities, amenity)}
                                    />
                                ))}
                            </AccordionItem>

                            <AccordionItem title="Departure Time" icon={<MdAccessTime />}>
                                {renderCheckboxList(['Before 6 AM', '6 AM - 12 PM', '12 PM - 6 PM', 'After 6 PM'], selectedDepartureTime, setSelectedDepartureTime)}
                            </AccordionItem>

                            <AccordionItem title="Arrival Time" icon={<MdAccessTime />}>
                                {renderCheckboxList(['Before 6 AM', '6 AM - 12 PM', '12 PM - 6 PM', 'After 6 PM'], selectedArrivalTime, setSelectedArrivalTime)}
                            </AccordionItem>

                            <AccordionItem title="Bus Operators" icon={<FaBus />}>
                                {renderCheckboxList(['VRL Travels', 'Orange Tours', 'SRS', 'KPN'], selectedOperators, setSelectedOperators)}
                            </AccordionItem>

                            {/* Uncomment if needed later */}
                            {/* 
                            <AccordionItem title="Boarding Points" icon={<MdLocationOn />}>
                                {renderCheckboxList(['Miyapur', 'Kukatpally', 'Ameerpet', 'LB Nagar'], selectedBoardingPoints, setSelectedBoardingPoints)}
                            </AccordionItem>

                            <AccordionItem title="Dropping Points" icon={<MdLocationOn />}>
                                {renderCheckboxList(['Majestic', 'Electronic City', 'Silk Board', 'Madiwala'], selectedDroppingPoints, setSelectedDroppingPoints)}
                            </AccordionItem>
                            */}

                            <AccordionItem title="Ratings" icon={<MdStarRate />}>
                                {renderCheckboxList(['4★ & above', '3★ & above', '2★ & above'], selectedRatings, setSelectedRatings)}
                            </AccordionItem>

                            <AccordionItem title="Price Range" icon={<FaMoneyBillWave />}>
                                <p className="mb-1">₹{priceRange[0]} - ₹{priceRange[1]}</p>
                                <input
                                    type="range"
                                    min="100"
                                    max="2000"
                                    value={priceRange[0]}
                                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                                />
                                <input
                                    type="range"
                                    min="100"
                                    max="2000"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                />
                                <Link
                                    to='buslist'
                                    className="btn btn-primary search-btn mt-4 rounded d-flex align-items-center justify-content-center"
                                >
                                    <FaSearch className="me-2" /> Search
                                </Link>
                            </AccordionItem>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const AccordionItem = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item border-bottom p-3">
      <div className="accordion-header">
        <div
          className="accordion-button p-0 d-flex justify-content-between align-items-center w-100"
          onClick={toggleAccordion}
          style={{ cursor: 'pointer' }}
        >
          <div>
            <i className={`isax ${icon} me-2 text-primary`}></i> {title}
          </div>
          {/* <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-secondary`} /> */}
        </div>
      </div>
      <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
        <div className="accordion-body">
          <div className="more-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

const CheckboxItem = ({ label, checked, onChange }) => (
    <div className="form-check d-flex align-items-center ps-0 mb-2">
        <input className="form-check-input ms-0 mt-0" type="checkbox" id={label} checked={checked} onChange={onChange} />
        <label className="form-check-label ms-2" htmlFor={label}>{label}</label>
    </div>
);

export default BusBookingSidebar;
