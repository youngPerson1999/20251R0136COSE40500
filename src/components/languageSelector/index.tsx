"use client";

import { Language, useLang } from "@/lib/providers/LangProvider";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

const LanguageSelector = () => {
  const { changeLanguage, language } = useLang();

  return (
    <div className="absolute top-4 right-4 flex space-x-1">
      <div className="hidden sm:flex space-x-1">
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
      <div className="sm:hidden">
        <Select
          value={language}
          onValueChange={(lang: string) => changeLanguage(lang as Language)}
        >
          <SelectTrigger className="w-20">
            {language === "ko" ? "한글" : "ENG"}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ko">한글</SelectItem>
            <SelectItem value="en">ENG</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LanguageSelector;
