import React from "react";
import ss from "./s.mp3";
import ReactAudioPlayer from "react-audio-player";

const Audio = () => {
  return <ReactAudioPlayer src={ss} onPlay controls />;
};

export default Audio;
