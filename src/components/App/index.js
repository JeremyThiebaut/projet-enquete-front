import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home";
import "./style.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
