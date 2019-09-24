/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Landing from './components/Landing/Landing';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="My-App">
        <Landing />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
