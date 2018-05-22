import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withRouter } from 'react-router'
import {Link} from "react-router-dom"
import { userId } from '../../jwt'
import { connect } from 'react-redux'
import { logo, comment, person } from './logo'

const TopBar = (props) => {
  const { location, history, user } = props

  return (
    <AppBar position="absolute" style={{ fontFamily: '', background: 'linear-gradient(to right, #E84435, #F57F17)', zIndex: 10 }}>
      <Toolbar>
       {user !== null ? <Link to='/profile' >
          {person()}
        </Link>: null}

        <Typography variant="title" color="inherit" style={{ textAlign: 'center', flex: 1 }}>
          {logo()}  
          </Typography>
        <a href='mailto:service@halloroos.nl'>
          {comment()}
        </a>

        {
          location.pathname.indexOf('signup') > 0 &&
          <Button color="inherit" onClick={() => history.push('/login')}>Inloggen</Button>
        }
        {
          location.pathname.indexOf('login') > 0 &&
          <Button color="inherit" onClick={() => history.push('/signup')}>Aanmelden</Button>
        }
       
        {
          /dashboard$/.test(location.pathname) &&
          <Button color="inherit" onClick={() => history.push('/logout')}>Log out</Button>
        }
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  user: state.currentUser && state.users &&
    state.users[userId(state.currentUser.jwt)]
})

export default withRouter(
  connect(mapStateToProps)(TopBar)
)
