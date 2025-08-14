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

        <div className="mt-24 w-full max-w-4xl mx-auto rounded-2xl border border-dashed border-gray-300 h-72 flex items-center justify-center text-sm text-brand-ink-soft">
          {t('surfcamp.common.photoPlanningPlaceholder')}
        </div>
      </div>
    </section>
  );
};

export default Planning;
