import React from 'react';
import GradingChart from './configs/GradingChart';
import ReactApexChart from 'react-apexcharts';
import { Tabs } from 'antd';

import filter from '../../Assets/SVG/filter.svg'


interface TabItem {
  key: string;
  label: string;
}

export default function EmbryoGrading() {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabItem[] = [
    { key: '1', label: 'Count' },
    { key: '2', label: 'Day' },
    { key: '3', label: 'Age' },
    { key: '4', label: 'Source' },
    { key: '5', label: 'Fertilization' },
    { key: '6', label: 'Protocol' },
  ];

  const colors = ['#F1EBFF', '#E4D7FF', '#C7B2F2', '#9E7FE1', '#7C67A8'];

  return (
    <div id="chart" className='flex-grow-1 d-flex flex-column'>
      <div className="chart-container">
        <div className="header-container">
          <div className="flex-item-20">
            <h5 className="header-name">Source</h5>
          </div>
          <div className="flex-item-80">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
        </div>
        <div className="maindiv2 px-2">
          {["5AA", "5AB", "5BB", "4AA", "4AB"].map((label, index) => (
            <div className="innerdiv" key={label}>
              <span className="spanmain" style={{ backgroundColor: colors[index] }}></span>
              {label}
            </div>
          ))}
        </div>
      </div>

       <div className='flex-grow-1'>
 
      <ReactApexChart
        className="bar-chart"
        options={GradingChart.options}
        series={GradingChart.series}
        height='100%'
        type="bar"
      />
             
        </div>
    </div>
  );
}
