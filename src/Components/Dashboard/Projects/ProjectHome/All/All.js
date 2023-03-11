import React from 'react';
import { useState } from 'react';
import AllProjectsCardPage from './../AllProjectsCardPage/AllProjectsCardPage';
import './All.css'

const allProjectData = [
    {
        id: '1',
        projectName: "Work Flow",
        category: "Ecommerce",
        time: "dd/mm/yy",
        reTime1: 'dd/mm/yy',
        reTime2: 'dd/mm/yy',
        projectBudget: '230000',
        reBudget1: '230000',
        reBudget2: '230000',
    },
    {
        id: '2',
        projectName: "Shapla City",
        category: "Ecommerce",
        time: "dd/mm/yy",
        reTime1: 'dd/mm/yy',
        reTime2: 'dd/mm/yy',
        projectBudget: '230000',
        reBudget1: '230000',
        reBudget2: '230000',
    },
    {
        id: '3',
        projectName: "Excel IT AI",
        category: "Ecommerce",
        time: "dd/mm/yy",
        reTime1: 'dd/mm/yy',
        reTime2: 'dd/mm/yy',
        projectBudget: '230000',
        reBudget1: '230000',
        reBudget2: '230000',
    },
    {
        id: '4',
        projectName: "CRM Shapla",
        category: "Ecommerce",
        time: "dd/mm/yy",
        reTime1: 'dd/mm/yy',
        reTime2: 'dd/mm/yy',
        projectBudget: '230000',
        reBudget1: '230000',
        reBudget2: '230000',
    },
    {
        id: '5',
        projectName: "BBP Shops",
        category: "Ecommerce",
        time: "dd/mm/yy",
        reTime1: 'dd/mm/yy',
        reTime2: 'dd/mm/yy',
        projectBudget: '230000',
        reBudget1: '230000',
        reBudget2: '230000',
    },
    {
        id: '5',
        projectName: "BBP Shops",
        category: "Ecommerce",
        time: "dd/mm/yy",
        reTime1: 'dd/mm/yy',
        reTime2: 'dd/mm/yy',
        projectBudget: '230000',
        reBudget1: '230000',
        reBudget2: '230000',
    },
    {
        id: '5',
        projectName: "BBP Shops",
        category: "Ecommerce",
        time: "dd/mm/yy",
        reTime1: 'dd/mm/yy',
        reTime2: 'dd/mm/yy',
        projectBudget: '230000',
        reBudget1: '230000',
        reBudget2: '230000',
    },
    {
        id: '5',
        projectName: "BBP Shops",
        category: "Ecommerce",
        time: "dd/mm/yy",
        reTime1: 'dd/mm/yy',
        reTime2: 'dd/mm/yy',
        projectBudget: '230000',
        reBudget1: '230000',
        reBudget2: '230000',
    },
];

const All = () => {
    const [AllProjectData, setAllProjectData] = useState(allProjectData)
    return (
        <div className='allProject-card'>
            {
                AllProjectData.map(projectData => <AllProjectsCardPage key={projectData.id} projectData={projectData}></AllProjectsCardPage>)
            }
        </div>
    );
};

export default All;