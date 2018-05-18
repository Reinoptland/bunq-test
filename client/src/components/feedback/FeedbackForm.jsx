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
                    <h3 className="feedbackText"> You have not accepted our <em> Privacy </em> agreement.<br/><br/><strong>ROOS</strong> has strict data protection rules. Unfortunately, at this time <br/> we cannot let you proceed.
                    Please fill out our  feedback form <br/>and let us know how we can improve our app.</h3>
                    <h2 className="feedbackTitle">Why did you not accept?</h2>
                    <input type="radio" id="contactChoice1" name="choice" value="option1" onChange={this.handleChange}/>
                   <label for="contactChoice1"> I don't have Bunq </label>
                    <br />
                    
                    <input type="radio" id="contactChoice2" name="choice" value="option2"onChange={this.handleChange} />
                    <label for="contactChoice2"> I don't understand PSD </label>
                    <br />
                    
                    <input type="radio" id="contactChoice3" name="choice" value="option3" onChange={this.handleChange}/>
                    <label for="contactChoice3"> I don't trust the internet </label>
                    <br />
                    
                    <input type="radio" id="contactChoice4" name="choice" value="option4" onChange={this.handleChange}/>
                    <label for="contactChoice4"> I changed my mind </label>
                    <br />
                    <br />
                    
                    <div className="remarks">
                    <label className="remarksLabel"> Additional Remarks:</label>
                    
                    <textarea type="text-area" id="remarks" name='remarks' value={
                    this.state.remarks || '' } onChange={this.handleChange}/>
                    <br />
                    </div>
                    <button type="submit" className="feedbackButton">Submit</button>
                    
                </div>
            </form>
          
        )
    }
}