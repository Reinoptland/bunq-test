import React, { PureComponent } from 'react'

export default class BunqForm extends PureComponent {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault()
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
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Bunq Key</label>
          <input type="key" name="key" id="key" value={
            this.state.key || ''
          } onChange={this.handleChange} />
        </div>

        <button type="submit">Volgende</button>
      </form>
    )
  }
}