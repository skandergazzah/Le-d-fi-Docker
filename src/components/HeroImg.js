import "./HeroImgStyles.css";

import React from 'react'

import introImg from '../assets/slider1.jpg'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">

        <div className="mask">
            <img className="into-img" src={introImg} alt="intoImg"/>
        </div>

      <div className="content">
          <p>Hi, I am a surfer</p>  
          <h1>Real surfer</h1>
          <div className="">
             <Link to="/shop" className="btn">Products</Link>
             <Link to="/events" className="btn btn-light">Events</Link>
          </div>

      </div>  

    </div>
  )
}

export default HeroImg