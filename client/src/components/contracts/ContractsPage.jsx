import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'
import { fetchTransactions } from '../../actions/transactions'
import {Redirect, Link} from 'react-router-dom'

const renderContract = ({ ...props }) => {
  return (
    <Typography>
      <Typography variant='headline'>{props.contractName}</Typography>
      <Typography>{props.value}</Typography>
    </Typography>
  )
}

class ContractsPage extends PureComponent {
  state = {
    buttons: this.props.buttons
  }

  render() {
    const { transactions } = this.props
    if(this.props.user === null || !this.props.user) return( <Redirect to='/login' /> )
    return (
      <div className="center">
        <Typography style={{margin: '0 0 30px 0'}} variant='display1'> Verzekering
        {
            transactions ? transactions.map(t => {
              return t.type === 'insurance' ?
                (<Link to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link>) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{ margin: '30px 0' }} variant='display1'> Telecom
          {
            transactions ? transactions.map(t => {
              return t.type === 'telecom' ?
                (<Link to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link>) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{ margin: '30px 0' }} variant='display1'> Energy
        {
            transactions ? transactions.map(t => {
              return t.type === 'energy' ?
                (<Link to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link>) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{ margin: '30px 0' }} variant='display1'> Overig
        {
            transactions ? transactions.map(t => {
              return t.type === 'other' ?
                (<Link to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link>) : null
            }) : <p>Contracts loading...</p>
        }
        </Typography>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  transactions: state.transactions,
  user: state.currentUser ? state.currentUser.user : null
})

export default connect(mapStateToProps, { fetchTransactions })(ContractsPage)