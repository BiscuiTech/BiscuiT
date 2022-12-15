import {
  readdirSync,
  readFileSync
} from 'fs';
import frontMatter from 'front-matter';
import readingTime from 'reading-time';
import type { BlogAttributes, Blog } from '$lib/types';

export function getPosts() {

  const posts: Blog[] =
    readdirSync('./src/content/blog')
      .map((postFilename) => {
        const postContent = readFileSync(`./src/content/blog/${postFilename}/en.md`, {
          encoding: 'utf8',
        });

        const postFrontMatter = frontMatter<BlogAttributes>(postContent);
        const readingTimeDuration = readingTime(postFrontMatter.body).text;

        return {
          ...postFrontMatter.attributes,
          source: postFrontMatter.body,
          readingTime: readingTimeDuration,
          slug: postFilename,
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