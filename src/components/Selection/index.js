import React from "react";
import "./style.scss";

const Selection = ({ question }) => {
  console.log("question:", question.description);
  console.log("reponse:", question.answer);
  return (
    <div className="selection">
      <p className="">{question.description}</p>
    </div>
  );
};

export default Selection;
