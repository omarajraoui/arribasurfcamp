import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatPrice } from '../../utils/currency';

const PaymentOptions = ({ amount }) => {
  const [method, setMethod] = useState('card');
  const { t, i18n } = useTranslation();
  const lng = (i18n.language || 'en').split('-')[0];
  const totalDisplay = amount ? formatPrice(amount, lng) : '---';

  return (
    <div className="space-y-8 text-sm">
      {/* Method Switcher */}
      <div className="flex flex-wrap gap-3">
        {['card','bank','later'].map(m => (
          <button
            key={m}
            onClick={()=>setMethod(m)}
            className={`px-5 py-2 rounded-full border text-xs font-semibold tracking-wide transition ${method===m ? 'bg-brand-sun-accent text-white border-brand-sun-accent shadow-sm' : 'bg-white border-gray-300 text-brand-ink-soft hover:bg-brand-sand-alt/50'}`}
          >{t(`paymentOptions.method.${m}`)}</button>
        ))}
      </div>

      {/* Selected Method Module */}
      {method==='card' && (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h4 className="font-semibold text-brand-ink text-sm flex items-center gap-2">💳 {t('paymentOptions.card.title')}</h4>
            <span className="text-[10px] font-medium bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">{t('paymentOptions.secure')}</span>
          </div>
          <div className="p-6 grid md:grid-cols-3 gap-8">
            {/* Mock Card Form */}
            <div className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-semibold uppercase tracking-wide text-brand-ink-soft">{t('paymentOptions.card.form.cardholder')}</label>
                  <input disabled placeholder="John Surfer" className="rounded-lg border text-xs px-3 py-2 bg-brand-sand-alt/40 border-gray-300 focus:outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-semibold uppercase tracking-wide text-brand-ink-soft">{t('paymentOptions.card.form.number')}</label>
                  <input disabled placeholder="4242 4242 4242 4242" className="rounded-lg border text-xs px-3 py-2 bg-brand-sand-alt/40 border-gray-300" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-semibold uppercase tracking-wide text-brand-ink-soft">CVC</label>
                  <input disabled placeholder="123" className="rounded-lg border text-xs px-3 py-2 bg-brand-sand-alt/40 border-gray-300 w-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-semibold uppercase tracking-wide text-brand-ink-soft">EXP</label>
                  <input disabled placeholder="08 / 26" className="rounded-lg border text-xs px-3 py-2 bg-brand-sand-alt/40 border-gray-300 w-full" />
                </div>
              </div>
              <div className="text-[10px] text-brand-ink-soft">{t('paymentOptions.card.comingSoon')}</div>
            </div>
            {/* Visual Card */}
            <div className="relative">
              <div className="rounded-xl bg-gradient-to-br from-[#2E5984] to-brand-sun-accent text-white p-5 h-40 w-full flex flex-col justify-between shadow-lg">
                <div className="text-xs font-light tracking-wider">ARRIBA SURF CAMP</div>
                <div className="text-lg font-mono">4242 4242 4242 4242</div>
                <div className="flex justify-between text-[10px]">
                  <span>JOHN SURFER</span>
                  <span>08/26</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur px-3 py-2 rounded-lg shadow border border-white/40 text-[10px] text-brand-ink-soft flex items-center gap-2">🔐 {t('paymentOptions.secureDetail')}</div>
            </div>
          </div>
        </div>
      )}

      {method==='bank' && (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 space-y-4 text-xs leading-relaxed text-brand-ink-soft">
          <p className="font-semibold text-brand-ink mb-2">{t('paymentOptions.bank.title')}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-brand-ink-soft uppercase text-[10px] mb-1">IBAN</p>
              <div className="font-mono text-[11px]">{t('paymentOptions.bank.iban')}</div>
            </div>
            <div>
              <p className="font-medium text-brand-ink-soft uppercase text-[10px] mb-1">BIC</p>
              <div className="font-mono text-[11px]">{t('paymentOptions.bank.bic')}</div>
            </div>
          </div>
          <p className="mt-2">{t('paymentOptions.bank.proof')}</p>
          <div className="mt-3 p-3 rounded-lg bg-brand-sand-alt/40 border border-dashed border-gray-300 text-[10px] flex items-center gap-2">📎 {t('paymentOptions.bank.note')}</div>
        </div>
      )}

      {method==='later' && (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 text-xs text-brand-ink-soft space-y-3">
          <p className="font-semibold text-brand-ink mb-1">{t('paymentOptions.laterTitle')}</p>
          <p>{t('paymentOptions.later')}</p>
          <ul className="list-disc pl-5 space-y-1">
            {t('paymentOptions.laterPoints', { returnObjects: true }).map((p,i)=>(<li key={i}>{p}</li>))}
          </ul>
        </div>
      )}

      {/* One-time total */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
        <h5 className="font-semibold text-brand-ink mb-4 text-sm flex items-center gap-2">🧾 {t('paymentOptions.breakdown.package')}</h5>
        <div className="flex justify-between text-xs">
          <span>{t('paymentOptions.breakdown.package')}</span>
          <span className="font-medium">{totalDisplay}</span>
        </div>
        <div className="mt-4 text-[10px] text-brand-ink-soft">{t('paymentOptions.oneTimeNote', 'One-time payment. No deposit required.')}</div>
      </div>
    </div>
  );
};

export default PaymentOptions;
