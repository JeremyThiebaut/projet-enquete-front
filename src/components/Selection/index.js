import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Selection = ({
  question,
  hide,
  toggleQuestionResponse,
  questionCounter,
}) => {
  return (
    <div className="selection">
      <p
        className={`toggler ${!hide && "toggler_open"}`}
        onClick={toggleQuestionResponse}
      >
        {question[questionCounter - 1].description}
      </p>
      {!hide && <p>{question[questionCounter - 1].answer}</p>}
    </div>
  );
};

Selection.propTypes = {
  question: PropTypes.array.isRequired,
  hide: PropTypes.bool.isRequired,
  toggleQuestionResponse: PropTypes.func.isRequired,
  questionCounter: PropTypes.number.isRequired,
};

export default Selection;
