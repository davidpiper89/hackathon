import React from "react";

const CorrectModal = ({ setOpenRightModal }) => {
  return (
    <div className="modalBackground">
      <div className="modal-box">
        <div className="body">
          <h1>Correct</h1>
        </div>
        <button class="modal-button" onClick={() => setOpenRightModal(false)}>
          X
        </button>
      </div>
    </div>
  );
};

export default CorrectModal;
