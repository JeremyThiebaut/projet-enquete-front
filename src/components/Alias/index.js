import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./style.scss";

const Alias = ({ isLogged, pseudo, handleLogout }) => {
  return (
    <div className="alias">
      {isLogged ? (
        <div className="alias-content">
          <span className="alias-content__pseudo">
            {pseudo} <Icon name="user" />
          </span>
          |
          <span className="alias-content__decoButton" onClick={handleLogout}>
            Déconnexion
          </span>
        </div>
      ) : (
        <div className="alias-content">
          <Link to={`/logon`}>
            <span className="alias-content__inscription">Inscription</span>
          </Link>
          |
          <Link to={`/login`}>
            <span className="alias-content__connexion">Connexion</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Alias;
