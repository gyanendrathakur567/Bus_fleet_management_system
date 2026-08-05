import Sidebar from "./components/Sidebar";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Fleet Operational Dashboard
          </h1>
          <p className="mt-2 text-slate-500">
            Monitor bus operations, trips and fleet activities.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {/* Completed */}
          <div className="rounded-xl border-l-4 border-green-500 bg-white p-6 shadow">
            <h3 className="text-sm uppercase tracking-wide text-slate-500">
              Completed Trips
            </h3>
            <p className="mt-2 text-4xl font-bold text-slate-900">18</p>
            <span className="text-sm text-slate-500">Finished today</span>
          </div>

          {/* Ongoing */}
          <div className="rounded-xl border-l-4 border-blue-500 bg-white p-6 shadow">
            <h3 className="text-sm uppercase tracking-wide text-slate-500">
              Ongoing Trips
            </h3>
            <p className="mt-2 text-4xl font-bold text-slate-900">6</p>
            <span className="text-sm text-slate-500">Currently active</span>
          </div>

          {/* Maintenance */}
          <div className="rounded-xl border-l-4 border-yellow-500 bg-white p-6 shadow">
            <h3 className="text-sm uppercase tracking-wide text-slate-500">
              In Maintenance
            </h3>
            <p className="mt-2 text-4xl font-bold text-slate-900">2</p>
            <span className="text-sm text-slate-500">Under service</span>
          </div>
        </div>

        {/* Fleet Status Table */}
        <div className="overflow-hidden rounded-xl bg-white shadow">
          <div className="border-b p-6">
            <h2 className="text-xl font-semibold text-slate-800">
              Recent Fleet Status
            </h2>
          </div>

          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-6 py-4 text-left">Bus ID</th>
                <th className="px-6 py-4 text-left">Route / Task</th>
                <th className="px-6 py-4 text-left">Driver</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-slate-50">
                <td className="px-6 py-4 font-bold">BUS-101</td>
                <td className="px-6 py-4">Route A (Downtown)</td>
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    Completed
                  </span>
                </td>
              </tr>

              <tr className="border-b hover:bg-slate-50">
                <td className="px-6 py-4 font-bold">BUS-104</td>
                <td className="px-6 py-4">Route C (Express)</td>
                <td className="px-6 py-4">Sarah Smith</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    Ongoing
                  </span>
                </td>
              </tr>

              <tr className="border-b hover:bg-slate-50">
                <td className="px-6 py-4 font-bold">BUS-108</td>
                <td className="px-6 py-4">Route B (West Line)</td>
                <td className="px-6 py-4">Mike Johnson</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    Ongoing
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-bold">BUS-102</td>
                <td className="px-6 py-4">Engine Checkup</td>
                <td className="px-6 py-4">Unassigned</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                    Maintenance
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;