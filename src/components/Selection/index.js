import React from "react";
import "./style.scss";

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

export default Selection;
