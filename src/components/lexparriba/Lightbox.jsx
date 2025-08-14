import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ photo, photos, onClose, onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = photos.findIndex(p => p.id === photo.id);
    setCurrentIndex(index);
  }, [photo, photos]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          navigatePrevious();
          break;
        case 'ArrowRight':
          navigateNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex]);

  const navigatePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    setCurrentIndex(newIndex);
    onNavigate(photos[newIndex]);
  };

  const navigateNext = () => {
    const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    onNavigate(photos[newIndex]);
  };

  const currentPhoto = photos[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Close Button */}
        <motion.button
          className="absolute top-6 right-6 z-10 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>

        {/* Previous Button */}
        <motion.button
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200"
          onClick={navigatePrevious}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        {/* Next Button */}
        <motion.button
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200"
          onClick={navigateNext}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Main Content */}
        <div className="max-w-5xl max-h-[90vh] w-full mx-auto">
          <motion.div
            key={currentPhoto.id}
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Image */}
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <motion.div
              className="mt-6 text-center text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-2">{currentPhoto.title}</h2>
              <p className="text-gray-300 text-lg mb-4">{currentPhoto.description}</p>
              
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35] rounded-full">
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {currentPhoto.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Photo Counter */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <p className="text-sm opacity-75">
            {currentIndex + 1} de {photos.length}
          </p>
          
          {/* Progress Bar */}
          <div className="w-32 h-1 bg-white bg-opacity-20 rounded-full mt-2 mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-[#FF6B35] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / photos.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Thumbnail Navigation */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-lg overflow-x-auto px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          {photos.map((thumbPhoto, index) => (
            <motion.button
              key={thumbPhoto.id}
              className={`
                flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200
                ${index === currentIndex 
                  ? 'border-[#FF6B35] opacity-100' 
                  : 'border-transparent opacity-60 hover:opacity-80'
                }
              `}
              onClick={() => {
                setCurrentIndex(index);
                onNavigate(thumbPhoto);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={thumbPhoto.src}
                alt={thumbPhoto.title}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Share Button */}
        <motion.div
          className="absolute top-6 left-6 z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <button className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
