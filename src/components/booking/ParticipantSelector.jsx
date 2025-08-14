import React from 'react';

const ParticipantSelector = ({ value, onChange, min = 1, max = 10 }) => {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
    <div className="inline-flex items-center gap-5 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
      <button onClick={dec} className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-sand-alt hover:bg-brand-sand-alt/70 text-brand-ink font-semibold text-lg" aria-label="decrease">-</button>
      <div className="text-2xl font-bold text-brand-ink w-10 text-center" aria-live="polite">{value}</div>
      <button onClick={inc} className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-sun-accent hover:bg-brand-sun text-white font-semibold text-lg" aria-label="increase">+</button>
    </div>
  );
};

export default ParticipantSelector;
