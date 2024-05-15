import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ListPage from "./components/ListPage";
import DashboardPage from "./components/DashboardPage";
import DetailsPage from "./components/DetailsPage";
import { DataProvider } from "./context/DataContext";
import "./App.css";

const App: React.FC = () => {
  return (
    <DataProvider>
      <Router>
        <nav className="navbar">
          <Link to="/">List</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
