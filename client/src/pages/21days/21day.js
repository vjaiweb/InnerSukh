// import React, { useState } from 'react';
// import Day from '../../Components/21days/Day';
// import './21day.css';

// function Drop() {
//   const [completedTasks, setCompletedTasks] = useState([]);
//   const activeDay = new Date().toLocaleDateString();

//   const handleTaskCompletion = (taskName) => {
//     const completedDate = new Date().toLocaleDateString();
//     const updatedCompletedTasks = [...completedTasks, taskName];
//     setCompletedTasks(updatedCompletedTasks);
    
//     if (updatedCompletedTasks.length === 3) {
//       console.log(`All tasks for Day ${activeDay} completed on ${completedDate}`);
//     }
//   };
  

//   return (
//     <div className='container'>
//       <div className='content'>
//         <h1>Days Streak</h1>
//         <Day dayNumber={activeDay} onTaskCompletion={handleTaskCompletion} />
//       </div>
//     </div>
//   );
// }

// export default Drop;

import React, { useState, useEffect } from 'react';
import Day from '../../Components/21days/Day';
import './21day.css';

function Drop() {
  const [completedDays, setCompletedDays] = useState([]);

  useEffect(() => {
    // Load completed days from local storage or a server when the component mounts
    const savedCompletedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
    setCompletedDays(savedCompletedDays);
  }, []);

  // Determine the active day based on completedDays length
  const activeDay = new Date().toLocaleDateString();

  const handleTaskCompletion = (taskName) => {
    const completedDate = new Date().toLocaleDateString();

    // Update the completedDays array with the completed task for the active day
    setCompletedDays((prevCompletedDays) => {
      const updatedCompletedDays = [...prevCompletedDays];
      const dayIndex = activeDay - 1; // Adjust for zero-based index
      if (!updatedCompletedDays[dayIndex]) {
        updatedCompletedDays[dayIndex] = {};
      }
      updatedCompletedDays[dayIndex][taskName] = completedDate;

      // Save the updated completedDays array to local storage
      localStorage.setItem('completedDays', JSON.stringify(updatedCompletedDays));

      // Check if all tasks for the day are completed
      if (Object.keys(updatedCompletedDays[dayIndex]).length === 3) {
        console.log(`All tasks for Day ${activeDay} completed on ${completedDate}`);
      }

      return updatedCompletedDays;
    });
  };

  return (
    <div className='container'>
      <div className='content'>
        <h1>Days Streak</h1>
        <Day dayNumber={activeDay} onTaskCompletion={handleTaskCompletion} />
        
      </div>
    
    </div>
  );
}

export default Drop;

