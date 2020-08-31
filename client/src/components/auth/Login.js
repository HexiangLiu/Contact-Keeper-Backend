import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
  const { login, isAuthenticated, error, clearErrors } = useContext(
    AuthContext
  );
  const { setAlert } = useContext(AlertContext);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [isAuthenticated, error]);

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="form-container">
      <h1 className="text-center">
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
