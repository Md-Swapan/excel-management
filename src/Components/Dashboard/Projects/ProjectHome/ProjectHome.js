import React from "react";
import "./ProjectHome.css";
import { Link, Outlet } from "react-router-dom";
import All from "./All/All";
import RunningProject from "./RunningProject/RunningProject";

const ProjectHome = () => {
    const allComponent = document.querySelector(".allComponent");
    const runningProjectComponent = document.querySelector(
      ".runningProjectComponent"
    );

    const AllComponentToggle = () => {
      allComponent.style.display = "block";
      runningProjectComponent.style.display = "none";
    };
    const RunningProjectComponentToggle = () => {
      allComponent.style.display = "none";
      runningProjectComponent.style.display = "block";
    };

  return (
    <>
      <div className="project-home-section">
        <div className="container-fluid">
          <div className="project-home-header">
            <span>
              View All Projects List <i class="bi bi-list-task"></i>
            </span>

            <div>
              <button  onClick={AllComponentToggle}>
                All
              </button>
              <button onClick={RunningProjectComponentToggle}>
                Running
              </button>
              <button type="">Completed</button>
              <button type="">Delivered</button>
              <button type="">Paused</button>
              <button type="">Incomplete</button>
              <button type="">Upcoming</button>
              <button type="">Updated</button>
            </div>
          </div>

          <div className="allComponent">
            <All />
          </div>
          <div className="runningProjectComponent">
            <RunningProject />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHome;
