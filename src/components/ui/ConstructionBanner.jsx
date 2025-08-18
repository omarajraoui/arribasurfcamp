import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ConstructionBanner = () => {
  const [hidden, setHidden] = useState(false);
  const { t } = useTranslation();
  if (hidden) return null;
  return (
    <div className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white text-xs md:text-sm font-semibold tracking-wide py-2 px-3 flex items-center justify-center gap-4 shadow-md z-50 relative">
      <span className="uppercase">{t('construction.notice')}</span>
      <button
        type="button"
        aria-label={t('construction.close')}
        onClick={() => setHidden(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
      >
        ✕
      </button>
    </div>
  );
};

export default ConstructionBanner;
