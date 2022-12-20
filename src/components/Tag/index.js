import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Tag = ({ character, placeName, shouldDisplayQuestion }) => {
  return (
    <div className="tag">
      {shouldDisplayQuestion ? <h2>{character}</h2> : <h2>{placeName}</h2>}
    </div>
  );
};

Tag.propTypes = {
  character: PropTypes.string,
  placeName: PropTypes.string,
  shouldDisplayQuestion: PropTypes.bool.isRequired,
};

export default Tag;
