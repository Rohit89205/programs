import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    lng: "hi",
    resources: {
        en: {
            translation: {
                greeting: "Hello Welcome",
            }
        },
        fr: {
            translation: {
                greeting: "France Welcome",
            }
        },
        hi: {
            translation: {
                greeting: "Hindi Welcome",
            }
        }
    }
})