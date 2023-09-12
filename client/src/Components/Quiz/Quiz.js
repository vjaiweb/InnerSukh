import React, { useState } from "react";
import "./Quiz.css";
import AnxietyQues from "../../Data/AnxietyQuizData";
import DepressionQues from "../../Data/DepressionQuizData";
import AddictionQues from "../../Data/AddictionQuizData";
import YouthMentalQues from "../../Data/YouthMentalQuizData";
import { Quest } from "../Quest/Quest";

export function Quiz(props) {
  const [showStart, setShowStart] = React.useState(true);
  const [score, setScore] = React.useState(0);
  const [showAnswers, setShowAnswers] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [allComplete, setAllComplete] = React.useState(false);
  let type 
  // function startQuiz() {
  //   setShowStart(false);
  // }


  function submit() {
    setShowAnswers(true);
  }

  function match(){
    if(props.type === "anxiety") type = AnxietyQues
    if(props.type === "depression") type = DepressionQues
    if(props.type === "addiction") type = AddictionQues
    if(props.type === "youth") type = YouthMentalQues
  }

  function selectAnswer(event, quest_id, option_id) {
    setQuestions(function (prev) {
      return questions.map(function (quest, qid) {
        if (quest_id === qid) {
          return { ...quest, selected_answer: option_id };
        } else {
          return quest;
        }
      });
    });
  }

  React.useEffect(() => {
    var count = 0;
    for (var i = 0; i < questions.length; i++) {
      if (typeof questions[i].selected_answer !== "undefined") {
          count+=questions[i].options[questions[i].selected_answer].id;
      }
    }
    setScore(count);
  }, [showAnswers]);

  React.useEffect(() => {
    // if (showStart === true) {
      // alert("Answer Carefully!!")
      match();
        setQuestions(
          type.map(function (question) {
            return {
              question: question.text,
              options: question.options,
              selected_answer: undefined,
              // correct_answer: selected_answer,
            };
          })
        );
    // }
  }, [showStart]);
  

  React.useEffect(() => {
    setAllComplete(
      questions.every((quest) => typeof quest.selected_answer !== "undefined")
    );
  }, [questions]);

  const quests = questions.map(function (question, index) {
    return (
      <Quest
        key={index}
        question={question}
        showAnswers={showAnswers}
        selectAnswer={selectAnswer}
        id={index}
      />
    );
  });

  return (
    <div className="app">
      {/* {showStart ? <Start startQuiz={startQuiz}/> :  */}
      <div className="row p-3">
      <div className="col-md-7 question-card p-3">
      <div className="quiz-container">
        {quests}
        {showAnswers ? (
          <div className="button-container">
            <h3 className="button-container-score">
              {"You scored " + score + "/40 correct answers"}
            </h3>
          </div>
        ) : (
          <button
            className="button"
            disabled={!allComplete}
            onClick={submit}
          >
            Submit
          </button>
        )}
      </div>
      </div>
      </div>
      {/* } */}
      {/* <img className='blob1' src={blob} alt=''/>
    <img className='blob2' src={blob} alt=''/> */}
    </div>
  );
}

// export function Quiz() {
//   const [showFinalResults, setFinalResults] = useState(false);
//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));

//   const optionClicked = (option) => {
//     const updatedOptions = [...selectedOptions];
//     updatedOptions[currentQuestion] = option;
//     setSelectedOptions(updatedOptions);

//     if (option.isCorrect) {
//       setScore(score + 1);
//     }
//     // if (currentQuestion + 1 < questions.length) {
//     //   setCurrentQuestion(currentQuestion + 1);
//     // }
//   };

//   const submitClicked = () => {
//     setFinalResults(true);
//   };

//   // Restart Quiz
//   const restartGame = () => {
//     setScore(0);
//     setCurrentQuestion(0);
//     setFinalResults(false);
//     setSelectedOptions([]);
//   };

//   return (
//     <div className="App">
//       {showFinalResults ? (
//         <div className="final-results">
//           <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" width="80px" height="80px" alt="img2" />
//           <h2> You have successfully submitted the assignment </h2>
//           <p> <b>Question asked :</b> {questions.length}</p>
//           <p> <b>Question correct :</b> {score}</p>
//           <p> <b>Your Score : </b>{((score / questions.length) * 100).toFixed(2)} %</p>
//           <button onClick={() => restartGame()}> Restart Quiz </button>
//         </div>
//       ) : (
//         <div className="row p-3">
//           <div className="col-md-6 question-card p-3">
//             <div className="d-grid gap-2 d-md-flex justify-content-md-end">
//             </div>

//             <div>
//               {questions.map((question, index) => (
//                 <div key={index}>
//                   <h4 className="question-text p-3">
//                     Q. {index + 1}. {question.text}
//                   </h4>
//                   <ul>
//                     <div className="justify-content-md-end">
//                       {question.options.map((option) => (
//                         <li
//                           onClick={() => optionClicked(option)}
//                           key={option.id}
//                           className={
//                             selectedOptions[index] === option
//                               ? "selected-option"
//                               : ""
//                           }>
//                           {option.text}
//                         </li>
//                       ))}
//                     </div>
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             {/* {currentQuestion === questions.length - 1 && ( */}
//               <button
//                 className="ms-md-4 d-flex text-light btn btn-success"
//                 onClick={() => submitClicked()}
//               >
//                 Submit
//               </button>
//             {/* )} */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

export default Quiz;
