import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import LogoutPage from './components/logout/LogoutPage'
// import TransactionsPage from './components/transactions/TransactionsPage'
// import ContractsPage from './components/contracts/ContractsPage'
import register, { unregister } from './registerServiceWorker'
import SignupPage from './components/signup/SignupPage'
import BunqPage from './components/bunqDetails/BunqPage'
import PrivacyPage from './components/privacy/PrivacyPage'

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
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path='/bunq' component={BunqPage}/>
            <Route exact path='/privacy' component={PrivacyPage} />
            {/* <Route exact path='/transactions' component={TransactionsPage}/> */}
            {/* <Route exact path='/contracts' component={ContractsPage}/> */}
            <Route exact path='/signup' component={SignupPage}/>
            <Route exact path="/" render={() => <Redirect to="/transactions" />} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
