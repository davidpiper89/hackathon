import { useContext } from "react";
import { scoreContext } from "./Score";

const Score = () => {
  const [score] = useContext(scoreContext);

  return (
    <div>
      <div className="scoreDisplay">{score}</div>
    </div>
  );
};
