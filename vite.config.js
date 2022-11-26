import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import mdx from '@mdx-js/rollup'

/** @type {import('vite').UserConfig} */
const config = {
  logLevel: 'info',
  plugins: [imagetools(), sveltekit(), mdx({ jsxImportSource: 'svelte-jsx'/* , remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter] */ })],
  server: {
    fs: {
      strict: false
    }
  },

};

export default config;