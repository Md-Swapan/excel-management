import React from "react";
import "./AllProjectsCardPage.css";
import ProgressBar from "@ramonak/react-progress-bar";

const AllProjectsCardPage = (props) => {
  const {
    id,
    projectName,
    category,
    time,
    reTime1,
    reTime2,
    projectBudget,
    reBudget1,
    reBudget2,
  } = props.projectData;

  console.log(props);

  return (
    <div className="project-card-container">
      <div className="project-card-header">
        <h5>{projectName}</h5>
        <div className="view-edit-icon-btn">
          <i class="bi bi-eye-fill"></i>
          <i class="bi bi-pencil-square"></i>
        </div>
      </div>
      <div className="project-card-content">
        <div>
          <div className="d-flex ">
            <p>
              Category: <span>{category}</span>
            </p>
            <div className="d-flex bar">
              <p>Task: </p>
              <div style={{ marginLeft: "7px" }}>
                <ProgressBar
                  completed={80}
                  className="wrapper"
                  barContainerClassName="barContainer"
                  completedClassName="barCompleted"
                  labelClassName="label"
                  maxCompleted={100}
                  // customLabel="completed"
                />
                <small style={{ marginLeft: "60px" }}>80% complete</small>
              </div>
            </div>
          </div>

          <div className="time">
            <p>Time: </p>
            <span>
              {time} <br /> {time}
            </span>
            <div className="d-flex bar ">
              <p style={{ marginLeft: "12px" }}>Time Bar: </p>
              <div className="timebar1" style={{ marginLeft: "7px" }}>
                <ProgressBar
                  completed={100}
                  className="wrapper"
                  barContainerClassName="timeBarContainer"
                  completedClassName="timeBarCompleted"
                  labelClassName="label"
                  maxCompleted={100}
                  // customLabel="completed"
                />
                <small style={{ marginLeft: "60px" }}>E. Time Over</small>
              </div>
            </div>
          </div>

          <div className="time ">
            <p className="time1">E. Time (1): </p>
            <span>
              {reTime1} <br /> {reTime1}
            </span>
            <div className="d-flex bar ">
              {/* <p>E. Time Bar: </p> */}
              <div className="timebar" style={{ marginLeft: "52px" }}>
                <ProgressBar
                  completed={100}
                  className="wrapper"
                  barContainerClassName="timeBarContainer"
                  completedClassName="timeBarCompleted"
                  labelClassName="label"
                  maxCompleted={100}
                  // customLabel="completed"
                />
                <small style={{ marginLeft: "60px" }}>E. Time Over</small>
              </div>
            </div>
          </div>

          <div className="time">
            <p className="time1">E. Time (2): </p>
            <span>
              {reTime2} <br /> {reTime2}
            </span>
            <div className="d-flex bar ">
              {/* <p>E. Time Bar: </p> */}
              <div className="timebar" style={{ marginLeft: "52px" }}>
                <ProgressBar
                  completed={50}
                  className="wrapper"
                  barContainerClassName="timeBarContainer"
                  completedClassName="lastTimeBarCompleted"
                  labelClassName="label"
                  maxCompleted={100}
                  // customLabel="completed"
                />
                <small style={{ marginLeft: "40px" }}>50% Time Consumed</small>
              </div>
            </div>
          </div>

          <div className="budget">
            <p>Project Budget: </p>
            <span>{projectBudget} BDT</span>
            <div className="d-flex bar ">
              <p>Expense Vs Budget: </p>
              <div className="" style={{ marginLeft: "-20px" }}>
                <ProgressBar
                  completed={100}
                  className="wrapper"
                  barContainerClassName="budgetBarContainer"
                  completedClassName="budgetBarCompleted"
                  labelClassName="label"
                  maxCompleted={100}
                  // customLabel="completed"
                />
                <small style={{ marginLeft: "60px" }}>Budget Over</small>
              </div>
            </div>
          </div>

          <div className="budget">
            <p className="time1">Re-Budget: </p>
            <span>{projectBudget} BDT</span>
            <div className="d-flex bar ">
              {/* <p>E. Time Bar: </p> */}
              <div className="timebar" style={{ marginLeft: "35px" }}>
                <ProgressBar
                  completed={100}
                  className="wrapper"
                  barContainerClassName="budgetBarContainer"
                  completedClassName="budgetBarCompleted"
                  labelClassName="label"
                  maxCompleted={100}
                  // customLabel="completed"
                />
                <small style={{ marginLeft: "60px" }}>Budget Over</small>
              </div>
            </div>
          </div>

          <div className="budget">
            <p className="time1">Re-Budget: </p>
            <span>{projectBudget} BDT</span>
            <div className="d-flex bar ">
              {/* <p>E. Time Bar: </p> */}
              <div className="budgetbar" style={{ marginLeft: "35px" }}>
                <ProgressBar
                  completed={50}
                  className="wrapper"
                  barContainerClassName="budgetBarContainer"
                  completedClassName="budgetBarCompleted"
                  labelClassName="label"
                  maxCompleted={100}
                  // customLabel="completed"
                />
                <small style={{ marginLeft: "60px" }}>50% Remaining</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsCardPage;
