/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router,  Route, Routes,useParams } from "react-router-dom";
import "./App.css";
import { Quiz } from "./Components/Quiz/Quiz.js";
import Drop from "./pages/21days/21day";
import Meditation from "./pages/meditation/Meditation";
import Gratitude from "./pages/gratitude/Gratitude";

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Drop/>}/>
          <Route path="/meditation" element={<Meditation/>}/>
          <Route path="/gratitude" element={<Gratitude/>}/>
        </Routes>
         
         {/* <Quiz /> */}


      </Router>
  </> 
  );
}

export default App;
