import React, { PureComponent } from 'react'
import pieGraph from './Graph'
import { Grid, Typography, Divider } from 'material-ui';
import { connect } from 'react-redux'
import { fetchTransactions } from '../../actions/transactions'
import { Redirect } from 'react-router-dom'


const calculateTransactions = (arr) => {
  let insurance = 0 
  let telecom = 0  
  let energy = 0 
arr.map(t => {
  let value =  (- Number(t.value))
  if(t.type === 'insurance') insurance = insurance + value
  if(t.type === 'telecom') telecom = telecom + value
  if(t.type === 'energy') energy = energy + value
  return {insurance, energy, telecom}
})
  return [["Category", "Amount"], ["Insurance", insurance], ["Telecom", telecom], ["Energy", energy]]
}

class DashboardPage extends PureComponent {
  componentWillMount() {
    if(this.props.user === null) return (<Redirect to='/login' />)
    if (this.props.transactions === null && this.props.user) {
      this.props.fetchTransactions(this.props.user.id)
    }
  }

  render(){
    if (this.props.user === null || !this.props.user) return (<Redirect to='/login' />)
    if(this.props.user.permission === false || this.props.user.bunqKey === 'null'){
      return( <Redirect to="/bunq"/>)
    }
    let data = [["Category", "Amount"],[]]
    const colors = ['#127ECF', '#90C227', '#F57E18', '#E94435']
    const {firstName, lastName} = this.props.user
    if(this.props.transactions) {
    data = calculateTransactions(this.props.transactions)
    }
    console.log(data)
    return(
      <Grid container alignItems={'center'} style={{width: '100%', flex: 1}} spacing={16}>
        <Grid xs={12} s={12} item>
          <Typography style={{textAlign: 'center'}}>
            Hi {firstName} {lastName}! Here is an overview of your transactions.
            <Divider style={{margin: '10px 0 20px 0'}}/>
              {
                this.props.user !== null && this.props.user ? console.log(this.props.user) : console.log('nope')
              }
            {
              pieGraph({data, colors})
            }
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

const maspStateToProps = (state, props) => ({
  user: state.currentUser ? state.currentUser.user : null ,
  transactions: state.transactions
})

export default connect(maspStateToProps, { fetchTransactions })(DashboardPage)