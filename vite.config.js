import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { BundlePrismjs } from "rollup-plugin-prismjs";


/** @type {import('vite').UserConfig} */
const config = {
  logLevel: 'info',
  plugins: [imagetools(), sveltekit(), BundlePrismjs({
    languages: [
      "shell",
      "tsx",
      "typescript",
      "javascript",
      "markup",
      "css"
    ],
    css: true,
    theme: "dracula"
  })],
  server: {
    fs: {
      strict: false
    }
  },

};

export default config;
