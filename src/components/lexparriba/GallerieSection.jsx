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
    // Row 1 (hero)
    { id: 1, category: 'surf', size: 'large', title: 'Perfect Barrel', description: 'Dawn patrol perfection', src: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=800&fit=crop' },
    // Row 2 (wide + small)
    { id: 2, category: 'camp', size: 'wide', title: 'Beach Paradise', description: 'Our slice of paradise', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop' },
    { id: 3, category: 'surf', size: 'small', title: 'Lineup Check', description: 'Reading the sets', src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop' },
    // Row 3 (2 medium)
    { id: 4, category: 'surf', size: 'medium', title: 'Learning the Waves', description: 'First rides stoke', src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop' },
    { id: 5, category: 'surf', size: 'medium', title: 'Big Wave Challenge', description: 'Charging bigger sets', src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop' },
    // Row 4 (4 small)
    { id: 6, category: 'sunsets', size: 'small', title: 'Mirror Sunset', description: 'Ocean turns to glass', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop' },
    { id: 7, category: 'food', size: 'small', title: 'Tropical Feast', description: 'Vibrant island plate', src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop' },
    { id: 8, category: 'community', size: 'small', title: 'Camp Smiles', description: 'Friends after session', src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=400&fit=crop' },
    { id: 9, category: 'food', size: 'small', title: 'Smoothie Bowl', description: 'Fuel for waves', src: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=400&fit=crop' },
    // Row 5 (wide + small)
    { id: 10, category: 'sunsets', size: 'wide', title: 'Fire Sky', description: 'Evening blaze', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop' },
    { id: 11, category: 'camp', size: 'small', title: 'Yoga Flow', description: 'Morning balance', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop' },
    // Row 6 (medium + small + small)
    { id: 12, category: 'camp', size: 'medium', title: 'Beachfront Villa', description: 'Wake to waves', src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop' },
    { id: 13, category: 'community', size: 'small', title: 'Teaching Moment', description: 'Sharing tips', src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=400&fit=crop' },
    { id: 14, category: 'food', size: 'small', title: 'Island Fusion', description: 'Local + French style', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop' },
    // Row 7 (small + medium + small)
    { id: 15, category: 'surf', size: 'small', title: 'Aerial Boost', description: 'Progression moment', src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop' },
    { id: 16, category: 'community', size: 'medium', title: 'Camp Celebration', description: 'Birthday vibes', src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop' },
    { id: 17, category: 'surf', size: 'small', title: 'Paddle Out', description: 'Heading for sets', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    // Row 8 (medium + medium)
    { id: 18, category: 'food', size: 'medium', title: 'Fresh Catch BBQ', description: 'Ocean to grill', src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop' },
    { id: 19, category: 'community', size: 'medium', title: 'Bonfire Night', description: 'Stories & stars', src: 'https://images.unsplash.com/photo-1498550744921-75f79806b8a7?w=800&h=600&fit=crop' },
    // Row 9 (wide + small) => completes 20
  { id: 20, category: 'surf', size: 'wide', title: 'Glassy Dawn', description: 'Early calm', src: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=1200&h=600&fit=crop' },
  // Added small photo to complete final row (wide + small)
  { id: 21, category: 'sunsets', size: 'small', title: 'First Light', description: 'Soft glow arriving', src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=800&fit=crop' }
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
          <motion.a
            href="https://www.instagram.com/arriba.surfcamp.bali?igsh=YWQ4eWI3bHR5dTBs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more photos on Instagram"
            className="inline-block px-8 py-3 bg-[#FF6B35] text-white font-semibold rounded-full hover:bg-[#E55A2B] transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t('gallery.loadMore')}
          </motion.a>
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
