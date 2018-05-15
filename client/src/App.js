import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
          </nav>
          <main>
            <Route exact path='/signup' component={SignupPage}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path="/" render={() => <Redirect to="/transactions" />} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
