
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import Typed from "typed.js";
import "swiper/swiper-bundle.css"; // Import Swiper CSS
import "./Slideshow.css";

const Slideshow = () => {


  return (
    <div className="header-container">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="opaque">
              <img
                src="./Header_Slideshow/ICA_Board_1.jpg"
                alt="Board"
              />
            </div>
            <span className="typed-text"></span>
          </div>
          <div className="swiper-slide">
            <div className="opaque">
              <img
                src="./Header_Slideshow/ICA_Mimosas_1.jpg"
                alt="Mimosa"
              />
            </div>
            <span className="typed-text"></span>
          </div>
          <div className="swiper-slide">
            <div className="opaque">
              <img src="./Header_Slideshow/JWM.jpg" alt="JWM" />
            </div>
            <span className="typed-text"></span>
          </div>
          <div className="swiper-slide">
            <div className="opaque">
              <img
                src="./Header_Slideshow/ICA_Barge_1.jpg"
                alt="Barge"
              />
            </div>
            <span className="typed-text"></span>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Slideshow;
