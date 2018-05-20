import React from 'react'
import { Chart } from 'react-google-charts';

const BarGraph = ({...props}) => {
  console.log(props)
  const data = [
    ['Category', 'Amount', { role: 'style' }],
    ['New York City, NY', 8175000, `color: ${props.colors[0]}`],
    ['Los Angeles, CA', 3792000, 'color: blue'],
    ['Chicago, IL', 2695000, 'color: blue'],
    ['Houston, TX', 2099000, 'color: blue'],
    ['Philadelphia, PA', 1526000, 'color: blue']
  ]

  const options = {
    title: 'Your Transactions',
    chartArea: { width: '80%' },
    hAxis: {
      title: 'Amount',
      minValue: 0
    },
    vAxis: {
      title: 'Category'
    },
    color: props.colors
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