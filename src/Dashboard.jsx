import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import './ReportsPage'
import './BusListPage'
import './Dashboard'
import './AddBusPage'
import './RouteListPage'
function Dashboard (){
    return (
       <div className="dashboard-container">
      {/* SIDEBAR NAVIGATION */}
      <div>
            <nav className="nav">
                <Link to="/" className="nav-box">Home</Link>
                <Link to="/ReportsPage" className="nav-box">Report</Link>
                <Link to="/BusListPage" className="nav-box">Bus List</Link>
                <Link to="/AddBusPage" className="nav-box active">Add Bus</Link>
                <Link to="/RouteListPage" className="nav-box active">Route List</Link>
                <a href="#" className="nav-box">Add Route</a>
                <a href="#" className="nav-box">Assign Bus</a>
                <a href="#" className="nav-box logout">Logout</a>
            </nav>
        </div>

      {/* MAIN DASHBOARD CONTENT */}
      <main className="main-content">
        <h1>Fleet Operational Dashboard</h1>

        {/* 3 Summary Cards */}
        <div className="cards-row">
          <div className="card green-card">
            <h3>Completed Trips</h3>
            <p className="card-num">18</p>
            <span>Finished today</span>
          </div>

          <div className="card blue-card">
            <h3>Ongoing Trips</h3>
            <p className="card-num">6</p>
            <span>Currently active</span>
          </div>

          <div className="card yellow-card">
            <h3>In Maintenance</h3>
            <p className="card-num">2</p>
            <span>Under service</span>
          </div>
        </div>

        {/* Quick Fleet Activity Table */}
        <div className="table-box">
          <div className="table-header-row">
            <h2>Recent Fleet Status</h2>
          </div>

          <table className="simple-table">
            <thead>
              <tr>
                <th>Bus ID</th>
                <th>Route / Task</th>
                <th>Driver</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>BUS-101</strong></td>
                <td>Route A (Downtown)</td>
                <td>John Doe</td>
                <td><span className="tag green">Completed</span></td>
              </tr>
              <tr>
                <td><strong>BUS-104</strong></td>
                <td>Route C (Express)</td>
                <td>Sarah Smith</td>
                <td><span className="tag blue">Ongoing</span></td>
              </tr>
              <tr>
                <td><strong>BUS-108</strong></td>
                <td>Route B (West Line)</td>
                <td>Mike Johnson</td>
                <td><span className="tag blue">Ongoing</span></td>
              </tr>
              <tr>
                <td><strong>BUS-102</strong></td>
                <td>Engine Checkup</td>
                <td>Unassigned</td>
                <td><span className="tag yellow">Maintenance</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;