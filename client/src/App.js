/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router,  Route, Routes,useParams } from "react-router-dom";
import "./App.css";
import { Quiz } from "./Components/Quiz/Quiz.js";
import Streak from "./pages/Streak/Streak";
import Meditation from "./pages/meditation/Meditation";
import Gratitude from "./pages/gratitude/Gratitude";
import NavBar from "../src/Components/Navbar/NavBar";
import SideBar from "../src/Components/SideBar/SideBar";
import Home from "../src/pages/Home/Home";


import Affirmation from "./pages/Affirmation/Affirmation";
import Footer from "./Components/Footer/Footer";

function App() {
  

  return (
    <>
      <Router>
      <div className="main-container">
          <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/streak" element={<Streak/>}/>
          <Route path="/meditation" element={<Meditation/>}/>
          <Route path="/gratitude" element={<Gratitude/>}/>
          <Route path="/affirmation" element={<Affirmation text={"Hello Gurmeet"}/>}/>
        </Routes>
        {/* <Footer/> */}
      </div>
      

      </Router>
      
  </> 
  );
}

export default App;




//Don't remove this commented code below
{/* <Router>
        <div className="main-container">
          <NavBar />
          <div className='content-container'>
          
            <SideBar />
            
            
            <div className='main-content'>
              <Quiz type={"addiction"} />

              <Routes>
                <Route path="/" element={<Drop/>}/>
          <Route path="/meditation" element={<Meditation/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </Router> */}
