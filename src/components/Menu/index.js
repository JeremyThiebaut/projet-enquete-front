import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Menu = () => {
  return (
    <div>
      <div className="menuButton">
        Menu
        <div className="buttonOnMenu">
          <Link to="/">
            <button>Accueil</button>
          </Link>
          <button>Mute</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
