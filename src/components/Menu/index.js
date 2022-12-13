import React, { useRef } from "react";
import { Link } from "react-router-dom";
import soundFile from "../../audio/startGame.mp3";
import "./style.scss";

const Menu = ({ open, mute, onClickMute, onOpenMenu }) => {
  const audioRef = useRef(new Audio(soundFile));

  const play = () => {
    audioRef.current.play();
    onClickMute();
  };

  const pause = () => {
    audioRef.current.pause();
    onClickMute();
  };

  return (
    <div className="menuButton">
      <div className="menuButton__title" onClick={onOpenMenu}>
        Menu
      </div>
      {open && (
        <div className="menuButton__choice">
          <Link to="/">
            <button>Accueil</button>
          </Link>
          {mute ? (
            <button onClick={play}>play</button>
          ) : (
            <button onClick={pause}>pause</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
