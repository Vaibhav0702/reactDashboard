import React from 'react'

import embryoBank from "../Assets/SVG/EmbryoBank.svg"

import addUser from "../Assets/SVG/user-add.svg";
import clock from "../Assets/SVG/clock.svg"


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

      
    </div>
  )
}
