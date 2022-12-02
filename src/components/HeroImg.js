import "./HeroImgStyles.css";

import React from 'react'

import introImg from '../assets/sida_intro.jpg'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">

        <div className="mask">
            <img className="into-img" src={introImg} alt="intoImg"/>
        </div>

      <div className="content">
          <p>HERE</p>  
          <h1>NO Taboo</h1>
          <div className="">
             <Link to="/aboutus" className="btn">About</Link>
             <Link to="/events" className="btn btn-light">Events</Link>
          </div>

      </div>  

    </div>
  )
}

export default HeroImg