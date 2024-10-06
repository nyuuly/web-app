import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const loadLocale = (language: string) => {
  switch (language) {
    case 'en':
      return import('./en.json');
    case 'vi':
      return import('./vi.json');
    case 'ja':
      return import('./ja.json');
    default:
      return import('./en.json'); // Fallback to English
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Function to change language
export const changeLanguage = async (language: string) => {
  if (!i18n.hasResourceBundle(language, 'translation')) {
    const translations = await loadLocale(language);
    i18n.addResourceBundle(language, 'translation', translations.default, true, true);
  }
  await i18n.changeLanguage(language);
};

// Initial language setup
const initializeLanguage = async () => {
  let detectedLanguage = 'en'; // Default to English
  if (i18n.language) {
    detectedLanguage = i18n.language.split('-')[0]; // Get the base language code
  }
  await changeLanguage(detectedLanguage);
  i18n.emit('initialized');
};

// Wrap the initialization in a setTimeout to ensure it runs after i18n is fully set up
setTimeout(() => {
  initializeLanguage();
}, 0);

export default i18n;