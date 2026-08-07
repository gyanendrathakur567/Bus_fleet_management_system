import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-sky-500 text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                🚌
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Bus Management System
                </h2>
                <p className="text-slate-400 text-sm">
                  Smart Fleet & Passenger Management
                </p>
              </div>
            </div>
            <p className="text-slate-400 leading-7">
              A complete solution for managing buses, routes,
              passengers, drivers, ticket booking, reports and
              fleet operations efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/Dashboard" className="hover:text-sky-400 transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/BusListPage" className="hover:text-sky-400 transition">
                  Bus Fleet
                </Link>
              </li>
              <li>
                <Link to="/RouteListPage" className="hover:text-sky-400 transition">
                  Routes
                </Link>
              </li>
              <li>
                <Link to="/ReportsPage" className="hover:text-sky-400 transition">
                  Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* System Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              System Status
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Server</span>
                <span className="text-green-400 font-semibold">● Online</span>
              </li>
              <li className="flex justify-between">
                <span>Database</span>
                <span className="text-green-400 font-semibold">● Connected</span>
              </li>
              <li className="flex justify-between">
                <span>Version</span>
                <span className="text-sky-400">v1.0.0</span>
              </li>
              <li className="flex justify-between">
                <span>Updated</span>
                <span>{new Date().toLocaleDateString()}</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <p>📧 support@busmanagement.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Greater Noida, India</p>
              <div className="mt-4 bg-slate-800 rounded-lg px-4 py-3 flex items-center justify-between">
                <span className="text-sm">Current Time</span>
                <span className="font-semibold text-sky-400">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Bus Management System. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/SettingsPage" className="hover:text-sky-400 transition">
              Settings
            </Link>
            <a href="#" className="hover:text-sky-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              Help Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;