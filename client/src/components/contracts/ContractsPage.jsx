import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'
import { fetchContracts, deleteContract } from '../../actions/transactions'
import {Redirect, Link} from 'react-router-dom'
import { Button } from 'material-ui';
// import Clear from '@material-ui/icons/Clear'

const renderContract = ({ ...props }) => {
  return (
    <div key={`${props.id}-outer`}>
      <Typography key={`${props.id}-name`} style={{fontFamily: 'BrandonText-Regular', fontSize: 20, textTransform: "none"}}>Leverancier: <strong>{props.contractName}</strong> <br /> Gemiddelde per maand: <strong>€ {props.average}</strong><br /></Typography>
      {/* <Typography key={`${props.id}-value`}>{props.value}</Typography> */}
    </div>
  )
}

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

    const { contracts } = this.props
    if(this.props.user === null || !this.props.user) return( <Redirect to='/logout' /> )
    return (
      <div className="center" style={{margin:"0 -3rem 0 -3rem"}}>
      {
        this.props.trans
      }
        <Typography className="contractTypography" style={{width:"80%", margin: '60px 0 30px 0', background:"", boxShadow: "3px 5px", padding: '50px 35px', border: "1px solid #e2e6e7", fontSize:"40px", fontFamily: "BrandonText-Bold"}} variant='display1'> Verzekering

        {
            contracts ? contracts.map(t => {
              return t.type === 'insurance' ?

                (<div key={`${t.contractName}-div`}>
                  <Button className="contractButtons" style={{margin: '10px 0 10px 0', padding: "15px"}}><Link key={`${t.contractName}-link`} to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link></Button>

                  {

                    this.state.buttons ? (<Button onClick={() => this.handleDelete(t.contractName)} className="signupButton">Contract verwijderen</Button>) : null

                  }                  
                  </div>) : null
            }) : <p>Contracten worden geladen...</p>
          }
        </Typography>
        <Typography className="contractTypography" style={{width:"80%", margin: '60px 0 30px 0', background:"", boxShadow: "3px 5px", padding: '50px 35px', border: "1px solid #e2e6e7", fontSize:"40px", fontFamily: "BrandonText-Bold"}} variant='display1'> Telecom
          {
            contracts ? contracts.map(t => {
              return t.type === 'telecom' ?
                (<div key={`${t.contractName}-div`}>
                  <Button className="contractButtons" style={{margin: '10px 0 10px 0', padding: "15px"}}><Link key={`${t.contractName}-link`} to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link></Button>

                  {
                    //when delete button clicked, delete the contract

                    this.state.buttons ? (<Button onClick={() => this.handleDelete(t.contractName)} className="signupButton">Contract verwijderen</Button>) : null

                  }
                  </div>) : null
            }) : <p>Contracten worden geladen...</p>
          }
        </Typography>
        <Typography className="contractTypography" style={{width:"80%", margin: '60px 0 30px 0', boxShadow: "3px 5px", padding: '50px 35px', border: "1px solid #e2e6e7", fontSize:"40px", fontFamily: "BrandonText-Bold"}} variant='display1'> Energie
        {
            contracts ? contracts.map(t => {
              return t.type === 'energy' ?
                (<div key={`${t.contractName}-div`}
                  <Button className="contractButtons" style={{margin: '10px 0 10px 0', padding: "15px"}}><Link key={`${t.contractName}-link`} to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link></Button>

                  {

                    this.state.buttons ? (<Button onClick={() => this.handleDelete(t.contractName)} className="signupButton">Contract verwijderen</Button>) : null

                  }                
                  </div>) : null
            }) : <p>Contracten worden geladen...</p>
          }
        </Typography>
        <Typography className="contractTypography" style={{width:"80%", margin: '60px 0 30px 0', background:"", boxShadow: "3px 5px", padding: '50px 35px', border: "1px solid #e2e6e7", fontSize:"40px", fontFamily: "BrandonText-Bold"}} variant='display1'> Overig 
        {
            contracts ? contracts.map(t => {
              return t.type === 'other' ?
                (<div key={`${t.contractName}-div`}>
                  <Button className="contractButtons" style={{margin: '10px 0 10px 0', padding: "15px"}}><Link key={`${t.contractName}-link`} to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link></Button>

                  {

                    // to Contract verwijderens just send the contract name instead of the transaction id -- REPLACE THIS!
                    this.state.buttons ? (<Button onClick={() => this.handleDelete(t.contractName)} className="signupButton">Contract verwijderen</Button>) : null

                  }                
                  </div>) : null
            }) : <p>Contracten worden geladen...</p>
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

