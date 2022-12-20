import React from "react";
import "./style.scss";
import Selection from "../../containers/Selection";
import ButtonNext from "../../containers/ButtonNext";

const HeadBand = ({
  storytelling,
  storyCounter,
  shouldDisplayQuestion,
  shouldDisplayChapter,
  hide,
}) => {
  let storyFormated = storytelling[storyCounter - 1];
  return (
    <div>
      {shouldDisplayQuestion ? (
        <div className="headBand">
          <Selection />
          <ButtonNext hide={hide} />
        </div>
      ) : (
        <div className="headBand">
          <div className="headBand__text">
            <p>{storyFormated.sentence}</p>
          </div>
          {shouldDisplayChapter && <ButtonNext />}
        </div>
      )}
    </div>
  );
};

export default HeadBand;
