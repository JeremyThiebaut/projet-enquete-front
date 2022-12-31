import React, { useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Selection = ({
  question,
  hide,
  toggleQuestionResponse,
  questionCounter,
}) => {
  // const [response, setResponse] = useState(0);
  // const [hide, setHide] = useState(true);

  // const toggleHide = (id) => {
  //   setHide(!hide);
  //   setResponse(id);
  // };

  console.log(question);
  return (
    <div className={`selection ${!hide && "selection_close"}`}>
      {/* {question.map((element, num) => { */}
      {/* return ( */}
      <div
        // key={element.id}
        className={!hide ? "select_close" : "select_open"}
      >
        <p
          className={`toggler ${!hide && "toggler_open"}`}
          onClick={toggleQuestionResponse}
          // onClick={() => {
          //   console.log(num);
          //   toggleHide(num);
          // }}
        >
          {question[questionCounter - 1].description}
        </p>
      </div>
      {/* ); */}
      {/* })} */}
      {!hide && (
        <div>
          <p>{question[questionCounter - 1].answer}</p>
          {/* <button onClick={toggleHide}>back</button> */}
        </div>
      )}
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
