import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './Home/Home';

export const Dashboard = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);
