import React from "react";
// import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import DashboardSidebar from './../DashboardSidebar/DashboardSidebar';

const Dashboard = () => {

  return (
    <>
      <div className="dashboard-section">
        <div className="dashboard-sidebar">
          <DashboardSidebar />
        </div>
        <div className="dashboard-content-outlet-container">
          <div className="dashboard-navbar">
            <div className="content-title">dashboard</div>
            {/* <div className="content-search">
              <input type="text" name="" placeholder="Search" />{" "}
              <span>
                <i className="bi bi-search"></i>
              </span>
            </div> */}
            <div className="user-profile">
              img
            </div>
          </div>

          <div className="dashboard-outlet-container">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
