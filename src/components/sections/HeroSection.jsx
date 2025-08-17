import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BookingComponent from '../ui/BookingComponent';

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
  <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-brand-sand">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ 
          width: '100vw', 
          height: '100vh',
          objectFit: 'cover'
        }}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextElementSibling.style.display = 'block';
        }}
      >
  <source src="surf-video.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback background image if video doesn't load */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-600 hidden">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Overlay */}
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      
      {/* Content */}
  <div className="relative z-10 w-full text-center text-white px-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight hero-text text-brand-sun-accent drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 tracking-normal hero-text text-brand-sun-soft drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <div className="flex justify-center w-full">
          <BookingComponent />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
