import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Reports", path: "/ReportsPage" },
    { name: "Bus List", path: "/BusListPage" },
    { name: "Add Bus", path: "/AddBusPage" },
    { name: "Route List", path: "/RouteListPage" },
    { name: "Add Route", path: "/AddRoutePage" },
    { name: "Assign Bus", path: "/AssignBusPage" },
  ];

  return (
    <aside className="sticky top-0 h-screen w-64 bg-slate-900 text-white shadow-xl flex flex-col">
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block rounded-lg px-4 py-3 transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-cyan-500 text-white shadow-md"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}

        {/* Logout below Assign Bus */}
        <button className="w-full mt-4 rounded-lg bg-red-600 py-3 font-semibold hover:bg-red-700 transition">
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;