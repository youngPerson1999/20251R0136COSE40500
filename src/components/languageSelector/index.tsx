"use client";

import { useLang } from "@/lib/providers/LangProvider";

const LanguageSelector = () => {
  const { changeLanguage, language } = useLang();

  return (
    <div className="absolute top-4 right-4 flex space-x-1">
      <button
        className={`px-2 py-1 rounded ${
          language === "ko"
            ? "text-black font-bold"
            : "text-gray-400 font-normal"
        }`}
        onClick={() => changeLanguage("ko")}
      >
        한글
      </button>
      <span className="text-gray-400">/</span>
      <button
        className={`px-2 py-1 rounded ${
          language === "en"
            ? "text-black font-bold"
            : "text-gray-400 font-normal"
        }`}
        onClick={() => changeLanguage("en")}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSelector;
