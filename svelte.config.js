import preprocess from 'svelte-preprocess';
// import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".svx", ".md"],
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        // mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] }),
        preprocess({
            postcss: true,
            preserve: ['ld+json'],
        }),
    ],
};

export default config;
