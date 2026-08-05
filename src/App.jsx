import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './Dashboard';
import ReportsPage from './ReportsPage';
import BusListPage from './BusListPage'
import Footer from './components/Footer';
import AddBusPage from './AddBusPage';
import RouteListPage from './RouteListPage';
import AddRoutePage from "./AddRoutePage";
import AssignBusPage from './AssignBusPage';


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
        <Route path="/AddRoutePage" element={<AddRoutePage />} />
        <Route path="/AssignBusPage" element={<AssignBusPage/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;