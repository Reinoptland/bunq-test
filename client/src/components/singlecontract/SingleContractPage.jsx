import React, { PureComponent } from 'react'
import { Grid, Typography, Divider } from 'material-ui';
import { connect } from 'react-redux'
import { fetchContracts, fetchTransactions } from '../../actions/transactions'
import { Redirect } from 'react-router-dom'


class SingleContractPage extends PureComponent {
  componentWillMount() {
    console.log('mounting...')
   if(this.props.user === null) return (<Redirect to='/login' />)
    if (this.props.transactions === null && this.props.user) {
      this.props.fetchContracts(this.props.user.id)
      this.props.fetchTransactions(this.props.user.id)
    }
  }

  render(){
    if (this.props.user === null || !this.props.user) return (<Redirect to='/login' />)
    if(this.props.user.permission === false )
      return( <Redirect to="/csv"/>)

      const {transactions} = this.props
      const filteredTransactions = transactions.filter(transaction => transaction.contractName.toLowerCase().split(" ").join("") === this.props.match.params.name)
      const contractName = filteredTransactions[0].contractName


    console.log(filteredTransactions)
    return(
      <h1>{contractName}</h1>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.currentUser ? state.currentUser.user : null ,
  transactions: state.transactions
})

export default connect(mapStateToProps, { fetchTransactions })(SingleContractPage)