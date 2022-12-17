import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../../containers/Home";
import Registration from "../../containers/Registration";
import NotFound from "../NotFound";
import Connexion from "../../containers/Connexion";
import "./style.scss";
import Menu from "../Menu";
import Alias from "../../containers/Alias";
import Game from "../../containers/Game";

const App = ({ checkAuth, isLogged }) => {
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <div className="App">
        <div className="header">
          <div className="header-menu">
            <Menu />
          </div>
          <div className="header-alias">
            <Alias />
          </div>
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="logon"
            element={isLogged ? <Navigate replace to="/" /> : <Registration />}
          />
          <Route
            path="login"
            element={isLogged ? <Navigate replace to="/" /> : <Connexion />}
          />
          <Route path="/play" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
