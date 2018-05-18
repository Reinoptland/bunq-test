import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import LogoutPage from './components/logout/LogoutPage'
import DashboardPage from './components/dashboard/DashboardPage'
import ContractsPage from './components/contracts/ContractsPage'
import SignupPage from './components/signup/SignupPage'
import BunqPage from './components/bunqDetails/BunqPage'
import TopBar from './components/layout/topBar'
import BottomNav from './components/layout/bottomNav'
import FeedbackPage from './components/feedback/FeedbackPage'
import ProfilePage from './components/profile/ProfilePage'
import { withTheme } from 'material-ui/styles'
import TermsPage from './components/layout/termPage'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main style={{ margin: '80px 0 0 20px' }}>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path='/bunq' component={BunqPage} />
            <Route exact path='/feedback' component={FeedbackPage} />
            <Route exact path='/dashboard' component={DashboardPage} />
            <Route exact path='/contracts' component={ContractsPage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/terms' component={TermsPage} />
            <Route exact path="/" render={() => <Redirect to="/login" />} />
          </main>
          <nav> 
            <BottomNav />
          </nav>
        </div>
      </Router>
    );
  }
}

export default withTheme()(App);
