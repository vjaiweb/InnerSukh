import React from 'react'
import "./LaughingExercise.css"
import { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { useNavigate } from 'react-router-dom';

const LaughingExercise = () => {
    
    // Main part
    const [detectFace,setDetectFace]=useState(true);
    const [pageNo,setPageNo]=useState(0);
    const [happyScore,setHappyScore]=useState(0);

    const [secondsAboveThreshold, setSecondsAboveThreshold] = useState(0);

    // Your code for calculating and updating happyScore goes here

    // useEffect to check the condition and navigate if met
    // useEffect(() => {
    //   // Define the threshold and the required duration
    //   const threshold = 95;
    //   const requiredDuration = 10; // 10 seconds

    //   // Create a timer variable
    //   let timer;

    //   if (happyScore > threshold) {
    //     // Increment the secondsAboveThreshold count
    //     setSecondsAboveThreshold((prev) => prev + 1);

    //     if (secondsAboveThreshold >= requiredDuration) {
    //       // If the condition is met for the required duration, navigate
    //       // Replace this with your navigation logic
    //      setHappyScore(0);
    //      setTimeout(() => {
    //        setPageNo(pageNo + 1);
    //      }, 3000);
    //      if (pageNo == 3) {
    //        setTimeout(() => {
    //          navigate("/");
    //        }, 2000);
    //      }
    //       // Example: window.location.href = '/your-next-page';
    //     } else {
    //       // If the condition is met but not for the required duration, reset the timer
    //       clearTimeout(timer);
    //       timer = setTimeout(() => {
    //         setSecondsAboveThreshold(0);
    //       }, 1000); // Reset the count after 1 second
    //     }
    //   } else {
    //     // If the score drops below the threshold, reset the count
    //     setSecondsAboveThreshold(0);
    //   }

    //   // Clean up the timer when the component unmounts
    //   return () => clearTimeout(timer);
    // }, [happyScore, secondsAboveThreshold]);

    const navigate = useNavigate();
    
    const handleClick=()=>{

        console.log("I am happy");
        setHappyScore(0);
        setPageNo(pageNo=>pageNo + 1);
        if(pageNo==3)
        {   
            setDetectFace(false);
            clearInterval(faceDetectionInterval);
            setTimeout(()=>{
                navigate("/");
            },4000);
        }
        console.log("page No " + pageNo)
    }
    // Video vala part
    
    const videoRef = useRef()
    const canvasRef = useRef()
    let faceDetectionInterval;

    

  // LOAD FROM USEEFFECT
  useEffect(()=>{
    startVideo()
    videoRef && loadModels()

    return ()=>{
        clearInterval(faceDetectionInterval);
    }
  },[])



  // OPEN YOU FACE WEBCAM
  const startVideo = ()=>{
    navigator.mediaDevices.getUserMedia({video:true})
    .then((currentStream)=>{
      videoRef.current.srcObject = currentStream
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  // LOAD MODELS FROM FACE API

  const loadModels = ()=>{
    Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models")

      ]).then(()=>{
        setDetectFace(true);
    //   faceMyDetect()
    })
  }

  useEffect(()=>{
      const faceMyDetect = ()=>{
        if(detectFace==true)
        {
            faceDetectionInterval = setInterval(async()=>{
               const detections = await faceapi.detectAllFaces(videoRef.current,
                 new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
         
               // DRAW YOU FACE IN WEBCAM
               canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
               faceapi.matchDimensions(canvasRef.current,{
                 width:940,
                 height:650
               })
         
               const face = detections[0]
              
         
               const resized = faceapi.resizeResults(detections,{
                  width:940,
                 height:650
               })
         
               faceapi.draw.drawDetections(canvasRef.current,resized)
               faceapi.draw.drawFaceLandmarks(canvasRef.current,resized)
               // faceapi.draw.drawFaceExpressions(canvasRef.current,resized)
               // const canvas=canvasRef.current;
               // console.log(canvas[0].getContext('2d'));
              if(face!= undefined && face.expressions!=undefined && face.expressions.happy!=undefined) 
              {
                 setHappyScore(Math.ceil(face.expressions.happy*100));
              }
             },1000)
        }
      }
      faceMyDetect();
  },[detectFace])


  return (
    <>
      <div className="myapp">
        {/* <div className="line-container">
        <div className="progress-line">
          <div className="progress" style="width: 50%;"></div>
          <div className="status">
            <div className="dot completed"></div>
          </div>
          <div className="status">
            <div className="dot completed"></div>
          </div>
          <div className="status">
            <div className="dot current"></div>
          </div>
          <div className="status">
            <div className="dot"></div>
          </div>
          <div className="status">
            <div className="dot"></div>
          </div>
        </div>
      </div> */}
        <h1>Smiling Exercise</h1>
        <div className="appvide">
          <video crossOrigin="anonymous" ref={videoRef} autoPlay></video>
        </div>
        <canvas
          ref={canvasRef}
          width="1600"
          height="650"
          className="appcanvas"
        />
        <h1>Your Happiness Score is {happyScore}/100</h1>
        {/* <h2>{secondsAboveThreshold}</h2> */}
      </div>
      {/* <button className="quiz-button" onClick={handleClick}>Take a Quiz</button> */}
    </>
  );
}

export default LaughingExercise

