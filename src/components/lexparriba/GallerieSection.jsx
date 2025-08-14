import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PhotoFilter from './PhotoFilter';
import MasonryGrid from './MasonryGrid';
import Lightbox from './Lightbox';

const GallerieSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t } = useTranslation();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photoCategories = ['all','surf','camp','food','sunsets','community'].map(id => ({ id, label: t(`photoFilter.categories.${id}`), icon: '' }));

  const galleryPhotos = [
    // Surf Sessions - High quality surf photos
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&h=800&fit=crop',
      category: 'surf',
      title: 'Perfect Barrel Ride',
      description: 'Dawn patrol session at our secret spot - pure stoke!',
      size: 'large'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=600&fit=crop',
      category: 'surf',
      title: 'Learning the Waves',
      description: 'First time surfer getting the hang of it',
      size: 'medium'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop',
      category: 'surf',
      title: 'Sunset Surf Magic',
      description: 'Golden hour sessions are the best',
      size: 'small'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
      category: 'surf',
      title: 'Big Wave Challenge',
      description: 'Advanced surfers tackling the bigger sets',
      size: 'medium'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
      category: 'surf',
      title: 'Aerial Maneuver',
      description: 'Taking surfing to the next level',
      size: 'wide'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1520637736862-4d197d17c80a?w=400&h=600&fit=crop',
      category: 'surf',
      title: 'Group Session Heading Out for Waves',
      description: 'Group session heading out for waves',
      size: 'medium'
    },
    
    // Beach Life & Camp
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop',
      category: 'camp',
      title: 'Beach Paradise',
      description: 'Our slice of Indonesian paradise',
      size: 'large'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      category: 'camp',
      title: 'Morning Yoga on Beach',
      description: 'Starting the day with mindfulness',
      size: 'small'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=600&fit=crop',
      category: 'camp',
      title: 'Beachfront Villa',
      description: 'Wake up to the sound of waves',
      size: 'medium'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop',
      category: 'camp',
      title: 'Beach Volleyball Fun',
      description: 'Afternoon games on the sand',
      size: 'wide'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?w=400&h=600&fit=crop',
      category: 'camp',
      title: 'Hammock Time',
      description: 'Perfect spot for afternoon naps',
      size: 'medium'
    },
    
    // Food & Island Life
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=600&fit=crop',
      category: 'food',
      title: 'Sophie\'s Island Fusion',
      description: 'French techniques meet Indonesian flavors',
      size: 'medium'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop',
      category: 'food',
      title: 'Fresh Tropical Feast',
      description: 'Local ingredients, incredible taste',
      size: 'small'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=800&fit=crop',
      category: 'food',
      title: 'Fresh Catch BBQ',
      description: 'Grilled fish straight from the ocean',
      size: 'large'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&h=400&fit=crop',
      category: 'food',
      title: 'Tropical Smoothie Bowls',
      description: 'Healthy fuel for surf sessions',
      size: 'wide'
    },
    
    // Epic Sunsets
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop',
      category: 'sunsets',
      title: 'Golden Hour Paradise',
      description: 'Every evening delivers magic like this',
      size: 'large'
    },
    {
      id: 17,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
      category: 'sunsets',
      title: 'Surfer Silhouettes',
      description: 'Heading home after epic sessions',
      size: 'medium'
    },
    {
      id: 18,
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
      category: 'sunsets',
      title: 'Mirror Perfect',
      description: 'When the ocean becomes glass',
      size: 'small'
    },
    {
      id: 19,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
      category: 'sunsets',
      title: 'Fire Sky Reflection',
      description: 'Nature\'s daily masterpiece',
      size: 'wide'
    },
    
    // Community & Friendships
    {
      id: 20,
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=600&fit=crop',
      category: 'community',
      title: 'Surf Buddies for Life',
      description: 'Friendships formed in the lineup',
      size: 'medium'
    },
    {
      id: 21,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=800&fit=crop',
      category: 'community',
      title: 'Camp Family Celebration',
      description: 'Birthday surprise Indonesian style',
      size: 'large'
    },
    {
      id: 22,
      src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=400&fit=crop',
      category: 'community',
      title: 'Group Photo Memories',
      description: 'Capturing the Arriba spirit',
      size: 'small'
    },
    {
      id: 23,
      src: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=600&h=400&fit=crop',
      category: 'community',
      title: 'Beach Bonfire Stories',
      description: 'Sharing tales under the stars',
      size: 'wide'
    },
    {
      id: 24,
      src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=600&fit=crop',
      category: 'community',
      title: 'Teaching Moments',
      description: 'Passing on surf wisdom and local culture',
      size: 'medium'
    },
    
    // Additional unique photos
    {
      id: 25,
      src: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=600&h=400&fit=crop',
      category: 'community',
      title: 'Beach Laughter',
      description: 'Spontaneous moments of pure joy',
      size: 'wide'
    },
    {
      id: 26,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      category: 'surf',
      title: 'Learning Together',
      description: 'Surf lessons with friends',
      size: 'medium'
    },
    {
      id: 27,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      category: 'camp',
      title: 'Morning Surf Check',
      description: 'Checking conditions before dawn patrol',
      size: 'small'
    },
    {
      id: 28,
      src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=800&fit=crop',
      category: 'food',
      title: 'Beach Picnic',
      description: 'Fresh local fruits and good vibes',
      size: 'large'
    }
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? galleryPhotos 
    : galleryPhotos.filter(photo => photo.category === activeFilter);

  return (
    <section id="vie-arriba" className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold uppercase tracking-wide text-brand-ink mb-6">{t('gallery.title')}</h2>
          <p className="text-xl text-brand-ink/80 max-w-3xl mx-auto leading-relaxed">{t('gallery.subtitle')}</p>
        </motion.div>

        {/* Photo Filter */}
        <PhotoFilter 
          categories={photoCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Photo Grid */}
        <AnimatePresence mode="wait">
          <MasonryGrid
            key={activeFilter}
            photos={filteredPhotos}
            onPhotoClick={setSelectedPhoto}
          />
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 bg-[#FF6B35] text-white font-semibold rounded-full hover:bg-[#E55A2B] transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t('gallery.loadMore')}
          </motion.button>
        </motion.div>

        {/* Social Call to Action */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-[#2E5984] to-[#FF6B35] rounded-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">{t('gallery.shareTitle')}</h3>
          <p className="text-white text-lg mb-6">{t('gallery.shareSubtitle')}</p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="https://www.instagram.com/arriba.surfcamp.bali?igsh=YWQ4eWI3bHR5dTBs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#2E5984] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              @arriba.surfcamp.bali
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <Lightbox 
          photo={selectedPhoto}
          photos={filteredPhotos}
          onClose={() => setSelectedPhoto(null)}
          onNavigate={setSelectedPhoto}
        />
      )}
    </section>
  );
};

export default GallerieSection;
