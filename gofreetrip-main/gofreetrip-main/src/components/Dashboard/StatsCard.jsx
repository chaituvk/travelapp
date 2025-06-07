import React from 'react';
// import { LucideIcon } from 'lucide-react';

const StatsCard = ({ icon: Icon, value, label, bgColor }) => {
  return (
    <div className="card shadow-none">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <span className={`avatar avatar-xl rounded-circle ${bgColor} me-3`}>
            <Icon size={36} />
          </span>
          <div>
            <h3>{value}</h3>
            <p>{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard; 