import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchTransactions } from '../../actions/transactions'
import { Redirect } from 'react-router-dom'
import AreaGraph from './AreaGraph'
import { Paper } from '@material-ui/core'

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
    if(transactions === null) return (<div>Transacties inladen....</div>)

    const filteredTransactions = transactions
      .filter(transaction => transaction.contractName.toLowerCase().split(" ").join("") === this.props.match.params.name)
      .sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))

    const contractName = filteredTransactions[0].contractName

    let results = filteredTransactions
      .map(transaction => [transaction.date, Number(transaction.value.substring(1))])
    
    let data = [ ['Bedrag', 'Datum'] ];
    data = data.concat(results)

    return(
      <div>
        <Paper className="centerPaper">
          <div className="titleAndGraph">
          <h1>{contractName}</h1>
          {
            this.props.transactions ? (<div className='graph'>{AreaGraph({data})}</div>) : null
          }
          </div>
          <div className="detailedTransactions">
          <h2>Uw Transacties</h2>
          <ul>
          {
            filteredTransactions.map(transaction => {
              return (
                <li><p key={transaction.id}><strong>{transaction.contractName}</strong><br/>
                Transactie Datum: <strong>{transaction.date}</strong><br/>
                Uitgave: <strong>{transaction.value} €</strong></p></li>)
            })
          }
          </ul>
          </div>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser ? state.currentUser.user : null ,
  transactions: state.transactions
})

export default connect(mapStateToProps, { fetchTransactions })(SingleContractPage)