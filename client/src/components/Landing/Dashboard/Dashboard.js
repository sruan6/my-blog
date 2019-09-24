import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './Home/Home';
import { Post } from './PostId/Post';

export const Dashboard = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/game=:id" component={Post} />
    </div>
  </Router>
);
