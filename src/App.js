import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardHome from './Components/Dashboard/DashboardHome/DashboardHome';
import Projects from './Components/Dashboard/Projects/Projects';
import Client from './Components/Dashboard/Client/Client';
import Employee from './Components/Dashboard/Employee/Employee';
import Task from './Components/Dashboard/Task/Task';
import Tickets from './Components/Dashboard/Tickets/Tickets';
import Attendance from './Components/Dashboard/Attendance/Attendance';
import Department from './Components/Dashboard/Department/Department';
import OfficialCalender from './Components/Dashboard/OfficialCalender/OfficialCalender';
import Chat from './Components/Dashboard/Chat/Chat';
import Holiday from './Components/Dashboard/Holiday/Holiday';

function App() {
  return (
    <div className="App">
      <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route
              path="/"
              element={
                  <Dashboard />
              }
            >
              <Route index element={<DashboardHome />}></Route>
              <Route path="projects" element={<Projects />}></Route>
              <Route path="client" element={<Client />}></Route>
              <Route path="employee" element={<Employee />}></Route>
              <Route path="task" element={<Task />}></Route>
              <Route path="tickets" element={<Tickets />}></Route>
              <Route path="attendance" element={<Attendance />}></Route>
              <Route path="department" element={<Department />}></Route>
              <Route path="official-calender" element={<OfficialCalender />}></Route>
              <Route path="chat" element={<Chat />}></Route>
              <Route path="holiday" element={<Holiday />}></Route>
            </Route>
          </Routes>
    </div>
  );
}

export default App;
