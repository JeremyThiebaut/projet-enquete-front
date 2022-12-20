import React from "react";
import "./style.scss";

const End = ({ storytelling }) => {
  let history = storytelling[0].sentence.split("\n");
  const newDiv = [];
  let ease = 0;
  history.forEach((element) => {
    newDiv.push(
      <p
        style={{
          animationDelay: `${ease}s`,
        }}
        className={`endedText`}
      >
        {element}
      </p>
    );
    ease += 6;
    console.log(newDiv);
  });

  return (
    <div className="end">
      <div className="resolution">{newDiv}</div>
    </div>
  );
};

export default End;
