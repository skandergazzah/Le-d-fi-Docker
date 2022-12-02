import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import {FaBars , FaTimes} from "react-icons/fa"

const Navbar = () => {

    const[click,setClick]=useState(false);
    const handleClick = () => setClick(!click);
    
    const [color,setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY >=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>VIH Is a LOSER</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/events">Events</Link>
            </li>
            <li>
                <Link to="/aboutus">About us</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click?(<FaBars size={20} style={{color:"#fff"}}/>)
            :(<FaTimes size={20} style={{color:"#fff"}}/>)}
    
        </div>
    </div>
  )
}

export default Navbar