import React from 'react'
import { Chart } from 'react-google-charts';

const BarGraph = ({...props}) => {
  console.log(props)
  const data = [
    ['Categorie', 'Bedrag'],
    ['New York City, NY', 8175000],
    ['Los Angeles, CA', 3792000],
    ['Chicago, IL', 2695000],
    ['Houston, TX', 2099000],
    ['Philadelphia, PA', 1526000]
  ]

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