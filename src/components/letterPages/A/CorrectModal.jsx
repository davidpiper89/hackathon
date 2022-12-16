import React from "react";

const CorrectModal = ({ setOpenRightModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <h1>Correct</h1>
        </div>
        <button onClick={() => setOpenRightModal(false)}> X </button>
      </div>
    </div>
  );
};

export default CorrectModal;
