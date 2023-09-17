import React, { useState } from 'react';
import './CurrentDay.css';
import { GiMeditation } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom';

function Day() {

    const navigate=useNavigate();
    const [isMeditationClicked, setIsMeditationClicked] = useState(false);
    const [isGratitudeClicked, setIsGratitudeClicked] = useState(false);
    const [isAffirmationClicked, setIsAffirmationClicked] = useState(false);

    const handleMeditationClick = () => {
        setIsMeditationClicked(true);
        navigate('/meditation');
    };

    const handleGratitudeClick = () => {
        setIsGratitudeClicked(true);
        navigate('/gratitude');
    };

    const handleAffirmationClick = () => {
        setIsAffirmationClicked(true);
        navigate('/affirmation');
    };


    const numClicked =
        (isMeditationClicked ? 1 : 0) +
        (isGratitudeClicked ? 1 : 0) +
        (isAffirmationClicked ? 1 : 0);

    return (
        <div className={`current-day-tile`}>
            {numClicked == 3 &&
                <div className='current-day-header'>
                    Wohoo!! You completed today's streak
                </div>}
            {numClicked == 0 &&
                <div className='current-day-header'>
                    Hey!! Let's build today's streak
                </div>}
            {numClicked < 3 && numClicked > 0 &&
                <div className='current-day-header'>
                    Hey!! Continue Other Activities 
                </div>}
            <div className='current-day-content'>
                <div className='current-task-container'>
                    <div className='current-task meditation'>
                        <button
                            className={`current-detail-btn ${isMeditationClicked ? 'current-completed' : ''}`}
                            onClick={handleMeditationClick}
                            disabled={isMeditationClicked}
                        >
                            {isMeditationClicked ? 'Meditation ✅' : 'Start Meditation ▶️'}
                        </button>
                    </div>
                    <div className='current-task gratitude'>
                        <button
                            className={`current-detail-btn ${isGratitudeClicked ? 'current-completed' : ''}`}
                            onClick={handleGratitudeClick}
                            disabled={isGratitudeClicked}
                        >
                            {isGratitudeClicked ? 'Gratitude ✅' : 'Start Gratitude ▶️'}
                        </button>
                    </div>
                    <div className='current-task affirmation'>
                        <button
                            className={`current-detail-btn ${isAffirmationClicked ? 'current-completed' : ''}`}
                            onClick={handleAffirmationClick}
                            disabled={isAffirmationClicked}
                        >
                            {isAffirmationClicked ? 'Affirmation ✅' : 'Start Affirmation ▶️'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Day;
