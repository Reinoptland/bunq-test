import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'
import { fetchTransactions } from '../../actions/transactions'

const renderContract = ({ ...props }) => {
  console.log(props)
  return (
    <Typography>
      <Typography variant='headline'>{props.contractName}</Typography>
      <Typography>{props.value}</Typography>
    </Typography>
  )
}

class ContractsPage extends PureComponent {
  componentWillMount() {
    if (this.props.transactions === null) {
      this.props.fetchTransactions(1)
    }
  }
  render() {
    // console.log(this.props)
    const { transactions } = this.props
    console.log(transactions)
    return (
      <div>
        {
          transactions ? console.log(transactions) : console.log('nope')
        }
        <Typography style={{margin: '0 0 30px 0'}} variant='display1'> Insurance
        {
            transactions ? transactions.map(t => {
              console.log(t.type)
              return t.type === 'insurance' ?
                (renderContract(t)) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{ margin: '30px 0' }} variant='display1'> Telecom
          {
            transactions ? transactions.map(t => {
              console.log(t.type)
              return t.type === 'telecom' ?
                (renderContract(t)) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{ margin: '30px 0' }} variant='display1'> Energy
        {
            transactions ? transactions.map(t => {
              console.log(t.type)
              return t.type === 'energy' ?
                (renderContract(t)) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  transactions: state.transactions
})

export default connect(mapStateToProps, { fetchTransactions })(ContractsPage)