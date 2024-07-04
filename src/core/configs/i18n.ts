import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { LanguagesEnum } from "../enums/design-system.enum";
import TranslationAr from "../locales/ar/translation.json";
import TranslationEn from "../locales/en/translation.json";

// the translations
const resources = {
  ar: {
    translation: TranslationAr,
  },
  en: {
    translation: TranslationEn,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: LanguagesEnum.AR,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
