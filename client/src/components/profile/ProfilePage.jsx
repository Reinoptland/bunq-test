import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchProfile } from '../../actions/users'
import { Redirect } from 'react-router-dom'
import Button from 'material-ui/Button'
import EditProfileForm from "./EditProfileForm"
import AlertDeleteUser from "./DeleteProfile"
import {updateProfile, deleteUser, deleteUserTransactions, deleteUserFeedback} from "../../actions/users"


class ProfilePage extends PureComponent {
  
  state = {
    editProfile: false,
  }

  componentWillMount() {
    if(this.props.user === null) return (<Redirect to='/logout' />)
    
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

  deleteUser = (data) => {
    this.props.deleteUser(data)
  }

  deleteUserTransactions = (data) => {
    this.props.deleteUserTransactions(data)
  }

  deleteUserFeedback = (data) => {
    this.props.deleteUserFeedback(data)
  }


  render(){
    if (!this.props.user || this.props.user === null) return (
      <Redirect to="/logout" />
    )

    const {firstName, lastName, email, permission } = this.props.user

       return(
      <div className="editForm">
          <h1>
            Dit is een overzicht van u profiel gegevens:
          </h1>
               <p>voornaam: {firstName}</p> 
               <p>achternaam: {lastName}</p> 
               <p>email: {email}</p> 
               <p>akkoord (privacy): {permission===true ? "True" : "False"}</p> 
               {
               this.props.user !== null && this.props.user ? console.log("this.props.user = ", this.props.user) : console.log('nope')
               }
          {!this.state.editProfile &&
          <Button onClick={this.toggleEdit} className="editProfile">Wijzig</Button>
          }
          <br></br>
          {
            this.state.editProfile &&
            <EditProfileForm initialValues={this.props.user} onSubmit={this.updateProfile}/>
          }
          <AlertDeleteUser deleteUser={this.props.deleteUser} deleteUserFeedback={this.props.deleteUserFeedback} deleteUserTransactions={this.props.deleteUserTransactions} user={this.props.user.id} />
      </div>
     
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.currentUser.user ? state.currentUser.user : null 
} )

export default connect(mapStateToProps, { fetchProfile, updateProfile, deleteUser, deleteUserFeedback, deleteUserTransactions })(ProfilePage)
