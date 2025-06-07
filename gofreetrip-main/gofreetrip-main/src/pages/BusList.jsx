import React from 'react';
import Layout from '../components/Layout';
import SearchBus from '../components/SearchBus';
import BusBookingSidebar from '../components/Bus/BusBookingSidebar';
import BusListView from '../components/Bus/BusListView';
const BusList = () => {
  return (
    <Layout>
      <SearchBus />
      <div className="content">
        <div class="container">
          <div className="row">
            <BusBookingSidebar />
            <BusListView />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusList;
