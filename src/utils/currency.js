// Currency formatting utilities
// Base price defined in EUR; apply simple rate multipliers for other currencies.
export const BASE_WEEK_PRICE_EUR = 500;

export const currencyConfig = {
  // English: show USD for user request (approx rate 1 EUR ≈ 1.1 USD)
  en: { code: 'USD', locale: 'en-US', rate: 1.1 },
  fr: { code: 'EUR', locale: 'fr-FR', rate: 1 },
  es: { code: 'EUR', locale: 'es-ES', rate: 1 },
  nl: { code: 'EUR', locale: 'nl-NL', rate: 1 },
  id: { code: 'IDR', locale: 'id-ID', rate: 17000 }, // approx market rate example
};

export function formatPrice(baseEurAmount, lng) {
  const cfg = currencyConfig[lng] || currencyConfig.en;
  const amount = Math.round(baseEurAmount * cfg.rate);
  return new Intl.NumberFormat(cfg.locale, {
    style: 'currency',
    currency: cfg.code,
    maximumFractionDigits: cfg.code === 'IDR' ? 0 : 0
  }).format(amount);
}

export function formatWeekBase(lng) {
  return formatPrice(BASE_WEEK_PRICE_EUR, lng);
}

export function computeWeekPrice(lng) {
  const cfg = currencyConfig[lng] || currencyConfig.en;
  return Math.round(BASE_WEEK_PRICE_EUR * cfg.rate);
}

export function getCurrencyCode(lng) {
  const cfg = currencyConfig[lng] || currencyConfig.en;
  return cfg.code;
}
