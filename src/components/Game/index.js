import React from "react";
import "./style.scss";
import Tag from "../../containers/Tag";
import HeadBand from "../../containers/HeadBand";

const Game = ({ place }) => {
  return (
    <div className="game">
      <img
        className="picturesBack"
        src={place.placePicture}
        alt={place.placeName}
      />
      <Tag />
      <HeadBand />
    </div>
  );
};

export default Game;
