import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatPrice, BASE_WEEK_PRICE_EUR } from '../../utils/currency';
const BookingSummary = ({ dates, participants, weekPrice, roomType }) => {
  const { t, i18n } = useTranslation();
  const [start, end] = dates || [];
  const format = d => d ? d.toLocaleDateString('fr-FR', { day:'2-digit', month:'short', year:'numeric' }) : '---';
  const lng = i18n.language.split('-')[0];
  const weekPriceDisplay = start ? formatPrice(BASE_WEEK_PRICE_EUR, lng) : '---';
  const totalDisplay = start && weekPrice && participants ? formatPrice(BASE_WEEK_PRICE_EUR * participants, lng) : '---';
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-brand-ink">{t('bookingSummary.title')}</h3>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4 text-sm">
        <div className="flex justify-between text-brand-ink-soft"><span>{t('bookingSummary.dates')}</span><span>{format(start)} → {format(end)}</span></div>
        <div className="flex justify-between text-brand-ink-soft"><span>{t('bookingSummary.participants')}</span><span>{participants}</span></div>
        <div className="flex justify-between text-brand-ink-soft"><span>{t('bookingSummary.roomType')}</span><span>{roomType ? t(`bookNowPage.roomTypes.${roomType}.title`) : '---'}</span></div>
        <div className="flex justify-between text-brand-ink-soft"><span>{t('bookingSummary.weekPrice')}</span><span>{weekPriceDisplay}</span></div>
  <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold text-brand-ink"><span>{t('bookingSummary.total')}</span><span>{totalDisplay}</span></div>
      </div>
      <ul className="text-[11px] text-brand-ink-soft list-disc pl-5 space-y-1">
        {t('bookingSummary.inclusions', { returnObjects: true }).map((i,k)=>(<li key={k}>{i}</li>))}
      </ul>
    </div>
  );
};

export default BookingSummary;
