import React from "react";
import Sidebar from "./components/Sidebar";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ReportsPage = () => {

  const tickets = [
    { id: "TKT-101", amount: 500, status: "Confirmed" },
    { id: "TKT-102", amount: 350, status: "Confirmed" },
    { id: "TKT-103", amount: 600, status: "Cancelled" },
    { id: "TKT-104", amount: 450, status: "Confirmed" },
    { id: "TKT-105", amount: 300, status: "Confirmed" },
  ];

  const passengers = [
    { id: "P-101" },
    { id: "P-102" },
    { id: "P-103" },
    { id: "P-104" },
    { id: "P-105" },
    { id: "P-106" },
  ];

  const buses = [
    { id: "BUS-101" },
    { id: "BUS-102" },
    { id: "BUS-103" },
    { id: "BUS-104" },
    { id: "BUS-105" },
  ];

  const income = tickets.reduce(
    (sum, ticket) => sum + ticket.amount,
    0
  );

  const confirmedTickets = tickets.filter(
    (ticket) => ticket.status === "Confirmed"
  ).length;

  const cancelledTickets = tickets.filter(
    (ticket) => ticket.status === "Cancelled"
  ).length;

  const paymentData = [
    {
      name: "UPI",
      value: 7000,
    },
    {
      name: "Card",
      value: 4500,
    },
    {
      name: "Cash",
      value: 3000,
    },
  ];

  const COLORS = [
    "#334155",
    "#64748b",
    "#94a3b8",
  ];

  const busData = [
    {
      bus: "BUS-101",
      income: 12000,
    },
    {
      bus: "BUS-102",
      income: 15000,
    },
    {
      bus: "BUS-103",
      income: 18000,
    },
    {
      bus: "BUS-104",
      income: 9000,
    },
    {
      bus: "BUS-105",
      income: 13500,
    },
  ];

  const routeData = [
    {
      route: "Delhi → Noida",
      tickets: 48,
      performance: "Excellent",
    },
    {
      route: "Delhi → Agra",
      tickets: 35,
      performance: "Good",
    },
    {
      route: "Noida → Jaipur",
      tickets: 29,
      performance: "Average",
    },
    {
      route: "Noida → Gurgaon",
      tickets: 52,
      performance: "Excellent",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Reports & Analytics
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Complete Bus Fleet Performance Overview
        </p>

        {/* Summary Cards */}

        <div className="grid grid-cols-5 gap-5 mb-8">

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Revenue
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              ₹{income}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Tickets
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {tickets.length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Passengers
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {passengers.length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Buses
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {buses.length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Cancelled
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {cancelledTickets}
            </h2>
          </div>

        </div>

        {/* Charts */}

        <div className="grid grid-cols-2 gap-8 mb-8">

          <div className="bg-white shadow rounded-xl p-6">

            <h2 className="text-xl font-bold text-slate-800 mb-5">
              Bus Wise Income
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={busData}>
                <XAxis dataKey="bus" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="income"
                  fill="#334155"
                />
              </BarChart>
            </ResponsiveContainer>

          </div>

          <div className="bg-white shadow rounded-xl p-6">

            <h2 className="text-xl font-bold text-slate-800 mb-5">
              Payment Analysis
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={paymentData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {paymentData.map((item, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* Ticket Status and System Status */}

        <div className="grid grid-cols-2 gap-8 mb-8">

          <div className="bg-white shadow rounded-xl p-6">

            <h2 className="text-xl font-bold text-slate-800 mb-5">
              Ticket Status
            </h2>

            <p className="mb-3 text-slate-600">
              Confirmed :
              <span className="text-slate-800 font-bold ml-2">
                {confirmedTickets}
              </span>
            </p>

            <p className="text-slate-600">
              Cancelled :
              <span className="text-slate-800 font-bold ml-2">
                {cancelledTickets}
              </span>
            </p>

          </div>

          <div className="bg-white shadow rounded-xl p-6">

            <h2 className="text-xl font-bold text-slate-800 mb-5">
              System Status
            </h2>

            <p className="mb-3 text-slate-600">
              Server :
              <span className="text-green-600 font-bold ml-2">
                Online
              </span>
            </p>

            <p className="mb-3 text-slate-600">
              Database :
              <span className="text-green-600 font-bold ml-2">
                Connected
              </span>
            </p>

            <p className="text-slate-600">
              Booking :
              <span className="text-green-600 font-bold ml-2">
                Active
              </span>
            </p>

          </div>

        </div>

        {/* Route Performance */}

        <div className="bg-white shadow rounded-xl overflow-hidden">

          <h2 className="text-xl font-bold text-slate-800 p-6">
            Route Performance
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4">
                    Route
                  </th>
                  <th className="px-6 py-4">
                    Tickets
                  </th>
                  <th className="px-6 py-4">
                    Performance
                  </th>
                </tr>
              </thead>

              <tbody>
                {
                  routeData.map((route, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-slate-50"
                    >
                      <td className="px-6 py-4 font-semibold">
                        {route.route}
                      </td>

                      <td className="px-6 py-4">
                        {route.tickets}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-semibold"
                        >
                          {route.performance}
                        </span>
                      </td>
                    </tr>
                  ))
                }
              </tbody>

            </table>

          </div>

        </div>

        {/* Export Buttons */}

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={() =>
              alert("Excel Export Coming Soon")
            }
            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg"
          >
            Export Excel
          </button>

          <button
            onClick={() =>
              alert("PDF Export Coming Soon")
            }
            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg"
          >
            Export PDF
          </button>

          <button
            onClick={() =>
              window.print()
            }
            className="bg-slate-500 hover:bg-slate-600 text-white px-6 py-3 rounded-lg"
          >
            Print
          </button>

        </div>

      </div>

    </div>

  );

};

export default ReportsPage;