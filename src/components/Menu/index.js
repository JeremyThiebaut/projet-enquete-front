import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import soundFileHome from "../../audio/startGame.mp3";
import soundFilePlay from "../../audio/game_boucle.mp3";
import "./style.scss";

const Menu = () => {
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const audioHome = useRef(new Audio(soundFileHome));
  const audioPlay = useRef(new Audio(soundFilePlay));

  const tooglePlay = () => {
    setPlaying(!playing);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (playing && (path === "/" || path === "/logon" || path === "/login")) {
      audioPlay.current.load();
      audioHome.current.play();
      audioPlay.current.pause();
    } else if (playing && path === "/play") {
      audioHome.current.load();
      audioHome.current.pause();
      audioPlay.current.play();
    } else {
      audioHome.current.pause();
      audioPlay.current.pause();
    }

    if (open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [playing, path, open]);

  return (
    <div className="menuButton">
      <div className="menuButton__title" onClick={toggleOpen}>
        Menu
      </div>
      {open && (
        <div className="menuButton__choice">
          <Link to="/">
            <button>Accueil</button>
          </Link>
          <button onClick={tooglePlay}>{!playing ? "play" : "pause"}</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
