import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { feedback } from '../../actions/users'
import { Redirect } from 'react-router-dom'
import FeedbackForm from './FeedbackForm'

class FeedbackPage extends PureComponent {
    handleSubmit = (data) => {
        this.props.feedback(data)
    }

    render() {
        return (
            <form>

                <h1>Feedback</h1>
                <div className="feedbackForm">
                    <FeedbackForm onSubmit={this.handleSubmit} />
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