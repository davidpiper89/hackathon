import React from "react";
import Letter from "./Letter";
import Audio from "./Audio";
import GuessingImages from "./GuessingImages";
import "../Letters.css";

const Overview = () => {
  return (
    <>
      <div className="game-container">
        <div className="header">
          <Letter />

          <Audio />
        </div>
        <div className="body">
          <GuessingImages />
        </div>
      </div>
    </>
  );
};

export default Overview;
