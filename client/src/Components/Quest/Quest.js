import React from "react";

export function Quest(props) {
    
  function styler(option, index) {
      return props.question.selected_answer === index
        ? { backgroundColor: "#D6DBF5" }
        : { backgroundColor: "#F5F7FB" };
  }

  const options = props.question.options.map((option, index) => (
    <button
      key={index}
      dangerouslySetInnerHTML={{ __html: option.text }}
      onClick={(event) => props.selectAnswer(event, props.id, index)}
      style={styler(option, index)}
      disabled={props.showAnswers}
      className="quiz-container-question-options-container-option"
    />
  ));

  return (
    <div className="quiz-container-question">
      <h1
        className="quiz-container-question-title"
        dangerouslySetInnerHTML={{ __html: props.question.question }}
      />
      <div className="quiz-container-question-options-container">{options}</div>
      <hr className="quiz-container-question-divider" />
    </div>
  );
}
