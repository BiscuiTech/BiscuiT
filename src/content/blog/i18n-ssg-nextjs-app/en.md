---
published: true
publishedOn: "2020-06-15"
lastModifiedOn: ""
title: "i18n with Next.js and full SSG support"
author: "BiscuiTech"
excerpt: "Having a React app with localization in multiple languages is really, really hard. But is there a better way?"
coverImage:
  coverUrl: "https://images.unsplash.com/photo-1508633069371-a735f885a1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
  url: "https://images.unsplash.com/photo-1508633069371-a735f885a1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
  accreditation: "Matthew Brodeur"
canonicalLinks:
  - "https://dev.to/biscuitech/i18n-with-next-js-and-full-ssg-support-2aih"
---

## The Issue

If you tried to look around for _simple_ i18n integrations of `next.js`, you'd soon realized that it just doesn't exist. The reference in the next.js example directory managed by Vercel (formely known as Zeit) points to an integration using a _custom server_. Although it's a nice display of next's different capabilities, we want to statically generate the html on the server - Server Side Generation. Using a custom server makes all serverless and static optimizations impossible.

So let's dive in using Next.js 9.3 Server-Side Generation (SSG) and 100% serverless.
You can also jump straight into code by heading into [this repo.](https://github.com/BiscuiTech/i18n-typescript-app)

## The Setup

First, create a folder to work with, then initialize your app with next's create app.

```shell
npm init next-app --example with-typescript with-typescript-app
```

We're using TypeScript in this example because it's a nicer approach when working with the `Locale` type. More on that soon.

`cd` in the newly created folder and run `npm run dev`. You should have an app looking like this:

<img
  src="/content/blog/images/2020-05-04-17-25-39-image.png"
  alt="What the app generated from npm looks like"
/>

Now that we have a barebones app up and running, let's dig into the meat of the subject. And for good mesure, move your files inside your src folder.

### Translations Types & Config

Create a folder in /src called translations. In it, create a types.ts file.

```typescript
// ./src/translations/types.ts
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
// ./src/translations/config.ts
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

Let's add those types to the global compiler:

```typescript
// ./next-env.d.ts
/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="translations/types" />
```

Next add a getInitialLocale.ts

```typescript
// ./src/translations/getInitialLocale.ts
import { defaultLocale } from "./config";
import { Locale, isLocale } from "./types";

export function getInitialLocale(): Locale {
  const localSetting = localStorage.getItem("locale");
  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  }

  const [browserSetting] = navigator.language.split("-");
  if (isLocale(browserSetting)) {
    return browserSetting;
  }

  return defaultLocale;
}
```

Finally, add your localized strings here:

```typescript
// ./src/translations/locales/index.ts
import en from "./en";
import fr from "./fr";

export default {
  fr,
  en,
};

//./src/translations/locales/en/index.ts
import common from "./common";
import home from "./home";

export default {
  common,
  home,
};

// ./src/translations/locales/en/home.ts
const home = {
  hello: "Hello Next.js 👋",
};

export default home;

// ./src/translations/locales/en/common.ts
const common = {
  navHome: "Home",
  navAbout: "About",
  navUsersList: "Users List",
  navUsersAPI: "Users API",
};

export default common;
```

Before proceeding, add those files in another language while keeping the same structure. If you're looking for a quick copy-paste, take <a href="https://github.com/BiscuiTech/i18n-typescript-app/tree/master/src/translations/locales">these</a>.

### The Context

Next up, we need to create a react context. This will server as the focal point of all the text strings the app will load on each page.

Inside your /src folder, create a context folder and a LanguageContext.tsx file.

```tsx
// ./src/context/LanguageContext.tsx
import React from "react";
import { useRouter } from "next/router";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { isLocale, Localization, Locale } from "../translations/types";
import defaultStrings from "../translations/locales/en";
import locales from "../translations/locales";

/**
 * Language Context
 */

interface ContextProps {
  readonly localization: Localization;
  readonly setLocale: (localization: Localization) => void;
}

export const LanguageContext = React.createContext<ContextProps>({
  localization: {
    locale: "en", // default lang
    translations: defaultStrings.common, // default translations TODO: what to do here?
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
  const [localizationState, setLocalizationState] = React.useState({
    locale: localization?.locale,
    translations: localization?.translations,
    namespace: localization?.namespace,
  });
  const [getStoredLocale, setStoredLocale] = useLocalStorage("locale");
  const { query } = useRouter();
  React.useEffect(() => {
    if (localizationState.locale !== getStoredLocale) {
      setStoredLocale(localizationState.locale);
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

export const getLocalizationProps = (ctx, namespace) => {
  const lang: Locale = (ctx.params?.lang as Locale) || "fr";
  const locale: any = locales[lang];
  const strings: any = locale[namespace];
  const translations = {
    common: locales[lang].common,
    ...strings,
  };
  return {
    locale: ctx.params?.lang || "en",
    translations,
    namespace,
  };
};
```

<div class="bubble bubble-question">
  <p>
    Some of this will feel hard to understand at first, but let's keep going and
    you'll grasp everything eventually. I promise!
  </p>
</div>

Alright, this is a big file. Let's break it down.
The context will hold an object called `localization` with the keys `locale`, `translations`and `namespace`.

- `locale` is the active language of the site. As a default, we're using 'en' for english.

- `translations` will hold all the text strings. As a default we're using the _common_ strings. Those will make sense later.

- `namespace` will serve as the key to dynamically fetch text strings. As a default, we're using `common`.

```tsx
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

This is the declaration and rendering portion. `React.FC` is the react's Type for Functional Component, to which we add `localization` as a type, previously created in our types.ts file. Next, let's add `useState`.

```tsx
export const LanguageProvider: React.FC<{ localization: Localiztion }> = ({
  localization,
  children,
}) => {
  const [localizationState, setLocalizationState] = React.useState({
    locale: localization?.locale,
    translations: localization?.translations,
    namespace: localization?.namespace,
  });
  return (
    <LanguageContext.Provider
      value={{ localization, setLocale: setLocalizationState }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
```

Here we add the state to the context. We will play with this state throughout the app!

```tsx
// ./src/context/LanguageContext.tsx
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
    if (localizationState.locale !== getStoredLocale) {
      setStoredLocale(localizationState.locale);
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

And finally, we set and get a LocalStorage key of "locale". This will mainly serve as a lower level mechanism to know which locale the user is in. By setting a LocaleStorage, we can also write it to memory for future visits by our users.

You'll also note there's two useEffects. The first one syncs our LocaleStorage from our state each time the state mutates. The second one writes to state the localized strings and mutates every time it changes. It also checks for errors by making sure the query from `router` is in fact a supported language. Note: if it's not a supported language, it'll simply revert to `en`.

Before moving on, move all your pages that are not in /api in a new folder called [lang]. Next.js will then take the lang query prop and pass it along. Afterwards, create a new index.ts at the root of the pages folder.

```tsx
import React from "react";
import Head from "next/head";
import { getInitialLocale } from "../translations/getInitialLocale";

const Index: React.FC = () => {
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
```

### The Hooks

Last bit of setup is to add some hooks.

```typescript
// ..src/hooks/useLocalStorage.ts
import { useState } from "react";

export function useLocalStorage(key: string, initialValue: any = "") {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
```

This hook is simply to sync a key-value pair into local storage. It returns a setter (setValue) and getter (storedValue) function - much like any hook.

```typescript
// ..src/hooks/useTranslation.ts
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function useTranslation() {
  const { localization } = useContext(LanguageContext);
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
```

This one is the hook that will be used all throughout the application. It uses the context holding all the strings and returns them to be used. It also supports the namespace functinality.

## getStaticPaths & getStaticProps

So, now we have all this setup, how in the hell do we get localized strings?!

Well I'm glad you asked! We load it simply by calling a sort of API. And in Next.js, how do we call an API? On a per-page basis in `getStaticProps`!

```tsx {4-9,14,23,26-33,35-42}
// ./src/pages/index.tsx
import Link from "next/link";
import Layout from "../../components/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  getLocalizationProps,
  LanguageProvider,
} from "../../context/LanguageContext";
import { Localization } from "../../translations/types";

const IndexPage: NextPage<{
  localization: Localization;
}> = ({ localization }) => (
  <LanguageProvider localization={localization}>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  </LanguageProvider>
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, "home");
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["en", "fr"].map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};

export default IndexPage;
```

Easy as 1,2,3! As a side note, you also need to tell next.js to build all the pages of your locales. You can do that in getStaticPaths. You can read more on getStaticPaths here: [nextjs.org/docs](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)

I highly suggest you inspect the repo of my website [here](https://github.com/BiscuiTech/BiscuiT). You'll get a better grip of how all the files work together.

Getting back to our pages/index.ts, you'll notice we also modified the page function. We added the Provider and passed the translations objet down. This is the last setup needed. The following steps are simply how to call the hook to fetch the strings.

Simple, isn't it? With this method, the only code actually modifying your app (besides the setup itself) is the page file.

## useTranslate

Now that we have the props ready to go, we simply need to use them inside our components. We're going to use the hook that fetches the translations props and make them available to us. If you understand how Context works, this is a piece of cake. Note that we need to move our rendering to a components because direct children cannot access the Context.

```tsx {8,20,23}
// ./src/pages/[lang]/index.tsx
const IndexPage: NextPage<{
  localization: Localization;
}> = ({ localization }) => {
  return (
    <LanguageProvider localization={localization}>
      <Layout title="Home | Next.js + TypeScript Example">
        <Home />
      </Layout>
    </LanguageProvider>
  );
};

// ./src/components/Home.tsx
import React from "react";
import useTranslation from "../hooks/useTranslation";
import Link from "next/link";

const Home = () => {
  const { t, locale } = useTranslation();
  return (
    <>
      <h1>{t("header")}</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  );
};

export default Home;
```

## LocaleSwitcher

Everything works and the correct strings render, but switching locale by manually punching the letters in url is tedious at best. We need to create a locale swticher component. It's really easy. Let's do it!

```tsx
import React from "react";
import { useRouter } from "next/router";
import { locales } from "../translations/config";
import useTranslation from "../hooks/useTranslation";

const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const handleLocaleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const targetLang = e.target.value;
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${targetLang}`)
      );
    },
    [router]
  );
  const { t, locale } = useTranslation();
  return (
    <div>
      <label className="language-switcher">
        {t("common")["localeSwitcher"]}
        <select onChange={handleLocaleChange} defaultValue={locale}>
          {locales.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default LocaleSwitcher;
```

Let's also add the new string we used here to ours files in `translations/locales/[lang]/common.ts`

```typescript {7}
// ./src/translations/locales/en/common.ts
const common = {
  navHome: "Home",
  navAbout: "About",
  navUsersList: "Users List",
  navUsersAPI: "Users API",
  localeSwitcher: "Language",
};

export default common;
```

And now we're finally done - for real! Feel free to add strings in your locales directory and replace the rest of the text in the app.

> Special thanks to [Filip Wojciechowski](https://twitter.com/filipcodes) who initially came up with this idea without the static generations and namespace functionalities. You can find his blog [here](https://w11i.me/how-to-build-multilingual-website-in-next-js).

## Looking forward

One caveat of this method is that your useTranslate hook needs to be called inside a component and not inside the page directly. You could simply move the ContextProvider up the chain and into your \_app if you so desire.

There are talks of a native **next.js** i18n implementation, so the future of localized apps is looking bright! In the meantime, take a look at this PR: https://github.com/vercel/next.js/pull/14454
