import React from "react";
import pp from "./p.mp3";
import ReactAudioPlayer from "react-audio-player";

const Audio = () => {
  return <ReactAudioPlayer src={pp} onPlay controls />;
};

export default Audio;
