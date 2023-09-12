import React from 'react';

function Week({ weekNumber, onClick }) {
  return (
    <button onClick={() => onClick(weekNumber)}>Week {weekNumber}</button>
  );
}

export default Week;