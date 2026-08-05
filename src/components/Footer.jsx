import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-sky-400">BMS</h2>
            <span className="text-slate-500">|</span>
            <span className="font-semibold tracking-wide text-white">
              BUS MANAGEMENT SYSTEM
            </span>
          </div>

          {/* Live Clock */}
          <div className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm">
            <span>🕒</span>
            <span>
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <Link to="/ReportsPage" className="transition hover:text-sky-400">
            Reports
          </Link>
          <Link to="/BusListPage" className="transition hover:text-sky-400">
            Bus Fleet
          </Link>
          <Link to="/RouteListPage" className="transition hover:text-sky-400">
            Routes
          </Link>
          <Link to="/AddBusPage" className="transition hover:text-sky-400">
            Add Bus
          </Link>
          <a href="#" className="transition hover:text-sky-400">
            Support
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm md:flex-row">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Bus Management System. All Rights Reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-sky-400">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-sky-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;