import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactsFilter from '../contacts/ContactsFilter';

const Home = () => {
  return (
    <div className="row">
      <div className="col-8">
        <ContactForm />
      </div>
      <div className="col-4">
        <ContactsFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
