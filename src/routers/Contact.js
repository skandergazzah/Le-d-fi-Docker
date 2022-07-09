import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import From from '../components/From';

const Contact = () => {
  return (
    <div>
        <Navbar />
      <HeroImg2 heading="Contact ." text="Go contact us for what ever you want"/>
       <From/>
      <Footer />
    </div>
  )
}

export default Contact