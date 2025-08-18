import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Hero video for Le Surf Camp page using provided remote Pexels video URL.
// Remote video is fast to integrate; for performance later consider self-hosting a compressed 1080p version.
const SurfCampHeroVideo = () => {
  const { t } = useTranslation();
  const videoSrc = 'https://videos.pexels.com/video-files/11706866/11706866-uhd_2560_1440_30fps.mp4';

  return (
    <section id="surfcamp-hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="surf-video.mp4"
          crossOrigin="anonymous"
          onError={(e) => { e.currentTarget.src = 'surf-video.mp4'; }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4 w-full">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide mb-6 hero-text text-brand-sun-accent drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {t('navigation.surfCamp', 'Le Surf Camp')}
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl mb-8 font-light tracking-wide hero-text text-brand-sun-soft drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {t('heroExp.subtitle')}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed hero-text text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {t('heroExp.description')}
          </motion.p>
          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-6 h-10 border-2 border-brand-sun-soft rounded-full flex justify-center">
              <div className="w-1 h-3 bg-brand-sun-soft rounded-full mt-2" />
            </div>
            <p className="text-sm mt-2 tracking-wide text-brand-sun-soft">{t('heroExp.discover')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SurfCampHeroVideo;
