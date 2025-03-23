import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataEntryPage from "./DataEntryPage";
import PortfolioPage from "./PortfolioPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route for Data Entry */}
        <Route path="/" element={<DataEntryPage />} />
        
        {/* Route for Portfolio Page */}
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
};

export default App;
