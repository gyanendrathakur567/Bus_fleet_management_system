import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const BookTicketPage = () => {
  const routes = [
    {
      id: 1,
      name: "Delhi → Noida",
      bus: "BUS-101",
      driver: "Rahul Kumar",
      fare: 250,
      availableSeats: 32,
    },
    {
      id: 2,
      name: "Delhi → Agra",
      bus: "BUS-104",
      driver: "Vikas Sharma",
      fare: 450,
      availableSeats: 18,
    },
    {
      id: 3,
      name: "Noida → Gurgaon",
      bus: "BUS-105",
      driver: "Arjun Singh",
      fare: 180,
      availableSeats: 25,
    },
  ];

  const bookedSeats = [3, 7, 12, 18];

  const [selectedRoute, setSelectedRoute] = useState(routes[0]);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const [passenger, setPassenger] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "Male",
    date: "",
    boarding: "",
    destination: "",
    payment: "Cash",
  });

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleChange = (e) => {
    setPassenger({
      ...passenger,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoute = (e) => {
    const route = routes.find(
      (r) => r.id === Number(e.target.value)
    );

    setSelectedRoute(route);
    setSelectedSeats([]);
  };

  const resetForm = () => {
    setPassenger({
      name: "",
      phone: "",
      email: "",
      gender: "Male",
      date: "",
      boarding: "",
      destination: "",
      payment: "Cash",
    });

    setSelectedSeats([]);
    setSelectedRoute(routes[0]);
  };

  const bookTicket = () => {
    if (
      !passenger.name ||
      !passenger.phone ||
      !passenger.email ||
      !passenger.date ||
      !passenger.boarding ||
      !passenger.destination
    ) {
      alert("Please fill all passenger details.");
      return;
    }

    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    alert(`🎉 Ticket Booked Successfully!

Booking ID : BK${Math.floor(Math.random() * 100000)}

Passenger : ${passenger.name}

Phone : ${passenger.phone}

Bus : ${selectedRoute.bus}

Route : ${selectedRoute.name}

Driver : ${selectedRoute.driver}

Seats : ${selectedSeats.join(", ")}

Payment : ${passenger.payment}

Total : ₹${selectedSeats.length * selectedRoute.fare}

(This is a static frontend demo. Backend will be connected later.)`);

    resetForm();
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            🎫 Book Bus Ticket
          </h1>

          <p className="text-slate-500 mt-2">
            Book bus tickets quickly and securely.
          </p>
        </div>

        {/* Summary Cards */}

        <div className="grid grid-cols-4 gap-5 mb-8">

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500">Routes</p>
            <h2 className="text-3xl font-bold text-blue-600">
              {routes.length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500">Available Seats</p>
            <h2 className="text-3xl font-bold text-green-600">
              {selectedRoute.availableSeats}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500">Selected Seats</p>
            <h2 className="text-3xl font-bold text-orange-600">
              {selectedSeats.length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500">Total Fare</p>
            <h2 className="text-3xl font-bold text-purple-600">
              ₹{selectedSeats.length * selectedRoute.fare}
            </h2>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-8">
          {/* Passenger Information */}

          <h2 className="text-xl font-bold mb-6">
            Passenger Information
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-semibold">
                Passenger Name
              </label>

              <input
                type="text"
                name="name"
                value={passenger.name}
                onChange={handleChange}
                placeholder="Enter passenger name"
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Mobile Number
              </label>

              <input
                type="text"
                name="phone"
                value={passenger.phone}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={passenger.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Gender
              </label>

              <select
                name="gender"
                value={passenger.gender}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

          </div>

          <hr className="my-10" />

          {/* Journey Information */}

          <h2 className="text-xl font-bold mb-6">
            Journey Information
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-semibold">
                Travel Date
              </label>

              <input
                type="date"
                name="date"
                value={passenger.date}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Select Route
              </label>

              <select
                value={selectedRoute.id}
                onChange={handleRoute}
                className="w-full border rounded-lg px-4 py-3"
              >
                {routes.map((route) => (
                  <option
                    key={route.id}
                    value={route.id}
                  >
                    {route.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Boarding Point
              </label>

              <input
                type="text"
                name="boarding"
                value={passenger.boarding}
                onChange={handleChange}
                placeholder="Enter boarding point"
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Destination
              </label>

              <input
                type="text"
                name="destination"
                value={passenger.destination}
                onChange={handleChange}
                placeholder="Enter destination"
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

          </div>

          <hr className="my-10" />

          {/* Route Details */}

          <h2 className="text-xl font-bold mb-6">
            Route Details
          </h2>

          <div className="grid grid-cols-4 gap-6">

            <div className="bg-blue-50 rounded-xl shadow p-6">
              <p className="text-gray-500">
                Assigned Bus
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mt-2">
                {selectedRoute.bus}
              </h3>
            </div>

            <div className="bg-green-50 rounded-xl shadow p-6">
              <p className="text-gray-500">
                Driver
              </p>

              <h3 className="text-xl font-bold text-green-700 mt-2">
                {selectedRoute.driver}
              </h3>
            </div>

            <div className="bg-yellow-50 rounded-xl shadow p-6">
              <p className="text-gray-500">
                Available Seats
              </p>

              <h3 className="text-2xl font-bold text-yellow-700 mt-2">
                {selectedRoute.availableSeats}
              </h3>
            </div>

            <div className="bg-purple-50 rounded-xl shadow p-6">
              <p className="text-gray-500">
                Fare Per Seat
              </p>

              <h3 className="text-2xl font-bold text-purple-700 mt-2">
                ₹{selectedRoute.fare}
              </h3>
            </div>

          </div>

          <hr className="my-10" />

          {/* Seat Selection */}

          <h2 className="text-xl font-bold mb-6">
            Seat Selection
          </h2>

          <div className="bg-slate-100 rounded-xl p-8">

            <div className="text-center font-bold text-slate-700 mb-6 text-lg">
              🚌 Driver
            </div>

            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">

              {Array.from({ length: 20 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => toggleSeat(index + 1)}
                  disabled={bookedSeats.includes(index + 1)}
                  className={`h-14 rounded-lg font-bold transition ${
                    bookedSeats.includes(index + 1)
                      ? "bg-red-500 text-white cursor-not-allowed"
                      : selectedSeats.includes(index + 1)
                      ? "bg-blue-600 text-white"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

            </div>

            <div className="flex justify-center gap-10 mt-8">

              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-green-500"></div>
                Available
              </div>

              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-red-500"></div>
                Booked
              </div>

              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-blue-600"></div>
                Selected
              </div>

            </div>

          </div>

          <hr className="my-10" />

          {/* Fare Summary */}

          <h2 className="text-xl font-bold mb-6">
            Fare Summary
          </h2>

          <div className="grid grid-cols-2 gap-8">

            <div className="bg-slate-50 rounded-xl p-6">

              <h3 className="font-bold text-lg mb-4">
                Selected Seats
              </h3>

              <div className="flex flex-wrap gap-3">

                {selectedSeats.length > 0 ? (
                  selectedSeats.map((seat) => (
                    <span
                      key={seat}
                      className="bg-blue-600 text-white px-4 py-2 rounded-full"
                    >
                      Seat {seat}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500">
                    No Seat Selected
                  </p>
                )}

              </div>

            </div>

            <div className="bg-slate-50 rounded-xl p-6">

              <h3 className="font-bold text-lg mb-4">
                Fare Details
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Fare Per Seat</span>
                  <strong>₹{selectedRoute.fare}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Total Seats</span>
                  <strong>{selectedSeats.length}</strong>
                </div>

                <div className="border-t pt-4 flex justify-between text-xl">
                  <strong>Total Amount</strong>
                  <strong className="text-green-700">
                    ₹{selectedSeats.length * selectedRoute.fare}
                  </strong>
                </div>

              </div>

            </div>

          </div>

          <hr className="my-10" />

          {/* Payment */}

          <h2 className="text-xl font-bold mb-6">
            Payment Method
          </h2>

          <div className="flex gap-8">

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="Cash"
                checked={passenger.payment === "Cash"}
                onChange={handleChange}
              />
              Cash
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="UPI"
                checked={passenger.payment === "UPI"}
                onChange={handleChange}
              />
              UPI
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="Card"
                checked={passenger.payment === "Card"}
                onChange={handleChange}
              />
              Card
            </label>

          </div>

          <hr className="my-10" />

          {/* Booking Summary */}

          <h2 className="text-xl font-bold mb-6">
            Booking Summary
          </h2>

          <div className="bg-slate-50 rounded-xl p-8">

            <div className="grid grid-cols-2 gap-6">

              <div>
                <p className="text-gray-500">Passenger Name</p>
                <h3 className="font-bold text-lg">
                  {passenger.name || "-"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Phone Number</p>
                <h3 className="font-bold text-lg">
                  {passenger.phone || "-"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Email</p>
                <h3 className="font-bold text-lg">
                  {passenger.email || "-"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Travel Date</p>
                <h3 className="font-bold text-lg">
                  {passenger.date || "-"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Route</p>
                <h3 className="font-bold text-lg">
                  {selectedRoute.name}
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Bus</p>
                <h3 className="font-bold text-lg">
                  {selectedRoute.bus}
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Driver</p>
                <h3 className="font-bold text-lg">
                  {selectedRoute.driver}
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Boarding Point</p>
                <h3 className="font-bold text-lg">
                  {passenger.boarding || "-"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Destination</p>
                <h3 className="font-bold text-lg">
                  {passenger.destination || "-"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Selected Seats</p>
                <h3 className="font-bold text-lg">
                  {selectedSeats.length > 0
                    ? selectedSeats.join(", ")
                    : "-"}
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Payment Method</p>
                <h3 className="font-bold text-lg">
                  {passenger.payment}
                </h3>
              </div>

              <div>
                <p className="text-gray-500">Total Amount</p>
                <h3 className="text-2xl font-bold text-green-700">
                  ₹{selectedSeats.length * selectedRoute.fare}
                </h3>
              </div>

            </div>

          </div>

          {/* Action Buttons */}

          <div className="flex justify-end gap-4 mt-10">

            <button
              onClick={resetForm}
              className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Reset
            </button>

            <button
              onClick={bookTicket}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              🎟 Book Ticket
            </button>

          </div>

        </div>

      </div>

    </div>

  );
};

export default BookTicketPage;