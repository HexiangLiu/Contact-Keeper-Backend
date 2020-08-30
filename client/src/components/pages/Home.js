import React from 'react';
import Contacts from '../contacts/Contacts';

const Home = () => {
  return (
    <div className="row">
      <div className="col-8"></div>
      <div className="col-4">
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
