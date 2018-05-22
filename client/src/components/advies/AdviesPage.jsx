import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default class AdviesPage extends PureComponent {

    render() {
        // if (this.props.user === null || !this.props.user) return (<Redirect to='/login' />)
        return (
            <form>

                <h1>Advies</h1>
                <div className="adviesForm">
                    Dank voor het gebruik van onze ROOS app. Momenteel is deze pagina nog niet beschikbaar, maar u kunt op de onderstaande link klikken voor meer informatie.
                    <br/>
                    <br />
                    <a href='https://halloroos.nl/over-roos/contact' target='blank'>ROOS contact</a>
                </div>
            </form>
        )
    }
}