import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactsFilter from '../contacts/ContactsFilter';

import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="row">
      <div className="col-lg-8 col-sm-6 col-12">
        <ContactForm />
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
        <ContactsFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
