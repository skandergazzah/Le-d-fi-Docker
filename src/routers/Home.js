import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from "../components/HeroImg";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        {/* <Slider heading="Example Slider" slides={slideData} /> */}
        <Footer />
    </div>
  )
}

export default Home