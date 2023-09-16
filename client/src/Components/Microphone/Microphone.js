import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone,faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import "./Microphone.css"

const Microphone = ({micOn}) => {
    return(
    <div>
        {micOn && <button id="speech" className="speechbtn">
        <div className="pulse-ring"></div>
            <FontAwesomeIcon icon={faMicrophone}/>
        </button>}
        {!micOn && <button id="speech" className="speechbtn">
        <div className="paused"></div>
            <FontAwesomeIcon icon={faMicrophoneSlash} beat/>
        </button>}
    </div>
    )
  
}

export default Microphone;