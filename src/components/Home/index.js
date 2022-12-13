import React from "react";
import Alias from "../Alias";
import Menu from "../../containers/Menu";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="header-menu">
          <Menu />
        </div>
        <div className="header-alias">
          <Alias />
        </div>
      </div>

      <div id="content-home" className="content-container">
        <h1 className="content-container__title">Meurtre à O'Beach</h1>
        <div className="content-container__synopsis">
          <p>
            Invité par ton ex pour passer des vacances à la mer, tu te disputes
            avec elle en arrivant.
          </p>
          <p>
            Le lendemain elle est retrouvée morte. Et le seul suspect aux yeux
            de tous, c'est TOI.
          </p>
          <p>Comment prouveras tu ton innocence ...?</p>
        </div>

        <div className="content-container__start">
          <button className="content-container__playButtonClick" disabled>
            Jouer
          </button>
          <p className="content-container__message">Connecte-toi pour jouer</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
