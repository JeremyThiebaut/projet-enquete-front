import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
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

Alias.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Alias;
