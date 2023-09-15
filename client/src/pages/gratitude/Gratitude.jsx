import React, { useEffect, useState } from "react";

import "./Gratitude.css";
import gratitudeAudio from "../../Assets/Audio/gratitude.mp3";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Gratitude = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const audioElement = new Audio(gratitudeAudio);
  const [audioDuration, setAudioDuration] = useState(0);

  const playAudio = () => {
    audioElement.play();
    setIsPlaying(true);

    // Add an event listener to pause the audio when it finishes
    audioElement.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    const timer = setTimeout(() => {
      stopAudioAndNavigate();
    }, audioDuration); // 60,000 milliseconds = 1 minute
  };

  const stopAudioAndNavigate = () => {
    // Stop the audio
    audioElement.pause();
    setIsPlaying(false);
    navigate("/");
  };

  const handleBackBtnClick = () => {
    audioElement.pause();
    setIsPlaying(false);
    navigate("/");
    window.location.reload();
  };

  const handleBeforeUnload = (e) => {
    if (isPlaying) {
      // Display a confirmation message if audio is playing
      e.preventDefault();

      const message =
        "Your meditation session will start from the beginning if you refresh the page. Are you sure you want to continue?";
      e.returnValue = message;
    }
  };

  useEffect(() => {
    audioElement.addEventListener("loadedmetadata", () => {
      setAudioDuration(audioElement.duration * 1000); // Convert to milliseconds
    });

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", () => {
      if (isPlaying) {
        handleBackBtnClick();
      }
    });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isPlaying]);

  return (
    <div className="gratitude-container">
      <button
        className={`transparent-button ${isPlaying ? "hidden" : ""}`}
        onClick={playAudio}
        disabled={isPlaying}
      >
        {isPlaying ? (
          "Playing"
        ) : (
          <FontAwesomeIcon
            icon={faPlay}
            beat
            size="2xl"
            style={{ color: "#f5f5f5", fontSize: 100 }}
          />
        )}
      </button>
    </div>
  );
};

export default Gratitude;
