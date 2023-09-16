import React from 'react';
import { Link } from 'react-router-dom';
import './TestOptions.css';
import landingBG from '../../Assets/Images/landingBG.jpg';

function TestOptions() {
  return (
    <div className='testOptions'>
      <img src={landingBG} className="img" alt="Landing Background" />
      <div className="options">
        <Link to="/depression-test">
          <button className="option">Depression Test</button>
        </Link>
        <Link to="/anxiety-test">
          <button className="option">Anxiety Test</button>
        </Link>
        <Link to="/addiction-test">
          <button className="option">Addiction Test</button>
        </Link>
        <Link to="/youth-mental-health-test">
          <button className="option">Youth Mental Health Test</button>
        </Link>
      </div>
    </div>
  );
}

export default TestOptions;
