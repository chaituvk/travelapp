import React from 'react';
import Layout from '../components/Layout';
import BusFinalBook from '../components/Bus/BusFinalBook';
const BusBookFinal = () => {
  return (
    <Layout>
      <div className="content " style={{ paddingTop: "160px" }}>
        <div class="container">
          <div className="row">
            <BusFinalBook />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusBookFinal;
