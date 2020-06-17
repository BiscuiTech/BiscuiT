import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Locale } from "../translations/types";
import { locales } from "../translations/config";

const postsDirectory = join(process.cwd(), "src/content/blog");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const localizedPosts = locales.reduce((acc, lang) => {
    try {
      const fullPath = join(postsDirectory, `${realSlug}/${lang}.mdx`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const items = {};
      // Ensure only the minimal needed data is exposed
      fields.forEach((field) => {
        if (field === "slug") {
          items[field] = realSlug;
        }
        if (field === "content") {
          items[field] = content;
        }

        if (data[field]) {
          items[field] = data[field];
        }
      });
      return { ...acc, [lang]: { ...items } };
    } catch (error) {
      return acc;
    }
  }, []);
  return localizedPosts;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  return slugs
    .flatMap((slug) => getPostBySlug(slug, fields))
    .sort((a: any, b: any) => b.date - a.date);
}

export function getCV(fields = [], lang = "en") {
  const fullPath = join(process.cwd(), "src/content/cv", `${lang}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export const getCurrentPost = (post, locale) => {
  if (post[locale]?.slug) {
    return post[locale];
  } else {
    const filteredLocales = locales.filter((lang) => lang != locale);
    const filteredPost = filteredLocales.reduce((acc, el) => {
      if (post[el]?.slug) {
        return {
          ...acc,
          ...post[el],
        };
      }
      return acc;
    }, {});
    return filteredPost;
  }
};
