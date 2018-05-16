import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'
import { fetchTransactions } from '../../actions/transactions'

const renderContract = ({...props}) => {
  console.log(props)
  return(
    <Typography>
      <Typography variant='headline'>{props.contractName}</Typography>
      <p>{props.value}</p>
    </Typography>
  )
}

class ContractsPage extends PureComponent {
  componentWillMount() {
    if (this.props.transactions === null) {
      this.props.fetchTransactions(1)
    }
  }
  render(){
    // console.log(this.props)
    const {transactions} = this.props
    console.log(transactions)
    return(
      <div>
        {
          transactions? console.log(transactions) : console.log('nope')
        }
        {
          transactions ? transactions.map(t => {
            return renderContract(t)
          }) : <p>Contracts loading...</p>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  transactions: state.transactions
})

export default connect(mapStateToProps, { fetchTransactions })(ContractsPage)