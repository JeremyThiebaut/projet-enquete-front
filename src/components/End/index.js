import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

const End = ({ storytelling, replay }) => {
  let history = storytelling[0].sentence.split("\n");
  const newDiv = [];
  let ease = 0;

  history.forEach((element, index) => {
    newDiv.push(
      <p
        key={`finalText_${index}`}
        style={{
          animationDelay: `${ease}s`,
        }}
        className={`endedText`}
      >
        {element}
      </p>
    );
    ease += 6;
  });

  return (
    <div className="end">
      <div className="resolution">{newDiv} </div>

      <Link to={`/`}>
        <div className="replay" onClick={replay}>
          Rejouer
        </div>
      </Link>
    </div>
  );
};

End.propTypes = {
  storytelling: PropTypes.array.isRequired,
};

export default End;
