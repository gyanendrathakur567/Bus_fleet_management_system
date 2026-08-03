import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import './ReportsPage.css'
import './BusListPage'
import './AddBusPage'
import './RouteListPage'

const BusListPage = () => {
  // Filter States
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [acFilter, setAcFilter] = useState('all'); // 'all', 'ac', 'non-ac'

  // Fleet Database with Bus Type added (Sleeper removed)
  const [buses] = useState([
    {
      id: 'BUS-101',
      name: 'City Express 01',
      brand: 'Volvo',
      model: '9700 Grand',
      type: 'Semi-Sleeper',
      isAc: true,
      capacity: 45,
      status: 'active'
    },
    {
      id: 'BUS-102',
      name: 'City Express 02',
      brand: 'Tata Motors',
      model: 'Starbus',
      type: 'Seater',
      isAc: false,
      capacity: 28,
      status: 'maintenance'
    },
    {
      id: 'BUS-104',
      name: 'City Express 04',
      brand: 'Scania',
      model: 'Metrolink',
      type: 'Semi-Sleeper',
      isAc: true,
      capacity: 52,
      status: 'active'
    },
    {
      id: 'BUS-105',
      name: 'Urban Shuttle 05',
      brand: 'Ashok Leyland',
      model: 'Viking',
      type: 'Seater',
      isAc: false,
      capacity: 40,
      status: 'active'
    },
    {
      id: 'BUS-107',
      name: 'Urban Shuttle 07',
      brand: 'Volvo',
      model: 'B11R',
      type: 'Semi-Sleeper',
      isAc: true,
      capacity: 36,
      status: 'maintenance'
    },
    {
      id: 'BUS-108',
      name: 'Campus Liner 08',
      brand: 'Eicher',
      model: 'Skyline Pro',
      type: 'Mini Bus',
      isAc: false,
      capacity: 32,
      status: 'active'
    },
    {
      id: 'BUS-112',
      name: 'Suburban Transit 12',
      brand: 'BharatBenz',
      model: '1623 Shuttle',
      type: 'Semi-Sleeper',
      isAc: true,
      capacity: 48,
      status: 'active'
    }
  ]);

  // Dynamic fleet counts
  const allCount = buses.length;
  const activeCount = buses.filter(b => b.status === 'active').length;
  const maintenanceCount = buses.filter(b => b.status === 'maintenance').length;

  // Filter Logic
  const filteredBuses = buses.filter(bus => {
    // Tab Filter
    if (activeTab === 'active' && bus.status !== 'active') return false;
    if (activeTab === 'maintenance' && bus.status !== 'maintenance') return false;

    // AC / Non-AC Dropdown Filter
    if (acFilter === 'ac' && !bus.isAc) return false;
    if (acFilter === 'non-ac' && bus.isAc) return false;

    // Search Query Filter
    const query = searchQuery.toLowerCase();
    return (
      bus.id.toLowerCase().includes(query) ||
      bus.name.toLowerCase().includes(query) ||
      bus.brand.toLowerCase().includes(query) ||
      bus.type.toLowerCase().includes(query) ||
      bus.model.toLowerCase().includes(query)
    );
  });

  return (
    <div className="reports-layout">
      {/* Sidebar Navigation */}
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

      {/* Main Content Container */}
      <div className="reports-page-container">
        <div className="reports-header">
          <div>
            <h1>Bus Fleet Inventory</h1>
            <p>Complete directory of all fleet vehicles, specifications, AC types, and status.</p>
          </div>

          {/* Search & AC Filter */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div className="report-search">
              <input 
                type="text" 
                placeholder="Search by ID, Name, Brand, Type..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <select 
              value={acFilter} 
              onChange={(e) => setAcFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Climate Types</option>
              <option value="ac">AC Buses Only</option>
              <option value="non-ac">Non-AC Buses Only</option>
            </select>
            {/* ADD NEW BUS BUTTON */}
            <Link 
              to="/AddBusPage" 
              className="submit-btn" 
              style={{ textDecoration: 'none', padding: '10px 16px', display: 'inline-flex', alignItems: 'center', gap: '6px', whitespace: 'nowrap' }}
            >
              ➕ Add New Bus
            </Link>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="reports-tabs">
          <button 
            className={`tab-btn ongoing ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <span className="tab-icon">🚍</span>
            <span>All Fleet</span>
            <span className="tab-count">{allCount}</span>
          </button>

          <button 
            className={`tab-btn completed ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            <span className="tab-icon">✓</span>
            <span>Active Fleet</span>
            <span className="tab-count">{activeCount}</span>
          </button>

          <button 
            className={`tab-btn maintenance ${activeTab === 'maintenance' ? 'active' : ''}`}
            onClick={() => setActiveTab('maintenance')}
          >
            <span className="tab-icon">🔧</span>
            <span>In Maintenance</span>
            <span className="tab-count">{maintenanceCount}</span>
          </button>
        </div>


        {/* Fleet Table */}
        <div className="table-card">
          <table className="reports-table">
            <thead>
              <tr>
                <th>Bus Number</th>
                <th>Bus Name</th>
                <th>Brand & Model</th>
                <th>Bus Type</th>
                <th>Climate Option</th>
                <th>Seating Capacity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredBuses.length > 0 ? (
                filteredBuses.map((bus) => (
                  <tr key={bus.id}>
                    <td><strong className="bus-id-tag">{bus.id}</strong></td>
                    <td><strong>{bus.name}</strong></td>
                    <td>{bus.brand} <small style={{ color: '#777' }}>({bus.model})</small></td>
                    <td><span className="type-badge">{bus.type}</span></td>
                    <td>
                      <span className={`status-pill ${bus.isAc ? 'ongoing' : 'completed'}`}>
                        {bus.isAc ? '❄️ AC' : '🌀 Non-AC'}
                      </span>
                    </td>
                    <td><span className="distance-badge">{bus.capacity} Seats</span></td>
                    <td>
                      <span className={`status-pill ${bus.status === 'active' ? 'ongoing' : 'maintenance'}`}>
                        {bus.status === 'active' ? 'Active' : 'Maintenance'}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="no-records">
                    No buses found matching your filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusListPage;