import React from "react";
import { useState, useContext } from "react";

import scoreContext from "./Score";

const BlendingGame = () => {
  //words with options of pictures for children to match with
  const matches = () => {
    return [
      {
        id: 0,
        word: "sit",
        answers: [
          {
            optionImg: "sit",
            isCorrect: true,
          },
          {
            optionImg: "pat",
            isCorrect: false,
          },
          {
            optionImg: "tap",
            isCorrect: false,
          },
        ],
      },
      {
        id: 1,
        word: "tap",
        answers: [
          {
            optionImg: "pat",
            isCorrect: false,
          },
          {
            optionImg: "tap",
            isCorrect: true,
          },
          {
            optionInmg: "sip",
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        word: "sip",
        answers: [
          {
            optionImg: "pan",
            isCorrect: false,
          },
          {
            optionImg: "sip",
            isCorrect: true,
          },
          {
            optionImg: "pip",
            isCorrect: false,
          },
        ],
      },
      {
        id: 3,
        word: "pip",
        answers: [
          {
            optionImg: "pan",
            isCorrect: false,
          },
          {
            optionImg: "sit",
            isCorrect: false,
          },
          {
            optionImg: "pip",
            isCorrect: true,
          },
        ],
      },
      {
        id: 4,
        word: "pan",
        answers: [
          {
            optionImg: "pan",
            isCorrect: true,
          },
          {
            optionImg: "tap",
            isCorrect: false,
          },
          {
            optionImg: "pat",
            isCorrect: false,
          },
        ],
      },
    ].sort(() => Math.random());
  };

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
                    src={`../../public/images/options/${answers.optionImg}.png`}
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
