import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ...mdsvexConfig.extensions],

    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            defaults: {
                script: 'typescript',
                style: 'postcss',
            },
            postcss: true,
            preserve: ['ld+json'],
        }),
        mdsvex(mdsvexConfig)
    ],

    // kit: {
    //     adapter: adapter(),
    //     target: '#svelte',
    //     vite: {
    //         plugins: [imagetools({ force: true })],
    //     },
    //     trailingSlash: 'ignore',
    // }
};

export default config;
