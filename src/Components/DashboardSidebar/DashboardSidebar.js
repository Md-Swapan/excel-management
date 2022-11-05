import React, { useEffect } from "react";
import logo from "../../assets/image/logo-sm (1).png";
import "./DashboardSidebar.css";
import { Link, NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  useEffect(() => {
    const btns = document.querySelectorAll(".menu-item");

    const toggleItem = (elems) => {
      elems.forEach((elem) => {
        elem.addEventListener("click", (event) => {
          removeActiveClass(elems);
          event.target.classList.add("active");
        });
      });
    };

    function removeActiveClass(elems) {
      elems.forEach((elem) => {
        if (elem.classList.contains("active")) {
          elem.classList.remove("active");
        }
      });
    }

    toggleItem(btns);
  }, []);

  const projectSubmenuHandler = () => {
    const projectSubmenu = document.querySelector(".projectSubmenu");
    const arrow = document.querySelector(".arrow");

    projectSubmenu.classList.toggle("projectSubmenuActive");
    arrow.classList.toggle("arowToggle");
  };

  return (
    <>
      <div id="sidebarMenu">
        <div className="dashboard-logo">
          <img src={logo} alt="" />
          Excel <br /> Management
        </div>
        <div className="dashboard-profile-show-container"></div>
        <ul className="menuList">
          <NavLink to="/dashboard">
            <li className="menu-item active">
              <i class="bi bi-grid-fill"></i> Dashboard
            </li>
          </NavLink>
          <NavLink to="/dashboard/projects">
            <li
              className="menu-item projectMenu "
              onClick={projectSubmenuHandler}
            >
              <i class="bi bi-kanban-fill"></i> Projects{" "}
              <span>
                <i class="bi bi-chevron-down arrow"></i>
              </span>
            </li>

            <ul className="projectSubmenu">
              <Link to="/dashboard/projects">
                <li className="menu-item">Projects</li>
              </Link>
              <Link to="/dashboard/projects/add-project">
                <li className="menu-item">Add Projects</li>
              </Link>
              <Link to="/dashboard/projects/view-project">
                <li className="menu-item">View Projects</li>
              </Link>
              <Link to="/dashboard/projects/projects-timeline">
                <li className="menu-item">Projects Timeline</li>
              </Link>
              <Link to="/dashboard/projects/projects-activity">
                <li className="menu-item">Projects Activity</li>
              </Link>
              <Link to="/dashboard/projects/projects-invoice">
                <li className="menu-item">Projects Invoices</li>
              </Link>
              <Link to="/dashboard/projects/projects-expense">
                <li className="menu-item">Projects Expense</li>
              </Link>
            </ul>
          </NavLink>

          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
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
          <li className="menu-item">
            <i className="bi bi-box-arrow-left"></i> Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardSidebar;
