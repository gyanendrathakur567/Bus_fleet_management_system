import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const BusListPage = () => {

  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [acFilter, setAcFilter] = useState("all");


  const [buses] = useState([
    {
      id: "BUS-101",
      name: "City Express 01",
      brand: "Volvo",
      model: "9700 Grand",
      type: "Semi-Sleeper",
      isAc: true,
      capacity: 45,
      status: "active"
    },
    {
      id: "BUS-102",
      name: "City Express 02",
      brand: "Tata Motors",
      model: "Starbus",
      type: "Seater",
      isAc: false,
      capacity: 28,
      status: "maintenance"
    },
    {
      id: "BUS-104",
      name: "City Express 04",
      brand: "Scania",
      model: "Metrolink",
      type: "Semi-Sleeper",
      isAc: true,
      capacity: 52,
      status: "active"
    },
    {
      id: "BUS-105",
      name: "Urban Shuttle 05",
      brand: "Ashok Leyland",
      model: "Viking",
      type: "Seater",
      isAc: false,
      capacity: 40,
      status: "active"
    },
    {
      id: "BUS-107",
      name: "Urban Shuttle 07",
      brand: "Volvo",
      model: "B11R",
      type: "Semi-Sleeper",
      isAc: true,
      capacity: 36,
      status: "maintenance"
    },
    {
      id: "BUS-108",
      name: "Campus Liner 08",
      brand: "Eicher",
      model: "Skyline Pro",
      type: "Mini Bus",
      isAc: false,
      capacity: 32,
      status: "active"
    }
  ]);

    const allCount = buses.length;
  
      const activeCount = buses.filter(
        bus => bus.status === "active"
      ).length;

      const maintenanceCount = buses.filter(
        bus => bus.status === "maintenance"
      ).length;

      const filteredBuses = buses.filter(bus => {

        if(activeTab === "active" &&
          bus.status !== "active")
        return false;
        
        if(activeTab === "maintenance" &&
          bus.status !== "maintenance")
        return false;

        if(acFilter === "ac" && !bus.isAc)
        return false;

        if(acFilter === "non-ac" && bus.isAc)
        return false;

        const query = searchQuery.toLowerCase();
        return (

          bus.id.toLowerCase().includes(query) ||
          bus.name.toLowerCase().includes(query) ||
          bus.brand.toLowerCase().includes(query) ||
          bus.model.toLowerCase().includes(query) ||
          bus.type.toLowerCase().includes(query)
        );
      });
      
      return (
        <div className="flex min-h-screen bg-slate-100">
          {/* Sidebar */}
          <Sidebar />
          {/* Main Section */}
          <div className="flex-1 p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-800">
                  Bus Fleet Inventory
                </h1>
                <p className="text-slate-500 mt-2">
                  Complete directory of all fleet vehicles,
                  specifications, AC types and status.
                </p>
              </div>
                <Link to="/AddBusPage" className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition">➕ Add New Bus</Link>
              </div>
              {/* Search Section */}
              <div className="flex gap-4 mb-6">
                <input type="text" placeholder="Search by ID, Name, Brand, Type..." value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)} className="border rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <select value={acFilter} 
                  onChange={(e)=>setAcFilter(e.target.value)} className="border rounded-lg px-4 py-2">
                    <option value="all">All Climate Types</option>
                    <option value="ac">AC Buses Only</option>
                    <option value="non-ac">Non AC Buses Only</option>
                </select>
              </div>
              {/* Tabs */}
              <div className="flex gap-4 mb-8">
                <button onClick={()=>setActiveTab("all")} className="bg-white shadow px-6 py-3 rounded-lg hover:bg-slate-200">🚍 All Fleet ({allCount})</button>
                <button onClick={()=>setActiveTab("active")} className="bg-green-100 text-green-700 px-6 py-3 rounded-lg">✓ Active ({activeCount})</button>
                <button onClick={()=>setActiveTab("maintenance")} className="bg-yellow-100 text-yellow-700 px-6 py-3 rounded-lg">🔧 Maintenance ({maintenanceCount})</button>
              </div>
              {/* Table */}
              <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-800 text-white">
                    <tr>
                      <th className="p-4 text-left">Bus Number</th>
                      <th className="p-4 text-left">Bus Name</th>
                      <th className="p-4 text-left">Brand & Model</th>
                      <th className="p-4 text-left">Bus Type</th>
                      <th className="p-4 text-left">Climate</th>
                      <th className="p-4 text-left">Capacity</th>
                      <th className="p-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>{filteredBuses.length > 0 ? filteredBuses.map(bus=>( 
                    <tr key={bus.id}className="border-b hover:bg-slate-50">
                      <td className="p-4 font-bold">{bus.id}</td>
                      <td className="p-4">{bus.name}</td>
                      <td className="p-4">{bus.brand}<br/><span className="text-sm text-gray-500">{bus.model}</span></td>
                      <td className="p-4"><span className="bg-blue-100 px-3 py-1 rounded-full">{bus.type}</span></td>
                      <td className="p-4">{bus.isAc ? <span className="bg-cyan-100 px-3 py-1 rounded-full">❄️ AC</span>:
                        <span className="bg-gray-200 px-3 py-1 rounded-full">🌀 Non AC</span>}</td>
                      <td className="p-4">{bus.capacity} Seats</td>
                      <td className="p-4">{bus.status === "active"?<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Active</span>:
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full ">Maintenance</span>}</td>
                    </tr>)):
                    <tr>
                      <td colSpan="7" className="text-center p-6">No buses found matching your criteria.</td>
                    </tr>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>);
          };


export default BusListPage;