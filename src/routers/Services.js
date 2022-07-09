import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Service from '../components/Service';

const Services = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Services" text="Our services is right bellow"/>
      <Service />
      <Footer />
    </div>
  )
}

export default Services