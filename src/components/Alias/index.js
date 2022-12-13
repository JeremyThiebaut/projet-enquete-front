import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.scss";

const Alias = () => {
  return (
    <div className="alias">
      <div className="alias-content">
        <Link to={`/logon`}>
          <span className="alias-content__inscription">Inscription</span>
        </Link>
        |
        <Link to={`/login`}>
          <span className="alias-content__connexion">Connexion</span>
        </Link>
      </div>
    </div>
  );
};

export default Alias;
