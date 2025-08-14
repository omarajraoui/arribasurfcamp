import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import ParticipantSelector from '../components/booking/ParticipantSelector';
import PersonalInfoForm from '../components/booking/PersonalInfoForm';
import PaymentOptions from '../components/booking/PaymentOptions';
import BookingSummary from '../components/booking/BookingSummary';
import { computeWeekPrice, formatPrice, BASE_WEEK_PRICE_EUR } from '../utils/currency';

// Placeholder for booked intervals (to integrate with backend later)
const bookedIntervals = [];

const BookNow = () => {
  const { t } = useTranslation();
  // Single week selection: start Sunday -> end Saturday (auto)
  const [startDate, setStartDate] = useState(null);
  const endDate = startDate ? new Date(new Date(startDate).setDate(startDate.getDate() + 6)) : null;
  const [participants, setParticipants] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [packageType] = useState('standard');

  const { i18n } = useTranslation();
  const weekPrice = useMemo(() => {
    if (!startDate) return 0;
    return computeWeekPrice(i18n.language.split('-')[0]);
  }, [startDate, i18n.language]);
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const start = params.get('start');
    const p = params.get('p');
    if (start) {
      const sd = new Date(start + 'T00:00:00');
      if (!isNaN(sd) && sd.getDay() === 0) {
        setStartDate(sd);
      }
    }
    if (p && !isNaN(Number(p))) setParticipants(Number(p));
  }, [location.search]);

  const calculateTotal = () => {
  if (!startDate) return 0;
  return participants * weekPrice;
  };

  return (
  <div className="book-now-page bg-gradient-to-b from-brand-foam to-white min-h-screen pt-36 pb-32 px-4">
      <section className="booking-hero text-center max-w-3xl mx-auto mb-16">
  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-ink mb-4">{t('bookNowPage.heroTitle')}</h1>
  <p className="text-lg md:text-xl text-brand-ink-soft">{t('bookNowPage.heroSubtitle')}</p>
      </section>

      <section className="booking-form-section max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
  <div className="booking-steps space-y-14 lg:col-span-2">
          <div className="booking-step bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-brand-ink mb-6">{t('bookNowPage.steps.dates')}</h3>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                if (!date) { setStartDate(null); return; }
                if (date.getDay() !== 0) return; // Only Sundays
                setStartDate(date);
              }}
              filterDate={(d)=> d.getDay()===0 && d >= new Date() }
              minDate={new Date()}
              monthsShown={2}
              inline
              excludeDateIntervals={bookedIntervals}
              placeholderText={t('bookingComponent.weekPlaceholder')}
            />
            {startDate && (
              <p className="text-xs text-brand-ink-soft mt-3">{t('bookingComponent.stayPrefix')} {startDate.toLocaleDateString()} → {endDate.toLocaleDateString()}</p>
            )}
            <p className="text-xs text-brand-ink-soft mt-2">{t('bookNowPage.weeklyNote')}</p>
          </div>

          <div className="booking-step bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-brand-ink mb-4">{t('bookNowPage.steps.participants')}</h3>
            <ParticipantSelector value={participants} onChange={setParticipants} min={1} max={6} />
          </div>

          <div className="booking-step bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-brand-ink mb-6">{t('bookNowPage.steps.package')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`package-card relative rounded-xl border ${packageType==='standard' ? 'border-brand-sun-accent shadow-md' : 'border-gray-200'} bg-white p-6`}>
                <h4 className="text-lg font-semibold mb-3 text-brand-ink">{t('bookNowPage.standardPackage')}</h4>
                <div className="text-4xl font-bold text-brand-sun-accent mb-5">{startDate ? formatPrice(BASE_WEEK_PRICE_EUR, i18n.language.split('-')[0]) : '---'} <span className="text-sm font-normal text-brand-ink-soft">{t('bookNowPage.perPerson')}</span></div>
                <ul className="space-y-2 text-sm text-brand-ink-soft">
                  {t('bookNowPage.packageFeatures', { returnObjects: true }).map((f,i)=>(<li key={i}>{f}</li>))}
                </ul>
                <div className="absolute -top-3 -right-3 bg-brand-sun-accent text-white text-xs px-3 py-1 rounded-full shadow-md">{t('bookNowPage.includedBadge')}</div>
              </div>
            </div>
          </div>

          <div className="booking-step bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-brand-ink mb-4">{t('bookNowPage.steps.info')}</h3>
            <PersonalInfoForm value={personalInfo} onChange={setPersonalInfo} />
          </div>

          <div className="booking-step bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-brand-ink mb-4">{t('bookNowPage.steps.payment')}</h3>
            <PaymentOptions amount={calculateTotal()} />
          </div>
        </div>

        <div className="booking-summary sticky top-32 bg-white rounded-2xl p-8 shadow-md border border-gray-200 h-fit">
          <BookingSummary 
            dates={[startDate, endDate]}
            participants={participants}
            total={calculateTotal()}
            weekPrice={weekPrice}
          />
          <button disabled={!startDate} className="mt-8 w-full bg-brand-sun-accent disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-brand-sun text-white font-semibold py-4 rounded-xl shadow transition text-sm tracking-wide">
            {t('bookNowPage.confirmCta')}
          </button>
          <p className="text-[10px] text-brand-ink-soft mt-4 leading-relaxed">{t('bookNowPage.termsNote')}</p>
        </div>
      </section>

      <section className="trust-signals mt-32 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {t('bookNowPage.trustSignals', { returnObjects: true }).map((text,i)=>(
          <div key={i} className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <span className="text-2xl" role="img" aria-label={text}>{['🔒','📞','🔄'][i] || '⭐'}</span>
            <span className="font-medium text-brand-ink-soft text-sm">{text}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BookNow;
