import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const UserManagementPage = () => {

  const [role, setRole] = useState("all");
  const [search, setSearch] = useState("");

  const getUsers = () => {
    let users = [];

    const admin =
      JSON.parse(localStorage.getItem("adminUsers")) || [];

    const drivers =
      JSON.parse(localStorage.getItem("driverUsers")) || [];

    const passengers =
      JSON.parse(localStorage.getItem("passengerUsers")) || [];

    if (role === "all" || role === "admin") {
      users = [
        ...users,
        ...admin.map((u) => ({
          ...u,
          role: "Admin",
        })),
      ];
    }

    if (role === "all" || role === "driver") {
      users = [
        ...users,
        ...drivers.map((u) => ({
          ...u,
          role: "Driver",
        })),
      ];
    }

    if (role === "all" || role === "passenger") {
      users = [
        ...users,
        ...passengers.map((u) => ({
          ...u,
          role: "Passenger",
        })),
      ];
    }

    return users;
  };

  const users = getUsers();

  const deleteUser = (user) => {
    if (!window.confirm("Delete this user?"))
      return;

    let storageKey = "";

    if (user.role === "Admin")
      storageKey = "adminUsers";

    if (user.role === "Driver")
      storageKey = "driverUsers";

    if (user.role === "Passenger")
      storageKey = "passengerUsers";

    let data =
      JSON.parse(localStorage.getItem(storageKey)) || [];

    data = data.filter(
      (u) =>
        !(
          u.email === user.email &&
          u.phone === user.phone
        )
    );

    localStorage.setItem(
      storageKey,
      JSON.stringify(data)
    );

    alert("User Deleted Successfully");
  };

  const filteredUsers = users.filter((user) => {
    const text = search.toLowerCase();

    return (
      user.name?.toLowerCase().includes(text) ||
      user.email?.toLowerCase().includes(text) ||
      user.phone?.toLowerCase().includes(text)
    );
  });

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          User Management
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Manage Admin, Driver and Passenger Accounts
        </p>

        {/* Summary Cards */}

        <div className="grid grid-cols-4 gap-5 mb-8">

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Total Users
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {users.length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Admins
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {
                users.filter(
                  (u) => u.role === "Admin"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Drivers
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {
                users.filter(
                  (u) => u.role === "Driver"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Passengers
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {
                users.filter(
                  (u) => u.role === "Passenger"
                ).length
              }
            </h2>
          </div>

        </div>

        {/* Search and Filter */}

        <div className="bg-white shadow rounded-xl p-5 mb-8 flex gap-4">

          <input
            type="text"
            placeholder="Search by Name, Email or Phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-slate-300 px-4 rounded-lg"
          >
            <option value="all">
              All Users
            </option>

            <option value="admin">
              Admin
            </option>

            <option value="driver">
              Driver
            </option>

            <option value="passenger">
              Passenger
            </option>
          </select>

        </div>

        {/* User Table */}

        <div className="bg-white shadow rounded-xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4">
                    Name
                  </th>
                  <th className="px-6 py-4">
                    Email
                  </th>
                  <th className="px-6 py-4">
                    Phone
                  </th>
                  <th className="px-6 py-4">
                    Role
                  </th>
                  <th className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {
                  filteredUsers.length > 0 ?

                    filteredUsers.map((user, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-slate-50"
                      >
                        <td className="px-6 py-4 font-semibold">
                          {user.name}
                        </td>

                        <td className="px-6 py-4">
                          {user.email}
                        </td>

                        <td className="px-6 py-4">
                          {user.phone}
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-semibold
                              ${
                                user.role === "Admin"
                                  ? "bg-slate-800 text-white"
                                  : user.role === "Driver"
                                  ? "bg-slate-600 text-white"
                                  : "bg-slate-400 text-white"
                              }
                            `}
                          >
                            {user.role}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <button
                            onClick={() => deleteUser(user)}
                            className="bg-slate-500 hover:bg-slate-600 text-white px-5 py-2 rounded-lg"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))

                    :

                    (
                      <tr>
                        <td
                          colSpan="5"
                          className="text-center py-10 text-slate-500"
                        >
                          No Users Found
                        </td>
                      </tr>
                    )
                }
              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

};

export default UserManagementPage;