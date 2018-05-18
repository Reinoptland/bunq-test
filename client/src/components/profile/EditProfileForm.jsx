import React, { PureComponent } from 'react'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'

export default class EditProfileForm extends PureComponent {

    state = {}

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
         user: this.props.user,
         [name] : value
      })
    //   console.log(this.state)
    };

    render() {
      const initialValues = this.props.initialValues || {}

      return(
        <form onSubmit={this.handleSubmit} className="editProfileForm">

          <h3>Change your profile details:</h3>

          <TextField
            id='firstName'
            name='firstName'
            label='First Name'
            className="editProfileLabel"
            value={this.state.firstName || initialValues.firstName || ''}
            onChange={this.handleChange}
          />

          <TextField
            id='lastName'
            name='lastName'
            label='Last Name'
            className="editProfileLabel"
            value={this.state.lastName || initialValues.lastName || ''}
            onChange={this.handleChange}
          />

             <TextField
            id='email'
            name='email'
            label='Email'
            className="editProfileLabel"
            value={this.state.email || initialValues.email || ''}
            onChange={this.handleChange}
          />

          <Button
            type='submit'
            color="secondary"
            variant="raised"
            className="saveEditedProfile"
          > Save changes </Button>

        </form>
      )
    }
}