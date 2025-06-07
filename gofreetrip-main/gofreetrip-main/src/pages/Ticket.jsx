import React from 'react';
import Layout from '../components/Layout';
import BookingDetails from '../components/Bus/BookingDetails';
const Ticket = () => {
  return (
    <Layout>
      <div className="content " style={{ paddingTop: "160px" }}>
        <div class="container">
          <div className="row">
            <BookingDetails />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ticket;
