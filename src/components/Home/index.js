import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import PropTypes from "prop-types";

const Home = ({ isLogged, onClickPlay }) => {
  onClickPlay();
  return (
    <div className="home">
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
        {isLogged ? (
          <Link to={"/play"}>
            <div className="content-container__start">
              <button
                className="content-container__playButtonClick"
                onClick={onClickPlay}
              >
                Jouer
              </button>
            </div>
          </Link>
        ) : (
          <div className="content-container__start">
            <button className="content-container__playButtonClick" disabled>
              Jouer
            </button>
            <p className="content-container__message">
              Connecte-toi pour jouer
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  onClickPlay: PropTypes.func.isRequired,
};

export default Home;
