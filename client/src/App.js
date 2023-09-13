/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router,  Route, Routes,useParams } from "react-router-dom";
import "./App.css";
import { Quiz } from "./Components/Quiz/Quiz.js";
import Drop from "./pages/21day";
import Meditation from "./pages/meditation/Meditation";

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Drop/>}/>
          <Route path="/meditation" element={<Meditation/>}/>
        </Routes>
         
         {/* <Quiz /> */}


      </Router>
  </> 
  );
}

export default App;
