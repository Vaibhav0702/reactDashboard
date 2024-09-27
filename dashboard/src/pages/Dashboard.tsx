import React from 'react'

import embryoBank from "../Assets/SVG/EmbryoBank.svg"

import addUser from "../Assets/SVG/user-add.svg";
import clock from "../Assets/SVG/clock.svg"

export default function Dashboard() {
  return (
    <div className='bg-light'>
      
      <div className="row">
        <div className="col-lg-3 col-md-6 p-1">
          <div className="card m-0 p-1">
            <div className="card-body d-flex gap-2 p-1">
              <div>
                <img className='dashBoardIcon d-flex align-items-center' src={embryoBank} alt="embryoBank" />
              </div>
              <div>
                <h5 className="card-title dashboardbH">1000</h5>
                <p className="card-text dashboardSubH">Total Patients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 p-1">
          <div className="card m-0 p-1">
            <div className="card-body d-flex gap-2 p-1">
              <div>
                <img className='dashBoardIcon d-flex align-items-center' src={embryoBank} alt="embryoBank" />
              </div>
              <div>
                <h5 className="card-title dashboardbH">3000</h5>
                <p className="card-text dashboardSubH">Total Embryo Graded</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 p-1">
          <div className="card m-0 p-1">
            <div className="card-body d-flex gap-2 p-1">
              <div>
                <img className='dashBoardIcon d-flex align-items-center' src={addUser} alt="addUser" />
              </div>
              <div className='flex-grow-1'>
                <h5 className="card-title dashboardbH">06</h5>
                <p className="card-text dashboardSubH">Avg #Emb Graded/Patient</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 p-1">
          <div className="card m-0 p-1">
            <div className="card-body d-flex gap-2 p-1">
              <div>
                <img className='dashBoardIcon d-flex align-items-center' src={clock} alt="clock" />
              </div>
              <div>
                <h5 className="card-title dashboardbH">123 Hrs</h5>
                <p className="card-text dashboardSubH">Avg Turnaround Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
