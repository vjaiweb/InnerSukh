import React, { useState, useEffect } from 'react';
import './Day.css'; 
import { Link } from 'react-router-dom';

function Day({ dayNumber, isExpanded, setExpandedDay, onClick }) {
  const [isMeditationClicked, setIsMeditationClicked] = useState(false);
  const [isGratitudeClicked, setIsGratitudeClicked] = useState(false);
  const [isAffirmationClicked, setIsAffirmationClicked] = useState(false);

  useEffect(() => {
    if (isMeditationClicked && isGratitudeClicked && isAffirmationClicked) {
      
    }
  }, [isMeditationClicked, isGratitudeClicked,isAffirmationClicked]);

  const toggleContent = () => {
    if (isExpanded) {
      setExpandedDay(null); 
    } else {
      onClick(dayNumber); 
      setExpandedDay(dayNumber);
    }
  };

  const handleMeditationClick = () => {
    setIsMeditationClicked(true);
  };

  const handleGratitudeClick = () => {
    setIsGratitudeClicked(true);
  };

  const handleAffirmationClick = () => {
    setIsAffirmationClicked(true);
  };

  const isDayComplete = isMeditationClicked && isGratitudeClicked && isAffirmationClicked;

  const numClicked = (isMeditationClicked ? 1 : 0) + (isGratitudeClicked ? 1 : 0) + (isAffirmationClicked ? 1 : 0);
  const progressBarWidth = numClicked === 3 ? '100%' : numClicked === 2 ? '67%' : numClicked === 1 ? '33%' : '0%';
  const progressBarColor = numClicked === 3 ? 'green' : numClicked >= 1 ? 'orange' : 'transparent';
  
  return (
    <div
      className={`day-tile ${isExpanded ? 'expanded' : ''} ${
        isDayComplete ? 'completed' : ''
      }`}
      onClick={toggleContent}
    >
      <div className="day-header">
        <span className="day-title">Day {dayNumber}</span>
      </div>
      {isExpanded && (
        <div className='day-content'>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: progressBarWidth,
                backgroundColor: progressBarColor,
              }}
            ></div>
          </div>
          <div className="card-container">
            <div className="card-wrapper">
              <img
                className="card-img"
                src={'../../Assets/Images/meditation.jpg'}
                alt="Meditation"
              />
              <span className="card-title">Meditation</span>
              <Link to={'/meditation'} >
                <button
                  className={`detail-btn ${isMeditationClicked ? 'completed' : ''}`}
                  onClick={handleMeditationClick}
                  disabled={isMeditationClicked && isGratitudeClicked && isAffirmationClicked}
                >
                  {isMeditationClicked ? 'Completed' : 'Meditation'}
                </button>
              </Link>
              {/* <button
                  className={`detail-btn ${isMeditationClicked ? 'completed' : ''}`}
                  onClick={handleMeditationClick}
                  disabled={isMeditationClicked && isGratitudeClicked && isAffirmationClicked}
                >
                  {isMeditationClicked ? 'Completed' : 'Meditation'}
                </button> */}
            </div>
            <div className="card-wrapper">
              <img
                className="card-img"
                src={'../../Assets/Images/meditation.jpg'}
                alt="Gratitude"
              />
              <span className="card-title">Gratitude</span>
              <button
                className={`detail-btn ${isGratitudeClicked ? 'completed' : ''}`}
                onClick={handleGratitudeClick}
                disabled={isGratitudeClicked && isMeditationClicked && isAffirmationClicked}
              >
                {isGratitudeClicked ? 'Completed' : 'Gratitude'}
              </button>
            </div>
            <div className="card-wrapper">
              <img
                className="card-img"
                src={'../../Assets/Images/meditation.jpg'}
                alt="Affirmations"
              />
              <span className="card-title">Affirmations</span>
              <button
                className={`detail-btn ${isAffirmationClicked ? 'completed' : ''}`}
                onClick={handleAffirmationClick}
                disabled={isGratitudeClicked && isMeditationClicked && isAffirmationClicked}
              >
                {isGratitudeClicked ? 'Completed' : 'Affirmation'}
              </button>
            </div>
          </div>
          {isMeditationClicked && isGratitudeClicked && isAffirmationClicked && (
            <p className="day-complete-message">You have completed your tasks for the day!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Day;
