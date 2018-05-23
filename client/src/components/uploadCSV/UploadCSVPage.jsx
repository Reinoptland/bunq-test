import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { privacy, fetchProfile } from '../../actions/users'
import UploadCSVForm from './UploadCSVForm'
import { AlertDialog } from '../privacy/PrivacyForm'
import { Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class UploadCSVPage extends PureComponent {
  render() {
    if (this.props.user === null || !this.props.user) {
      return (<Redirect to='/logout' />)
    }

    return (
      <div className='center'>
        <h1>Upload hier uw CSV bestand</h1>

        <UploadCSVForm />

        {this.props.error && <span style={{ color: 'red' }}>{this.props.error}</span>}
        <Link to='/dashboard'><Button className='privacyButton'>Opslaan</Button></Link>
        <div>
          <AlertDialog privacy={this.props.privacy} user={this.props.user} fetchProfile={this.props.fetchProfile}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    user: state.currentUser ? state.currentUser.user : null
  }
}

export default connect(mapStateToProps, { privacy, fetchProfile })(UploadCSVPage)