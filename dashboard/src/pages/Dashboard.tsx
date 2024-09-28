import React from 'react'

import embryoBank from "../Assets/SVG/EmbryoBank.svg"

import addUser from "../Assets/SVG/user-add.svg";
import clock from "../Assets/SVG/clock.svg"
import Overview from '../components/charts/Overview';

import Source from '../components/charts/Source';
import Activity from '../components/charts/Activity';
import EmbryoGrading from '../components/charts/EmbryoGrading';
import AgeDistribution from '../components/charts/AgeDistribution';


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
    icon: embryoBank,
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
    <div className='bg-light px-2'>

      <div className="row">
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

      {/* <div className="container border"> */}
        <div className="row">
          <div className="col-12 col-md-4 p-0"> {/* Full width on small screens, 4 columns on medium and larger */}
            <div className="col-12 border p-1"> {/* Added margin for spacing */}
              <Overview />
            </div>
            <div className="col-12 border p-1">
              <Activity />
            </div>
          </div>

          <div className="col-12 col-md-8"> {/* Full width on small screens, 8 columns on medium and larger */}
            <div className="row">
              <div className="col-12 col-sm-6 border  p-1"> {/* Full width on small screens, 6 columns on small and larger */}
                <AgeDistribution />
              </div>
              <div className="col-12 col-sm-6 border  p-1"> {/* Full width on small screens, 6 columns on small and larger */}
                <Source />
              </div>
              <div className="col-12 border  p-1">
                <EmbryoGrading />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}


    </div>
  )
}
