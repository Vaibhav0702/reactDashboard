import React from 'react'
import ReactApexChart from "react-apexcharts";
import AgeChart from './configs/AgeChart';

export default function AgeDistribution() {

  return (
    <>

      <div id="chart">
        <div>
          <h5 className="header-name">Age Distribution</h5>
        </div>
        <ReactApexChart
          className="bar-chart"
          options={AgeChart?.options}
          series={AgeChart?.series}
          height={450}
          type="bar"
        />
      </div>

    </>
  )
}
