import React from "react";
import Letter from "./Letter";
import Video from "./Video";
import Audio from "./Audio";
import GuessingImages from "./GuessingImages";
import Next from "./Next";
import "../Letters.css";

const Overview = () => {
  return (
    <>
      <div className="game-container">
        <div className="header">
          <Letter />
          <Audio />
          <Video />
        </div>
        <div className="body">
          <GuessingImages />
        </div>
      </div>
      <div className="footer">
        <Next />
      </div>
    </>
  );
};

export default Overview;
