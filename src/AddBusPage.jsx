import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css'
import './ReportsPage.css'
import './AddBusPage.css'
import './BusListPage'
import './Dashboard'
import './Footer'
import './ReportsPage'
import './RouteListPage'

const AddBusPage = () => {
  const navigate = useNavigate();

  // Updated Form State with dedicated 'isAc' select value
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    brand: '',
    model: '',
    type: 'Seater',       // Default Bus Type (Sleeper removed)
    isAc: 'ac',           // 'ac' or 'non-ac'
    capacity: 40,
    status: 'active'
  });

  const [message, setMessage] = useState({ type: '', text: '' });

  const popularBrands = ['Volvo', 'Tata Motors', 'Scania', 'Ashok Leyland', 'Eicher', 'BharatBenz'];

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.id.trim() || !formData.name.trim() || !formData.brand.trim()) {
      setMessage({ type: 'error', text: 'Please fill in all required fields marked with *' });
      return;
    }

    const newBus = {
      ...formData,
      id: formData.id.toUpperCase().trim(),
      isAc: formData.isAc === 'ac', // Convert string select value back to boolean
      capacity: Number(formData.capacity)
    };

    console.log('Submitting Bus Data:', newBus);

    setMessage({ type: 'success', text: `Bus ${newBus.id} (${newBus.name}) added successfully!` });

    setTimeout(() => {
      navigate('/BusList');
    }, 1500);
  };

  return (
    <div className="reports-layout">
      {/* Navigation Sidebar */}
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

      {/* Main Page Area */}
      <div className="reports-page-container">
        <div className="reports-header">
          <div>
            <h1>Add New Fleet Vehicle</h1>
            <p>Register a new bus into the fleet database with specifications, capacity, and operational status.</p>
          </div>
          <Link to="/BusListPage" className="back-btn">
            ← Back to Bus List
          </Link>
        </div>

        {/* Feedback Alert */}
        {message.text && (
          <div className={`alert-banner ${message.type}`}>
            {message.type === 'success' ? '✅ ' : '⚠️ '}
            {message.text}
          </div>
        )}

        {/* Form Card */}
        <div className="form-card">
          <form onSubmit={handleSubmit} className="add-bus-form">
            <div className="form-grid">
              
              {/* Bus ID / Number */}
              <div className="form-group">
                <label htmlFor="id">Bus ID / Number <span className="required">*</span></label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  placeholder="e.g., BUS-115"
                  value={formData.id}
                  onChange={handleChange}
                  required
                />
                <small className="help-text">Unique code identifier for the vehicle.</small>
              </div>

              {/* Bus Name */}
              <div className="form-group">
                <label htmlFor="name">Bus Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g., City Express 15"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Brand Selection */}
              <div className="form-group">
                <label htmlFor="brand">Brand Manufacturer <span className="required">*</span></label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  list="brand-suggestions"
                  placeholder="e.g., Volvo"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                />
                <datalist id="brand-suggestions">
                  {popularBrands.map(b => <option key={b} value={b} />)}
                </datalist>
              </div>

              {/* Model */}
              <div className="form-group">
                <label htmlFor="model">Model Name / Series</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  placeholder="e.g., 9700 Grand"
                  value={formData.model}
                  onChange={handleChange}
                />
              </div>

              {/* Bus Type Select (Sleeper Removed) */}
              <div className="form-group">
                <label htmlFor="type">Bus Type <span className="required">*</span></label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="filter-select"
                >
                  <option value="Seater">🪑 Seater / City Bus</option>
                  <option value="Semi-Sleeper">💺 Semi-Sleeper Coach</option>
                  <option value="Mini Bus">🚐 Mini Bus / Shuttle</option>
                  <option value="Double Decker">🚌 Double Decker</option>
                </select>
              </div>

              {/* Climate Option Select (AC / Non-AC Dropdown) */}
              <div className="form-group">
                <label htmlFor="isAc">Climate Option <span className="required">*</span></label>
                <select
                  id="isAc"
                  name="isAc"
                  value={formData.isAc}
                  onChange={handleChange}
                  className="filter-select"
                >
                  <option value="ac">❄️ Air Conditioned (AC)</option>
                  <option value="non-ac">🌀 Standard (Non-AC)</option>
                </select>
              </div>

              {/* Seating Capacity */}
              <div className="form-group">
                <label htmlFor="capacity">Capacity (Seats)</label>
                <input
                  type="number"
                  id="capacity"
                  name="capacity"
                  min="10"
                  max="100"
                  value={formData.capacity}
                  onChange={handleChange}
                />
                <small className="help-text">Total passenger seat count.</small>
              </div>

              {/* Status Select */}
              <div className="form-group">
                <label htmlFor="status">Initial Fleet Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="filter-select"
                >
                  <option value="active">Active (Ready for Service)</option>
                  <option value="maintenance">Maintenance (In Service Bay)</option>
                </select>
              </div>

            </div>

            {/* Submit & Action Buttons */}
            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => navigate('/BusList')}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                ➕ Save & Register Bus
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBusPage;