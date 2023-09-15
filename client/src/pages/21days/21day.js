/* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import Week from '../../Components/21days/Week';
import Day from '../../Components/21days/Day';
import './21day.css'; 
import { Link } from 'react-router-dom';


function Drop() {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  // Add state to track which day is expanded
  const [expandedDay, setExpandedDay] = useState(null);

  const handleWeekClick = (weekNumber) => {
    setSelectedWeek(weekNumber);
    setSelectedDay(null);
    // Close any open day tile when switching weeks
    setExpandedDay(null);
  };

  const handleDayClick = (dayNumber) => {
    setSelectedDay(dayNumber);
    setExpandedDay(dayNumber); // Expand the clicked day tile
  };

  return (
    <div className='container' >
      <div className='sidebar'>
        <h1>21 Days</h1>
        {[1, 2, 3].map((week) => (
          <button
            key={week}
            className={`week-button ${
              selectedWeek === week ? 'selected' : ''
            }`}
            onClick={() => handleWeekClick(week)}
          >
            Week {week}
          </button>
        ))}
      </div>
      <div className='content'>
        {selectedWeek && (
          <div>
            <h2>Week {selectedWeek} Days:</h2>
            <div className='day-tile-container'> 
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <Day
                  key={day}
                  dayNumber={day}
                  onClick={handleDayClick}
                  isExpanded={expandedDay === day}
                  setExpandedDay={setExpandedDay}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drop;
