import React from 'react';
import heroVideoSrc from '../../assets/gallery/lexparribavideo.mp4';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeroVideo = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Video element */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/surf-video.mp4"
          onError={(e)=>{ e.currentTarget.src='/surf-video.mp4'; }}
        >
          <source src={heroVideoSrc} type="video/mp4" />
          {/* Fallback gradient background if video unsupported */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-teal-700 to-blue-800"></div>
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide mb-6 hero-text text-brand-sun-accent drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {t('heroExp.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl mb-8 font-light tracking-wide hero-text text-brand-sun-soft drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {t('heroExp.subtitle')}
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed hero-text text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {t('heroExp.description')}
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="w-6 h-10 border-2 border-brand-sun-soft rounded-full flex justify-center">
              <div className="w-1 h-3 bg-brand-sun-soft rounded-full mt-2"></div>
            </div>
            <p className="text-sm mt-2 tracking-wide text-brand-sun-soft">{t('heroExp.discover')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroVideo;
