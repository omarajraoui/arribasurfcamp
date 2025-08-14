import React from 'react';
import { motion } from 'framer-motion';

const TimelineEntry = ({ year, title, content, position }) => {
  const alignmentClass = {
    left: 'text-right',
    right: 'text-left',
    center: 'text-center'
  }[position] || 'text-left';

  return (
    <motion.div 
      className={`p-8 bg-white rounded-lg shadow-lg ${alignmentClass} max-w-lg ${
        position === 'center' ? 'mx-auto' : ''
      }`}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(46, 89, 132, 0.1)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Year Badge */}
      <motion.div 
        className={`inline-block px-4 py-2 bg-[#FF6B35] text-white font-bold rounded-full mb-4 ${
          position === 'center' ? 'mx-auto' : ''
        }`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {year}
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-[#2E5984] mb-4 tracking-wide">
        {title}
      </h3>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed text-lg">
        {content}
      </p>

      {/* Decorative Element */}
      <div className={`mt-6 ${
        position === 'left' ? 'flex justify-end' : 
        position === 'right' ? 'flex justify-start' : 
        'flex justify-center'
      }`}>
        <div className="w-20 h-1 bg-gradient-to-r from-[#FF6B35] to-[#2E5984] rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default TimelineEntry;
