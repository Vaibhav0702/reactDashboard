import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import eChart2 from './configs/ActivityConf'

import selectedActivity from '../../Assets/SVG/selectedActivity.svg'

import activitySquareArrow from '../../Assets/SVG/arrow-square-down.svg'

import activity from '../../Assets/SVG/activity.svg'




export default function Activity() {


  const [activebtn , setActiveButton] = useState<string>('button1')




  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);
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
      <div className="stackedbtn">
        <button className={`stacked-button  ${ activebtn == 'button1' ? 'activeSpan' : ''}` }   onClick={() => handleButtonClick('button1')} >
          <span className="button-icon p-2">
           <img className='selectedIcon mx-2' src={activebtn === 'button1' ? selectedActivity : activity}  alt="selectedActivity" />
            Total Patients
          </span>
        </button>
        <button className={`stacked-button  ${ activebtn == 'button2' ? 'activeSpan' : ''}` }  onClick={() => handleButtonClick('button2')}>
          <span className="button-icon p-2">
           <img className='selectedIcon mx-2' src={activebtn === 'button2' ? selectedActivity : activity} alt="activity" />
            Total Embryo Graded
          </span>
        </button>
      </div>

      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart2.options}
          series={eChart2.series}
          height={410}
          type="bar"
        />
      </div>
    </>
  )
}
