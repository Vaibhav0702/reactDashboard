import { Tabs } from 'antd';
import React, { useState } from 'react'

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



    const [data, setData] = useState({
        width1: 40,
        width2: 60,
        color1: '#3768C5',
        color2: '#37C577',
        label1: 'Intracytoplasmic Sperm Injection',
        label2: 'In-Vitro Fertilization'
    });








    const onChange = (key: string) => {
        if (key === '1') {
            setData({
                width1: 40,
                width2: 60,
                color1: '#3768C5',
                color2: '#37C577',
                label1: 'Intracytoplasmic Sperm Injection',
                label2: 'In-Vitro Fertilization'
            });
        } else if (key === '2') {
            setData({
                width1: 70,
                width2: 30,
                color1: '#C53737',
                color2: '#37AFC5',
                label1: 'Fresh Cycle',
                label2: 'Frozen Cycle'
            });
        } else if (key === '3') {
            setData({
                width1: 50,
                width2: 50,
                color1: '#C5C237',
                color2: '#AF37C5',
                label1: 'Male Factor',
                label2: 'Female Factor'
            });
        }
    };


    return (
        <>
            <div className="chart-container">
                <div>
                    <h5 className="header-name">Overview</h5>
                </div>

                <div className='py-4'>
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                </div>

                <div className='py-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{
                            width: `${data.width1}%`,
                            height: '5px',
                            backgroundColor: data.color1,
                            borderRadius: '5px',
                            marginRight: '5px'
                        }}>
                        </div>
                        <div style={{
                            width: `${data.width2}%`,
                            height: '5px',
                            backgroundColor: data.color2,
                            borderRadius: '5px'
                        }}>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: `${data.width1}%`, marginRight: '5px' }}>
                            <span style={{ marginTop: '10px' }}>{data.width1}%</span>
                        </div>
                        <div style={{ width: `${data.width2}%` }}>
                            <span style={{ paddingTop: '10px' }}>{data.width2}%</span>
                        </div>
                    </div>
                </div>


                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '95%', display: 'grid', justifyContent: 'center', alignItems: 'center', height: '150px', backgroundColor: '#FAF8FF', marginTop: '2rem', borderRadius: '20px' }}>
                        <span className='overviewText'> <img className='mx-2' src={blueActivity} alt='blueActivity' /> {data.label1}</span>
                        <span className='overviewText'>  <img className='mx-2' src={greenActivity} alt='greenActivity' /> {data.label2}</span>
                    </div>
                </div>
            </div>



        </>
    )
}
