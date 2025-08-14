import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PhotoFilter = ({ categories, activeFilter, onFilterChange }) => {
  const { t } = useTranslation();
  return (
    <div className="filter-container mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            className={`
              px-6 py-3 rounded-full font-semibold transition-all duration-300 
              flex items-center gap-2 min-w-fit
              ${activeFilter === category.id 
                ? 'bg-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/30' 
                : 'bg-white/80 text-brand-ink border-2 border-brand-sand hover:bg-brand-sand hover:border-[#FF6B35]'
              }
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: activeFilter === category.id 
                ? "0 10px 30px rgba(255, 107, 53, 0.4)"
                : "0 5px 15px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="text-sm uppercase tracking-wide">{category.label}</span>
            
            {/* Active indicator */}
            {activeFilter === category.id && (
              <motion.div
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Filter Description */}
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
  <p className="text-brand-ink/70 text-sm">{t(`photoFilter.descriptions.${activeFilter}`)}</p>
      </motion.div>

      {/* Decorative Wave */}
      <div className="flex justify-center mt-8">
        <motion.svg
          width="120"
          height="20"
          viewBox="0 0 120 20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <path
            d="M10 10 Q30 5 50 10 T90 10 T110 10"
            stroke="#FF6B35"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default PhotoFilter;
