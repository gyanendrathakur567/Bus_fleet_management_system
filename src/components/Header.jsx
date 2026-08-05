import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 transition hover:opacity-90">
          <h1 className="text-2xl font-extrabold text-sky-400">BMS</h1>
          <span className="text-slate-500">|</span>
          <h2 className="hidden text-lg font-semibold tracking-wide text-white md:block">
            BUS MANAGEMENT SYSTEM
          </h2>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search buses, routes..."
            className="hidden w-72 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm text-white placeholder-slate-400 outline-none transition focus:border-sky-500 md:block"
          />

          {/* Notification */}
          <button
            title="Notifications"
            className="relative rounded-lg bg-slate-800 p-2 transition hover:bg-slate-700"
          >
            <span className="text-xl">🔔</span>
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* User */}
          <div className="flex items-center gap-3 rounded-lg bg-slate-800 px-3 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 font-bold text-white">
              A
            </div>
            <span className="hidden font-medium md:block">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;