import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bunqLogin, privacy } from '../../actions/users'
import BunqForm from './BunqForm'
import { AlertDialog } from '../privacy/PrivacyForm'
import { Redirect } from 'react-router-dom'

class BunqDetails extends PureComponent {
  handleSubmit = (data) => {
    if (this.props.user && this.props.user !== null) {
      this.props.bunqLogin(this.props.user.id, data.key)
      return (<Redirect to='/dashboard' />)
    }
  }

  render() {
    console.log(this.props.user)
    if (this.props.user === null) {
      return (<Redirect to='/login' />)
    }

    // if (this.props.user.bunqKey !== 'null' || this.props.user.bunqKey !== 'NULL' || this.props.user.bunqKey !== null) {
    //   return (<Redirect to='/dashboard' />)
    //   // console.log(this.props.user.bunq)
    // }
    return (
      <div className='center'>
        <h1>Bunq Login</h1>

        <BunqForm onSubmit={this.handleSubmit} />

        {this.props.error && <span style={{ color: 'red' }}>{this.props.error}</span>}
        <AlertDialog privacy={this.props.privacy} user={this.props.user.id} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    user: state.currentUser.user ? state.currentUser.user : null
  }
}

export default connect(mapStateToProps, { bunqLogin, privacy })(BunqDetails)