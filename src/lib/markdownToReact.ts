import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

export default async function markdownToReact(md: string) {
  return await unified().use(parse).use(remark2react).processSync(md);
}
