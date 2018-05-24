import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { feedback } from '../../actions/users'
import FeedbackForm from './FeedbackForm'
import { Paper } from '@material-ui/core';

class FeedbackPage extends PureComponent {
  handleSubmit = (data) => {
  
    this.props.feedback(data, this.props.user.id)
    
    
    setTimeout(_ => {window.location = '/logout'}, 3100);  
}

    render() {
        return (
           
            <Paper>
                 <div className="feedbackPage">
                <br/>
                    <br/>
            <div>

                <h1 style={{textAlign: 'center', margin:'0 0 0 -5px'}}>Feedback</h1>
                <div className="feedbackForm">
                    <FeedbackForm onSubmit={this.handleSubmit} />
                    <br/>
                    <br/>
                </div>
            </div>
            </div>
            </Paper>
            
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