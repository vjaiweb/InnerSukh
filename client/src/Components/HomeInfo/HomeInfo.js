import React from 'react';
import './HomeInfo.css';
import homebg from '../../Assets/Images/homeBg.png';
import tagline from '../../Assets/Images/tagline.png'; // Import the additional image

function HomeInfo() {
  return (
    <div className='home'>
      <img src={homebg} className='homeimg' alt="Home Background" />
      <img src={tagline} className='overlay-img' alt="Overlay Image" />
      <button className="quiz-button">Take a Quiz</button>
    </div>
  );
}

export default HomeInfo;
