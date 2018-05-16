import React, { PureComponent } from 'react'
import pieGraph from './Graph'
import { Grid, Typography } from 'material-ui';
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
})
  return [["Category", "Amount"], ["Insurance", insurance], ["Telecom", telecom], ["Energy", energy]]
}

class DashboardPage extends PureComponent {
  componentWillMount() {
    if (this.props.transactions === null) {
      this.props.fetchTransactions(1)
    }
  }

  render(){
    if (!this.props.user) return (
      <Redirect to="/login" />
    )
    let data = [["Category", "Amount"],[]]
    const colors = ['#127ECF', '#90C227', '#F57E18', '#E94435']
    const {firstName, lastName} = this.props.user
    if(this.props.transactions) {
    data = calculateTransactions(this.props.transactions)
    }
    console.log(data)
    return(
      <Grid container alignContent={'center'} alignItems={'center'} style={{width: '100%'}} spacing={40}>
        <Grid xs={12} item>
          <Typography>
            Hi {firstName} {lastName}! Here is an overview of your transactions.
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
  user: state.currentUser.user ? state.currentUser.user : null ,
  transactions: state.transactions
})

export default connect(maspStateToProps, { fetchTransactions })(DashboardPage)