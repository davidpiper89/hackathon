import React from "react";
import Letter from "./Letter";
import Audio from "./Audio";
import LetterImage from "./LetterImage";
import GuessingImages from "./GuessingImages";
import Next from "./Next";
import "../Letters.css";

const Overview = () => {
  return (
    <div className="container">
      <div className="header">
        <Letter />

        <Audio />
      </div>
      <div className="body">
        <LetterImage />

        <GuessingImages />
      </div>
      <div className="footer">{/* <Next />  */}</div>
    </div>
  );
};

export default Overview;
