import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';
import ReportsPage from './ReportsPage';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ReportsPage" element={<ReportsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;