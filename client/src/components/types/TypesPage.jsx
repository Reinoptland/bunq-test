import React, { PureComponent } from 'react'
import BarGraph from '../dashboard/BarGraph'
import { Grid, Typography, Divider } from 'material-ui';
import { connect } from 'react-redux'
import { fetchTransactions } from '../../actions/transactions'
import { Redirect } from 'react-router-dom'
import ContractsPage from '../contracts/ContractsPage'

class TypesPage extends PureComponent {
  componentWillMount(){
    //fetch transactions by type
    // this.props.fetchTransactions()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <p>{this.props.match.params.type.slice(0, 1).toUpperCase() + this.props.match.params.type.slice(1)}</p>
        {}
        Coming soon...
      </div>
    )
  }
}

export default TypesPage