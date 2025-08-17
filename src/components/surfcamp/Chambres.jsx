import React from 'react';
import { useTranslation } from 'react-i18next';
// Room / shared space photos
import roomMain from '../../assets/surfcamp/chambre.JPG';
import roomAlt1 from '../../assets/surfcamp/chambre2.JPG';
import roomAlt2 from '../../assets/surfcamp/chambre-partage2.jpg';
import roomAlt3 from '../../assets/surfcamp/yoga.JPG';
import roomAlt4 from '../../assets/surfcamp/yoga-class.jpg';
import OptimizedImage from '../ui/OptimizedImage';
import { formatWeekBase } from '../../utils/currency';

const Chambres = () => {
  const { t } = useTranslation();
  const amenities = t('surfcamp.rooms.amenities', { returnObjects: true });
  const secondaryLabels = t('surfcamp.rooms.secondaryPhotos', { returnObjects: true });

  // Build an array of secondary image objects pairing a label (if available) with an imported asset.
  const secondaryImages = [roomAlt1, roomAlt2, roomAlt3, roomAlt4].map((src, idx) => ({
    src,
    label: secondaryLabels[idx] || ''
  }));

  return (
    <section className="w-full py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-ink mb-4">{t('surfcamp.rooms.title')}</h2>
          <p className="text-lg md:text-xl text-brand-ink-soft max-w-3xl mx-auto">{t('surfcamp.rooms.subtitle')}</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-14 items-start">
          {/* Main photo */}
          <div className="lg:col-span-2 relative">
            <img
              src={roomMain}
              alt={t('surfcamp.rooms.title')}
              className="w-full aspect-[16/9] object-cover rounded-2xl border border-gray-200 shadow-sm"
              loading="lazy"
            />
            <div className="mt-4 text-sm text-brand-ink-soft italic">
              {t('surfcamp.rooms.title')} – {t('surfcamp.rooms.subtitle')}
            </div>
          </div>

            {/* Amenities card */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
            <h3 className="text-xl font-semibold text-brand-ink mb-6">{t('surfcamp.common.amenitiesTitle')}</h3>
            <ul className="space-y-3 text-sm text-brand-ink-soft">
              {amenities.map((a,i)=>(
                <li key={i} className="flex items-start gap-2">
                  <span className="text-brand-sun-accent mt-0.5">•</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary photos */}
  <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {secondaryImages.map((obj,i)=>(
            <figure key={i} className="group rounded-2xl border border-gray-200 overflow-hidden aspect-[16/10] relative shadow-sm">
              <OptimizedImage
                src={obj.src}
                alt={obj.label || `${t('surfcamp.rooms.title')} ${i+1}`}
                aspect="w-full h-full"
        className="transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {obj.label && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-black/40 backdrop-blur-sm text-[10px] md:text-[11px] text-white px-2 py-1">
                  {obj.label}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {/* Pricing */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-brand-sun-accent/10 to-brand-sun-soft/10 border border-brand-sun-accent/30 rounded-3xl p-12 text-center shadow-md">
            <h3 className="text-2xl font-bold text-brand-ink mb-4">{t('surfcamp.common.uniqueRateTitle')}</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-6xl font-extrabold text-brand-sun-accent tracking-tight">{formatWeekBase((t.i18n?.language || 'en').split('-')[0])}</div>
              <ul className="text-sm text-brand-ink-soft space-y-2 text-left max-w-xs">
                <li>{t('surfcamp.rooms.pricing.durationLine')}</li>
                <li>{t('surfcamp.rooms.pricing.allInclusiveLine')}</li>
                <li>{t('surfcamp.rooms.pricing.excludesLine')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chambres;
