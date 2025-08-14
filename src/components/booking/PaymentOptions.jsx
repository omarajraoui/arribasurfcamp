import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatPrice, BASE_WEEK_PRICE_EUR } from '../../utils/currency';

const PaymentOptions = ({ amount }) => {
  const [method, setMethod] = useState('card');
  const { t } = useTranslation();
  const lng = (t.i18n?.language || t.i18n || 'en').split('-')[0];
  const deposit = Math.round((amount || 0) * 0.3);
  const depositDisplay = amount ? formatPrice(Math.round(BASE_WEEK_PRICE_EUR * 0.3), lng) : formatPrice(0, lng);

  return (
  <div className="space-y-8 text-sm">
      <div className="flex gap-4">
        {['card','bank','later'].map(m => (
          <button key={m} onClick={()=>setMethod(m)} className={`px-5 py-2 rounded-full border text-xs font-semibold tracking-wide transition ${method===m ? 'bg-brand-sun-accent text-white border-brand-sun-accent shadow-sm' : 'bg-white border-gray-300 text-brand-ink-soft hover:bg-brand-sand-alt/50'}`}>{t(`paymentOptions.method.${m}`)}</button>
        ))}
      </div>
      {method==='card' && (
        <div className="bg-brand-sand-alt/40 p-5 rounded-xl border border-dashed border-gray-300 text-xs text-brand-ink-soft">{t('paymentOptions.cardModule')}</div>
      )}
      {method==='bank' && (
        <div className="bg-brand-sand-alt/40 p-5 rounded-xl border border-dashed border-gray-300 text-xs leading-relaxed text-brand-ink-soft">
          <p className="font-semibold mb-2 text-brand-ink">{t('paymentOptions.bank.title')}</p>
          <p>{t('paymentOptions.bank.iban')}</p>
          <p>{t('paymentOptions.bank.bic')}</p>
          <p className="mt-1">{t('paymentOptions.bank.proof')}</p>
        </div>
      )}
      {method==='later' && (
        <div className="bg-brand-sand-alt/40 p-5 rounded-xl border border-dashed border-gray-300 text-xs text-brand-ink-soft">{t('paymentOptions.later')}</div>
      )}
  <div className="text-xs text-brand-ink-soft">{t('paymentOptions.deposit')} <span className="font-semibold text-brand-sun-accent">{depositDisplay}</span></div>
    </div>
  );
};

export default PaymentOptions;
