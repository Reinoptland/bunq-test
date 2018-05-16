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
            pieHole: 0.5,
            colors: props.colors,
          }
        }
        graph_id="PieChart"
        chartArea={{ width: "100%", height: "100%" }}
        legend_toggle
      />
    </div>
  );
}

export default pieGraph