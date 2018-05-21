import React from 'react'
import Button from 'material-ui/Button';
import Dialog, { DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider'
import {Link} from 'react-router-dom'
import { deleteUser, deleteUserFeedback, deleteUserTransactions } from "../../actions/users"



export default class AlertDeleteUser extends React.Component {
    state = {
      open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
    handleClose = (e) => {
       if (e.target.textContent === 'yes'){
          // dispatch action to delete user
        this.props.deleteUserFeedback(this.props.user)
        this.props.deleteUserTransactions(this.props.user)
        this.props.deleteUser(this.props.user)

      }
          this.setState({ open: false });
        };

    deleteUser = (id) => {
        this.props.deleteUser(id)
    }

    deleteUserFeedback = (id) => {
        this.props.deleteUserFeedback(id)
    }

    deleteUserTransactions = (id) => {
        this.props.deleteUserTransactions(id)
    }

        render() {
            return (
              <div>
              <Typography variant='body2' className="privacyTypography"><Button onClick={this.handleClickOpen} className="deleteUserButton">Delete User</Button></Typography>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    style={{margin: 'auto'}}
                    >

                    <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete your account?"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                      <Typography align='justify' paragraph={true}>
                      If you click "yes" your account will be removed permanently.
                        </Typography>
                        <Divider style={{margin: '1.5rem 0'}} />
                <div style={{position: 'relative', left: '45%'}}>
                  <Link to='/profile'>
                    <Button onClick={this.handleClose} color="primary" variant='raised' style={{marginRight: 20, marginLeft: 20}}>
                      No
                    </Button>
                  </Link>
                <Link to='/profile'>
              <Button variant='raised' name='agree' onClick={this.handleClose} color="primary" style={{ marginLeft: 20}}>
                      yes
                  </Button>
                 </Link>
                </div>
              </DialogContentText>                
            </DialogContent>
        </Dialog>
      </div>
    );
  }
}
