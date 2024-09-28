import React from 'react'

import message from '../Assets/SVG/message.svg';
import notiBell from '../Assets/SVG/notiBell.svg';
import profilePic from '../Assets/SVG/profilePIc.svg'

import navLOgo1 from '../Assets/SVG/navLogo1.svg';
import navLOgo2 from '../Assets/SVG/navLogo2.svg';
import navLOgo3 from '../Assets/SVG/navLogo3.svg';
import navLOgo4 from '../Assets/SVG/navLogo4.svg';
import navLOgo5 from '../Assets/SVG/navLogo5.svg';


export default function Navbar() {
  return (
    <div className='TitelFont px-4 pt-3 bg-light'>

      <div className='pb-4 border-bottom d-flex justify-content-between align-items-center flex-wrap'>
       
        <div className=''>
          Dashboard
        </div>

        <div className="d-flex flex-wrap gap-2 align-items-center ">

          <img src={navLOgo1} alt="navLOgo1" className='navLOgo1' />

          <img src={navLOgo2} alt="navLOgo2" className='navLOgo1' />

          <img src={navLOgo3} alt="navLOgo3" className='navLOgo1' />

          <img src={navLOgo4} alt="navLOgo4" className='navLOgo1' />

          <img src={navLOgo5} alt="navLOgo5" className='navLOgo1' />

          <span className='vertiBraker m-2' >|</span>


          <div className="d-flex flex-wrap">

            <img className='dashBoardIcon' src={message} alt="message" />
            <img className='dashBoardIcon' src={notiBell} alt="notiBell" />
            <img className='dashBoardIcon' src={profilePic} alt="profilePic" />

          </div>

        </div>

      </div>


    </div>
  )
}
