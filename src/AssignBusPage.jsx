import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const AssignBusPage = () => {

const buses = [
{ id: "BUS-101", name: "City Express" },
{ id: "BUS-102", name: "Metro Rider" },
{ id: "BUS-103", name: "Highway King" }
];

const routes = [
{ name: "Delhi → Noida" },
{ name: "Delhi → Agra" },
{ name: "Noida → Jaipur" }
];

const [assignments, setAssignments] = useState([
{
id: "ASG-101",
bus: "BUS-101 - City Express",
route: "Delhi → Noida",
time: "08:00 AM"
},
{
id: "ASG-102",
bus: "BUS-102 - Metro Rider",
route: "Delhi → Agra",
time: "10:30 AM"
},
{
id: "ASG-103",
bus: "BUS-103 - Highway King",
route: "Noida → Jaipur",
time: "07:00 PM"
}
]);

const [assignment, setAssignment] = useState({
bus: "",
route: "",
time: ""
});

const handleChange = (e) => {
setAssignment({
...assignment,
[e.target.name]: e.target.value
});
};

const assignBus = (e) => {
e.preventDefault();

if (
!assignment.bus ||
!assignment.route ||
!assignment.time
) {
alert("Please fill all fields");
return;
}

const newAssignment = {
id: "ASG-" + (assignments.length + 101),
bus: assignment.bus,
route: assignment.route,
time: assignment.time
};

setAssignments([
...assignments,
newAssignment
]);

setAssignment({
bus: "",
route: "",
time: ""
});

};

return (
<div className="flex">

  <Sidebar />

  <div className="flex-1 p-8">

    <h1 className="text-3xl font-bold text-slate-800">
      Assign Bus
    </h1>

    <p className="text-slate-500 mt-2 mb-8">
      Assign buses to routes
    </p>

    {/* Summary Cards */}

    <div className="grid grid-cols-2 gap-5 mb-8">

      <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-700">
        <p className="text-slate-500">
          Total Assignments
        </p>

        <h2 className="text-3xl font-bold text-slate-800">
          {assignments.length}
        </h2>
      </div>

      <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-700">
        <p className="text-slate-500">
          Available Buses
        </p>

        <h2 className="text-3xl font-bold text-slate-800">
          {buses.length}
        </h2>
      </div>

    </div>

    {/* Assign Form */}

    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-xl font-bold text-slate-800 mb-5">
        Assign New Bus
      </h2>

      <form
        onSubmit={assignBus}
        className="grid grid-cols-2 gap-5"
      >

        <select
          name="bus"
          value={assignment.bus}
          onChange={handleChange}
          className="border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-slate-700"
        >
          <option value="">
            Select Bus
          </option>

          {
            buses.map(bus => (
              <option
                key={bus.id}
                value={bus.id + " - " + bus.name}
              >
                {bus.id} - {bus.name}
              </option>
            ))
          }

        </select>

        <select
          name="route"
          value={assignment.route}
          onChange={handleChange}
          className="border border-slate-300 p-3 rounded-lg"
        >
          <option value="">
            Select Route
          </option>

          {
            routes.map(route => (
              <option
                key={route.name}
                value={route.name}
              >
                {route.name}
              </option>
            ))
          }

        </select>

        <input
          type="time"
          name="time"
          value={assignment.time}
          onChange={handleChange}
          className="border border-slate-300 p-3 rounded-lg"
        />

        <button
          type="submit"
          className="col-span-2 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg transition"
        >
          Assign Bus
        </button>

      </form>

    </div>

    {/* Assignment Table */}

    <div className="bg-white shadow rounded-xl mt-8 overflow-hidden">

      <h2 className="text-xl font-bold text-slate-800 p-6">
        Current Assignments
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead className="bg-slate-800 text-white">

            <tr>

              <th className="px-6 py-4">
                ID
              </th>

              <th className="px-6 py-4">
                Bus
              </th>

              <th className="px-6 py-4">
                Route
              </th>

              <th className="px-6 py-4">
                Time
              </th>

              <th className="px-6 py-4">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {
              assignments.map(item => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="px-6 py-4 font-semibold">
                    {item.id}
                  </td>

                  <td className="px-6 py-4">
                    {item.bus}
                  </td>

                  <td className="px-6 py-4">
                    {item.route}
                  </td>

                  <td className="px-6 py-4">
                    {item.time}
                  </td>

                  <td className="px-6 py-4">

                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Available for Driver
                    </span>

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

export default AssignBusPage;
