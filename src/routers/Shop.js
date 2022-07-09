import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import Product from '../components/Product';

const Shop = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Shop ." text="Let's shop"/>
      <Product />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Shop