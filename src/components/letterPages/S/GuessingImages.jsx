import React from "react";
import snake1 from "./snake-pic.png";
import snake2 from "./snake-pic.png";
import snake3 from "./snake-pic.png";

const GuessingImages = () => {

const wrong = () => {
  
}

  return (
    <>
      <div className="openWrong">
        <img src={snake1} alt="no work" width="100px" onClick={() => wrong}></img>
      </div>
      <div className="openWrong">
        <img src={snake2} alt="no work" width="100px"></img>
      </div>
      <div className="openRight">
        <img src={snake3} alt="no work" width="100px"></img>
      </div>
    </>
  );
};

export default GuessingImages;
