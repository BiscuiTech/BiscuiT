import fs from 'fs';
import frontMatter from 'front-matter';
import marked from 'marked';
import Prism from 'prismjs';
import 'prism-svelte';
import loadLanguages from 'prismjs/components/index.js';
import readingTime from 'reading-time';

loadLanguages(['shell', 'markdown', 'json', 'tsx', 'ts', 'js', "typescript"]);

const posts = fs
  .readdirSync('./src/content/blog')
  .map((postFilename) => {
    const postContent = fs.readFileSync(`./src/content/blog/${postFilename}/en.mdx`, {
      encoding: 'utf8',
    });
    const postFrontMatter = frontMatter(postContent);

    const renderer = new marked.Renderer();

    renderer.code = (source, lang: string) => {
      const langCode = lang.split(" ")[0];
      // const highlightLines = lang.split(" ")[1];
      const html = source.split('\n').map((line, i) => {
        const html = Prism.highlight(line, Prism.languages[langCode], langCode);
        return `<div class="token-line border-1-2 border-transparent pl-2 style="color:#F8F8F2"><span style="display:inline-block;width:2em;user-select:none;opacity:0.3">${i}</span>${html}</div>`
      }).join("")
      return `<pre class='language-${langCode}'><code class='language-${langCode}'>${html}</code></pre>`;
    };

    const html = marked(postFrontMatter.body, { renderer });

    const readingTimeDuration = readingTime(postFrontMatter.body).text;

    return {
        ...postFrontMatter.attributes,
        html: html,
        readingTime: readingTimeDuration,
        slug: postFilename
    };
  });

const modifiedPosts = posts
  .filter((post) => !post.hidden)
  .sort((a, b) =>
    new Date(a.creationDate).getTime() > new Date(b.creationDate).getTime()
      ? -1
      : new Date(a.creationDate).getTime() < new Date(b.creationDate).getTime()
      ? 1
      : 0,
  );

export default modifiedPosts;