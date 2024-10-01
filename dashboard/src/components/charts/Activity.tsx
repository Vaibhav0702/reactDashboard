import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

import selectedActivity from '../../Assets/SVG/selectedActivity.svg'

import activitySquareArrow from '../../Assets/SVG/arrow-square-down.svg'

import activity from '../../Assets/SVG/activity.svg'
import activityChart from './configs/ActivityConf'




export default function Activity() {


  const [activebtn , setActiveButton] = useState<string>('button1');

  const [customSeries , setcustomSeries] = useState<any[]>(activityChart.series);




  const handleButtonClick = (buttonId: string , series : any[]) => {
    setActiveButton(buttonId);
    setcustomSeries(series)
  };



  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <span className="activitytext">Activity</span>
        </div>
        <div>
          <span className="weektext p-1">Week   <img className='selectedIcon' src={activitySquareArrow} alt="activitySquareArrow" /> </span>
        </div>
      </div>
      <div className="stackedbtn mt-4">
        <button className={`stacked-button  ${ activebtn == 'button1' ? 'activeSpan' : ''}` }   onClick={() => handleButtonClick('button1' , [
        {
            name: "Sales",
            data: [450, 200, 300, 220, 500, 400],
            color: "#F7F3FF",
        },
    ])} >
          <span className="button-icon p-2">
           <img className='selectedIcon mx-2' src={activebtn === 'button1' ? selectedActivity : activity}  alt="selectedActivity" />
            Total Patients
          </span>
        </button>
        <button className={`stacked-button  ${ activebtn == 'button2' ? 'activeSpan' : ''}` }  onClick={() => handleButtonClick('button2' ,[
        {
            name: "Sales",
            data: [250, 500, 900, 220, 300, 400],
            color: "#F7F3FF",
        },
    ])}>
          <span className="button-icon p-2">
           <img className='selectedIcon mx-2' src={activebtn === 'button2' ? selectedActivity : activity} alt="activity" />
            Total Embryo Graded
          </span>
        </button>
      </div>

      <div id="chart" className='flex-grow-1'>
        <ReactApexChart
          className="bar-chart"
          options={activityChart.options}
          series={customSeries}
          height='100%'
          type="bar"
        />
      </div>
    </>
  )
}
