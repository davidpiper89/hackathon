import React from "react";
import ii from "./i.mp3";
import ReactAudioPlayer from "react-audio-player";

const Audio = () => {
  return <ReactAudioPlayer src={ii} onPlay controls />;
};

export default Audio;
