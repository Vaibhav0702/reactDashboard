import React, { useEffect, useState } from 'react'
import '../Styles/Sidebar.css'
import logo from '../Assets/SVG/AINOVA_Logo.svg';
import patientlogo from '../Assets/SVG/patientLogo.svg';
import dashboard from '../Assets/SVG/dashboard.svg'

import Patient from '../Assets/SVG/profile.svg'
import Resources from '../Assets/SVG/task-square.svg'
import Configuration from '../Assets/SVG/setting-2.svg'
import Support from '../Assets/SVG/headphone.svg'
import Logout from '../Assets/SVG/logout.svg'
import lamp from '../Assets/SVG/lamp-on.svg'
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from '../Types/type';


const menuItems: MenuItem[] = [
  { path: '', label: 'Dashboard', icon: dashboard },
  { path: 'patient', label: 'Patient', icon: Patient },
  { path: 'resource', label: 'Resources', icon: Resources },
  { path: 'settings', label: 'Configuration', icon: Configuration },
  { path: 'support', label: 'Support', icon: Support },
  { path: 'logout', label: 'Logout', icon: Logout },
];


export default function Sidebar() {

  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || '';


  const [activeRoute, setActiveRoute] = useState<string>(currentPath);

  useEffect(() => {
    setActiveRoute(currentPath);
  }, [currentPath]);


  return (

    <div className="p-3 d-flex flex-column" style={{ width: '15rem', minHeight: '100vh', overflowY: 'auto', minWidth: '15rem' }}>
      <div className="d-flex justify-content-center align-items-center p-4">
        <img src={`${activeRoute === 'patient' ? patientlogo : logo}`} alt="Logo" style={{ width: '100%' }} />
      </div>
      <ul className="list-unstyled pt-4 pb-4 flex-grow-1 d-flex flex-column">
        {menuItems.map((item, index) => (
          <li
            key={item.path}
            className={`mb-2 p-3 ${activeRoute === item.path ? 'selectedBar subTitleFont' : 'menuText'} ${index === menuItems.length - 1 ? 'mt-auto' : ''}`}
          >
            <Link to={`/${item.path}`} className="row text-decoration-none text-reset">
              <div className='col-3 d-flex align-items-center'>
                <img className={activeRoute === item.path ? 'selectedIcon' : 'normalIcon'} src={item.icon} alt={item.label} />
              </div>
              <div className='col-9 px-0 d-flex align-items-center'>
                {item.label}
              </div>
            </Link>
          </li>
        ))}

      </ul>
      <div className='thoughtContainer p-4 text-center bg-light mt-auto'>
        <div className='customDiv bg-light mb-2'>
          <div className='customDivs'>
            <img src={lamp} alt="lamp" />
          </div>
        </div>
        <p className='thoughtHeading'>Thoughts Time</p>
        <p className='thoughPara'>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
        <input type="text" placeholder='Write a message' className='form-control thoughtInput' />
      </div>
    </div>

  )
}
