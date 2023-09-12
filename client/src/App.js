/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router,  Route, Routes,useParams } from "react-router-dom";
import "./App.css";
import { Quiz } from "./Components/Quiz/Quiz.js";
import Drop from "./pages/21day";

function App() {
  

  return (
    <>
      <Router>
         <Drop/>

      </Router>
  </> 
  );
}

export default App;
