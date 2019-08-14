import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './Login-Form';
import { Signup } from './Signup-Form';

export const LoginContainter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route rxact path="/signup" component={Signup} />
    </div>
  </Router>
);
