import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default class AdviesPage extends PureComponent {

    render() {
        return (
            <form>

                <h1>Advies</h1>
                <div className="adviesForm">
                    <p> Thank you for visiting, we have not yet implemented this page but feel free click on the link below to get more information.</p>
                    <a href='https://halloroos.nl/energy/2/energy-check' target='blank'> Follow Me! </a>
                </div>
            </form>
        )
    }
}
