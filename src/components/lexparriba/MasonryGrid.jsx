import React from 'react';
import { motion } from 'framer-motion';

const MasonryGrid = ({ photos, onPhotoClick }) => {
  const getSizeClass = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-2';
      case 'small':
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getHeightClass = (size) => {
    switch (size) {
      case 'large':
        return 'h-96';
      case 'medium':
        return 'h-64';
      case 'small':
      default:
        return 'h-48';
    }
  };

  // Mobile specific height mapping for a varied vertical feed
  const getMobileHeightClass = (size) => {
    switch (size) {
      case 'large':
        return 'h-96';
      case 'medium':
        return 'h-72';
      case 'wide':
        return 'h-64';
      case 'small':
      default:
        return 'h-56';
    }
  };

  return (
    <motion.div 
      className="masonry-grid scrapbook-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Desktop Grid */}
  <div className="hidden lg:grid grid-cols-4 gap-3 auto-rows-min px-4 py-8">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
    className={`${getSizeClass(photo.size)} ${getHeightClass(photo.size)} group cursor-pointer relative overflow-hidden rounded-2xl scrapbook-card shadow-md`}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.02 }}
            onClick={() => onPhotoClick(photo)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                <p className="text-sm text-gray-200">{photo.description}</p>
              </div>
              
              {/* View Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Tablet Grid */}
  <div className="hidden md:grid lg:hidden grid-cols-3 gap-3 px-4 py-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
    className="h-64 group cursor-pointer relative overflow-hidden rounded-2xl scrapbook-card shadow-md"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.02 }}
            onClick={() => onPhotoClick(photo)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Overlay - same as desktop */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                <p className="text-sm text-gray-200">{photo.description}</p>
              </div>
              
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Vertical Feed (single column) */}
  <div className="md:hidden flex flex-col gap-5 px-4 py-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
    className={`${getMobileHeightClass(photo.size)} group cursor-pointer relative overflow-hidden rounded-2xl first:pt-0 scrapbook-card shadow-md`}
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onPhotoClick(photo)}
          >
            <img
              src={photo.src}
              alt={photo.title}
      className="w-full h-full object-cover transition-transform duration-700 group-active:scale-105"
              loading={index < 3 ? 'eager' : 'lazy'}
              decoding="async"
            />
            {/* Caption overlay appears with press for mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold text-base mb-1 line-clamp-1">{photo.title}</h3>
                <p className="text-[11px] text-gray-200 line-clamp-2 leading-snug">{photo.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MasonryGrid;
