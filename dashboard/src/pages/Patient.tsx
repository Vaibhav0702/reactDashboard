import React from 'react'
import Footer from '../components/Footer'

import addIcon from '../Assets/SVG/addIcon.svg'
import filterIcon from '../Assets/SVG/filterIcon.svg'
import { Link } from 'react-router-dom';


import viewTable from '../Assets/SVG/viewTable.svg';
import uploadTable from '../Assets/SVG/uploadTable.svg';
import completedTable from "../Assets/SVG/completedTable.svg";
import pendingTable from '../Assets/SVG/pendingTable.svg'
import ArrowLeft from '../Assets/SVG/arrow-square-left.svg'
import ArrowRight from '../Assets/SVG/arrow-square-right.svg'


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



    const handlePageChange = (key : any)=>{
        console.log(key);
        
      }













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

                <div className="row mx-2 p-1 bg-light rounded patientPara px-4">
                    <div className="col-lg-3 col-md-6 p-1">
                        <div className="form-check p-1 px-2">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                                No Transferable Embryos
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-1">
                        <div className="form-check p-1 px-2">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault2" />
                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                                All Transferable Embryos
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-1">
                        <div className="form-check p-1 px-2">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault3" />
                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                                Draft Patients
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-1">
                        <div className="form-check p-1 px-2">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault4" />
                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                                International Patients
                            </label>
                        </div>
                    </div>

                </div>

                <div className='m-2 flex-grow-1' style={{ overflow: 'auto' }} >
                    <table className="table table-hover">
                        <thead>
                            <tr className=' patientPara '>
                                <th scope="col">Patient Name, MR No., Gender</th>
                                <th scope="col">Accession#</th>
                                <th scope="col">Doctor</th>
                                <th scope="col">Notes</th>
                                <th scope="col">Upload Consent</th>
                                <th scope="col">Stim Report</th>
                                <th scope="col">Result</th>
                                <th scope="col">Report Data</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='customRow'>
                                <td>
                                    <p className='tableTitle m-0'>
                                        Ralph Edwards
                                    </p>
                                    <a className='tableTitle' href="/patient">SDF45678543 | Female</a>
                                </td>
                                <td className='tableTitle'>123RND</td>
                                <td className='tableTitle' >Cody Fisher</td>
                                <td className='p-1'>
                                    <img src={viewTable} alt="viewTable" />
                                </td>
                                <td className='p-1' > <img src={uploadTable} alt="uploadTable" /></td>
                                <td className='p-1' > <img src={viewTable} alt="viewTable" /></td>
                                <td className='tableTitle' >Released</td>
                                <td className='p-1'><img src={viewTable} alt="viewTable" /></td>
                                <td><img src={completedTable} alt="completedTable" /></td>
                            </tr>
                            <tr className='customRow'>
                                <td>
                                    <p className='tableTitle m-0'>
                                        Ralph Edwards
                                    </p>
                                    <a className='tableTitle' href="/patient">SDF45678543 | Female</a>
                                </td>
                                <td className='tableTitle'>123RND</td>
                                <td className='tableTitle' >Cody Fisher</td>
                                <td className='p-1'>
                                    <img src={viewTable} alt="viewTable" />
                                </td>
                                <td className='p-1' > <img src={uploadTable} alt="uploadTable" /></td>
                                <td className='p-1' > <img src={viewTable} alt="viewTable" /></td>
                                <td className='tableTitle' >Released</td>
                                <td className='p-1'><img src={viewTable} alt="viewTable" /></td>
                                <td><img src={pendingTable} alt="pendingTable" /></td>
                            </tr>
                            <tr className='customRow'>
                                <td>
                                    <p className='tableTitle m-0'>
                                        Ralph Edwards
                                    </p>
                                    <a className='tableTitle' href="/patient">SDF45678543 | Female</a>
                                </td>
                                <td className='tableTitle'>123RND</td>
                                <td className='tableTitle' >Cody Fisher</td>
                                <td className='p-1'>
                                    <img src={viewTable} alt="viewTable" />
                                </td>
                                <td className='p-1' > <img src={uploadTable} alt="uploadTable" /></td>
                                <td className='p-1' > <img src={viewTable} alt="viewTable" /></td>
                                <td className='tableTitle' >Released</td>
                                <td className='p-1'><img src={viewTable} alt="viewTable" /></td>
                                <td><img src={pendingTable} alt="pendingTable" /></td>
                            </tr>
                            <tr className='customRow'>
                                <td>
                                    <p className='tableTitle m-0'>
                                        Ralph Edwards
                                    </p>
                                    <a className='tableTitle' href="/patient">SDF45678543 | Female</a>
                                </td>
                                <td className='tableTitle'>123RND</td>
                                <td className='tableTitle' >Cody Fisher</td>
                                <td className='p-1'>
                                    <img src={viewTable} alt="viewTable" />
                                </td>
                                <td className='p-1' > <img src={uploadTable} alt="uploadTable" /></td>
                                <td className='p-1' > <img src={viewTable} alt="viewTable" /></td>
                                <td className='tableTitle' >Released</td>
                                <td className='p-1'><img src={viewTable} alt="viewTable" /></td>
                                <td><img src={completedTable} alt="completedTable" /></td>
                            </tr>




                        </tbody>
                    </table>
                </div>

                <div className='paginationDiv'>
              <span>Showing 1 to 3 of 10 entries</span>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <button className="page-link" disabled aria-label="Previous">
                      <img src={ArrowLeft} alt="Previous" />
                    </button>
                  </li>
                  <li className="page-item"><button className="page-link" onClick={() => handlePageChange(1)}>1</button></li>
                  <li className="page-item"><button className="page-link" onClick={() => handlePageChange(2)}>2</button></li>
                  <li className="page-item"><button className="page-link" onClick={() => handlePageChange(3)}>3</button></li>
                  <li className="page-item">
                    <button className="page-link" onClick={() => handlePageChange('next')} aria-label="Next">
                      <img src={ArrowRight} alt="Next" />
                    </button>
                  </li>
                </ul>
              </nav>

            </div>


            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}
