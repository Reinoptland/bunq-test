import React, { PureComponent } from 'react'

export default class FeedbackForm extends PureComponent {

    state = {}

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.onSubmit(this.state)
    }
  
    handleChange = (event) => {
      const { name, value } = event.target
  
      this.setState({
        [name]: value
      })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="feedbackForm center">

                    <h3 className="feedbackText"> U heeft onze <em> Privacy </em> overeenkomst niet geaccepteerd.<br/><br/><strong>ROOS</strong> heeft strikte gegevensbeschermingsregels. Helaas, kunnen wij<br/> 
                    op dit moment u niet laten doorgaan. Vul alstublieft ons feedbackformulier in<br/> 
                    en laat ons weten hoe we onze app kunnen verbeteren.</h3>
                    <h2 className="feedbackTitle">Waarom heeft u geweigerd?</h2>

                    <div className="radio">
                    <input type="radio" id="contactChoice1" name="choice" value="option1" onChange={this.handleChange}/>
                    <label for="contactChoice1"> Ik heb geen Bunq account</label>
                  
                    <br />
                    
                    <input type="radio" id="contactChoice2" name="choice" value="option2"onChange={this.handleChange} />
                    <label for="contactChoice2"> PSD regelement is mij niet duidelijk</label>
                  
                    <br />
                    
                    <input type="radio" id="contactChoice3" name="choice" value="option3" onChange={this.handleChange}/>
                    <label for="contactChoice3"> Ik vind het te riskant om mijn gegevens op internet te plaatsen</label>
                  
                    <br />
                    
                    <input type="radio" id="contactChoice4" name="choice" value="option4" onChange={this.handleChange}/>
                    <label for="contactChoice4"> Ik ben van gedachte veranderd</label>
                  
                    <br />
                    <br />
                    </div>
                    
                    <div className="remarks">
                    <label className="remarksLabel">Additionele opmerking:</label>
                    
                    <textarea type="text-area" id="remarks" name='remarks' value={
                    this.state.remarks || '' } onChange={this.handleChange}/>
                    <br />
                    </div>
                    <button type="submit" className="feedbackButton">Verzenden</button>
                    
                </div>
            </form>
          
        )
    }

}