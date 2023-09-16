import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect, useState,useCallback } from "react";
import "./Affirmation.css"
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import AffirmationFirst from '../../Components/AffirmationFirst/AffirmationFirst';
import Microphone from '../../Components/Microphone/Microphone';
import EmergingBox from '../../Components/EmergingBox/EmergingBox.js';

const affirmations
    = [
        "I am in control of my thoughts and emotions and I always remain positive",
        "I am worthy of love happiness and inner peace",
        "I release the past and focus on the present moment with gratitude",
        "I am resilient and I can overcome any challenge that comes my way",
        "I prefer self care and nurture my mental and emotional well being"
    ];

const AffirmationComponent = ({ pageNo, setPage, OriginalText }) => {
    const [textToCopy, setTextToCopy] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isMatched, setIsMatched] = useState(true);
    const [micOn, setMicOn] = useState(false);
    const [bannerText, setBannerText] = useState("Hey Peep Let's begin by clicking Mic Button 🎙️");
    const [time, setTime] = useState(8000);
    const [showBanner, setShowBanner] = useState(true);
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, listening } = useSpeechRecognition();
    const navigate = useNavigate();

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    
    const closeMic=()=>{
        resetTranscript();
        setMicOn(false);
        SpeechRecognition.stopListening();
    }
    
    const openMic=()=>{
        resetTranscript();
        setMicOn(true);
        startListening();
    }
    
    useEffect(() => {
        if (showBanner) {
            setTimeout(() => {
                setShowBanner(false);
            }, [time])
        }
    }, [showBanner])
    
    
    useEffect(() => {
        if (transcript.length <= OriginalText.length) {
            if (OriginalText.substring(0, transcript.length).toLowerCase() === transcript.toLowerCase()) {
                if (OriginalText.length == transcript.length) {
                    if (pageNo <= 3) {
                        setShowBanner(true);
                        setTime(3000);
                        setBannerText("🤩 Amazing !! Good Going")
                        setTimeout(() => {
                            setPage(pageNo + 1);
                            resetTranscript();
                        }, 3000)
                    }
                    else {
                        setShowBanner(true);
                        setTime(3000);
                        setBannerText("🤩 Amazing !! Good Going")
                        setTimeout(()=>{
                            navigate("/");
                        },3000)
                    }
                }
                setTime(3000);
                setIsMatched(true);
            }
            else {
                setIsMatched(false);
                setTimeout(() => {
                    resetTranscript();
                }, 4000)
                setMicOn(false);
                setShowBanner(true);
                setTime(3000);
                setBannerText("🤭 Oops! You said something wrong")
                SpeechRecognition.stopListening();
            }
        }
    }, [transcript])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, []);


    if (!browserSupportsSpeechRecognition) {
        return null
    };


    return (
        <>
            <div>
                {isLoading ? <div className="Affirmation-Container"><AffirmationFirst /></div> : (
                    <div className='Affirmation-Display'>
                        <EmergingBox key={pageNo} text={`Affirmation ${pageNo + 1}`} />
                        <br />
                        {showBanner && <div className='banner-Box'>{bannerText}</div>}
                        <div className='Aff-Main-Box'>
                            <div className='Left-Aff-Box-Container'>
                                <div className='Left-Aff-Box'>
                                    {OriginalText}
                                </div>
                            </div>
                            <div className='Center-Mic-Line-Container'>
                                <div className='Center-Mic-Line'>

                                    {micOn === true && <div className='Center-Mic' onClick={closeMic}><Microphone micOn={micOn} /></div>}
                                    {micOn === false && <div className='Center-Mic' onClick={openMic}><Microphone micOn={micOn} /></div>}
                                </div>
                            </div>
                            <div className='Right-Aff-Box-Container'>
                                <div className='Right-Aff-Box'>
                                    {transcript &&
                                    <div className={isMatched ? 'highlight' : 'non-match'} onClick={() => setTextToCopy(transcript)}>
                                        {transcript}
                                    </div>}
                                    {!transcript && <div className='temp-Back-Speak'>Let's Speak Something</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
}


const Affirmation = () => {
    const [page, setPage] = useState(0);
    return (
        <div>
            <AffirmationComponent pageNo={page} setPage={setPage} OriginalText={affirmations[page]} />
        </div>
    );
}

export default Affirmation