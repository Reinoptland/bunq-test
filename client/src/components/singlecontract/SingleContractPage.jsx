import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchTransactions } from '../../actions/transactions'
import { Redirect } from 'react-router-dom'
import AreaGraph from './AreaGraph'

class SingleContractPage extends PureComponent {
  
  componentWillMount() {

    if(this.props.user === null) return (<Redirect to='/login' />)
    if(this.props.transactions === null && this.props.user) {
    
      this.props.fetchTransactions(this.props.user.id)
    
    }
  }

  render(){
    
    if(this.props.user === null || !this.props.user) return (<Redirect to='/login' />)
    if(this.props.user.permission === false )
      return( <Redirect to="/csv"/>)

      const {transactions} = this.props

      const filteredTransactions = transactions
        .filter(transaction => transaction.contractName.toLowerCase().split(" ").join("") === this.props.match.params.name)
        .sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))

      const contractName = filteredTransactions[0].contractName

      let data = filteredTransactions
        .map(transaction => [transaction.date, Number(transaction.value.substring(1))])
      data[0] = ['Datum', 'Bedrag']

    return(
      <div>
        <h1>{contractName}</h1>
        <div className="center">

        {
          this.props.transactions ? (AreaGraph({data})) : null
        }
          
        {
          filteredTransactions.map(transaction => {
            return (
              <p key={transaction.id}>{`Datum: ${transaction.date}, Contract naam: ${transaction.contractName}, Uitgave: ${transaction.value}`}</p>)
          })
        }

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser ? state.currentUser.user : null ,
  transactions: state.transactions
})

export default connect(mapStateToProps, { fetchTransactions })(SingleContractPage)