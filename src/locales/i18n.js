import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en-US.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en,
  },
  fallbackLng: 'en',
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    useSuspense: true,
  },
  initImmediate: false,
})
export default i18n
