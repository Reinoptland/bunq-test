import React, { PureComponent } from 'react'
import BarGraph from './BarGraph'
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
        <div className = "topPage">

                <h1>Hi {firstName} {lastName}! Hier vindt u een overzicht van je contracten.</h1><br/><br/>
                <div className="graph">
                <h2 style={{fontSize:"20px", fontFamily: 'BrandonText-Bold', fontWeight: 'lighter', margin: "0px 0px -20px 0px"}}>Uw maandelijkse uitgaven</h2>
                {
                  this.props.contracts ? (BarGraph({ data, colors})) : null
                }
              </div>

        </div>
        <ContractsPage buttons={false}/>
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

