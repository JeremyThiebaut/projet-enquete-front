import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const End = ({ storytelling }) => {
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
      <div className="resolution">{newDiv}</div>
    </div>
  );
};

End.propTypes = {
  storytelling: PropTypes.array.isRequired,
};

export default End;
