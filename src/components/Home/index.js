import React from "react";
import Alias from "../Alias";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="header-menu"></div>
      </div>
      <div className="header-alias">
        <Alias />
      </div>
    </div>
  );
};

export default Home;
