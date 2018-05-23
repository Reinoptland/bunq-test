import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'
import { fetchContracts, deleteContract } from '../../actions/transactions'
import {Redirect, Link} from 'react-router-dom'
import { Button } from 'material-ui';
import { Card } from '@material-ui/core';
import { Divider } from 'material-ui';



const renderContract = ({ ...props }) => {
  return (
    <div key={`${props.id}-outer`}>
      <div className="cardTitle">
      <Typography key={`${props.id}-name`} style={{
        fontFamily: 'BrandonText-Regular', 
        fontSize: 20, 
        textTransform: "capitalize", 
        marginTop: "20px",
        textOverflow: "ellipsis",
        color: "#FFF",
        textAlign: 'center',
        alignSelf: 'center',
        padding: '5px'
        }}><strong>{props.contractName.toLowerCase()}</strong> <br /><br/> 
      </Typography>
      </div>
      <div className="cardBody">
      <Typography key={`${props.id}-name`} style={{
        fontFamily: 'BrandonText-Regular', 
        fontSize: 20, 
        textTransform: "none", 
        textAlign: 'center',        
        padding: "3px"
        }}><br/><br/>
        Gemiddelde per maand:<br/> <strong>€ {props.average}</strong><br /><br />
      </Typography>
        </div>
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
      <div className="centerDashboard" style={{margin:"0 -3rem 0 -3rem"}}>
      {
        this.props.trans
      }

        <Typography className="contractTypography" style={{
          width:"80%", 
          margin: '60px 0 30px 0', 
          background:"", 
          padding: '50px 35px', 
          fontSize:"40px",
          color: "#e84435",           
          color: "#e84435",
          fontFamily: "BrandonText-Bold"}} variant='display1'> Verzekering <br/><br/>
        
        <div className="cardContainer">
        {
            contracts ? contracts.map(t => {
              return t.type === 'insurance' ?

                (<div key={`${t.contractName}-div`}>
                  <Card className={'contractCard'} key={`${t.contractName}-card`}>
                  <Link key={`${t.contractName}-link`} to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link>
                  

                  {
                    this.state.buttons ? (<Button onClick={() => this.handleDelete(t.contractName)} 
                      style={{color:"#FFF", 
                      backgroundColor: "#e84435",
                      fontFamily: 'BrandonText-Bold',
                      textTransform: 'none',
                      marginLeft: 'auto',
                      marginRight: 'auto',                      
                      borderRadius: '3px', 
                    }}
                      className="deleteContractButton">
                      Contract verwijderen</Button>
                  ): null}
                     
                  </Card>               
                  </div>) : null
            }) : <p>Contracten worden geladen...</p>
          }
          </div>
        </Typography>
        <Typography className="contractTypography" style={{
          width:"80%", 
          margin: '60px 0 30px 0', 
          background:"", 
          padding: '50px 35px', 
          fontSize:"40px",
          color: "#e84435",           
          fontFamily: "BrandonText-Bold"}} variant='display1'> Telecom <br/><br/>
        
        <div className="cardContainer">
        {
            contracts ? contracts.map(t => {
              return t.type === 'telecom' ?

                (<div key={`${t.contractName}-div`}>
                  <Card className={'contractCard'} key={`${t.contractName}-card`}>
                  <Link key={`${t.contractName}-link`} to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link>
                  

                  {
                    this.state.buttons ? (<Button onClick={() => this.handleDelete(t.contractName)} 
                      style={{color:"#FFF", 
                      backgroundColor: "#e84435",
                      fontFamily: 'BrandonText-Bold',
                      textTransform: 'none',
                      marginLeft: 'auto',
                      marginRight: 'auto',                      
                      borderRadius: '3px', 
                    }}
                      className="deleteContractButton">
                      Contract verwijderen</Button>
                  ): null}
                     
                  </Card>               
                  </div>) : null
            }) : <p>Contracten worden geladen...</p>
          }
          </div>
        </Typography>
        <Typography className="contractTypography" style={{
          width:"80%", 
          margin: '60px 0 30px 0', 
          background:"", 
          padding: '50px 35px', 
          fontSize:"40px",
          color: "#e84435",           
          fontFamily: "BrandonText-Bold"}} variant='display1'> Energie <br/><br/>
        
        <div className="cardContainer">
        {
            contracts ? contracts.map(t => {
              return t.type === 'energy' ?

                (<div key={`${t.contractName}-div`}>
                  <Card className={'contractCard'} key={`${t.contractName}-card`}>
                  <Link key={`${t.contractName}-link`} to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link>
                  

                  {
                    this.state.buttons ? (<Button onClick={() => this.handleDelete(t.contractName)} 
                      style={{color:"#FFF", 
                      backgroundColor: "#e84435",
                      fontFamily: 'BrandonText-Bold',
                      textTransform: 'none',
                      marginLeft: 'auto',
                      marginRight: 'auto',                      
                      borderRadius: '3px', 
                    }}
                      className="deleteContractButton">
                      Contract verwijderen</Button>
                  ): null}
                     
                  </Card>               
                  </div>) : null
            }) : <p>Contracten worden geladen...</p>
          }
          </div>
        </Typography>
        <Typography className="contractTypography" style={{
          width:"80%", 
          margin: '60px 0 30px 0', 
          background:"", 
          padding: '50px 35px', 
          fontSize:"40px",
          color: "#e84435",           
          fontFamily: "BrandonText-Bold"}} variant='display1'> Overig <br/><br/>
        
        <div className="cardContainer">
        {
            contracts ? contracts.map(t => {
              return t.type === 'other' ?

                (<div key={`${t.contractName}-div`}>
                  <Card className={'contractCard'} key={`${t.contractName}-card`}>
                  <Link key={`${t.contractName}-link`} to={`/contracts/${t.contractName.toLowerCase().split(" ").join("")}`}>{renderContract(t)}</Link>
                  

                  {
                    this.state.buttons ? (<Button onClick={() => this.handleDelete(t.contractName)} 
                      style={{color:"#FFF", 
                      backgroundColor: "#e84435",
                      fontFamily: 'BrandonText-Bold',
                      textTransform: 'none',
                      marginLeft: 'auto',
                      marginRight: 'auto',                      
                      borderRadius: '3px', 
                    }}
                      className="deleteContractButton">
                      Contract verwijderen</Button>
                  ): null}
                     
                  </Card>               
                  </div>) : null
            }) : <p>Contracten worden geladen...</p>
          }
          </div>
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

