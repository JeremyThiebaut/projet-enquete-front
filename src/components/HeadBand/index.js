import React from "react";
import "./style.scss";
import Selection from "../../containers/Selection";
import ButtonNext from "../../containers/ButtonNext";

const HeadBand = ({ sentence, shouldDisplayQuestion }) => {
  return (
    <div>
      {shouldDisplayQuestion ? (
        <div className="headBand">
          <Selection />
          <ButtonNext />
        </div>
      ) : (
        <div className="headBand">
          <div className="headBand__text">
            <p>{sentence}</p>
          </div>
          <ButtonNext />
        </div>
      )}
    </div>
  );
};

export default HeadBand;
