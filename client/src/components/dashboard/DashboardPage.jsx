import React, { PureComponent } from 'react'
import pieGraph from './Graph'

export default class DashboardPage extends PureComponent {
  
  render(){
    const data = [["Category", "Amount"], ["Insurance", 700], ["Mobile", 90], ["Health", 100], ["Internet, tv and Phone", 200], ['Other', 25]]
    const colors = ['#127ECF', '#90C227', '#F57E18', '#E94435']
    return(
      <div>
        Hi John Doe! Here is an overview of your transactions.
        {pieGraph({data, colors})}
      </div>
    )
  }
}