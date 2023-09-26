import React, { useState } from 'react';
import './Day.css';
import meditation from "../../Assets/Images/Meditation.png";
import gratitude from "../../Assets/Images/Gratitude.png";
import affirmation from "../../Assets/Images/Affirmation.png";
import { Link } from 'react-router-dom';



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
            <img src={meditation} className="avatar" />
            <span className='task-title'>Meditation</span>
            <Link to="/meditation">
             <button
              className={`detail-btn ${isMeditationClicked ? 'completed' : ''}`}
              onClick={handleMeditationClick}
              disabled={isMeditationClicked}
             >
              {isMeditationClicked ? 'Completed' : 'Meditation'}
             </button>
            </Link>
            
          </div>
          <div className='task'>
            <img src={gratitude} className="avatar" />
            <span className='task-title'>Gratitude</span>
            <Link to="/gratitude">
            <button
              className={`detail-btn ${isGratitudeClicked ? 'completed' : ''}`}
              onClick={handleGratitudeClick}
              disabled={isGratitudeClicked}
            >
              {isGratitudeClicked ? 'Completed' : 'Gratitude'}
            </button>
            </Link>
          </div>
          <div className='task'>
            <img src={affirmation} className="avatar" />
            <span className='task-title'>Affirmations</span>
            <Link to="/affirmation">
            <button
              className={`detail-btn ${isAffirmationClicked ? 'completed' : ''}`}
              onClick={handleAffirmationClick}
              disabled={isAffirmationClicked}
            >
              {isAffirmationClicked ? 'Completed' : 'Affirmation'}
            </button>
            </Link>
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
