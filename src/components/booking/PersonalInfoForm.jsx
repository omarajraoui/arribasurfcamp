import React from 'react';
import { useTranslation } from 'react-i18next';

const PersonalInfoForm = ({ value, onChange }) => {
    const { t } = useTranslation();
    const update = (idx, field, val) => {
        const arr = value.map((trav, i) => i === idx ? { ...trav, [field]: val } : trav);
        onChange(arr);
    };
    return (
        <div className="space-y-10">
            {value.map((trav, idx) => (
                <div key={idx} className="grid md:grid-cols-2 gap-6 text-sm bg-brand-foam/30 rounded-xl p-6">
                    <div className="md:col-span-2 text-lg font-bold text-brand-ink mb-2">
                        {t('personalInfoForm.travelerLabel', { index: idx + 1 })}
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold">{t('personalInfoForm.firstName')}</label>
                        <input value={trav.firstName} onChange={e=>update(idx, 'firstName', e.target.value)} className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-sun-accent bg-white" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold">{t('personalInfoForm.lastName')}</label>
                        <input value={trav.lastName} onChange={e=>update(idx, 'lastName', e.target.value)} className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-sun-accent bg-white" />
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <label className="mb-1 font-semibold">{t('personalInfoForm.email')}</label>
                        <input type="email" value={trav.email} onChange={e=>update(idx, 'email', e.target.value)} className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-sun-accent bg-white" />
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <label className="mb-1 font-semibold">{t('personalInfoForm.phone')}</label>
                        <input value={trav.phone} onChange={e=>update(idx, 'phone', e.target.value)} className="rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-sun-accent bg-white" />
                    </div>
                    <div className="md:col-span-2 text-[11px] text-brand-ink-soft">{t('personalInfoForm.infoNote')}</div>
                </div>
            ))}
        </div>
    );
};

export default PersonalInfoForm;
