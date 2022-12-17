import React from "react";
import "./style.scss";
import Selection from "../../containers/Selection";
import ButtonNext from "../ButtonNext";

const HeadBand = ({ sentence }) => {
  return (
    <div className="headBand">
      <div className="headBand__text">
        <p>{sentence}</p>
      </div>
      {/* <Selection /> */}
      <ButtonNext />
    </div>
  );
};

export default HeadBand;
