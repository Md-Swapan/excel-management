import React from "react";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./../DashboardSidebar/DashboardSidebar";
import profileImg from '../../assets/image/a7309240-editar-768x512 (1).jpg'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-section">
        <div className="dashboard-sidebar">
          <DashboardSidebar />
        </div>
        <div className="dashboard-content-outlet-container">
          <div className="dashboard-navbar">
            <div className="content-title"></div>
            <div className="user-tab">
            <i class="bi bi-bell-fill"></i>
              <small>Admin</small>
              <div className="user-profile">
                <img width='63' src={profileImg} alt=""/>
              </div>
            </div>
          </div>

          <div className="dashboard-outlet-container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
