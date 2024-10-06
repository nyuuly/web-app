import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './en.json';
import viTranslations from './vi.json';
import jaTranslations from './ja.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      vi: { translation: viTranslations },
      ja: { translation: jaTranslations },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;