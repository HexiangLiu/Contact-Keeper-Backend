import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactsFilter from '../contacts/ContactsFilter';

const Home = () => {
  return (
    <div className="row">
      <div className="col-lg-8 col-6">
        <ContactForm />
      </div>
      <div className="col-lg-4 col-6">
        <ContactsFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
