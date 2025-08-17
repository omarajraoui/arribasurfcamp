import React, { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
// Lazy components to reduce initial bundle
const HeroVideo = lazy(() => import('../components/lexparriba/HeroVideo'));
const HistoireSection = lazy(() => import('../components/lexparriba/HistoireSection'));
const EquipeSection = lazy(() => import('../components/lexparriba/EquipeSection'));
const GallerieSection = lazy(() => import('../components/lexparriba/GallerieSection'));
const ScrollNavigation = lazy(() => import('../components/lexparriba/ScrollNavigation'));

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
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-brand-ink-soft text-sm">Loading...</div>}>
        <ScrollNavigation />
        <HeroVideo />
        <HistoireSection />
        <EquipeSection />
        <GallerieSection />
      </Suspense>
    </div>
  );
};

export default LExpArribaPage;
