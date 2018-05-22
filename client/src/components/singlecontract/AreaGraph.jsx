import React from 'react'
import { Chart } from 'react-google-charts';

const AreaGraph = ({...props}) => {
  const options = {
    title: 'Jouw Transacties',
    chartArea: { width: '90%' },
    hAxis: {
      title: 'Datum',
    },
    vAxis: {
      title: 'Bedrag'
    },
    color: props.colors,
    legend: {
      position: 'none'
    }
  }
  return (
    <Chart className={'my-pretty-chart-container'}
      chartType="AreaChart"
      data={props.data}
      options={options}
      graph_id="AreaChart"
      legend_toggle
    />
  )
}

export default AreaGraph