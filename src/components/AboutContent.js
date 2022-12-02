import './AboutContentStyles.css';

import React from 'react'
import { Link } from 'react-router-dom';
import art1 from "../assets/doctor.webp";
import art2 from "../assets/speek.jpg"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>You have a Question ?</h1>
            <p>Here's a Doctor </p>
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