import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { feedback } from '../../actions/users'
import { Redirect } from 'react-router-dom'
import FeedbackForm from './FeedbackForm'

class FeedbackPage extends PureComponent {
  handleSubmit = (data) => {
    this.props.feedback(data, this.props.user.id)
    return (<Redirect to='login' />)
  }

  render() {
    if(!this.props.currentUser || this.props.currentUser === null) return(<Redirect to='/login'/>)
    return (
      <div>
        <h1>Feedback</h1>
        <div className="feedbackForm">
          <FeedbackForm onSubmit={() => this.handleSubmit} />
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