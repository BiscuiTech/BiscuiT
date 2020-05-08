import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function useTranslation() {
  const { localization } = useContext(LanguageContext);
  console.log(localization)
  function t(key: string) {
    if (!localization.translations[key]) {
      console.warn(
        `Translation '${key}' for locale '${localization.locale}' not found.`
      );
    }
    return localization.translations[key] || "";
  }

  return {
    t,
    locale: localization.locale,
  };
}
