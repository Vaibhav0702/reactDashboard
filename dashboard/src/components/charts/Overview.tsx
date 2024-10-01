import { Tabs } from 'antd';
import React from 'react'


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
            <h5  className="header-name">Source</h5>
        </div>

        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '95%', display: 'grid', justifyContent: 'center', alignItems: 'center' , height:'150px', backgroundColor:'#FAF8FF', marginTop:'2rem' }}>
            <span className="text-overview" style={{borderLeft:'5px solid #3768C5'}}>intracytoplasmic sperm injectio</span>
            <span className="text-overview" style={{borderLeft:'5px solid #37C577'}}>In-Vitro Fertilization</span>


            </div>
        </div>
    </div>



</>
  )
}
