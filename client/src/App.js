import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SignupPage from './components/signup/SignupPage'
import BunqPage from './components/bunqDetails/BunqPage'

class App extends Component {
  render() {
    return (
      <div>
        <SignupPage />
        <BunqPage />
      </div>
    );
  }
}

export default App;
