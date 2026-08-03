import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';
import ReportsPage from './ReportsPage';
import BusListPage from './BusListPage'
import Footer from './Footer';
import AddBusPage from './AddBusPage';
import RouteListPage from './RouteListPage';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ReportsPage" element={<ReportsPage />} />
        <Route path="/BusListPage" element={<BusListPage />} />
        <Route path="/AddBusPage" element={<AddBusPage />} />
        <Route path="/RouteListPage" element={<RouteListPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;