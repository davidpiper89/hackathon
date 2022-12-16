import React from "react";
import { useState, useContext } from "react";
import sit from "./sit.png";
import pat from "./pat.png";
import tap from "./tap.png";
import pan from "./pan.png";
import sip from "./sip.png";
import pip from "./pip.png";
import scoreContext from "./Score";

const BlendingGame = () => {
  //words with options of pictures for children to match with
  const matches = [
    {
      id: 0,
      word: "sit",
      answers: [
        {
          optionImg: <img src={sit} alt="sit"></img>,
          isCorrect: true,
        },
        {
          optionImg: <img src={pat} alt="pat"></img>,
          isCorrect: false,
        },
        {
          optionImg: <img src={tap} alt="tap"></img>,
          isCorrect: false,
        },
      ],
    },
    {
      id: 1,
      word: "tap",
      answers: [
        {
          optionImg: <img src={pat} alt="pat"></img>,
          isCorrect: false,
        },
        {
          optionImg: <img src={tap} alt="tap"></img>,
          isCorrect: true,
        },
        {
          optionImg: <img src={sip} alt="sip"></img>,
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      word: "sip",
      answers: [
        {
          optionImg: <img src={pan} alt="pan"></img>,
          isCorrect: false,
        },
        {
          optionImg: <img src={sip} alt="sip"></img>,
          isCorrect: true,
        },
        {
          optionImg: <img src={pip} alt="pip"></img>,
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      word: "pip",
      answers: [
        {
          optionImg: <img src={pan} alt="pan"></img>,
          isCorrect: false,
        },
        {
          optionImg: <img src={sit} alt="sit"></img>,
          isCorrect: false,
        },
        {
          optionImg: <img src={pip} alt="pip"></img>,
          isCorrect: true,
        },
      ],
    },
    {
      id: 4,
      word: "pan",
      answers: [
        {
          optionImg: <img src={pan} alt="pan"></img>,
          isCorrect: true,
        },
        {
          optionImg: <img src={tap} alt="tap"></img>,
          isCorrect: false,
        },
        {
          optionImg: <img src={pat} alt="pat"></img>,
          isCorrect: false,
        },
      ],
    },
  ].sort(() => Math.random());

  const [questions, setQuestions] = useState(matches);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState();
  //share values without having to pass through every level
  const incrementalScore = useContext(scoreContext);
  const [gameComplete, setGameComplete] = useState(false);
  const [noNext, setNoNext] = useState(true);

  const play = () => {
    setGameComplete(false);
    setCurrentQuestion(0);
    setQuestions(matches);
  };

  const handleClickToNext = () => {
    setAnswered();
    setNoNext(true);
    const nextQ = currentQuestion + 1;
    if (nextQ < questions.length) {
      setCurrentQuestion(nextQ);
    } else {
      setGameComplete(true);
      incrementalScore();
    }
  };

  const onAnswer = (isCorrect) => {
    const correctAnswer = "Correct";
    const incorrectAnswer = "Incorrect";
    if (isCorrect === true) {
      setNoNext(false);
      setAnswered(correctAnswer);
    } else {
      setAnswered(incorrectAnswer);
      setTimeout(() => {
        setAnswered("");
      }, 5000);
    }
  };

  const goHome = () => {
    window.location = "/";
  };

  return (
    <div className="container">
      {gameComplete ? (
        <div className="goodJob">
          <h1>Well Done!</h1>
          <button className="homeBtn" onClick={goHome}>
            Home
          </button>
          <button className="playAgain" onClick={play}>
            Play
          </button>
        </div>
      ) : (
        <>
          <div className="gameContainer">
            <div>{questions[currentQuestion].word}</div>
          </div>
          <div className="options">
            {questions[currentQuestion].answers.map((answers, index) => {
              return (
                <div
                  className="picToRead"
                  onClick={() => onAnswer(answers.isCorrect)}
                >
                  <img
                    className="optionImg"
                    src={`${answers}`}
                    alt="pictures"
                  />
                </div>
              );
            })}
          </div>
          <p className="answeredorunanswered">{answered}</p>
          <button
            className="nextBtn"
            onClick={handleClickToNext}
            disabled={noNext}
          ></button>
        </>
      )}
    </div>
  );
};
export default BlendingGame;
