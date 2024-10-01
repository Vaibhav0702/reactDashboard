
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Tabs } from 'antd';
import SourceChart from './configs/SourceChart';





interface TabItem {
  key: string;
  label: string;
}

const items: TabItem[] = [
  {
    key: '1',
    label: 'Egg',
  },
  {
    key: '2',
    label: 'Sperm',
  },
  {
    key: '3',
    label: 'Both',
  },
];

export default function Source() {

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <>
      <div className="chart-container">
        <div>
          <h5 className="header-name">Source</h5>
        </div>

        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
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

      <ReactApexChart
        className="full-width"
        options={SourceChart.options}
        series={SourceChart.series}
        type="radialBar"
        height={350}
        width="100%"
      />
    </>
  );
}
