import { useState } from "react";
import { Link } from 'react-router-dom';
import './Dashboard.css'
import './Dashboard'
import './ReportsPage'
import './ReportsPage.css'


const ReportsPage = () => {
  // Tab State: 'ongoing', 'completed', or 'maintenance'
  const [activeTab, setActiveTab] = useState('ongoing');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample Full Bus Database Records
  const allBuses = [
    { id: 'BUS-101', name: 'City Express 01', driver: 'John Doe', route: 'Route A (Downtown)', distance: '42 km', status: 'completed', fuel: '12L', time: '09:30 AM' },
    { id: 'BUS-105', name: 'Urban Shuttle 05', driver: 'Alex Brown', route: 'Route D (Airport Direct)', distance: '68 km', status: 'completed', fuel: '18L', time: '08:15 AM' },
    { id: 'BUS-109', name: 'Metro Cruiser 09', driver: 'David Miller', route: 'Route E (South Hub)', distance: '35 km', status: 'completed', fuel: '10L', time: '10:00 AM' },
    
    { id: 'BUS-104', name: 'City Express 04', driver: 'Sarah Smith', route: 'Route C (East Express)', distance: '24 km', status: 'ongoing', fuel: '8L', time: 'En Route (Stop 4)' },
    { id: 'BUS-108', name: 'Campus Liner 08', driver: 'Mike Johnson', route: 'Route B (West Campus)', distance: '15 km', status: 'ongoing', fuel: '5L', time: 'En Route (Stop 2)' },
    { id: 'BUS-112', name: 'Suburban Transit 12', driver: 'Emma Davis', route: 'Route F (North Line)', distance: '30 km', status: 'ongoing', fuel: '9L', time: 'En Route (Stop 6)' },

    { id: 'BUS-102', name: 'City Express 02', driver: 'Unassigned', route: 'N/A (Depot)', distance: '0 km', status: 'maintenance', fuel: 'N/A', time: 'Engine & Brake Check' },
    { id: 'BUS-107', name: 'Urban Shuttle 07', driver: 'Unassigned', route: 'N/A (Depot)', distance: '0 km', status: 'maintenance', fuel: 'N/A', time: 'Oil Replacement' }
  ];

  // Calculate live counts for each list
  const ongoingList = allBuses.filter(b => b.status === 'ongoing');
  const completedList = allBuses.filter(b => b.status === 'completed');
  const maintenanceList = allBuses.filter(b => b.status === 'maintenance');

  // Determine current active list
  const getCurrentList = () => {
    switch (activeTab) {
      case 'completed': return completedList;
      case 'maintenance': return maintenanceList;
      case 'ongoing': default: return ongoingList;
    }
  };

  // Filter list by search input
  const filteredBuses = getCurrentList().filter(bus => 
    bus.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bus.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bus.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bus.route.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
  <>
        <div className="reports-layout">
            <nav className="nav">
                <Link to="/" className="nav-box">Home</Link>
                <Link to="/ReportsPage" className="nav-box">Report</Link>
                <a href="#" className="nav-box">Bus List</a>
                <a href="#" className="nav-box">Add Bus</a>
                <a href="#" className="nav-box">Route List</a>
                <a href="#" className="nav-box">Add Route</a>
                <a href="#" className="nav-box">Assign Bus</a>
                <a href="#" className="nav-box logout">Logout</a>
            </nav>
        
    <div className="reports-page-container">
      <div className="reports-header">
        <div>
          <h1>Fleet Operational Reports</h1>
          <p>Comprehensive logs and real-time records of all bus activity across the fleet.</p>
        </div>

        {/* Search Bar */}
        <div className="report-search">
          <input 
            type="text" 
            placeholder="Search by Bus ID, Name, Driver, or Route..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* THREE LIST TABS WITH LIVE COUNTERS */}
      <div className="reports-tabs">
        <button 
          className={`tab-btn ongoing ${activeTab === 'ongoing' ? 'active' : ''}`}
          onClick={() => setActiveTab('ongoing')}
        >
          <span className="tab-icon">🚌</span>
          <span>Ongoing Trips</span>
          <span className="tab-count">{ongoingList.length}</span>
        </button>

        <button 
          className={`tab-btn completed ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          <span className="tab-icon">✓</span>
          <span>Completed Trips</span>
          <span className="tab-count">{completedList.length}</span>
        </button>

        <button 
          className={`tab-btn maintenance ${activeTab === 'maintenance' ? 'active' : ''}`}
          onClick={() => setActiveTab('maintenance')}
        >
          <span className="tab-icon">🔧</span>
          <span>In Maintenance</span>
          <span className="tab-count">{maintenanceList.length}</span>
        </button>
      </div>

      {/* DETAILED BUS RECORDS TABLE */}
      <div className="table-card">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Bus Number</th>
              <th>Bus Name</th>
              <th>Assigned Driver</th>
              <th>Assigned Route</th>
              <th>Distance Covered</th>
              <th>Status</th>
              <th>Trip / Service Detail</th>
            </tr>
          </thead>
          <tbody>
            {filteredBuses.length > 0 ? (
              filteredBuses.map((bus) => (
                <tr key={bus.id}>
                  <td><strong className="bus-id-tag">{bus.id}</strong></td>
                  <td>{bus.name}</td>
                  <td>{bus.driver}</td>
                  <td>{bus.route}</td>
                  <td><span className="distance-badge">{bus.distance}</span></td>
                  <td>
                    <span className={`status-pill ${bus.status}`}>
                      {bus.status === 'ongoing' ? 'Ongoing' : bus.status === 'completed' ? 'Completed' : 'Maintenance'}
                    </span>
                  </td>
                  <td>{bus.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-records">
                  No records found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </>
  );
};

export default ReportsPage;