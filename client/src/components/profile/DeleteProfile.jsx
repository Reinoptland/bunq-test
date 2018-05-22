import React from 'react'
import Button from 'material-ui/Button';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom'
// import { deleteUser, deleteUserFeedback, deleteUserTransactions } from "../../actions/users"



export default class AlertDeleteUser extends React.Component {
    state = {
      open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
    handleClose = (e) => {
       if (e.target.textContent === 'Ja'){
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
              <Typography variant='body2' className="privacyTypography"><Button onClick={this.handleClickOpen} className="deleteUserButton">Account verwijderen</Button></Typography>
              <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    style={{margin: 'auto'}}
                    >

                    <DialogTitle id="alert-dialog-title">{"Weet u zeker dat u uw account willt verwijderen?"}</DialogTitle>
                    <DialogContent>
                      <Typography variant='subheading'>
                      Als u 'ja' kiest zal uw account permanent verwijderd worden.
                        </Typography>
                     <div style={{position: 'relative', left: '45%'}}>
                     <Link to='/profile'>
                    <Button id="delete1" onClick={this.handleClose} color="primary" variant='raised' style={{marginRight: 20, marginLeft: 20}}>
                      Nee
                    </Button>
                    </Link>
                    <Link to='/profile'>
                    <Button id="delete2" variant='raised' name='agree' onClick={this.handleClose} color="primary" style={{ marginLeft: 20}}>
                      Ja
                    </Button>
                    </Link>
                    </div>
                    </DialogContent>
               </Dialog>
               </div>
    );
  }
}
