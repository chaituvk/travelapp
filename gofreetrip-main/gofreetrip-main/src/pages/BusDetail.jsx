import React from 'react';
import Layout from '../components/Layout';
import BusDetailsPage from '../components/Bus/BusDetailsPage';
import BookSide from '../components/Bus/BookSide';
import SeatLayout from '../components/Bus/SeatLayout';
const BusDetail = () => {
  return (
    <Layout>
      <div className="content " style={{ paddingTop: "160px" }}>
        <div class="container">
          <div className="row">
            <BusDetailsPage />
            <BookSide />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusDetail;
