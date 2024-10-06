import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './en.json';
import viTranslations from './vi.json';
import jaTranslations from './ja.json';

const resources = {
  en: { translation: enTranslations },
  vi: { translation: viTranslations },
  ja: { translation: jaTranslations },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Default language
    detection: {
      order: ['navigator', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;