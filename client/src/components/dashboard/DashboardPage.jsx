import React, { PureComponent } from 'react'
import BarGraph from './BarGraph'
import { Grid, Divider } from 'material-ui';
import { connect } from 'react-redux'
import { fetchContracts, fetchTransactions } from '../../actions/transactions'
import { Redirect } from 'react-router-dom'
import ContractsPage from '../contracts/ContractsPage'


const calculateTransactions = (arr) => {
  const colors = ['#127ECF', '#90C227', '#F57E18', '#E94435']
  let insurance = 0 
  let telecom = 0  
  let energy = 0 
  let other = 0
arr.map(t => {
  let value =  (- Number(t.value))
  if(t.type === 'insurance') insurance = insurance + value
  if(t.type === 'telecom') telecom = telecom + value
  if(t.type === 'energy') energy = energy + value
  if(t.type === 'other') other= other + value
  return {insurance, energy, telecom, other}
})
  return [["Categorie", "Bedrag", {role: 'style'}, { role: 'annotation'}], ["Verzekering", insurance, colors[0], "Verzekering"], ["Telecom", telecom, colors[1], "Telecom"], ["Energie", energy, colors[2], "Energie"], ["Overig", other, colors[3], "Overig"]]
}

class DashboardPage extends PureComponent {
  componentWillMount() {
    console.log('mounting...')
   if(this.props.user === null) return (<Redirect to='/logout' />)
    if (this.props.transactions === null && this.props.user) {
      this.props.fetchContracts(this.props.user.id)
      this.props.fetchTransactions(this.props.user.id)
    }
  }

  render(){

    if (this.props.user === null || !this.props.user) return (<Redirect to='/logout' />)
    if(this.props.user.permission === false)


      return( <Redirect to="/csv"/>)
 
    let data = [["Category", "Amount"],[]]
    const colors = ['#127ECF', '#90C227', '#F57E18', '#E94435']
    const {firstName, lastName} = this.props.user
    if(this.props.transactions) {
    data = calculateTransactions(this.props.transactions)
    }
    return(
      <div>
      <Grid container alignItems={'center'} style={{width: '100%', flex: 1}} spacing={16}>
        <Grid xs={12} s={12} item>
          <div style={{textAlign: 'center'}}>
            Hi {firstName} {lastName}! Hier vindt je een overzicht van je transacties.
            <Divider style={{margin: '10px 0 20px 0'}}/>
            {
              this.props.transactions ? (BarGraph({ data, colors})) : null
            }
              <ContractsPage buttons={false}/>
          </div>
        </Grid>
      </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.currentUser ? state.currentUser.user : null ,
  transactions: state.transactions
})

export default connect(mapStateToProps, { fetchContracts, fetchTransactions })(DashboardPage)