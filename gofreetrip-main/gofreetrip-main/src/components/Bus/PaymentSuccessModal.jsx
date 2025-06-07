import React from 'react';
import { CheckCircle2 } from 'lucide-react'; // success icon
import { useNavigate } from 'react-router-dom';

const PaymentSuccessModal = ({ show, onClose, transactionId = "TXN000123" }) => {
  const navigate = useNavigate();

  if (!show) return null;

  const handleViewDetails = () => {
    onClose();
    navigate('/booking-details');
  };

  return (
    <div className="modal fade show" style={{ display: 'block' }} aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content booking-success-modal rounded-4 shadow">
          <div className="modal-body text-center p-4">
            <div className="booking-icon text-success mb-3">
              <CheckCircle2 size={56} strokeWidth={1.8} />
            </div>
            <h5 className="mb-2">Payment Successful</h5>
            <p className="mb-4">
              Your <strong>bus ticket</strong> booking is confirmed!<br />
              Transaction ID: <span className="text-primary fw-bold">#{transactionId}</span>
            </p>
            <button onClick={handleViewDetails} className="btn btn-primary">
              View Booking Details
            </button>
          </div>
        </div>
      </div>
      {/* Overlay backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </div>
  );
};

export default PaymentSuccessModal;
