import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./asstes/locales/en/translation.json";
import translationBn from "./asstes/locales/bn/translation.json";

const availableLanguages = ["en",  "bn"];
const resources = {
  en: { translation: translationEN },
  bn: {  translation: translationBn }
};
const DETECTION_OPTIONS = {
  order: ['localStorage', 'cookie']
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'bn',
    detection: DETECTION_OPTIONS,
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
