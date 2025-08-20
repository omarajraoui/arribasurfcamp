import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const types = [
  { key: 'mixed', icon: '👫' },
  { key: 'girls', icon: '👩' },
  { key: 'boys', icon: '👨' }
];

const HomeRoomTypes = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-white to-brand-foam/40">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-ink mb-4 tracking-tight">{t('homeRoomTypes.title')}</h2>
          <p className="text-brand-ink-soft text-lg md:text-xl max-w-2xl mx-auto">{t('homeRoomTypes.subtitle')}</p>
        </header>
        <div className="grid gap-8 md:grid-cols-3">
          {types.map((tkey,i)=> (
            <motion.a
              key={tkey.key}
              href={`/book-now?prefRoom=${tkey.key}`}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-brand-sun-accent/60 transition"
            >
              <div className="text-6xl mb-6 drop-shadow-sm">{tkey.icon}</div>
              <h3 className="text-xl font-semibold text-brand-ink mb-3 tracking-tight">
                {t(`bookNowPage.roomTypes.${tkey.key}.title`)}
              </h3>
              <p className="text-sm text-brand-ink-soft leading-relaxed">
                {t(`bookNowPage.roomTypes.${tkey.key}.description`)}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-sun-accent group-hover:translate-x-1 transition">
                {t('homeRoomTypes.cta')} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRoomTypes;
