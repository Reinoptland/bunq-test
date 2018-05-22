import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//import { feedback } from '../../actions/users'
import { Redirect } from 'react-router-dom'
//import FeedbackForm from './FeedbackForm'

export default class AdviesPage extends PureComponent {
    // handleSubmit = (data) => {
    //     // console.log(data)
    //     this.props.feedback(data, this.props.user.id)
    //     // console.log('data')
    // }

    render() {
        return (
            <form>

                <h1>Advies</h1>
                <div className="adviesForm">
                    <p> Thank you for visiting, we have not yet implemented this page but feel free click on the link below to get more information.</p>
                    <a href='https://halloroos.nl/energy/2/energy-check'> Follow Me! </a>
                    {/* <FeedbackForm onSubmit={this.handleSubmit} /> */}
                </div>
            </form>
        )
    }
}

// const mapStateToProps = function (state) {
//     return {
//         feedback: state.feedback,
//         user: state.currentUser ? state.currentUser.user : null
//     }
// }

// export default connect(mapStateToProps, { feedback })(AdviesPage)