import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'hero', label: 'Accueil', icon: '🏠' },
    { id: 'histoire', label: 'Histoire', icon: '📖' },
    { id: 'equipe', label: 'Équipe', icon: '👥' },
    { id: 'vie-arriba', label: 'La Vie', icon: '📸' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Show navigation after scrolling past hero
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > window.innerHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className="fixed top-1/2 right-8 transform -translate-y-1/2 z-40 hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    block w-12 h-12 rounded-full mb-2 last:mb-0 transition-all duration-300 
                    flex items-center justify-center relative group
                    ${activeSection === section.id 
                      ? 'bg-[#FF6B35] text-white shadow-lg' 
                      : 'bg-transparent text-gray-600 hover:bg-gray-100'
                    }
                  `}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-lg">{section.icon}</span>
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 0, x: 0 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    {section.label}
                    <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                  </motion.div>

                  {/* Active indicator */}
                  {activeSection === section.id && (
                    <motion.div
                      className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#FF6B35] rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 lg:hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center space-x-1">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    w-10 h-10 rounded-full transition-all duration-300 
                    flex items-center justify-center
                    ${activeSection === section.id 
                      ? 'bg-[#FF6B35] text-white shadow-lg' 
                      : 'bg-transparent text-gray-600 hover:bg-gray-100'
                    }
                  `}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-sm">{section.icon}</span>
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Back to Home Button */}
      <motion.div
        className="fixed top-6 left-6 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <Link to="/">
          <motion.button
            className="w-12 h-12 bg-white bg-opacity-90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#2E5984] hover:bg-opacity-100 transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(46, 89, 132, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </motion.button>
        </Link>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2E5984] to-[#FF6B35] z-50 origin-left"
        style={{
          scaleX: 0
        }}
        animate={{
          scaleX: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default ScrollNavigation;
