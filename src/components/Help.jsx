import React from "react";
import { useState } from "react";

const Help = () => {
  const [isShownPhonics, setIsShownPhonics] = useState(false);
  const [isShownInitialSounds, setIsShownInitialSounds] = useState(false);
  const [isShownHelp, setIsShownHelp] = useState(false);

  const handleClickPh = (e) => {
    setIsShownPhonics(true);
  };
  const handleClickIs = (e) => {
    setIsShownInitialSounds(true);
  };
  const handleClickHelp = (e) => {
    setIsShownHelp(true);
  };
  const handleClosePh = (e) => {
    setIsShownPhonics(false);
  };
  const handleCloseIs = (e) => {
    setIsShownInitialSounds(false);
  };
  const handleCloseHowToHelp = (e) => {
    setIsShownHelp(false);
  };

  return (
    <div className="mainContainer">
      <div className="helpHeader"></div>
      <div className="mainContent">
        <h1>Title</h1>
        <h2>Parent Information</h2>
        <p>
          Supporting your child in learning to read is one of the most amazing
          things you will ever do. It can be intimidating to have to approach
          this in a way that you were not taught in school. Here, you will find
          lots of information about phonics and how you can use these games to
          teach children to read.
        </p>
        <button className="whatIsPhonicsBtn" onClick={handleClickPh}>
          What is Phonics?
        </button>
        {isShownPhonics && (
          <>
            <h3>What is Phonics?</h3>
            <p>
              Phonics is a way of teaching children how to read by teaching them
              the sounds of each individual letter and the sounds made by
              combinations of different letters. You may notice that phonics
              sounds are different to the alphabet.
            </p>
            <p>
              The soudns made by these letters are called <span>phonemes.</span>
              These are the first phonemes your child will learn.<span>s</span>
              <span>a</span>
              <span>t</span>
              <span>p</span>
            </p>
            <p>
              {" "}
              When your child begins Phase 3, they will start to learn about{" "}
              <span>digraphs,</span>these are two letters that create one sound.
            </p>
            <span>ai</span>
            <span>ee</span>
            <span>oa</span>
            <span>ur</span>
            <button className="closePhonics" onClick={handleClosePh}>
              Close
            </button>
          </>
        )}

        <button className="initialSoundsBtn" onClick={handleClickIs}>
          Initial Sounds
        </button>
        {isShownInitialSounds && (
          <>
            <h3>Initial Sounds</h3>
            <p>
              Your child will start by learning to say the correct phoneme when
              they see s, a t, p, i and n. They will then develop their
              listening skills to be able to identify these phonemes as initial
              sounds in words.
            </p>
            <p>
              <span> s</span> for <span>sun.</span>
            </p>
            <p>
              <span>a</span>for <span>apple. </span>
            </p>
            <button onClick={handleCloseIs}>Close</button>
          </>
        )}
        <button className="canIHelpBtn" onClick={handleClickHelp}>
          How Can I Help?
        </button>
        {isShownHelp && (
          <>
            <h3>How can I help?</h3>
            <ul>
              <li>Support your child by playing the game with them.</li>
              <li>
                When the <span>grapheme</span>appears on screen, encourage your
                child to say the phoneme before pressing the sound button to see
                if they were correct.
              </li>
              <li>Ask your child to tell you what each of the pictures is.</li>
              <li>
                Repeat the name of each picture slowly, emphasising the initial
                sound.
              </li>
              <li>
                Prompt your child to select the picture that corresponds with
                the phoneme they have heard.
              </li>
            </ul>
            <button className="closeHowToHelp" onClick={handleCloseHowToHelp}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Help;
