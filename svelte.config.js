import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      "$locales": "./src/locales",
    },
  },
  extensions: [".svelte", ".svx", ".md"],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
      preserve: ['ld+json'],
      babel: {
        "plugins": [
          ["prismjs", {
            "languages": [
              "shell",
              "tsx",
              "typescript",
              "javascript",
              "markup",
              "css"
            ],
            "plugins": ["line-numbers"],
            // "theme": "twilight",
            // "css": true
          }]
        ]
      }
    }),
  ],
};

export default config;

