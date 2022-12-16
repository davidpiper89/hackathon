import React from "react";
import apple1 from "./donut.png";
import apple2 from "./Apple.png";
import apple3 from "./lemon.png";
import IncorrectModal from "../../../modalFolder/IncorrectModal";
import CorrectModal from "../../../modalFolder/CorrectModal";
import { useState } from "react";

const GuessingImages = () => {
  const [openWrongModal, setOpenWrongModal] = useState(false);
  const [openRightModal, setOpenRightModal] = useState(false);

  // const wrong = () => {};

  return (
    <>
      <div className="openWrong">
        <img
          src={apple1}
          alt="no work"
          width="100px"
          onClick={() => setOpenWrongModal(true)}
        ></img>
      </div>

      <div className="openWrong">
        <img
          src={apple2}
          alt="no work"
          width="100px"
          onClick={() => setOpenRightModal(true)}
        ></img>
      </div>
      <div className="openRight">
        <img
          src={apple3}
          alt="no work"
          width="100px"
          onClick={() => setOpenWrongModal(true)}
        ></img>
      </div>
      {openWrongModal && (
        <IncorrectModal setOpenWrongModal={setOpenWrongModal} />
      )}
      {openRightModal && <CorrectModal setOpenRightModal={setOpenRightModal} />}
    </>
  );
};

export default GuessingImages;
