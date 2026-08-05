import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const AddRoutePage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    startPoint: "",
    endPoint: "",
    distance: "",
    status: "active",
  });

  const [stops, setStops] = useState([]);
  const [stopInput, setStopInput] = useState("");

  // FIXED MESSAGE STATE
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addStop = () => {
    if (stopInput.trim()) {
      setStops([...stops, stopInput]);
      setStopInput("");
    }
  };

  const removeStop = (index) => {
    setStops(stops.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.id ||
      !formData.name ||
      !formData.startPoint ||
      !formData.endPoint
    ) {
      setMessage({
        type: "error",
        text: "Please fill all required fields marked with *",
      });
      return;
    }

    const newRoute = {
      ...formData,
      stops: stops,
      stopsCount: stops.length,
    };

    console.log("New Route:", newRoute);

    setMessage({
      type: "success",
      text: `Route ${newRoute.id} (${newRoute.name}) added successfully!`,
    });

    setTimeout(() => {
      navigate("/RouteListPage");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Add New Route
            </h1>
            <p className="text-slate-500 mt-2">
              Create and manage new fleet routes.
            </p>
          </div>

          <button
            onClick={() => navigate("/RouteListPage")}
            className="bg-slate-800 text-white px-5 py-3 rounded-lg hover:bg-slate-900"
          >
            ← Back To Route List
          </button>
        </div>

        {/* ALERT MESSAGE */}
        {message.text && (
          <div className="mb-6 bg-red-100 text-red-700 px-5 py-3 rounded-lg font-medium">
            {message.text}
          </div>
        )}

        <div className="bg-white rounded-xl shadow p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold block mb-2">
                  Route ID *
                </label>
                <input
                  type="text"
                  name="id"
                  placeholder="RT-105"
                  value={formData.id}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Route Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Airport Express"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Starting Point *
                </label>
                <input
                  type="text"
                  name="startPoint"
                  placeholder="Central Bus Terminal"
                  value={formData.startPoint}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Ending Point *
                </label>
                <input
                  type="text"
                  name="endPoint"
                  placeholder="Airport Terminal"
                  value={formData.endPoint}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">Distance</label>
                <input
                  type="text"
                  name="distance"
                  placeholder="25 km"
                  value={formData.distance}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* STOPS */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">🚏 Route Stops</h2>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter stop location"
                  value={stopInput}
                  onChange={(e) => setStopInput(e.target.value)}
                  className="flex-1 border rounded-lg px-4 py-3"
                />

                <button
                  type="button"
                  onClick={addStop}
                  className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700"
                >
                  Add Stop
                </button>
              </div>

              <div className="mt-5 space-y-3">
                {stops.map((stop, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-slate-100 px-4 py-3 rounded-lg"
                  >
                    <div className="flex gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center">
                        {index + 1}
                      </span>
                      {stop}
                    </div>

                    <button
                      type="button"
                      onClick={() => removeStop(index)}
                      className="text-red-600 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button
                type="button"
                onClick={() => navigate("/RouteListPage")}
                className="border px-6 py-3 rounded-lg hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                ➕ Save Route
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRoutePage;