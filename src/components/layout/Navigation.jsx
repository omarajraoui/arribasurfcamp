import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/arribalogo-nobg.png';

const Navigation = ({ isVisible }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language.toUpperCase() || 'EN');
  const navigate = useNavigate();
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const changeLanguage = (langCode) => {
    const languageMap = {
      'ESP': 'es',
      'ENG': 'en', 
      'FR': 'fr',
      'NL': 'nl',
      'ID': 'id'
    };
    
    i18n.changeLanguage(languageMap[langCode]);
    setSelectedLanguage(langCode);
  };

  const handleNavigation = (path) => {
    // Hash navigation handling for pages with internal sections
    const handleHashNav = (base) => {
      const hash = path.split('#')[1];
      navigate(base);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    };

    if (path.startsWith('/lexparriba#')) {
      handleHashNav('/lexparriba');
    } else if (path.startsWith('/le-surf-camp#')) {
      handleHashNav('/le-surf-camp');
    } else {
      navigate(path);
    }
    setActiveDropdown(null);
  };

  const handleDropdownEnter = (dropdown) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 500); // 500ms delay as recommended in MD
    setDropdownTimeout(timeout);
  };

  return (
    <motion.nav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -72, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
  <div className="relative bg-white/95 backdrop-blur-md border-b border-gray-200/40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-2 md:py-3">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="relative group text-gray-800 font-medium tracking-wide cursor-pointer hover:text-orange-500 transition-colors duration-300"
            >
              <span className="pb-1 inline-block">{t('navigation.home')}</span>
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </button>
            <div 
              className="relative dropdown"
              onMouseEnter={() => handleDropdownEnter('exp')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="relative group text-gray-800 flex items-center font-medium tracking-wide hover:text-orange-500 transition-colors duration-300">
                <span className="pb-1">{t('navigation.experience')}</span>
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'exp' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur rounded-lg shadow-subtle py-2 border border-brand-sand-deep/60 dropdown-menu"
                  onMouseEnter={() => handleDropdownEnter('exp')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button 
                    onClick={() => handleNavigation('/lexparriba#histoire')}
                    className="block w-full text-left px-4 py-2 text-brand-ink/90 hover:bg-brand-sand hover:text-brand-ink rounded-md transition-colors font-medium"
                  >
                    {t('navigation.history')}
                  </button>
                  <button 
                    onClick={() => handleNavigation('/lexparriba#equipe')}
                    className="block w-full text-left px-4 py-2 text-brand-ink/90 hover:bg-brand-sand hover:text-brand-ink rounded-md transition-colors font-medium"
                  >
                    {t('navigation.team')}
                  </button>
                  <button 
                    onClick={() => handleNavigation('/lexparriba#vie-arriba')}
                    className="block w-full text-left px-4 py-2 text-brand-ink/90 hover:bg-brand-sand hover:text-brand-ink rounded-md transition-colors font-medium"
                  >
                    {t('navigation.life')}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Center Logo (further enlarged) */}
          <div className="flex flex-col items-center px-3 select-none">
            <button 
              onClick={() => handleNavigation('/')}
              className="flex items-center group"
            >
              <img src={logo} alt="Arriba Surf Camp Logo" className="h-20 sm:h-24 w-auto drop-shadow-md transition-transform group-hover:scale-105" />
            </button>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-8">
            <div 
              className="relative dropdown"
              onMouseEnter={() => handleDropdownEnter('surf')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="relative group text-brand-ink flex items-center font-medium tracking-wide">
                <span className="pb-1">{t('navigation.surfCamp')}</span>
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-brand-sun group-hover:w-full transition-all duration-300 rounded-full"></span>
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'surf' && (
                <div 
                  className="absolute top-full right-0 mt-2 w-52 bg-white/95 backdrop-blur rounded-lg shadow-subtle py-2 border border-brand-sand-deep/60 dropdown-menu"
                  onMouseEnter={() => handleDropdownEnter('surf')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button 
                    onClick={() => handleNavigation('/le-surf-camp#chambres')}
                    className="block w-full text-left px-4 py-2 text-brand-ink/90 hover:bg-brand-sand hover:text-brand-ink rounded-md transition-colors font-medium"
                  >
                    {t('navigation.rooms')}
                  </button>
                  <button 
                    onClick={() => handleNavigation('/le-surf-camp#villa')}
                    className="block w-full text-left px-4 py-2 text-brand-ink/90 hover:bg-brand-sand hover:text-brand-ink rounded-md transition-colors font-medium"
                  >
                    {t('navigation.villa')}
                  </button>
                  <button 
                    onClick={() => handleNavigation('/le-surf-camp#planning')}
                    className="block w-full text-left px-4 py-2 text-brand-ink/90 hover:bg-brand-sand hover:text-brand-ink rounded-md transition-colors font-medium"
                  >
                    {t('navigation.planning')}
                  </button>
                </div>
              )}
            </div>
            
            {/* Language Selector */}
            <div className="flex space-x-1 bg-brand-sand/70 rounded-full px-2 py-1 border border-brand-sand-deep/70">
              {['ESP', 'ENG', 'FR', 'NL', 'ID'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`px-2 py-0.5 text-[11px] font-semibold tracking-wide rounded-full transition-all ${
                    selectedLanguage === lang 
                      ? 'bg-brand-sun text-brand-ink shadow-sm' 
                      : 'text-brand-ink/60 hover:text-brand-ink'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <button onClick={() => handleNavigation('/book-now')} className="group relative overflow-hidden bg-brand-sun text-brand-ink px-6 py-2 rounded-full font-semibold shadow-subtle hover:shadow-md transition-all border border-brand-sun-soft/60">
              <span className="relative z-10">{t('navigation.bookNow')}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-sun-soft/0 via-white/30 to-brand-sun-soft/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          </div>
        </div>
  {/* Removed bottom gradient bar for cleaner transparent nav */}
      </div>
    </motion.nav>
  );
};

export default Navigation;
