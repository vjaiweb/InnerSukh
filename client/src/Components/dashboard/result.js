import React, { useState, useEffect } from 'react';

const ResultComponent = ({ quizResult }) => {
  const { title, score } = quizResult;

  const [backgroundColor, setBackgroundColor] = useState('#f0f0f0');
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor,
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
  };

  const h2Style = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const pStyle = {
    fontSize: '18px',
  };

  const getRandomBrightColor = () => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, ${Math.floor(
      Math.random() * 21 + 80
    )}%)`;
    return randomColor;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const colorTimer = setInterval(() => {
      const randomColor = getRandomBrightColor();
      setBackgroundColor(randomColor);
    }, 10000);

    return () => clearInterval(colorTimer);
  }, []);

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 style={h2Style}>{title}</h2>
      <p style={pStyle}>Your Score: {score}</p>
    </div>
  );
};

const QuizResult = () => {
  // Sample quiz results data
  const quizResults = [
    { title: 'Anxiety Quiz', score: 20 },
    { title: 'Depression Quiz', score: 31 },
    { title: 'Addiction Quiz', score: 25 },
    { title: 'Youth Mental Health Quiz', score: 22 }
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };

  return (
    <div style={containerStyle}>
      {quizResults.map((quizResult, index) => (
        <ResultComponent key={index} quizResult={quizResult} />
      ))}
    </div>
  );
};

export default QuizResult;
