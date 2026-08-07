import './App.css';
import {Routes,Route,useLocation} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./LoginPage";
import Dashboard from './Dashboard';
import ReportsPage from './ReportsPage';
import BusListPage from './BusListPage';
import AddBusPage from './AddBusPage';
import RouteListPage from './RouteListPage';
import AddRoutePage from "./AddRoutePage";
import AssignBusPage from './AssignBusPage';
import DriverListPage from './DriverListPage';
import TicketManagementPage from './TicketManagementPage';
import PassengerListPage from './PassengerListPage';
import IncomeReportPage from './IncomeReportPage';
import SettingsPage from './SettingsPage';
import DriverDashboard from "./DriverDashboard";
import PassengerDashboard from "./PassengerDashboard";
import UserManagementPage from "./UserManagementPage";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-xl p-10 text-center">
        <h1 className="text-5xl font-bold text-red-600">
          404
        </h1>
        <p className="text-gray-600 mt-3">
          Page Not Found
        </p>
        <a href="/Dashboard" className="inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg">
          Go Dashboard
        </a>
      </div>
    </div>
  );
};

function App() {
  const location = useLocation();

  const hideLayout = location.pathname === "/";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Dashboard" element={ <ProtectedRoute allowedRole="admin"> <Dashboard /> </ProtectedRoute>} />
        <Route path="/ReportsPage" element={ <ProtectedRoute allowedRole="admin"> <ReportsPage /> </ProtectedRoute>}/>
        <Route path="/BusListPage" element={ <ProtectedRoute allowedRole="admin"> <BusListPage /> </ProtectedRoute> } />
        <Route path="/AddBusPage" element={ <ProtectedRoute allowedRole="admin"> <AddBusPage /> </ProtectedRoute> } />
        <Route path="/RouteListPage" element={ <ProtectedRoute allowedRole="admin"> <RouteListPage /> </ProtectedRoute> } />
        <Route path="/AddRoutePage" element={ <ProtectedRoute allowedRole="admin"> <AddRoutePage /> </ProtectedRoute> } />
        <Route path="/AssignBusPage" element={ <ProtectedRoute allowedRole="admin"> <AssignBusPage /> </ProtectedRoute> } />
        <Route path="/DriverListPage" element={ <ProtectedRoute allowedRole="admin"> <DriverListPage /> </ProtectedRoute> } />
        <Route path="/PassengerListPage" element={ <ProtectedRoute allowedRole="admin"> <PassengerListPage /> </ProtectedRoute> } />
        <Route path="/TicketManagementPage" element={ <ProtectedRoute allowedRole="admin"> <TicketManagementPage /> </ProtectedRoute> } />
        <Route path="/IncomeReportPage" element={ <ProtectedRoute allowedRole="admin"> <IncomeReportPage /> </ProtectedRoute> } />
        <Route path="/SettingsPage" element={ <ProtectedRoute allowedRole="admin"> <SettingsPage /> </ProtectedRoute> } />
        <Route path="/UserManagementPage" element={ <ProtectedRoute allowedRole="admin"> <UserManagementPage /> </ProtectedRoute> } />
        <Route path="/driver-dashboard" element={ <ProtectedRoute allowedRole="driver"> <DriverDashboard /> </ProtectedRoute> }/>
        <Route path="/passenger-dashboard" element={ <ProtectedRoute allowedRole="passenger"> <PassengerDashboard /> </ProtectedRoute> } />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;