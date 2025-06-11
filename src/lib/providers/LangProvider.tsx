"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("ko");

  useEffect(() => {
    const storedLang = localStorage.getItem("language") as Language | null;
    if (storedLang) {
      setLanguage(storedLang);
      document.documentElement.lang = storedLang;
    } else {
      const htmlLang = document.documentElement.lang;
      setLanguage(htmlLang === "en" ? "en" : "ko");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return context;
};
