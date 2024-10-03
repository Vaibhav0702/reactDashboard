import React from 'react'

import notStarted from '../Assets/SVG/RectangleStatusNotStarted.svg'
import pending from '../Assets/SVG/RectangleStatusPending.svg'
import completed from '../Assets/SVG/RectangleStatusComplete.svg'
interface statusType {
  src: string;
  alt: string;
  msg: string;
}


const statusTypeObj: statusType[] = [
  { src: notStarted, alt: 'Notstarted', msg: 'Not started' },
  { src: pending, alt: 'pending', msg: 'Pending' },
  { src: completed, alt: 'completed', msg: 'Completed' },

];

export default function Footer() {
  return (
    <div className='p-2 card footerContainer'>
      <div className="d-flex justify-content-between align-items-center">
        <div className='d-flex align-items-center'>
          <p className='m-0 subTitleFont'>Total : 30</p>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          {
            statusTypeObj.map(item => (
              <div className='d-flex align-items-center gap-2'>
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
