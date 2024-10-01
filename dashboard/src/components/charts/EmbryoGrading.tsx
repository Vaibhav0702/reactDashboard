import React, { useState } from 'react';
import GradingChart from './configs/GradingChart';
import ReactApexChart from 'react-apexcharts';
import { Tabs } from 'antd';

import filter from '../../Assets/SVG/filter.svg'


interface TabItem {
  key: string;
  label: string;
  series: any[];
}

export default function EmbryoGrading() {



  const [customSeries, setcustomSeries] = useState<any[]>(GradingChart.series);


  const onChange = (key: string) => {
    console.log(key);
    const series = items.filter((value : any) => value.key == key);
     setcustomSeries(series[0].series)
  };

  const items: TabItem[] = [
    {
      key: '1',
      label: 'Count',
      series: [
        {
          name: "Product A",
          data: [150, 200, 100, 220, 300, 100],
          color: "#F1EBFF",
        },
        {
          name: "Product B",
          data: [50, 80, 60, 90, 120, 80],
        
          color: "#E4D7FF",
        },
        {
          name: "Product C",
          data: [100, 120, 80, 130, 150, 120],
          color: "#C7B2F2",
        },
        {
          name: "Product D",
          data: [50, 80, 60, 90, 120, 80],
          color: "#9E7FE1",
        },
        {
          name: "Product E",
          data: [200, 150, 150, 180, 250, 200],
          color: "#7C67A8",
        },
      ],
    },
    {
      key: '2',
      label: 'Day',
      series: [
        {
          name: "Product A",
        
          data: [100, 120, 80, 130, 150, 120],
          color: "#F1EBFF",
        },
        {
          name: "Product B",
          data: [200, 150, 150, 180, 250, 200],
          color: "#E4D7FF",
        },
        {
          name: "Product C",
          data: [150, 200, 100, 220, 300, 100],
          color: "#C7B2F2",
        },
        {
          name: "Product D",
          data: [50, 80, 60, 90, 120, 80],
          color: "#9E7FE1",
        },
        {
          name: "Product E",
          data: [50, 80, 60, 90, 120, 80],
          color: "#7C67A8",
        },
      ],
    },
    {
      key: '3', label: 'Age', series: [
        {
          name: "Product A",
        
          data: [50, 80, 60, 90, 120, 80],
          color: "#F1EBFF",
        },
        {
          name: "Product B",
          data: [200, 150, 150, 180, 250, 200],
          color: "#E4D7FF",
        },
        {
          name: "Product C",
          data: [100, 120, 80, 130, 150, 120],
          color: "#C7B2F2",
        },
        {
          name: "Product D",
          data: [150, 200, 100, 220, 300, 100],
          color: "#9E7FE1",
        },
        {
          name: "Product E",
          data: [50, 80, 60, 90, 120, 80],
          color: "#7C67A8",
        },
      ],
    },
    {
      key: '4', label: 'Source', series: [
        {
          name: "Product A",
          data: [150, 200, 100, 220, 300, 100],
          color: "#F1EBFF",
        },
        {
          name: "Product B",
          data: [50, 80, 60, 90, 120, 80],
          color: "#E4D7FF",
        },
        {
          name: "Product C",
          data: [100, 120, 80, 130, 150, 120],
          color: "#C7B2F2",
        },
        {
          name: "Product D",
          data: [50, 80, 60, 90, 120, 80],
          color: "#9E7FE1",
        },
        {
          name: "Product E",
          
          data: [200, 150, 150, 180, 250, 200],
          color: "#7C67A8",
        },
      ],
    },
    {
      key: '5', label: 'Fertilization', series: [
        {
          name: "Product A",
          data: [150, 200, 100, 220, 300, 100],
          color: "#F1EBFF",
        },
        {
          name: "Product B",
          data: [200, 150, 150, 180, 250, 200],
          color: "#E4D7FF",
        },
        {
          name: "Product C",
          data: [100, 120, 80, 130, 150, 120],
          color: "#C7B2F2",
        },
        {
          name: "Product D",
          data: [50, 80, 60, 90, 120, 80],
          color: "#9E7FE1",
        },
        {
          name: "Product E",
          data: [50, 80, 60, 90, 120, 80],
          color: "#7C67A8",
        },
      ],
    },
    {
      key: '6', label: 'Protocol', series: [
        {
          name: "Product A",
          data: [150, 200, 100, 220, 300, 100],
          color: "#F1EBFF",
        },
        {
          name: "Product B",
          data: [50, 80, 60, 90, 120, 80],
          color: "#E4D7FF",
        },
        {
          name: "Product C",
          data: [100, 120, 80, 130, 150, 120],
          color: "#C7B2F2",
        },
        {
          name: "Product D",
        
          data: [200, 150, 150, 180, 250, 200],
          color: "#9E7FE1",
        },
        {
          name: "Product E",
          data: [50, 80, 60, 90, 120, 80],
          color: "#7C67A8",
        },
      ],
    },
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
          series={customSeries}
          height='100%'
          type="bar"
        />

      </div>
    </div>
  );
}
