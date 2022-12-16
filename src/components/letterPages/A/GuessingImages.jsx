import React from "react";
import apple1 from "./donut.png";
import apple2 from "./Apple.png";
import apple3 from "./lemon.png";
import IncorrectModal from "../../../modals/IncorrectModal";
import CorrectModal from "../../../modals/CorrectModal";
import { useState } from "react";

const GuessingImages = () => {
  const [openWrongModal, setOpenWrongModal] = useState(false);
  const [openRightModal, setOpenRightModal] = useState(false);

  // const wrong = () => {};

  return (
    <>
      <div className="guessing-images-container">
        <div className="openWrong">
          <img
            className="guessing-images"
            src={apple1}
            alt="no work"
            width="100px"
            onClick={() => setOpenWrongModal(true)}
          ></img>
        </div>

        <div className="openRight">
          <img
            className="guessing-images"
            src={apple2}
            alt="no work"
            width="100px"
            onClick={() => setOpenRightModal(true)}
          ></img>
        </div>
        <div className="openWrong">
          <img
            className="guessing-images"
            src={apple3}
            alt="no work"
            width="100px"
            onClick={() => setOpenWrongModal(true)}
          ></img>
        </div>
      </div>
      <div className="modal-container">
        {openWrongModal && (
          <IncorrectModal setOpenWrongModal={setOpenWrongModal} />
        )}
        {openRightModal && (
          <CorrectModal setOpenRightModal={setOpenRightModal} />
        )}
      </div>
    </>
  );
};

export default GuessingImages;