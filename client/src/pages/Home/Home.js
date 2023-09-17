import React, { useState } from 'react';
import './Home.css';
import TestOptions from '../../Components/TestOptions/TestOptions';
import homebg from '../../Assets/Images/homeBg.png'
import HomeInfo from '../../Components/HomeInfo/HomeInfo';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';
import Footer from '../../Components/Footer/Footer';

import card1 from '../../Assets/Images/cards/card1.png'
import AutoMovingCarousel from '../../Components/AutoMovingCarousel/AutoMovingCarousel';
function Home() {

  return (
    <div className='home'>
      <HomeInfo/>
      <FeatureCard/>
      <AutoMovingCarousel/>
      <Footer/>

    </div>
  );
}

export default Home;
