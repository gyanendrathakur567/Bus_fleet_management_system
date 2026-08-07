import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Dashboard = () => {

  const buses = [
    {
      id: "BUS-101",
      name: "City Express",
      number: "DL01AB1234",
      status: "Running",
    },
    {
      id: "BUS-102",
      name: "Urban Shuttle",
      number: "DL02CD5678",
      status: "Available",
    },
    {
      id: "BUS-103",
      name: "Campus Liner",
      number: "UP16EF9012",
      status: "Maintenance",
    },
    {
      id: "BUS-104",
      name: "Volvo Express",
      number: "RJ14GH3456",
      status: "Running",
    },
  ];

  const drivers = [
    { name: "Rahul Kumar" },
    { name: "Vikas Sharma" },
    { name: "Arjun Singh" },
    { name: "Rakesh Yadav" },
  ];

  const passengers = [
    { name: "Amit" },
    { name: "Riya" },
    { name: "Karan" },
    { name: "Neha" },
    { name: "Mohit" },
  ];

  const tickets = [
    {
      id: "TKT-101",
      bus: "BUS-101",
      route: "Delhi → Noida",
      amount: "₹250",
      status: "Confirmed"
    },
    {
      id: "TKT-102",
      bus: "BUS-102",
      route: "Delhi → Agra",
      amount: "₹450",
      status: "Confirmed"
    },
    {
      id: "TKT-103",
      bus: "BUS-103",
      route: "Noida → Gurgaon",
      amount: "₹180",
      status: "Pending"
    },
    {
      id: "TKT-104",
      bus: "BUS-104",
      route: "Jaipur → Delhi",
      amount: "₹550",
      status: "Confirmed"
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Admin Dashboard
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Bus Fleet Management System Overview
        </p>

        {/* Summary */}

        <div className="grid grid-cols-5 gap-5 mb-8">

          {[
            ["Total Buses", buses.length],
            ["Drivers", drivers.length],
            ["Passengers", passengers.length],
            ["Tickets", tickets.length],
            ["Total Income", "₹18,500"]
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-5 border-l-4 border-slate-700"
            >
              <p className="text-slate-500">
                {item[0]}
              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {item[1]}
              </h2>
            </div>
          ))}

        </div>

        {/* Quick Actions */}

        <div className="bg-white shadow rounded-xl p-6 mb-8">

          <h2 className="text-xl font-bold text-slate-800 mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-5 gap-4">

            {[
              ["Add Bus", "/AddBusPage"],
              ["Add Route", "/AddRoutePage"],
              ["Assign Bus", "/AssignBusPage"],
              ["Tickets", "/TicketManagementPage"],
              ["Reports", "/ReportsPage"]
            ].map((action, index) => (
              <Link
                key={index}
                to={action[1]}
                className="bg-slate-800 text-white p-4 rounded-lg text-center hover:bg-slate-700 transition"
              >
                {action[0]}
              </Link>
            ))}

          </div>

        </div>

        {/* Fleet Status */}

        <div className="grid grid-cols-4 gap-5 mb-8">

          {[
            ["Running Buses", "2"],
            ["Available Buses", "1"],
            ["Maintenance", "1"],
            ["System Status", "Online"]
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-5"
            >
              <p className="text-slate-500">
                {item[0]}
              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">
                {item[1]}
              </h2>
            </div>
          ))}

        </div>

        {/* Bus Table */}

        <div className="bg-white shadow rounded-xl mb-8 overflow-hidden">

          <h2 className="text-xl font-bold text-slate-800 p-6">
            Bus Status
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4">
                    Bus ID
                  </th>
                  <th className="px-6 py-4">
                    Bus Name
                  </th>
                  <th className="px-6 py-4">
                    Number
                  </th>
                  <th className="px-6 py-4">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {buses.map(bus => (
                  <tr
                    key={bus.id}
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="px-6 py-4">
                      {bus.id}
                    </td>

                    <td className="px-6 py-4 font-semibold">
                      {bus.name}
                    </td>

                    <td className="px-6 py-4">
                      {bus.number}
                    </td>

                    <td className="px-6 py-4">
                      <span className={`px-4 py-1 rounded-full text-sm text-white
                        ${
                          bus.status === "Running"
                            ? "bg-green-600"
                            : bus.status === "Available"
                            ? "bg-blue-600"
                            : "bg-red-600"
                        }
                      `}>
                        {bus.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

        {/* Ticket Table */}

        <div className="bg-white shadow rounded-xl overflow-hidden">

          <h2 className="text-xl font-bold text-slate-800 p-6">
            Recent Ticket Bookings
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4">
                    Ticket ID
                  </th>
                  <th className="px-6 py-4">
                    Bus
                  </th>
                  <th className="px-6 py-4">
                    Route
                  </th>
                  <th className="px-6 py-4">
                    Amount
                  </th>
                  <th className="px-6 py-4">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {tickets.map(ticket => (
                  <tr
                    key={ticket.id}
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="px-6 py-4">
                      {ticket.id}
                    </td>

                    <td className="px-6 py-4">
                      {ticket.bus}
                    </td>

                    <td className="px-6 py-4">
                      {ticket.route}
                    </td>

                    <td className="px-6 py-4 font-semibold text-green-600">
                      {ticket.amount}
                    </td>

                    <td className="px-6 py-4">
                      <span className={`px-4 py-1 rounded-full text-sm text-white
                        ${
                          ticket.status === "Confirmed"
                            ? "bg-green-600"
                            : "bg-yellow-500"
                        }
                      `}>
                        {ticket.status}
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

export default Dashboard;