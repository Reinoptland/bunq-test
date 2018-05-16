import React, { PureComponent } from 'react'

export default class SignupForm extends PureComponent {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    this.props.onSubmit(this.state)
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="signupForm">
        <div className="signupFormLabels">
          <label htmlFor="firstName">Voornaam</label>
          <input type="firstName" name="firstName" id="firstName" value={
            this.state.firstName || ''
          } onChange={this.handleChange} />
        </div>
        <div className="signupFormLabels">
          <label htmlFor="lastName">Achternaam</label>
          <input type="lastName" name="lastName" id="lastName" value={
            this.state.lastName || ''
          } onChange={this.handleChange} />
        </div>
        <div className="signupFormLabels">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={
            this.state.email || ''
          } onChange={this.handleChange} />
        </div>

        <div className="signupFormLabels">
          <label htmlFor="password">Wachtwoord</label>
          <input type="password" name="password" id="password" value={
            this.state.password || ''
          } onChange={this.handleChange} />
        </div>

        <div className="signupFormLabels">
          <label htmlFor="confirmPassword">Herhaal wachtwoord</label>
          <input type="password" name="confirmPassword" id="confirmPassword" value={
            this.state.confirmPassword || ''
          } onChange={this.handleChange} />
        </div>

        {
          this.state.password &&
          this.state.confirmPassword &&
          this.state.password !== this.state.confirmPassword &&
          <p style={{ color: 'red' }}>De wachtwoorden zijn anders!</p>
        }

        <button type="submit" className="signupButton">Aanmelden</button>
      </form>
    )
  }
}