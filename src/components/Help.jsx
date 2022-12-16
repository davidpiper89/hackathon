import React from "react";
import { useState } from "react";
import "./HelpStyling.css";

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
        <h2> About the App</h2>
        <p>
          This app provides game based learning to encourage your children to
          learn to be enthusiastic on their journey of learning to read. This
          app is made to be accessible to children on a computer, phone or
          tablet. It is intuitive enough that children should be able to
          navigate it independently after one or two, but it is great for
          parents to play alongside their children to prompt, encourae and
          celebrate the child's success with them. For information on how you
          can support your child as they use this app, please see the "How Can I
          Help" section.
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
              These are the first phonemes your child will learn.
              <span>s</span>
              <br></br>
              <span>a</span>
              <br></br>
              <span>t</span>
              <br></br>
              <span>p</span>
            </p>
            <p>
              When your child begins Phase 3, they will start to learn about
              <span>digraphs,</span>these are two letters that create one sound.
            </p>
            <span>ai</span>
            <br></br>
            <span>ee</span>
            <br></br>
            <span>oa</span>
            <br></br>
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
              they see s, a, t, p, i and n. They will then develop their
              listening skills to be able to identify these phonemes as initial
              sounds in words.
            </p>
            <p>s for sun.</p>
            <p>a fro apple.</p>
            <button className="closeIS" onClick={handleCloseIs}>
              Close
            </button>
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
