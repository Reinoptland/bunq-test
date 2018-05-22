import React from 'react'
import { Chart } from 'react-google-charts';

const BarGraph = ({...props}) => {
  const options = {
    title: 'Jouw Transacties',
    chartArea: { width: '80%' },
    hAxis: {
      title: 'Bedrag',
      minValue: 0
    },
    vAxis: {
      title: 'Categorie'
    },
    color: props.colors,
    legend: {
      position: 'none'
    }
  }
  return (
    <Chart className={'my-pretty-chart-container'}
      chartType="BarChart"
      data={props.data}
      options={options}
      graph_id="BarChart"
      legend_toggle
    />
  )
}

export default BarGraph