import React from 'react';
import { useTranslation } from 'react-i18next';
// Leaflet map deferred
import LazyMap from './LazyMap';
// Villa photos
import villaMain from '../../assets/surfcamp/villa.jpg';
import villa2 from '../../assets/surfcamp/villa2.jpg';
import villa3 from '../../assets/surfcamp/villa-3.jpg';
import villaTerrace from '../../assets/surfcamp/villa-terrace.jpg';
import villaView from '../../assets/surfcamp/villaview.jpg';
import OptimizedImage from '../ui/OptimizedImage';
// (Leaflet assets now loaded only when LazyMap enters viewport)

const Villa = () => {
  const { t } = useTranslation();
  const features = t('surfcamp.villa.features', { returnObjects: true });
  const secondaryLabels = t('surfcamp.villa.secondaryPhotos', { returnObjects: true });
  const capacity = t('surfcamp.villa.capacity', { returnObjects: true });
  const location = t('surfcamp.villa.location', { returnObjects: true });
  const mapTitle = t('surfcamp.villa.map.popupTitle');
  const mapAddress = t('surfcamp.villa.map.addressLines', { returnObjects: true });

  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-brand-foam to-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-ink mb-4">{t('surfcamp.villa.title')}</h2>
          <p className="text-lg md:text-xl text-brand-ink-soft max-w-3xl mx-auto">{t('surfcamp.villa.subtitle')}</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-2">
            <img
              src={villaMain}
              alt={t('surfcamp.villa.title')}
              className="w-full aspect-[16/9] object-cover rounded-2xl border border-gray-200 shadow-sm"
              loading="lazy"
            />
            <p className="mt-4 text-sm text-brand-ink-soft italic">{t('surfcamp.villa.title')} – {t('surfcamp.villa.subtitle')}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
            <h3 className="text-xl font-semibold text-brand-ink mb-6">{t('surfcamp.common.amenitiesTitle')}</h3>
            <ul className="space-y-3 text-sm text-brand-ink-soft">
              {features.map((f,i)=>(
                <li key={i} className="flex items-start gap-2"><span className="text-brand-sun-accent mt-0.5">•</span><span>{f}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[villa2, villa3, villaTerrace, villaView].map((src,i)=>(
            <figure key={i} className="rounded-2xl border border-gray-200 overflow-hidden aspect-[16/10] relative group shadow-sm">
              <OptimizedImage
                src={src}
                alt={secondaryLabels[i] || `${t('surfcamp.villa.title')} ${i+1}`}
                aspect="w-full h-full"
        className="transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {secondaryLabels[i] && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-black/40 backdrop-blur-sm text-[10px] md:text-xs lg:text-[11px] text-white px-2 py-1">
                  {secondaryLabels[i]}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        <div className="mt-24 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-gradient-to-br from-brand-sun-accent/10 to-brand-sun-soft/10 border border-brand-sun-accent/30 rounded-3xl p-10">
      <h3 className="text-2xl font-bold text-brand-ink mb-6">{t('surfcamp.common.capacityConfigTitle')}</h3>
            <ul className="space-y-3 text-sm text-brand-ink-soft">
        {capacity.map((c,i)=>(<li key={i}>{c}</li>))}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-10 flex flex-col justify-between">
            <div>
        <h3 className="text-2xl font-bold text-brand-ink mb-6">{t('surfcamp.common.locationTitle')}</h3>
              <ul className="space-y-3 text-sm text-brand-ink-soft">
    {location.map((l,i)=>(<li key={i}>{l}</li>))}
              </ul>
            </div>
            <div className="mt-8 w-full h-64 rounded-xl overflow-hidden border border-gray-200 relative z-10">
              <LazyMap />
              <div className="absolute top-2 left-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[11px] font-medium text-brand-ink-soft shadow">{t('surfcamp.common.locationBadge')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Villa;
