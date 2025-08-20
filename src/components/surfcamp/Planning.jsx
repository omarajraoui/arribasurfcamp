import React from 'react';
import { useTranslation } from 'react-i18next';

const Planning = () => {
  const { t } = useTranslation();
  const daysOrder = t('surfcamp.planning.daysOrder', { returnObjects: true });
  const daysData = t('surfcamp.planning.days', { returnObjects: true });
  const legends = t('surfcamp.planning.legends', { returnObjects: true });
  const translatedDays = daysOrder.map(id => ({ id, ...daysData[id] }));
  return (
    <section className="w-full py-24 px-4 bg-brand-sand-alt/30">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-ink mb-4">{t('surfcamp.planning.title')}</h2>
          <p className="text-lg md:text-xl text-brand-ink-soft max-w-3xl mx-auto">{t('surfcamp.planning.subtitle')}</p>
        </header>


        <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-brand-ink mb-10">{t('surfcamp.common.weekTypeTitle')}</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {translatedDays.map(day => (
              <div key={day.id} className="rounded-xl border border-gray-200 bg-brand-sand-alt/30 p-4 flex flex-col">
                <div className="font-semibold text-brand-ink mb-3 tracking-wide text-sm">{day.label}</div>
                <div className="space-y-2 text-xs text-brand-ink-soft">
                  {day.activities.map((act,i) => (
                    <div key={i} className="bg-white rounded px-2 py-2 border border-gray-200">{act}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
            {legends.map((l,i)=>(
              <div key={i} className="rounded-xl border border-gray-200 bg-brand-foam px-4 py-3 text-xs text-brand-ink-soft font-medium">{l}</div>
            ))}
          </div>
        </div>

        {/* Activity alert full-width (within container) without outer white bordered wrapper */}
        <div className="mt-24 w-full">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-100 via-amber-100 to-orange-50 px-6 md:px-12 py-8 w-full shadow border border-orange-300/60">
            <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(circle_at_80%_40%,#fb923c,transparent_70%)]" />
            <div className="flex flex-col md:flex-row md:items-center gap-6 relative">
              <div className="mx-auto md:mx-0 w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white shadow-md ring-4 ring-white/40">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                </svg>
              </div>
              <p className="md:flex-1 font-semibold text-base md:text-lg text-brand-ink leading-relaxed tracking-tight text-center md:text-left">
                {t('surfcamp.planning.activityAlert')}
              </p>
              <div className="flex md:self-stretch items-center justify-center">
                <a href="/book-now" className="inline-flex items-center gap-2 text-sm md:text-base font-semibold px-6 py-3 rounded-full bg-orange-500 text-white shadow hover:bg-orange-600 transition">
                  <span>BOOK NOW</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planning;
