import React, { PureComponent } from 'react'
import pieGraph from './Graph'
import { Grid, Typography } from 'material-ui';
import { connect } from 'react-redux'
import { fetchTransactions } from '../../actions/transactions'
import { Redirect } from 'react-router-dom'

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
    const data = [["Category", "Amount"], ["Insurance", 700], ["Mobile", 90], ["Health", 100], ["Internet, tv and Phone", 200], ['Other', 25]]
    const colors = ['#127ECF', '#90C227', '#F57E18', '#E94435']
    const {firstName, lastName} = this.props.user
    return(
      <Grid container alignContent={'center'} alignItems={'center'} style={{width: '100%'}} spacing={40}>
        <Grid xs={12} item>
          <Typography>
            Hi {firstName} {lastName}! Here is an overview of your transactions.
              {
                this.props ? console.log(this.props.user) : console.log('nope')
              }
            {pieGraph({data, colors})}
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