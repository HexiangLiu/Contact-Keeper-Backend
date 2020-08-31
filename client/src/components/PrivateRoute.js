import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        !isAuthenticated ? <Redirect to="/login" /> : <Component />
      }
    />
  );
};

export default PrivateRoute;
