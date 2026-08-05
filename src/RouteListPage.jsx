import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Link } from "react-router-dom";

const RouteListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedRouteId, setExpandedRouteId] = useState(null);

  const [routes] = useState([
    {
      id: "RT-101",
      name: "Downtown Express",
      startPoint: "Central Bus Terminal",
      endPoint: "Tech Park Zone 4",
      distance: "24.5 km",
      stopsCount: 6,
      stops: [
        "Central Bus Terminal (Start)",
        "City Center Square",
        "Metro Junction",
        "University North Gate",
        "Innovation Hub",
        "Tech Park Zone 4 (End)",
      ],
      status: "active",
    },
    {
      id: "RT-102",
      name: "Suburban Line North",
      startPoint: "North Station Hub",
      endPoint: "Green Valley Residency",
      distance: "38.0 km",
      stopsCount: 8,
      stops: [
        "North Station Hub (Start)",
        "Market Yard",
        "Civil Hospital",
        "Ring Road Bypass",
        "East Avenue Mall",
        "Highland Towers",
        "Valley School",
        "Green Valley Residency (End)",
      ],
      status: "active",
    },
    {
      id: "RT-103",
      name: "Airport Shuttle Direct",
      startPoint: "Grand Central Plaza",
      endPoint: "International Airport T3",
      distance: "42.2 km",
      stopsCount: 4,
      stops: [
        "Grand Central Plaza (Start)",
        "Hotel Transit Point",
        "Highway Toll Plaza",
        "International Airport T3 (End)",
      ],
      status: "active",
    },
    {
      id: "RT-104",
      name: "Coastal Corridor",
      startPoint: "Harbor Gate",
      endPoint: "South Beach Terminal",
      distance: "18.7 km",
      stopsCount: 5,
      stops: [
        "Harbor Gate (Start)",
        "Navy Dock Yard",
        "Lighthouse Point",
        "Sunset Boulevard",
        "South Beach Terminal (End)",
      ],
      status: "inactive",
    },
  ]);

  const toggleStops = (id) => {
    setExpandedRouteId(expandedRouteId === id ? null : id);
  };

  const filteredRoutes = routes.filter((route) => {
    const q = searchQuery.toLowerCase();
    return (
      route.id.toLowerCase().includes(q) ||
      route.name.toLowerCase().includes(q) ||
      route.startPoint.toLowerCase().includes(q) ||
      route.endPoint.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Route Fleet List
            </h1>
            <p className="text-slate-500 mt-2">
              Manage operational transit routes, terminals, distances and stops.
            </p>
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search by ID, Name, Origin..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-lg px-4 py-3 w-80 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Link to="/AddRoutePage"className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"> ➕ Add New Route</Link>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-5 py-4 text-left">Route ID</th>
                <th className="px-5 py-4 text-left">Route Name</th>
                <th className="px-5 py-4 text-left">Starting Point</th>
                <th className="px-5 py-4 text-left">Ending Point</th>
                <th className="px-5 py-4 text-left">Distance</th>
                <th className="px-5 py-4 text-left">Stops</th>
                <th className="px-5 py-4 text-left">Details</th>
                <th className="px-5 py-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredRoutes.length > 0 ? (
                filteredRoutes.map((route) => (
                  <React.Fragment key={route.id}>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="px-5 py-4 font-bold">{route.id}</td>
                      <td className="px-5 py-4 font-semibold">{route.name}</td>
                      <td className="px-5 py-4">📍 {route.startPoint}</td>
                      <td className="px-5 py-4">🏁 {route.endPoint}</td>
                      <td className="px-5 py-4">
                        <span className="bg-slate-200 px-3 py-1 rounded-full">
                          {route.distance}
                        </span>
                      </td>
                      <td className="px-5 py-4 font-semibold">
                        {route.stopsCount} Stops
                      </td>
                      <td className="px-5 py-4">
                        <button
                          onClick={() => toggleStops(route.id)}
                          className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200"
                        >
                          {expandedRouteId === route.id
                            ? "🔼 Hide Stops"
                            : "🔽 View Stops"}
                        </button>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            route.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {route.status === "active" ? "Active" : "Inactive"}
                        </span>
                      </td>
                    </tr>

                    {/* Stops Dropdown */}
                    {expandedRouteId === route.id && (
                      <tr>
                        <td colSpan="8" className="bg-slate-50 p-6">
                          <h3 className="font-bold text-lg mb-4">
                            🚏 Stop Locations for {route.name}
                          </h3>

                          <ol className="space-y-3">
                            {route.stops.map((stop, index) => (
                              <li key={index} className="flex items-center gap-4">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">
                                  {index + 1}
                                </span>
                                <span className="text-slate-700">{stop}</span>
                              </li>
                            ))}
                          </ol>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-8 text-slate-500">
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