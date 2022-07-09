import './AboutContentStyles.css';

import React from 'react'
import { Link } from 'react-router-dom';
import art1 from "../assets/art1.webp";
import art2 from "../assets/art2.png"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I ?</h1>
            <p> I am an athlete and a lover of Wind\kite-surfing</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className='right'>
           <div className='img-container'>

               <div className='img-stack top'>
                   <img src={art1} className="img" alt='art1'/>
               </div>

               <div className='img-stack bottom'>
                   <img src={art2} className="img" alt='art2'/>
               </div>
           
           </div>

        </div>
    </div>
  )
}

export default AboutContent