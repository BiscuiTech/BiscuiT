import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
  logLevel: 'info',
  plugins: [imagetools(), sveltekit()],
  server: {
    fs: {
      strict: false
    }
  },

};

export default config;