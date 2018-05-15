import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bunqLogin } from '../../actions/users'
import BunqForm from './BunqForm'
//import { Redirect } from 'react-router-dom'

class BunqDetails extends PureComponent {
    handleSubmit = (data) => {
        this.props.bunqLogin(data.key)
    }

    render() {
        return (
            <div>
                <h1>Bunq Login</h1>

                <BunqForm onSubmit={this.handleSubmit} />

                {this.props.error && <span style={{ color: 'red' }}>{this.props.error}</span>}
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        //error: state.bunqLogin.error
    }
}

export default connect(mapStateToProps, { bunqLogin })(BunqDetails)