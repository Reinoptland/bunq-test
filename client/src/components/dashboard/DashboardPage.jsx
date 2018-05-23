import React, { PureComponent } from 'react'
import BarGraph from './BarGraph'
import { Grid, Divider } from 'material-ui';
import { connect } from 'react-redux'
import { fetchContracts, fetchTransactions } from '../../actions/transactions'
import { Redirect } from 'react-router-dom'
import ContractsPage from '../contracts/ContractsPage'


const calculateContracts = (arr) => {
  const colors = ['#127ECF', '#90C227', '#F57E18', '#E94435']
  let insurance = 0 
  let telecom = 0  
  let energy = 0 
  let other = 0
arr.map(t => {
  let value =  (Number(t.average))
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
    if(this.props.contracts) {
    data = calculateContracts(this.props.contracts)
    }
    return(
      <div>
      <Grid container alignItems={'center'} style={{width: '100%', flex: 1}} spacing={16}>
        <Grid xs={12} s={12} item>
          <div style={{textAlign: 'center', fontSize:"25px", fontFamily: 'BrandonText-Bold'}}>
            Hi {firstName} {lastName}! Hier vindt je een overzicht van je contracten.
            <Divider style={{margin: '20px 0 20px 0'}}/>
            <h2 style={{fontSize:"20px", fontFamily: 'BrandonText-Bold', fontWeight: 'lighter'}}>Jouw Maandelijkse Uitgaven</h2>
            {
              this.props.contracts ? (BarGraph({ data, colors})) : null
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
  transactions: state.transactions,
  contracts: state.contracts
})

export default connect(mapStateToProps, { fetchContracts, fetchTransactions })(DashboardPage)