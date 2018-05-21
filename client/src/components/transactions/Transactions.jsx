import React, { PureComponent } from 'react'
import BarGraph from '../dashboard/BarGraph'
import { Grid, Typography, Divider } from 'material-ui';
import { connect } from 'react-redux'
import { fetchTransactions } from '../../actions/transactions'
import { Redirect } from 'react-router-dom'
import ContractsPage from '../contracts/ContractsPage'

class TransactionsPage extends PureComponent {
  render(){
    return(
      <div>
        <p>{this.props.match.params.name}</p>
        Coming soon...
      </div>
    )
  }
}

export default TransactionsPage