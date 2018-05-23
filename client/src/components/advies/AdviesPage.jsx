import React, { PureComponent } from 'react'


export default class AdviesPage extends PureComponent {

    render() {
        return (
            <form>

                <h1 style={{ textAlign: 'center', margin: '0 0 0 -5px' }}>Advies</h1>
                <div className="adviesText">
                    Dank voor het gebruik van onze ROOS app. Momenteel is deze pagina nog niet beschikbaar, maar u kunt op de onderstaande link klikken voor meer informatie.
                    <br/>
                    <br />
                    <a href='https://halloroos.nl/over-roos/contact' target='blank' className="signupButton">ROOS contact</a>
                </div>
            </form>
        )
    }
}


//style = {{ fontFamily: 'BrandonText-Bold', fontSize: '20px', textAlign: 'center', margin: '0 0 0 -5px' }}

