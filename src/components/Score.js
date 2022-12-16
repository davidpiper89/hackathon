import React, { createContext } from "react";

export const scoreContext = createContext();

const ScoreCount = (props) => {
  const [score, setScore] = () => {
    if (score > 0) {
      return score;
    } else {
      return 0;
    }
  };

  const addToScore = () => {
    const addPoints = score + 1;
    localStorage.setItem("score", addPoints);
    setScore(addPoints);
  };

  return (
    <scoreContext.Provider value={[score, addToScore]}>
      {props.children}
    </scoreContext.Provider>
  );
};

export default ScoreCount;
