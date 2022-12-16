import React from "react";
import snake1 from "./snake-pic.png";
import snake2 from "./snake-pic.png";
import snake3 from "./snake-pic.png";
import IncorrectModal from "./IncorrectModal";
import CorrectModal from "./CorrectModal";
import { useState } from "react";

const GuessingImages = () => {
  const [openWrongModal, setOpenWrongModal] = useState(false);
  const [openRightModal, setOpenRightModal] = useState(false);

  const wrong = () => {};

  return (
    <>
      <div className="openWrong">
        <img
          src={snake1}
          alt="no work"
          width="100px"
          onClick={() => setOpenWrongModal(true)}
        ></img>
      </div>

      <div className="openWrong">
        <img
          src={snake2}
          alt="no work"
          width="100px"
          onClick={() => setOpenWrongModal(true)}
        ></img>
      </div>
      <div className="openRight">
        <img
          src={snake3}
          alt="no work"
          width="100px"
          onClick={() => setOpenRightModal(true)}
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
