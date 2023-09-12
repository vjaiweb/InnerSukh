import React from 'react';

function Day({ dayNumber, onClick }) {
  return (
    <button onClick={() => onClick(dayNumber)}>Day {dayNumber}</button>
  );
}

export default Day;