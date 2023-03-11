import React from "react";
import { Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="container-fluid">
        <h2>Project</h2>
        <Outlet />
      </div>
    </>
  );
};

export default Projects;
