import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { ADD_CONTACT } from '../../context/types';

const ContactForm = () => {
  const { addContact } = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    addContact(contact);
    e.preventDefault();
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center">Add Contact</h2>
      <div className="form-group">
        <label htmlFor="name">Contact Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-control"
          placeholder="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          className="form-control"
          placeholder="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id="professional"
          name="type"
          value="professional"
          checked={type === 'professional'}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="professional">
          Professional
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id="personal"
          name="type"
          value="personal"
          checked={type === 'personal'}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="personal">
          Personal
        </label>
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-block btn-primary">
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
