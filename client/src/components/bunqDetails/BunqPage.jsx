import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bunqLogin } from '../../actions/users'
import BunqForm from './BunqForm'
import { AlertDialog } from '../privacy/PrivacyForm'
import { Redirect } from 'react-router-dom'

class BunqDetails extends PureComponent {
  handleSubmit = (data) => {
    if(this.props.user && this.props.user !==  null)
    this.props.bunqLogin(this.props.user.id, data.key)
    return(<Redirect to='/dashboard'/>)
  }

  render() {
    return (
      <div>
        <h1>Bunq Login</h1>

        <BunqForm onSubmit={this.handleSubmit} />

        {this.props.error && <span style={{ color: 'red' }}>{this.props.error}</span>}
        <AlertDialog />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    user: state.currentUser.user ? state.currentUser.user : null
  }
}

export default connect(mapStateToProps, { bunqLogin })(BunqDetails)