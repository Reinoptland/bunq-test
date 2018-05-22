import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'
import { fetchTransactions } from '../../actions/transactions'
import {Redirect} from 'react-router-dom'

const renderContract = ({ ...props }) => {
  return (
    <div key={`${props.id}-outer`}>
      <Typography key={`${props.id}-name`} variant='headline'>{props.contractName}</Typography>
      <Typography key={`${props.id}-value`}>{props.value}</Typography>
    </div>
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
    console.log(this.props.user)
    if(this.props.user === null || !this.props.user) return( <Redirect to='/logout' /> )
    return (
      <div className="center">
        <Typography style={{margin: '0 0 30px 0'}} variant='display1'> Insurance
        {
            transactions ? transactions.map(t => {
              return t.type === 'insurance' ?
                (renderContract(t)) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{ margin: '30px 0' }} variant='display1'> Telecom
          {
            transactions ? transactions.map(t => {
              return t.type === 'telecom' ?
                (renderContract(t)) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{ margin: '30px 0' }} variant='display1'> Energy
        {
            transactions ? transactions.map(t => {
              return t.type === 'energy' ?
                (renderContract(t)) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{ margin: '30px 0' }} variant='display1'> Other
        {
            transactions ? transactions.map(t => {
              return t.type === 'other' ?
                (renderContract(t)) : null
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