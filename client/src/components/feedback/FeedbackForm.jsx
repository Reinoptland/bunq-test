import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { feedback } from '../../actions/users'
import { Redirect } from 'react-router-dom'


export default class FeedbackForm extends PureComponent {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)

    }

    render() {
        return (
            <form>
                <div className="feedbackForm">
                    <h2>Why did you not accept?</h2>
                    <input type="radio" id="contactChoice1" name="contact" value="option1" />
                    <label for="contactChoice1"> I don't have Bunq </label>
                    <br />
                    <input type="radio" id="contactChoice2" name="contact" value="option2" />
                    <label for="contactChoice2"> I don't understand PSD </label>
                    <br />
                    <input type="radio" id="contactChoice3" name="contact" value="option3" />
                    <label for="contactChoice3"> I don't trust the internet </label>
                    <br />
                    <input type="radio" id="contactChoice4" name="contact" value="option4" />
                    <label for="contactChoice4"> I changed my mind </label>
                    <br />
                    <br />
                    <label> Additional Remarks:</label>
                    <input type="text" id="text" />
                    <br />
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}