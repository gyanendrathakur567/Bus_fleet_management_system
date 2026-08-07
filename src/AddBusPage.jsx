import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const AddBusPage = () => {
  const navigate = useNavigate();

  const [bus, setBus] = useState({
    id: "",
    number: "",
    name: "",
    type: "",
    capacity: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setBus({
      ...bus,
      [e.target.name]: e.target.value,
    });
  };

  const addBus = (e) => {
    e.preventDefault();

    if (
      !bus.id ||
      !bus.number ||
      !bus.name ||
      !bus.type ||
      !bus.capacity
    ) {
      alert("Please fill all fields.");
      return;
    }

    alert("Bus added successfully.");
    navigate("/BusListPage");
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Add New Bus
        </h1>

        <p className="text-slate-500 mb-8">
          Register a new bus in the fleet system.
        </p>

        <div className="bg-white shadow rounded-xl p-6 border-t-4 border-slate-800">
          <form onSubmit={addBus}>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                name="id"
                placeholder="Bus ID"
                value={bus.id}
                onChange={handleChange}
                className="border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
              />

              <input
                type="text"
                name="number"
                placeholder="Bus Number"
                value={bus.number}
                onChange={handleChange}
                className="border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
              />

              <input
                type="text"
                name="name"
                placeholder="Bus Name"
                value={bus.name}
                onChange={handleChange}
                className="border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
              />

              <select
                name="type"
                value={bus.type}
                onChange={handleChange}
                className="border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
              >
              <option value="">Select Bus Type</option>
              <option value="AC Seater">AC Seater</option>
              <option value="Non-AC Seater">Non-AC Seater</option>
              <option value="Sleeper">Sleeper</option>
              <option value="AC Sleeper">AC Sleeper</option>
              <option value="AC/Non-AC Sleeper">AC/Non-AC Sleeper</option>
              <option value="Luxury Coach">Luxury Coach</option>
              <option value="Mini Bus">Mini Bus</option>
              <option value="Electric Bus">Electric Bus</option>
              <option value="Volvo">Volvo</option>
              <option value="Other">Other</option>
              </select>

              <input
                type="number"
                name="capacity"
                placeholder="Seat Capacity"
                value={bus.capacity}
                onChange={handleChange}
                className="border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
              />

              <select
                name="status"
                value={bus.status}
                onChange={handleChange}
                className="border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
              >
                <option>Available</option>
                <option>Running</option>
                <option>Maintenance</option>
              </select>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                type="submit"
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg transition"
              >
                Add Bus
              </button>

              <button
                type="button"
                onClick={() => navigate("/BusListPage")}
                className="bg-slate-500 hover:bg-slate-600 text-white px-8 py-3 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBusPage;