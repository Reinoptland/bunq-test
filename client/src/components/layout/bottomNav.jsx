import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

//styling
import './bottomNav.css'

const BottomNav = (props) => {


    const { location } = props
    return (
        <div className='bottom-nav'>
            <div className='left-icons'>
                {location.pathname.indexOf('dashboard') < 0 && <Link to={'/dashboard'}><img src="/icons/home.svg" alt="home-icon"></img></Link>}
                {location.pathname.indexOf('dashboard') > 0 && <Link to={'/dashboard'}><img src="/icons/homeActive.svg" alt="home-icon"></img></Link>}
                {location.pathname.indexOf('contracts') < 0 && <Link to={'/contracts'}><img src="/icons/contracten.svg" alt="contracts-icon"></img></Link>}
                {location.pathname.indexOf('contracts') > 0 && <Link to={'/contracts'}><img src="/icons/contractenActive.svg" alt="contracts-icon"></img></Link>}
            </div>
            <div className='add-button'>
                {location.pathname.indexOf('csv') < 0 && <Link to={'/csv'}><img src="/icons/addButton.svg" alt="add-icon"></img></Link>}
                {location.pathname.indexOf('csv') > 0 && <Link to={'/csv'}><img src="/icons/addButtonActive.svg" alt="add-icon"></img></Link>}
            </div>
            <div className='right-icons'>
                {location.pathname.indexOf('advies') > 0 && <Link to={'/advies'}><img src="/icons/adviesActive.svg" alt="advice-icon"></img></Link>}
                {location.pathname.indexOf('advies') < 0 && <Link to={'/advies'}><img src="/icons/advies.svg" alt="advice-icon"></img></Link>}
                <Link to={'/logout'}><img src="/icons/loguit.svg" alt="loguit-icon"></img></Link>
            </div>

        </div>

    );
}

const mapStateToProps = state => ({

})

export default withRouter(
    connect(mapStateToProps)(BottomNav)
)