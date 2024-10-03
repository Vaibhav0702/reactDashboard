import React, { useState } from 'react'

import embryoBank from "../Assets/SVG/EmbryoBank.svg"

import addUser from "../Assets/SVG/user-add.svg";
import clock from "../Assets/SVG/clock.svg"
import Overview from '../components/charts/Overview';

import Source from '../components/charts/Source';
import Activity from '../components/charts/Activity';
import EmbryoGrading from '../components/charts/EmbryoGrading';
import AgeDistribution from '../components/charts/AgeDistribution';
import profileUSer from "../Assets/SVG/profile-2user.svg"
import PatientForm from '../components/PatientFrom';

interface DashboardCardData {
  title: string;
  subtitle: string;
  value: string;
  icon: string;
}

const dashboardData: DashboardCardData[] = [
  {
    title: "Total Patients",
    subtitle: "1000",
    value: "1000",
    icon: profileUSer,
  },
  {
    title: "Total Embryo Graded",
    subtitle: "3000",
    value: "3000",
    icon: embryoBank,
  },
  {
    title: "Avg #Emb Graded/Patient",
    subtitle: "06",
    value: "06",
    icon: addUser,
  },
  {
    title: "Avg Turnaround Time",
    subtitle: "123 Hrs",
    value: "123 Hrs",
    icon: clock,
  },
];


export default function Dashboard() {

  return (
    <div className='bg-light px-2 d-flex flex-column h-100'>

      {/* <div className="row">
        {dashboardData.map((card, index) => (
          <div key={index} className="col-lg-3 col-md-6 p-1">
            <div className="card m-0 p-1">
              <div className="card-body d-flex gap-2 p-1">
                <div>
                  <img
                    className="dashBoardIcon d-flex align-items-center"
                    src={card.icon}
                    alt={card.title}
                  />
                </div>
                <div className="flex-grow-1">
                  <h5 className="card-title dashboardbH">{card.value}</h5>
                  <p className="card-text dashboardSubH">{card.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="row">
        {dashboardData.map((card, index) => (
          <div key={index} className="col-lg-3 col-md-6 p-1">
            <div className="card m-0 p-1">
              <div className="card-body d-flex gap-4 p-4">
                <div>
                  <img
                    className="dashBoardIcon d-flex align-items-center"
                    src={card.icon}
                    alt={card.title}
                  />
                </div>
                <div className="flex-grow-1">
                  <h5 className="card-title dashboardbH">{card.value}</h5>
                  <p className="card-text dashboardSubH">{card.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="container border">
    
        <div className="row">
           <div className="col-4">

               <div className='col-12 border'>
                  <Overview />
               </div>
               <div className='col-12 border'>
                  <Activity />
               </div>

           </div>
           <div className="col-8">

               <div className="row">
                  <div className="col-6 border">
                     <AgeDistribution /> 
                  </div>
                  <div className="col-6 border">
                    <Source />
                  </div>
                  <div className="col-12 border">
                    <EmbryoGrading />
                  </div>
               </div>

           </div>
        </div>
      </div> */}

      {/* <div className="row">
          <div className="col-12 col-md-4 p-0"> 
            <div className="col-12 border p-3 card">
              <Overview />
            </div>
            <div className="col-12 border p-3 card">
              <Activity />
            </div>
          </div>

          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col-12 col-sm-6 border  p-3 card"> 
                <AgeDistribution />
              </div>
              <div className="col-12 col-sm-6 border  p-3 card">
                <Source />
              </div>
              <div className="col-12 border  p-3 card">
                <EmbryoGrading />
              </div>
            </div>
          </div>
        </div> */}






      {/* <div className="d-flex border flex-grow-1 mt-4 gap-4">
        <div className="col-12 col-md-4 p-0 d-flex flex-column gap-4">
          <div className="border p-3 card flex-grow-1">
            <Overview />
          </div>
          <div className="col-12 border p-3 card flex-grow-1">
            <Activity />
          </div>
        </div>

        <div className="col-12 col-md-8 d-flex flex-column gap-4">
    
          <div className="d-flex gap-4 flex-grow-1">
             <div className="border p-3 card flex-grow-1">
              <AgeDistribution />
            </div>
            <div className="border p-3 card flex-grow-1" >
              <Source />
            </div>
          </div>
          <div className="d-flex gap-4 border flex-grow-1">
            <div className="border p-3 card  flex-grow-1">
              <EmbryoGrading />
            </div>
          </div>
        </div>
      </div> */}



      <div className="d-flex flex-grow-1 mt-4 gap-4 flex-wrap">
        <div className="col-12 col-md-4 p-0 d-flex flex-column gap-4">
          <div className=" p-3 card ">
            <Overview />
          </div>
          <div className=" p-3 card flex-grow-1">
            <Activity />
          </div>
        </div>

        <div className="col-12 col-md-7 d-flex flex-column gap-4 flex-grow-1">
          <div className="d-flex gap-4 flex-wrap">
            <div className=" p-3 card flex-grow-1">
              <AgeDistribution />
            </div>
            <div className=" p-3 card flex-grow-1">
              <Source />
            </div>
          </div>
          <div className="d-flex gap-4  flex-grow-1">
            <div className=" p-3 card flex-grow-1">
              <EmbryoGrading />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
