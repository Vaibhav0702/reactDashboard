import { Tabs } from 'antd';
import React from 'react'

import blueActivity from '../../Assets/SVG/blueActivityStatus.svg';
import greenActivity from '../../Assets/SVG/greenActivityStatus.svg'


    const items = [
        {
            key: '1',
            label: 'Fertilization',
        },
        {
            key: '2',
            label: 'Protocol',
        },
        {
            key: '3',
            label: 'Diagnosis',
        },
    ];





export default function Overview() {

  const onChange = (key : string) => {
    console.log(key);
};

  return (
    <>
    <div className="chart-container">
        <div>
            <h5  className="header-name">Overview</h5>
        </div>

        <div className='py-4'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    
        <div className='py-4'>

    
        <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '40%', height: '5px', backgroundColor: '#3768C5', borderRadius: '5px', marginRight: '5px' }}>
                    {/* <span style={{ marginTop: '10px' }}>40%</span> */}
                </div>
                <div style={{ width: '60%', height: '5px', backgroundColor: '#37C577', borderRadius: '5px' }}>
                    {/* <span style={{ paddingTop: '10px' }}>60%</span> */}
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '40%', height: '5px',  marginRight: '5px' }}>
                    <span style={{ marginTop: '10px' }}>40%</span>
                </div>
                <div style={{ width: '60%', height: '5px' }}>
                    <span style={{ paddingTop: '10px' }}>60%</span>
                </div>
            </div>
        </div>

        </div>
        
        <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '95%', display: 'grid', justifyContent: 'center', alignItems: 'center' , height:'150px', backgroundColor:'#FAF8FF', marginTop:'2rem' , borderRadius:'20px' }}>
            <span  className='overviewText'> <img className='mx-2' src={blueActivity} alt='blueActivity' /> intracytoplasmic sperm injectio</span>
            <span className='overviewText'>  <img className='mx-2' src={greenActivity} alt='greenActivity' /> In-Vitro Fertilization</span>
            </div>
        </div>
    </div>



</>
  )
}
