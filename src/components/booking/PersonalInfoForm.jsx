import React from 'react';
import { useTranslation } from 'react-i18next';

const PersonalInfoForm = ({ value, onChange }) => {
  const { t } = useTranslation();
  const update = (field, val) => onChange({ ...value, [field]: val });
  return (
  <div className="grid md:grid-cols-2 gap-6 text-sm">
      <div className="flex flex-col">
  <label className="mb-1 font-semibold">{t('personalInfoForm.firstName')}</label>
  <input value={value.firstName} onChange={e=>update('firstName', e.target.value)} className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-sun-accent bg-white" />
      </div>
      <div className="flex flex-col">
  <label className="mb-1 font-semibold">{t('personalInfoForm.lastName')}</label>
  <input value={value.lastName} onChange={e=>update('lastName', e.target.value)} className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-sun-accent bg-white" />
      </div>
      <div className="flex flex-col md:col-span-2">
  <label className="mb-1 font-semibold">{t('personalInfoForm.email')}</label>
  <input type="email" value={value.email} onChange={e=>update('email', e.target.value)} className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-sun-accent bg-white" />
      </div>
      <div className="flex flex-col md:col-span-2">
  <label className="mb-1 font-semibold">{t('personalInfoForm.phone')}</label>
  <input value={value.phone} onChange={e=>update('phone', e.target.value)} className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-sun-accent bg-white" />
      </div>
  <div className="md:col-span-2 text-[11px] text-brand-ink-soft">{t('personalInfoForm.infoNote')}</div>
    </div>
  );
};

export default PersonalInfoForm;
