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

  const base = import.meta.env.BASE_URL || './';
  const galleryPhotos = [
    // Row 1 (hero)
  { id: 1, category: 'surf', size: 'large', title: 'Session 1080', description: 'Morning paddle out', src: base + 'images/surfsessions/IMG_1080.jpg' },
    // Row 2 (wide + small)
  { id: 2, category: 'camp', size: 'wide', title: 'Camp Life 1087', description: 'Shared villa vibe', src: base + 'images/camplife/IMG_1087.jpg' },
  { id: 3, category: 'surf', size: 'small', title: 'Session 1081', description: 'Set lining up', src: base + 'images/surfsessions/IMG_1081.jpg' },
    // Row 3 (2 medium)
  { id: 4, category: 'surf', size: 'medium', title: 'Session 1082', description: 'First drops', src: base + 'images/surfsessions/IMG_1082.jpg' },
  { id: 5, category: 'surf', size: 'medium', title: 'Session 1083', description: 'Trim down the line', src: base + 'images/surfsessions/IMG_1083.jpg' },
    // Row 4 (4 small)
  { id: 6, category: 'sunsets', size: 'small', title: 'Sunset 1103', description: 'Ocean turns to glass', src: base + 'images/sunsets/IMG_1103.jpg' },
  { id: 7, category: 'food', size: 'small', title: 'Food 1095', description: 'Colorful plate', src: base + 'images/food/IMG_1095.jpg' },
    { id: 8, category: 'community', size: 'small', title: 'Community 1109', description: 'Friends after session', src: base + 'images/community/IMG_1109.jpg' },
  { id: 9, category: 'food', size: 'small', title: 'Food 1096', description: 'Morning energy', src: base + 'images/food/IMG_1096.jpg' },
    // Row 5 (wide + small)
  { id: 10, category: 'sunsets', size: 'wide', title: 'Sunset 1104', description: 'Evening blaze', src: base + 'images/sunsets/IMG_1104.jpg' },
  { id: 11, category: 'food', size: 'small', title: 'Food 1099', description: 'Fresh snack', src: base + 'images/food/IMG_1099.jpg' },
    // Row 6 (medium + small + small)
  { id: 12, category: 'food', size: 'medium', title: 'Food 1100', description: 'Shared table', src: base + 'images/food/IMG_1100.jpg' },
  { id: 13, category: 'camp', size: 'small', title: 'Camp Life 1094', description: 'Chill corner', src: base + 'images/camplife/IMG_1094.jpg' },
  { id: 14, category: 'food', size: 'small', title: 'Food 1097', description: 'Fusion bite', src: base + 'images/food/IMG_1097.jpg' },
    // Row 7 (small + medium + small)
  { id: 15, category: 'surf', size: 'small', title: 'Session 1084', description: 'Inside section', src: base + 'images/surfsessions/IMG_1084.jpg' },
  { id: 16, category: 'community', size: 'medium', title: 'Community 1110', description: 'Group moment', src: base + 'images/community/IMG_1110.jpg' },
  { id: 17, category: 'surf', size: 'small', title: 'Session 1085', description: 'Spray release', src: base + 'images/surfsessions/IMG_1085.jpg' },
    // Row 8 (medium + medium)
  { id: 18, category: 'food', size: 'medium', title: 'Food 1098', description: 'Meal prep', src: base + 'images/food/IMG_1098.jpg' },
  { id: 19, category: 'community', size: 'medium', title: 'Community 1111', description: 'Evening hangout', src: base + 'images/community/IMG_1111.jpg' },
    // Row 9 (wide + small) => completes 20
  { id: 20, category: 'surf', size: 'wide', title: 'Session 1086', description: 'Glassy face', src: base + 'images/surfsessions/IMG_1086.jpg' },
  // Added small photo to complete final row (wide + small)
  { id: 21, category: 'sunsets', size: 'small', title: 'Sunset 1105', description: 'Soft glow arriving', src: base + 'images/sunsets/IMG_1105.jpg' },
  // Additional community photos (new row)
  { id: 22, category: 'community', size: 'small', title: 'Community 1112', description: 'Shared laugh', src: base + 'images/community/IMG_1112.jpg' },
  { id: 23, category: 'community', size: 'medium', title: 'Community 1113', description: 'Group activity', src: base + 'images/community/IMG_1113.jpg' },
  { id: 24, category: 'community', size: 'small', title: 'Community 1114', description: 'Relax time', src: base + 'images/community/IMG_1114.jpg' },
  { id: 25, category: 'community', size: 'medium', title: 'Community 1115', description: 'Evening vibes', src: base + 'images/community/IMG_1115.jpg' }
  ,
  // Additional Camp Life photos to include all local camp images
  { id: 26, category: 'camp', size: 'medium', title: 'Camp Life 1088', description: 'Morning stretch', src: base + 'images/camplife/IMG_1088.jpg' },
  { id: 27, category: 'camp', size: 'small', title: 'Camp Life 1089', description: 'Villa corner', src: base + 'images/camplife/IMG_1089.jpg' },
  { id: 28, category: 'camp', size: 'small', title: 'Camp Life 1090', description: 'Group focus', src: base + 'images/camplife/IMG_1090.jpg' },
  { id: 29, category: 'camp', size: 'medium', title: 'Camp Life 1091', description: 'Meal prep', src: base + 'images/camplife/IMG_1091.jpg' },
  { id: 30, category: 'camp', size: 'small', title: 'Camp Life 1093', description: 'Evening relax', src: base + 'images/camplife/IMG_1093.jpg' }
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
            href="https://www.instagram.com/arriba.surfcamp/profilecard/?igsh=d3B3ZWp6bTFudGc4"
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
              href="https://www.instagram.com/arriba.surfcamp/profilecard/?igsh=d3B3ZWp6bTFudGc4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#2E5984] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              @arriba.surfcamp
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
