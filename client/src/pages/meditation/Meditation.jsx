import React, { useEffect, useState } from "react";

import "./Meditation.css";
import meditationAudio from "../../Assets/Audio/meditationAudio.mp3";
import { useNavigate } from "react-router-dom";

const Meditation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const navigate = useNavigate()
  const audioElement = new Audio(meditationAudio);  
  //TODO Add timer as per audio duration
  
  const playAudio = () => {
    audioElement.play();
    setIsPlaying(true);

    // Add an event listener to pause the audio when it finishes
    audioElement.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    // Start the timer for 1 minute (60,000 milliseconds)
    const timer = setTimeout(() => {
      stopAudioAndNavigate();
    }, 20000); // 60,000 milliseconds = 1 minute

    setTimerId(timer);
  };

  const stopAudioAndNavigate = () => {
    // Clear the timer
    clearTimeout(timerId);

    // Stop the audio
    // const audioElement = new Audio(meditationAudio);
    audioElement.pause();

    navigate(-1)
  };

  useEffect(() => {
    // Event listener for beforeunload
    const handleBeforeUnload = (e) => {
      if (isPlaying) {
        // Display a confirmation message if audio is playing
        e.preventDefault();
        e.returnValue =
          "Your meditation session will start from the beginning if you refresh the page. Are you sure you want to continue?";
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isPlaying]);

  return (
    <div className="meditation-container">
      <button onClick={playAudio} disabled={isPlaying}>
        {isPlaying ? "Playing" : "Play Audio"}
      </button>
    </div>
  );
};

export default Meditation;
