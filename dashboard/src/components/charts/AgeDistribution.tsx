import React from 'react'
import ReactApexChart from "react-apexcharts";
import AgeChart from './configs/AgeChart';

export default function AgeDistribution() {

  return (
    <>

      <div id="chart" className='d-flex flex-grow-1 flex-column'>
        <div>
          <h5 className="header-name">Age Distribution</h5>
        </div>
        <div className='flex-grow-1 mt-4'>
        <ReactApexChart
          className="bar-chart"
          options={AgeChart?.options}
          series={AgeChart?.series}
          // height='100%'
          width='100%'
          type="bar"
        />
        </div>
      </div>

    </>
  )
}
