import React from "react";
import Sidebar from "./components/Sidebar";

const DriverTripsPage = () => {

  const trips = [
    {
      id: "TRIP-101",
      bus: "BUS-101",
      route: "Delhi → Noida",
      date: "05 Aug 2026",
      time: "08:00 AM",
      passengers: 42,
      status: "Completed",
    },
    {
      id: "TRIP-102",
      bus: "BUS-105",
      route: "Delhi → Agra",
      date: "06 Aug 2026",
      time: "10:30 AM",
      passengers: 35,
      status: "Running",
    },
    {
      id: "TRIP-103",
      bus: "BUS-108",
      route: "Noida → Jaipur",
      date: "07 Aug 2026",
      time: "07:00 PM",
      passengers: 48,
      status: "Upcoming",
    },
    {
      id: "TRIP-104",
      bus: "BUS-110",
      route: "Delhi → Chandigarh",
      date: "08 Aug 2026",
      time: "06:00 AM",
      passengers: 40,
      status: "Completed",
    },
    {
      id: "TRIP-105",
      bus: "BUS-112",
      route: "Noida → Lucknow",
      date: "09 Aug 2026",
      time: "09:15 AM",
      passengers: 38,
      status: "Running",
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          🚍 My Trips
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          View assigned routes and trip details
        </p>

        {/* Summary Cards */}

        <div className="grid grid-cols-5 gap-5 mb-8">

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500">Total Trips</p>
            <h2 className="text-3xl font-bold text-blue-600">
              {trips.length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500">Completed</p>
            <h2 className="text-3xl font-bold text-green-600">
              {trips.filter(t => t.status === "Completed").length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500">Running</p>
            <h2 className="text-3xl font-bold text-blue-600">
              {trips.filter(t => t.status === "Running").length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500">Upcoming</p>
            <h2 className="text-3xl font-bold text-yellow-600">
              {trips.filter(t => t.status === "Upcoming").length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500">Passengers</p>
            <h2 className="text-3xl font-bold text-purple-600">
              {trips.reduce((sum, trip) => sum + trip.passengers, 0)}
            </h2>
          </div>

        </div>

        {/* Trips Table */}

        <div className="bg-white shadow rounded-xl overflow-hidden">

          <h2 className="text-xl font-bold p-6">
            📋 Assigned Trips
          </h2>

          <table className="w-full">

            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-4">Trip ID</th>
                <th className="p-4">Bus</th>
                <th className="p-4">Route</th>
                <th className="p-4">Date</th>
                <th className="p-4">Time</th>
                <th className="p-4">Passengers</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {trips.map((trip) => (
                <tr
                  key={trip.id}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="p-4 font-semibold">
                    {trip.id}
                  </td>

                  <td className="p-4">
                    {trip.bus}
                  </td>

                  <td className="p-4">
                    {trip.route}
                  </td>

                  <td className="p-4">
                    {trip.date}
                  </td>

                  <td className="p-4">
                    {trip.time}
                  </td>

                  <td className="p-4 text-center font-semibold">
                    {trip.passengers}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        trip.status === "Completed"
                          ? "bg-green-600"
                          : trip.status === "Running"
                          ? "bg-blue-600"
                          : "bg-yellow-500"
                      }`}
                    >
                      {trip.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
};

export default DriverTripsPage;