---
published: "true"
title: "i18n with Next.js and full SSG support"
author: "BiscuiTech"
date: "2020-05-06"
excerpt: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
coverImage: "https://images.unsplash.com/photo-1508633069371-a735f885a1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
imageAccreditation: "Matthew Brodeur"
---

# i18n with Next.js and full SSG support

## The Issue

If you tried to look around for _simple_ i18n integrations of `next.js`, you'd soon realized that it just doesn't exist. The reference in the next.js example directory managed by Vercel (formely known as Zeit) points to an integration using a _custom server_. Although it's a nice display of next's different capabilities, we want to statically generate the html on the server - Server Side Generation. Using a custom server makes all serverless and static optimizations impossible.

So let's dive in using Next.js 9.3 Server-Side Generation (SSG) and 100% serverless.

## The Setup

First, create a folder to work with. Then, initialize your app with next's cra.

```shell
npm init next-app --example with-typescript with-typescript-app
```

We're using TypeScript in this example because it's a nicer approach when working with the `Locale` type. More on that soon.

`cd` in the newly created folder and run `npm run dev`. You should have an app looking like this:

![](/content/blog/images/2020-05-04-17-25-39-image.png)

Now that we have a barebones app up and running, let's dig into the meat of the subject.

## The Types

Create a folder in /src called translations. In it, create a types.ts file.

```typescript
// ../src/translations/types.ts
import { locales } from "./config";

export type Locale = typeof locales[number];

export interface Translations {
  [key: string]: string;
}

export type Strings = {
  [key in Locale]: Translations;
};

export type Localization = {
  locale: Locale;
  translations: Translations;
  namespace: string;
};

export function isLocale(tested: string): tested is Locale {
  return locales.some((locale) => locale === tested);
}
```

Then, create a config.ts.

```typescript
// ../src/translations/config.ts
export const defaultLocale = "en" as const;

export const locales = ["en", "fr"] as const;

export const languageNames = {
  en: "English",
  fr: "Français",
};
```

Those files are self explanatory, but quickly it goes like this:

- config.ts serves as the constants used throughout the Context.

- The types will help us populate the Context and the localizations instances correctly.

## The Context

Next up, we need to create a react context. This will server as the focal point of all the text strings the app will load on each page.

Inside your /src folder, create a context folder and a LanguageContext.tsx file.

```typescript
// ../src/context/LanguageContext.tsx
export const LanguageContext = React.createContext<ContextProps>({
  localization: {
    locale: "en", // default lang
    translations: strings.common, // default translations
    namespace: "common", // default namespace
  },
  setLocale: () => null,
});
```

The context will hold an object called `localization` with the keys `locale`, `translations`and `namespace`.

- `locale` is the will the active language of the site. As a default, we're using 'en' for english.

- `translations` will hold all the text strings. As a default we're using the _common_ strings. Those will make sense later.

- `namespace` will serve as the key to dynamically fetch text strings. As a default, we're using `common`.

A context is nothing without a provider to ... well, provide it! Let's add it to our file.

```typescript
// ../src/context/LanguageContext.tsx
export const LanguageProvider: React.FC<{ localization: Localization }> = ({
  localization,
  children,
}) => {
  const [localizationState, setLocalizationState] = React.useState({
    locale: localization?.locale,
    translations: localization?.translations,
    namespace: localization?.namespace,
  });
  const [getStoredLocale, setStoredLocale] = useLocalStorage("locale");
  const { query } = useRouter();
  React.useEffect(() => {
    if (localizationState !== getStoredLocale) {
      setStoredLocale(localizationState);
    }
  }, [localizationState]);

  React.useEffect(() => {
    if (
      typeof query.lang === "string" &&
      isLocale(query.lang) &&
      localization?.locale !== query.lang
    ) {
      setLocalizationState({
        locale: localization?.locale,
        translations: localization?.translations,
        namespace: localization?.namespace,
      });
    }
  }, [query.lang, localizationState]);

  return (
    <LanguageContext.Provider
      value={{ localization, setLocale: setLocalizationState }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
```

Alright, this is a big file. Let's break it down.

```typescript
export const LanguageProvider: React.FC<{ localization: Localiztion }> = ({
  localization,
  children,
}) => {
  return (
    <LanguageContext.Provider
      value={{ localization, setLocale: setLocalizationState }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
```

This is the declaration and rendering portion. `React.FC` is the react's Type for Functional Component, to which we add `localization` as a type, previously created in our types.ts file. Next, let's add the `useState`.

```typescript
export const LanguageProvider: React.FC<{ localization: Localiztion }> = ({
  localization,
  children,
}) =>
const [localizationState, setLocalizationState] = React.useState({
    locale: localization?.locale,
    translations: localization?.translations,
    namespace: localization?.namespace,
  });
{
    return (
    <LanguageContext.Provider
      value={{ localization, setLocale: setLocalizationState }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
```

## getStaticPaths & getStaticProps

## useTranslate
