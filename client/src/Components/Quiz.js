import React, { useState } from "react";
import "./Quiz.css";
import questions from '../Data/QuizData';

export function Quiz() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));


  const optionClicked = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);

    if (option.isCorrect) {
      setScore(score + 1);
    }
    // if (currentQuestion + 1 < questions.length) {
    //   setCurrentQuestion(currentQuestion + 1);
    // }
  };

  const submitClicked = () => {
    setFinalResults(true);
  };

  // Restart Quiz
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
    setSelectedOptions([]);
  };

  return (
    <div className="App">
      {showFinalResults ? (
        <div className="final-results">
          <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" width="80px" height="80px" alt="img2" />
          <h2> You have successfully submitted the assignment </h2>
          <p> <b>Question asked :</b> {questions.length}</p>
          <p> <b>Question correct :</b> {score}</p>
          <p> <b>Your Score : </b>{((score / questions.length) * 100).toFixed(2)} %</p>
          <button onClick={() => restartGame()}> Restart Quiz </button>
        </div>
      ) : (
        <div className="row p-3">
          <div className="col-md-6 question-card p-3">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            </div>

            <div>
              {questions.map((question, index) => (
                <div key={index}>
                  <h4 className="question-text p-3">
                    Q. {index + 1}. {question.text}
                  </h4>
                  <ul>
                    <div className="justify-content-md-end">
                      {question.options.map((option) => (
                        <li
                          onClick={() => optionClicked(option)}
                          key={option.id}
                          className={
                            selectedOptions[index] === option
                              ? "selected-option"
                              : ""
                          }>
                          {option.text}
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              ))}
            </div>

            {/* {currentQuestion === questions.length - 1 && ( */}
              <button
                className="ms-md-4 d-flex text-light btn btn-success"
                onClick={() => submitClicked()}
              >
                Submit
              </button>
            {/* )} */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
