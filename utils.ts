import fs from 'fs'

export const GetMDXContent = async (slug) => {
  return await fs.readFileSync(`./src/content/blog/${slug}/${slug}.mdx`, {
    encoding: "utf-8"
  });
}