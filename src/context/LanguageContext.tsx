import React from "react";
import { useRouter } from "next/router";
/* import { set, get } from "../services/localStorage"; */
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  isLocale,
  Locale,
  Localization,
  Translations,
} from "../translations/types";
import strings from "../translations/locales/en";

/**
 * Language Context
 */

interface LocaleProps {
  lang: Locale;
  translations: Translations;
  namespace: string;
}

interface ContextProps {
  readonly localization: Localization;
  readonly setLocale: (localization: Localization) => void;
}

export const LanguageContext = React.createContext<ContextProps>({
  localization: {
    locale: "en", // default lang
    translations: strings.common, // default translations TODO: what to do here?
    namespace: "common", // default namespace TODO: could we null this? 'common' might be misleading
  },
  setLocale: () => null,
});

/**
 * Language Context: Provider
 */

export const LanguageProvider: React.FC<{ localization: Localization }> = ({
  localization,
  children,
}) => {
  const [locale, setLocale] = React.useState({
    locale: localization?.locale,
    translations: localization?.translations,
    namespace: localization?.namespace,
  });
  const [storedLocale, setStoredLocale] = useLocalStorage("locale", "en");
  const { query } = useRouter();

  React.useEffect(() => {
    if (locale !== storedLocale) {
      setStoredLocale(localization?.locale, locale);
    }
  }, [locale]);

  React.useEffect(() => {
    if (
      typeof query.lang === "string" &&
      isLocale(query.lang) &&
      localization?.locale !== query.lang
    ) {
      setLocale({
        locale: localization?.locale,
        translations: localization?.translations,
        namespace: localization?.namespace,
      });
    }
  }, [query.lang, locale]);

  return (
    <LanguageContext.Provider value={{ localization, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};
