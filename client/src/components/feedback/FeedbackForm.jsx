import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { feedback } from '../../actions/users'
import { Redirect } from 'react-router-dom'


export default class FeedbackForm extends PureComponent {
    state = {}

    handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state)
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
                <div className="feedbackForm">
                
                    <h2>Why did you not accept?</h2>
                    <input type="radio" id="contactChoice1" name="contact" value="option1" onChange={this.handleChange}/>
                   <label for="contactChoice1"> I don't have Bunq </label>
                    <br />
                    
                    <input type="radio" id="contactChoice2" name="contact" value="option2"onChange={this.handleChange} />
                    <label for="contactChoice2"> I don't understand PSD </label>
                    <br />
                    
                    <input type="radio" id="contactChoice3" name="contact" value="option3" onChange={this.handleChange}/>
                    <label for="contactChoice3"> I don't trust the internet </label>
                    <br />
                    
                    <input type="radio" id="contactChoice4" name="contact" value="option4" onChange={this.handleChange}/>
                    <label for="contactChoice4"> I changed my mind </label>
                    <br />
                    <br />
                    
                    <label> Additional Remarks:</label>
                    
                    <input type="remarks" id="remarks" name='remarks' value={
                    this.state.remarks || '' } onChange={this.handleChange}/>
                    <br />
                    <button type="submit">Submit</button>
                    
                </div>
            </form>
          
        )
    }
}