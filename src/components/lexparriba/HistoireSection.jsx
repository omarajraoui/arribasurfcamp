import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Clean, minimal history section: original card concept without emojis, tapes, annotations, doodles, or sticky notes
const HistoireSection = () => {
  const { t } = useTranslation();
  const timelineData = t('history.timeline', { returnObjects: true }) || [];

  return (
    <section id="histoire" className="min-h-screen py-20 bg-white">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold tracking-tight text-brand-ink">
          {t('history.title')}
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {timelineData.map((entry, index) => (
            <motion.div
              key={entry.year + index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-200 overflow-hidden transition"
            >
              <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {entry.year}
              </div>
              <div className="w-full h-44 mb-4 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${
                    index % 5 === 0 ? '1505142468610-359e7d316be0' :
                    index % 5 === 1 ? '1502680390469-be75c86b636f' :
                    index % 5 === 2 ? '1506905925346-21bda4d32df4' :
                    index % 5 === 3 ? '1518837695005-2083093ee35b' :
                    '1571896349842-33c89424de2d'
                  }?w=600&h=400&fit=crop&auto=format`}
                  alt={entry.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-6 pb-6 space-y-3">
                <h3 className="text-2xl font-semibold text-brand-ink leading-snug">
                  {entry.title}
                </h3>
                <p className="text-sm text-brand-ink-soft leading-relaxed">
                  {entry.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoireSection;
