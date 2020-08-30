import React, { useContext, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactsFilter = () => {
  const { filterContacts, clearFilter } = useContext(ContactContext);
  const text = useRef('');

  const handleChange = () => {
    if (text.current.value) {
      filterContacts(text.current.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className="mb-3">
      <input
        className="form-control"
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={handleChange}
      />
    </form>
  );
};

export default ContactsFilter;
