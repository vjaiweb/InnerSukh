import React from 'react';
import { useState,useEffect } from 'react';
import './EmergingBox.css';

function EmergingBox({text}) {
    return(
        <div className="box animate fadeInLeft three">
            <p>{text}</p>
        </div>
    );
}

export default EmergingBox;