import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//style
import './App.css';

import ContactState from './context/contact/ContactState';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

export default () => {
  return (
    <ContactState>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </ContactState>
  );
};
