import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'
import { fetchContracts, deleteContract } from '../../actions/transactions'
import {Redirect, Link} from 'react-router-dom'
import { Button } from 'material-ui';
import Clear from '@material-ui/icons/Clear'

const renderContract = ({ ...props }) => {
  return (
    <div key={`${props.id}-outer`}>
      <Typography key={`${props.id}-name`} variant='headline'>{props.contractName} <br /> average: {props.average}</Typography>
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
    this.props.fetchContracts(this.props.user.id)
    if(this.props.buttons === false) this.setState({
      buttons: false
    })
  }

  handleDelete = (contractName) => {
    this.props.deleteContract(this.props.user.id, contractName)
  }

  render() {
    console.log(this.props)
    const { contracts } = this.props
    if(this.props.user === null || !this.props.user) return( <Redirect to='/logout' /> )
    return (
      <div className="center">
      {
        this.props.trans
      }
        <Typography style={{width:"80%", margin: '60px 0 30px 0', background:"", boxShadow: "3px 5px", padding: '50px 40px', border: "1px solid #e2e6e7", fontSize:"40px", fontFamily: "BrandonText-Bold"}} variant='display1' className="contractList"> Verzekering
        {
            contracts ? contracts.map(t => {
              return t.type === 'insurance' ?

                (<div key={`${t.id}-div`}>
                  <Button style={{margin: '10px 0 10px 0', padding: "15px"}}><Link key={`${t.id}-link`} to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link></Button>
                  {

                    this.state.buttons ? (<Clear onClick={() => this.handleDelete(t.contractName)} color='primary' variant='fab'></Clear>) : null

                  }                  
                  </div>) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{width:"80%", margin: '60px 0 30px 0', background:"", boxShadow: "3px 5px", padding: '50px 40px', border: "1px solid #e2e6e7", fontSize:"40px", fontFamily: "BrandonText-Bold"}} variant='display1'> Telecom
          {
            contracts ? contracts.map(t => {
              return t.type === 'telecom' ?
                (<div key={`${t.id}-div`}>
                  <Button style={{margin: '10px 0 10px 0', padding: "15px"}}><Link key={`${t.id}-link`} to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link></Button>
                  {
                    //when delete button clicked, delete the contract

                    this.state.buttons ? (<Clear onClick={() => this.handleDelete(t.contractName)} color='primary' variant='fab'></Clear>) : null

                  }
                  </div>) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{width:"80%", margin: '60px 0 30px 0', background:"", boxShadow: "3px 5px", padding: '50px 40px', border: "1px solid #e2e6e7", fontSize:"40px", fontFamily: "BrandonText-Bold"}} variant='display1'> Energy
        {
            contracts ? contracts.map(t => {
              return t.type === 'energy' ?
                (<div>
                  <Button style={{margin: '10px 0 10px 0', padding: "15px"}}><Link key={`${t.id}-link`} to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link></Button>
                  {

                    this.state.buttons ? (<Clear onClick={() => this.handleDelete(t.contractName)} color='primary' variant='fab'></Clear>) : null

                  }                
                  </div>) : null
            }) : <p>Contracts loading...</p>
          }
        </Typography>
        <Typography style={{width:"80%", margin: '60px 0 30px 0', background:"", boxShadow: "3px 5px", padding: '50px 40px', border: "1px solid #e2e6e7", fontSize:"40px", fontFamily: "BrandonText-Bold"}} variant='display1'> Overig 
        {
            contracts ? contracts.map(t => {
              return t.type === 'other' ?
                (<div key={`${t.id}-div`}>
                  <Button style={{margin: '10px 0 10px 0', padding: "15px"}}><Link key={`${t.id}-link`} to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link></Button>
                  {

                    // to delete contracts just send the contract name instead of the transaction id -- REPLACE THIS!
                    this.state.buttons ? (<Clear onClick={() => this.handleDelete(t.contractName)} color='primary' variant='fab'></Clear>) : null

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
  contracts: state.contracts,
  user: state.currentUser ? state.currentUser.user : null
})


export default connect(mapStateToProps, { fetchContracts, deleteContract })(ContractsPage)

