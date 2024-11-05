import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationAm from '../locales/hy/translation.json'
import translationEn from '../locales/en/translation.json'
import translationRu from '../locales/ru/translation.json'

// import ICU from "i18next-icu";

let defaultLang = window.localStorage.getItem('i18nextLng') || 'en'

const resources = {
    hy: {
        translation: translationAm
      },
    en: {
      translation: translationEn
    },
    ru : {
        translation: translationRu
    }
  };

i18n
  // .use(ICU)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    debug:false,
    // supportedLngs: ["en","hy"],
    // whiteList: ["en","hy"],
    detection: {
          order: ["localStorage", "cookie"],
          caches: ["localStorage", "cookie"]
    },
    
    lng: defaultLang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    backend: {
        loadPath: '../locales',
    },
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    react: {
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
      useSuspense: true,
    },
  });

  export default i18n