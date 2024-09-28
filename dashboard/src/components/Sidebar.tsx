import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import logo from '../Assets/SVG/AINOVA_Logo.svg'; // Adjust the path based on your file structure

import dashboard from '../Assets/SVG/dashboard.svg'

import Patient from '../Assets/SVG/profile.svg'
import Resources from '../Assets/SVG/task-square.svg'
import Configuration from '../Assets/SVG/setting-2.svg'
import Support from '../Assets/SVG/headphone.svg'
import Logout from '../Assets/SVG/logout.svg'

import lamp from '../Assets/SVG/lamp-on.svg'
import { useLocation } from 'react-router-dom';



export default function Sidebar() {


  // const [activeRoute, setActiveRoute] = useState('dashboard');

  // const handleRouteChange = (route: string) => {
  //   setActiveRoute(route);
  //   // You can also handle navigation logic here if using a router
  // };


  const location = useLocation(); // Get the current location
  const currentPath = location.pathname;
  const initialRoute = currentPath.split('/').pop() || 'dashboard' // Get route from query params or default to 'dashboard'


  // State to track the active route
  const [activeRoute, setActiveRoute] = useState(initialRoute);

  // const handleRouteChange = (route : string) => {
  //     setActiveRoute(route);
  // };

  useEffect(() => {
    console.log('Active route changed to:', activeRoute);
    setActiveRoute(activeRoute)
  }, [currentPath]);


  return (

    // <div className="p-3 d-flex flex-column" style={{ width: '15rem', minHeight: '100vh', overflowY: 'auto' , minWidth :'13rem' }}>
    //   <div className="pb-4 px-4 pt-2">
    //       <img src={logo} alt="Logo" style={{ width: '100%' }} />
    //   </div>
    //   <ul className="list-unstyled pt-4 pb-4 flex-grow-1 d-flex flex-column">
    //       <li className="mb-2 p-2 px-3 selectedBar subTitleFont">
    //           <div className='row'>
    //               <div className='col-3'>
    //                   <img className='selectedIcon d-flex align-item-center' src={dashboard} alt="dashboard" />
    //               </div>
    //               <div className='col-9 px-0 d-flex align-item-center'>  
    //                   Dashboard
    //               </div>
    //           </div>
    //       </li>
    //       <li className="mb-2 px-3">
    //           <div className='row'>
    //               <div className='col-3 d-flex align-item-center'>
    //                   <img className='normalIcon' src={Patient} alt="Patient" />
    //               </div>
    //               <div className='col-9 px-0 d-flex align-item-center menuText'>  
    //                   Patient
    //               </div>
    //           </div>
    //       </li>
    //       <li className="mb-2 px-3">
    //           <div className='row'>
    //               <div className='col-3 d-flex align-item-center'>
    //                   <img className='normalIcon' src={Resources} alt="Resources"  />
    //               </div>
    //               <div className='col-9 px-0 d-flex align-item-center menuText'>  
    //                   Resources
    //               </div>
    //           </div>
    //       </li>
    //       <li className="mb-2 px-3">
    //           <div className='row'>
    //               <div className='col-3 d-flex align-item-center'>
    //                   <img className='normalIcon' src={Configuration} alt="Configuration"  />
    //               </div>
    //               <div className='col-9 px-0 d-flex align-item-center menuText'>  
    //                   Configuration
    //               </div>
    //           </div>
    //       </li>
    //       <li className="mb-2 px-3">
    //           <div className='row'>
    //               <div className='col-3 d-flex align-item-center'>
    //                   <img className='normalIcon' src={Support} alt="Support"   />
    //               </div>
    //               <div className='col-9 px-0 d-flex align-item-center menuText'>  
    //                   Support
    //               </div>
    //           </div>
    //       </li>
    //       <li className="mb-2 px-3 mt-auto">
    //           <div className='row'>
    //               <div className='col-3 d-flex align-item-center'>
    //                   <img className='normalIcon' src={Logout} alt="Logout" />
    //               </div>
    //               <div className='col-9 px-0 d-flex align-item-center menuText'>  
    //                   Logout
    //               </div>
    //           </div>
    //       </li>
    //   </ul>

    //   <div className='thoughtContainer p-4 text-center bg-light mt-auto'>
    //       <div className='customDiv bg-light mb-2'>
    //           <div className='customDivs'>
    //               <img src={lamp} alt="lamp" />
    //           </div>
    //       </div>
    //       <p className='thoughtHeading'>Thoughts Time</p>
    //       <p className='thoughPara'>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
    //       <input type="text" placeholder='Write a message' className='form-control thoughtInput' />
    //   </div>
    // </div>

    <div className="p-3 d-flex flex-column" style={{ width: '15rem', minHeight: '100vh', overflowY: 'auto', minWidth: '13rem' }}>
      <div className="pb-4 px-4 pt-2">
        <img src={logo} alt="Logo" style={{ width: '100%' }} />
      </div>
      <ul className="list-unstyled pt-4 pb-4 flex-grow-1 d-flex flex-column">
        <li
          className={`mb-2 px-3 ${activeRoute === 'dashboard' ? 'selectedBar subTitleFont p-2' : 'menuText'} `} >
          <div className='row'>
            <div className='col-3'>
              <img className='selectedIcon d-flex align-item-center' src={dashboard} alt="dashboard" />
            </div>
            <div className='col-9 px-0 d-flex align-item-center'>
              Dashboard
            </div>
          </div>
        </li>
        <li
          className={`mb-2 px-3 ${activeRoute === 'profile' ? 'selectedBar subTitleFont p-2' : 'menuText'}`}

        >
          <div className='row'>
            <div className='col-3 d-flex align-item-center'>
              <img className='normalIcon' src={Patient} alt="Patient" />
            </div>
            <div className='col-9 px-0 d-flex align-item-center '>
              Patient
            </div>
          </div>
        </li>
        <li
          className={`mb-2 px-3 ${activeRoute === 'resource' ? 'selectedBar subTitleFont p-2' : 'menuText'}`}

        >
          <div className='row'>
            <div className='col-3 d-flex align-item-center'>
              <img className='normalIcon' src={Resources} alt="Resources" />
            </div>
            <div className='col-9 px-0 d-flex align-item-center'>
              Resources
            </div>
          </div>
        </li>
        <li
          className={`mb-2 px-3 ${activeRoute === 'settings' ? 'selectedBar subTitleFont p-2' : 'menuText'}`}

        >
          <div className='row'>
            <div className='col-3 d-flex align-item-center'>
              <img className='normalIcon' src={Configuration} alt="Configuration" />
            </div>
            <div className='col-9 px-0 d-flex align-item-center'>
              Configuration
            </div>
          </div>
        </li>
        <li
          className={`mb-2 px-3 ${activeRoute === 'support' ? 'selectedBar subTitleFont p-2' : 'menuText'}`}

        >
          <div className='row'>
            <div className='col-3 d-flex align-item-center'>
              <img className='normalIcon' src={Support} alt="Support" />
            </div>
            <div className='col-9 px-0 d-flex align-item-center'>
              Support
            </div>
          </div>
        </li>
        <li
          className={`mb-2 px-3 mt-auto ${activeRoute === 'logout' ? 'selectedBar subTitleFont p-2' : 'menuText'}`}

        >
          <div className='row'>
            <div className='col-3 d-flex align-item-center'>
              <img className='normalIcon' src={Logout} alt="Logout" />
            </div>
            <div className='col-9 px-0 d-flex align-item-center'>
              Logout
            </div>
          </div>
        </li>
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
