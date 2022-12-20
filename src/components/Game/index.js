import React from "react";
import "./style.scss";
import Tag from "../../containers/Tag";
import HeadBand from "../../containers/HeadBand";
import End from "../../containers/End";
import { Navigate } from "react-router-dom";

const Game = ({
  place,
  isLogged,
  character,
  question,
  questionCounter,
  shouldDisplayQuestion,
  shouldDisplayChapter,
}) => {
  if (!isLogged) {
    return <Navigate replace to="/" />;
  }

  let characterToDisplay = {};

  if (shouldDisplayQuestion) {
    characterToDisplay = character.find((char) => {
      return (
        char["character.id"] === question[questionCounter - 1].character_id
      );
    });
  }

  return (
    <div className="game">
      {shouldDisplayChapter ? (
        <div>
          <img
            className="picturesBack"
            src={place.placePicture}
            alt={place.placeName}
          />
          <Tag character={characterToDisplay["character.name"]} />
          <HeadBand />
          {shouldDisplayQuestion && (
            <img
              className="character"
              src={characterToDisplay["character.picture"]}
              alt={characterToDisplay["character.name"]}
            />
          )}
        </div>
      ) : (
        <End />
      )}
    </div>
  );
};

export default Game;
