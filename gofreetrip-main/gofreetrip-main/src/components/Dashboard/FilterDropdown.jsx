import React from 'react';
// import { LucideIcon } from 'lucide-react';

const FilterDropdown = ({  title, options }) => {
  return (
    <div className="dropdown">
      <a href="javascript:void(0);" className="dropdown-toggle btn bg-light-200 btn-sm text-gray-6 rounded-pill fw-normal fs-14 d-inline-flex align-items-center" data-bs-toggle="dropdown">
        {/* <Icon size={14} className="me-2" /> */}
        {title}
      </a>
      <ul className="dropdown-menu dropdown-menu-end p-3">
        {options.map((option, index) => (
          <li key={index}>
            <a href="javascript:void(0);" className="dropdown-item rounded-1">{option}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterDropdown; 