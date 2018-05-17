import React from 'react'
import { Chart } from 'react-google-charts';

const pieGraph = ({ ...props }) => {
  return (
    <div className={'my-pretty-chart-container'}>
      <Chart
        chartType="PieChart"
        data={props.data}
        options={
          {
            title: "Your Transactions",
            backgroundColor: 'transparent',
            pieHole: 0.6,
            colors: props.colors,
            chartArea: {
              width: '90%',
              height: '90%'
            },
          }
        }
        graph_id="PieChart"
        legend_toggle
        />
    </div>
  );
}

export default pieGraph