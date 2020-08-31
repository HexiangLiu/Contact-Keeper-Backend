import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const { deleteContact, setCurrent, clearCurrent } = useContext(
    ContactContext
  );

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light mb-2 p-2">
      <h5 className="card-title text-primary d-flex justify-content-between ">
        {name}{' '}
        <span
          className={`badge text-capitalize ${
            type === 'professional' ? 'badge-success ' : 'badge-primary'
          }`}
        >
          {type}
        </span>
      </h5>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <i className="fas fa-envelope-open"></i> {email}
        </li>
        <li>
          <i className="fas fa-phone"></i> {phone}
        </li>
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm mr-2"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default ContactItem;
