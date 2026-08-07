import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";

const TicketManagementPage = () => {

  const sampleTickets = [
    {
      id: "TKT-1001",
      passenger: "Rahul Kumar",
      bus: "BUS-101",
      route: "Delhi → Noida",
      seat: "A1",
      amount: "₹350",
      payment: "UPI",
      status: "Confirmed"
    },
    {
      id: "TKT-1002",
      passenger: "Priya Sharma",
      bus: "BUS-102",
      route: "Delhi → Agra",
      seat: "B4",
      amount: "₹650",
      payment: "Card",
      status: "Confirmed"
    },
    {
      id: "TKT-1003",
      passenger: "Amit Singh",
      bus: "BUS-103",
      route: "Noida → Jaipur",
      seat: "C2",
      amount: "₹950",
      payment: "Cash",
      status: "Cancelled"
    }
  ];

  const [tickets, setTickets] = useState(() => {
    const data = JSON.parse(localStorage.getItem("tickets"));

    if (data && data.length > 0) {
      return data;
    }

    localStorage.setItem(
      "tickets",
      JSON.stringify(sampleTickets)
    );

    return sampleTickets;
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem(
      "tickets",
      JSON.stringify(tickets)
    );
  }, [tickets]);

  const cancelTicket = (id) => {
    const updated = tickets.map(ticket =>
      ticket.id === id
        ? { ...ticket, status: "Cancelled" }
        : ticket
    );

    setTickets(updated);
  };

  const deleteTicket = (id) => {
    if (window.confirm("Delete this ticket?")) {
      setTickets(
        tickets.filter(ticket => ticket.id !== id)
      );
    }
  };

  const revenue = tickets
    .filter(ticket => ticket.status === "Confirmed")
    .reduce(
      (sum, ticket) =>
        sum + Number(ticket.amount.replace("₹", "")),
      0
    );

  const filteredTickets = tickets.filter(ticket => {
    const text = search.toLowerCase();

    return (
      (
        ticket.id.toLowerCase().includes(text) ||
        ticket.passenger.toLowerCase().includes(text) ||
        ticket.bus.toLowerCase().includes(text) ||
        ticket.route.toLowerCase().includes(text)
      )
      &&
      (
        filter === "All" ||
        ticket.status === filter
      )
    );
  });

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Ticket Management
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Manage passenger bookings and ticket records
        </p>

        {/* Summary Cards */}

        <div className="grid grid-cols-3 gap-5 mb-8">

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Total Tickets
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {tickets.length}
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Confirmed Tickets
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              {
                tickets.filter(
                  ticket => ticket.status === "Confirmed"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white shadow rounded-xl p-5 border-l-4 border-slate-800">
            <p className="text-slate-500">
              Total Revenue
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              ₹{revenue}
            </h2>
          </div>

        </div>

        {/* Search */}

        <div className="bg-white shadow rounded-xl p-5 mb-8 flex gap-4">

          <input
            type="text"
            placeholder="Search Ticket / Passenger / Bus / Route"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-slate-300 px-4 rounded-lg"
          >
            <option>All</option>
            <option>Confirmed</option>
            <option>Cancelled</option>
          </select>

        </div>

        {/* Table */}

        <div className="bg-white shadow rounded-xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Passenger</th>
                  <th className="px-6 py-4">Bus</th>
                  <th className="px-6 py-4">Route</th>
                  <th className="px-6 py-4">Seat</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Payment</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  filteredTickets.map(ticket => (
                    <tr
                      key={ticket.id}
                      className="border-b hover:bg-slate-50"
                    >
                      <td className="px-6 py-4 font-semibold">
                        {ticket.id}
                      </td>

                      <td className="px-6 py-4">
                        {ticket.passenger}
                      </td>

                      <td className="px-6 py-4">
                        {ticket.bus}
                      </td>

                      <td className="px-6 py-4">
                        {ticket.route}
                      </td>

                      <td className="px-6 py-4">
                        {ticket.seat}
                      </td>

                      <td className="px-6 py-4 font-bold text-slate-800">
                        {ticket.amount}
                      </td>

                      <td className="px-6 py-4">
                        {ticket.payment}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold
                            ${
                              ticket.status === "Confirmed"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }
                          `}
                        >
                          {ticket.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 flex gap-2">
                        <button
                          onClick={() => cancelTicket(ticket.id)}
                          disabled={ticket.status === "Cancelled"}
                          className={`px-5 py-2 rounded-lg text-white
                            ${
                              ticket.status === "Cancelled"
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-slate-800 hover:bg-slate-700"
                            }
                          `}
                        >
                          Cancel
                        </button>

                        <button
                          onClick={() => deleteTicket(ticket.id)}
                          className="bg-slate-500 hover:bg-slate-600 text-white px-5 py-2 rounded-lg"
                        >
                          Delete
                        </button>
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

export default TicketManagementPage;