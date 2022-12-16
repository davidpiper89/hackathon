import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ss from "./s.mp3";

const Audio = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faPlay} />
      <audio src={ss} alt="no player" />

    </div>
  );
};

export default Audio;
