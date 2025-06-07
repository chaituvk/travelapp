import React from 'react';
// import { LucideIcon } from 'lucide-react';

const NotificationCard = ({ icon: Icon, title, time, message, bgColor }) => {
  return (
    <div className="d-flex align-items-center mb-3">
      <span className={`avatar avatar-lg ${bgColor} rounded-circle flex-shrink-0 me-2`}>
        <Icon size={20} />
      </span>
      <div className="flex-fill overflow-hidden">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h6 className="fs-16 text-truncate">{title}</h6>
          <p className="fs-14 text-primary text-nowrap">{time}</p>
        </div>
        <p className="fs-14 two-line-ellipsis">{message}</p>
      </div>
    </div>
  );
};

export default NotificationCard; 