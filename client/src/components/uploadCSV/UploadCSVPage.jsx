import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { privacy, fetchProfile } from '../../actions/users'
import UploadCSVForm from './UploadCSVForm'
import { AlertDialog } from '../privacy/PrivacyForm'
import { Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class UploadCSVPage extends PureComponent {
  state ={
    upload: false
  }

  toggleUpload = () => {
    this.setState({
      upload: !this.state.upload
    })
  }

  render() {
    if (this.props.user === null || !this.props.user) {
      return (<Redirect to='/logout' />)
    }

    return (
      <div className='center'>
      {this.state.upload === false &&
        <div>
      
          <h1>Upload hier uw CSV bestand</h1>

             <UploadCSVForm toggleUpload={this.toggleUpload}/>

        <p>Af- en bijschrijvingen exporteren vanuit Mijn ING</p>
        <p>> Ga naar Mijn ING</p>
        <p>> Log in met uw gebruikersnaam en wachtwoord</p>
        <p>> Klik op Service</p>
        <p>> Klik op Af- en bijschrijvingen downloaden</p>
        <p>> Selecteer uw Rekening</p>
        <p>> Voer in de datumvelden in vanaf welke dag en tot welke dag uw overzicht moet lopen (bijvoorbeeld 01-01-2017 en 31-12-2017 voor een jaaroverzicht van 2017)</p>
        <p>> Kies bij 'Bestandsformaat' voor Kommagescheiden CSV</p>
        <p>> Klik op 'Download'</p>
        <p>> Klik vervolgens op 'Upload' om de CSV te importeren</p>

      {this.props.error && <span style={{ color: 'red' }}>{this.props.error}</span>}
      </div>}
      {this.state.upload === true &&
      <div>
        <h1>De upload is successvol afgerond!</h1>
      <Link to='/dashboard'><Button className='privacyButton'>Go to overview</Button></Link>
      </div> }
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