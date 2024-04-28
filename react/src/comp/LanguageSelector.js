import React from "react";
import { useTranslation } from "react-i18next";

const Languages = [
  {
    code: "en",
    lang: "English",
  },
  {
    code: "hi",
    lang: "Hindi",
  },
  {
    code: "fr",
    lang: "France",
  },
];

const LanguageSelector = () => {
    const {i18n} = useTranslation()

  const changeLang = (lng) => {
    i18n.changeLanguage(lng)
  };

  return (
    <div className="btn-container">
      {Languages.map((lng) => {
        return (
          <button key={lng.code} onClick={() => changeLang(lng.code)}>
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
