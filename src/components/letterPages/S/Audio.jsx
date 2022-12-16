import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ss from "./s.mp3";

const Audio = () => {
  return (
    <div>
      <FontAwesomeIcon icon="fa-solid fa-play" />

      <audio src={ss} alt="no player" />
    </div>
  );
};

export default Audio;
