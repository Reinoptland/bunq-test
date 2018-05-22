import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'
import { fetchTransactions, deleteTransaction } from '../../actions/transactions'
import {Redirect, Link} from 'react-router-dom'
// import { Button } from 'material-ui';
import Clear from '@material-ui/icons/Clear'

const renderContract = ({ ...props }) => {
  return (
    <div key={`${props.id}-outer`}>
      <Typography key={`${props.id}-name`} variant='headline'>{props.contractName}</Typography>
      <Typography key={`${props.id}-value`}>{props.value}</Typography>
    </div>
  )
}

// const handleDelete = (id, d) => {
//   console.log('deleted!')
//   d(id)
// }
class ContractsPage extends PureComponent {
  state = {
    buttons: true
  }
  componentWillMount(){
    if (this.props.user === null || !this.props.user) return (<Redirect to='/login' />)
    this.props.fetchTransactions(this.props.user.id)
    if(this.props.buttons === false) this.setState({
      buttons: false
    })
  }

  handleDelete = (id) => {
    this.props.deleteTransaction(id)
  }

  render() {
    console.log(this.props)
    const { transactions } = this.props
    if(this.props.user === null || !this.props.user) return( <Redirect to='/logout' /> )
    return (
      <div className="center">
      {
        this.props.trans
      }
        <Typography style={{margin: '0 0 30px 0'}} variant='display1'> Verzekering
        {
            transactions ? transactions.map(t => {
              return t.type === 'insurance' ?
                (<div>
                  <Link key={`${t.id}-link`} to={`/contracts/${t.contractName}`}>{renderContract(t)}</Link>
                  {
                    this.state.buttons ? (<Clear onClick={() => this.handleDelete(t.id)} color='primary' variant='fab' mini></Clear>) : null
                  }                  
                  </div>) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{ margin: '30px 0' }} variant='display1'> Telecom
          {
            transactions ? transactions.map(t => {
              return t.type === 'telecom' ?
                (<div>
                  <Link key={`${t.id}-link`} to={`/contracts/${t.contractName}`}>{renderContract(t)}</Link>
                  {
                    //when delete button clicked, delete the contract
                    this.state.buttons ? (<Clear onClick={() => this.handleDelete(t.id)} color='primary' variant='fab' mini></Clear>) : null
                  }
                  </div>) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{ margin: '30px 0' }} variant='display1'> Energy
        {
            transactions ? transactions.map(t => {
              return t.type === 'energy' ?
                (<div>
                  <Link key={`${t.id}-link`} to={`/contracts/${t.contractName}`}>{renderContract(t)}</Link>
                  {
                    this.state.buttons ? (<Clear onClick={() => this.handleDelete(t.id)} color='primary' variant='fab' mini></Clear>) : null
                  }                
                  </div>) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{ margin: '30px 0' }} variant='display1'> Overig 
        {
            transactions ? transactions.map(t => {
              return t.type === 'other' ?
                (<div>
                  <Link key={`${t.id}-link`} to={`/contracts/${t.contractName}`}>{renderContract(t)}</Link>
                  {
                    // to delete contracts just send the contract name instead of the transaction id -- REPLACE THIS!
                    this.state.buttons ? (<Clear onClick={() => this.handleDelete(t.id)} color='primary' variant='fab' mini></Clear>) : null
                  }                
                  </div>) : null
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

export default connect(mapStateToProps, { fetchTransactions, deleteTransaction })(ContractsPage)