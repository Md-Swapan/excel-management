import React from "react";
import { useState } from "react";
import InfoDataCard from "./InfoDataCard/InfoDataCard";
import './DashboardHome.css'

const dashboardAllInfo = [
  {
    title: "All Projects",
    qty: 235,
  },
  {
    title: "Task",
    qty: 10,
  },
  {
    title: "Client",
    qty: 25,
  },
  {
    title: "Employee",
    qty: 40,
  },
  {
    title: "Attendance",
    qty: 38,
  },
  {
    title: "Department",
    qty: 8,
  },
  {
    title: "Payroll",
    qty: "",
  },
  {
    title: "Tickets",
    qty: 35,
  },
  {
    title: "Leave",
    qty: "",
  },
  {
    title: "Official Calender",
  },
  {
    title: "invoice",
  },
  {
    title: "Expense",
  },
];

const DashboardHome = () => {
  const [dashboardAllInfoData, setDashboardAllInfoData] = useState(dashboardAllInfo);

  return (
    <div className="container-fluid">
      {/* <h1>dashboard</h1> */}

      <div className="InfoData-container">
        {dashboardAllInfoData.map((InfoData) => (
          <InfoDataCard key={InfoData.title} InfoData={InfoData}></InfoDataCard>
        ))}
      </div>
      <div className="chart-list-activityLog">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 statusCard">
                <h6>Project Status</h6>
                </div>
                <div className="col-md-6 statusCard">
                <h6>Task Status</h6>
                </div>
                <div className="col-md-6 statusCard">
                <h6>Employee Status</h6>
                </div>
                <div className="col-md-6 statusCard">
                <h6>Budget vs Re-Budget</h6>
                </div>
                <div className="col-md-6 statusCard">
                <h6>Leave List</h6>
                </div>
                <div className="col-md-6 statusCard">
                <h6>Event & Announcement</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 ProjectActivityLog">
              <h6>Project Activity Log</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
