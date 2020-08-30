import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//style
import './App.scss';

//Context
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

//Components
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

export default () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Navbar />
          <div className="container-lg">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </ContactState>
    </AuthState>
  );
};
