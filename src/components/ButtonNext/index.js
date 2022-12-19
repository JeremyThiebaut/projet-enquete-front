import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./style.scss";

const ButtonNext = ({ next, hide }) => {
  return (
    <Link to={`/play`}>
      <div
        className={`buttonNext ${hide && "buttonNext_close"}`}
        type="button"
        onClick={next}
      >
        <Icon circular inverted color="grey" name="play" size="big" />
      </div>
    </Link>
  );
};

export default ButtonNext;
