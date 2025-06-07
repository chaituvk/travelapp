import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaMale, FaFemale, FaTransgender,FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";
const buses = [
    {
        id: 1,
        from: "Hyderabad",
        to: "Warangal",
        pickupPoints: [
            { time: "17:20", title: "Miyapur", location: "Near Ks Bakers, Miyapur" },
            {
                time: "17:25",
                title: "Miyapur",
                location: "Near Bharat Petrol Bunk, Towards Chandanagar, Allwin X Road",
            },
        ],
        dropPoints: [
            {
                time: "07:00",
                date: "31 May",
                title: "Lankala Palem",
                location: "Lankelapalem",
            },
            {
                time: "07:10",
                date: "31 May",
                title: "Kurmanipalem",
                location: "Kurmanapalem",
            },
        ],
    },
];

const BookingForm = () => {
    const location = useLocation();
    const { selectedSeats = [] } = location.state || {};

    const busId = 1;
    const bus = buses.find((b) => b.id === busId);

    const [pickup, setPickup] = useState("");
    const [drop, setDrop] = useState("");
    const [passengers, setPassengers] = useState([]);
    const [states, setStates] = useState([]);
    const [contactDetails, setContactDetails] = useState({
        name: '',
        mobile: '',
        email: '',
        state: '',
    });

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

    useEffect(() => {
        const initialPassengers = selectedSeats.map((seat) => ({
            name: "",
            age: "",
            gender: "",
            seat,
        }));
        setPassengers(initialPassengers);
    }, [selectedSeats]);

    const handlePassengerChange = (index, field, value) => {
        const updated = [...passengers];
        updated[index][field] = value;
        setPassengers(updated);
    };

    return (
        <div className="card p-4">
            <h5 className="mb-2">
                Booking for: {bus?.from} → {bus?.to}
            </h5>
            <h6 className="mb-4">30/06/2025 10:30 PM</h6>

            <div className="row">
                {/* Left Column - Pickup/Drop */}
                <div className="col-md-6">
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <label className="fw-bold d-block mb-2">Boarding Points</label>
                                {bus.pickupPoints.map((point, idx) => (
                                    <label className="border rounded p-2 d-block mb-2" key={idx}>
                                        <input
                                            type="radio"
                                            name="pickup"
                                            value={point.title}
                                            checked={pickup === point.title}
                                            onChange={() => setPickup(point.title)}
                                            className="me-2"
                                        />
                                        <strong>{point.time}</strong> - <span>{point.title}</span>
                                        <br />
                                        <small className="text-muted">{point.location}</small>
                                    </label>
                                ))}
                                {pickup && (
                                    <div className="text-success mt-2">
                                        <strong>Your selected Boarding Point:</strong> {pickup}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Drop Point */}
                        <div className="col-lg-6">
                            <div>
                                <label className="fw-bold d-block mb-2">Dropping Points</label>
                                {bus.dropPoints.map((point, idx) => (
                                    <label className="border rounded p-2 d-block mb-2" key={idx}>
                                        <input
                                            type="radio"
                                            name="drop"
                                            value={point.title}
                                            checked={drop === point.title}
                                            onChange={() => setDrop(point.title)}
                                            className="me-2"
                                        />
                                        <strong>{point.time}</strong> - <span>{point.title}</span>{" "}
                                        <small className="ms-2 text-muted">{point.date}</small>
                                        <br />
                                        <small className="text-muted">{point.location}</small>
                                    </label>
                                ))}
                                {drop && (
                                    <div className="text-success mt-2">
                                        <strong>Your selected Dropping Point:</strong> {drop}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Passenger Details */}
                <div className="col-md-6">
                    {selectedSeats.length > 0 && (
                        <>
                            <h6 className="mb-3">Passenger Details</h6>
                            {selectedSeats.map((seat, index) => (
                                <div className="border rounded p-2 mb-3" key={seat}>
                                    <h6 className="text-primary">Seat No: {seat}</h6>
                                    <div className="row g-2 align-items-end">
                                        <div className="col-md-3">
                                            <label className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Passenger Name"
                                                value={passengers[index]?.name || ""}
                                                onChange={(e) => handlePassengerChange(index, "name", e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-2">
                                            <label className="form-label">Age</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Age"
                                                value={passengers[index]?.age || ""}
                                                onChange={(e) => handlePassengerChange(index, "age", e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-7 mt-2">
                                            <label className="form-label d-block">Gender</label>
                                            <div className="d-flex gap-3 form-control">
                                                <label className="me-3">
                                                    <input
                                                        type="radio"
                                                        name={`gender-${index}`}
                                                        value="Male"
                                                        checked={passengers[index]?.gender === "Male"}
                                                        onChange={(e) => handlePassengerChange(index, "gender", e.target.value)}
                                                    />{" "}
                                                    <FaMale className="me-1 text-primary" /> Male
                                                </label>
                                                <label className="me-3">
                                                    <input
                                                        type="radio"
                                                        name={`gender-${index}`}
                                                        value="Female"
                                                        checked={passengers[index]?.gender === "Female"}
                                                        onChange={(e) => handlePassengerChange(index, "gender", e.target.value)}
                                                    />{" "}
                                                    <FaFemale className="me-1 text-danger" /> Female
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`gender-${index}`}
                                                        value="Other"
                                                        checked={passengers[index]?.gender === "Other"}
                                                        onChange={(e) => handlePassengerChange(index, "gender", e.target.value)}
                                                    />{" "}
                                                    <FaTransgender className="me-1 text-success" /> Other
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <h6 className="mb-3">Contact Details</h6>
                            <div className="border rounded p-3">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Contact Name"
                                            value={contactDetails.name}
                                            onChange={(e) => setContactDetails({ ...contactDetails, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Mobile No</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Mobile Number"
                                            value={contactDetails.mobile}
                                            onChange={(e) => setContactDetails({ ...contactDetails, mobile: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Email ID</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            value={contactDetails.email}
                                            onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">State</label>
                                        <select
                                            className="form-control"
                                            value={contactDetails.state}
                                            onChange={(e) => setContactDetails({ ...contactDetails, state: e.target.value })}
                                        >
                                            <option value="">-- Select State --</option>
                                            {indianStates.map((stateName, i) => (
                                                <option key={i} value={stateName}>{stateName}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="col-12  mt-4 ">
                        <Link
                        to='/bookingconfirmation'
                          type="submit"
                          className="btn btn-primary search-btn rounded"
                        >
                          <FaBus className="me-2" /> Book Now
                        </Link>
                      </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
