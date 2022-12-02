import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About ." text="Le VIH ( le virus de l'immunodéficience humaine) est une infection sexuellement transmissible (IST). Le SIDA est la manifestation clinique de la progression de l’infection VIH. Le VIH se caractérise par une réduction progressive du système de défense immunitaire, notamment d’un certain type de globules blancs (les lymphocytes T CD4). En l'absence de traitement, cette diminution des défenses entraîne un risque élevé de survenue d’infections et de cancers dont les conséquences peuvent être mortelles."/>
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default Aboutus