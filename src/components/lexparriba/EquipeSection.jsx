import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const EquipeSection = () => {
  const { t } = useTranslation();
  const teamMembers = t('team.members', { returnObjects: true }) || [];

  return (
  <section id="equipe" className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-orange-100 py-24 px-4 relative overflow-hidden">
      {/* Background (decorations removed for cleaner look) */}
  <div className="absolute inset-0 pointer-events-none" />

      {/* Section Title */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
  <h2 className="text-5xl md:text-6xl font-extrabold text-brand-ink mb-6 tracking-tight">{t('team.title')}</h2>
  <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">{t('team.subtitle')}</p>
      </motion.div>

      {/* Team Grid */}
      <div className="relative w-full px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 max-w-6xl mx-auto px-2 md:px-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="relative cursor-pointer justify-self-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100"
              style={{ transform: 'rotate(0deg)' }}
              initial={{ 
                opacity: 0, 
                y: 40
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: 'easeOut'
              }}
              viewport={{ once: true }}
              whileHover={{ 
                translateY: -8,
                boxShadow: '0 12px 28px -6px rgba(0,0,0,0.15)'
              }}
            >
              {/* Photo */}
              <div className="w-full aspect-square mb-4 rounded-t-2xl overflow-hidden relative">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  />
                  {/* Role Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow">
                    {member.role}
                  </div>
                </div>
              {/* Content */}
              <div className="px-6 pb-6 space-y-3">
                <h3 className="text-2xl font-semibold text-brand-ink tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-600">
                  {member.bio}
                </p>
              </div>

              {/* Sticky Note (hidden if no text) */}
              {member.stickyNote && (
                <motion.div
                  className={`sticky-note ${member.noteColor} absolute -top-5 -right-5 transform rotate-3 max-w-32`}
                  initial={{ scale: 0, rotate: 45 }}
                  whileInView={{ scale: 1, rotate: 3 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  <p className="text-xs font-semibold text-brand-ink">
                    {member.stickyNote}
                  </p>
                </motion.div>
              )}

              {/* Removed washi tape, push pins and corner tape for cleaner professional look */}
            </motion.div>
          ))}
        </div>

        {/* Floating Doodles */}
        <motion.div
          className="absolute top-20 left-1/4"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" className="text-yellow-400">
            <path
              d="M25 5 L30 20 L45 20 L35 30 L40 45 L25 35 L10 45 L15 30 L5 20 L20 20 Z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-1/4"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-pink-400">
            <circle cx="20" cy="20" r="15" fill="currentColor" opacity="0.5"/>
            <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.7"/>
          </svg>
        </motion.div>
      </div>

      {/* Bottom Handwritten Note (removed per request if empty) */}
  {t('team.closingNote') && t('team.closingNote').trim().length > 0 && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="sticky-note yellow transform -rotate-2 max-w-md">
            <p className="handwritten text-lg text-center">{t('team.closingNote')}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default EquipeSection;
