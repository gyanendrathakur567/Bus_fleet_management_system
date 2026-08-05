import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const AddBusPage = () => {
  const navigate = useNavigate();

  // Updated Form State with dedicated 'isAc' select value
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    brand: '',
    model: '',
    type: 'Seater',       // Default Bus Type (Sleeper removed)
    isAc: 'ac',           // 'ac' or 'non-ac'
    capacity: 40,
    status: 'active'
  });

  const [message, setMessage] = useState({ type: '', text: '' });

  const popularBrands = ['Volvo', 'Tata Motors', 'Scania', 'Ashok Leyland', 'Eicher', 'BharatBenz'];

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.id.trim() || !formData.name.trim() || !formData.brand.trim()) {
      setMessage({ type: 'error', text: 'Please fill in all required fields marked with *' });
      return;
    }

    const newBus = {
      ...formData,
      id: formData.id.toUpperCase().trim(),
      isAc: formData.isAc === 'ac', // Convert string select value back to boolean
      capacity: Number(formData.capacity)
    };

    console.log('Submitting Bus Data:', newBus);

    setMessage({ type: 'success', text: `Bus ${newBus.id} (${newBus.name}) added successfully!` });

    <Routes>
  <Route path="/BusListPage" element={<BusListPage />} />
</Routes>
  };

  return (
  <div className="flex min-h-screen bg-slate-100">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-1 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Add New Fleet Vehicle
          </h1>
          <p className="text-slate-500 mt-1">
            Register a new bus into the fleet database.
          </p>
        </div>

        <Link
          to="/BusListPage"
          className="bg-slate-800 text-white px-5 py-2 rounded-lg hover:bg-slate-900 transition"
        >
          ← Back to Bus List
        </Link>
      </div>

      {/* Alert */}
      {message.text && (
        <div
          className={`mb-6 rounded-lg p-4 font-medium ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Bus ID */}
            <div>
              <label className="block font-semibold mb-2">
                Bus ID *
              </label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder="BUS-101"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Bus Name */}
            <div>
              <label className="block font-semibold mb-2">
                Bus Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="City Express"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Brand */}
            <div>
              <label className="block font-semibold mb-2">
                Brand *
              </label>
              <input
                type="text"
                name="brand"
                list="brand-suggestions"
                value={formData.brand}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />

              <datalist id="brand-suggestions">
                {popularBrands.map((brand) => (
                  <option key={brand} value={brand} />
                ))}
              </datalist>
            </div>

            {/* Model */}
            <div>
              <label className="block font-semibold mb-2">
                Model
              </label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            {/* Type */}
            <div>
              <label className="block font-semibold mb-2">
                Bus Type
              </label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="Seater">Seater</option>
                <option value="Semi-Sleeper">Semi Sleeper</option>
                <option value="Mini Bus">Mini Bus</option>
                <option value="Double Decker">Double Decker</option>
              </select>
            </div>

            {/* AC */}
            <div>
              <label className="block font-semibold mb-2">
                Climate
              </label>

              <select
                name="isAc"
                value={formData.isAc}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="ac">AC</option>
                <option value="non-ac">Non AC</option>
              </select>
            </div>

            {/* Capacity */}
            <div>
              <label className="block font-semibold mb-2">
                Capacity
              </label>

              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block font-semibold mb-2">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="active">Active</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-8">

            <button
              type="button"
              onClick={() => navigate("/BusListPage")}
              className="px-6 py-2 rounded-lg border hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Save & Register Bus
            </button>

          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default AddBusPage;