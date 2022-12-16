import React from "react";

const Modal = ({ setOpenWrongModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <h1>Incorrect</h1>
        </div>
        <button onClick={()=> setOpenWrongModal(false)}> X </button>
      </div>
    </div>
  );
};

export default Modal;
