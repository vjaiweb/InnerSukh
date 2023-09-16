import React, { useState } from 'react';
import './Home.css';
import TestOptions from '../../Components/TestOptions/TestOptions';
import homebg from '../../Assets/Images/homeBg.png'
import HomeInfo from '../../Components/HomeInfo/HomeInfo';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';

function Home() {
  

  return (
    <div className='home'>
      <HomeInfo/>
      <FeatureCard/>
    </div>
  );
}

export default Home;
