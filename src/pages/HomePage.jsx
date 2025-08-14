import React from 'react';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import NavigationGrid from '../components/sections/NavigationGrid';
import OfferSection from '../components/sections/OfferSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <NavigationGrid />
      <OfferSection />
      <Footer />
    </>
  );
};

export default HomePage;
