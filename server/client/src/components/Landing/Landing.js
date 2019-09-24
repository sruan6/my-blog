/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginContainter } from './Login-Form/Login-container';
import { Dashboard } from './Dashboard/Dashboard';

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        // when null load animination
        return;
      case false:
        // If not logged In
        return <LoginContainter />;
      default:
        // If logged In
        return <Dashboard />;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
