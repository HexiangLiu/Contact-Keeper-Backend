import React from 'react';

const ContactItem = ({ id, name, email, phone, type }) => {
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
        <button className="btn btn-dark btn-sm mr-2">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

export default ContactItem;
