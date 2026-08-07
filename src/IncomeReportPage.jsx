import React from "react";
import Sidebar from "./components/Sidebar";

const IncomeReportPage = () => {

  const totalRevenue = 39450;
  const totalBookings = 155;
  const cancelledBookings = 12;
  const averageTicket = 255;

  const busIncome = [
    {
      bus: "BUS-101",
      route: "Delhi → Noida",
      income: 12000,
      bookings: 48,
      status: "Excellent",
    },
    {
      bus: "BUS-105",
      route: "Delhi → Agra",
      income: 18450,
      bookings: 65,
      status: "Excellent",
    },
    {
      bus: "BUS-108",
      route: "Noida → Jaipur",
      income: 9000,
      bookings: 42,
      status: "Good",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Income Report
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Revenue summary of the Bus Fleet Management System
        </p>

        {/* Summary Cards */}

        <div className="grid grid-cols-4 gap-5 mb-8">

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Total Revenue
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              ₹{totalRevenue}
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
              Cancelled Tickets
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {cancelledBookings}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Average Ticket
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              ₹{averageTicket}
            </h2>
          </div>

        </div>

        {/* Revenue Details */}

        <div className="bg-white shadow rounded-xl overflow-hidden">

          <h2 className="text-xl font-bold p-6 text-slate-800">
            Revenue Details
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4">
                    Bus ID
                  </th>
                  <th className="px-6 py-4">
                    Route
                  </th>
                  <th className="px-6 py-4">
                    Bookings
                  </th>
                  <th className="px-6 py-4">
                    Income
                  </th>
                  <th className="px-6 py-4">
                    Performance
                  </th>
                </tr>
              </thead>

              <tbody>
                {busIncome.map((item) => (
                  <tr
                    key={item.bus}
                    className="border-b hover:bg-slate-50 transition"
                  >
                    <td className="px-6 py-4 font-semibold">
                      {item.bus}
                    </td>

                    <td className="px-6 py-4">
                      {item.route}
                    </td>

                    <td className="px-6 py-4">
                      {item.bookings}
                    </td>

                    <td className="px-6 py-4 font-semibold text-slate-800">
                      ₹{item.income}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold
                          ${
                            item.status === "Excellent"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }
                        `}
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

export default IncomeReportPage;