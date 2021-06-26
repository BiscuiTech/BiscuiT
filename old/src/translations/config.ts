import { Locale } from './types'

export const defaultLocale = 'en' as const

export const locales = ['en', 'fr'] as const

export const languageNames = {
  en: 'English',

  fr: 'Français',
}
// TODO: remove this
export const translateLanguageNames = (currentLocale: Locale, language) => {
  const dict = {
    en: {
      en: 'English',
      fr: 'French',
    },
    fr: {
      en: 'Anglais',
      fr: 'Français',
    },
  }
  return dict[currentLocale][language]
}
