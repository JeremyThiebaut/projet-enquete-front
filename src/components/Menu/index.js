import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import soundFile from "../../audio/startGame.mp3";
import "./style.scss";

const Menu = () => {
  const [playing, setPlaying] = useState(true);
  const [open, setOpen] = useState(false);
  const audioRef = useRef(new Audio(soundFile));

  const tooglePlay = () => {
    setPlaying(!playing);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (playing) {
      setPlaying(true);
      audioRef.current.play();
    } else {
      setPlaying(false);
      audioRef.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    if (open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [open]);

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
