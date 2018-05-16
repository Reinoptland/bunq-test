import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { feedback } from '../../actions/users'
//import FeedbackForm from './FeedbackForm'
import { Redirect } from 'react-router-dom'
//import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';


class FeedbackPage extends PureComponent {
    handleSubmit = () => {
        this.props.feedback()
    }

    render() {
        const styles = {
            block: {
                maxWidth: 250,
            },
            radioButton: {
                marginBottom: 16,
            },
        };

        return (
            <div>   
                <br/>
                <br />
                <h1>Feedback</h1>
                {/* <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                    <RadioButton
                        value="light"
                        label="Simple"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup> */}
                <p style={{ color: 'red' }}> Thanks for your feedback</p>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        feedback: state.feedback
    }
}

export default connect(mapStateToProps, { feedback })(FeedbackPage)