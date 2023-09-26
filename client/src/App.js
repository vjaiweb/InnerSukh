/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import { Quiz } from "./Components/Quiz/Quiz.js";
import Streak from "./pages/Streak/Streak";
import Meditation from "./pages/meditation/Meditation";
import Gratitude from "./pages/gratitude/Gratitude";
import NavBar from "../src/Components/Navbar/NavBar";
import SideBar from "../src/Components/SideBar/SideBar";
import Home from "../src/pages/Home/Home";
import Affirmation from "./pages/Affirmation/Affirmation";
import Footer from "../src/Components/Footer/Footer";
import LaughingExercise from "./pages/LaughingExercise/LaughingExercise";
import Dash from "./pages/dashboard/dash";

function App() {
  const isMeditationRoute = window.location.pathname === "/meditation";
  const isGratitudeRoute = window.location.pathname === "/gratitude";
  const isAffirmationRoute = window.location.pathname === "/affirmation";
  const isFaceRoute = window.location.pathname === "/face";


  return (
    <>
      <Router>
        <div className="main-container">
          {!isMeditationRoute && !isGratitudeRoute && !isAffirmationRoute && !isFaceRoute && <NavBar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/streak" element={<Streak />} />
            <Route path="/dash" element={<Dash />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/gratitude" element={<Gratitude />} />
            <Route path="/affirmation" element={<Affirmation text={"Hello Gurmeet"} />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/face" element={<LaughingExercise />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
