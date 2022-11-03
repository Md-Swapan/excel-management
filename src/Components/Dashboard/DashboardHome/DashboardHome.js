import React from "react";
import { useState } from "react";
import InfoDataCard from "./InfoDataCard/InfoDataCard";
import "./DashboardHome.css";
import img1 from "../../../assets/image/c1.png";
import img2 from "../../../assets/image/f1.png";
import img3 from "../../../assets/image/f2.png";
import img4 from "../../../assets/image/f4.png";
import img5 from "../../../assets/image/w3.png";
import img6 from "../../../assets/image/f6.png";
import img7 from "../../../assets/image/f9.png";
import img8 from "../../../assets/image/h3.png";
import img9 from "../../../assets/image/w2.png";
import img10 from "../../../assets/image/f3.png";
import img11 from "../../../assets/image/w4.png";
import img12 from "../../../assets/image/g1.png";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const dashboardAllInfo = [
  {
    title: "All Projects",
    qty: 235,
    img: img1,
  },
  {
    title: "Task",
    qty: 10,
    img: img2,
  },
  {
    title: "Client",
    qty: 25,
    img: img3,
  },
  {
    title: "Employee",
    qty: 40,
    img: img4,
  },
  {
    title: "Attendance",
    qty: 38,
    img: img5,
  },
  {
    title: "Department",
    qty: 8,
    img: img6,
  },
  {
    title: "Payroll",
    qty: "",
    img: img7,
  },
  {
    title: "Tickets",
    qty: 35,
    img: img8,
  },
  {
    title: "Leave",
    qty: "",
    img: img9,
  },
  {
    title: "Official Calender",
    img: img10,
  },
  {
    title: "invoice",
    img: img11,
  },
  {
    title: "Expense",
    img: img12,
  },
];

const DashboardHome = () => {
  const [dashboardAllInfoData, setDashboardAllInfoData] =
    useState(dashboardAllInfo);

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
              <div className="status-container">
                <div className="statusCard">
                  <h5>Project Status</h5>
                  <br />
                  <div style={{ width: "300px" }}>
                    <Pie data={data} />
                  </div>
                </div>
                <div className="statusCard">
                  <h5>Task Status</h5>
                  <br />
                  <div style={{ width: "300px" }}>
                    <Pie data={data} />
                  </div>
                </div>
                <div className="statusCard">
                  <h5>Employee Status</h5>
                  <br />
                  <div style={{ width: "300px" }}>
                    <Doughnut data={data} />
                  </div>
                </div>
                <div className="statusCard">
                  <h5>Budget vs Re-Budget</h5>
                  <br />
                  <div style={{ width: "300px" }}>
                    <Doughnut data={data} />
                  </div>
                </div>
                <div className="statusCard">
                  <h5>Leave List</h5>
                  <br />
                  <h6>Employee Todays On Leave</h6>
                  <ul>
                    <li>
                      <i class="bi bi-arrow-return-right"></i> Tse 2023412 Today
                      on leave
                    </li>
                    <li>
                      <i class="bi bi-arrow-return-right"></i> Tse 2023412 Today
                      on leave
                    </li>
                    <li>
                      <i class="bi bi-arrow-return-right"></i> Tse 2023412 Today
                      on leave
                    </li>
                    <li>
                      <i class="bi bi-arrow-return-right"></i> Tse 2023412 Today
                      on leave
                    </li>
                  </ul>

                  <h6>Next day Leave List</h6>
                  <ul>
                    <li>
                      <i class="bi bi-arrow-return-right"></i> asdf 2023412
                      Today on leave
                    </li>
                    <li>
                      <i class="bi bi-arrow-return-right"></i> Twerse 2023412
                      Today on leave
                    </li>
                    <li>
                      <i class="bi bi-arrow-return-right"></i> Tsgrse 2023412
                      Today on leave
                    </li>
                    <li>
                      <i class="bi bi-arrow-return-right"></i> awkdfse 2023412
                      Today on leave
                    </li>
                  </ul>
                </div>
                <div className="statusCard EventAnnouncement">
                  <h5>Event & Announcement</h5>
                  <br />
                  <ul>
                    <div className="d-flex Event">
                      <i class="bi bi-calendar-event"></i>{" "}
                      <li>
                        {" "}
                        50% sale on software <br />{" "}
                        <small>50% sale on CRM</small>
                      </li>
                    </div>
                    <div className="d-flex announcement">
                      <i class="bi bi-megaphone"></i>
                      <li>
                        {" "}
                        Rescheduling Team Meeting
                        <br /> <small>Meeting will held at 4:00 p.m</small>
                      </li>
                    </div>

                    <div className="d-flex Event">
                      <i class="bi bi-calendar-event"></i>
                      <li>
                        {" "}
                        50% sale on software <br />{" "}
                        <small>50% sale on CRM</small>
                      </li>
                    </div>

                    <div className="d-flex announcement">
                      <i class="bi bi-megaphone"></i>{" "}
                      <li>
                        {" "}
                        Rescheduling Team Meeting
                        <br /> <small>Meeting will held at 4:00 p.m</small>
                      </li>
                    </div>

                    <div className="d-flex announcement">
                      <i class="bi bi-megaphone"></i>{" "}
                      <li>
                        Rescheduling Team Meeting
                        <br /> <small>Meeting will held at 4:00 p.m</small>
                      </li>
                    </div>

                    <div className="d-flex Event">
                      <i class="bi bi-calendar-event"></i>
                      <li>
                        {" "}
                        50% sale on software <br />{" "}
                        <small>50% sale on CRM</small>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 ProjectActivityLog">
              <h5>Project Activity Log</h5>
              <br />
              <div className="d-flex">
                <div>
                  <div className="logBorder"></div>
                  <div className="logDot"></div>
                </div>

                <div>
                  <div className="logCardHeadPath"></div>
                  <div className="logCard">
                    <h6>1 hour ago</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
