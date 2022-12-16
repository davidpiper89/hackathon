import React from "react";
import image1 from "./pizza.png";
import image2 from "./whale.png";
import image3 from "./cat.png";
import IncorrectModal from "../../../modals/IncorrectModal";
import CorrectModal from "../../../modals/CorrectModal";
import { useState } from "react";

const GuessingImages = () => {
  const [openWrongModal, setOpenWrongModal] = useState(false);
  const [openRightModal, setOpenRightModal] = useState(false);

  // const wrong = () => {};

  return (
    <>
      <div className="openWrong">
        <img
          src={image1}
          alt="no work"
          width="100px"
          onClick={() => setOpenRightModal(true)}
        ></img>
      </div>

      <div className="openWrong">
        <img
          src={image2}
          alt="no work"
          width="100px"
          onClick={() => setOpenWrongModal(true)}
        ></img>
      </div>
      <div className="openRight">
        <img
          src={image3}
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
