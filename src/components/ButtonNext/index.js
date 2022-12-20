import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./style.scss";

const ButtonNext = ({ next, hide }) => {
  return (
    <div className="buttonNext_container">
      <Link className="buttonNext" to={`/play`}>
        <div
          className={`${hide && "buttonNext_close"}`}
          type="button"
          onClick={next}
        >
          <Icon circular inverted color="grey" name="play" size="big" />
        </div>
      </Link>
    </div>
  );
};

export default ButtonNext;
