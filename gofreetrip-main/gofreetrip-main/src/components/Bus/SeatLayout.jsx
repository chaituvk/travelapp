import React, { useState } from 'react';
import { Armchair } from 'lucide-react';
import { Link } from 'react-router-dom';
const SeatLayout = ({ selectedSeats, setSelectedSeats }) => {
  const preBookedLower = ['L3', 'L10', 'L15'];
  const preBookedUpper = ['U2', 'U5'];

  const initialSeats = [
    ...Array.from({ length: 36 }, (_, i) => {
      const id = `L${i + 1}`;
      const booked = preBookedLower.includes(id);
      return {
        id,
        type: 'lower',
        price: i % 2 === 0 ? 1350 : 1180,
        booked,
        editable: !booked,
        category: i === 5 ? 'ladies' : i === 9 ? 'reserved' : 'general',
      };
    }),
    ...Array.from({ length: 18 }, (_, i) => {
      const id = `U${i + 1}`;
      const booked = preBookedUpper.includes(id);
      return {
        id,
        type: 'upper',
        price: i % 2 === 0 ? 1350 : 1100,
        booked,
        editable: !booked,
        category: i === 3 ? 'ladies' : i === 7 ? 'reserved' : 'general',
      };
    }),
  ];

  const toggleSeat = (seat) => {
    if (!seat.editable) return;

    setSelectedSeats((prev) =>
      prev.includes(seat.id)
        ? prev.filter((id) => id !== seat.id)
        : [...prev, seat.id]
    );
  };

  const isSeatSelected = (seat) => selectedSeats.includes(seat.id);

  const getSeatColor = (seat) => {
    if (!isSeatSelected(seat)) return 'white';
    switch (seat.category) {
      case 'ladies': return 'pink';
      case 'reserved': return 'gray';
      default: return '#3a5a40';
    }
  };

  const getSeatStrokeColor = (seat) => (isSeatSelected(seat) ? getSeatColor(seat) : 'black');

  const renderSeats = (type, iconType) => {
    const filteredSeats = initialSeats.filter((seat) => seat.type === type);

    const rows = [];
    for (let i = 0; i < filteredSeats.length; i += 3) {
      rows.push(filteredSeats.slice(i, i + 3));
    }

    return rows.map((group, rowIndex) => (
      <div key={rowIndex} className="d-flex align-items-center justify-content-center mb-2">
        {group[0] && renderSeat(group[0], iconType, true)}
        <div style={{ width: '30px' }}></div>
        <div className="d-flex">
          {group.slice(1).map((seat, idx) => renderSeat(seat, iconType, idx === 0))}
        </div>
      </div>
    ));
  };

  const renderSeat = (seat, iconType, addMargin) => (
    <div
      key={seat.id}
      className={`text-center ${addMargin ? 'me-3' : 'me-2'}`}
      onClick={() => toggleSeat(seat)}
      style={{
        cursor: seat.editable ? 'pointer' : 'default',
        opacity: seat.editable ? 1 : 0.6,
        userSelect: 'none',
        marginRight:"10px"
      }}
      title={seat.editable ? 'Click to toggle booking' : 'Pre-booked'}
    >
      {iconType === 'sleeper' ? (
        <SleeperSVG booked={isSeatSelected(seat)} color={getSeatColor(seat)} size={38} />
      ) : (
        <Armchair
          size={20}
          color={getSeatStrokeColor(seat)}
          fill={getSeatColor(seat)}
        />
      )}
      <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>₹{seat.price}</div>
    </div>
  );

  return (
    <div className="row">
      <div className="col-lg-6 col-12">
        <h6 className="text-center mb-2" style={{ fontSize: '1.25rem' }}>Lower Berths</h6>
        {renderSeats('lower', 'chair')}
      </div>
      <div className="col-lg-6 col-12">
        <h6 className="text-center mb-2" style={{ fontSize: '1.25rem' }}>Upper Berths</h6>
        {renderSeats('upper', 'sleeper')}
      </div>
    </div>
  );
};

const SleeperSVG = ({ booked, color, size = 40 }) => (
  <svg
    width={size}
    height={(size * 62) / 30}
    viewBox="0 0 34 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="30"
      height="60"
      rx="3.5"
      fill={booked ? color : 'white'}
      stroke="#BDBDBD"
    />
    <rect x="6" y="50" width="19" height="3" rx="1.5" fill="white" stroke="#BDBDBD" />
  </svg>
);

export default function SeatModal() {
  const [show, setShow] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <>
      <div className="mb-2">
        <strong>Selected Seats:</strong>{" "}
        {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
      </div>

      {selectedSeats.length > 0 && (
<Link
  to={{
    pathname: "/booking",
  }}
  state={{ selectedSeats }}
  className="btn btn-success w-100 mb-3"
>
  Book Now
</Link>
      )}

      <button
        type="button"
        className="btn btn-primary btn-lg w-100 mb-3 fs-14"
        onClick={() => setShow(true)}
      >
        {selectedSeats.length > 0 ? "Update Seats" : "Select Seats"}
      </button>

      {show && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content p-3">
              <div className="modal-header">
                <h6 className="modal-title">Select Your Seats</h6>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShow(false)}
                />
              </div>
              <div className="modal-body pt-0 pb-0">
                <SeatLayout
                  selectedSeats={selectedSeats}
                  setSelectedSeats={setSelectedSeats}
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShow(false)}
                >
                  Close
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Confirm Seats
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
