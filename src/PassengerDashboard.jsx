import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import jsPDF from "jspdf";

const PassengerDashboard = () => {

  const passenger = {
    name: "Amit Kumar",
    email: "amit@gmail.com",
    phone: "9876543210"
  };

  const buses = [
    {
      id: "BUS-101",
      route: "Delhi → Noida",
      seats: 42,
      fare: 250
    },
    {
      id: "BUS-105",
      route: "Delhi → Agra",
      seats: 35,
      fare: 450
    },
    {
      id: "BUS-108",
      route: "Noida → Jaipur",
      seats: 28,
      fare: 600
    }
  ];

  const [selectedBus, setSelectedBus] = useState(null);

  const [booking, setBooking] = useState({
    name: passenger.name,
    age: "",
    gender: "Male",
    seat: "",
    payment: "UPI"
  });

  const tickets = [
    {
      id: "TKT-1001",
      bus: "BUS-101",
      route: "Delhi → Noida",
      seat: "A12",
      amount: "₹250",
      status: "Confirmed"
    },
    {
      id: "TKT-1002",
      bus: "BUS-105",
      route: "Delhi → Agra",
      seat: "B08",
      amount: "₹450",
      status: "Confirmed"
    }
  ];

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value
    });
  };

  const downloadPDF = (ticket) => {
    const pdf = new jsPDF();

    pdf.setFontSize(18);
    pdf.text("Bus Fleet Management", 20, 20);

    pdf.setFontSize(14);
    pdf.text("Passenger Ticket", 20, 35);

    pdf.text(`Ticket ID : ${ticket.id}`, 20, 55);
    pdf.text(`Bus : ${ticket.bus}`, 20, 70);
    pdf.text(`Route : ${ticket.route}`, 20, 85);
    pdf.text(`Seat : ${ticket.seat}`, 20, 100);
    pdf.text(`Amount : ${ticket.amount}`, 20, 115);
    pdf.text(`Status : ${ticket.status}`, 20, 130);

    pdf.save(`${ticket.id}.pdf`);
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold">
          🎫 Passenger Dashboard
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Welcome, {passenger.name}
        </p>

        {/* Passenger Profile */}

        <div className="grid grid-cols-3 gap-5 mb-8">

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500">Passenger</p>
            <h2 className="text-xl font-bold">
              {passenger.name}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500">Email</p>
            <h2 className="text-lg font-semibold">
              {passenger.email}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500">Phone</p>
            <h2 className="text-lg font-semibold">
              {passenger.phone}
            </h2>
          </div>

        </div>

        {/* Available Buses */}

        <div className="bg-white shadow rounded-xl overflow-hidden">

          <h2 className="text-xl font-bold p-6">
            🚌 Available Buses
          </h2>

          <table className="w-full">

            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-4">Bus</th>
                <th className="p-4">Route</th>
                <th className="p-4">Seats</th>
                <th className="p-4">Fare</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {buses.map((bus) => (
                <tr
                  key={bus.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4 font-semibold">
                    {bus.id}
                  </td>

                  <td className="p-4">
                    {bus.route}
                  </td>

                  <td className="p-4">
                    {bus.seats}
                  </td>

                  <td className="p-4 text-green-600 font-semibold">
                    ₹{bus.fare}
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => setSelectedBus(bus)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

        {selectedBus && (
          <div className="bg-white shadow rounded-xl p-6 mt-8">

            <h2 className="text-xl font-bold mb-5">
              Passenger Details
            </h2>

            <div className="grid grid-cols-2 gap-5">

              <input
                name="name"
                value={booking.name}
                onChange={handleChange}
                className="border p-3 rounded-lg"
                placeholder="Passenger Name"
              />

              <input
                name="age"
                value={booking.age}
                onChange={handleChange}
                className="border p-3 rounded-lg"
                placeholder="Age"
              />

              <select
                name="gender"
                value={booking.gender}
                onChange={handleChange}
                className="border p-3 rounded-lg"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              <input
                name="seat"
                value={booking.seat}
                onChange={handleChange}
                className="border p-3 rounded-lg"
                placeholder="Seat Number"
              />

              <select
                name="payment"
                value={booking.payment}
                onChange={handleChange}
                className="border p-3 rounded-lg"
              >
                <option>UPI</option>
                <option>Card</option>
                <option>Cash</option>
              </select>

              <button
                type="button"
                onClick={() =>
                  alert("Booking functionality will be connected to the backend.")
                }
                className="bg-green-600 text-white rounded-lg"
              >
                Confirm Booking
              </button>

            </div>

          </div>
        )}

        {/* My Tickets */}

        <div className="bg-white shadow rounded-xl mt-8 overflow-hidden">

          <h2 className="text-xl font-bold p-6">
            🎟 My Tickets
          </h2>

          <table className="w-full">

            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-4">Ticket ID</th>
                <th className="p-4">Bus</th>
                <th className="p-4">Route</th>
                <th className="p-4">Seat</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4 font-semibold">
                    {ticket.id}
                  </td>

                  <td className="p-4">
                    {ticket.bus}
                  </td>

                  <td className="p-4">
                    {ticket.route}
                  </td>

                  <td className="p-4">
                    {ticket.seat}
                  </td>

                  <td className="p-4 text-green-600 font-semibold">
                    {ticket.amount}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        ticket.status === "Confirmed"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </td>

                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => downloadPDF(ticket)}
                      className="bg-blue-600 text-white px-3 py-2 rounded-lg"
                    >
                      PDF
                    </button>

                    <button
                      onClick={() =>
                        alert(
                          "Ticket cancellation will be available after backend integration."
                        )
                      }
                      className="bg-red-600 text-white px-3 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
};

export default PassengerDashboard;