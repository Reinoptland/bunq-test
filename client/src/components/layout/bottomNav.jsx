import React, { Component } from 'react'
// import '../.././App.css'
import '../../App.css'

class BottomNav extends Component {

    render() {
        return (
            <div className='bottom-nav'>
                <div className='left-icons'>
                    <img src="../../../icons/home.svg" alt="home-icon"></img>
                    <img src="../../../icons/contracten.svg" alt="contract-icon"></img>
                </div>
                <div className='add-button'>
                    <img src="../../../icons/addButton.svg" alt="home-icon"></img>
                </div>
                <div className='right-icons'>
                    <img src="../../../icons/advies.svg" alt="advies-icon"></img>
                    <img src="../../../icons/meer.svg" alt="meer-icon"></img>
                </div>

            </div>

        );
    }
}

export default BottomNav