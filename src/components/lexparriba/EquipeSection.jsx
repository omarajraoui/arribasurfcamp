import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const EquipeSection = () => {
  const { t } = useTranslation();
  const teamMembers = t('team.members', { returnObjects: true }) || [];

  return (
    <section id="equipe" className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-20 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scattered Stickers */}
        <div className="absolute top-[10%] left-[15%] w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl transform rotate-12 opacity-80">
          🌊
        </div>
        <div className="absolute top-[25%] right-[20%] w-14 h-14 bg-pink-400 rounded-full flex items-center justify-center text-xl transform -rotate-12 opacity-80">
          🏄‍♀️
        </div>
        <div className="absolute bottom-[20%] left-[10%] w-18 h-18 bg-blue-400 rounded-full flex items-center justify-center text-2xl transform rotate-45 opacity-80">
          ⭐
        </div>
        <div className="absolute bottom-[40%] right-[15%] w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-lg transform -rotate-30 opacity-80">
          🤙
        </div>
        
        {/* Washi Tape Strips */}
        <div className="absolute top-[20%] left-0 w-[35%] h-5 bg-gradient-to-r from-blue-400/60 to-purple-400/60 transform rotate-3"></div>
        <div className="absolute top-[40%] right-0 w-[45%] h-5 bg-gradient-to-l from-yellow-400/60 to-orange-400/60 transform -rotate-4"></div>
        <div className="absolute top-[60%] left-[20%] w-[70%] h-4 bg-gradient-to-r from-green-400/50 to-emerald-400/50 transform rotate-2"></div>
        <div className="absolute bottom-[30%] right-[10%] w-[40%] h-6 bg-gradient-to-l from-red-400/60 to-pink-400/60 transform rotate-8"></div>
        
        {/* Multiple Handwritten Annotations */}
  <div className="absolute top-[12%] left-[40%] transform rotate-3 font-['Kalam'] text-purple-700 text-lg font-bold">{t('team.annotations.bestTeam')}</div>
  <div className="absolute top-[30%] right-[45%] transform -rotate-2 font-['Caveat'] text-blue-600 text-xl">{t('team.annotations.family')}</div>
  <div className="absolute bottom-[40%] left-[30%] transform rotate-4 font-['Permanent_Marker'] text-orange-600 text-lg">{t('team.annotations.legends')}</div>
  <div className="absolute bottom-[50%] right-[35%] transform -rotate-3 font-['Kalam'] text-green-700 text-md">{t('team.annotations.memories')}</div>
        
        {/* Doodle Elements */}
        <svg className="absolute top-[35%] left-[50%] w-20 h-12 text-orange-500 transform rotate-12 opacity-70" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 12l3-3v2h14l-3-3m3 3l-3 3v-2H5l3 3" />
        </svg>
        <svg className="absolute bottom-[35%] right-[50%] w-16 h-10 text-pink-500 transform -rotate-6 opacity-70" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      {/* Section Title */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
  <h2 className="text-6xl font-bold text-orange-600 mb-4 handwritten transform -rotate-2">{t('team.title')}</h2>
  <p className="text-xl text-gray-700 max-w-2xl mx-auto casual-handwriting">{t('team.subtitle')}</p>
      </motion.div>

      {/* Team Grid */}
      <div className="relative w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="relative scrapbook-item cursor-pointer justify-self-center"
              style={{ transform: `rotate(${member.rotation}deg)` }}
              initial={{ 
                opacity: 0, 
                scale: 0, 
                rotate: 0,
                y: 50
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                rotate: member.rotation,
                y: 0
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 0,
                zIndex: 30,
                transition: { duration: 0.3 }
              }}
            >
              {/* Polaroid Photo */}
              <div className="polaroid max-w-xs">
                {/* Photo */}
                <div className="w-64 h-64 mb-4 rounded-sm overflow-hidden relative">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Role Badge */}
                  <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded marker-text text-sm transform -rotate-3 shadow-lg">
                    {member.role}
                  </div>
                </div>
                
                {/* Name */}
                <h3 className="handwritten text-2xl font-bold text-center mb-2 transform rotate-1">
                  {member.name}
                </h3>
                
                {/* Bio */}
                <p className="casual-handwriting text-sm leading-relaxed text-gray-700 px-2">
                  {member.bio}
                </p>
              </div>

              {/* Sticky Note */}
              <motion.div
                className={`sticky-note ${member.noteColor} absolute -top-6 -right-8 transform rotate-12 max-w-32`}
                initial={{ scale: 0, rotate: 45 }}
                whileInView={{ scale: 1, rotate: 12 }}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                <p className="handwritten text-xs font-bold">
                  {member.stickyNote}
                </p>
              </motion.div>

              {/* Washi Tape */}
              <div 
                className={`washi-tape ${
                  index % 3 === 0 ? 'green' : index % 3 === 1 ? 'blue' : 'orange'
                } w-16 h-3 absolute ${
                  index % 2 === 0 ? '-bottom-3 -right-6' : '-top-3 -left-6'
                } transform ${index % 2 === 0 ? 'rotate-45' : '-rotate-45'}`}
              ></div>

              {/* Push Pin */}
              <div className={`absolute w-3 h-3 ${
                index % 3 === 0 ? 'bg-red-500' : index % 3 === 1 ? 'bg-blue-500' : 'bg-yellow-500'
              } rounded-full shadow-lg ${
                index % 2 === 0 ? '-top-1 -left-1' : '-top-1 -right-1'
              }`}></div>

              {/* Corner Tape Pieces */}
              <div className="absolute -top-1 left-4 w-8 h-2 bg-gray-200 opacity-60 transform rotate-12"></div>
              <div className="absolute -bottom-1 right-4 w-8 h-2 bg-gray-200 opacity-60 transform -rotate-12"></div>
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

      {/* Bottom Handwritten Note */}
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
    </section>
  );
};

export default EquipeSection;
