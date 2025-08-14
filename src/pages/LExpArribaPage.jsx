import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroVideo from '../components/lexparriba/HeroVideo';
import HistoireSection from '../components/lexparriba/HistoireSection';
import EquipeSection from '../components/lexparriba/EquipeSection';
import GallerieSection from '../components/lexparriba/GallerieSection';
import ScrollNavigation from '../components/lexparriba/ScrollNavigation';

const LExpArribaPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle navigation from homepage with specific section targets
    if (location.hash) {
      const targetSection = location.hash.substring(1);
      const element = document.getElementById(targetSection);
      if (element) {
        // Smooth scroll to the target section
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, [location]);

  return (
    <div className="l-exp-arriba-page w-full">
      <ScrollNavigation />
      <HeroVideo />
      <HistoireSection />
      <EquipeSection />
      <GallerieSection />
    </div>
  );
};

export default LExpArribaPage;
