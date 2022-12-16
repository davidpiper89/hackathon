import React from "react";
import tt from "./t.mp3";
import ReactAudioPlayer from "react-audio-player";

const Audio = () => {
  return <ReactAudioPlayer src={tt} onPlay controls />;
};

export default Audio;
