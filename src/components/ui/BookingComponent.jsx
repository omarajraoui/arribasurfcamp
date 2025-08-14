import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const BookingComponent = () => {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState(null); // Sunday
  const [endDate, setEndDate] = useState(null); // Saturday
  const [participants, setParticipants] = useState(1);
  const navigate = useNavigate();

  // Allow only Sundays for start selection
  const filterSundays = (date) => date.getDay() === 0;

  const handleWeekSelect = (date) => {
    if (!date) {
      setStartDate(null);
      setEndDate(null);
      return;
    }
    // Ensure Sunday
    if (date.getDay() !== 0) return;
    const saturday = new Date(date);
    saturday.setDate(date.getDate() + 6);
    setStartDate(date);
    setEndDate(saturday);
  };

  const formatParam = (d) => {
    if (!d) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  const handleGoBook = () => {
    if (!startDate || !endDate) return;
    navigate(`/book-now?start=${formatParam(startDate)}&end=${formatParam(endDate)}&p=${participants}`);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="card-surface p-6 max-w-md w-full"
    >
      <h3 className="text-lg font-semibold mb-4 text-brand-ink">{t('booking.title')}</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-brand-ink-soft mb-1">{t('bookingComponent.weekLabel')}</label>
          <DatePicker
            selected={startDate}
            onChange={handleWeekSelect}
            placeholderText={t('bookingComponent.weekPlaceholder')}
            className="w-full p-2 border border-brand-sand-deep rounded-md focus:ring-2 focus:ring-brand-sun/60 focus:border-brand-sun bg-brand-foam/80 text-brand-ink"
            minDate={new Date()}
            filterDate={filterSundays}
            inline={false}
          />
          {startDate && endDate && (
            <p className="mt-2 text-xs text-brand-ink-soft">{t('bookingComponent.stayPrefix')} {startDate.toLocaleDateString()} → {endDate.toLocaleDateString()}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-brand-ink-soft mb-1">{t('booking.participants')}</label>
          <select
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            className="w-full p-2 border border-brand-sand-deep rounded-md focus:ring-2 focus:ring-brand-sun/60 focus:border-brand-sun bg-brand-foam/80 text-brand-ink"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? t('booking.person') : t('booking.people')}
              </option>
            ))}
            <option value="5+">5+ {t('booking.people')}</option>
          </select>
        </div>
        
        <button onClick={handleGoBook} disabled={!startDate} className="w-full btn btn-primary py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
          {t('bookingComponent.bookWeek')}
        </button>
      </div>
    </motion.div>
  );
};

export default BookingComponent;
