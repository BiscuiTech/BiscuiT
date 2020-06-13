import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Locale } from "../translations/types";

const postsDirectory = join(process.cwd(), "src/content/blog");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = [], locale?: Locale[]) {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const localizedPosts = locale.map((lang) => {
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

    return items;
  });
  return localizedPosts;
}

export function getAllPosts(fields = [], locale: Locale[]) {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug, fields, locale))
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
