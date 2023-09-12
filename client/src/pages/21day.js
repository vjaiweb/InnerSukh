import React, { useState } from 'react';
import Week from '../Components/21days/Week';
import Day from '../Components/21days/Day';
import Content from '../Components/21days/Content';
import "./21day.css"

function Drop() {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleWeekClick = (weekNumber) => {
    setSelectedWeek(weekNumber);
    setSelectedDay(null); 
  };

  const handleDayClick = (dayNumber) => {
    setSelectedDay(dayNumber);
  };

  return (
    <div className='heading'>
        <h1>21 Days </h1>
      <div className='week'>
        {[1, 2, 3].map((week) => (
          <Week
            key={week}
            weekNumber={week}
            onClick={handleWeekClick}
          />
        ))}
      </div>
      {selectedWeek && (
        <div>
          <h2>Week {selectedWeek} Days:</h2>
          <div className='day'>
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <Day
                key={day}
                dayNumber={day}
                onClick={handleDayClick}
              />
            ))}
          </div>
        </div>
      )}
      {selectedDay && (
        <div className='content'>
          <h3>Day {selectedDay} Content:</h3>
          <Content content="Meditation" />
          <Content content="Gratitude" />
        </div>
      )}
    </div>
  );
}

export default Drop;
