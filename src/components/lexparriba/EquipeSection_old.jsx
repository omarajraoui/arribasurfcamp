import React from 'react';
import { motion } from 'framer-motion';

const EquipeSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Surf Instructor",
      bio: "Rider depuis toujours, Alex transforme chaque session en aventure magique. Son secret ? Il connaît les vagues mieux que personne!",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      stickyNote: "Best barrel rider in Indo! 🏄‍♂️",
      position: { top: "12%", left: "5%" },
      rotation: "-6deg",
      noteColor: "yellow"
    },
    {
      id: 2,
      name: "Sophie Laurent",
      role: "Chef Cuisine",
      bio: "Des saveurs qui racontent des histoires, des plats qui créent des souvenirs. Sophie cuisine avec son cœur et ça se goûte!",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      stickyNote: "Magic in every dish ✨",
      position: { top: "12%", right: "5%" },
      rotation: "5deg",
      noteColor: "pink"
    },
    {
      id: 3,
      name: "Budi Santoso",
      role: "Boat Captain",
      bio: "Les spots secrets n'ont plus de secrets pour Budi. Capitaine d'expérience, il vous mène vers les vagues de vos rêves en toute sécurité.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      stickyNote: "Local legend! 🚤",
      position: { top: "35%", left: "8%" },
      rotation: "3deg",
      noteColor: "blue"
    },
    {
      id: 4,
      name: "Maria Santos",
      role: "Camp Manager",
      bio: "L'âme d'Arriba, Maria veille à ce que chaque détail soit parfait. Avec elle, vous vous sentez comme à la maison dès le premier jour.",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      stickyNote: "Makes everything perfect 💫",
      position: { top: "35%", right: "8%" },
      rotation: "-4deg",
      noteColor: "yellow"
    },
    {
      id: 5,
      name: "Jake Thompson",
      role: "Surf Coach",
      bio: "Patient, passionné et plein d'énergie, Jake vous fait progresser tout en s'amusant. Ses techniques sont aussi solides que sa bonne humeur!",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      stickyNote: "Stoked 24/7! 🤙",
      position: { top: "58%", left: "12%" },
      rotation: "6deg",
      noteColor: "pink"
    },
    {
      id: 6,
      name: "Wayan Putra",
      role: "Maintenance",
      bio: "Le magicien qui garde tout en état parfait. Planches, bateaux, villa... avec Wayan, tout fonctionne comme une horloge suisse!",
      photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
      stickyNote: "Fix anything master 🔧",
      position: { top: "58%", right: "12%" },
      rotation: "-3deg",
      noteColor: "blue"
    }
  ];

  return (
    <section 
      id="equipe" 
      className="min-h-screen py-12 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #fef3c7 0%, #fde68a 25%, #fbbf24 50%, #f59e0b 75%, #d97706 100%)`,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3Ccircle cx='7' cy='17' r='1'/%3E%3Ccircle cx='17' cy='7' r='1'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      {/* DENSE Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Multiple Stickers Everywhere */}
        <div className="absolute top-[8%] left-[5%] text-4xl animate-bounce opacity-80">🏄‍♂️</div>
        <div className="absolute top-[15%] right-[8%] text-3xl animate-pulse opacity-90">⭐</div>
        <div className="absolute top-[25%] left-[15%] text-2xl animate-bounce delay-300 opacity-70">🌊</div>
        <div className="absolute top-[35%] right-[20%] text-3xl animate-pulse delay-500 opacity-80">❤️</div>
        <div className="absolute top-[45%] left-[25%] text-2xl animate-bounce delay-700 opacity-70">🤙</div>
        <div className="absolute top-[55%] right-[30%] text-3xl animate-pulse delay-900 opacity-80">🌴</div>
        <div className="absolute top-[65%] left-[35%] text-2xl animate-bounce delay-1100 opacity-70">🏖️</div>
        <div className="absolute top-[75%] right-[40%] text-3xl animate-pulse delay-1300 opacity-80">🌅</div>
        <div className="absolute bottom-[15%] left-[45%] text-2xl animate-bounce delay-1500 opacity-70">🎉</div>
        <div className="absolute bottom-[25%] right-[15%] text-3xl animate-pulse delay-200 opacity-80">✨</div>
        
        {/* Overlapping Washi Tape Strips */}
        <div className="absolute top-[20%] left-0 w-[60%] h-6 bg-gradient-to-r from-pink-400/60 to-purple-400/60 transform rotate-6 shadow-lg"></div>
        <div className="absolute top-[22%] left-[5%] w-[50%] h-4 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 transform rotate-3"></div>
        <div className="absolute top-[40%] right-0 w-[45%] h-5 bg-gradient-to-l from-yellow-400/60 to-orange-400/60 transform -rotate-4"></div>
        <div className="absolute top-[60%] left-[20%] w-[70%] h-4 bg-gradient-to-r from-green-400/50 to-emerald-400/50 transform rotate-2"></div>
        <div className="absolute bottom-[30%] right-[10%] w-[40%] h-6 bg-gradient-to-l from-red-400/60 to-pink-400/60 transform rotate-8"></div>
        
        {/* Multiple Handwritten Annotations */}
        <div className="absolute top-[12%] left-[40%] transform rotate-3 font-['Kalam'] text-purple-700 text-lg font-bold">
          "Best team ever! 🎉"
        </div>
        <div className="absolute top-[30%] right-[45%] transform -rotate-2 font-['Caveat'] text-blue-600 text-xl">
          Arriba Family ✨
        </div>
        <div className="absolute bottom-[40%] left-[30%] transform rotate-4 font-['Permanent_Marker'] text-orange-600 text-lg">
          LEGENDS!
        </div>
        <div className="absolute bottom-[50%] right-[35%] transform -rotate-3 font-['Kalam'] text-green-700 text-md">
          "Making memories 📸"
        </div>
        
        {/* Doodle Elements */}
        <svg className="absolute top-[35%] left-[50%] w-20 h-12 text-orange-500 transform rotate-12 opacity-70" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 12l3-3v2h14l-3-3m3 3l-3 3v-2H5l3 3" />
        </svg>
        <svg className="absolute bottom-[35%] right-[50%] w-16 h-10 text-pink-500 transform -rotate-6 opacity-70" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

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
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-pink-400">
            <path
              d="M20 5 Q30 15 20 25 Q10 15 20 5"
              fill="currentColor"
              opacity="0.7"
            />
          </svg>
        </motion.div>

        {/* Additional Scattered Elements */}
        <div className="absolute top-1/4 right-10 w-12 h-3 washi-tape blue transform rotate-12"></div>
        <div className="absolute bottom-1/3 left-8 w-16 h-3 washi-tape green transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 w-10 h-3 washi-tape orange transform rotate-45"></div>
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
          <p className="handwritten text-lg text-center">
            "Chaque membre de notre équipe apporte sa propre magie à l'expérience Arriba. 
            Ensemble, nous créons des souvenirs qui durent toute une vie! ❤️"
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default EquipeSection;
