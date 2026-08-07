import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const AddRoutePage = () => {
  const sampleRoutes = [
    {
      id: "RT-101",
      name: "Delhi - Noida",
      startPoint: "Delhi",
      endPoint: "Noida",
      stops: ["Akshardham", "Mayur Vihar", "Sector 15", "Botanical Garden"],
      distance: "25",
      status: "Active",
    },
    {
      id: "RT-102",
      name: "Delhi - Agra",
      startPoint: "Delhi",
      endPoint: "Agra",
      stops: ["Faridabad", "Palwal", "Mathura"],
      distance: "230",
      status: "Active",
    },
    {
      id: "RT-103",
      name: "Noida - Jaipur",
      startPoint: "Noida",
      endPoint: "Jaipur",
      stops: ["Greater Noida", "Alwar"],
      distance: "280",
      status: "Inactive",
    },
  ];

  const [route, setRoute] = useState({
    name: "",
    startPoint: "",
    endPoint: "",
    distance: "",
    status: "Active",
    stops: [],
  });

  const [stopName, setStopName] = useState("");

  const addStop = () => {
    if (!stopName.trim()) return;

    setRoute({
      ...route,
      stops: [...route.stops, stopName],
    });

    setStopName("");
  };

  const removeStop = (index) => {
    setRoute({
      ...route,
      stops: route.stops.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    setRoute({
      ...route,
      [e.target.name]: e.target.value,
    });
  };

  const addRoute = (e) => {
    e.preventDefault();

    if (
      !route.name ||
      !route.startPoint ||
      !route.endPoint ||
      !route.distance ||
      route.stops.length === 0
    ) {
      alert("Please fill all fields.");
      return;
    }

    alert("Route added successfully.");

    setRoute({
      name: "",
      startPoint: "",
      endPoint: "",
      distance: "",
      status: "Active",
      stops: [],
    });

    setStopName("");
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-800">Add Route</h1>

        <p className="text-slate-500 mt-2 mb-8">Create a new bus route.</p>

        {/* Form */}
        <div className="bg-white shadow rounded-xl p-6 border-t-4 border-slate-800">
          <form onSubmit={addRoute} className="grid grid-cols-2 gap-5">
            <input
              name="name"
              placeholder="Route Name"
              value={route.name}
              onChange={handleChange}
              className="border border-slate-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-slate-700 outline-none"
            />

            <input
              name="startPoint"
              placeholder="Starting Point"
              value={route.startPoint}
              onChange={handleChange}
              className="border border-slate-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-slate-700 outline-none"
            />

            <input
              name="endPoint"
              placeholder="Destination"
              value={route.endPoint}
              onChange={handleChange}
              className="border border-slate-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-slate-700 outline-none"
            />

            <input
              name="distance"
              placeholder="Distance (KM)"
              value={route.distance}
              onChange={handleChange}
              className="border border-slate-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-slate-700 outline-none"
            />

            {/* Route Stops */}
            <div className="col-span-2">
              <label className="block font-semibold mb-2">Route Stops</label>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter Stop Name"
                  value={stopName}
                  onChange={(e) => setStopName(e.target.value)}
                  className="flex-1 border border-slate-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-slate-700 outline-none"
                />

                <button
                  type="button"
                  onClick={addStop}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-6 rounded-lg"
                >
                  Add Stop
                </button>
              </div>

              {route.stops.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-3">Added Stops</h3>

                  <div className="flex flex-wrap gap-2">
                    {route.stops.map((stop, index) => (
                      <div
                        key={index}
                        className="bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 flex items-center gap-3"
                      >
                        <span>{stop}</span>

                        <button
                          type="button"
                          onClick={() => removeStop(index)}
                          className="text-red-600 font-bold"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Status */}
            <select
              name="status"
              value={route.status}
              onChange={handleChange}
              className="border border-slate-300 px-4 py-3 rounded-lg"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button
              type="submit"
              className="col-span-2 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg transition"
            >
              Add Route
            </button>
          </form>
        </div>

        {/* Sample Route List */}
        <div className="bg-white rounded-xl shadow mt-10">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-slate-800">Sample Routes</h2>
            <p className="text-slate-500 mt-1">Preview of available routes.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-6 py-4">Route ID</th>
                  <th className="text-left px-6 py-4">Route Name</th>
                  <th className="text-left px-6 py-4">Start</th>
                  <th className="text-left px-6 py-4">Destination</th>
                  <th className="text-left px-6 py-4">Stops</th>
                  <th className="text-left px-6 py-4">Distance</th>
                  <th className="text-left px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {sampleRoutes.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-slate-50">
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4 font-medium">{item.name}</td>
                    <td className="px-6 py-4">{item.startPoint}</td>
                    <td className="px-6 py-4">{item.endPoint}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {item.stops.map((stop, index) => (
                          <span
                            key={index}
                            className="bg-slate-100 px-3 py-1 rounded-lg text-sm"
                          >
                            {stop}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">{item.distance} KM</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoutePage;