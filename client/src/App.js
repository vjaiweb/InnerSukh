import React, { useState } from "react";
import { BrowserRouter as Router,  Route, Routes,useParams } from "react-router-dom";
import "./App.css";
import { Quiz } from "./Components/Quiz/Quiz.js";

function App() {
  

  return (
    <>
      <Router>
        
      <Quiz type={"addiction"}/>
 

      </Router>
  </> 
  );
}

export default App;
