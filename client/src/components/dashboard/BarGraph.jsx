import React from 'react'
import { Chart } from 'react-google-charts';

const BarGraph = ({...props}) => {
  const options = {
    backgroundColor: 'white',
    title: 'Uw maandelijkse uitgaven',
    chartArea: { width: '90%' },
    annotations:{
    textStyle: {
        fontSize:13.5,
        fontName: 'BrandonText-Regular',
    }},
    hAxis: {
      minValue: 0
    },
    vAxis: {minValue: 0},
    
    color: props.colors,
    legend: {
      position: 'none'
    }
  }
  return (
    <Chart className='my-pretty-chart-container'
      chartType="BarChart"
      data={props.data}
      options={options}
      graph_id="BarChart"
      legend_toggle
    />
  )
}

export default BarGraph