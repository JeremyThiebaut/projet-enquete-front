import React from "react";
import "./style.scss";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>404</h2>
      <p className="notFound-text">Désolé, cette page n'existe pas</p>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/432/592/854/website-link-zelda-the-legend-of-zelda-wallpaper-preview.jpg"
        alt="logo not found"
      />
    </div>
  );
};
export default NotFound;
