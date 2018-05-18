import React, { Component } from 'react'
import '../../App.css'
import MeerMenu from "./meerMenu"
import {Link} from 'react-router-dom'

class BottomNav extends Component {

    render() {
        return (
            <div className='bottom-nav'>
                <div className='bottom-nav'>
                    <Link to='/dashboard'>
                    <img src="../../../icons/home.svg" alt="home-icon"></img>
                    </Link>
                    <Link to='/contracts'>
                    <img src="../../../icons/contracten.svg" alt="contract-icon"></img>
                    </Link>
                    <Link to='/'>
                    <img src="../../../icons/advies.svg" alt="advies-icon"></img>
                    </Link>
                    <MeerMenu/>
                    
                </div>

            </div>

        );
    }
}

export default BottomNav

