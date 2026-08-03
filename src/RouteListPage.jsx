import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import './ReportsPage.css'
import './BusListPage.css'
import './RouteListPage.css'
import './BusListPage'
import './Dashboard'
import './Footer'
import './ReportsPage'
import './RouteListPage'

const RouteListPage = () => {
  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRouteId, setExpandedRouteId] = useState(null);

  // Mock Route Data
  const [routes] = useState([
    {
      id: 'RT-101',
      name: 'Downtown Express',
      startPoint: 'Central Bus Terminal',
      endPoint: 'Tech Park Zone 4',
      distance: '24.5 km',
      stopsCount: 6,
      stops: [
        'Central Bus Terminal (Start)',
        'City Center Square',
        'Metro Junction',
        'University North Gate',
        'Innovation Hub',
        'Tech Park Zone 4 (End)'
      ],
      status: 'active'
    },
    {
      id: 'RT-102',
      name: 'Suburban Line North',
      startPoint: 'North Station Hub',
      endPoint: 'Green Valley Residency',
      distance: '38.0 km',
      stopsCount: 8,
      stops: [
        'North Station Hub (Start)',
        'Market Yard',
        'Civil Hospital',
        'Ring Road Bypass',
        'East Avenue Mall',
        'Highland Towers',
        'Valley School',
        'Green Valley Residency (End)'
      ],
      status: 'active'
    },
    {
      id: 'RT-103',
      name: 'Airport Shuttle Direct',
      startPoint: 'Grand Central Plaza',
      endPoint: 'International Airport T3',
      distance: '42.2 km',
      stopsCount: 4,
      stops: [
        'Grand Central Plaza (Start)',
        'Hotel Transit Point',
        'Highway Toll Plaza',
        'International Airport T3 (End)'
      ],
      status: 'active'
    },
    {
      id: 'RT-104',
      name: 'Coastal Corridor',
      startPoint: 'Harbor Gate',
      endPoint: 'South Beach Terminal',
      distance: '18.7 km',
      stopsCount: 5,
      stops: [
        'Harbor Gate (Start)',
        'Navy Dock Yard',
        'Lighthouse Point',
        'Sunset Boulevard',
        'South Beach Terminal (End)'
      ],
      status: 'inactive'
    }
  ]);

  // Toggle stop locations dropdown
  const toggleStops = (routeId) => {
    setExpandedRouteId(prev => (prev === routeId ? null : routeId));
  };

  // Search filter logic
  const filteredRoutes = routes.filter(route => {
    const q = searchQuery.toLowerCase();
    return (
      route.id.toLowerCase().includes(q) ||
      route.name.toLowerCase().includes(q) ||
      route.startPoint.toLowerCase().includes(q) ||
      route.endPoint.toLowerCase().includes(q)
    );
  });

  return (
    <div className="reports-layout">
      {/* Sidebar Navigation */}
      <nav className="nav">
        <Link to="/" className="nav-box">Home</Link>
        <Link to="/ReportsPage" className="nav-box">Report</Link>
        <Link to="/BusListPage" className="nav-box">Bus List</Link>
        <Link to="/AddBusPage" className="nav-box">Add Bus</Link>
        <Link to="/RouteListPage" className="nav-box active">Route List</Link>
        <a href="#" className="nav-box">Add Route</a>
        <a href="#" className="nav-box">Assign Bus</a>
        <a href="#" className="nav-box logout">Logout</a>
      </nav>

      {/* Main Page Area */}
      <div className="reports-page-container">
        <div className="reports-header">
          <div>
            <h1>Route Fleet List</h1>
            <p>Manage all operational transit routes, starting/ending terminals, distances, and intermediate stops.</p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div className="report-search">
              <input
                type="text"
                placeholder="Search by ID, Name, Origin, Destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Link to="#" className="submit-btn" style={{ textDecoration: 'none', padding: '10px 16px' }}>
              ➕ Add New Route
            </Link>
          </div>
        </div>

        {/* Routes Table */}
        <div className="table-card">
          <table className="reports-table">
            <thead>
              <tr>
                <th>Route ID</th>
                <th>Route Name</th>
                <th>Starting Point</th>
                <th>Ending Point</th>
                <th>Total Distance</th>
                <th>Stops</th>
                <th>Stop Details</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoutes.length > 0 ? (
                filteredRoutes.map((route) => (
                  <React.Fragment key={route.id}>
                    <tr>
                      <td><strong className="bus-id-tag">{route.id}</strong></td>
                      <td><strong>{route.name}</strong></td>
                      <td>📍 {route.startPoint}</td>
                      <td>🏁 {route.endPoint}</td>
                      <td><span className="distance-badge">{route.distance}</span></td>
                      <td><strong>{route.stopsCount} Stops</strong></td>
                      <td>
                        <button
                          type="button"
                          className="stops-toggle-btn"
                          onClick={() => toggleStops(route.id)}
                        >
                          {expandedRouteId === route.id ? '🔼 Hide Stops' : '🔽 View Stops'}
                        </button>
                      </td>
                      <td>
                        <span className={`status-pill ${route.status === 'active' ? 'ongoing' : 'completed'}`}>
                          {route.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                    </tr>

                    {/* Expandable Dropdown Row for Stop Locations */}
                    {expandedRouteId === route.id && (
                      <tr className="stops-dropdown-row">
                        <td colSpan="8">
                          <div className="stops-container">
                            <h4>🚏 Stop Locations for {route.name} ({route.id}):</h4>
                            <ol className="stops-timeline">
                              {route.stops.map((stop, index) => (
                                <li key={index} className="stop-item">
                                  <span className="stop-number">{index + 1}</span>
                                  <span className="stop-name">{stop}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="no-records">
                    No routes found matching your criteria.
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

export default RouteListPage;