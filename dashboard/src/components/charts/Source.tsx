
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Tabs } from 'antd';
import SourceChart from './configs/SourceChart';





interface TabItem {
  key: string;
  label: string;
  series : number[]
}

const items: TabItem[] = [
  {
    key: '1',
    label: 'Egg',
    series : [65, 20, 30, 35]
  },
  {
    key: '2',
    label: 'Sperm',
    series : [95, 70, 80, 35]
  },
  {
    key: '3',
    label: 'Both',
    series : [45, 40, 30, 35]
  },
];

export default function Source() {


  const [customSeries , setCustomSeries] = useState<number[]>(SourceChart.series)


  const onChange = (key: string) => {
    console.log( " >>>>>>>>>" ,   key);
     const series = items.filter((value : any) => value.key == key);
     setCustomSeries(series[0].series)
  };

  return (
    <>
      <div className="chart-container">
        <div>
          <h5 className="header-name">Source</h5>
        </div>


         <div className='pt-3'>
         <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
         </div>
       
        
        <div className="maindiv">
          <div className="innerdiv">
            <span className="spanmain" style={{ backgroundColor: 'rgb(55, 197, 119)' }}></span>
            Fresh Self
          </div>
          <div className="innerdiv">
            <span className="spanmain" style={{ backgroundColor: 'rgb(55, 104, 197)' }}></span>
            Frozen Self
          </div>
          <div className="innerdiv">
            <span className="spanmain" style={{ backgroundColor: 'rgb(236, 157, 62)' }}></span>
            Fresh Donor
          </div>
          <div className="innerdiv">
            <span className="spanmain" style={{ backgroundColor: 'rgb(197, 176, 55)' }}></span>
            Frozen Donor
          </div>
        </div>
      </div>


      <div className='flex-grow-1 d-flex justify-content-center align-items-center'>
        <ReactApexChart
          className="full-width"
          options={SourceChart.options}
          series={customSeries}
          type="radialBar"
          height={350}
          width="100%"
        />
      </div>

    </>
  );
}
