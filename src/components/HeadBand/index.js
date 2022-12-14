import React from "react";
import "./style.scss";
import Selection from "../../containers/Selection";
import ButtonNext from "../../containers/ButtonNext";
import PropTypes from "prop-types";

const HeadBand = ({
  storytelling,
  storyCounter,
  shouldDisplayQuestion,
  shouldDisplayChapter,
  hide,
  load,
}) => {
  let storyFormated = storytelling[storyCounter - 1];
  return (
    <div>
      {shouldDisplayQuestion ? (
        <div>
          {!load && (
            <div className="headBand">
              <Selection />
              <ButtonNext hide={hide} />
            </div>
          )}
        </div>
      ) : (
        <div>
          {!load && (
            <div className="headBand">
              <div className="headBand__text">
                <p>{storyFormated.sentence}</p>
              </div>
              <div>{shouldDisplayChapter && <ButtonNext />}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

HeadBand.propTypes = {
  storytelling: PropTypes.array.isRequired,
  storyCounter: PropTypes.number.isRequired,
  shouldDisplayQuestion: PropTypes.bool.isRequired,
  shouldDisplayChapter: PropTypes.bool.isRequired,
  hide: PropTypes.bool.isRequired,
};

export default HeadBand;
