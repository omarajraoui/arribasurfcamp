import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="team-card bg-white rounded-xl shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px rgba(46, 89, 132, 0.15)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Photo Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Surf-themed border overlay */}
        <div className="absolute inset-0 border-4 border-transparent">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-transparent to-[#2E5984] opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        {/* Experience Badge */}
        <motion.div
          className="absolute top-4 right-4 bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-semibold"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {member.experience}
        </motion.div>

        {/* Hover overlay with specialties */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center text-white">
            <h4 className="font-semibold mb-2 text-[#FF6B35]">Spécialités</h4>
            <ul className="space-y-1 text-sm">
              {member.specialties.map((specialty, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#FF6B35] rounded-full mr-2"></span>
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Name */}
        <motion.h3 
          className="text-xl font-bold text-[#2E5984] mb-2"
          animate={{
            color: isHovered ? "#FF6B35" : "#2E5984"
          }}
          transition={{ duration: 0.3 }}
        >
          {member.name}
        </motion.h3>

        {/* Role */}
        <p className="text-[#FF6B35] font-semibold mb-3 text-sm uppercase tracking-wide">
          {member.role}
        </p>

        {/* Bio */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {member.bio}
        </p>

        {/* Decorative Wave */}
        <div className="flex justify-center">
          <motion.svg
            width="60"
            height="20"
            viewBox="0 0 60 20"
            animate={{
              pathLength: isHovered ? 1 : 0.5
            }}
            transition={{ duration: 0.6 }}
          >
            <path
              d="M5 10 Q15 5 25 10 T45 10 T55 10"
              stroke="#2E5984"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </motion.svg>
        </div>
      </div>

      {/* Bottom Accent */}
      <motion.div
        className="h-1 bg-gradient-to-r from-[#2E5984] to-[#FF6B35]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
};

export default TeamCard;
