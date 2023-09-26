import React from 'react';

const Adetails = ({ testScore, analysis }) => {
  const sampleData = {
    testScore: 85,
    analysis:
      "Your answers suggest you are suffering from moderate to severe depression. It doesn't necessarily mean you have depression but is important that you schedule an appointment with your doctor or a mental health worker. Alternatively, you can also join streak to improve your mental health. If you need help finding a mental health assistance, we suggest that you try out recommended activities on our website.",
  };

  const textStyle = {
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    color: '#555',
    fontSize: '16px',
    lineHeight: '1.5',
  };

  const boldStyle = {
    fontWeight: 'bold', // Make the text bold
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    color: '#555',
    fontSize: '16px',
    lineHeight: '1.5',
  };

  return (
    <div>
      <h2>
        <span style={boldStyle}>Test Score:</span> {sampleData.testScore}
      </h2>
      <p style={textStyle}>Analysis: {sampleData.analysis}</p>
    </div>
  );
};

export default Adetails;
