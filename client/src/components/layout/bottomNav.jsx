import React, { Component } from 'react'
import '../../App.css'

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
                    <a href='/login'>
                    <img src="../../../icons/meer.svg" alt="meer-icon"></img>
                    </a>
                </div>

            </div>

        );
    }
}

export default BottomNav