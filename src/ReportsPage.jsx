import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [searchQuery, setSearchQuery] = useState("");

  const allBuses = [
    {
      id: "BUS-101",
      name: "City Express 01",
      driver: "John Doe",
      route: "Route A (Downtown)",
      distance: "42 km",
      status: "completed",
      fuel: "12L",
      time: "09:30 AM",
    },
    {
      id: "BUS-105",
      name: "Urban Shuttle 05",
      driver: "Alex Brown",
      route: "Route D (Airport Direct)",
      distance: "68 km",
      status: "completed",
      fuel: "18L",
      time: "08:15 AM",
    },
    {
      id: "BUS-109",
      name: "Metro Cruiser 09",
      driver: "David Miller",
      route: "Route E (South Hub)",
      distance: "35 km",
      status: "completed",
      fuel: "10L",
      time: "10:00 AM",
    },
    {
      id: "BUS-104",
      name: "City Express 04",
      driver: "Sarah Smith",
      route: "Route C (East Express)",
      distance: "24 km",
      status: "ongoing",
      fuel: "8L",
      time: "En Route (Stop 4)",
    },
    {
      id: "BUS-108",
      name: "Campus Liner 08",
      driver: "Mike Johnson",
      route: "Route B (West Campus)",
      distance: "15 km",
      status: "ongoing",
      fuel: "5L",
      time: "En Route (Stop 2)",
    },
    {
      id: "BUS-112",
      name: "Suburban Transit 12",
      driver: "Emma Davis",
      route: "Route F (North Line)",
      distance: "30 km",
      status: "ongoing",
      fuel: "9L",
      time: "En Route (Stop 6)",
    },
    {
      id: "BUS-102",
      name: "City Express 02",
      driver: "Unassigned",
      route: "N/A (Depot)",
      distance: "0 km",
      status: "maintenance",
      fuel: "N/A",
      time: "Engine & Brake Check",
    },
    {
      id: "BUS-107",
      name: "Urban Shuttle 07",
      driver: "Unassigned",
      route: "N/A (Depot)",
      distance: "0 km",
      status: "maintenance",
      fuel: "N/A",
      time: "Oil Replacement",
    },
  ];

  const ongoingList = allBuses.filter((bus) => bus.status === "ongoing");
  const completedList = allBuses.filter((bus) => bus.status === "completed");
  const maintenanceList = allBuses.filter((bus) => bus.status === "maintenance");

  const getCurrentList = () => {
    if (activeTab === "completed") return completedList;
    if (activeTab === "maintenance") return maintenanceList;
    return ongoingList;
  };

  const filteredBuses = getCurrentList().filter(
    (bus) =>
      bus.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bus.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bus.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bus.route.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Fleet Operational Reports
            </h1>
            <p className="text-slate-500 mt-2">
              Comprehensive logs and real-time records of all bus activity.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search by Bus ID, Name, Driver, Route..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded-lg px-4 py-3 w-80 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-5 mb-8">
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`p-5 rounded-xl shadow bg-white border-l-4 ${
              activeTab === "ongoing" ? "border-blue-600" : "border-slate-300"
            }`}
          >
            <div className="text-2xl">🚌</div>
            <h3 className="font-semibold">Ongoing Trips</h3>
            <p className="text-3xl font-bold">{ongoingList.length}</p>
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`p-5 rounded-xl shadow bg-white border-l-4 ${
              activeTab === "completed" ? "border-green-600" : "border-slate-300"
            }`}
          >
            <div className="text-2xl">✓</div>
            <h3 className="font-semibold">Completed Trips</h3>
            <p className="text-3xl font-bold">{completedList.length}</p>
          </button>

          <button
            onClick={() => setActiveTab("maintenance")}
            className={`p-5 rounded-xl shadow bg-white border-l-4 ${
              activeTab === "maintenance" ? "border-yellow-500" : "border-slate-300"
            }`}
          >
            <div className="text-2xl">🔧</div>
            <h3 className="font-semibold">Maintenance</h3>
            <p className="text-3xl font-bold">{maintenanceList.length}</p>
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-6 py-4 text-left">Bus Number</th>
                <th className="px-6 py-4 text-left">Bus Name</th>
                <th className="px-6 py-4 text-left">Assigned Driver</th>
                <th className="px-6 py-4 text-left">Assigned Route</th>
                <th className="px-6 py-4 text-left">Distance</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Details</th>
              </tr>
            </thead>

            <tbody>
              {filteredBuses.length > 0 ? (
                filteredBuses.map((bus) => (
                  <tr key={bus.id} className="border-b hover:bg-slate-50">
                    <td className="px-6 py-4 font-bold">{bus.id}</td>
                    <td className="px-6 py-4">{bus.name}</td>
                    <td className="px-6 py-4">{bus.driver}</td>
                    <td className="px-6 py-4">{bus.route}</td>
                    <td className="px-6 py-4">
                      <span className="bg-slate-200 px-3 py-1 rounded-full">
                        {bus.distance}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          bus.status === "ongoing"
                            ? "bg-blue-100 text-blue-700"
                            : bus.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {bus.status === "ongoing"
                          ? "Ongoing"
                          : bus.status === "completed"
                          ? "Completed"
                          : "Maintenance"}
                      </span>
                    </td>
                    <td className="px-6 py-4">{bus.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-8 text-slate-500">
                    No records found
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

export default ReportsPage;
