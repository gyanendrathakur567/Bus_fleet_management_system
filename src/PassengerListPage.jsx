import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const PassengerListPage = () => {

  const passengers = [
    {
      id: "PAS-101",
      name: "Rahul Kumar",
      age: 24,
      gender: "Male",
      phone: "9876543210",
      email: "rahul@gmail.com",
      city: "Delhi",
      bookings: 5,
      status: "Active"
    },
    {
      id: "PAS-102",
      name: "Priya Sharma",
      age: 22,
      gender: "Female",
      phone: "9123456789",
      email: "priya@gmail.com",
      city: "Noida",
      bookings: 3,
      status: "Active"
    },
    {
      id: "PAS-103",
      name: "Amit Singh",
      age: 28,
      gender: "Male",
      phone: "9988776655",
      email: "amit@gmail.com",
      city: "Ghaziabad",
      bookings: 6,
      status: "Blocked"
    },
    {
      id: "PAS-104",
      name: "Sneha Verma",
      age: 25,
      gender: "Female",
      phone: "9090909090",
      email: "sneha@gmail.com",
      city: "Gurgaon",
      bookings: 2,
      status: "Active"
    }
  ];

  const [search, setSearch] = useState("");

  const activePassengers =
    passengers.filter(p => p.status === "Active").length;

  const blockedPassengers =
    passengers.filter(p => p.status === "Blocked").length;

  const totalBookings =
    passengers.reduce((sum, p) => sum + p.bookings, 0);

  const filteredPassengers =
    passengers.filter(passenger =>
      passenger.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Passenger Management
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Manage registered passengers and bookings
        </p>

        {/* Summary Cards */}

        <div className="grid grid-cols-4 gap-5 mb-8">

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Total Passengers
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {passengers.length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Total Bookings
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {totalBookings}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Active Passengers
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {activePassengers}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Blocked Passengers
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {blockedPassengers}
            </h2>
          </div>

        </div>

        {/* Search */}

        <div className="bg-white shadow rounded-xl p-5 mb-8">
          <input
            placeholder="Search Passenger..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          />
        </div>

        {/* Passenger Table */}

        <div className="bg-white shadow rounded-xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4">
                    ID
                  </th>
                  <th className="px-6 py-4">
                    Name
                  </th>
                  <th className="px-6 py-4">
                    Age
                  </th>
                  <th className="px-6 py-4">
                    Gender
                  </th>
                  <th className="px-6 py-4">
                    Phone
                  </th>
                  <th className="px-6 py-4">
                    Email
                  </th>
                  <th className="px-6 py-4">
                    City
                  </th>
                  <th className="px-6 py-4">
                    Bookings
                  </th>
                  <th className="px-6 py-4">
                    Status
                  </th>
                  <th className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {
                  filteredPassengers.map(passenger => (
                    <tr
                      key={passenger.id}
                      className="border-b hover:bg-slate-50"
                    >
                      <td className="px-6 py-4 font-semibold">
                        {passenger.id}
                      </td>

                      <td className="px-6 py-4 font-semibold">
                        {passenger.name}
                      </td>

                      <td className="px-6 py-4">
                        {passenger.age}
                      </td>

                      <td className="px-6 py-4">
                        {passenger.gender}
                      </td>

                      <td className="px-6 py-4">
                        {passenger.phone}
                      </td>

                      <td className="px-6 py-4">
                        {passenger.email}
                      </td>

                      <td className="px-6 py-4">
                        {passenger.city}
                      </td>

                      <td className="px-6 py-4 font-bold text-slate-800">
                        {passenger.bookings}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold
                            ${
                              passenger.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }
                          `}
                        >
                          {passenger.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 flex gap-2">
                        <button
                          onClick={() => alert(`Passenger: ${passenger.name}`)}
                          className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-lg"
                        >
                          View
                        </button>

                        <button
                          onClick={() => alert("Delete functionality will be connected to backend.")}
                          className="bg-slate-500 hover:bg-slate-600 text-white px-5 py-2 rounded-lg"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

};

export default PassengerListPage;