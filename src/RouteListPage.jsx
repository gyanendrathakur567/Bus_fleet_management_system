import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const RouteListPage = () => {

  const [search, setSearch] = useState("");
  const [expandedRoute, setExpandedRoute] = useState(null);

  const [routes, setRoutes] = useState([
    {
      id: "RT-101",
      name: "Delhi → Noida",
      startPoint: "Delhi",
      endPoint: "Noida",
      stops: [
        "Akshardham",
        "Mayur Vihar",
        "Sector 15",
        "Botanical Garden"
      ],
      distance: 28,
      status: "Active",
    },
    {
      id: "RT-102",
      name: "Delhi → Agra",
      startPoint: "Delhi",
      endPoint: "Agra",
      stops: [
        "Faridabad",
        "Palwal",
        "Mathura"
      ],
      distance: 233,
      status: "Active",
    },
    {
      id: "RT-103",
      name: "Noida → Gurgaon",
      startPoint: "Noida",
      endPoint: "Gurgaon",
      stops: [
        "Sector 62",
        "Mayur Vihar",
        "AIIMS",
        "IFFCO Chowk"
      ],
      distance: 42,
      status: "Inactive",
    },
    {
      id: "RT-104",
      name: "Jaipur → Delhi",
      startPoint: "Jaipur",
      endPoint: "Delhi",
      stops: [
        "Kotputli",
        "Behror",
        "Neemrana",
        "Gurgaon"
      ],
      distance: 281,
      status: "Active",
    },
    {
      id: "RT-105",
      name: "Lucknow → Kanpur",
      startPoint: "Lucknow",
      endPoint: "Kanpur",
      stops: [
        "Amausi",
        "Unnao"
      ],
      distance: 90,
      status: "Inactive",
    },
  ]);

  const updateStatus = (id, status) => {
    setRoutes(
      routes.map((route) =>
        route.id === id ? { ...route, status } : route
      )
    );
  };

  const deleteRoute = (id) => {
    setRoutes(routes.filter((route) => route.id !== id));
  };

  const filteredRoutes = routes.filter(
    (route) =>
      route.name.toLowerCase().includes(search.toLowerCase()) ||
      route.startPoint.toLowerCase().includes(search.toLowerCase()) ||
      route.endPoint.toLowerCase().includes(search.toLowerCase()) ||
      route.stops.some((stop) =>
        stop.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Route Management
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Manage all available routes and stop locations.
        </p>

        {/* Summary Cards */}

        <div className="grid grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Total Routes</h2>
            <h1 className="text-3xl font-bold mt-2">
              {routes.length}
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Active Routes</h2>
            <h1 className="text-3xl font-bold text-green-600 mt-2">
              {routes.filter(r => r.status === "Active").length}
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Inactive Routes</h2>
            <h1 className="text-3xl font-bold text-red-600 mt-2">
              {routes.filter(r => r.status === "Inactive").length}
            </h1>
          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <input
            type="text"
            placeholder="Search Route..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          />
        </div>

        {/* Route Table */}

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-4 text-left">Route ID</th>
                <th className="p-4 text-left">Route Name</th>
                <th className="p-4 text-left">Start Point</th>
                <th className="p-4 text-left">End Point</th>
                <th className="p-4 text-left">Stops</th>
                <th className="p-4 text-left">Distance</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredRoutes.length > 0 ? (
                filteredRoutes.map((route) => (
                  <React.Fragment key={route.id}>

                    <tr className="border-b hover:bg-slate-50">

                      <td className="p-4 font-medium">
                        {route.id}
                      </td>

                      <td className="p-4">
                        {route.name}
                      </td>

                      <td className="p-4">
                        {route.startPoint}
                      </td>

                      <td className="p-4">
                        {route.endPoint}
                      </td>

                      <td className="p-4">
                        <button
                          onClick={() =>
                            setExpandedRoute(
                              expandedRoute === route.id
                                ? null
                                : route.id
                            )
                          }
                          className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg"
                        >
                          {expandedRoute === route.id
                            ? "Hide Stops"
                            : `View Stops (${route.stops.length})`}
                        </button>
                      </td>

                      <td className="p-4">
                        {route.distance} km
                      </td>

                      <td className="p-4">
                        <select
                          value={route.status}
                          onChange={(e) =>
                            updateStatus(route.id, e.target.value)
                          }
                          className={`px-4 py-2 rounded-lg border font-semibold ${
                            route.status === "Active"
                              ? "text-green-600 border-green-300"
                              : "text-red-600 border-red-300"
                          }`}
                        >
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </td>

                      <td className="p-4 text-center">
                        <button
                          onClick={() => deleteRoute(route.id)}
                          className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-lg"
                        >
                          Delete
                        </button>
                      </td>

                    </tr>

                    {expandedRoute === route.id && (
                      <tr>
                        <td
                          colSpan="8"
                          className="bg-slate-50 px-6 py-5"
                        >
                          <div className="border rounded-xl bg-white p-5">

                            <h3 className="text-lg font-bold mb-4">
                              Route Stops
                            </h3>

                            <div className="flex flex-wrap gap-3">

                              <span className="px-3 py-2 rounded-lg bg-green-100 text-green-700 font-semibold">
                                {route.startPoint}
                              </span>

                              {route.stops.map((stop, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-2 rounded-lg bg-slate-100"
                                >
                                  {stop}
                                </span>
                              ))}

                              <span className="px-3 py-2 rounded-lg bg-blue-100 text-blue-700 font-semibold">
                                {route.endPoint}
                              </span>

                            </div>

                          </div>
                        </td>
                      </tr>
                    )}

                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-8 text-slate-500"
                  >
                    No Routes Found
                  </td>
                </tr>
              )}
            </tbody>

          </table>

        </div>

        {/* Bottom Summary */}

        <div className="grid grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-slate-500">
              Total Distance
            </h3>
            <h1 className="text-3xl font-bold mt-2">
              {routes.reduce(
                (total, route) => total + route.distance,
                0
              )} km
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-slate-500">
              Total Stops
            </h3>
            <h1 className="text-3xl font-bold mt-2">
              {routes.reduce(
                (total, route) => total + route.stops.length,
                0
              )}
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-slate-500">
              Average Distance
            </h3>
            <h1 className="text-3xl font-bold mt-2">
              {Math.round(
                routes.reduce(
                  (total, route) => total + route.distance,
                  0
                ) / routes.length
              )} km
            </h1>
          </div>

        </div>

      </div>

    </div>

  );

};

export default RouteListPage;