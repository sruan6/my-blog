import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Dashboard from './components/Landing/Landing';
import { UserProfile } from './components/Landing/Dashboard/User-Profile/Profile';
import { Navbar } from './components/Landing/Navbar/Navbar';
import './App.css';
import { Upload } from './components/Landing/Dashboard/AddGame/AddGame';
import { Files } from './components/Landing/Dashboard/Home/Files';

class App extends Component {
  // Fetch User
  // componentDidMount() {
  //   this.props.fetchUser();
  // }

  render() {
    return (
      <div className="App">
        <Upload />
        <Files />
      </div>
    );
  }
}

// export default connect(
//   null,
//   actions
// )(App);

export default App;
