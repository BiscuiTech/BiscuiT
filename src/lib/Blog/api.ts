import {
  readdirSync,
  readFileSync
} from 'fs';
import frontMatter from 'front-matter';
// import { marked } from 'marked';
// import 'prism-svelte';
import readingTime from 'reading-time';
import type { BlogAttributes, Blog } from '$lib/types';
// import Prism from 'prismjs';

// const {
//   loadLanguages,
//   highlight,
//   languages
// } = Prism

// loadLanguages(['shell', 'markdown', 'json', 'tsx', 'ts', 'js', "typescript", "rust"]);


export function getPosts() {

  const posts: Blog[] =
    readdirSync('./src/content/blog')
      .map((postFilename) => {
        const postContent = readFileSync(`./src/content/blog/${postFilename}/en.mdx`, {
          encoding: 'utf8',
        });

        const postFrontMatter = frontMatter<BlogAttributes>(postContent);

        // const renderer = new marked.Renderer();

        // renderer.code = (source, lang: string) => {
        //   const langCode = lang.split(" ")[0];
        //   // const highlightLines = lang.split(" ")[1];
        //   const html = source.split('\n').map((line, i) => {
        //     const html = highlight(line, languages[langCode], langCode);
        //     return `<div class="token-line border-1-2 border-transparent pl-2 style="color:#F8F8F2"><span style="display:inline-block;width:2em;user-select:none;opacity:0.3">${i}</span>${html}</div>`
        //   }).join("")
        //   return `<pre class='language-${langCode}'><code class='language-${langCode}'>${html}</code></pre>`;
        // };

        // const html = marked(postFrontMatter.body, { renderer });

        const readingTimeDuration = readingTime(postFrontMatter.body).text;

        return {
          ...postFrontMatter.attributes,
          html: postFrontMatter.body,
          readingTime: readingTimeDuration,
          slug: postFilename
        };
      });



  const modifiedPosts = posts
    .filter((post) => post.published)
    .sort((a, b) =>
      new Date(a.publishedOn).getTime() > new Date(b.publishedOn).getTime()
        ? -1
        : new Date(a.publishedOn).getTime() < new Date(b.publishedOn).getTime()
          ? 1
          : 0,
    );
  return modifiedPosts
}