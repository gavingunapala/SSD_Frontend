import './App.css';
import "./bootstrap.min.css";
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./component/login";
import AdminDashboard from "./component/AdminDashboard";
import WorkerDashboard from "./component/WorkerDashboard";
import ManagerDashboard from "./component/ManagerDashboard";
import FilesUploadComponent from "./component/FileUploadComponent";

function App() {
  return (
    <div>
      <div className="App" />
      <Router>
        <Routes>
        <Route path="/" element={<App />} />
    <Route path="/login" element={ <Login/> }/>
    <Route path="/adminDashboard" element={ <AdminDashboard/> }/>
    <Route path="/workerDashboard" element={ <WorkerDashboard/> }/>
    <Route path="/managerDashboard" element={ <ManagerDashboard/> }/>
    <Route path="/filesUploadComponent" element={ <FilesUploadComponent/> }/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
