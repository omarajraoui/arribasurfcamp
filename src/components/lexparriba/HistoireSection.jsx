import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HistoireSection = () => {
  const { t } = useTranslation();
  const timelineData = t('history.timeline', { returnObjects: true });

  return (
    <section 
      id="histoire" 
      className="min-h-screen py-12 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #ede9fe 0%, #ddd6fe 25%, #c4b5fd 50%, #a78bfa 75%, #8b5cf6 100%)`,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M10 1L5 6h10l-5-5zM10 19l5-5H5l5 5z'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      {/* DENSE Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scattered Timeline Stickers */}
        <div className="absolute top-[5%] left-[8%] text-3xl animate-bounce opacity-80">📅</div>
        <div className="absolute top-[12%] right-[12%] text-2xl animate-pulse opacity-90">⏰</div>
        <div className="absolute top-[20%] left-[20%] text-3xl animate-bounce delay-300 opacity-70">🌟</div>
        <div className="absolute top-[28%] right-[25%] text-2xl animate-pulse delay-500 opacity-80">💭</div>
        <div className="absolute top-[36%] left-[30%] text-3xl animate-bounce delay-700 opacity-70">🎯</div>
        <div className="absolute top-[44%] right-[35%] text-2xl animate-pulse delay-900 opacity-80">🚀</div>
        <div className="absolute top-[52%] left-[40%] text-3xl animate-bounce delay-1100 opacity-70">🏗️</div>
        <div className="absolute top-[60%] right-[45%] text-2xl animate-pulse delay-1300 opacity-80">🎉</div>
        <div className="absolute bottom-[20%] left-[50%] text-3xl animate-bounce delay-1500 opacity-70">👨‍👩‍👧‍👦</div>
        <div className="absolute bottom-[28%] right-[20%] text-2xl animate-pulse delay-200 opacity-80">💫</div>
        
        {/* Overlapping Washi Tape Timeline */}
        <div className="absolute top-[15%] left-0 w-[70%] h-8 bg-gradient-to-r from-orange-400/70 to-red-400/70 transform rotate-4 shadow-xl"></div>
        <div className="absolute top-[17%] left-[5%] w-[60%] h-5 bg-gradient-to-r from-pink-400/60 to-purple-400/60 transform rotate-2"></div>
        <div className="absolute top-[35%] right-0 w-[55%] h-6 bg-gradient-to-l from-blue-400/70 to-indigo-400/70 transform -rotate-3"></div>
        <div className="absolute top-[55%] left-[15%] w-[80%] h-7 bg-gradient-to-r from-green-400/60 to-emerald-400/60 transform rotate-1"></div>
        <div className="absolute bottom-[25%] right-[5%] w-[65%] h-6 bg-gradient-to-l from-yellow-400/70 to-orange-400/70 transform rotate-5"></div>
        
        {/* Story Annotations Everywhere */}
  <div className="absolute top-[8%] left-[45%] transform rotate-2 font-['Kalam'] text-orange-700 text-lg font-bold">{t('history.annotations.start')}</div>
  <div className="absolute top-[25%] right-[40%] transform -rotate-3 font-['Caveat'] text-purple-600 text-xl">{t('history.annotations.dreams')}</div>
  <div className="absolute top-[45%] left-[35%] transform rotate-4 font-['Permanent_Marker'] text-blue-600 text-md">{t('history.annotations.building')}</div>
  <div className="absolute bottom-[35%] right-[30%] transform -rotate-2 font-['Kalam'] text-green-700 text-lg">{t('history.annotations.family')}</div>
  <div className="absolute bottom-[45%] left-[25%] transform rotate-3 font-['Caveat'] text-red-600 text-lg">{t('history.annotations.adventures')}</div>
        
        {/* Timeline Doodles */}
        <svg className="absolute top-[30%] left-[55%] w-24 h-16 text-purple-500 transform rotate-15 opacity-60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
        <svg className="absolute bottom-[30%] right-[45%] w-20 h-14 text-orange-500 transform -rotate-8 opacity-60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      {/* Main Title */}
      <motion.div
        className="relative z-10 pt-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="marker-text text-6xl mb-4 transform -rotate-2">
          {t('history.title')}
        </h2>
        <div className="washi-tape blue w-32 h-4 mx-auto transform rotate-1"></div>
      </motion.div>

      {/* Structured Timeline Grid */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg font-['Permanent_Marker']">
            {t('history.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-['Caveat']">{t('history.subtitle')}</p>
        </motion.div>

        {/* Timeline Grid - Non-overlapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {timelineData.map((entry, index) => (
            <motion.div
              key={entry.year}
              className="relative group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                rotate: index % 2 === 0 ? 1 : -1
              }}
            >
              {/* Timeline Card */}
              <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white relative overflow-hidden">
                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full font-bold text-lg shadow-lg font-['Permanent_Marker']">
                  {entry.year}
                </div>
                
                {/* Photo Area */}
                <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-pink-300 mb-4 rounded-lg relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index % 5 === 0 ? '1505142468610-359e7d316be0' : 
                      index % 5 === 1 ? '1502680390469-be75c86b636f' :
                      index % 5 === 2 ? '1506905925346-21bda4d32df4' :
                      index % 5 === 3 ? '1518837695005-2083093ee35b' :
                      '1571896349842-33c89424de2d'
                    }?w=400&h=300&fit=crop`}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Photo Tape Effect */}
                  <div className="absolute -top-2 left-4 w-12 h-6 bg-yellow-200 opacity-70 transform rotate-45"></div>
                  <div className="absolute -top-2 right-4 w-12 h-6 bg-pink-200 opacity-70 transform -rotate-45"></div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-800 font-['Permanent_Marker'] transform -rotate-1">
                    {entry.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed font-['Kalam'] text-sm">
                    {entry.content}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-red-400 rounded-full shadow-lg"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-400 rounded-full shadow-lg"></div>
              </div>

              {/* Floating Sticky Note */}
              <motion.div
                className={`absolute -top-6 -right-4 ${
                  entry.noteColor === 'yellow' ? 'bg-yellow-200' :
                  entry.noteColor === 'pink' ? 'bg-pink-200' :
                  'bg-blue-200'
                } p-2 rounded-sm shadow-lg transform rotate-12 border-l-4 ${
                  entry.noteColor === 'yellow' ? 'border-yellow-400' :
                  entry.noteColor === 'pink' ? 'border-pink-400' :
                  'border-blue-400'
                }`}
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 12 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.1, rotate: 15 }}
              >
                <p className="font-['Caveat'] text-sm font-bold text-gray-700">
                  {entry.noteText}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute top-32 right-10"
          animate={{ 
            rotate: [0, 10, -10, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-orange-400">
            <path
              d="M30 5 Q40 15 30 25 Q20 15 30 5 M30 25 Q40 35 30 45 Q20 35 30 25"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-blue-400">
            <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="3" fill="none" />
            <path d="M10 20 L15 15 M25 15 L30 20 M30 20 L25 25 M15 25 L10 20" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoireSection;
