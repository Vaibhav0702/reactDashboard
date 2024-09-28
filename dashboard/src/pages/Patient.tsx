import React from 'react'
import Footer from '../components/Footer'

import addIcon from '../Assets/SVG/addIcon.svg'
import filterIcon from '../Assets/SVG/filterIcon.svg'
import { Link } from 'react-router-dom';

interface DashboardIcons {
    src: string;
    alt: string;
    path?: string;
  }
    
  const dashboardIcons: DashboardIcons[] = [
    { src: addIcon, alt: 'addIcon' },
    { src: filterIcon, alt: 'filterIcon' },
  
  ];





export default function Patient() {
    return (
        <div className='d-flex flex-column flex-grow-1' style={{ minHeight: '100%' }}>
            <div className='flex-grow-1 mb-3 card p-2'>
                <div className='subTitleFont p-2'>
                    <div className=' d-flex justify-content-between align-items-center flex-wrap'>

                        <div>Patient</div>

                        <div className="d-flex flex-wrap gap-2 align-items-center ">
                            <div className="search-container">
                                <input type="text" className="form-control border" placeholder="Search by Name, Case ID, Accession" />
                            </div>
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
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}
