import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
  return (
    <div className="table-paginate d-flex justify-content-between align-items-center flex-wrap row-gap-3">
      <div className="value d-flex align-items-center">
        <span>Show</span>
        <select className="form-select mx-2" style={{ width: 'auto' }}>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
        <span>entries</span>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <a href="javascript:void(0);" className="me-3">
          <ChevronLeft size={20} />
        </a>
        <nav aria-label="Page navigation">
          <ul className="paginations d-flex justify-content-center align-items-center">
            <li className="page-item me-2">
              <a className="page-link-1 active d-flex justify-content-center align-items-center" href="javascript:void(0);">1</a>
            </li>
            <li className="page-item me-2">
              <a className="page-link-1 d-flex justify-content-center align-items-center" href="javascript:void(0);">2</a>
            </li>
            <li className="page-item">
              <a className="page-link-1 d-flex justify-content-center align-items-center" href="javascript:void(0);">3</a>
            </li>
          </ul>
        </nav>
        <a href="javascript:void(0);" className="ms-3">
          <ChevronRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default Pagination; 