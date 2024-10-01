import React, { useEffect, useState } from 'react'

import message from '../Assets/SVG/message.svg';
import notiBell from '../Assets/SVG/notiBell.svg';
import profilePic from '../Assets/SVG/profilePIc.svg'

import navLOgo1 from '../Assets/SVG/navLogo1.svg';
import navLOgo2 from '../Assets/SVG/navLogo2.svg';
import navLOgo3 from '../Assets/SVG/navLogo3.svg';
import navLOgo4 from '../Assets/SVG/navLogo4.svg';
import navLOgo5 from '../Assets/SVG/navLogo5.svg';
import { Link, useLocation } from 'react-router-dom';
import { title } from 'case';

interface Logo {
  path?: string;
  src: string;
  alt: string;
}

interface DashboardIcons {
  src: string;
  alt: string;
  path?: string;
}

const logos: Logo[] = [
  { src: navLOgo1, alt: 'Logo 1' },
  { src: navLOgo2, alt: 'Logo 2' },
  { src: navLOgo3, alt: 'Logo 3' },
  { src: navLOgo4, alt: 'Logo 4' },
  { src: navLOgo5, alt: 'Logo 5' },
];

const dashboardIcons: DashboardIcons[] = [
  { src: message, alt: 'Message' },
  { src: notiBell, alt: 'Notification Bell' },
  { src: profilePic, alt: 'Profile Picture', path: 'profile' },
];



export default function Navbar() {

  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'dashboard';

  const [activeRoute, setActiveRoute] = useState<string>(currentPath);

  useEffect(() => {
    setActiveRoute(currentPath);
  }, [currentPath]);










  return (

    <div className={`TitelFont px-4 ${ activeRoute != 'patient' ? 'pt-4' :'pt-4' } bg-light`}>
      <div className='py-4 border-bottom d-flex justify-content-between align-items-center flex-wrap'>
        <Link to={`/`} className="row text-decoration-none text-reset">
          <div>{title(activeRoute)}</div>
        </Link>
        <div className="d-flex flex-wrap gap-2 align-items-center ">
          {activeRoute != 'patient' ? <>
            {logos.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className='navLOgo1' />
            ))}
            <span className='vertiBraker m-2'>|</span>
          </> : <>



            <div className="search-container">
              <input type="text" className="form-control" placeholder="You can search here" />
            </div>

          </>}
          <div className="d-flex flex-wrap">
            {dashboardIcons.map((icon, index) => (
              <div key={index} className="row text-decoration-none text-reset">
                {icon.path ? (
                  <Link to={`/${icon.path}`} className="d-flex align-items-center">
                    <img className='dashBoardIcon' src={icon.src} alt={icon.alt} />
                  </Link>
                ) : (
                  <img className='dashBoardIcon' src={icon.src} alt={icon.alt} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
