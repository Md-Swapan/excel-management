import React from 'react';
import { Outlet } from 'react-router-dom';

const Projects = () => {
    return (
        <>
        <h2>Project</h2>
            <Outlet />
        </>
    );
};

export default Projects;