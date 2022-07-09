import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About ." text="We are happy to have u here"/>
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default Aboutus