import React from "react";
import "./style.scss";
import Tag from "../../containers/Tag";
import HeadBand from "../../containers/HeadBand";
import End from "../../containers/End";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../Loading";

const Game = ({
  load,
  place,
  isLogged,
  character,
  question,
  questionCounter,
  shouldDisplayQuestion,
  shouldDisplayChapter,
  updateLoad,
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
  // console.log("char:", characterToDisplay);
  return (
    <div>
      {!load && !updateLoad && characterToDisplay !== "undefined" ? (
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
      ) : (
        <div className="game_onLoad">
          <Loading />
        </div>
      )}
    </div>
  );
};

Game.propTypes = {
  place: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  character: PropTypes.array.isRequired,
  question: PropTypes.array.isRequired,
  questionCounter: PropTypes.number.isRequired,
  shouldDisplayQuestion: PropTypes.bool.isRequired,
  shouldDisplayChapter: PropTypes.bool.isRequired,
};

export default Game;
