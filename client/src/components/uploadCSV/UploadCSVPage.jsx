import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { privacy, fetchProfile } from '../../actions/users'
import UploadCSVForm from './UploadCSVForm'
import { AlertDialog } from '../privacy/PrivacyForm'
import { Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';


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
      <Paper className='paper-upload-csv' >
      <div className='center'>
      {this.state.upload === false &&
        <div className="csvPage">
          <div className="uploadCsvDiv">
          <h1 className="titleCsv">Upload hier uw CSV bestand</h1>

             <UploadCSVForm toggleUpload={this.toggleUpload}/>
        </div>
        <div className="howToExport">
        <ol>
        <h2>Af- en bijschrijvingen exporteren vanuit <a href="https://mijn.ing.nl/login/" target="blank"> Mijn ING</a></h2>
        <li><span>Ga naar Mijn ING</span></li>
        <li><span>Log in met uw gebruikersnaam en wachtwoord</span></li>
        <li><span>Klik op Service</span></li>
        <li><span>Klik op Af- en bijschrijvingen downloaden</span></li>
        <li><span>Selecteer uw Rekening</span></li>
        <li><span>Voer in de datumvelden in vanaf welke dag en tot welke dag uw overzicht moet lopen (bijvoorbeeld 01-01-2017 en 31-12-2017 voor een jaaroverzicht van 2017)</span></li>
        <li><span>Kies bij 'Bestandsformaat' voor Kommagescheiden CSV</span></li>
        <li><span>Klik op 'Download'</span></li>
        <li><span>Klik vervolgens op 'Upload' om de CSV te importeren</span></li>
        </ol>
        </div>

        <div className="privDialogCsv">
        <AlertDialog className="dialogCsv" privacy={this.props.privacy} user={this.props.user} fetchProfile={this.props.fetchProfile}/>
        </div>
      {this.props.error && <span style={{ color: 'red' }}>{this.props.error}</span>}
      </div>}
      {this.state.upload === true &&
      <div className="privacyInCsv">
        <h1 id="uploadSuccess">De upload is successvol afgerond!</h1>
      <Link to='/dashboard'><Button className='privacyButtonCsv'>Bekijk uw dashboard</Button></Link>

      </div> }
    </div>
    </Paper>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    user: state.currentUser ? state.currentUser.user : null
  }
}

export default connect(mapStateToProps, { privacy, fetchProfile })(UploadCSVPage)
