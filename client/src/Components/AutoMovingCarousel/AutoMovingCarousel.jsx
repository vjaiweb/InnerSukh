import Slider from "react-slick";
import React from "react";
import './AutoMovingCarousel.css'
import card1 from "../../Assets/Images/cards/card1.png";
import card2 from "../../Assets/Images/cards/card2.png";
import card3 from "../../Assets/Images/cards/card3.png";
import card4 from "../../Assets/Images/cards/card4.png";
import card5 from "../../Assets/Images/cards/card5.png";
import card6 from "../../Assets/Images/cards/card6.png";
import card7 from "../../Assets/Images/cards/card7.png";
import card8 from "../../Assets/Images/cards/card8.png";
import card9 from "../../Assets/Images/cards/card9.png";

const AutoMovingCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  return (
    <div>
      <Slider {...settings} className="slider">
        <div className="card-container">
          <img src={card1} alt="Card 1" className="cardImg" />
        </div>
        <div className="card-container">
          <img
            src={card2}
            alt="Card 2"
            className="cardImg"
            // style={{ width: "350px", height: "auto" }}
          />
        </div>
        <div className="card-container">
          <img
            src={card3}
            alt="Card 3"
            className="cardImg"
            // style={{ width: "350px", height: "auto" }}
          />
        </div>
        <div className="card-container">
          <img
            src={card4}
            alt="Card 4"
            className="cardImg"
            // style={{ width: "350px", height: "auto" }}
          />
        </div>
        <div className="card-container">
          <img
            src={card9}
            alt="Card 9"
            className="cardImg"
            // style={{ width: "350px", height: "auto" }}
          />
        </div>
        <div className="card-container">
          <img
            src={card6}
            alt="Card 6"
            className="cardImg"
            // style={{ width: "350px", height: "auto" }}
          />
        </div>
        <div className="card-container">
          <img
            src={card7}
            alt="Card 7"
            className="cardImg"
            // style={{ width: "350px", height: "auto" }}
          />
        </div>
        <div className="card-container">
          <img
            src={card8}
            alt="Card 8"
            className="cardImg"
            // style={{ width: "350px", height: "auto" }}
          />
        </div>
        <div className="card-container">
          <img
            src={card5}
            alt="Card 5"
            className="cardImg"
            // style={{ width: "350px", height: "auto" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoMovingCarousel;
