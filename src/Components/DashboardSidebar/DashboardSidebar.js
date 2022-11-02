import React from "react";
import logo from "../../assets/image/logo-sm (1).png";
// import profileImg from "../../../assets/img/profile1.jpg";
import "./DashboardSidebar.css";
// import { useEffect } from "react";
// import useAuth from "./../../../Hooks/useAuth";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import * as axios from "axios";
import { NavLink } from "react-router-dom";
// import { baseURL } from './../../../baseUrl';


const DashboardSidebar = () => {
//   const { user, logOut } = useAuth();

//   useEffect(() => {
//     const btns = document.querySelectorAll(".menu-item");

//     const toggleItem = (elems) => {
//       elems.forEach((elem) => {
//         elem.addEventListener("click", (event) => {
//           removeActiveClass(elems);
//           event.target.classList.add("active");
//         });
//       });
//     };

//     function removeActiveClass(elems) {
//       elems.forEach((elem) => {
//         if (elem.classList.contains("active")) {
//           elem.classList.remove("active");
//         }
//       });
//     }

//     toggleItem(btns);
//   }, []);

//   const [shops, setShops] = useState([]);
//   // console.log(shops);
//   useEffect(() => {
//     axios(baseURL+"/shops").then((res) => {
//       setShops(res.data);
//       // console.log(res);
//     });
//   }, []);

  return (
    <>
      <div id="sidebarMenu">
        <div className="dashboard-logo">
          <img src={logo} alt="" />
          Excel <br/> Management
        </div>
        <div className="dashboard-profile-show-container">
        </div>
        <ul className="menuList">
          <NavLink to="/">
            <li className="menu-item active">
            <i class="bi bi-grid-fill"></i> Dashboard
            </li>
          </NavLink>
          <NavLink to="projects">
            <li className="menu-item">
            <i class="bi bi-kanban-fill"></i> Projects
            </li>
          </NavLink>
          <NavLink to="client">
            <li className="menu-item">
            <i class="bi bi-people-fill"></i> Client
            </li>
          </NavLink>
          <NavLink to="employee">
            <li className="menu-item">
            <i class="bi bi-person-lines-fill"></i> Employee
            </li>
          </NavLink>
          <NavLink to="task">
            <li className="menu-item">
            <i class="bi bi-list-task"></i> Task
            </li>
          </NavLink>
          <NavLink to="tickets">
            <li className="menu-item">
            <i class="bi bi-tags-fill"></i> Tickets
            </li>
          </NavLink>
          <NavLink to="attendance">
            <li className="menu-item">
            <i class="bi bi-person-check-fill"></i> Attendance
            </li>
          </NavLink>
          <NavLink to="department">
            <li className="menu-item">
            <i class="bi bi-diagram-3-fill"></i> Department
            </li>
          </NavLink>
          <NavLink to="official-calender">
            <li className="menu-item">
            <i class="bi bi-calendar2-check-fill"></i> Official Calender
            </li>
          </NavLink>
          <NavLink to="chat">
            <li className="menu-item">
            <i class="bi bi-chat-dots-fill"></i> Chat
            </li>
          </NavLink>
          <NavLink to="holiday">
            <li className="menu-item">
            <i class="bi bi-calendar2-x-fill"></i> Holiday
            </li>
          </NavLink>
          <li  className="menu-item">
            <i className="bi bi-box-arrow-left"></i> Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardSidebar;
