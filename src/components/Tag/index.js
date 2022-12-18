import React from "react";
import "./style.scss";

const Tag = ({ character, placeName, shouldDisplayQuestion }) => {
  return (
    <div className="tag">
      {shouldDisplayQuestion ? <h2>{character}</h2> : <h2>{placeName}</h2>}
    </div>
  );
};

export default Tag;
