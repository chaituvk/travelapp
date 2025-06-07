import React from 'react';
import Layout from '../components/Layout';
import BookingForm from '../components/Bus/BookingForm';

const Busconform = () => {
  return (
    <Layout>
      <div className="content " style={{ paddingTop: "160px" }}>
        <div className="container">
          <div className="row">
            <BookingForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Busconform;
