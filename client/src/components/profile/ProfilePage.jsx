import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchProfile } from '../../actions/users'
import { Redirect } from 'react-router-dom'
import Button from 'material-ui/Button'
import EditProfileForm from "./EditProfileForm"
import {updateProfile} from "../../actions/users"


class ProfilePage extends PureComponent {
  
  state = {
    editProfile: false,
  }

  componentWillMount() {
     console.log("props user riga 17", this.props.user)

    if(this.props.user === null) return (<Redirect to='/login' />)
    
    if (this.props.user !== null) { 
      this.props.fetchProfile(this.props.user)}
  }

  toggleEdit = () => {
    this.setState({
      editProfile: !this.state.editProfile
    })
  }

  updateProfile = (data) => {
    this.props.updateProfile(this.props.user.id, data)
    this.toggleEdit()
  }


  render(){
    if (!this.props.user || this.props.user === null) return (
      <Redirect to="/login" />
    )

    const {firstName, lastName, email, permission, bunqKey } = this.props.user
    console.log("props user riga 44", this.props.user)
    permission===true ? "True" : "False"
    return(
      <div className="editForm">
          <h1>
            Dit is een overzicht van u profiel gegevens:
            </h1>
               <p>voornaam: {firstName}</p> 
               <p>achternaam: {lastName}</p> 
               <p>email: {email}</p> 
               <p>akkoord (privacy): {permission===true ? "True" : "False"}</p> 
               <p>Bunq Key: {bunqKey}</p> 
               {
               this.props.user !== null && this.props.user ? console.log("this.props.user = ", this.props.user) : console.log('nope')
               }
          {!this.state.editProfile &&
          <Button onClick={this.toggleEdit} className="editProfile">Edit Information</Button>
          }
          <br></br>
          {
            this.state.editProfile &&
            <EditProfileForm initialValues={this.props.user} onSubmit={this.updateProfile}/>
          }
      </div>
     
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.currentUser.user ? state.currentUser.user : null 
} )

export default connect(mapStateToProps, { fetchProfile, updateProfile })(ProfilePage)