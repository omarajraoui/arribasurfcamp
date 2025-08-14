import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ScrapbookGrid = ({ photos, onPhotoClick }) => {
  // Generate randomized positions that don't overlap
  const generatePositions = (photos) => {
    const positions = [];
    const occupiedAreas = [];
    
    // Grid system: divide into safe zones to prevent overlap
    const gridCols = 6;
    const gridRows = Math.ceil(photos.length / 2);
    const cellWidth = 100 / gridCols;
    const cellHeight = 100 / gridRows;
    
    photos.forEach((photo, index) => {
      let position;
      let attempts = 0;
      const maxAttempts = 50;
      
      do {
        // Calculate base grid position
        const row = Math.floor(index / 3);
        const col = index % 3;
        
        // Add randomization within safe bounds
        const baseX = (col * 33) + Math.random() * 20 - 10; // 33% width with ±10% variation
        const baseY = (row * 25) + Math.random() * 15 - 7.5; // 25% height with ±7.5% variation
        
        position = {
          x: Math.max(5, Math.min(85, baseX)), // Keep within 5-85% bounds
          y: Math.max(5, Math.min(85, baseY)), // Keep within 5-85% bounds
          rotation: (Math.random() - 0.5) * 20, // ±10 degrees
          scale: 0.9 + Math.random() * 0.2, // 0.9 to 1.1 scale
          zIndex: Math.floor(Math.random() * 10) + 1
        };
        
        attempts++;
      } while (attempts < maxAttempts && isOverlapping(position, occupiedAreas));
      
      // Mark this area as occupied
      occupiedAreas.push({
        x: position.x - 8, // Margin for card size
        y: position.y - 8,
        width: 16,
        height: 16
      });
      
      positions.push(position);
    });
    
    return positions;
  };
  
  // Check if a position overlaps with existing occupied areas
  const isOverlapping = (newPos, occupiedAreas) => {
    const cardMargin = 12; // Minimum space between cards
    return occupiedAreas.some(area => {
      return !(newPos.x + cardMargin < area.x || 
               newPos.x - cardMargin > area.x + area.width ||
               newPos.y + cardMargin < area.y || 
               newPos.y - cardMargin > area.y + area.height);
    });
  };

  // Memoize positions to prevent re-calculation on re-renders
  const photoPositions = useMemo(() => generatePositions(photos), [photos]);

  const getWashiTapeStyle = (index) => {
    const colors = ['blue', 'green', 'orange'];
    const positions = [
      { top: '-10px', left: '20%', width: '60%', transform: 'rotate(-5deg)' },
      { top: '20%', right: '-10px', height: '60%', width: '20px', transform: 'rotate(15deg)' },
      { bottom: '-10px', left: '30%', width: '40%', transform: 'rotate(8deg)' },
      { top: '30%', left: '-10px', height: '40%', width: '20px', transform: 'rotate(-12deg)' }
    ];
    
    return {
      ...positions[index % positions.length],
      background: `linear-gradient(90deg, ${
        colors[index % colors.length] === 'blue' ? '#74b9ff, #0984e3' :
        colors[index % colors.length] === 'green' ? '#55a3ff, #00b894' :
        '#fd79a8, #e17055'
      })`
    };
  };

  return (
    <div className="relative min-h-screen">
      {/* Desktop Scrapbook Layout */}
      <div className="hidden lg:block relative">
        {photos.map((photo, index) => {
          const position = photoPositions[index];
          return (
            <motion.div
              key={photo.id}
              className="absolute w-64 h-72 group cursor-pointer"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                zIndex: position.zIndex,
                transform: `rotate(${position.rotation}deg) scale(${position.scale})`
              }}
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={{ 
                opacity: 1, 
                scale: position.scale, 
                y: 0,
                rotate: position.rotation
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: position.scale * 1.05, 
                rotate: 0,
                zIndex: 50,
                transition: { duration: 0.3 }
              }}
              onClick={() => onPhotoClick(photo)}
            >
              {/* Polaroid Card */}
              <div className="polaroid bg-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {/* Washi Tape Decoration */}
                <div 
                  className="absolute washi-tape opacity-80"
                  style={getWashiTapeStyle(index)}
                />
                
                {/* Photo */}
                <div className="w-full h-48 overflow-hidden bg-gray-100">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Caption Area */}
                <div className="p-4 bg-white">
                  <h3 className="handwritten text-sm font-medium text-brand-ink mb-1 transform -rotate-1">
                    {photo.title}
                  </h3>
                  <p className="casual-handwriting text-xs text-brand-ink/70 transform rotate-0.5">
                    {photo.description}
                  </p>
                </div>
                
                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute top-4 right-4 w-10 h-10 bg-brand-sun rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tablet Grid */}
      <div className="hidden md:grid lg:hidden grid-cols-3 gap-6 px-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -2 : 2 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            onClick={() => onPhotoClick(photo)}
          >
            <div className="polaroid bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 overflow-hidden bg-gray-100">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="handwritten text-sm font-medium text-brand-ink mb-1">
                  {photo.title}
                </h3>
                <p className="casual-handwriting text-xs text-brand-ink/70">
                  {photo.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Grid */}
      <div className="grid md:hidden grid-cols-2 gap-4 px-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -1 : 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            onClick={() => onPhotoClick(photo)}
          >
            <div className="polaroid bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-full h-32 overflow-hidden bg-gray-100">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-white">
                <h3 className="handwritten text-xs font-medium text-brand-ink mb-1">
                  {photo.title}
                </h3>
                <p className="casual-handwriting text-xs text-brand-ink/70 truncate">
                  {photo.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScrapbookGrid;
