import React, { useState } from 'react';
import './Day.css';

function Day({ dayNumber, onTaskCompletion }) {
  const [isMeditationClicked, setIsMeditationClicked] = useState(false);
  const [isGratitudeClicked, setIsGratitudeClicked] = useState(false);
  const [isAffirmationClicked, setIsAffirmationClicked] = useState(false);

  const handleMeditationClick = () => {
    setIsMeditationClicked(true);
    onTaskCompletion('Meditation');
  };
  
  const handleGratitudeClick = () => {
    setIsGratitudeClicked(true);
    onTaskCompletion('Gratitude');
  };
  
  const handleAffirmationClick = () => {
    setIsAffirmationClicked(true);
    onTaskCompletion('Affirmation');
  };
  

  const numClicked =
    (isMeditationClicked ? 1 : 0) +
    (isGratitudeClicked ? 1 : 0) +
    (isAffirmationClicked ? 1 : 0);

  return (
    <div className={`day-tile`}>
      <div className='day-header'>
        <span className='day-title'>Day {dayNumber}</span>
      </div>
      <div className='day-content'>
        <div className='task-container'>
          <div className='task'>
            <span className='task-title'>Meditation</span>
            <button
              className={`detail-btn ${isMeditationClicked ? 'completed' : ''}`}
              onClick={handleMeditationClick}
              disabled={isMeditationClicked}
            >
              {isMeditationClicked ? 'Completed' : 'Meditation'}
            </button>
          </div>
          <div className='task'>
            <span className='task-title'>Gratitude</span>
            <button
              className={`detail-btn ${isGratitudeClicked ? 'completed' : ''}`}
              onClick={handleGratitudeClick}
              disabled={isGratitudeClicked}
            >
              {isGratitudeClicked ? 'Completed' : 'Gratitude'}
            </button>
          </div>
          <div className='task'>
            <span className='task-title'>Affirmations</span>
            <button
              className={`detail-btn ${isAffirmationClicked ? 'completed' : ''}`}
              onClick={handleAffirmationClick}
              disabled={isAffirmationClicked}
            >
              {isAffirmationClicked ? 'Completed' : 'Affirmation'}
            </button>
          </div>
        </div>
        {numClicked === 3 && (
          <p className='day-complete-message'>You have completed your tasks for the day!</p>
        )}
      </div>
    </div>
  );
}

export default Day;
