import React from "react";
import aa from "./a.mp3";
import ReactAudioPlayer from "react-audio-player";

const Audio = () => {
  return <ReactAudioPlayer src={aa} onPlay controls />;
};

export default Audio;
