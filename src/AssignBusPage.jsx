import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const AssignBusPage = () => {
  const [selectedBus, setSelectedBus] = useState("");
  const [selectedRoute, setSelectedRoute] = useState("");
  const [message, setMessage] = useState("");

  const buses = [
    {
      id: "BUS-101",
      number: "DL-01-AB-4521",
      model: "Volvo Express",
    },
    {
      id: "BUS-102",
      number: "DL-02-CD-7834",
      model: "Tata Starbus",
    },
    {
      id: "BUS-103",
      number: "UP-14-EF-9021",
      model: "Ashok Leyland",
    },
  ];

  const routes = [
    {
      id: "RT-101",
      name: "Downtown Express",
    },
    {
      id: "RT-102",
      name: "Suburban Line North",
    },
    {
      id: "RT-103",
      name: "Airport Shuttle Direct",
    },
  ];

  const handleAssign = () => {
    if (!selectedBus || !selectedRoute) {
      setMessage("Please select both Bus and Route");
      return;
    }

    setMessage(
      `Bus ${selectedBus} successfully assigned to Route ${selectedRoute}`
    );
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Assign Bus To Route
        </h1>
        <p className="text-slate-500 mt-2 mb-8">
          Allocate available buses to operational routes.
        </p>

        <div className="bg-white shadow rounded-xl p-8 max-w-xl">
          {/* Select Bus */}
          <label className="font-semibold text-slate-700">Select Bus</label>
          <select
            value={selectedBus}
            onChange={(e) => setSelectedBus(e.target.value)}
            className="border rounded-lg w-full p-3 mt-2 mb-6"
          >
            <option value="">Choose Bus ID / Number</option>
            {buses.map((bus) => (
              <option key={bus.id} value={bus.id}>
                {bus.id} - {bus.number} ({bus.model})
              </option>
            ))}
          </select>

          {/* Select Route */}
          <label className="font-semibold text-slate-700">
            Select Route
          </label>
          <select
            value={selectedRoute}
            onChange={(e) => setSelectedRoute(e.target.value)}
            className="border rounded-lg w-full p-3 mt-2 mb-6"
          >
            <option value="">Choose Route ID</option>
            {routes.map((route) => (
              <option key={route.id} value={route.id}>
                {route.id} - {route.name}
              </option>
            ))}
          </select>

          <button
            onClick={handleAssign}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full"
          >
            🚌 Assign Bus
          </button>

          {message && (
            <div className="mt-5 bg-green-100 text-green-700 p-3 rounded-lg">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignBusPage;