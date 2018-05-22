import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'
import TermsPage from './termPage'

class MeerMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div >
        <Button
          className="bottom-nav"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <img src="../../../icons/meer.svg" alt="meer-icon"></img>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        
          <Link to='/terms' component={TermsPage}><MenuItem onClick={this.handleClose}>Terms and conditions</MenuItem></Link>
          <Link to='/csv'><MenuItem onClick={this.handleClose}>Upload CSV file</MenuItem></Link>
          <Link to='/logout'><MenuItem onClick={this.handleClose}>Logout</MenuItem></Link>
        </Menu>
      </div>
    );
  }
}

export default MeerMenu;