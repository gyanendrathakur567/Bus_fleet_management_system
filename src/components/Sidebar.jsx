import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const role = localStorage.getItem("role") || "admin";

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const MenuLink = ({ to, name }) => {
    const active = location.pathname === to;

    return (
      <Link
        to={to}
        className={`block px-5 py-3 rounded-xl mb-2 font-medium transition-all duration-300 ${
          active
            ? "bg-blue-600 text-white shadow-md"
            : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
        }`}
      >
        {name}
      </Link>
    );
  };

  return (
    <aside className="w-72 min-h-screen bg-white border-r border-slate-200 shadow-lg flex flex-col">
      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {role === "admin" && (
          <>
            <p className="text-xs uppercase tracking-[3px] text-slate-500 font-bold mb-5">
              Administration
            </p>
            <MenuLink to="/Dashboard" name="Dashboard" />
            <MenuLink to="/BusListPage" name="Manage Buses" />
            <MenuLink to="/AddBusPage" name="Add Bus" />
            <MenuLink to="/RouteListPage" name="Routes" />
            <MenuLink to="/AddRoutePage" name="Add Route" />
            <MenuLink to="/AssignBusPage" name="Assign Bus" />
            <MenuLink to="/DriverListPage" name="Drivers" />
            <MenuLink to="/PassengerListPage" name="Passengers" />
            <MenuLink to="/TicketManagementPage" name="Tickets" />
            <MenuLink to="/IncomeReportPage" name="Income Report" />
            <MenuLink to="/ReportsPage" name="Reports & Analytics" />
            <MenuLink to="/UserManagementPage" name="User Management" />
            <MenuLink to="/SettingsPage" name="Settings" />
          </>
        )}

        {role === "driver" && (
          <>
            <p className="text-xs uppercase tracking-[3px] text-slate-500 font-bold mb-5">
              Driver Panel
            </p>
            <MenuLink to="/driver-dashboard" name="Dashboard" />
            <MenuLink to="/driver-trips" name="My Trips" />
            <MenuLink to="/driver-profile" name="Profile" />
            <MenuLink to="/driver-income" name="Income" />
          </>
        )}

        {role === "passenger" && (
          <>
            <p className="text-xs uppercase tracking-[3px] text-slate-500 font-bold mb-5">
              Passenger Panel
            </p>
            <MenuLink to="/passenger-dashboard" name="Dashboard" />
            <MenuLink to="/passenger-booking" name="Book Ticket" />
            <MenuLink to="/passenger-ticket" name="My Tickets" />
            <MenuLink to="/passenger-profile" name="Profile" />
          </>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 p-6">
        <button
          onClick={logout}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;