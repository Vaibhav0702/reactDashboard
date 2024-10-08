import React from 'react'

import notStarted from '../Assets/SVG/RectangleStatusNotStarted.svg'
import pending from '../Assets/SVG/RectangleStatusPending.svg'
import completed from '../Assets/SVG/RectangleStatusComplete.svg'
import { patientDateCuntType, statusType } from '../Types/type';

const statusTypeObj: statusType[] = [
  { src: notStarted, alt: 'Notstarted', msg: 'Not started' },
  { src: pending, alt: 'pending', msg: 'Pending' },
  { src: completed, alt: 'completed', msg: 'Completed' },

];

export default function Footer(patientDateCount : patientDateCuntType ) {
  return (
    <div className='p-2 card footerContainer'>
      <div className="d-flex justify-content-between align-items-center">
        <div className='d-flex align-items-center'>
          <p className='m-0 subTitleFont'>Total : {patientDateCount.count}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          {
            statusTypeObj.map(item => (
              <div className='d-flex align-items-center gap-2' key={item.src}>
                <div>
                  <img key={item.alt} src={item.src} alt={item.alt} />
                </div>
                <div>
                  {item.msg}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
