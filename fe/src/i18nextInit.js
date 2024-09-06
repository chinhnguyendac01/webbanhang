import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import translationVi from './assets/locales/vi/translation.json';
import translationJp from './assets/locales/jp/translation.json';
import translationEn from './assets/locales/en/translation.json';
const i18n = i18next.createInstance();
const fallbackLng = ['JP'];
const availableLanguages = ['JP', 'VN', 'EN'];

export const resources = {
    VN: {
        translation: translationVi,
    },
    JP: {
        translation: translationJp,
    },
    EN: {
        translation: translationEn,
    },
};
i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,

        detection: {
            checkWhitelist: true,
        },

        debug: false,

        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
