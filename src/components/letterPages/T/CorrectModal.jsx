import React from "react";
import Next from "../T/Next";

const CorrectModal = ({ setOpenRightModal }) => {
  return (
    <div className="modalBackground">
      <div className="modal">
        <div className="body">
          <h1>Correct</h1>
        </div>
        <button onClick={() => setOpenRightModal(false)}>
          <Next />
        </button>
      </div>
    </div>
  );
};

export default CorrectModal;
