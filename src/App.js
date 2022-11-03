import './App.css';
import "./bootstrap.min.css";
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./component/login";
import AdminDashboard from "./component/AdminDashboard";

function App() {
  return (
    <div>
      <div className="App" />
      <Router>
        <Routes>
        <Route path="/" element={<App />} />
    <Route path="/login" element={ <Login/> }/>
    <Route path="/adminDashboard" element={ <AdminDashboard/> }/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
