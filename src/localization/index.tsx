import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslation from './en.json';
import gujTranslation from './guj.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: enTranslation},
    guj: {translation: gujTranslation},
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
