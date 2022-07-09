import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Event from '../components/Event';

const Events = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Events ." text="Here our Events ! Let's Go"/>
      <Event />
      <Footer />
    </div>
  )
}

export default Events