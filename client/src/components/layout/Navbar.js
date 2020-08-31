import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const { user, logout, isAuthenticated } = useContext(AuthContext);

  const { clearContacts } = useContext(ContactContext);

  const onLogout = () => {
    logout();
    clearContacts();
  };
  const authLinks = (
    <>
      <li className="nav-item text-white mr-3">Hello {user && user.name}</li>
      <li className="nav-item text-white logout" onClick={onLogout}>
        <i className="fas fa-sign-out-alt" /> <span>Logout</span>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-primary navbar-expand-md navbar-dark mb-5">
      <a href="/" className="navbar-brand h1">
        <i className={icon} /> {title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ml-auto">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
