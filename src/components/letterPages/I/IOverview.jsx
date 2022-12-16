import React from "react";
import Letter from "./Letter";
import Video from "./Video";
import GuessingImages from "./GuessingImages";
import Next from "./Next";
import "../Letters.css";
import Audio from "./Audio"

const Overview = () => {
  return (
    <div>
      <div className="header">
        <Letter />
        <Audio />
        <Video />
      </div>
      <div className="body">
        <GuessingImages />
      </div>
      <div className="footer">
        <Next />
      </div>
    </div>
  );
};

export default Overview;
