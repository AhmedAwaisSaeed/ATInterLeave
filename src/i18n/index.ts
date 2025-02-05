import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import {isRTL} from '../utils/helper/LocalizationUtils';

import {arabicTranslation, englishTranslation} from './translations';

export const defaultNS = 'translation';
export const resources = {
  en: {
    translation: englishTranslation,
  },
  ar: {
    translation: arabicTranslation,
  },
} as const;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: isRTL ? 'ar' : 'en',
  ns: [defaultNS],
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
