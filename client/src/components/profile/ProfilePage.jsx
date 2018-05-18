import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchProfile } from '../../actions/users'
import { Redirect } from 'react-router-dom'


class ProfilePage extends PureComponent {
  
  componentWillMount() {
      const profile = this.props.user
      console.log("props user " + this.props.user)

    if(this.props.user === null) return (<Redirect to='/login' />)
    if (this.props.user !== null) {
      this.props.fetchProfile(this.props.user.id)
    }
  }

  render(){
    if (!this.props.user || this.props.user === null) return (
      <Redirect to="/login" />
    )

    const {firstName, lastName, email, permission, bunqKey } = this.props.user
    permission===true ? "True" : "False"
    return(
          <h1>
            Dit is een overzicht van u profiel gegevens:
               <p>voornaam: {firstName}</p> 
               <p>achternaam: {lastName}</p> 
               <p>email: {email}</p> 
               <p>akkoord (privacy): {permission===true ? "True" : "False"}</p> 
               <p>Bunq Key: {bunqKey}</p> 
               {
               this.props.user !== null && this.props.user ? console.log(this.props.user) : console.log('nope')
               }
          </h1>
     
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.currentUser.user ? state.currentUser.user : null
})

export default connect(mapStateToProps, { fetchProfile })(ProfilePage)