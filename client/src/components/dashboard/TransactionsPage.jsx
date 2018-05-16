import React, { PureComponent } from 'react'
import pieGraph from './Graph'
import { Grid, Typography } from 'material-ui';

export default class TransactionsPage extends PureComponent {
  
  render(){
    const data = [["Category", "Amount"], ["Insurance", 700], ["Mobile", 90], ["Health", 100], ["Internet, tv and Phone", 200], ['Other', 25]]
    const colors = ['#127ECF', '#90C227', '#F57E18', '#E94435']
    return(
      <Grid container alignContent={'center'} alignItems={'center'} style={{width: '100%'}} spacing={40}>
        <Grid xs={12} item>
          <Typography>
            Hi John Doe! Here is an overview of your transactions.
            {pieGraph({data, colors})}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}