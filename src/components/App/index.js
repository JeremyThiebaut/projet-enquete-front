import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../containers/Home";
import Registration from "../../containers/Registration";
import NotFound from "../NotFound";
import "./style.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="logon" element={<Registration />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
