import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const Dashboard = () => {

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

const [selectedBus, setSelectedBus] = useState("");

const chooseBus = (assignment) => {

const driverAssignment = {
driverId: "DRV-101",
driverName: "Rahul Kumar",
bus: assignment.bus,
route: assignment.route,
time: assignment.time
};

localStorage.setItem(
"driverBusAssignment",
JSON.stringify(driverAssignment)
);

setSelectedBus(assignment.bus);

alert("Bus assigned successfully to Rahul Kumar");

};

return (
<div className="flex">

  <Sidebar />

  <div className="flex-1 p-8">

    <h1 className="text-3xl font-bold text-slate-800">
      Driver Dashboard
    </h1>

    <p className="text-slate-500 mt-2 mb-8">
      Choose a bus for your assigned route
    </p>

    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-xl font-bold text-slate-800 mb-5">
        Available Buses
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
                Action
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

                    <button
                      onClick={() => chooseBus(item)}
                      className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-lg"
                    >
                      {
                        selectedBus === item.bus
                          ? "Selected"
                          : "Choose Bus"
                      }
                    </button>

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>

    {
      selectedBus && (

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">

          <h2 className="text-xl font-bold text-green-700">
            Bus Selected Successfully
          </h2>

          <p className="text-green-700 mt-2">
            You selected: {selectedBus}
          </p>

        </div>

      )
    }

  </div>

</div>
);

};

export default Dashboard;
