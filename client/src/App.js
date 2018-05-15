import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
// import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
// import TransactionsPage from './components/transactions/TransactionsPage'
// import ContractsPage from './components/contracts/ContractsPage'
import register, { unregister } from './registerServiceWorker'

class App extends Component {
  componentWillMount(){
    register()
  }

  componentWillUnmount(){
    unregister()
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
          </nav>
          <main>
            {/* <Route exact path='/signup' component={SignupPage}/> */}
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path="/logout" component={LogoutPage} />
            {/* <Route exact path='/bunq' component={BunqPage}/> */}
            {/* <Route exact path='/transactions' component={TransactionsPage}/> */}
            {/* <Route exact path='/contracts' component={ContractsPage}/> */}
            <Route exact path="/" render={() => <Redirect to="/transactions" />} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
