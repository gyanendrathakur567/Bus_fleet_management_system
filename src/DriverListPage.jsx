import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const DriverListPage = () => {

  const [drivers, setDrivers] = useState([
    {
      id: "DRV-101",
      name: "Rahul Kumar",
      phone: "9876543210",
      email: "rahul@gmail.com",
      age: 32,
      license: "DL123456789",
      bus: "BUS-101",
      status: "Active",
    },
    {
      id: "DRV-102",
      name: "Vikas Sharma",
      phone: "9876543211",
      email: "vikas@gmail.com",
      age: 35,
      license: "DL987654321",
      bus: "BUS-102",
      status: "Active",
    },
    {
      id: "DRV-103",
      name: "Arjun Singh",
      phone: "9876543212",
      email: "arjun@gmail.com",
      age: 30,
      license: "DL567891234",
      bus: "Not Assigned",
      status: "Inactive",
    },
    {
      id: "DRV-104",
      name: "Rakesh Yadav",
      phone: "9876543213",
      email: "rakesh@gmail.com",
      age: 40,
      license: "DL345678912",
      bus: "BUS-104",
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");

  const deleteDriver = (id) => {
    setDrivers(
      drivers.filter(driver => driver.id !== id)
    );
  };

  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Driver Management
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Manage drivers and bus assignments
        </p>

        {/* Summary Cards */}

        <div className="grid grid-cols-4 gap-5 mb-8">

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Total Drivers
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {drivers.length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Active
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {
                drivers.filter(
                  d => d.status === "Active"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Inactive
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {
                drivers.filter(
                  d => d.status === "Inactive"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Assigned Buses
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {
                drivers.filter(
                  d => d.bus !== "Not Assigned"
                ).length
              }
            </h2>
          </div>

        </div>

        {/* Search */}

        <div className="bg-white shadow rounded-xl p-5 mb-8">
          <input
            type="text"
            placeholder="Search Driver by Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          />
        </div>

        {/* Driver Table */}

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
                    Phone
                  </th>
                  <th className="px-6 py-4">
                    Email
                  </th>
                  <th className="px-6 py-4">
                    Age
                  </th>
                  <th className="px-6 py-4">
                    License
                  </th>
                  <th className="px-6 py-4">
                    Assigned Bus
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
                  filteredDrivers.length > 0 ?

                    filteredDrivers.map(driver => (
                      <tr
                        key={driver.id}
                        className="border-b hover:bg-slate-50"
                      >
                        <td className="px-6 py-4 font-semibold">
                          {driver.id}
                        </td>

                        <td className="px-6 py-4">
                          {driver.name}
                        </td>

                        <td className="px-6 py-4">
                          {driver.phone}
                        </td>

                        <td className="px-6 py-4">
                          {driver.email}
                        </td>

                        <td className="px-6 py-4">
                          {driver.age}
                        </td>

                        <td className="px-6 py-4">
                          {driver.license}
                        </td>

                        <td className="px-6 py-4">
                          {driver.bus}
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-semibold
                              ${
                                driver.status === "Active"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }
                            `}
                          >
                            {driver.status}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <button
                            onClick={() => deleteDriver(driver.id)}
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
                        colSpan="9"
                        className="text-center py-10 text-slate-500"
                      >
                        No drivers found.
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

export default DriverListPage;