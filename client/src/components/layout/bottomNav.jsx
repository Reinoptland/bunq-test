import React, { Component } from 'react'
import '../../App.css'
import MeerMenu from "./meerMenu"

class BottomNav extends Component {

    render() {
        return (
            <div className='bottom-nav'>
                <div className='bottom-nav'>
                    <a href='/dashboard'>
                    <img src="../../../icons/home.svg" alt="home-icon"></img>
                    </a>
                    <a href='/contracts'>
                    <img src="../../../icons/contracten.svg" alt="contract-icon"></img>
                    </a>
                    <a href='/'>
                    <img src="../../../icons/advies.svg" alt="advies-icon"></img>
                    </a>
                    <MeerMenu/>
                    
                </div>

            </div>

        );
    }
}

export default BottomNav

