import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Day.css'; // Import the CSS file

function Day({ dayNumber, isExpanded, setExpandedDay, onClick }) {
  const [isMeditationClicked, setIsMeditationClicked] = useState(false);
  const [isGratitudeClicked, setIsGratitudeClicked] = useState(false);

  const toggleContent = () => {
    if (isExpanded) {
      setExpandedDay(null); // Collapse if already expanded
    } else {
      onClick(dayNumber); // Expand the clicked day tile
      setExpandedDay(dayNumber);
    }
  };

  const handleMeditationClick = () => {
    setIsMeditationClicked(true);
  };

  const handleGratitudeClick = () => {
    setIsGratitudeClicked(true);
  };

  const meditationProgress = isMeditationClicked ? '50%' : '0%'; 
  const gratitudeProgress = isGratitudeClicked ? '50%' : '0%'; 

  const isDayComplete = isMeditationClicked && isGratitudeClicked;

  return (
    <div className={`day-tile ${isExpanded ? 'expanded' : ''}`} onClick={toggleContent}>
      <div className="day-header">
        <span className="day-title">Day {dayNumber}</span>
      </div>
      {isExpanded && (
        <div className='day-content'>
          <div className="day-buttons">
            <Link to={'/meditation'}>
              <button
                className={`content-button ${isMeditationClicked ? 'completed' : ''}`}
                onClick={handleMeditationClick}
                disabled={isMeditationClicked}
              >
                Meditation
              </button>
            </Link>
            <button
              className={`content-button gratitude ${isGratitudeClicked ? 'completed' : ''}`}
              onClick={handleGratitudeClick}
              disabled={isGratitudeClicked}
            >
              Gratitude
            </button>
          </div>
          <div className="progress-bar">
            <div
              className="progress meditation-progress"
              style={{ width: meditationProgress + gratitudeProgress}}
            ></div>
          </div>
          {/* <div className="progress-bar">
            <div
              className="progress gratitude-progress"
              style={{ width: gratitudeProgress }}
            ></div>
          </div> */}
          {isDayComplete && (
            <p className="day-complete-message">You have completed your tasks for the day!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Day;
