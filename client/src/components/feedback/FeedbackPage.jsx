import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { feedback } from '../../actions/users'
import FeedbackForm from './FeedbackForm'

class FeedbackPage extends PureComponent {
  handleSubmit = (data) => {
    // console.log(data)
    this.props.feedback(data, this.props.user.id)
    alert('Thanks for your feedback!');
    window.location = '/logout';  }

    render() {
        return (
            <div>

                <h1 style={{textAlign: 'center', margin:'0 0 0 -5px'}}>Feedback</h1>
                <div className="feedbackForm">
                    <FeedbackForm onSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
  return {
    feedback: state.feedback,
    user: state.currentUser ? state.currentUser.user : null
  }
}


export default connect(mapStateToProps, { feedback })(FeedbackPage)