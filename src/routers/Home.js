import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from "../components/HeroImg";
import Footer from '../components/Footer';
// import Slider from "../components/Slider/Slider"
// import img1 from '../assets/slider1.jpg'
// import img2 from '../assets/slider2.jpg'

// const slideData = [
//   {
//     index: 0,
//     headline: 'kITE-SURF',
//     button: 'Shop now',
//     src: img1
//   },
//   {
//     index: 1,
//     headline: 'WIND-SURF',
//     button: 'Nos événements',
//     src: img2
//   }
// ]

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