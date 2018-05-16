import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { feedback } from '../../actions/users'
//import FeedbackForm from './FeedbackForm'
import { Redirect } from 'react-router-dom'
import { RadioButton, RadioButtonGroup } from 'material-ui/Radio';


class FeedbackPage extends PureComponent {
    handleSubmit = () => {
        this.props.feedback()
    }

    render() {
        return (
            <form> 

                <h1>Feedback</h1>
                <div> Why did You not accept?
                    <br/>
                    <input type="radio" id="radioButton"/>
                    <label label> I don't have Bunq </label> 
                    <br />
                    <input type="radio" id="radioButton" />
                    <label label> I don't understand PSD </label>
                    <br />
                    <input type="radio" id="radioButton" />
                    <label label> I don't trust the internet </label>
                    <br />
                    <input type="radio" id="radioButton" />
                    <label label> I changed my mind </label>   
                    <br/> 
                    <label label> Additional Remarks</label>
                    <input type="text" id="text"/>
                </div>
            </form>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        feedback: state.feedback
    }
}

export default connect(mapStateToProps, { feedback })(FeedbackPage)