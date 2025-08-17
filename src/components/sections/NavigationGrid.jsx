import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NavigationGrid = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const handleCardClick = (link, title) => {
    // Map cards to their corresponding sections in L'Exp Arriba page
    const sectionMap = {
      [t('cards.arriba')]: 'histoire',       // Arriba -> L'Histoire section
      [t('cards.team')]: 'equipe',           // L'Équipe -> L'Équipe section  
      [t('cards.gallery')]: 'vie-arriba'    // Galerie -> La Vie Arriba section
    };
    
    // Map secondary surf camp cards to their sections on /le-surf-camp
    const surfCampSectionMap = {
      [t('cards.rooms')]: 'chambres',
      [t('cards.villa')]: 'villa',
      [t('cards.planning')]: 'planning'
    };
    
    const expSection = sectionMap[title];
    const surfCampSection = surfCampSectionMap[title];

    if (expSection) {
      navigate(`/lexparriba#${expSection}`);
      setTimeout(() => {
        const el = document.getElementById(expSection);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return;
    }

    if (surfCampSection) {
      navigate(`/le-surf-camp#${surfCampSection}`);
      setTimeout(() => {
        const el = document.getElementById(surfCampSection);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120); // slightly longer to ensure page mount
      return;
    }

    // Fallback: simple navigation if provided
    if (link) navigate(link);
  };
  
  // Import static images so Vite bundles them correctly (direct /src paths won't resolve in production)
  // Using dynamic requires is avoided so tree-shaking/hashing works.
  const imgArriba = new URL('../../assets/Arriba.PNG', import.meta.url).href;
  const imgEquipe = new URL('../../assets/equipe.JPG', import.meta.url).href;
  const imgChambre = new URL('../../assets/chambre.JPG', import.meta.url).href;
  const imgVilla = new URL('../../assets/villa.jpg', import.meta.url).href;
  const imgPlanning = new URL('../../assets/planning.jpg', import.meta.url).href;

  const primaryMini = [
    { title: t('cards.arriba'), image: imgArriba, link: '/histoire' },
    { title: t('cards.team'), image: imgEquipe, link: '/equipe' },
    { title: t('cards.gallery'), image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&h=300&fit=crop&auto=format', link: '/vie-arriba' }
  ];
  const secondaryCards = [
    { title: t('cards.rooms'), image: imgChambre, link: '/le-surf-camp#chambres' },
    { title: t('cards.villa'), image: imgVilla, link: '/le-surf-camp#villa' },
    { title: t('cards.planning'), image: imgPlanning, link: '/le-surf-camp#planning' }
  ];

  const getCardIcon = (title) => {
    // Map translated titles back to icon keys
    const iconMap = {
      'Arriba': 'home',
      "L'Équipe": 'team', 
      'Galerie': 'gallery',
      'Galerij': 'gallery', // Dutch
      'Galería': 'gallery', // Spanish
      'Chambres': 'rooms',
      'Kamers': 'rooms', // Dutch
      'Habitaciones': 'rooms', // Spanish
      'Kamar': 'rooms', // Indonesian
      'Villa': 'villa',
      'Planning': 'planning',
      'Jadwal': 'planning' // Indonesian
    };

    const iconType = iconMap[title] || 'default';
    
    switch (iconType) {
      case 'home':
        return <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z"/>;
      case 'team':
        return <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>;
      case 'gallery':
        return <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>;
      case 'rooms':
        return <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>;
      case 'villa':
        return <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>;
      case 'planning':
        return <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 7h12v9a1 1 0 01-1 1H5a1 1 0 01-1-1V7z"/>;
      default:
        return <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 10l6.91-.74L12 2z"/>;
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-brand-sand-alt/40">
      <div className="w-full max-w-none mx-auto px-8 lg:px-16">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin snap-x snap-mandatory" style={{ WebkitOverflowScrolling: 'touch' }}>
          {[...primaryMini, ...secondaryCards].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => handleCardClick(card.link, card.title)}
              className="relative flex-1 min-w-[200px] md:min-w-[220px] lg:min-w-0 lg:basis-1/6 h-48 snap-start overflow-hidden cursor-pointer group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/30 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-4">
                  {/* Top Icon */}
                  <div className="flex justify-end">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        {getCardIcon(card.title)}
                      </svg>
                    </div>
                  </div>
                  
                  {/* Bottom Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-sun-accent transition-colors duration-300">
                        {card.title}
                      </h3>
                      <span className="text-xs tracking-wider text-white/80 uppercase font-medium">
                        {t('cards.discover')}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-sun-accent rounded-full w-8 group-hover:w-full transition-all duration-500 ease-out" />
                    </div>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-brand-sun-accent/60 transition-all duration-300" />
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationGrid;
