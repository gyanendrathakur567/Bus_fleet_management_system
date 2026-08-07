import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const BusListPage = () => {

  const initialBuses = [
    {
      id: "BUS-101",
      name: "Volvo AC Sleeper",
      number: "DL01AB1234",
      type: "AC Sleeper",
      capacity: 40,
      status: "Available",
    },
    {
      id: "BUS-102",
      name: "Ashok Leyland",
      number: "DL02CD5678",
      type: "Non AC",
      capacity: 45,
      status: "Running",
    },
    {
      id: "BUS-103",
      name: "Tata Starbus",
      number: "UP16EF9012",
      type: "Mini Bus",
      capacity: 30,
      status: "Maintenance",
    },
    {
      id: "BUS-104",
      name: "Mercedes Coach",
      number: "RJ14GH3456",
      type: "Luxury AC",
      capacity: 35,
      status: "Available",
    },
    {
      id: "BUS-105",
      name: "Volvo Multi Axle",
      number: "HR26JK7890",
      type: "AC Seater",
      capacity: 50,
      status: "Running",
    },
  ];

  const [buses, setBuses] = useState(initialBuses);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const updateStatus = (id, status) => {
    setBuses(
      buses.map(bus =>
        bus.id === id
          ? { ...bus, status }
          : bus
      )
    );
  };

  const deleteBus = (id) => {
    setBuses(
      buses.filter(bus => bus.id !== id)
    );
  };

  const filteredBuses = buses.filter((bus) => {
    const searchMatch =
      bus.name.toLowerCase().includes(search.toLowerCase()) ||
      bus.number.toLowerCase().includes(search.toLowerCase());

    const filterMatch =
      filter === "All" || bus.status === filter;

    return searchMatch && filterMatch;
  });

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Bus Management
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Manage all fleet buses
        </p>

        {/* Summary Cards */}

        <div className="grid grid-cols-4 gap-5 mb-8">

          {[
            ["Total Buses", buses.length],
            ["Available", buses.filter(b => b.status === "Available").length],
            ["Running", buses.filter(b => b.status === "Running").length],
            ["Maintenance", buses.filter(b => b.status === "Maintenance").length]
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-700"
            >
              <p className="text-slate-500">
                {card[0]}
              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {card[1]}
              </h2>
            </div>
          ))}

        </div>

        {/* Search Filter */}

        <div className="bg-white shadow rounded-xl p-5 mb-8 flex gap-4">

          <input
            type="text"
            placeholder="Search Bus Name or Number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-700"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-slate-300 rounded-lg px-5 py-3"
          >
            <option>All</option>
            <option>Available</option>
            <option>Running</option>
            <option>Maintenance</option>
          </select>

        </div>

        {/* Table */}

        <div className="bg-white shadow rounded-xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4">
                    ID
                  </th>
                  <th className="px-6 py-4">
                    Bus Name
                  </th>
                  <th className="px-6 py-4">
                    Number
                  </th>
                  <th className="px-6 py-4">
                    Type
                  </th>
                  <th className="px-6 py-4">
                    Capacity
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
                  filteredBuses.length > 0 ?

                    filteredBuses.map(bus => (
                      <tr
                        key={bus.id}
                        className="border-b hover:bg-slate-50"
                      >
                        <td className="px-6 py-4 font-semibold">
                          {bus.id}
                        </td>

                        <td className="px-6 py-4">
                          {bus.name}
                        </td>

                        <td className="px-6 py-4">
                          {bus.number}
                        </td>

                        <td className="px-6 py-4">
                          {bus.type}
                        </td>

                        <td className="px-6 py-4">
                          {bus.capacity} Seats
                        </td>

                        <td className="px-6 py-4">
                          <select
                            value={bus.status}
                            onChange={(e) => updateStatus(bus.id, e.target.value)}
                            className={`px-4 py-2 rounded-lg font-semibold border
                              ${
                                bus.status === "Available"
                                  ? "text-green-600 border-green-300"
                                  : bus.status === "Running"
                                  ? "text-blue-600 border-blue-300"
                                  : "text-red-600 border-red-300"
                              }
                            `}
                          >
                            <option>Available</option>
                            <option>Running</option>
                            <option>Maintenance</option>
                          </select>
                        </td>

                        <td className="px-6 py-4">
                          <button
                            onClick={() => deleteBus(bus.id)}
                            className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-lg"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))

                    :

                    <tr>
                      <td
                        colSpan="7"
                        className="text-center py-10 text-slate-500"
                      >
                        No buses found.
                      </td>
                    </tr>
                }
              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

};

export default BusListPage;