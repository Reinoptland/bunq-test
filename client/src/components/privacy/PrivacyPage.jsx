import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { privacy } from '../../actions/users'
import PrivacyForm from './PrivacyForm'
//import { Redirect } from 'react-router-dom'
//import bunqPrivacy from '../../constants'

class PrivacyDetails extends PureComponent {
    handleSubmit = () => {
        this.props.privacy()
    }

    render() {
        // if (this.props.currentUser) return (
        //     <Redirect to='https://halloroos.nl/over-roos/privacy' />
        // )
        return (
            <div>
                <h1>Privacy</h1>

                <PrivacyForm onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        //currentUser: state.currentUser,
        //error: state.privacy.error
    }
}

export default connect(mapStateToProps, { privacy })(PrivacyDetails)