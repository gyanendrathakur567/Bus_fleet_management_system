import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const role = localStorage.getItem("role") || "guest";

  const user =
    JSON.parse(
      localStorage.getItem(
        "logged" + role.charAt(0).toUpperCase() + role.slice(1)
      )
    ) || {};

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 shadow-xl">
      <div className="px-8 py-4 flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg">
            <span className="text-3xl font-black text-blue-700">B</span>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-wide">
              Bus Fleet Management
            </h1>
            <p className="text-blue-100 text-sm">
              Smart Transport & Fleet Monitoring Platform
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:block text-right">
            <p className="text-white font-semibold">{today}</p>
            <p className="text-blue-100 text-sm">Welcome Back</p>
          </div>

          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl">
            <div>
              <h3 className="font-bold text-white">{user.name || "Guest"}</h3>
              <p className="text-blue-100 text-sm uppercase">{role}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-yellow-400 text-slate-800 flex items-center justify-center text-lg font-bold shadow-lg">
              {user.name ? user.name.charAt(0).toUpperCase() : "G"}
            </div>
          </div>

          {role !== "guest" && (
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-xl text-white font-semibold shadow-lg"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-white/10 border-t border-white/20 px-8 py-2 flex justify-between text-sm text-white">
        <span>Fleet Status : Operational</span>
        <span>System Version : v1.0.0</span>
      </div>
    </header>
  );
};

export default Header;